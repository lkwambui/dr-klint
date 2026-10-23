import {
  ArrowUpRight,
  BookOpen,
  CalendarCheck,
  Info,
  MessagesSquare,
  ShieldCheck,
} from 'lucide-react'
import { siteContent } from '../data/siteContent'
import Container from './ui/Container'
import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'

const serviceIcons = {
  BookOpen,
  CalendarCheck,
  ShieldCheck,
  MessagesSquare,
}

export default function Services() {
  const { services } = siteContent

  return (
    <section id="services" className="relative overflow-hidden border-b border-line/70 bg-mint/35 py-20 lg:py-28">
      <div
        className="pointer-events-none absolute -right-24 top-16 h-72 w-72 rounded-full border border-brand/10"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-28 bottom-0 h-72 w-72 rounded-full bg-paper/80 blur-2xl"
        aria-hidden="true"
      />

      <Container className="relative">
        <SectionHeading
          eyebrow={services.eyebrow}
          title={services.title}
          description={services.description}
        />

        <div className="mt-12 flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand/15 bg-white/80 px-3.5 py-2 text-[0.66rem] font-bold uppercase tracking-[0.14em] text-brand">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" />
            General education only
          </span>
          <span className="text-[0.72rem] font-medium text-muted">
            No clinical service is implied by these cards.
          </span>
        </div>

        <div className="mt-7 grid gap-4 md:grid-cols-2">
          {services.items.map((service, index) => {
            const Icon = serviceIcons[service.icon] ?? BookOpen
            return (
              <Reveal key={service.title} delay={index * 70}>
                <article className="group relative flex h-full flex-col overflow-hidden rounded-[1.7rem] border border-line bg-white/90 p-6 transition duration-300 hover:-translate-y-1 hover:border-brand/25 hover:shadow-lift sm:p-7 lg:p-8">
                  <div
                    className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-mint/80 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    aria-hidden="true"
                  />

                  <div className="relative flex items-start justify-between gap-4">
                    <span className="grid h-12 w-12 place-items-center rounded-[1.05rem] bg-mint text-brand transition duration-300 group-hover:bg-brand group-hover:text-white">
                      <Icon className="h-[1.35rem] w-[1.35rem]" aria-hidden="true" />
                    </span>
                    <span className="text-[0.63rem] font-bold uppercase tracking-[0.18em] text-muted">
                      {service.tag}
                    </span>
                  </div>

                  <div className="relative mt-8 flex flex-1 flex-col">
                    <h3 className="max-w-md text-xl font-bold leading-snug tracking-[-0.025em] text-ink sm:text-[1.35rem]">
                      {service.title}
                    </h3>
                    <p className="mt-3 max-w-lg text-[0.86rem] leading-6 text-body">{service.description}</p>

                    <div className="mt-7 flex items-center justify-between border-t border-line/80 pt-5">
                      <span className="text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-muted">
                        Ask about this
                      </span>
                      <a
                        href="#contact"
                        aria-label={`Ask about ${service.title}`}
                        className="grid h-9 w-9 place-items-center rounded-full border border-line text-ink transition duration-300 group-hover:border-brand group-hover:bg-brand group-hover:text-white"
                      >
                        <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                </article>
              </Reveal>
            )
          })}
        </div>

        <Reveal delay={120}>
          <div className="mt-6 flex items-start gap-3.5 rounded-[1.35rem] border border-brand/15 bg-white/70 p-4 sm:items-center sm:p-5">
            <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-full bg-brand-soft/80 text-brand sm:mt-0">
              <Info className="h-4 w-4" aria-hidden="true" />
            </span>
            <p className="text-[0.75rem] leading-6 text-body">
              <span className="font-bold text-ink">A clear boundary: </span>
              {services.disclaimer}
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
