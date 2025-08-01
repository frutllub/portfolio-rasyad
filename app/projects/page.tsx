import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink, Calendar } from "lucide-react"
import Image from "next/image"

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A full-featured e-commerce platform with user authentication, payment processing, inventory management, and admin dashboard. Built with modern technologies for optimal performance.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Tailwind CSS"],
      category: "Web Application",
      date: "2024",
      github: "https://github.com",
      demo: "https://demo.com",
      featured: true,
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates, team collaboration features, and advanced project tracking capabilities.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Material-UI"],
      category: "Web Application",
      date: "2024",
      github: "https://github.com",
      demo: "https://demo.com",
      featured: true,
    },
    {
      id: 3,
      title: "Weather Analytics Dashboard",
      description:
        "A comprehensive weather analytics platform that visualizes climate data with interactive charts and provides detailed weather forecasting.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["Vue.js", "D3.js", "Python", "FastAPI", "Chart.js"],
      category: "Data Visualization",
      date: "2023",
      github: "https://github.com",
      demo: "https://demo.com",
      featured: false,
    },
    {
      id: 4,
      title: "Mobile Fitness Tracker",
      description:
        "A React Native mobile application for fitness tracking with workout plans, progress monitoring, and social features for motivation.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["React Native", "Expo", "Firebase", "Redux", "Native Base"],
      category: "Mobile App",
      date: "2023",
      github: "https://github.com",
      demo: "https://demo.com",
      featured: false,
    },
    {
      id: 5,
      title: "AI Content Generator",
      description:
        "An AI-powered content generation tool that helps users create blog posts, social media content, and marketing copy using advanced language models.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["Next.js", "OpenAI API", "Prisma", "PostgreSQL", "Shadcn/ui"],
      category: "AI/ML",
      date: "2023",
      github: "https://github.com",
      demo: "https://demo.com",
      featured: true,
    },
    {
      id: 6,
      title: "Real Estate Platform",
      description:
        "A comprehensive real estate platform with property listings, virtual tours, mortgage calculators, and agent management system.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["Angular", "Spring Boot", "MySQL", "AWS S3", "Bootstrap"],
      category: "Web Application",
      date: "2022",
      github: "https://github.com",
      demo: "https://demo.com",
      featured: false,
    },
  ]

  const categories = ["All", "Web Application", "Mobile App", "Data Visualization", "AI/ML"]

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">My Projects</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A collection of projects I've worked on, showcasing various technologies and solving different challenges.
            Each project represents a unique learning experience and technical achievement.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button key={category} variant={category === "All" ? "default" : "outline"} className="rounded-full">
              {category}
            </Button>
          ))}
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Featured Projects</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {projects
              .filter((p) => p.featured)
              .map((project) => (
                <Card key={project.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="aspect-video overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={500}
                      height={300}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <Badge variant="secondary">{project.category}</Badge>
                      <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                        <Calendar className="h-4 w-4" />
                        {project.date}
                      </div>
                    </div>

                    <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex gap-3">
                      <Button asChild size="sm" variant="outline">
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </a>
                      </Button>
                      <Button asChild size="sm">
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>

        {/* All Projects */}
        <div>
          <h2 className="text-2xl font-bold mb-8">All Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card key={project.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="aspect-video overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={240}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="secondary" className="text-xs">
                      {project.category}
                    </Badge>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{project.date}</span>
                  </div>

                  <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">{project.description}</p>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>

                  <div className="flex gap-2">
                    <Button asChild size="sm" variant="outline" className="flex-1 bg-transparent">
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button asChild size="sm" className="flex-1">
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 py-12 bg-gray-50 dark:bg-gray-900 rounded-2xl">
          <h3 className="text-2xl font-bold mb-4">Interested in Working Together?</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
            I'm always open to discussing new projects and opportunities. Let's create something amazing together!
          </p>
          <Button asChild size="lg">
            <a href="/contact">Get In Touch</a>
          </Button>
        </div>
      </div>
    </div>
  )
}
