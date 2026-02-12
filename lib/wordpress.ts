const WP_API_URL = process.env.WORDPRESS_API_URL || 'https://cms-wp.stanzasoft.ai/wp-json/wp/v2'

interface FetchOptions {
  revalidate?: number
  tags?: string[]
}

export async function wpFetch<T>(
  endpoint: string,
  options: FetchOptions = {}
): Promise<T | null> {
  const { revalidate = 3600, tags } = options

  try {
    const url = `${WP_API_URL}${endpoint}`
    const res = await fetch(url, {
      next: {
        revalidate,
        ...(tags ? { tags } : {}),
      },
    })

    if (!res.ok) {
      console.error(`WordPress API error: ${res.status} for ${url}`)
      return null
    }

    return await res.json()
  } catch (error) {
    console.error(`WordPress fetch error for ${endpoint}:`, error)
    return null
  }
}

export function parseNewlineList(text: string | undefined | null): string[] {
  if (!text) return []
  return text
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean)
}

export function stripHtml(html: string): string {
  return decodeHtmlEntities(html.replace(/<[^>]*>/g, '').trim())
}

export function decodeHtmlEntities(text: string): string {
  return text
    .replace(/&#(\d+);/g, (_, num) => String.fromCharCode(parseInt(num, 10)))
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&apos;/g, "'")
}
