"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"

export function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center py-20">
      <div className="w-full max-w-6xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          {/* Left Side - Content */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="space-y-8">
              <div className="space-y-4">
                <p className="text-blue-400 font-medium text-lg tracking-wide">Hello, I&apos;m</p>
                <h1 className="text-6xl lg:text-8xl font-bold text-white leading-tight">
                  Al Evan
                </h1>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-0.5 bg-blue-500"></div>
                  <h2 className="text-xl lg:text-2xl text-gray-300 font-light">
                    UI/UX Designer
                  </h2>
                </div>
              </div>

              <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
                Passionate about creating digital experiences that are not only beautiful 
                but also functional and user-centered.
              </p>

              <div className="flex flex-wrap gap-6 pt-4">
                <a
                  href="https://www.instagram.com/epandmntr?igsh=MTIxbm9zamN0Y21ibQ%3D%3D&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-10 py-4 text-lg font-medium rounded-full transition-all duration-300"
                  >
                    Contact Me
                  </Button>
                </a>
              </div>

              <div className="flex space-x-6 pt-8">
                <a
                  href="https://www.linkedin.com/in/al-evan-diamantoro-b285792ab/?originalSubdomain=id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-gray-800/50 hover:bg-blue-500 text-gray-400 hover:text-white rounded-full transition-all duration-300 border border-gray-700 hover:border-blue-500"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
                <a
                  href="https://github.com/shn3vnn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-gray-800/50 hover:bg-blue-500 text-gray-400 hover:text-white rounded-full transition-all duration-300 border border-gray-700 hover:border-blue-500"
                >
                  <Github className="h-6 w-6" />
                </a>
                <a
                  href="https://mail.google.com/mail/u/0/?hl=en#inbox?compose=new"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-gray-800/50 hover:bg-blue-500 text-gray-400 hover:text-white rounded-full transition-all duration-300 border border-gray-700 hover:border-blue-500"
                >
                  <Mail className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="lg:col-span-5 order-1 lg:order-2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-3xl blur-2xl transform rotate-6"></div>
              <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 p-1 rounded-3xl">
                <img
                  src="/fotosaya.jpg"
                  alt="Al Evan Diamantoro"
                  className="w-full h-auto rounded-3xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
