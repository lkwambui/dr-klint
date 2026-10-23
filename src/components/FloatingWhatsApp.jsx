import { useState } from 'react'
import { getWhatsAppHref, siteContent } from '../data/siteContent'
import { WhatsAppIcon } from './ui/BrandIcons'

export default function FloatingWhatsApp() {
  const [showNotice, setShowNotice] = useState(false)
  const { phoneNumber, message } = siteContent.contact.whatsapp
  const href = getWhatsAppHref(phoneNumber, message)
  const isConfigured = Boolean(href)

  const buttonContent = (
    <>
      <span className="whatsapp-pulse absolute inset-0 rounded-full bg-[#25D366]" aria-hidden="true" />
      <WhatsAppIcon className="relative z-10 h-[1.7rem] w-[1.7rem]" />
    </>
  )

  return (
    <div className="whatsapp-position fixed z-[55]">
      <div className="group relative">
        {showNotice ? (
          <p
            role="status"
            aria-live="polite"
            className="absolute bottom-full right-0 mb-3 w-56 rounded-xl border border-line bg-white px-3.5 py-2.5 text-xs font-medium leading-5 text-ink shadow-soft"
          >
            WhatsApp contact is unavailable until Dr. Klint&apos;s number is confirmed.
          </p>
        ) : null}
        <span
          className={`pointer-events-none absolute bottom-full right-0 mb-3 hidden whitespace-nowrap rounded-xl border border-line bg-white px-3.5 py-2.5 text-xs font-semibold text-ink shadow-soft ${
            showNotice ? '' : 'group-hover:block group-focus-within:block'
          }`}
        >
          {isConfigured ? 'Chat with Dr. Klint on WhatsApp' : 'WhatsApp number pending confirmation'}
        </span>
        {href ? (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with Dr. Klint on WhatsApp"
            className="whatsapp-float relative grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_10px_28px_-8px_rgba(22,101,52,0.65)] transition duration-200 hover:scale-105 hover:shadow-[0_14px_34px_-8px_rgba(22,101,52,0.78)] active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#128C7E] sm:h-16 sm:w-16"
          >
            {buttonContent}
          </a>
        ) : (
          <button
            type="button"
            aria-label="WhatsApp contact unavailable until Dr. Klint's number is confirmed"
            aria-describedby="whatsapp-pending"
            onClick={() => setShowNotice((visible) => !visible)}
            onBlur={() => setShowNotice(false)}
            className="whatsapp-float relative grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_10px_28px_-8px_rgba(22,101,52,0.65)] transition duration-200 hover:scale-105 hover:shadow-[0_14px_34px_-8px_rgba(22,101,52,0.78)] active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#128C7E] sm:h-16 sm:w-16"
          >
            {buttonContent}
          </button>
        )}
        {!isConfigured ? (
          <span id="whatsapp-pending" className="sr-only">
            WhatsApp is disabled in this demo until Dr. Klint approves a verified number.
          </span>
        ) : null}
      </div>
    </div>
  )
}
