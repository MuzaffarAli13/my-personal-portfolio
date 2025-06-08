"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useSpring } from "framer-motion"
import { ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ScrollProgressIndicator() {
  const [showScrollToTop, setShowScrollToTop] = useState(false)
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollToTop(window.scrollY > 300)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-violet-600 dark:bg-violet-400 origin-left z-50"
        style={{ scaleX }}
      />

      {showScrollToTop && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          className="fixed bottom-5 lg:bottom-8 left-5 lg:left-8 z-50"
        >
          <Button
            onClick={scrollToTop}
            size="icon"
            className="rounded-full bg-violet-600 hover:bg-violet-700 text-white shadow-lg"
          >
            <ChevronUp className="h-5 w-5" />
            <span className="sr-only">Scroll to top</span>
          </Button>
        </motion.div>
      )}
    </>
  )
}
