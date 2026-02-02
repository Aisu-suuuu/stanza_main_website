'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react'
import { cn } from '@/lib/utils'

const quickLinks = [
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/solutions', label: 'Products' },
  { href: '/careers', label: 'Careers' },
]

const services = [
  { href: '/services/ai-ml', label: 'AI/ML' },
  { href: '/services/salesforce', label: 'Salesforce' },
  { href: '/services/cloud', label: 'Cloud' },
  { href: '/services/data-integration', label: 'Data Integration' },
]

const socialLinks = [
  { href: 'https://linkedin.com/company/stanzasoft', icon: Linkedin, label: 'LinkedIn' },
  { href: 'https://twitter.com/stanzasoft', icon: Twitter, label: 'Twitter' },
]

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 md:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Column 1: Logo & Tagline */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/images/logo-dark.png"
                alt="Stanzasoft"
                width={150}
                height={40}
                className="h-8 w-auto"
              />
            </Link>
            <p className="text-muted text-sm leading-relaxed mb-6">
              Empowering businesses with innovative technology solutions. We transform ideas into impactful digital experiences.
            </p>
            {/* Locations */}
            <div className="space-y-3">
              <div className="flex items-start gap-2 text-sm text-muted">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 text-primary" />
                <span>San Francisco, USA</span>
              </div>
              <div className="flex items-start gap-2 text-sm text-muted">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 text-primary" />
                <span>Hyderabad, India</span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted text-sm hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Services
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-muted text-sm hover:text-white transition-colors duration-200"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:hello@stanzasoft.com"
                  className="flex items-center gap-2 text-muted text-sm hover:text-white transition-colors duration-200"
                >
                  <Mail className="h-4 w-4 flex-shrink-0 text-primary" />
                  <span>hello@stanzasoft.com</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+919000888055"
                  className="flex items-center gap-2 text-muted text-sm hover:text-white transition-colors duration-200"
                >
                  <Phone className="h-4 w-4 flex-shrink-0 text-primary" />
                  <span>+91 9000888055</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-muted text-sm">
            © {new Date().getFullYear()} Stanzasoft. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  'inline-flex items-center justify-center w-9 h-9 rounded-full',
                  'bg-card hover:bg-primary/20',
                  'text-muted hover:text-primary transition-colors'
                )}
                aria-label={social.label}
              >
                <social.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
