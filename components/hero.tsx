"use client"

import { Button } from "@/components/ui/button"
import { Download, Send } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import Typewriter from "typewriter-effect";

export default function Hero() {
  return (
    <section id="home" className="py-20 md:py-32 relative overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col space-y-6"
          >
            <div className="space-y-2">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">Muzaffar Ali</h1>
              <h2 className="text-lg md:text-3xl font-medium text-violet-600 dark:text-violet-400">
                {/* Full-Stack Developer | Next.js & React Specialist */}
                <Typewriter
                 options={{
                 strings: [
                  "Full-Stack Developer | Next.js & React Specialist",
                  "Agentic AI Developer",
                ],
                autoStart: true,
                loop: true,
              }}
            />
              </h2>
            </div>
            <p className="text-lg text-muted-foreground max-w-[600px]">
              Muzaffar Ali here — turning ideas into modern web solutions! I specialize in responsive, SEO-friendly, and
              high-performance web applications built with Next.js, Tailwind CSS, and React.js.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button onClick={() => {
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
              }} className="bg-violet-600 hover:bg-violet-700 text-white">
                <Send className="mr-2 h-4 w-4" /> Hire Me
              </Button>
              <a href="/Muzaffar_Ali_Resume.pdf" download="Muzaffar_Ali_Resume">
                 <Button variant="outline" className="border-violet-200 w-full dark:border-violet-800">
                <Download className=" mr-2 h-4 w-4" /> Download Resume
              </Button>
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center md:justify-end"
          >
            <div className="relative w-[280px] h-[280px] md:w-[400px] md:h-[400px] rounded-full overflow-hidden border-4 border-violet-600 dark:border-violet-400 shadow-xl">
              <Image
                src="/profile.jpg"
                alt="Muzaffar Ali"
                width={450}
                height={450}
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[800px] md:h-[800px] rounded-full bg-violet-100 dark:bg-violet-900/20 blur-3xl opacity-30"></div>
    </section>
  )
}
