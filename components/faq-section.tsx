"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "How much does tree removal cost?",
    answer:
      "The cost of tree removal varies depending on several factors including the size of the tree, its location, accessibility, and the complexity of the job. We provide free quotations to give you an accurate estimate based on your specific requirements.",
  },
  {
    question: "Do you provide emergency tree services?",
    answer:
      "Yes, we offer emergency tree services for situations that require immediate attention, such as storm-damaged trees or trees posing an immediate risk to property or safety. Contact our emergency line for prompt assistance.",
  },
  {
    question: "Are you fully insured?",
    answer:
      "Yes, we are fully insured and registered. We carry comprehensive liability insurance and workers' compensation to protect both our clients and our team members during all tree service operations.",
  },
  {
    question: "How long does it take to remove a tree?",
    answer:
      "The time required to remove a tree depends on its size, location, and complexity. Small trees may take a few hours, while larger trees could require a full day or more. We'll provide you with a time estimate during our initial assessment.",
  },
  {
    question: "Do you clean up after tree removal?",
    answer:
      "We take pride in our clean-up process. After completing any tree service, we thoroughly clean the area, removing all debris, branches, and wood chips. We can also arrange for wood disposal or leave firewood if requested.",
  },
  {
    question: "What areas do you service?",
    answer:
      "We provide our tree services throughout the greater metropolitan area and surrounding suburbs. Contact us with your location, and we'll confirm if we service your area.",
  },
]

export default function FAQSection() {
  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <div className="w-20 h-1 bg-green-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about our tree services and processes.
          </p>
        </motion.div>

        <div className="container">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <AccordionItem value={`item-${index}`}>
                  <AccordionTrigger className="text-left font-medium">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-gray-600">{faq.answer}</AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
