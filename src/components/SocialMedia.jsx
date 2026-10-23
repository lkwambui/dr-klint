import { ArrowUpRight, Mail } from 'lucide-react'
import { siteContent } from '../data/siteContent'
import { TikTokIcon, YouTubeIcon } from './ui/BrandIcons'
import Container from './ui/Container'
import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'

const socialIcons = {
  tiktok: TikTokIcon,
  youtube: YouTubeIcon,
  mail: Mail,
}

export default function SocialMedia() {
  const { social } = siteContent

  return (
    <section className="relative overflow-hidden bg-brand-dark py-20 text-white lg:py-24">
      <div
        className="pointer-events-none absolute inset-0 grid-pattern opacity-30 [mask-image:linear-gradient(to_right,black,transparent_80%)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-32 -top-40 h-[30rem] w-[30rem] rounded-full bg-accent/15 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-56 left-1/4 h-[28rem] w-[28rem] rounded-full border border-white/10"
        aria-hidden="true"
      />

      <Container className="relative">
        <SectionHeading
          eyebrow={social.eyebrow}
          title={social.title}
          description={social.description}
          tone="dark"
        />

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {social.cards.map((card, index) => {
            const Icon = socialIcons[card.icon] ?? Mail
            const isLight = index === 0
            const isActive = Boolean(card.href)

            return (
              <Reveal key={card.platform} delay={index * 80}>
                <article
                  className={`flex h-full flex-col rounded-[1.6rem] border p-6 transition duration-300 sm:p-7 ${
                    isLight
                      ? 'border-white/20 bg-paper text-ink shadow-soft hover:-translate-y-1'
                      : isActive
                        ? 'border-white/15 bg-white/[0.07] text-white hover:-translate-y-1 hover:bg-white/[0.1]'
                        : 'border-white/10 bg-white/[0.035] text-white/75'
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <span
                      className={`grid h-12 w-12 place-items-center rounded-[1.05rem] ${
                        isLight ? 'bg-mint text-brand' : 'bg-white/10 text-white'
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                    </span>
                    <span
                      className={`rounded-full border px-2.5 py-1 text-[0.58rem] font-bold uppercase tracking-[0.13em] ${
                        isLight
                          ? 'border-line bg-white text-body'
                          : 'border-white/15 bg-white/[0.06] text-white/60'
                      }`}
                    >
                      {card.status}
                    </span>
                  </div>

                  <p
                    className={`mt-7 text-[0.62rem] font-bold uppercase tracking-[0.18em] ${
                      isLight ? 'text-muted' : 'text-white/65'
                    }`}
                  >
                    {card.platform}
                  </p>
                  <h3 className="mt-2 text-xl font-bold tracking-[-0.025em]">{card.title}</h3>
                  <p
                    className={`mt-3 flex-1 text-[0.83rem] leading-6 ${
                      isLight ? 'text-body' : 'text-white/65'
                    }`}
                  >
                    {card.description}
                  </p>

                  <p
                    className={`mt-6 truncate text-sm font-bold ${
                      isLight ? 'text-brand' : isActive ? 'text-accent' : 'text-white/65'
                    }`}
                  >
                    {card.detail}
                  </p>

                  {isActive ? (
                    <a
                      href={card.href}
                      target={card.href.startsWith('http') ? '_blank' : undefined}
                      rel={card.href.startsWith('http') ? 'noreferrer noopener' : undefined}
                      className={`mt-4 inline-flex items-center justify-between gap-3 rounded-full px-4 py-3 text-[0.75rem] font-bold transition duration-300 ${
                        isLight
                          ? 'bg-brand text-white hover:bg-brand-dark'
                          : 'border border-white/15 bg-white/[0.06] text-white hover:border-white/30 hover:bg-white/[0.1]'
                      }`}
                    >
                      {card.cta}
                      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </a>
                  ) : (
                    <span
                      className="mt-4 inline-flex items-center justify-between gap-3 rounded-full border border-white/10 bg-white/[0.03] px-4 py-3 text-[0.75rem] font-semibold text-white/65"
                    >
                      {card.cta}
                      <span className="h-1.5 w-1.5 rounded-full bg-white/25" aria-hidden="true" />
                    </span>
                  )}
                </article>
              </Reveal>
            )
          })}
        </div>

        <Reveal delay={100}>
          <p className="mt-6 text-[0.7rem] leading-5 text-white/65">{social.note}</p>
        </Reveal>
      </Container>
    </section>
  )
}
