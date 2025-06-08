"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Quote } from "lucide-react"

const testimonials = [
  {
    name: "Ali Raza",
    avatar: "AR",
    role: "Restaurant Owner",
    content: "Muzaffar delivered my website exactly as I imagined. Fast, reliable, and creative!",
  },
  {
    name: "Sara Khan",
    avatar: "SK",
    role: "E-commerce Entrepreneur",
    content: "Excellent work on our e-commerce store. Highly recommended for future projects.",
  },
  {
    name: "Ahmed Hassan",
    avatar: "AH",
    role: "Tech Startup Founder",
    content:
      "The chatbot Muzaffar built for us has significantly improved our customer engagement and support efficiency.",
  },
]

export default function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-8 mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Client Testimonials</h2>
            <div className="w-20 h-1 bg-violet-600 dark:bg-violet-400 mx-auto"></div>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Here's what my clients have to say about working with me.
          </p>
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="border-2 rounded-2xl border-violet-100 dark:border-violet-900 hover:border-violet-300 dark:hover:border-violet-700 transition-all duration-300 hover:shadow-lg"
            >
              <CardContent className="p-6 flex flex-col space-y-4">
                <Quote className="h-8 w-8 text-violet-600 dark:text-violet-400" />
                <p className="text-lg italic">{testimonial.content}</p>
                <div className="flex items-center space-x-4 pt-4">
                  <Avatar>
                    <AvatarImage src={`/placeholder.svg?height=40&width=40&text=${testimonial.avatar}`} />
                    <AvatarFallback className="bg-violet-200 dark:bg-violet-800 text-violet-800 dark:text-violet-200">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
