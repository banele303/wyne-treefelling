"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

export default function HeroSection() {
  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-black">
      {/* Decorative bottom gradient for modern effect */}
      <div className="absolute bottom-0 left-0 w-full h-32 pointer-events-none z-20" style={{background: "linear-gradient(to top, #111 80%, transparent 100%)"}} />
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <Image src="/treefeeling-hero.jpeg" alt="Tree service hero image" fill className="object-cover scale-105" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full px-4 text-center text-white">
        <div className="backdrop-blur-md bg-black/40 rounded-2xl p-8 md:p-16 shadow-2xl mx-auto">

        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Professional Tree Services
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Expert tree felling, trimming, and landscaping services with over 15 years of experience
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg">
            Get a Free Quote
          </Button>    
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white/20 px-8 py-6 text-lg bg-transparent"
          >
            Our Services
          </Button>
        </motion.div>
        </div>
      </div>

      {/* Scroll down indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
        onClick={scrollToServices}
      >
        <ChevronDown className="text-white h-10 w-10" />
      </motion.div>
    </section>
  )
}
