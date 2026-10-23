import { ArrowUpRight, FileText, Play, Sparkles } from 'lucide-react'
import { siteContent } from '../data/siteContent'
import Container from './ui/Container'
import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'

export default function HealthInsights() {
  const { insights } = siteContent

  return (
    <section id="insights" className="relative bg-paper py-20 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow={insights.eyebrow}
          title={insights.title}
          description={insights.description}
        />

        <Reveal delay={80}>
          <div className="mt-10 inline-flex items-center gap-2 rounded-full border border-brand/15 bg-mint/70 px-3.5 py-2 text-[0.66rem] font-bold uppercase tracking-[0.14em] text-brand">
            <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
            {insights.sampleLabel}
          </div>
        </Reveal>

        <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {insights.items.map((item, index) => {
            const isVideo = item.format.toLowerCase().includes('video')
            const FormatIcon = isVideo ? Play : FileText

            return (
              <Reveal key={item.title} delay={Math.min(index * 60, 300)}>
                <article className="group flex h-full flex-col overflow-hidden rounded-[1.55rem] border border-line bg-white shadow-soft transition duration-300 hover:-translate-y-1 hover:border-brand/20 hover:shadow-lift">
                  <div className="relative aspect-[16/10] overflow-hidden bg-mint">
                    <img
                      src={item.image}
                      alt={item.alt}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.035]"
                      loading="lazy"
                      width="900"
                      height="563"
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-ink/55 via-ink/5 to-transparent"
                      aria-hidden="true"
                    />
                    <span className="absolute left-3.5 top-3.5 rounded-full border border-white/35 bg-ink/55 px-2.5 py-1 text-[0.6rem] font-bold uppercase tracking-[0.13em] text-white backdrop-blur">
                      {item.category}
                    </span>
                    <span className="absolute right-3.5 top-3.5 rounded-full border border-white/50 bg-white/85 px-2.5 py-1 text-[0.6rem] font-bold uppercase tracking-[0.13em] text-brand backdrop-blur">
                      Sample
                    </span>
                    <span className="absolute bottom-3.5 left-3.5 grid h-9 w-9 place-items-center rounded-full border border-white/60 bg-white/90 text-brand shadow-sm backdrop-blur">
                      <FormatIcon className="h-3.5 w-3.5" aria-hidden="true" />
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    <p className="text-[0.62rem] font-bold uppercase tracking-[0.15em] text-muted">
                      {item.format}
                    </p>
                    <h3 className="mt-2.5 text-lg font-bold leading-snug tracking-[-0.025em] text-ink">
                      {item.title}
                    </h3>
                    <p className="mt-3 flex-1 text-[0.8rem] leading-6 text-body">{item.summary}</p>

                    <a
                      href={item.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="mt-5 inline-flex items-center gap-2 border-t border-line/80 pt-4 text-[0.73rem] font-bold text-brand transition-colors hover:text-brand-dark"
                    >
                      Explore on TikTok
                      <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                    </a>
                  </div>
                </article>
              </Reveal>
            )
          })}
        </div>

        <Reveal delay={100}>
          <p className="mt-6 rounded-[1.2rem] border border-dashed border-line bg-mint/35 px-4 py-3.5 text-center text-[0.72rem] leading-5 text-body">
            {insights.note}
          </p>
        </Reveal>
      </Container>
    </section>
  )
}
