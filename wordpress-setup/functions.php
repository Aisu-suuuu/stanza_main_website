<?php
/**
 * Stanzasoft WordPress Functions
 *
 * Add the code below to your theme's functions.php file
 * (Appearance > Theme File Editor > functions.php)
 * or use a plugin like "Code Snippets" to add it.
 */

/**
 * 1. CORS Headers — Allow Next.js frontend to call WP REST API
 */
add_action('rest_api_init', function () {
    remove_filter('rest_pre_serve_request', 'rest_send_cors_headers');
    add_filter('rest_pre_serve_request', function ($value) {
        $allowed_origins = [
            'https://stanzasoft.ai',
            'https://www.stanzasoft.ai',
            'http://localhost:3000',
        ];

        $origin = get_http_origin();
        if (in_array($origin, $allowed_origins, true)) {
            header('Access-Control-Allow-Origin: ' . $origin);
            header('Access-Control-Allow-Methods: GET, OPTIONS');
            header('Access-Control-Allow-Headers: Content-Type, Authorization');
            header('Access-Control-Allow-Credentials: true');
        }

        return $value;
    });
});

/**
 * 2. On-Demand Revalidation Webhook
 *    Fires whenever a post/page/CPT is published or updated.
 *    Sends a POST request to the Next.js revalidation endpoint.
 */
add_action('save_post', function ($post_id, $post, $update) {
    // Skip autosaves and revisions
    if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) return;
    if (wp_is_post_revision($post_id)) return;

    // Only fire for published posts
    if ($post->post_status !== 'publish') return;

    // Get the secret from wp-config.php
    $secret = defined('NEXTJS_REVALIDATION_SECRET') ? NEXTJS_REVALIDATION_SECRET : '';
    if (empty($secret)) return;

    // Your Vercel deployment URL
    $revalidate_url = 'https://stanzasoft.ai/api/revalidate';

    // Send the webhook
    wp_remote_post($revalidate_url, [
        'timeout' => 5,
        'headers' => [
            'Content-Type'         => 'application/json',
            'x-revalidation-secret' => $secret,
        ],
        'body' => wp_json_encode([
            'post_type' => $post->post_type,
            'slug'      => $post->post_name,
            'post_id'   => $post_id,
        ]),
    ]);
}, 10, 3);

/**
 * 3. Show ACF fields in REST API for all custom post types
 *    (Backup — the "ACF to REST API" plugin handles this,
 *     but this ensures it works even without the plugin.)
 */
add_filter('acf/settings/rest_api_format', function () {
    return 'standard';
});

/**
 * 4. Increase REST API per_page limit for CPTs
 *    Allows fetching up to 100 items in one request.
 */
add_filter('rest_post_query', function ($args, $request) {
    $per_page = $request->get_param('per_page');
    if ($per_page && intval($per_page) <= 100) {
        $args['posts_per_page'] = intval($per_page);
    }
    return $args;
}, 10, 2);
