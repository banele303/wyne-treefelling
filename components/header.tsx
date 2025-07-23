"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone } from "lucide-react"

const navItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "#contact" },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container flex items-center justify-between px-4 md:px-8">
        <Link href="/" className="flex items-center pr-6">
          <Image src="/newfreelogo.png" alt="Wayne Tree Felling Logo" width={300} height={130} className="h-36 w-auto -my-12" />
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                isScrolled ? "text-gray-700 hover:bg-gray-100" : "text-white hover:bg-white/20"
              }`}
              onClick={(e) => {
                if (item.href.startsWith("#")) {
                  e.preventDefault()
                  document.querySelector(item.href)?.scrollIntoView({
                    behavior: "smooth",
                  })
                }
              }}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center">
          <a
            href="tel:0719659160"
            className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium ${
              isScrolled ? "text-green-600" : "text-white"
            }`}
          >
            <Phone className="h-4 w-4" />
            <span>071 965 9160</span>
          </a>

          <Button
            className="bg-green-600 hover:bg-green-700 text-white ml-4"
            onClick={() => {
              if (window.location.pathname === "/") {
                document.querySelector("#contact")?.scrollIntoView({
                  behavior: "smooth",
                })
              } else {
                window.location.href = "/#contact"
              }
            }}
          >
            Get a Quote
          </Button>
        </div>

        <button className="md:hidden text-gray-700" onClick={toggleMobileMenu} aria-label="Toggle menu">
          <Menu className={`h-6 w-6 ${isScrolled ? "text-gray-700" : "text-white"}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white"
          >
            <div className="container py-4">
              <div className="flex justify-end mb-4">
                <button onClick={closeMobileMenu} className="text-gray-700" aria-label="Close menu">
                  <X className="h-6 w-6" />
                </button>
              </div>

              <nav className="flex flex-col space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="px-4 py-2 rounded-md text-gray-700 hover:bg-gray-100 font-medium"
                    onClick={(e) => {
                      if (item.href.startsWith("#")) {
                        e.preventDefault()
                        document.querySelector(item.href)?.scrollIntoView({
                          behavior: "smooth",
                        })
                        closeMobileMenu()
                      } else {
                        closeMobileMenu()
                      }
                    }}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>

              <div className="mt-6 flex flex-col space-y-4">
                <a
                  href="tel:0719659160"
                  className="flex items-center gap-2 px-4 py-2 rounded-md text-green-600 font-medium"
                >
                  <Phone className="h-4 w-4" />
                  <span>071 965 9160</span>
                </a>

                <Button
                  className="bg-green-600 hover:bg-green-700 text-white w-full"
                  onClick={() => {
                    if (window.location.pathname === "/") {
                      document.querySelector("#contact")?.scrollIntoView({
                        behavior: "smooth",
                      })
                    } else {
                      window.location.href = "/#contact"
                    }
                    closeMobileMenu()
                  }}
                >
                  Get a Quote
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
