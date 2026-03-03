"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsOpen(false)
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "portfolio"]
      const current = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (current) setActiveSection(current)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "portfolio", label: "Portfolio" },
  ]

  return (
    <>
      {/* Desktop Sidebar */}
      <nav className="hidden lg:flex fixed left-0 top-0 h-full w-20 bg-gray-900/95 backdrop-blur-xl border-r border-gray-800 z-50 flex-col items-center py-8">
        {/* Logo */}
        <div className="mb-12">
          <div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center">
            <span className="text-white font-bold text-lg">AE</span>
          </div>
        </div>

        {/* Navigation Items */}
        <div className="flex flex-col space-y-6">
          {navItems.map((item) => {
            const isActive = activeSection === item.id
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`group relative w-12 h-12 rounded-xl transition-all duration-300 flex items-center justify-center ${
                  isActive
                    ? "bg-blue-500 text-white"
                    : "text-gray-400 hover:text-white hover:bg-gray-800"
                }`}
                title={item.label}
              >
                <div className="w-2 h-2 rounded-full bg-current" />
                {isActive && (
                  <div className="absolute left-full ml-4 px-3 py-1 bg-blue-500 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {item.label}
                  </div>
                )}
              </button>
            )
          })}
        </div>
      </nav>

      {/* Mobile Top Navigation */}
      <nav className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-xl border-b border-gray-800">
        <div className="px-4 h-16 flex items-center justify-between">
          <div className="text-white font-bold text-xl">Al Evan</div>
          
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-400 hover:text-white"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-gray-900/95 backdrop-blur-xl border-b border-gray-800">
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => {
                const isActive = activeSection === item.id
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 ${
                      isActive
                        ? "bg-blue-500 text-white"
                        : "text-gray-400 hover:text-white hover:bg-gray-800"
                    }`}
                  >
                    {item.label}
                  </button>
                )
              })}
            </div>
          </div>
        )}
      </nav>
    </>
  )
}
