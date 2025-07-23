"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { TreesIcon as Tree, Scissors, Shovel, Truck, Sprout, Flower2, Trash2 } from "lucide-react"
import Image from "next/image"

const services = [
  {
    icon: <Tree className="h-10 w-10 text-green-600" />,
    title: "Tree Felling",
    description: "Safe and efficient removal of trees of all sizes with proper equipment and techniques.",
    image: "/images/tree-felling-service.jpg",
  },
  {
    icon: <Scissors className="h-10 w-10 text-green-600" />,
    title: "Tree Trimming",
    description: "Professional pruning and trimming to maintain tree health and improve appearance.",
    image: "/hero2.jpeg",
  },
  {
    icon: <Shovel className="h-10 w-10 text-green-600" />,
    title: "Stump Removal",
    description: "Complete removal of tree stumps to clear your property for new landscaping or construction.",
    image: "/images/stump-removal-service.jpg",
  },
  {
    icon: <Sprout className="h-10 w-10 text-green-600" />,
    title: "Palm Cleaning",
    description: "Specialized palm tree maintenance including frond trimming and seed pod removal.",
    image: "/images/palm-cleaning-service.jpg",
  },
  {
    icon: <Truck className="h-10 w-10 text-green-600" />,
    title: "Transplant Trees",
    description: "Careful relocation of trees to new locations while ensuring their survival and health.",
    image: "/truck-hero.jpeg",
  },
  {
    icon: <Sprout className="h-10 w-10 text-green-600" />,
    title: "Landscaping",
    description: "Complete landscape design and implementation to enhance your property's appearance.",
    image: "/images/landscaping-service.jpg",
  },
  {
    icon: <Flower2 className="h-10 w-10 text-green-600" />,
    title: "Lawn Laying",
    description: "Professional lawn installation with high-quality grass varieties suited to your climate.",
    image: "hero2.jpeg",
  },
  {
    icon: <Trash2 className="h-10 w-10 text-green-600" />,
    title: "Plot Cleaning",
    description: "Thorough cleaning and clearing of plots for construction or landscaping projects.",
    image: "/images/plot-cleaning-service.jpg",
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Professional Services</h2>
          <div className="w-20 h-1 bg-green-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We offer a comprehensive range of tree care and landscaping services to meet all your outdoor needs.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={item}>
              <Card className="h-full border-none shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-2 rounded-full">
                    {service.icon}
                  </div>
                </div>
                <CardHeader className="text-center pt-6">
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-gray-600">{service.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
