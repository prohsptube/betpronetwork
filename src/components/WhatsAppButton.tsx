'use client'

import { FaWhatsapp } from 'react-icons/fa'

interface WhatsAppButtonProps {
  phoneNumber: string
}

export default function WhatsAppButton({ phoneNumber }: WhatsAppButtonProps) {
  const handleClick = () => {
    const message = encodeURIComponent('Hi! I want to get a BetPro ID.')
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank')
  }

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all transform hover:scale-110 animate-pulse"
      aria-label="Contact us on WhatsApp"
    >
      <FaWhatsapp className="text-4xl" />
    </button>
  )
}
