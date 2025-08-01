import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, GraduationCap, Briefcase } from "lucide-react"
import Image from "next/image"

export default function AboutPage() {
  const timeline = [
    {
      year: "2024",
      title: "Senior Full-Stack Developer",
      company: "Tech Innovations Inc.",
      description: "Leading development of enterprise web applications using React, Node.js, and cloud technologies.",
      type: "work",
    },
    {
      year: "2022",
      title: "Full-Stack Developer",
      company: "Digital Solutions Co.",
      description:
        "Developed and maintained multiple client projects, focusing on performance optimization and user experience.",
      type: "work",
    },
    {
      year: "2020",
      title: "Master's in Computer Science",
      company: "University of Technology",
      description: "Specialized in software engineering and human-computer interaction. Graduated with honors.",
      type: "education",
    },
    {
      year: "2019",
      title: "Junior Developer",
      company: "StartUp Labs",
      description: "Started my professional journey building web applications and learning industry best practices.",
      type: "work",
    },
  ]

  const skills = {
    Frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js", "Angular"],
    Backend: ["Node.js", "Python", "Express", "FastAPI", "PostgreSQL", "MongoDB"],
    "Tools & Others": ["Git", "Docker", "AWS", "Figma", "Jest", "Cypress"],
  }

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Me</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            I’m passionate about learning new technologies and improving myself through hands-on exploration and self-growth. Here's my story
            and what drives me every day.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          {/* Profile */}
          <div className="lg:col-span-1">
            <Card className="sticky top-8">
              <CardContent className="p-6 text-center">
                <Image
                  src="/profile.png?height=200&width=200"
                  alt="Muhammad Amirul Rasyad"
                  width={200}
                  height={200}
                  className="rounded-full mx-auto mb-6 border-4 border-gray-100 dark:border-gray-800"
                />
                <h2 className="text-2xl font-bold mb-2">Muhammad Amirul Rasyad</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-4">Full-time Student</p>

                <div className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center justify-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span>Johor , Malaysia</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>2nd Year</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Bio & Story */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">My Story</h3>
              <div className="prose prose-gray dark:prose-invert max-w-none">
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                  I enjoy working with electronics, microcontrollers, and IoT projects, and over time, I found my passion in cloud systems.
                  I like turning ideas into real projects that I can use and improve.
                </p>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                  Right now, I’m exploring cloud systems and working on a project I call Marscloud.
                  It’s still in progress, but my goal is to build a private cloud system that is simple and useful for personal storage.
                  I enjoy learning step by step and improving as I go.

                </p>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  I also spend time journaling and reflecting on what I learn. 
                  For me, learning is not just about finishing projects but about growing as a person, 
                  improving myself every day, and enjoying the journey of discovery.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">What I Do</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold mb-2">Frontend Development</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Creating responsive, accessible, and performant user interfaces using modern frameworks and best
                      practices.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold mb-2">Backend Development</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Building robust APIs, databases, and server-side applications that scale and perform reliably.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold mb-2">UI/UX Design</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Designing intuitive user experiences with a focus on usability, accessibility, and visual appeal.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold mb-2">Technical Consulting</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Helping businesses make informed technology decisions and optimize their development processes.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">My Journey</h3>
          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <div key={index} className="flex gap-6 mb-8 last:mb-0">
                <div className="flex flex-col items-center">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      item.type === "work" ? "bg-blue-100 dark:bg-blue-900" : "bg-green-100 dark:bg-green-900"
                    }`}
                  >
                    {item.type === "work" ? (
                      <Briefcase className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    ) : (
                      <GraduationCap className="h-6 w-6 text-green-600 dark:text-green-400" />
                    )}
                  </div>
                  {index < timeline.length - 1 && <div className="w-px h-16 bg-gray-200 dark:bg-gray-700 mt-4" />}
                </div>
                <div className="flex-1 pb-8">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">{item.year}</span>
                    <Badge variant={item.type === "work" ? "default" : "secondary"}>
                      {item.type === "work" ? "Work" : "Education"}
                    </Badge>
                  </div>
                  <h4 className="text-xl font-semibold mb-1">{item.title}</h4>
                  <p className="text-gray-600 dark:text-gray-400 font-medium mb-2">{item.company}</p>
                  <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-12">Skills & Technologies</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, skillList]) => (
              <Card key={category}>
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold mb-4">{category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
