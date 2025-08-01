import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Muhammad Amirul Rasyad - Full-Stack Developer & UI/UX Designer",
    template: "%s | Muhammad Amirul Rasyad",
  },
  description:
    "Experienced full-stack developer with a strong background in creating robust and user-friendly digital experiences. Proficient in React, Next.js, TypeScript, and various UI/UX design principles.",
  keywords: ["full-stack developer", "web developer", "React", "Next.js", "TypeScript", "UI/UX designer"],
  authors: [{ name: "Muhammad Amirul Rasyad" }],
  creator: "Muhammad Amirul Rasyad",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://muhammadamirulrasyad.com", // Update with your actual domain
    title: "Muhammad Amirul Rasyad - Full-Stack Developer & UI/UX Designer",
    description:
      "Experienced full-stack developer with a strong background in creating robust and user-friendly digital experiences.",
    siteName: "Muhammad Amirul Rasyad Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Amirul Rasyad - Full-Stack Developer & UI/UX Designer",
    description:
      "Experienced full-stack developer with a strong background in creating robust and user-friendly digital experiences.",
    creator: "@muhammadamirulrasyad", // Update with your actual Twitter handle
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="min-h-screen flex flex-col">
            <Navigation />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
