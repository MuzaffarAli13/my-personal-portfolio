"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Badge } from "@/components/ui/badge"

const skills = [
  "HTML5",
  "CSS3",
  "JavaScript (ES6+)",
  "TypeScript",
  "React.js",
  "Next.js",
  "Tailwind CSS",
  "Node.js",
   "Figma",
  "Git & GitHub",
  "Sanity CMS",
  "Clerk (Auth)",
  "Redux",
  "Python",
  "AI Agents (Agentic SDKs – ongoing)"
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <section id="skills" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-8 max-w-3xl mx-auto">
          <div className="space-y-2">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">My Skills</h2>
            <div className="w-20 h-1 bg-violet-600 dark:bg-violet-400 mx-auto"></div>
          </div>
          <p className="text-lg text-muted-foreground">
            I've developed expertise in a wide range of technologies and tools that enable me to build comprehensive web
            solutions.
          </p>

          <motion.div
            ref={ref}
            variants={container}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            className="flex flex-wrap justify-center gap-3"
          >
            {skills.map((skill, index) => (
              <motion.div key={index} variants={item}>
                <Badge
                  variant="outline"
                  className="px-4 py-2 text-sm font-medium border-2 border-violet-200 dark:border-violet-800 hover:bg-violet-100 dark:hover:bg-violet-900/50 transition-colors"
                >
                  {skill}
                </Badge>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
