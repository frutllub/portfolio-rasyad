import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Code, Database, Palette, Cloud, Smartphone, GitBranch, Monitor, Zap } from "lucide-react"

export default function SkillsPage() {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Monitor className="h-6 w-6" />,
      description: "Creating beautiful, responsive user interfaces",
      skills: [
        { name: "React", level: 95, experience: "4+ years" },
        { name: "Next.js", level: 90, experience: "3+ years" },
        { name: "TypeScript", level: 88, experience: "3+ years" },
        { name: "Tailwind CSS", level: 92, experience: "2+ years" },
        { name: "Vue.js", level: 75, experience: "2+ years" },
        { name: "Angular", level: 70, experience: "1+ years" },
      ],
    },
    {
      title: "Backend Development",
      icon: <Database className="h-6 w-6" />,
      description: "Building robust server-side applications",
      skills: [
        { name: "Node.js", level: 90, experience: "4+ years" },
        { name: "Python", level: 85, experience: "3+ years" },
        { name: "Express.js", level: 88, experience: "4+ years" },
        { name: "FastAPI", level: 80, experience: "2+ years" },
        { name: "PostgreSQL", level: 85, experience: "3+ years" },
        { name: "MongoDB", level: 82, experience: "3+ years" },
      ],
    },
    {
      title: "Mobile Development",
      icon: <Smartphone className="h-6 w-6" />,
      description: "Cross-platform mobile applications",
      skills: [
        { name: "React Native", level: 85, experience: "2+ years" },
        { name: "Expo", level: 80, experience: "2+ years" },
        { name: "Flutter", level: 65, experience: "1+ years" },
        { name: "iOS Development", level: 60, experience: "1+ years" },
      ],
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud className="h-6 w-6" />,
      description: "Deployment and infrastructure management",
      skills: [
        { name: "AWS", level: 80, experience: "3+ years" },
        { name: "Docker", level: 85, experience: "3+ years" },
        { name: "Vercel", level: 90, experience: "2+ years" },
        { name: "GitHub Actions", level: 75, experience: "2+ years" },
        { name: "Kubernetes", level: 65, experience: "1+ years" },
      ],
    },
    {
      title: "Design & UI/UX",
      icon: <Palette className="h-6 w-6" />,
      description: "User experience and interface design",
      skills: [
        { name: "Figma", level: 88, experience: "3+ years" },
        { name: "Adobe XD", level: 75, experience: "2+ years" },
        { name: "Sketch", level: 70, experience: "2+ years" },
        { name: "Prototyping", level: 85, experience: "3+ years" },
      ],
    },
    {
      title: "Tools & Workflow",
      icon: <GitBranch className="h-6 w-6" />,
      description: "Development tools and methodologies",
      skills: [
        { name: "Git", level: 95, experience: "5+ years" },
        { name: "VS Code", level: 95, experience: "5+ years" },
        { name: "Webpack", level: 80, experience: "3+ years" },
        { name: "Jest", level: 85, experience: "3+ years" },
        { name: "Cypress", level: 75, experience: "2+ years" },
      ],
    },
  ]

  const certifications = [
    {
      title: "AWS Certified Developer",
      issuer: "Amazon Web Services",
      date: "2023",
      status: "Active",
    },
    {
      title: "Google Cloud Professional",
      issuer: "Google Cloud",
      date: "2023",
      status: "Active",
    },
    {
      title: "React Developer Certification",
      issuer: "Meta",
      date: "2022",
      status: "Active",
    },
  ]

  const languages = [
    { name: "English", level: "Native" },
    { name: "Spanish", level: "Conversational" },
    { name: "French", level: "Basic" },
  ]

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Skills & Expertise</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A comprehensive overview of my technical skills, tools, and technologies I work with. I'm always learning
            and expanding my skillset to stay current with industry trends.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg">{category.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold">{category.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 font-normal">{category.description}</p>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{skill.name}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-500 dark:text-gray-400">{skill.experience}</span>
                        <Badge variant="outline" className="text-xs">
                          {skill.level}%
                        </Badge>
                      </div>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Certifications */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-5 w-5" />
                Certifications
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {certifications.map((cert, index) => (
                <div key={index} className="border-l-2 border-gray-200 dark:border-gray-700 pl-4">
                  <h4 className="font-semibold text-sm">{cert.title}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{cert.issuer}</p>
                  <div className="flex justify-between items-center mt-1">
                    <span className="text-xs text-gray-500 dark:text-gray-400">{cert.date}</span>
                    <Badge variant="secondary" className="text-xs">
                      {cert.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Languages */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code className="h-5 w-5" />
                Languages
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {languages.map((lang, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="font-medium">{lang.name}</span>
                  <Badge variant="outline">{lang.level}</Badge>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Quick Stats */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Stats</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">50+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 dark:text-green-400">5+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">20+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Technologies</div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Learning Philosophy */}
        <Card className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 border-0">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Continuous Learning</h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-6">
              Technology evolves rapidly, and I believe in staying ahead of the curve. I regularly invest time in
              learning new technologies, attending conferences, and contributing to open-source projects. My goal is to
              not just keep up with industry trends, but to help shape them.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              <Badge>Currently Learning: AI/ML</Badge>
              <Badge>Next: Web3 Development</Badge>
              <Badge>Always: Best Practices</Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
