import { useRef, useState } from 'react'
import {
  AlertCircle,
  AlertTriangle,
  Check,
  CheckCircle2,
  Lock,
  Mail,
  Phone,
  Send,
} from 'lucide-react'
import { siteContent } from '../data/siteContent'
import Container from './ui/Container'
import Reveal from './ui/Reveal'
import { primaryButton, secondaryButton } from './ui/styles'

const initialForm = {
  name: '',
  email: '',
  contactMethod: '',
  category: '',
  message: '',
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validate(values) {
  const nextErrors = {}

  if (values.name.trim().length < 2) {
    nextErrors.name = 'Please enter your full name.'
  }

  if (!values.email.trim()) {
    nextErrors.email = 'Please enter your email address.'
  } else if (!emailPattern.test(values.email.trim())) {
    nextErrors.email = 'Please enter a valid email address.'
  }

  if (!values.contactMethod) {
    nextErrors.contactMethod = 'Please choose a preferred contact method.'
  }

  if (!values.category) {
    nextErrors.category = 'Please choose an enquiry category.'
  }

  if (values.message.trim().length < 10) {
    nextErrors.message = 'Please add a little more detail (at least 10 characters).'
  }

  return nextErrors
}

function FieldError({ id, message }) {
  if (!message) return null

  return (
    <p id={id} className="mt-1.5 flex items-start gap-1.5 text-[0.72rem] font-semibold text-[#b45309]">
      <AlertCircle className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden="true" />
      {message}
    </p>
  )
}

export default function Contact() {
  const { contact, contactSection } = siteContent
  const [values, setValues] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')
  const [submittedName, setSubmittedName] = useState('')
  const fieldRefs = useRef({})
  const successRef = useRef(null)

  const updateField = (event) => {
    const { name, value } = event.target
    setValues((current) => ({ ...current, [name]: value }))
    setErrors((current) => {
      if (!current[name]) return current
      const next = { ...current }
      delete next[name]
      return next
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const nextErrors = validate(values)
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) {
      const firstInvalidField = Object.keys(nextErrors)[0]
      window.requestAnimationFrame(() => fieldRefs.current[firstInvalidField]?.focus())
      return
    }

    setSubmittedName(values.name.trim())
    setStatus('success')
    window.requestAnimationFrame(() => successRef.current?.focus())
  }

  const resetForm = () => {
    setValues(initialForm)
    setErrors({})
    setSubmittedName('')
    setStatus('idle')
  }

  const firstName = submittedName.split(/\s+/)[0]
  const contactIcons = { Mail, Phone }

  return (
    <section id="contact" className="relative overflow-hidden border-t border-line/70 bg-paper py-20 lg:py-28">
      <div
        className="pointer-events-none absolute -left-48 top-1/3 h-[30rem] w-[30rem] rounded-full bg-mint/70 blur-3xl"
        aria-hidden="true"
      />
      <Container className="relative">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 xl:gap-20">
          <Reveal className="lg:sticky lg:top-28 lg:self-start">
            <p className="eyebrow">{contactSection.eyebrow}</p>
            <h2 className="mt-5 max-w-[14ch] text-balance text-4xl font-semibold leading-[1.06] tracking-[-0.04em] text-ink sm:text-5xl lg:text-[3.35rem]">
              {contactSection.title}
            </h2>
            <p className="mt-6 max-w-xl text-pretty text-[0.93rem] leading-7 text-body">
              {contactSection.description}
            </p>

            <div className="mt-8 space-y-3">
              {contactSection.details.map((detail) => {
                const Icon = contactIcons[detail.icon] ?? Mail
                const content = (
                  <>
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-[0.85rem] bg-mint text-brand">
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-[0.62rem] font-bold uppercase tracking-[0.14em] text-muted">
                        {detail.label}
                      </span>
                      <span className="mt-1 block truncate text-sm font-bold text-ink">{detail.value}</span>
                      <span className="mt-1 block text-[0.7rem] leading-5 text-muted">{detail.note}</span>
                    </span>
                  </>
                )

                return detail.href ? (
                  <a
                    key={detail.label}
                    href={detail.href}
                    className="flex items-start gap-3 rounded-2xl border border-line bg-white/70 p-4 transition duration-300 hover:border-brand/25 hover:bg-white"
                  >
                    {content}
                  </a>
                ) : (
                  <div
                    key={detail.label}
                    className="flex items-start gap-3 rounded-2xl border border-line bg-white/50 p-4"
                  >
                    {content}
                  </div>
                )
              })}
            </div>

            <div className="mt-8 rounded-[1.4rem] border border-line bg-white/55 p-5">
              <p className="text-[0.62rem] font-bold uppercase tracking-[0.16em] text-ink">
                Before you send
              </p>
              <ul className="mt-3 space-y-2.5">
                {contactSection.beforeYouSend.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-[0.74rem] leading-5 text-body">
                    <span className="mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full bg-brand-soft text-brand">
                      <Check className="h-2.5 w-2.5" aria-hidden="true" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-4 flex items-start gap-3 rounded-[1.2rem] bg-[#fff5ed] p-4">
              <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-[#b45309]" aria-hidden="true" />
              <p className="text-[0.71rem] leading-5 text-[#854d0e]">{contact.emergencyNote}</p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-[1.9rem] border border-line bg-white p-5 shadow-soft sm:p-7 lg:p-8">
              {status === 'success' ? (
                <div
                  ref={successRef}
                  tabIndex={-1}
                  role="status"
                  aria-live="polite"
                  className="flex min-h-[34rem] flex-col items-start justify-center outline-none"
                >
                  <span className="grid h-16 w-16 place-items-center rounded-full bg-mint text-brand">
                    <CheckCircle2 className="h-8 w-8" aria-hidden="true" />
                  </span>
                  <p className="mt-7 text-[0.65rem] font-bold uppercase tracking-[0.17em] text-brand">
                    Preview complete
                  </p>
                  <h3 className="mt-3 max-w-md text-3xl font-semibold leading-tight tracking-[-0.035em] text-ink">
                    Your form is validated, {firstName}.
                  </h3>
                  <p className="mt-4 max-w-lg text-[0.88rem] leading-7 text-body">
                    This was a demonstration only. Your details were checked in the browser and{' '}
                    <strong className="font-semibold text-ink">were not transmitted or delivered</strong> to Dr.
                    Klint.
                  </p>
                  <div className="mt-6 w-full rounded-[1.2rem] border border-dashed border-brand/25 bg-mint/50 p-4">
                    <p className="text-[0.73rem] leading-6 text-body">
                      A secure backend, spam protection, and a reviewed production privacy policy are required
                      before this form can accept real enquiries. No information has been stored, including in
                      local storage.
                    </p>
                  </div>
                  <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                    <button type="button" onClick={() => setStatus('idle')} className={secondaryButton}>
                      Review form
                    </button>
                    <button
                      type="button"
                      onClick={resetForm}
                      className="inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold text-body transition hover:text-ink"
                    >
                      Clear and start over
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <div className="flex items-start justify-between gap-4 border-b border-line pb-5">
                    <div>
                      <h3 className="text-xl font-bold tracking-[-0.025em] text-ink">
                        {contactSection.form.title}
                      </h3>
                      <p className="mt-1.5 text-[0.76rem] leading-5 text-body">
                        {contactSection.form.subtitle}
                      </p>
                    </div>
                    <span className="hidden rounded-full border border-line bg-paper px-2.5 py-1 text-[0.58rem] font-bold uppercase tracking-[0.13em] text-muted sm:inline-block">
                      Demo
                    </span>
                  </div>

                  <form className="mt-6 space-y-5" onSubmit={handleSubmit} noValidate>
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label className="field-label" htmlFor="name">
                          {contactSection.form.fields.name.label} <span aria-hidden="true">*</span>
                        </label>
                        <input
                          ref={(node) => {
                            fieldRefs.current.name = node
                          }}
                          id="name"
                          name="name"
                          type="text"
                          className="field"
                          placeholder={contactSection.form.fields.name.placeholder}
                          value={values.name}
                          onChange={updateField}
                          autoComplete="name"
                          aria-invalid={Boolean(errors.name)}
                          aria-describedby={errors.name ? 'name-error' : undefined}
                          required
                        />
                        <FieldError id="name-error" message={errors.name} />
                      </div>

                      <div>
                        <label className="field-label" htmlFor="email">
                          {contactSection.form.fields.email.label} <span aria-hidden="true">*</span>
                        </label>
                        <input
                          ref={(node) => {
                            fieldRefs.current.email = node
                          }}
                          id="email"
                          name="email"
                          type="email"
                          inputMode="email"
                          className="field"
                          placeholder={contactSection.form.fields.email.placeholder}
                          value={values.email}
                          onChange={updateField}
                          autoComplete="email"
                          aria-invalid={Boolean(errors.email)}
                          aria-describedby={errors.email ? 'email-error' : undefined}
                          required
                        />
                        <FieldError id="email-error" message={errors.email} />
                      </div>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label className="field-label" htmlFor="contactMethod">
                          {contactSection.form.fields.contactMethod.label}{' '}
                          <span aria-hidden="true">*</span>
                        </label>
                        <select
                          ref={(node) => {
                            fieldRefs.current.contactMethod = node
                          }}
                          id="contactMethod"
                          name="contactMethod"
                          className={`field ${values.contactMethod ? 'text-ink' : 'text-muted'}`}
                          value={values.contactMethod}
                          onChange={updateField}
                          aria-invalid={Boolean(errors.contactMethod)}
                          aria-describedby={errors.contactMethod ? 'contactMethod-error' : undefined}
                          required
                        >
                          <option value="" disabled>
                            {contactSection.form.fields.contactMethod.placeholder}
                          </option>
                          {contactSection.form.fields.contactMethod.options.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                        <FieldError id="contactMethod-error" message={errors.contactMethod} />
                      </div>

                      <div>
                        <label className="field-label" htmlFor="category">
                          {contactSection.form.fields.category.label} <span aria-hidden="true">*</span>
                        </label>
                        <select
                          ref={(node) => {
                            fieldRefs.current.category = node
                          }}
                          id="category"
                          name="category"
                          className={`field ${values.category ? 'text-ink' : 'text-muted'}`}
                          value={values.category}
                          onChange={updateField}
                          aria-invalid={Boolean(errors.category)}
                          aria-describedby={errors.category ? 'category-error' : undefined}
                          required
                        >
                          <option value="" disabled>
                            {contactSection.form.fields.category.placeholder}
                          </option>
                          {contactSection.form.fields.category.options.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                        <FieldError id="category-error" message={errors.category} />
                      </div>
                    </div>

                    <div>
                      <div className="flex items-baseline justify-between gap-3">
                        <label className="field-label" htmlFor="message">
                          {contactSection.form.fields.message.label} <span aria-hidden="true">*</span>
                        </label>
                        <span className="text-[0.65rem] font-medium text-muted">{values.message.length}/800</span>
                      </div>
                      <textarea
                        ref={(node) => {
                          fieldRefs.current.message = node
                        }}
                        id="message"
                        name="message"
                        rows="5"
                        maxLength="800"
                        className="field resize-y"
                        placeholder={contactSection.form.fields.message.placeholder}
                        value={values.message}
                        onChange={updateField}
                        aria-invalid={Boolean(errors.message)}
                        aria-describedby={errors.message ? 'message-error' : 'message-hint'}
                        required
                      />
                      <FieldError id="message-error" message={errors.message} />
                      {!errors.message ? (
                        <p id="message-hint" className="mt-1.5 text-[0.68rem] leading-5 text-muted">
                          General questions only. Please do not include sensitive medical information.
                        </p>
                      ) : null}
                    </div>

                    <div className="rounded-[1rem] border border-line bg-paper/80 p-3.5">
                      <p className="flex items-start gap-2 text-[0.68rem] leading-5 text-body">
                        <Lock className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand" aria-hidden="true" />
                        {contactSection.form.privacyNote}
                      </p>
                    </div>

                    <div className="flex flex-col gap-3 border-t border-line pt-5 sm:flex-row sm:items-center sm:justify-between">
                      <button type="submit" className={`${primaryButton} w-full sm:w-auto`}>
                        Send Enquiry
                        <Send className="h-4 w-4" aria-hidden="true" />
                      </button>
                      <p className="text-center text-[0.65rem] leading-5 text-muted sm:text-right">
                        Demo form · no message is sent
                      </p>
                    </div>
                  </form>
                </>
              )}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
