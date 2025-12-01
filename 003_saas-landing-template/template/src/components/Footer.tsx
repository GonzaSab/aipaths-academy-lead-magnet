'use client'

import { Twitter, Linkedin, Github } from 'lucide-react'
import { useTranslation } from '@/hooks/useTranslation'
import siteContent from '@/content/site.json'

const navLinks = [
  { href: '#features', label: { en: 'Features', es: 'Características' } },
  { href: '#pricing', label: { en: 'Pricing', es: 'Precios' } },
  { href: '#faq', label: { en: 'FAQ', es: 'FAQ' } },
  { href: '#about', label: { en: 'About', es: 'Acerca' } },
  { href: '#contact', label: { en: 'Contact', es: 'Contacto' } },
]

const socialLinks = [
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Github, href: '#', label: 'GitHub' },
]

const legalLinks = [
  { href: '#privacy', label: { en: 'Privacy Policy', es: 'Política de Privacidad' } },
  { href: '#terms', label: { en: 'Terms of Service', es: 'Términos de Servicio' } },
]

export function Footer() {
  const { t } = useTranslation()
  const currentYear = new Date().getFullYear()

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-muted border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-brand-gradient mb-4">
              {siteContent.brand.name}
            </h3>
            <p className="text-muted-foreground mb-4 max-w-md">
              {t(siteContent.brand.description)}
            </p>
            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-all"
                    aria-label={social.label}
                  >
                    <Icon size={20} />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              {t({ en: 'Navigation', es: 'Navegación' })}
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleSmoothScroll(e, link.href)}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {t(link.label)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              {t({ en: 'Legal', es: 'Legal' })}
            </h4>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {t(link.label)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              {t({
                en: `© ${currentYear} ${siteContent.brand.name}. All rights reserved.`,
                es: `© ${currentYear} ${siteContent.brand.name}. Todos los derechos reservados.`,
              })}
            </p>
            <p className="text-sm text-muted-foreground">
              {t({
                en: 'Made with ❤️ using Next.js',
                es: 'Hecho con ❤️ usando Next.js',
              })}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
