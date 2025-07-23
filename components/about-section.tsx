"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"

const benefits = [
  "Fully registered and insured professionals",
  "Over 15 years of industry experience",
  "Modern equipment and safety protocols",
  "Environmentally responsible practices",
  "Free quotations and competitive pricing",
  "Emergency services available",
]

export default function AboutSection() {
  return (
    <section id="about" className="py-20">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-green-600 rounded-tl-3xl z-0"></div>
              <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/images/about-image.jpg"
                  alt="Professional tree service team"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-green-600 rounded-br-3xl z-0"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6">About Wayne Tree Felling</h2>
            <div className="w-20 h-1 bg-green-600 mb-6"></div>
            <p className="text-lg text-gray-600 mb-6">
              With over 15 years of experience in the industry, Wayne Tree Felling has established itself as a trusted
              name in professional tree services. Our team of skilled arborists and landscaping professionals is
              dedicated to providing safe, efficient, and high-quality services for residential and commercial clients.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              We take pride in our work and are committed to customer satisfaction. Our comprehensive range of services
              ensures that all your tree care and landscaping needs are met with the highest standards of
              professionalism and expertise.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3 mb-6 md:mb-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-2"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </motion.div>
              ))}
            </div>

            <Button className="bg-green-600 hover:bg-green-700 text-white">Learn More About Us</Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
