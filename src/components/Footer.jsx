import { ArrowUpRight, Mail, ShieldCheck } from 'lucide-react'
import { siteContent } from '../data/siteContent'
import { InstagramIcon, MedicalCross, TikTokIcon, YouTubeIcon } from './ui/BrandIcons'
import Container from './ui/Container'

export default function Footer() {
  const { brand, navLinks, socials, contact, footer } = siteContent
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden bg-ink text-white">
      <div
        className="pointer-events-none absolute -right-32 -top-36 h-80 w-80 rounded-full border border-white/[0.06]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 left-1/3 h-px w-2/3 bg-gradient-to-r from-transparent via-accent/20 to-transparent"
        aria-hidden="true"
      />

      <Container className="relative py-14 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.35fr_0.65fr_0.75fr_0.85fr] lg:gap-8">
          <div>
            <a href="#home" className="inline-flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-[0.85rem] bg-brand text-white">
                <MedicalCross className="h-4 w-4" />
              </span>
              <span className="text-[0.9rem] font-extrabold tracking-[0.16em]">{brand.name}</span>
            </a>
            <p className="mt-5 max-w-sm text-[0.82rem] leading-6 text-white/65">{footer.description}</p>

            <div className="mt-6 flex items-center gap-2.5">
              <a
                href={socials.tiktok.href}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Follow Dr. Klint on TikTok"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.05] text-white/80 transition duration-300 hover:border-accent/30 hover:bg-white/10 hover:text-accent"
              >
                <TikTokIcon className="h-4 w-4" />
              </a>
              <a
                href={socials.email.href}
                aria-label="Email Dr. Klint"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.05] text-white/80 transition duration-300 hover:border-accent/30 hover:bg-white/10 hover:text-accent"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href={socials.youtube.href}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Visit Dr. Klint on YouTube"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.05] text-white/80 transition duration-300 hover:border-accent/30 hover:bg-white/10 hover:text-accent"
              >
                <YouTubeIcon className="h-4 w-4" />
              </a>
              <a
                href={socials.instagram.href}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Follow Dr. Klint on Instagram"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.05] text-white/80 transition duration-300 hover:border-accent/30 hover:bg-white/10 hover:text-accent"
              >
                <InstagramIcon className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[0.6rem] font-bold uppercase tracking-[0.13em] text-white/65">
              <ShieldCheck className="h-3 w-3" aria-hidden="true" />
              Concept demo · not for public launch
            </div>
          </div>

          <nav aria-label="Footer navigation">
            <h2 className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-white/65">Explore</h2>
            <ul className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[0.8rem] font-medium text-white/65 transition-colors hover:text-accent"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-white/65">Connect</h2>
            <ul className="mt-5 space-y-3">
              <li>
                <a
                  href={socials.tiktok.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-1.5 text-[0.8rem] font-medium text-white/65 transition-colors hover:text-accent"
                >
                  TikTok
                  <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a
                  href={socials.email.href}
                  className="text-[0.8rem] font-medium text-white/65 transition-colors hover:text-accent"
                >
                  Email
                </a>
              </li>
              <li>
                <a
                  href={socials.youtube.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-1.5 text-[0.8rem] font-medium text-white/65 transition-colors hover:text-accent"
                >
                  YouTube
                  <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a
                  href={socials.instagram.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-1.5 text-[0.8rem] font-medium text-white/65 transition-colors hover:text-accent"
                >
                  Instagram
                  <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-white/65">Contact</h2>
            <div className="mt-5 space-y-4">
              <div>
                <a
                  href={socials.email.href}
                  className="break-all text-[0.8rem] font-medium text-white/70 transition-colors hover:text-accent"
                >
                  {contact.email}
                </a>
                <p className="mt-1 text-[0.65rem] leading-5 text-white/60">{contact.emailNote}</p>
              </div>
              <div>
                <p className="text-[0.8rem] font-medium text-white/65">Phone</p>
                <a
                  href={`tel:${contact.phone.replace(/[^\d+]/g, '')}`}
                  className="mt-1 block text-[0.8rem] font-medium text-white/70 transition-colors hover:text-accent"
                >
                  {contact.phone}
                </a>
                <p className="mt-1 text-[0.65rem] leading-5 text-white/60">{contact.phoneNote}</p>
              </div>
              <p className="text-[0.65rem] leading-5 text-white/60">{contact.enquiryNote}</p>
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-7 border-t border-white/10 pt-8 lg:grid-cols-2 lg:gap-12">
          <div>
            <h2 className="text-[0.68rem] font-bold uppercase tracking-[0.16em] text-white/70">
              Medical disclaimer
            </h2>
            <p className="mt-3 max-w-2xl text-[0.7rem] leading-6 text-white/65">{footer.medicalDisclaimer}</p>
          </div>
          <div id="privacy">
            <h2 className="text-[0.68rem] font-bold uppercase tracking-[0.16em] text-white/70">
              Privacy & demo notice
            </h2>
            <p className="mt-3 max-w-2xl text-[0.7rem] leading-6 text-white/65">{footer.privacyNotice}</p>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-6 text-[0.65rem] leading-5 text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {currentYear} Dr. Klint. All rights reserved.</p>
          <p>{footer.productionNotice}</p>
        </div>
      </Container>
    </footer>
  )
}
