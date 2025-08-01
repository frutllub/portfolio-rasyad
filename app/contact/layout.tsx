import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Me",
  description:
    "Get in touch with John Developer. Whether you have a project idea, question, or just want to say hello, I'd love to hear from you.",
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
