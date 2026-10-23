import { useEffect, useState } from 'react'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { siteContent } from '../data/siteContent'
import { MedicalCross, TikTokIcon } from './ui/BrandIcons'
import { primaryButton } from './ui/styles'
import Container from './ui/Container'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeHref, setActiveHref] = useState('#home')

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 18)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (!isOpen) return undefined

    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setIsOpen(false)
    }

    const closeOnDesktop = () => {
      if (window.innerWidth >= 1024) setIsOpen(false)
    }

    window.addEventListener('keydown', closeOnEscape)
    window.addEventListener('resize', closeOnDesktop)
    return () => {
      window.removeEventListener('keydown', closeOnEscape)
      window.removeEventListener('resize', closeOnDesktop)
    }
  }, [isOpen])

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveHref(`#${entry.target.id}`)
        })
      },
      { rootMargin: '-38% 0px -55% 0px', threshold: 0 },
    )

    siteContent.navLinks.forEach(({ href }) => {
      const section = document.getElementById(href.slice(1))
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-paper/85 backdrop-blur-xl transition-all duration-300 ${
        isScrolled ? 'border-line/90 shadow-[0_12px_40px_-32px_rgba(23,43,42,0.4)]' : 'border-transparent'
      }`}
    >
      <Container className="flex h-[4.75rem] items-center justify-between gap-4">
        <a
          href="#home"
          onClick={() => setIsOpen(false)}
          className="group flex items-center gap-3"
        >
          <span className="relative grid h-11 w-11 shrink-0 place-items-center overflow-hidden rounded-[0.95rem] bg-brand text-white shadow-[0_12px_24px_-14px_rgba(15,118,110,0.85)] transition-transform duration-300 group-hover:-rotate-3">
            <MedicalCross className="h-[1.15rem] w-[1.15rem]" />
            <span className="absolute inset-x-2 bottom-1.5 h-px bg-white/25" />
          </span>
          <span className="leading-none">
            <span className="block text-[0.92rem] font-extrabold tracking-[0.16em] text-ink">
              {siteContent.brand.name}
            </span>
            <span className="mt-1.5 block text-[0.58rem] font-bold uppercase tracking-[0.22em] text-muted">
              Health Education
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
          {siteContent.navLinks.map((link) => {
            const isActive = activeHref === link.href
            return (
              <a
                key={link.href}
                href={link.href}
                className={`relative rounded-full px-3.5 py-2 text-[0.82rem] font-semibold transition-colors duration-200 ${
                  isActive ? 'text-brand' : 'text-body hover:text-ink'
                }`}
              >
                {link.label}
                <span
                  className={`absolute inset-x-3.5 -bottom-0.5 h-px origin-left bg-brand transition-transform duration-300 ${
                    isActive ? 'scale-x-100' : 'scale-x-0'
                  }`}
                />
              </a>
            )
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={siteContent.socials.tiktok.href}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Follow Dr. Klint on TikTok"
            className="grid h-10 w-10 place-items-center rounded-full border border-line bg-white/70 text-ink transition duration-300 hover:-translate-y-0.5 hover:border-brand/30 hover:text-brand"
          >
            <TikTokIcon className="h-[0.95rem] w-[0.95rem]" />
          </a>
          <a href="#contact" className={`${primaryButton} px-5 py-3`}>
            Book a Consultation
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>

        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-full border border-line bg-white/80 text-ink transition hover:border-brand/30 hover:text-brand lg:hidden"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
        </button>
      </Container>

      {isOpen ? (
        <div
          id="mobile-menu"
          className="border-t border-line bg-paper/95 shadow-[0_28px_50px_-32px_rgba(23,43,42,0.35)] backdrop-blur-xl lg:hidden"
        >
          <Container className="py-5">
            <nav className="flex flex-col" aria-label="Mobile navigation">
              {siteContent.navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center justify-between border-b border-line/80 py-3.5 text-base font-semibold transition-colors ${
                    activeHref === link.href ? 'text-brand' : 'text-ink hover:text-brand'
                  }`}
                >
                  {link.label}
                  <ArrowUpRight className="h-4 w-4 text-muted" aria-hidden="true" />
                </a>
              ))}
            </nav>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className={`${primaryButton} mt-5 w-full`}
            >
              Book a Consultation
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href={siteContent.socials.tiktok.href}
              target="_blank"
              rel="noreferrer noopener"
              className="mt-4 flex items-center justify-center gap-2 rounded-full py-2 text-sm font-semibold text-body transition hover:text-brand"
            >
              <TikTokIcon className="h-4 w-4" />
              Follow {siteContent.socials.tiktok.handle}
            </a>
          </Container>
        </div>
      ) : null}
    </header>
  )
}
