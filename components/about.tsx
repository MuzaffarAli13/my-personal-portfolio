"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-16 md:py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center space-y-8 max-w-3xl mx-auto"
        >
          <div className="space-y-2">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">About Me</h2>
            <div className="w-20 h-1 bg-violet-600 dark:bg-violet-400 mx-auto"></div>
          </div>
          <p className="text-lg text-muted-foreground">
            I'm a passionate Full-Stack Developer with a strong focus on creating modern, efficient, and user-friendly
            web applications. With expertise in Next.js, React, and various other technologies, I bring ideas to life
            through clean code and intuitive design.
          </p>
          <p className="text-lg text-muted-foreground">
            My journey in web development has equipped me with a deep understanding of both frontend and backend
            technologies. I'm constantly exploring new technologies and methodologies, currently diving into AI agent
            development to expand my skill set and offer more innovative solutions to clients.
          </p>
          <p className="text-lg text-muted-foreground">
            When I'm not coding, I enjoy sharing my knowledge with the developer community and collaborating on exciting
            projects that push the boundaries of what's possible on the web.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
