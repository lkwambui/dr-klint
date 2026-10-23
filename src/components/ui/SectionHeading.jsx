export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  titleId,
  className = '',
  tone = 'light',
}) {
  const centered = align === 'center'
  const titleTone = tone === 'dark' ? 'text-white' : 'text-ink'
  const bodyTone = tone === 'dark' ? 'text-white/70' : 'text-body'
  const eyebrowTone = tone === 'dark' ? 'text-accent' : 'text-brand'

  return (
    <div className={className}>
      <p className={`eyebrow ${eyebrowTone} ${centered ? 'justify-center' : ''}`}>{eyebrow}</p>
      <div
        className={
          centered
            ? 'mx-auto mt-5 max-w-3xl text-center'
            : 'mt-5 grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-end'
        }
      >
        <h2
          id={titleId}
          className={`text-balance text-4xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-5xl lg:text-[3.4rem] ${titleTone}`}
        >
          {title}
        </h2>
        {description ? (
          <p
            className={`max-w-xl text-pretty text-[0.95rem] leading-7 ${bodyTone} ${
              centered ? 'mx-auto' : 'lg:justify-self-end'
            }`}
          >
            {description}
          </p>
        ) : null}
      </div>
    </div>
  )
}
