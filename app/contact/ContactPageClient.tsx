'use client'

import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Header } from '@/components/layout'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Building2,
  Globe,
} from 'lucide-react'

interface ContactPageClientProps {
  pageData?: {
    hero_badge?: string
    hero_heading?: string
    hero_subheading?: string
    form_heading?: string
    form_subheading?: string
    form_success_message?: string
    email?: string
    phone?: string
    faq_cta_heading?: string
    faq_cta_paragraph?: string
  }
  locations?: {
    title: string
    country: string
    address: string
    timezone: string
  }[]
}

// Default office locations
const defaultLocations = [
  {
    city: 'San Francisco',
    country: 'USA',
    address: 'Bay Area, California',
    timezone: 'PST (UTC-8)',
    icon: Building2,
  },
  {
    city: 'Hyderabad',
    country: 'India',
    address: 'Telangana, India',
    timezone: 'IST (UTC+5:30)',
    icon: Globe,
  },
]

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.4, 0.25, 1],
    },
  },
}

export default function ContactPageClient({ pageData, locations }: ContactPageClientProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const emailAddress = pageData?.email || 'hello@stanzasoft.com'
  const phoneNumber = pageData?.phone || '+91 9000888055'
  const phoneHref = 'tel:' + phoneNumber.replace(/[\s()-]/g, '')

  // Contact information
  const contactInfo = useMemo(
    () => [
      {
        icon: Mail,
        label: 'Email',
        value: emailAddress,
        href: `mailto:${emailAddress}`,
      },
      {
        icon: Phone,
        label: 'Phone',
        value: phoneNumber,
        href: phoneHref,
      },
    ],
    [emailAddress, phoneNumber, phoneHref]
  )

  // Resolve locations: use WP locations if provided, otherwise defaults
  const resolvedLocations = useMemo(() => {
    if (locations && locations.length > 0) {
      return locations.map((loc) => ({
        city: loc.title,
        country: loc.country,
        address: loc.address,
        timezone: loc.timezone,
      }))
    }
    return defaultLocations.map((loc) => ({
      city: loc.city,
      country: loc.country,
      address: loc.address,
      timezone: loc.timezone,
    }))
  }, [locations])

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission (UI only - no backend)
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setSubmitSuccess(true)
    setFormData({ name: '', email: '', company: '', phone: '', message: '' })

    // Reset success message after 5 seconds
    setTimeout(() => setSubmitSuccess(false), 5000)
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent" />
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full opacity-30"
            style={{
              background:
                'radial-gradient(circle at center, #814AC8 0%, transparent 70%)',
              filter: 'blur(100px)',
            }}
          />

          <div className="container-custom relative z-10">
            <motion.div
              className="max-w-3xl mx-auto text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.span
                className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-primary bg-primary/10 rounded-full border border-primary/20"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1, duration: 0.4 }}
              >
                {pageData?.hero_badge || 'Contact Us'}
              </motion.span>
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                {pageData?.hero_heading ? (
                  <span dangerouslySetInnerHTML={{ __html: pageData.hero_heading }} />
                ) : (
                  <>
                    Get in{' '}
                    <span className="gradient-text">Touch</span>
                  </>
                )}
              </motion.h1>
              <motion.p
                className="text-lg md:text-xl text-muted max-w-2xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                {pageData?.hero_subheading ||
                  "Have a project in mind or want to learn more about how we can help? We'd love to hear from you."}
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Contact Form & Info Section */}
        <section className="py-12 md:py-20">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
              {/* Contact Form - Takes up 3 columns */}
              <motion.div
                className="lg:col-span-3"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="bg-surface-card rounded-3xl border border-foreground/10 p-6 md:p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-2">
                    {pageData?.form_heading || 'Send us a message'}
                  </h2>
                  <p className="text-muted mb-8">
                    {pageData?.form_subheading ||
                      "Fill out the form below and we'll get back to you within 24 hours."}
                  </p>

                  {submitSuccess && (
                    <motion.div
                      className="mb-6 p-4 bg-green-500/10 border border-green-500/20 rounded-xl"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <p className="text-green-400 text-sm font-medium">
                        {pageData?.form_success_message ||
                          "Thank you for your message! We'll be in touch soon."}
                      </p>
                    </motion.div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                      {/* Name Field */}
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-foreground mb-2"
                        >
                          Name <span className="text-primary">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full bg-surface-card border border-foreground/10 rounded-xl px-4 py-3.5 text-foreground placeholder:text-muted-foreground focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-colors min-h-[48px]"
                          placeholder="Your name"
                        />
                      </div>

                      {/* Email Field */}
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-foreground mb-2"
                        >
                          Email <span className="text-primary">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full bg-surface-card border border-foreground/10 rounded-xl px-4 py-3.5 text-foreground placeholder:text-muted-foreground focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-colors min-h-[48px]"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                      {/* Company Field */}
                      <div>
                        <label
                          htmlFor="company"
                          className="block text-sm font-medium text-foreground mb-2"
                        >
                          Company
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full bg-surface-card border border-foreground/10 rounded-xl px-4 py-3.5 text-foreground placeholder:text-muted-foreground focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-colors min-h-[48px]"
                          placeholder="Company name"
                        />
                      </div>

                      {/* Phone Field */}
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-foreground mb-2"
                        >
                          Phone
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full bg-surface-card border border-foreground/10 rounded-xl px-4 py-3.5 text-foreground placeholder:text-muted-foreground focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-colors min-h-[48px]"
                          placeholder="+1 (555) 000-0000"
                        />
                      </div>
                    </div>

                    {/* Message Field */}
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Message <span className="text-primary">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={5}
                        className="w-full bg-surface-card border border-foreground/10 rounded-xl px-4 py-3.5 text-foreground placeholder:text-muted-foreground focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-colors resize-none"
                        placeholder="Tell us about your project or inquiry..."
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={cn(
                        'w-full sm:w-auto px-8 py-3.5 rounded-xl font-semibold min-h-[48px]',
                        'bg-gradient-to-r from-primary via-secondary to-accent',
                        'text-white shadow-lg shadow-primary/25',
                        'hover:shadow-xl hover:shadow-primary/30 hover:scale-[1.02]',
                        'disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100',
                        'transition-all duration-300',
                        'flex items-center justify-center'
                      )}
                    >
                      {isSubmitting ? (
                        <>
                          <span className="animate-spin mr-2">
                            <svg
                              className="w-5 h-5"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              />
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              />
                            </svg>
                          </span>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="w-4 h-4 ml-2" />
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </motion.div>

              {/* Contact Info Sidebar - Takes up 2 columns */}
              <motion.div
                className="lg:col-span-2 space-y-6"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {/* Contact Details Card */}
                <motion.div
                  variants={itemVariants}
                  className="bg-surface-card rounded-3xl border border-foreground/10 p-6"
                >
                  <h3 className="text-lg font-semibold text-foreground mb-6">
                    Contact Information
                  </h3>
                  <div className="space-y-4">
                    {contactInfo.map((info, index) => (
                      <a
                        key={index}
                        href={info.href}
                        className={cn(
                          'flex items-center gap-4 p-3 rounded-xl',
                          'hover:bg-primary/5 transition-colors duration-200 group'
                        )}
                      >
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <info.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm text-muted">{info.label}</p>
                          <p className="text-foreground font-medium group-hover:text-primary transition-colors">
                            {info.value}
                          </p>
                        </div>
                      </a>
                    ))}
                  </div>
                </motion.div>

                {/* Locations Cards */}
                <motion.div variants={itemVariants}>
                  <h3 className="text-lg font-semibold text-foreground mb-4 px-1">
                    Our Locations
                  </h3>
                  <div className="space-y-4">
                    {resolvedLocations.map((location, index) => (
                      <div
                        key={index}
                        className={cn(
                          'bg-surface-card rounded-3xl border border-foreground/10 p-5',
                          'hover:border-primary/50 transition-all duration-300'
                        )}
                      >
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <MapPin className="w-5 h-5 text-primary" />
                          </div>
                          <div className="flex-1">
                            <h4 className="text-foreground font-semibold mb-1">
                              {location.city}, {location.country}
                            </h4>
                            <p className="text-sm text-muted mb-2">
                              {location.address}
                            </p>
                            <p className="text-xs text-muted/70">
                              {location.timezone}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Map Placeholder */}
                <motion.div
                  variants={itemVariants}
                  className="bg-surface-card rounded-3xl border border-foreground/10 overflow-hidden"
                >
                  <div className="aspect-[4/3] relative bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20">
                    {/* Map placeholder with decorative elements */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                          <Globe className="w-8 h-8 text-primary" />
                        </div>
                        <p className="text-foreground font-medium">Global Presence</p>
                        <p className="text-sm text-muted mt-1">
                          Serving clients worldwide
                        </p>
                      </div>
                    </div>
                    {/* Decorative dots */}
                    <div className="absolute top-1/4 left-1/4 w-3 h-3 rounded-full bg-primary animate-pulse" />
                    <div className="absolute top-1/3 right-1/3 w-2 h-2 rounded-full bg-secondary animate-pulse delay-300" />
                    <div className="absolute bottom-1/3 left-1/3 w-2 h-2 rounded-full bg-accent animate-pulse delay-500" />
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ CTA Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container-custom">
            <motion.div
              className="text-center max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                {pageData?.faq_cta_heading || 'Have Questions?'}
              </h2>
              <p className="text-muted mb-6">
                {pageData?.faq_cta_paragraph ||
                  "Check out our frequently asked questions or reach out directly. We're here to help with any inquiries you may have."}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={`mailto:${emailAddress}`}
                  className={cn(
                    'inline-flex items-center gap-2 px-6 py-3 rounded-xl',
                    'bg-primary/10 text-primary font-medium',
                    'hover:bg-primary/20 transition-colors duration-200'
                  )}
                >
                  <Mail className="w-4 h-4" />
                  Email Us
                </a>
                <a
                  href={phoneHref}
                  className={cn(
                    'inline-flex items-center gap-2 px-6 py-3 rounded-xl',
                    'bg-card border border-border text-foreground font-medium',
                    'hover:border-primary/50 transition-colors duration-200'
                  )}
                >
                  <Phone className="w-4 h-4" />
                  Call Us
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  )
}
