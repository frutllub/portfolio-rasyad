import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Github, Linkedin, Mail, Download, Code, Palette, Zap } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center bg-gradient-to-br from-purple-50 via-white to-purple-100 dark:from-gray-900 dark:via-purple-950/20 dark:to-gray-900">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-2 h-2 bg-purple-400 rounded-full opacity-60"></div>
          <div className="absolute top-40 right-20 w-1 h-1 bg-purple-500 rounded-full opacity-40"></div>
          <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-purple-600 rounded-full opacity-50"></div>
          <div className="absolute top-60 right-1/3 w-1 h-1 bg-purple-400 rounded-full opacity-30"></div>
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="mb-8">
            <div className="relative inline-block">
              <Image
                src="/profile.png?height=200&width=200"
                alt="Muhammad Amirul Rasyad Profile Picture"
                width={200}
                height={200}
                className="rounded-full mx-auto mb-6 border-4 border-white shadow-xl"
              />
              {/* Purple glow effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-400/20 to-purple-600/20 blur-xl"></div>
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 dark:from-purple-400 dark:via-purple-500 dark:to-purple-600 bg-clip-text text-transparent">
            Muhammad Amirul Rasyad
          </h1>

          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-4 font-medium">
            Student in Bachelor of Electronic Engineering Technology (Computer System) at Universiti Malaysia Pahang
          </p>

          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            Crafting digital experiences with elegant code and beautiful design. Passionate about creating solutions
            that make a meaningful impact in the digital world.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <Link href="/projects">
                View My Work <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-purple-300 text-purple-700 hover:bg-purple-50 dark:border-purple-600 dark:text-purple-400 dark:hover:bg-purple-950/50 bg-transparent"
            >
              <Link href="/contact">
                Get In Touch <Mail className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="flex justify-center gap-6">
            <Button
              variant="ghost"
              size="sm"
              asChild
              className="hover:bg-purple-100 dark:hover:bg-purple-950/50 transition-colors"
            >
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5 text-purple-600 dark:text-purple-400" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              asChild
              className="hover:bg-purple-100 dark:hover:bg-purple-950/50 transition-colors"
            >
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5 text-purple-600 dark:text-purple-400" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              asChild
              className="hover:bg-purple-100 dark:hover:bg-purple-950/50 transition-colors"
            >
              <a href="mailto:john@example.com">
                <Mail className="h-5 w-5 text-purple-600 dark:text-purple-400" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Skills Preview */}
      <section className="py-16 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">What I Do</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Combining technical expertise with creative vision to deliver exceptional digital experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-purple-100 dark:border-purple-900/50">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Code className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Full-Stack Development</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Building robust web applications with modern technologies like React, Next.js, and Node.js.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-purple-100 dark:border-purple-900/50">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Palette className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">UI/UX Design</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Creating intuitive and beautiful user interfaces that provide exceptional user experiences.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-purple-100 dark:border-purple-900/50">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Performance Optimization</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Optimizing applications for speed, scalability, and exceptional performance across all devices.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Work Preview */}
      <section className="py-16 px-4 bg-gradient-to-br from-purple-50 to-white dark:from-gray-900 dark:to-purple-950/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">Featured Projects</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A selection of my recent work showcasing various technologies and design approaches.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[1, 2, 3].map((i) => (
              <Card
                key={i}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-purple-100 dark:border-purple-900/50 overflow-hidden"
              >
                <div className="aspect-video bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-900/50 dark:to-purple-800/50 overflow-hidden relative">
                  <Image
                    src={`/placeholder.svg?height=240&width=400&query=modern web application screenshot project ${i}`}
                    alt={`Project ${i}`}
                    width={400}
                    height={240}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent"></div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Project {i}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    A brief description of this amazing project and the technologies used to build it.
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 text-sm rounded-full">
                      React
                    </span>
                    <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 text-sm rounded-full">
                      Next.js
                    </span>
                    <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 text-sm rounded-full">
                      TypeScript
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-purple-300 text-purple-700 hover:bg-purple-50 dark:border-purple-600 dark:text-purple-400 dark:hover:bg-purple-950/50 bg-transparent"
            >
              <Link href="/projects">
                View All Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Quick About */}
      <section className="py-16 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">About Me</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
            I'm a passionate full-stack developer with expertise in creating digital solutions that solve real-world
            problems. I specialize in modern web technologies and have a keen eye for design and user experience, always
            striving to deliver exceptional results.
          </p>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-purple-300 text-purple-700 hover:bg-purple-50 dark:border-purple-600 dark:text-purple-400 dark:hover:bg-purple-950/50 bg-transparent"
          >
            <Link href="/about">
              Learn More About Me <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-purple-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Work Together</h2>
          <p className="text-lg text-purple-100 mb-8 leading-relaxed">
            I'm always interested in new opportunities and exciting projects. Let's discuss how we can bring your ideas
            to life with innovative solutions and exceptional design.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-purple-700 hover:bg-purple-50 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Link href="/contact">
                Start a Conversation <Mail className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-purple-700 transition-all duration-300 bg-transparent"
            >
              <a href="/resume.pdf" download>
                Download Resume <Download className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
