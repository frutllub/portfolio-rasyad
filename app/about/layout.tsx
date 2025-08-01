import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Me",
  description: "Learn more about John Developer - my story, experience, and what drives me as a full-stack developer.",
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
