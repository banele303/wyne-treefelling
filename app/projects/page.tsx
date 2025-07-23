"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, MapPin, Clock, CheckCircle2, Star } from "lucide-react"

const projectCategories = [
  "All Projects",
  "Tree Felling",
  "Palm Cleaning",
  "Landscaping",
  "Stump Removal",
  "Emergency Response",
]

const projects = [
  {
    id: 1,
    title: "Emergency Storm Damage Response",
    category: "Emergency Response",
    location: "Sandton, Johannesburg",
    date: "March 2024",
    duration: "2 days",
    image: "/images/project-emergency.jpg",
    beforeImage: "/images/project-emergency-before.jpg",
    description: "Rapid response to storm-damaged trees threatening residential properties after severe weather.",
    challenge:
      "Multiple large trees had fallen across power lines and were blocking access roads. Time was critical to restore power and ensure resident safety.",
    solution:
      "Deployed emergency response team within 2 hours. Coordinated with Eskom to safely remove trees from power lines. Used specialized equipment to clear roads while preserving undamaged vegetation.",
    results: [
      "Power restored within 24 hours",
      "All access roads cleared",
      "Zero property damage",
      "5 families safely relocated back home",
    ],
    testimonial: {
      text: "Wayne's team was incredible. They arrived in the middle of the storm and worked tirelessly to make our neighborhood safe again.",
      author: "Jennifer Smith",
      rating: 5,
    },
  },
  {
    id: 2,
    title: "Heritage Oak Preservation Project",
    category: "Tree Felling",
    location: "Pretoria East",
    date: "February 2024",
    duration: "5 days",
    image: "/treefeling.jpeg",
    beforeImage: "/images/project-oak-before.jpg",
    description: "Careful removal of diseased sections while preserving a 100-year-old heritage oak tree.",
    challenge:
      "The century-old oak had significant disease in major branches but was a protected heritage tree that couldn't be removed entirely.",
    solution:
      "Worked with city arborists to develop a preservation plan. Used precision cutting techniques to remove only diseased wood while maintaining the tree's structural integrity and aesthetic value.",
    results: [
      "Heritage tree preserved",
      "Disease spread halted",
      "Tree health restored",
      "City heritage status maintained",
    ],
    testimonial: {
      text: "They saved our beloved oak tree. The precision and care they showed was remarkable.",
      author: "David Williams",
      rating: 5,
    },
  },
  {
    id: 3,
    title: "Commercial Palm Grove Maintenance",
    category: "Palm Cleaning",
    location: "Rosebank Shopping Center",
    date: "January 2024",
    duration: "3 days",
    image: "/images/project-palms.jpg",
    beforeImage: "/images/project-palms-before.jpg",
    description: "Complete maintenance of 50+ palm trees at a major shopping center entrance.",
    challenge:
      "Palm trees had become overgrown and were dropping fronds on customers. Maintenance needed to be done during business hours without disrupting foot traffic.",
    solution:
      "Scheduled work in phases during off-peak hours. Used specialized palm cleaning techniques to remove dead fronds, seed pods, and pest infestations while maintaining the trees' natural beauty.",
    results: [
      "50+ palms professionally maintained",
      "Zero customer disruption",
      "Improved aesthetic appeal",
      "Ongoing maintenance contract secured",
    ],
    testimonial: {
      text: "Professional, efficient, and considerate of our business operations. The palms look fantastic.",
      author: "Sarah Johnson, Center Manager",
      rating: 5,
    },
  },
  {
    id: 4,
    title: "Residential Garden Transformation",
    category: "Landscaping",
    location: "Fourways, Johannesburg",
    date: "December 2023",
    duration: "2 weeks",
    image: "/images/project-landscape.jpg",
    beforeImage: "/images/project-landscape-before.jpg",
    description: "Complete garden redesign including tree removal, landscaping, and new lawn installation.",
    challenge:
      "Overgrown garden with multiple dead trees, poor drainage, and no usable outdoor space for a growing family.",
    solution:
      "Comprehensive redesign including selective tree removal, soil improvement, drainage installation, indigenous plant selection, and new lawn areas for children to play.",
    results: [
      "5 dead trees safely removed",
      "1,200m² of new lawn installed",
      "Drainage issues resolved",
      "Family outdoor space created",
    ],
    testimonial: {
      text: "They transformed our jungle into a beautiful family garden. Our kids love playing outside now.",
      author: "Michael and Lisa Thompson",
      rating: 5,
    },
  },
  {
    id: 5,
    title: "Industrial Site Clearing",
    category: "Stump Removal",
    location: "Kempton Park Industrial",
    date: "November 2023",
    duration: "1 week",
    image: "/images/project-industrial.jpg",
    beforeImage: "/images/project-industrial-before.jpg",
    description:
      "Large-scale land clearing for new warehouse development including stump grinding and site preparation.",
    challenge:
      "5-hectare site with numerous large tree stumps and roots that needed complete removal for construction foundation work.",
    solution:
      "Used heavy-duty stump grinding equipment and excavation machinery to remove all organic material. Sorted and recycled wood waste into mulch and biomass fuel.",
    results: [
      "5 hectares completely cleared",
      "200+ stumps removed",
      "100% organic waste recycled",
      "Site ready for construction",
    ],
    testimonial: {
      text: "Efficient, thorough, and environmentally responsible. The site was perfectly prepared for our construction timeline.",
      author: "Construction Manager, ABC Developments",
      rating: 5,
    },
  },
  {
    id: 6,
    title: "Municipal Park Restoration",
    category: "Tree Felling",
    location: "Centurion Municipal Park",
    date: "October 2023",
    duration: "3 weeks",
    image: "/images/project-municipal.jpg",
    beforeImage: "/images/project-municipal-before.jpg",
    description: "Restoration of public park including removal of dangerous trees and replanting program.",
    challenge:
      "Several large trees posed safety risks to park visitors, but the community wanted to maintain the park's natural character.",
    solution:
      "Collaborated with city planners and community representatives to identify dangerous trees for removal and select appropriate native species for replanting. Implemented a phased approach to minimize park closure time.",
    results: [
      "15 dangerous trees safely removed",
      "30 new native trees planted",
      "Park safety improved",
      "Community green space preserved",
    ],
    testimonial: {
      text: "They balanced safety with environmental preservation perfectly. The park is beautiful and safe for our families.",
      author: "Centurion Residents Association",
      rating: 5,
    },
  },
]

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All Projects")
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  const filteredProjects =
    activeCategory === "All Projects" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/images/project-1.jpg" alt="Our projects hero" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="container relative z-10 text-center text-white">
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Projects
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Showcasing our expertise through successful tree care and landscaping projects
          </motion.p>
        </div>
      </section>

      {/* Project Stats */}
      <section className="py-20 bg-green-600 text-white">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="text-4xl font-bold mb-2">2000+</div>
              <div className="text-green-100">Projects Completed</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-green-100">Happy Clients</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-green-100">Years Experience</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-green-100">Satisfaction Rate</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Gallery */}
      <section className="py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Featured Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our portfolio of successful tree care and landscaping projects
            </p>
          </motion.div>

          <Tabs defaultValue="All Projects" className="mb-12">
            <TabsList className="flex flex-wrap justify-center gap-2 mb-8 overflow-x-auto max-w-full pb-2">
              {projectCategories.map((category) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  onClick={() => setActiveCategory(category)}
                  className="data-[state=active]:bg-green-600 data-[state=active]:text-white"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value={activeCategory} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card
                      className="border-none shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden cursor-pointer"
                      onClick={() => setSelectedProject(project.id)}
                    >
                      <div className="relative h-64 overflow-hidden">
                        <Image
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
                        <Badge className="absolute top-4 left-4 bg-green-600">{project.category}</Badge>
                      </div>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                        <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>

                        <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            <span>{project.location}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            <span>{project.date}</span>
                          </div>
                        </div>

                        <Button
                          variant="outline"
                          className="w-full group-hover:bg-green-600 group-hover:text-white transition-colors bg-transparent"
                        >
                          View Project Details
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Project Detail Modal/Section */}
      {selectedProject && (
        <section className="py-20 bg-gray-50">
          <div className="container">
            {(() => {
              const project = projects.find((p) => p.id === selectedProject)
              if (!project) return null

              return (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="max-w-6xl mx-auto"
                >
                  <div className="text-center mb-12">
                    <Button variant="outline" onClick={() => setSelectedProject(null)} className="mb-6">
                      ← Back to Projects
                    </Button>
                    <h2 className="text-4xl font-bold mb-4">{project.title}</h2>
                    <div className="flex items-center justify-center gap-6 text-gray-600">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-5 w-5" />
                        <span>{project.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-5 w-5" />
                        <span>{project.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-5 w-5" />
                        <span>{project.duration}</span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                    <div>
                      <h3 className="text-2xl font-semibold mb-4">Before</h3>
                      <div className="relative h-80 rounded-lg overflow-hidden shadow-lg">
                        <Image
                          src={project.beforeImage || project.image}
                          alt={`${project.title} - Before`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold mb-4">After</h3>
                      <div className="relative h-80 rounded-lg overflow-hidden shadow-lg">
                        <Image
                          src={project.image || "/placeholder.svg"}
                          alt={`${project.title} - After`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 space-y-8">
                      <div>
                        <h3 className="text-2xl font-semibold mb-4">Project Overview</h3>
                        <p className="text-gray-600 text-lg leading-relaxed">{project.description}</p>
                      </div>

                      <div>
                        <h3 className="text-2xl font-semibold mb-4">The Challenge</h3>
                        <p className="text-gray-600 leading-relaxed">{project.challenge}</p>
                      </div>

                      <div>
                        <h3 className="text-2xl font-semibold mb-4">Our Solution</h3>
                        <p className="text-gray-600 leading-relaxed">{project.solution}</p>
                      </div>

                      <div>
                        <h3 className="text-2xl font-semibold mb-4">Results Achieved</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {project.results.map((result, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                              <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                              <span className="text-gray-700">{result}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div>
                      <Card className="border-none shadow-lg">
                        <CardContent className="p-6">
                          <h3 className="text-xl font-semibold mb-4">Client Testimonial</h3>
                          <div className="flex mb-3">
                            {[...Array(project.testimonial.rating)].map((_, i) => (
                              <Star key={i} className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                            ))}
                          </div>
                          <blockquote className="text-gray-600 italic mb-4">"{project.testimonial.text}"</blockquote>
                          <cite className="text-sm font-medium text-gray-800">- {project.testimonial.author}</cite>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </motion.div>
              )
            })()}
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-green-600 text-white">
        <div className="container text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let us help you transform your property with our professional tree care and landscaping services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-green-600 hover:bg-gray-100">
                Get Your Free Quote
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent">
                Call: 071 965 9160
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
