"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Layout, Smartphone, MessageSquare, Users } from "lucide-react"

const services = [
  {
    icon: <Layout className="h-10 w-10 text-violet-600 dark:text-violet-400" />,
    title: "Custom Website Development",
    description: "Crafting bespoke websites tailored to your specific needs and brand identity.",
  },
  {
    icon: <Smartphone className="h-10 w-10 text-violet-600 dark:text-violet-400" />,
    title: "Responsive UI Design",
    description: "Creating beautiful, functional interfaces that work flawlessly across all devices.",
  },
  {
    icon: <Code className="h-10 w-10 text-violet-600 dark:text-violet-400" />,
    title: "Web Application Development",
    description: "Building powerful web applications with modern frameworks and technologies.",
  },
  {
    icon: <Users className="h-10 w-10 text-violet-600 dark:text-violet-400" />,
    title: "Freelance Consulting & Support",
    description: "Providing expert advice and ongoing support for your digital projects.",
  },
  {
    icon: <MessageSquare className="h-10 w-10 text-violet-600 dark:text-violet-400" />,
    title: "AI-Powered Chatbot for Websites",
    description: "Smart AI-powered chatbots for websites to engage, assist, and convert your visitors in real-time",
  },
  {
    icon: <MessageSquare className="h-10 w-10 text-violet-600 dark:text-violet-400" />,
    title: "Custom AI Agent SDK Integrations (OpenAI, Gemini)",
    description: "Custom AI agents and chatbots built with OpenAI & Gemini SDKs, fully integrated into your web apps.",
  },
]

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="services" className="py-16 md:py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-8 mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">My Services</h2>
            <div className="w-20 h-1 bg-violet-600 dark:bg-violet-400 mx-auto"></div>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl">
            I offer a comprehensive range of web development services to help bring your digital vision to life.
          </p>
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <Card
              key={index}
              className="border-2 rounded-2xl border-violet-100 dark:border-violet-900 hover:border-violet-300 dark:hover:border-violet-700 transition-all duration-300 hover:shadow-lg"
            >
              <CardHeader className="pb-2">
                <div className="mb-4">{service.icon}</div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
