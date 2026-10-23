import {
  ArrowDown,
  ArrowUpRight,
  BookOpen,
  HeartHandshake,
  ShieldCheck,
  Sparkles,
} from 'lucide-react'
import { siteContent } from '../data/siteContent'
import { MedicalCross, TikTokIcon } from './ui/BrandIcons'
import Container from './ui/Container'
import Reveal from './ui/Reveal'
import { primaryButton, secondaryButton } from './ui/styles'

const trustIcons = {
  BookOpen,
  ShieldCheck,
  HeartHandshake,
}

export default function Hero() {
  const { hero, socials } = siteContent

  return (
    <section id="home" className="relative overflow-hidden pb-20 pt-10 sm:pt-14 lg:pb-28 lg:pt-20">
      <div
        className="pointer-events-none absolute inset-0 grid-pattern opacity-60 [mask-image:linear-gradient(to_bottom,black,transparent_78%)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-40 -top-48 h-[38rem] w-[38rem] rounded-full bg-mint/90 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-64 -left-40 h-[30rem] w-[30rem] rounded-full bg-brand-soft/50 blur-3xl"
        aria-hidden="true"
      />

      <Container className="relative">
        <div className="grid items-center gap-14 lg:grid-cols-[1.04fr_0.96fr] lg:gap-12 xl:gap-20">
          <div className="relative z-10">
            <Reveal>
              <p className="eyebrow">{hero.eyebrow}</p>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="mt-6 max-w-[13ch] text-balance text-[2.75rem] font-semibold leading-[1.02] tracking-[-0.055em] text-ink sm:text-6xl lg:text-[4.4rem] xl:text-[5rem]">
                Your Health Deserves{' '}
                <span className="relative inline-block text-brand">
                  Clear Answers.
                  <svg
                    viewBox="0 0 300 18"
                    className="absolute -bottom-1.5 left-0 h-3 w-full text-accent sm:-bottom-2 sm:h-4"
                    fill="none"
                    aria-hidden="true"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M3 12.5c58-7.4 126-9.8 294-6.2"
                      stroke="currentColor"
                      strokeWidth="4"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </h1>
            </Reveal>

            <Reveal delay={140}>
              <p className="mt-7 max-w-xl text-pretty text-[0.98rem] leading-7 text-body sm:text-lg sm:leading-8">
                {hero.description}
              </p>
            </Reveal>

            <Reveal delay={200}>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a href={hero.primaryCta.href} className={primaryButton}>
                  {hero.primaryCta.label}
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
                <a href={hero.secondaryCta.href} className={secondaryButton}>
                  {hero.secondaryCta.label}
                  <ArrowDown className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </Reveal>

            <Reveal delay={260}>
              <div className="mt-11 max-w-2xl rounded-[1.4rem] border border-line/90 bg-white/65 p-2.5 shadow-soft backdrop-blur-sm">
                <div className="grid gap-1 sm:grid-cols-3">
                  {hero.trustPoints.map((point) => {
                    const Icon = trustIcons[point.icon] ?? BookOpen
                    return (
                      <div
                        key={point.label}
                        className="flex items-center gap-3 rounded-[1rem] px-3 py-3 transition-colors duration-300 hover:bg-mint/70"
                      >
                        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-brand-soft/75 text-brand">
                          <Icon className="h-4 w-4" aria-hidden="true" />
                        </span>
                        <span className="text-[0.73rem] font-bold leading-5 text-ink">{point.label}</span>
                      </div>
                    )
                  })}
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={180} className="relative mx-auto w-full max-w-[28rem] lg:mr-0">
            <div
              className="absolute inset-x-2 bottom-0 top-10 rounded-[3rem] bg-brand sm:inset-x-0"
              aria-hidden="true"
            />
            <div
              className="absolute -left-4 top-24 hidden h-24 w-24 rounded-full border border-accent/60 sm:block"
              aria-hidden="true"
            />
            <div
              className="absolute -right-3 bottom-28 hidden h-12 w-12 rounded-full bg-accent/90 sm:block"
              aria-hidden="true"
            />

            <div className="relative aspect-[4/5] overflow-hidden rounded-[2.6rem] border-[7px] border-white bg-mint shadow-soft">
              <img
                src={hero.portrait.src}
                alt={hero.portrait.alt}
                className="h-full w-full object-cover object-center"
                width="1100"
                height="1400"
                fetchPriority="high"
              />
              <div
                className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink/45 to-transparent"
                aria-hidden="true"
              />

              <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/90 px-3 py-1.5 text-[0.65rem] font-bold uppercase tracking-[0.16em] text-brand shadow-sm backdrop-blur">
                <MedicalCross className="h-3 w-3" />
                Health educator
              </div>

              <div className="absolute inset-x-4 bottom-4 flex items-center justify-between gap-3 rounded-[1.15rem] border border-white/50 bg-white/92 p-3 shadow-lg backdrop-blur-md">
                <div className="flex min-w-0 items-center gap-2.5">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-ink text-white">
                    <TikTokIcon className="h-4 w-4" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[0.62rem] font-bold uppercase tracking-[0.14em] text-body">
                      Health insights
                    </span>
                    <span className="block truncate text-sm font-bold text-ink">{socials.tiktok.handle}</span>
                  </span>
                </div>
                <a
                  href={socials.tiktok.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="Follow Dr. Klint on TikTok"
                  className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-mint text-brand transition duration-300 hover:bg-brand hover:text-white"
                >
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </div>

            <div className="absolute -right-2 -top-5 hidden rotate-3 items-center gap-2 rounded-2xl border border-line bg-white px-3.5 py-2.5 text-[0.68rem] font-semibold text-ink shadow-soft sm:flex">
              <Sparkles className="h-3.5 w-3.5 text-brand" aria-hidden="true" />
              Education, made clear
            </div>

            <p className="mx-auto mt-4 max-w-sm px-4 text-center text-[0.68rem] leading-5 text-muted lg:max-w-none">
              {hero.portrait.caption}
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
