"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "Johannesburg",
    rating: 5,
    text: "Wayne and his team did an amazing job removing a large tree from our backyard. They were professional, efficient, and left the area spotless. Highly recommend their services!",
    avatar: "SJ",
  },
  {
    id: 2,
    name: "Michael Thompson",
    location: "Pretoria",
    rating: 5,
    text: "I've used Wayne Tree Felling for multiple projects at my property. Their palm cleaning service is excellent, and they always provide great advice on tree maintenance.",
    avatar: "MT",
  },
  {
    id: 3,
    name: "Lisa Williams",
    location: "Cape Town",
    rating: 4,
    text: "Very pleased with the landscaping work done by Wayne's team. They transformed our garden completely and were very attentive to our specific requirements.",
    avatar: "LW",
  },
  {
    id: 4,
    name: "David Brown",
    location: "Durban",
    rating: 5,
    text: "Called Wayne for an emergency tree removal after a storm. They responded quickly and handled the situation professionally. Great service when you need it most!",
    avatar: "DB",
  },
  {
    id: 5,
    name: "Emily Parker",
    location: "Port Elizabeth",
    rating: 5,
    text: "The team at Wayne Tree Felling is exceptional. They removed several stumps from our property and did an excellent job with minimal disruption.",
    avatar: "EP",
  },
]

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [displayCount, setDisplayCount] = useState(3)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setDisplayCount(1)
      } else if (window.innerWidth < 1024) {
        setDisplayCount(2)
      } else {
        setDisplayCount(3)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % (testimonials.length - displayCount + 1))
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - displayCount : prevIndex - 1))
  }

  const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + displayCount)

  return (
    <section id="testimonials" className="py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <div className="w-20 h-1 bg-green-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say about our services.
          </p>
        </motion.div>

        <div className="relative">
          <div className="flex gap-6 overflow-hidden">
            {visibleTestimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="w-full"
              >
                <Card className="h-full shadow-lg border-none">
                  <CardContent className="p-4 md:p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <Avatar className="h-12 w-12 border-2 border-green-600">
                        <AvatarImage src={`/avatars/${testimonial.id}.jpg`} />
                        <AvatarFallback className="bg-green-100 text-green-800">{testimonial.avatar}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-semibold">{testimonial.name}</h4>
                        <p className="text-sm text-gray-500">{testimonial.location}</p>
                      </div>
                    </div>

                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${
                            i < testimonial.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>

                    <p className="text-gray-600 italic">"{testimonial.text}"</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center mt-6 md:mt-8 gap-3 md:gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              disabled={currentIndex === 0}
              className="rounded-full h-10 w-10 bg-transparent"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              disabled={currentIndex >= testimonials.length - displayCount}
              className="rounded-full h-10 w-10"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
