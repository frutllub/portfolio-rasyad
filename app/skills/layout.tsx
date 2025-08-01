import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Skills & Expertise",
  description:
    "Discover my technical skills, tools, and technologies. From frontend frameworks to backend systems, see what I bring to every project.",
}

export default function SkillsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
