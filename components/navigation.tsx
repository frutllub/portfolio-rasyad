"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import Logo from "./logo"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Skills", href: "/skills" },
    { name: "Contact", href: "/contact" },
  ]

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/"
    }
    return pathname.startsWith(href)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-purple-100 dark:border-purple-900/50 bg-white/95 dark:bg-gray-900/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-gray-900/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <Logo size="md" className="group-hover:scale-105 transition-transform duration-200" />
            <span className="font-bold text-xl bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
              Muhammad Amirul Rasyad
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => (
              <Button
                key={item.name}
                variant={isActive(item.href) ? "default" : "ghost"}
                asChild
                className={`relative transition-all duration-200 ${
                  isActive(item.href)
                    ? "bg-gradient-to-r from-purple-600 to-purple-700 text-white shadow-md"
                    : "hover:bg-purple-50 dark:hover:bg-purple-950/50 text-gray-700 dark:text-gray-300"
                }`}
              >
                <Link href={item.href}>
                  {item.name}
                  {isActive(item.href) && (
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full" />
                  )}
                </Link>
              </Button>
            ))}
          </nav>

          {/* Theme Toggle & Mobile Menu */}
          <div className="flex items-center space-x-2">
            {/* Theme Toggle */}
            {mounted && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="h-9 w-9 hover:bg-purple-50 dark:hover:bg-purple-950/50 text-purple-600 dark:text-purple-400"
              >
                {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                <span className="sr-only">Toggle theme</span>
              </Button>
            )}

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-9 w-9 hover:bg-purple-50 dark:hover:bg-purple-950/50 text-purple-600 dark:text-purple-400"
                >
                  <Menu className="h-4 w-4" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 bg-white dark:bg-gray-900">
                <div className="flex items-center justify-between mb-8">
                  <Link href="/" className="flex items-center space-x-3" onClick={() => setIsOpen(false)}>
                    <Logo size="md" />
                    <span className="font-bold text-lg bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
                      Muhammad Amirul Rasyad
                    </span>
                  </Link>
                </div>

                <nav className="flex flex-col space-y-4">
                  {navigation.map((item) => (
                    <Button
                      key={item.name}
                      variant={isActive(item.href) ? "default" : "ghost"}
                      asChild
                      className={`justify-start text-lg h-12 ${
                        isActive(item.href)
                          ? "bg-gradient-to-r from-purple-600 to-purple-700 text-white"
                          : "hover:bg-purple-50 dark:hover:bg-purple-950/50"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      <Link href={item.href}>{item.name}</Link>
                    </Button>
                  ))}
                </nav>

                <div className="mt-8 pt-8 border-t border-purple-100 dark:border-purple-900/50">
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Get in touch</p>
                  <div className="space-y-2">
                    <Button
                      variant="outline"
                      className="w-full justify-start border-purple-200 dark:border-purple-800 hover:bg-purple-50 dark:hover:bg-purple-950/50 bg-transparent"
                      asChild
                    >
                      <a href="mailto:john@example.com">Email Me</a>
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full justify-start border-purple-200 dark:border-purple-800 hover:bg-purple-50 dark:hover:bg-purple-950/50 bg-transparent"
                      asChild
                    >
                      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                        LinkedIn
                      </a>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
