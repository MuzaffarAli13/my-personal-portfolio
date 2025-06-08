import Link from "next/link"
import { Github, Linkedin, Twitter,Youtube, Mail, Facebook } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t border-border bg-muted/50">
      <div className="container px-4 md:px-6 py-8 md:py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold text-violet-600 dark:text-violet-400">
                Muzaffar<span className="text-foreground">Ali</span>
              </span>
            </Link>
            <p className="mt-2 text-sm text-muted-foreground">Full-Stack Developer | Next.js & React Specialist</p>
          </div>
          <div className="flex space-x-4">
            <Link
               href={"https://www.youtube.com/@muzaffaritacademy"}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
            >
              <Youtube className="h-6 w-6" />
              <span className="sr-only">YouTube</span>
            </Link>
            <Link
              href={"https://github.com/MuzaffarAli13"}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href={"https://www.linkedin.com/in/muzaffar-ali-0b3939315/"}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href={"https://www.facebook.com/profile.php?id=100093557110026"}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
            >
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link
              href="https://x.com/muzafark_ali"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
            >
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Muzaffar Ali. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
