"use client"

import { Phone, MessageSquare } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"

interface FloatingContactButtonsProps {
  phone: string
  whatsapp: string
}

export default function FloatingContactButtons({ phone, whatsapp }: FloatingContactButtonsProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="fixed bottom-6 right-4 md:bottom-8 md:right-8 z-50 flex flex-col gap-3 md:gap-4">
      <motion.a
        href={`tel:${phone}`}
        className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-green-700 text-white shadow-lg hover:bg-green-800 transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Phone size={20} className="md:h-6 md:w-6" />
      </motion.a>

      <motion.a
        href={`https://wa.me/${whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <MessageSquare size={20} className="md:h-6 md:w-6" />

        {isHovered && (
          <motion.span
            className="absolute right-16 bg-white text-green-800 px-3 py-1 rounded-md shadow-md whitespace-nowrap"
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
          >
            Chat on WhatsApp
          </motion.span>
        )}
      </motion.a>
    </div>
  )
}
