import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy | Stanzasoft',
  description: 'Privacy Policy for Stanza Soft India Private Limited - Learn how we collect, use, and protect your personal information.',
}

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground text-center">
            Privacy <span className="text-primary">Policy</span>
          </h1>
          <p className="text-muted text-center mt-4">Last updated: 2025</p>
        </div>
      </section>

      {/* Content */}
      <section className="pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-foreground/80 leading-relaxed text-base">
              At <strong className="text-foreground">Stanza Soft India Private Limited</strong>, we are committed to protecting your personal information and ensuring
              transparency in how we collect, use, and safeguard your data. This Privacy Policy explains what information we
              collect, how we use it, and the rights you have regarding your personal data.
            </p>

            {/* Section 1 */}
            <div className="mt-12">
              <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
                1. <span className="text-primary">Information We Collect</span>
              </h2>
              <p className="text-foreground/80 mb-4">We may collect the following types of information:</p>
              <ul className="space-y-3 list-none pl-0">
                <li className="flex items-start gap-3 text-foreground/80">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                  <span><strong className="text-foreground">Personal Information:</strong> Name, email address, phone number, company details, and other information you provide through forms or communication.</span>
                </li>
                <li className="flex items-start gap-3 text-foreground/80">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                  <span><strong className="text-foreground">Usage Data:</strong> IP address, browser details, device information, pages visited, time spent on the website, and interactions.</span>
                </li>
                <li className="flex items-start gap-3 text-foreground/80">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                  <span><strong className="text-foreground">Cookies & Tracking Technologies:</strong> To enhance your browsing experience and analyze website performance.</span>
                </li>
              </ul>
            </div>

            {/* Section 2 */}
            <div className="mt-12">
              <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
                2. <span className="text-primary">How We Use Your Information</span>
              </h2>
              <p className="text-foreground/80 mb-4">We use your information to:</p>
              <ul className="space-y-3 list-none pl-0">
                <li className="flex items-start gap-3 text-foreground/80">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                  <span>Provide and improve our services</span>
                </li>
                <li className="flex items-start gap-3 text-foreground/80">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                  <span>Respond to inquiries or support requests</span>
                </li>
                <li className="flex items-start gap-3 text-foreground/80">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                  <span>Personalize the user experience</span>
                </li>
                <li className="flex items-start gap-3 text-foreground/80">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                  <span>Send updates, newsletters, and promotional communication (only with your consent)</span>
                </li>
                <li className="flex items-start gap-3 text-foreground/80">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                  <span>Maintain website security and monitor usage</span>
                </li>
              </ul>
            </div>

            {/* Section 3 */}
            <div className="mt-12">
              <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
                3. <span className="text-primary">Sharing Your Information</span>
              </h2>
              <p className="text-foreground/80 mb-4">
                We <strong className="text-foreground">do not sell</strong> your personal information. We may share data with:
              </p>
              <ul className="space-y-3 list-none pl-0">
                <li className="flex items-start gap-3 text-foreground/80">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                  <span>Trusted third-party service providers (e.g., analytics, hosting)</span>
                </li>
                <li className="flex items-start gap-3 text-foreground/80">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                  <span>Legal authorities if required by law</span>
                </li>
              </ul>
            </div>

            {/* Section 4 */}
            <div className="mt-12">
              <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
                4. <span className="text-primary">Data Security</span>
              </h2>
              <p className="text-foreground/80">
                We implement industry-standard security practices to protect your data from unauthorized access, alteration, or disclosure.
              </p>
            </div>

            {/* Section 5 */}
            <div className="mt-12">
              <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
                5. <span className="text-primary">Your Rights</span>
              </h2>
              <p className="text-foreground/80 mb-4">Depending on your location, you may have rights to:</p>
              <ul className="space-y-3 list-none pl-0">
                <li className="flex items-start gap-3 text-foreground/80">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                  <span>Access, correct, or delete your personal data</span>
                </li>
                <li className="flex items-start gap-3 text-foreground/80">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                  <span>Withdraw consent for marketing communication</span>
                </li>
                <li className="flex items-start gap-3 text-foreground/80">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                  <span>Request restrictions on how your data is processed</span>
                </li>
              </ul>
            </div>

            {/* Section 6 */}
            <div className="mt-12">
              <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
                6. <span className="text-primary">Third-Party Links</span>
              </h2>
              <p className="text-foreground/80">
                Our website may contain links to external sites. We are not responsible for the privacy practices of those websites.
              </p>
            </div>

            {/* Section 7 */}
            <div className="mt-12">
              <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
                7. <span className="text-primary">Changes to This Policy</span>
              </h2>
              <p className="text-foreground/80">
                We may update this Privacy Policy periodically. Updates will be posted on this page.
              </p>
            </div>

            {/* Contact Box */}
            <div className="mt-12 p-6 rounded-xl bg-card border border-border/50">
              <p className="text-foreground/80">
                If you have questions, contact us at:{' '}
                <a
                  href="mailto:hello@stanzasoft.com"
                  className="text-primary hover:underline font-medium"
                >
                  hello@stanzasoft.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
