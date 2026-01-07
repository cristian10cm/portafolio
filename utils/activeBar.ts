'use client'
import { useEffect, useState } from "react"

const sections = [
  "home",
  "about-me",
  "skills",
  "study",
  "Projects"
]

export const useActiveSection = () => {
  const [activeSection, setActiveSection] = useState<string>("home")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        threshold: 0.6
      }
    )

    sections.forEach((id) => {
      const section = document.getElementById(id)
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  return activeSection
}
