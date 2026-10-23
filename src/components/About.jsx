import { ArrowRight, BookOpen, HeartHandshake, Info, MessagesSquare, Quote } from 'lucide-react'
import { siteContent } from '../data/siteContent'
import Container from './ui/Container'
import Reveal from './ui/Reveal'
import { MedicalCross } from './ui/BrandIcons'

const valueIcons = {
  MessagesSquare,
  HeartHandshake,
  BookOpen,
}

export default function About() {
  const { about } = siteContent

  return (
    <section id="about" className="relative border-y border-line/70 bg-paper py-20 lg:py-28">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-mint/45 to-transparent"
        aria-hidden="true"
      />
      <Container className="relative">
        <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <Reveal className="order-2 lg:order-1">
            <div className="relative mx-auto max-w-[29rem] lg:mx-0">
              <div
                className="absolute -inset-x-3 bottom-6 top-12 rounded-[2.8rem] bg-mint"
                aria-hidden="true"
              />
              <div
                className="absolute -left-3 -top-3 h-10 w-10 rounded-xl border border-brand/20 bg-paper"
                aria-hidden="true"
              />
              <div
                className="absolute -right-3 top-1/3 hidden h-16 w-16 rounded-full border border-accent/70 sm:block"
                aria-hidden="true"
              />

              <div className="relative overflow-hidden rounded-[2.4rem] border border-line bg-white p-2.5 shadow-soft">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[1.9rem] bg-brand-soft">
                  <img
                    src={about.image.src}
                    alt={about.image.alt}
                    className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-[1.025]"
                    loading="lazy"
                    width="1200"
                    height="1200"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-ink/35 via-transparent to-transparent"
                    aria-hidden="true"
                  />
                  <div className="absolute inset-x-4 bottom-4 rounded-[1.15rem] border border-white/40 bg-white/92 p-4 shadow-lg backdrop-blur-md">
                    <Quote className="h-4 w-4 text-brand" aria-hidden="true" />
                    <p className="mt-2 text-base font-semibold leading-6 tracking-[-0.02em] text-ink">
                      {about.signatureLine}
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -right-2 hidden items-center gap-2 rounded-2xl border border-line bg-white px-4 py-3 shadow-soft sm:flex lg:-right-8">
                <span className="grid h-8 w-8 place-items-center rounded-full bg-brand text-white">
                  <MedicalCross className="h-3.5 w-3.5" />
                </span>
                <span className="text-[0.68rem] font-bold uppercase tracking-[0.15em] text-ink">
                  People first
                </span>
              </div>
            </div>
            <p className="mx-auto mt-10 max-w-md px-2 text-center text-[0.68rem] leading-5 text-muted sm:mt-12 lg:mx-0 lg:text-left">
              {about.image.caption}
            </p>
          </Reveal>

          <div className="order-1 lg:order-2">
            <Reveal>
              <p className="eyebrow">{about.eyebrow}</p>
              <h2 className="mt-5 max-w-[15ch] text-balance text-4xl font-semibold leading-[1.06] tracking-[-0.04em] text-ink sm:text-5xl lg:text-[3.35rem]">
                {about.title}
              </h2>
            </Reveal>

            <Reveal delay={90}>
              <div className="mt-6 space-y-4">
                {about.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="max-w-2xl text-pretty text-[0.95rem] leading-7 text-body sm:text-base sm:leading-8">
                    {paragraph}
                  </p>
                ))}
              </div>
            </Reveal>

            <Reveal delay={150}>
              <div className="mt-8 flex gap-3 rounded-2xl border border-dashed border-brand/25 bg-mint/55 p-4 sm:p-5">
                <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-full bg-white text-brand shadow-sm">
                  <Info className="h-4 w-4" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-bold text-ink">{about.profileNote.title}</p>
                  <p className="mt-1 max-w-xl text-[0.78rem] leading-6 text-muted">{about.profileNote.body}</p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <a
                href="#services"
                className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-brand transition-colors hover:text-brand-dark"
              >
                Explore the services
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </Reveal>
          </div>
        </div>

        <div className="mt-20 grid gap-4 md:grid-cols-3">
          {about.values.map((value, index) => {
            const Icon = valueIcons[value.icon] ?? BookOpen
            return (
              <Reveal key={value.title} delay={index * 80}>
                <article className="group flex h-full flex-col rounded-[1.6rem] border border-line bg-white/80 p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-brand/20 hover:shadow-lift sm:p-7">
                  <div className="flex items-start justify-between gap-3">
                    <span className="grid h-11 w-11 place-items-center rounded-[0.95rem] bg-mint text-brand transition-colors duration-300 group-hover:bg-brand group-hover:text-white">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="text-[0.66rem] font-bold tracking-[0.15em] text-muted">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="mt-7 text-lg font-bold tracking-[-0.025em] text-ink">{value.title}</h3>
                  <p className="mt-3 text-[0.83rem] leading-6 text-body">{value.description}</p>
                </article>
              </Reveal>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
