"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  TreesIcon as Tree,
  Scissors,
  Shovel,
  Truck,
  Sprout,
  Flower2,
  Trash2,
  CheckCircle2,
  Clock,
  Shield,
  Award,
  Users,
  Star,
} from "lucide-react"

const services = [
  {
    icon: <Tree className="h-12 w-12 text-green-600" />,
    title: "Tree Felling",
    description: "Safe and efficient removal of trees of all sizes with proper equipment and techniques.",
    image: "/images/tree-felling-service.jpg",
    features: [
      "Emergency tree removal",
      "Large tree specialists",
      "Residential & commercial",
      "Fully insured operations",
    ],
    process: ["Site assessment", "Safety planning", "Professional removal", "Complete cleanup"],
    price: "From R800",
  },
  {
    icon: <Scissors className="h-12 w-12 text-green-600" />,
    title: "Tree Trimming",
    description: "Professional pruning and trimming to maintain tree health and improve appearance.",
    image: "/images/tree-trimming-service.jpg",
    features: ["Health-focused pruning", "Aesthetic shaping", "Disease prevention", "Growth management"],
    process: ["Tree health assessment", "Strategic planning", "Precision cutting", "Debris removal"],
    price: "From R500",
  },
  {
    icon: <Shovel className="h-12 w-12 text-green-600" />,
    title: "Stump Removal",
    description: "Complete removal of tree stumps to clear your property for new landscaping or construction.",
    image: "/images/stump-removal-service.jpg",
    features: ["Grinding & extraction", "Root system removal", "Site restoration", "Mulch provision"],
    process: ["Stump assessment", "Equipment setup", "Grinding process", "Site cleanup"],
    price: "From R400",
  },
  {
    icon: <Sprout className="h-12 w-12 text-green-600" />,
    title: "Palm Cleaning",
    description: "Specialized palm tree maintenance including frond trimming and seed pod removal.",
    image: "/images/palm-cleaning-service.jpg",
    features: ["Frond trimming", "Seed pod removal", "Health inspection", "Pest prevention"],
    process: ["Palm inspection", "Selective trimming", "Cleaning & shaping", "Health monitoring"],
    price: "From R300",
  },
  {
    icon: <Truck className="h-12 w-12 text-green-600" />,
    title: "Tree Transplanting",
    description: "Careful relocation of trees to new locations while ensuring their survival and health.",
    image: "/images/transplant-service.jpg",
    features: ["Root ball preparation", "Safe transportation", "Replanting expertise", "Aftercare support"],
    process: ["Tree evaluation", "Root preparation", "Careful extraction", "Professional replanting"],
    price: "From R1200",
  },
  {
    icon: <Sprout className="h-12 w-12 text-green-600" />,
    title: "Landscaping",
    description: "Complete landscape design and implementation to enhance your property's appearance.",
    image: "/images/landscaping-service.jpg",
    features: ["Custom design", "Plant selection", "Irrigation systems", "Maintenance plans"],
    process: ["Design consultation", "Site preparation", "Installation", "Final touches"],
    price: "Quote on request",
  },
  {
    icon: <Flower2 className="h-12 w-12 text-green-600" />,
    title: "Lawn Installation",
    description: "Professional lawn installation with high-quality grass varieties suited to your climate.",
    image: "/images/lawn-laying-service.jpg",
    features: ["Soil preparation", "Quality grass varieties", "Irrigation setup", "Maintenance guidance"],
    process: ["Soil analysis", "Ground preparation", "Grass installation", "Initial care"],
    price: "From R45/m²",
  },
  {
    icon: <Trash2 className="h-12 w-12 text-green-600" />,
    title: "Plot Cleaning",
    description: "Thorough cleaning and clearing of plots for construction or landscaping projects.",
    image: "/images/plot-cleaning-service.jpg",
    features: ["Vegetation clearing", "Debris removal", "Site leveling", "Waste disposal"],
    process: ["Site survey", "Clearing plan", "Systematic removal", "Final cleanup"],
    price: "From R150/hour",
  },
]

const whyChooseUs = [
  {
    icon: <Shield className="h-8 w-8 text-green-600" />,
    title: "Fully Insured",
    description: "Complete liability coverage for your peace of mind",
  },
  {
    icon: <Award className="h-8 w-8 text-green-600" />,
    title: "15+ Years Experience",
    description: "Proven track record of excellence in tree services",
  },
  {
    icon: <Users className="h-8 w-8 text-green-600" />,
    title: "Expert Team",
    description: "Certified arborists and skilled professionals",
  },
  {
    icon: <Clock className="h-8 w-8 text-green-600" />,
    title: "24/7 Emergency",
    description: "Available for urgent tree removal situations",
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/images/hero-bg.jpg" alt="Tree services hero" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="container relative z-10 text-center text-white">
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Services
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Professional tree care and landscaping services tailored to your needs
          </motion.p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Complete Tree Care Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From emergency tree removal to beautiful landscaping, we provide comprehensive services to keep your
              property safe, healthy, and beautiful.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-20">
        <div className="container">
          <div className="space-y-20">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className="relative">
                    <div className="absolute -top-4 -left-4 w-24 h-24 bg-green-600 rounded-tl-3xl z-0"></div>
                    <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl">
                      <Image
                        src={service.image || "/placeholder.svg"}
                        alt={service.title}
                        width={600}
                        height={400}
                        className="w-full h-80 object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-green-600 rounded-br-3xl z-0"></div>
                  </div>
                </div>

                <div className={index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
                  <div className="flex items-center gap-4 mb-6">
                    {service.icon}
                    <div>
                      <h3 className="text-3xl font-bold">{service.title}</h3>
                      <Badge variant="secondary" className="mt-2">
                        {service.price}
                      </Badge>
                    </div>
                  </div>

                  <p className="text-lg text-gray-600 mb-8">{service.description}</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
                        <Star className="h-5 w-5 text-green-600" />
                        Key Features
                      </h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
                        <Clock className="h-5 w-5 text-green-600" />
                        Our Process
                      </h4>
                      <ol className="space-y-2">
                        {service.process.map((step, idx) => (
                          <li key={idx} className="flex items-center gap-3">
                            <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold">
                              {idx + 1}
                            </span>
                            <span className="text-gray-700">{step}</span>
                          </li>
                        ))}
                      </ol>
                    </div>
                  </div>

                  <Button className="bg-green-600 hover:bg-green-700 text-white">Get Quote for {service.title}</Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600 text-white">
        <div className="container text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Property?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Contact us today for a free consultation and quote. Our expert team is ready to help you achieve your
              vision.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-green-600 hover:bg-gray-100">
                Get Free Quote
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent">
                Call Now: 071 965 9160
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
