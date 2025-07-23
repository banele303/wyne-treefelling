"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Award, Users, Clock, Shield, Target, Heart, Zap } from "lucide-react"

const stats = [
  { number: "15+", label: "Years Experience", icon: <Clock className="h-8 w-8" /> },
  { number: "2000+", label: "Projects Completed", icon: <Award className="h-8 w-8" /> },
  { number: "500+", label: "Happy Clients", icon: <Users className="h-8 w-8" /> },
  { number: "24/7", label: "Emergency Service", icon: <Shield className="h-8 w-8" /> },
]

const values = [
  {
    icon: <Shield className="h-12 w-12 text-green-600" />,
    title: "Safety First",
    description:
      "Every project begins with a comprehensive safety assessment. We use the latest equipment and follow strict safety protocols to protect our team, your property, and your family.",
  },
  {
    icon: <Heart className="h-12 w-12 text-green-600" />,
    title: "Environmental Care",
    description:
      "We're committed to sustainable practices. When possible, we relocate rather than remove trees, and all organic waste is recycled into mulch or compost.",
  },
  {
    icon: <Target className="h-12 w-12 text-green-600" />,
    title: "Precision & Quality",
    description:
      "Our skilled arborists bring precision to every cut and attention to detail in every project. We don't just remove trees – we craft outdoor spaces.",
  },
  {
    icon: <Zap className="h-12 w-12 text-green-600" />,
    title: "Rapid Response",
    description:
      "Storm damage doesn't wait for business hours. Our emergency response team is available 24/7 to handle urgent tree removal and property protection.",
  },
]

const team = [
  {
    name: "Wayne Johnson",
    role: "Founder & Lead Arborist",
    image: "/images/team-wayne.jpg",
    bio: "With over 15 years in the industry, Wayne founded the company with a vision to provide safe, professional tree services. He's certified in advanced rigging techniques and emergency response.",
    certifications: ["ISA Certified Arborist", "Tree Risk Assessment", "Crane Operations"],
  },
  {
    name: "Michael Stevens",
    role: "Senior Tree Surgeon",
    image: "/images/team-michael.jpg",
    bio: "Michael brings 12 years of experience in complex tree removals and pruning. He specializes in working in confined spaces and around power lines.",
    certifications: ["Advanced Rigging", "Electrical Hazard Awareness", "First Aid Certified"],
  },
  {
    name: "Sarah Thompson",
    role: "Landscape Designer",
    image: "/images/team-sarah.jpg",
    bio: "Sarah transforms outdoor spaces with her eye for design and deep knowledge of indigenous plants. She creates sustainable landscapes that thrive in our climate.",
    certifications: ["Landscape Architecture", "Horticulture Specialist", "Irrigation Design"],
  },
]

const timeline = [
  {
    year: "2008",
    title: "Company Founded",
    description: "Wayne started with a single truck and a passion for professional tree care.",
  },
  {
    year: "2012",
    title: "Team Expansion",
    description: "Grew to a team of 5 certified professionals and added specialized equipment.",
  },
  {
    year: "2016",
    title: "Commercial Contracts",
    description: "Secured major commercial contracts with shopping centers and municipalities.",
  },
  {
    year: "2020",
    title: "Emergency Response Unit",
    description: "Launched 24/7 emergency response service for storm damage and urgent removals.",
  },
  {
    year: "2023",
    title: "Sustainability Initiative",
    description: "Implemented comprehensive recycling program and eco-friendly practices.",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/images/about-image.jpg" alt="About Wayne Tree Felling" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="container relative z-10 text-center text-white">
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            About Wayne Tree Felling
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            15+ years of professional tree care, building trust one project at a time
          </motion.p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-green-600 text-white">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="mb-4 flex justify-center text-green-200">{stat.icon}</div>
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-green-100">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-6">Our Story</h2>
              <div className="space-y-6 text-lg text-gray-600">
                <p>
                  Wayne Tree Felling began in 2008 with a simple mission: to provide safe, professional, and reliable
                  tree services to our community. What started as a one-man operation with a single truck has grown into
                  a trusted team of certified professionals.
                </p>
                <p>
                  Our founder, Wayne Johnson, recognized the need for quality tree care services that prioritized both
                  safety and environmental responsibility. After witnessing too many accidents and poor practices in the
                  industry, he set out to establish a company that would set new standards for professionalism.
                </p>
                <p>
                  Today, we're proud to be the go-to tree service company for hundreds of satisfied customers across
                  Johannesburg, Pretoria, and surrounding areas. Our commitment to excellence, safety, and customer
                  satisfaction remains as strong as ever.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-green-600 rounded-tl-3xl z-0"></div>
                <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl">
                  <Image
                    src="/images/about-story.jpg"
                    alt="Wayne Tree Felling story"
                    width={600}
                    height={400}
                    className="w-full h-96 object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-green-600 rounded-br-3xl z-0"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide every decision we make and every service we provide
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">{value.icon}</div>
                      <div>
                        <h3 className="text-2xl font-semibold mb-4">{value.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{value.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key milestones in our growth and commitment to excellence
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-green-600"></div>

            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`relative flex items-center mb-12 ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
              >
                <div className={`w-5/12 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
                  <Card className="border-none shadow-lg">
                    <CardContent className="p-6">
                      <Badge className="mb-3 bg-green-600">{item.year}</Badge>
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </CardContent>
                  </Card>
                </div>

                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-green-600 rounded-full border-4 border-white shadow-lg"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Meet Our Expert Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Certified professionals dedicated to providing exceptional tree care services
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                  <div className="relative h-64">
                    <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                    <p className="text-green-600 font-medium mb-4">{member.role}</p>
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">{member.bio}</p>
                    <div className="space-y-1">
                      {member.certifications.map((cert, idx) => (
                        <Badge key={idx} variant="secondary" className="mr-2 mb-1 text-xs">
                          {cert}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600 text-white">
        <div className="container text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl font-bold mb-6">Experience the Difference</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join hundreds of satisfied customers who trust Wayne Tree Felling for all their tree care needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-green-600 hover:bg-gray-100">
                Get Your Free Quote
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent">
                View Our Projects
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
