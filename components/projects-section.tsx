"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const projectCategories = ["All Projects", "Tree Felling", "Palm Cleaning", "Landscaping", "Stump Removal"]

const projects = [
  {
    id: 1,
    title: "Large Pine Tree Removal",
    category: "Tree Felling",
    image: "/images/project-1.jpg",
    description: "Safe removal of a 20-meter pine tree in a residential area with limited access.",
  },
  {
    id: 2,
    title: "Palm Tree Maintenance",
    category: "Palm Cleaning",
    image: "/treefeling.jpeg",
    description: "Regular maintenance and cleaning of palm trees for a commercial property.",
  },
  {
    id: 3,
    title: "Garden Landscaping Project",
    category: "Landscaping",
    image: "/images/project-3.jpg",
    description: "Complete garden redesign including lawn laying and plant selection.",
  },
  {
    id: 4,
    title: "Stump Grinding Service",
    category: "Stump Removal",
    image: "/images/project-4.jpg",
    description: "Removal of multiple tree stumps to prepare land for new construction.",
  },
  {
    id: 5,
    title: "Emergency Tree Removal",
    category: "Tree Felling",
    image: "/images/project-5.jpg",
    description: "Emergency removal of a storm-damaged tree threatening a residential structure.",
  },
  {
    id: 6,
    title: "Commercial Palm Cleaning",
    category: "Palm Cleaning",
    image: "/images/project-6.jpg",
    description: "Regular maintenance of palm trees for a shopping center entrance.",
  },
]

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("All Projects")

  const filteredProjects =
    activeCategory === "All Projects" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Recent Projects</h2>
          <div className="w-20 h-1 bg-green-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Take a look at some of our recent work showcasing our expertise and quality service.
          </p>
        </motion.div>

        <Tabs defaultValue="All Projects" className="mb-12">
          <TabsList className="flex flex-wrap justify-center gap-2 mb-6 md:mb-8 overflow-x-auto max-w-full pb-2">
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
            <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="group relative overflow-hidden rounded-lg shadow-lg"
                >
                  <div className="relative h-52 sm:h-64 overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-sm text-gray-200">{project.description}</p>
                    <span className="inline-block mt-3 text-xs font-medium bg-green-600 px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
