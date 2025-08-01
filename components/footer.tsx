import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Twitter, Heart } from "lucide-react"
import Logo from "./logo"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    "Quick Links": [
      { name: "Home", href: "/" },
      { name: "About", href: "/about" },
      { name: "Projects", href: "/projects" },
      { name: "Skills", href: "/skills" },
      { name: "Contact", href: "/contact" },
    ],
    Projects: [
      { name: "E-Commerce Platform", href: "/projects#ecommerce" },
      { name: "Task Management App", href: "/projects#taskmanager" },
      { name: "Weather Dashboard", href: "/projects#weather" },
      { name: "AI Content Generator", href: "/projects#ai-content" },
    ],
    Resources: [
      { name: "Resume", href: "/resume.pdf" },
      { name: "Blog", href: "/blog" },
      { name: "Newsletter", href: "/newsletter" },
      { name: "Testimonials", href: "/testimonials" },
    ],
  }

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/amirulrasyad",
      icon: <Github className="h-5 w-5" />,
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/amirulrasyad",
      icon: <Linkedin className="h-5 w-5" />,
    },
    {
      name: "Twitter",
      href: "https://twitter.com/amirulrasyad",
      icon: <Twitter className="h-5 w-5" />,
    },
    {
      name: "Email",
      href: "mailto:amirulrasyad@example.com",
      icon: <Mail className="h-5 w-5" />,
    },
  ]

  return (
    <footer className="bg-gradient-to-br from-purple-50 to-white dark:from-gray-900 dark:to-purple-950/20 border-t border-purple-100 dark:border-purple-900/50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-3 mb-4 group">
              <Logo size="md" className="group-hover:scale-105 transition-transform duration-200" />
              <span className="font-bold text-xl bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
                Muhammad Amirul Rasyad
              </span>
            </Link>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md leading-relaxed">
              Full-stack developer passionate about creating digital experiences that make a difference. Let's work
              together to bring your ideas to life with innovative solutions.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <Button
                  key={social.name}
                  variant="outline"
                  size="icon"
                  asChild
                  className="hover:scale-110 transition-all duration-200 border-purple-200 dark:border-purple-800 hover:bg-purple-50 dark:hover:bg-purple-950/50 hover:border-purple-300 dark:hover:border-purple-700 bg-transparent"
                >
                  <a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.name}>
                    <span className="text-purple-600 dark:text-purple-400">{social.icon}</span>
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-semibold mb-4 text-gray-900 dark:text-white">{title}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-purple-100 dark:border-purple-900/50 pt-8 mb-8">
          <div className="max-w-md">
            <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Stay Updated</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
              Get notified about new projects and blog posts.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-3 py-2 border border-purple-200 dark:border-purple-800 rounded-md bg-white dark:bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <Button
                size="sm"
                className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-purple-100 dark:border-purple-900/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400">
              <span>© {currentYear} Muhammad Amirul Rasyad. Made with</span>
              <Heart className="h-4 w-4 text-purple-500 fill-current" />
              <span>and lots of coffee.</span>
            </div>
            <div className="flex items-center gap-6 text-sm text-gray-600 dark:text-gray-400">
              <Link href="/privacy" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
