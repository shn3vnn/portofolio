"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Award, Figma } from "lucide-react"

export function PortfolioSection() {
  const [activeTab, setActiveTab] = useState("projects")

  const projects = [
    {
      title: "Mobile App Ecolink-Pelaporan Sampah",
      description: "Design Mobile App Pelaporan Sampah Menggunakan Figma",
      image: "/ecolink.png",
      technologies: ["Figma"],
      liveUrl: "https://www.figma.com/proto/b1cG1ytHyCCKZOzTHiw1aX/ecolink?node-id=305-248&p=f&t=ntnn0KEeojsj4jqA-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=5%3A74",
      figmaUrl: "https://www.figma.com/design/b1cG1ytHyCCKZOzTHiw1aX/ecolink?node-id=0-1&p=f&t=ntnn0KEeojsj4jqA-0",
      category: "Mobile Design"
    },
    {
      title: "Design Website Company Profile",
      description: "Website Company Profile SMPN 2 PRAMBON Menggunakan API",
      image: "/prambonwebsite.png",
      technologies: ["Figma"],
      liveUrl: "https://www.figma.com/proto/H18RsBJx1onoNOlqEHbKpO/SMPN-2-PRAMBON?node-id=498-901&t=PgVRWjYTaE5d9h6b-0&scaling=min-zoom&content-scaling=fixed&page-id=498%3A459",
      figmaUrl: "https://www.figma.com/design/H18RsBJx1onoNOlqEHbKpO/SMPN-2-PRAMBON?node-id=498-901&t=PgVRWjYTaE5d9h6b-0",
      category: "Web Design"
    },
    {
      title: "Website Pemesanan Bika Ambon",
      description: "Website Pemesanan Bika Ambon Menggunakan API",
      image: "/bikaambon.png",
      technologies: ["Laravel", "JavaScript", "API", "Tailwind"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Full Stack"
    },
  ]

  const certificates = [
    {
      title: "MAGE X ITS UI/UX Certification",
      issuer: "Design Mobile App",
      date: "2024",
      image: "/certifikat mage.jpg",
    },
    {
      title: "UX Design Fundamental Certification",
      issuer: "Certificate of Course Completion MySkill",
      date: "2024",
      image: "/certifikat pelatihan.jpg",
    },
    {
      title: "Preparation Course for Azure AI Fundamentals (AI-900)",
      issuer: "Elevate Course",
      date: "2025",
      image: "/elevate.png",
    },
  ]

  return (
    <section id="portfolio" className="py-20 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      <div className="absolute top-20 left-20 w-32 h-32 bg-primary/10 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-24 h-24 bg-secondary/10 rounded-full blur-xl animate-pulse delay-1000" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
            <span className="text-sm font-medium text-primary">My Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Portfolio
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Showcase project dan sertifikat yang telah saya kerjakan dan raih
          </p>
        </div>

        {/* Enhanced Tab Switcher */}
        <div className="flex justify-center mb-12">
          <div className="backdrop-blur-md bg-gradient-to-r from-gray-900/80 to-gray-800/60 rounded-2xl p-2 border-2 border-blue-500/20 hover:border-blue-400/40 shadow-lg hover:shadow-blue-500/10 transition-all duration-300">
            <Button
              variant={activeTab === "projects" ? "default" : "ghost"}
              onClick={() => setActiveTab("projects")}
              className={`rounded-xl transition-all duration-300 ${
                activeTab === "projects" 
                  ? "bg-gradient-to-r from-primary to-secondary text-white shadow-lg" 
                  : "hover:bg-primary/10"
              }`}
            >
              Projects
            </Button>
            <Button
              variant={activeTab === "certificates" ? "default" : "ghost"}
              onClick={() => setActiveTab("certificates")}
              className={`rounded-xl transition-all duration-300 ${
                activeTab === "certificates" 
                  ? "bg-gradient-to-r from-primary to-secondary text-white shadow-lg" 
                  : "hover:bg-primary/10"
              }`}
            >
              Certificates
            </Button>
          </div>
        </div>

        {/* Projects Grid */}
        {activeTab === "projects" && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group h-full">
                <div className="backdrop-blur-md bg-gradient-to-br from-gray-900/90 to-gray-800/80 rounded-3xl border-2 border-blue-500/30 hover:border-blue-400/50 shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 hover:scale-[1.02] overflow-hidden h-full flex flex-col">
                  {/* Image Container */}
                  <div className="relative aspect-video overflow-hidden flex-shrink-0">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10" />
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4 z-20">
                      <Badge className="bg-primary/90 text-white border-0">
                        {project.category}
                      </Badge>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors mb-3">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow">
                      {project.description}
                    </p>
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex} 
                          variant="secondary" 
                          className="text-xs bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex gap-3 mt-auto">
                      <Button 
                        size="sm" 
                        className="flex-1 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                        asChild
                      >
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="border-primary/50 hover:border-primary hover:bg-primary/10 transition-all duration-300"
                        asChild
                      >
                        <a href={project.figmaUrl || project.githubUrl} target="_blank" rel="noopener noreferrer">
                          {project.figmaUrl ? <Figma className="h-4 w-4" /> : <Github className="h-4 w-4" />}
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Certificates Grid */}
        {activeTab === "certificates" && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((cert, index) => (
              <div key={index} className="group h-full">
                <div className="backdrop-blur-md bg-gradient-to-br from-gray-900/90 to-gray-800/80 rounded-3xl border-2 border-blue-500/30 hover:border-blue-400/50 shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 hover:scale-[1.02] overflow-hidden h-full flex flex-col">
                  {/* Image Container */}
                  <div className="relative aspect-video overflow-hidden flex-shrink-0">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10" />
                    <img
                      src={cert.image || "/placeholder.svg"}
                      alt={cert.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4 z-20">
                      <div className="p-2 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-full backdrop-blur-sm">
                        <Award className="h-5 w-5 text-yellow-500" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors leading-tight mb-3">
                      {cert.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 flex-grow">
                      {cert.issuer}
                    </p>
                    <div className="flex items-center justify-between mt-auto">
                      <Badge className="bg-gradient-to-r from-primary/20 to-secondary/20 text-primary border-primary/30">
                        {cert.date}
                      </Badge>
                      <div className="flex items-center gap-1 text-yellow-500">
                        <Award className="h-4 w-4" />
                        <span className="text-xs font-medium">Certified</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
