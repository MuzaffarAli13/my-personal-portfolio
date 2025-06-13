"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Restaurant Website",
    description: "A modern, responsive website for a high-end restaurant with online reservation system.",
    image: "/resto.jpg",
    techStack: ["Next.js", "Tailwind CSS", "Sanity", "Clerk", "Stripe"],
    view_link: "https://delicious-bites-e-commerce-web.vercel.app/",
    repo_link: "https://github.com/MuzaffarAli13/Delicious-Bites-e-commerce-web"

  },
  {
    title: "E-commerce Store",
    description: "Full-stack clothing brand e-commerce platform with authentication and payment integration.",
    image: "/Cover.svg",
    techStack: ["Next.js", "Tailwind CSS", "Sanity", "Clerk", "Stripe","Redux"],
    view_link: "https://hackathon-cyan-one.vercel.app/",
    repo_link: "https://github.com/MuzaffarAli13/Shop.co"
  },
  {
    title: "Chatbot with AI Agents",
    description: "Custom chatbot using AI SDKs and agentic workflows for intelligent customer support.",
    image: "/Frame.svg",
    techStack: ["Python", "AI Agent SDK", "OpenAI", "Gemini"],
    repo_link: "https://github.com/MuzaffarAli13/Multi-Agent-"
  },
  {
    title: "Modern Blog Website",
    description: "Responsive, SEO-friendly blog built with Next.js and Tailwind CSS.",
    image: "/blog.svg",
    techStack: ["React", "Next.js", "Tailwind CSS", "Sanity", "Clerk"],
    view_link: "https://blog-website-three-murex.vercel.app/",
    repo_link: "https://github.com/MuzaffarAli13/blog-website/tree/main"
  },
]

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-8 mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Work That I'm Proud Of</h2>
            <div className="w-20 h-1 bg-violet-600 dark:bg-violet-400 mx-auto"></div>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Here are some of my recent projects that showcase my skills and expertise.
          </p>
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-5xl mx-auto"
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {projects.map((project, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2 pl-4 md:pl-6">
                  <div className="p-1">
                    <Card className="overflow-hidden rounded-2xl border-2 border-violet-100 dark:border-violet-900 hover:border-violet-300 dark:hover:border-violet-700 transition-all duration-300 hover:shadow-lg">
                      <div className="relative h-48 md:h-64 w-full">
                        <Image
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                        <p className="text-muted-foreground mb-4">{project.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {project.techStack.map((tech, i) => (
                            <Badge
                              key={i}
                              variant="secondary"
                              className="bg-violet-100 dark:bg-violet-900/50 text-violet-800 dark:text-violet-300"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex justify-between items-center mt-2 px-2">
                          <Link href={project.view_link || "#"}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-4 inline-block text-violet-600 dark:text-violet-400 hover:underline"
                          >
                            View Project 
                          </Link>
                          {/* GIT */}
                          <Link href={project.repo_link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-4 inline-block text-violet-600 dark:text-violet-400 hover:underline"
                          >
                            <FaGithub className="inline mr-1" /> Code
                          </Link> 
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-5 gap-4">
              <CarouselPrevious className="static transform-none bg-violet-100 dark:bg-violet-900/50 hover:bg-violet-200 dark:hover:bg-violet-800/50 border-violet-200 dark:border-violet-800" />
              <CarouselNext className="static transform-none bg-violet-100 dark:bg-violet-900/50 hover:bg-violet-200 dark:hover:bg-violet-800/50 border-violet-200 dark:border-violet-800" />
            </div>
          </Carousel>
        </motion.div>
      </div>
    </section>
  )
}
