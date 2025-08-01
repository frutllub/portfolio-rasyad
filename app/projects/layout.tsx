import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore my portfolio of web applications, mobile apps, and digital solutions. See the technologies and approaches I use to solve real-world problems.",
}

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
