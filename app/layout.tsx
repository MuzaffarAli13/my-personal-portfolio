import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Link from "next/link"
import Image from "next/image"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Muzaffar Ali - Portfolio",
  description: "Portfolio website of Muzaffar Ali, Full-Stack Developer specializing in Next.js & React",
   icons: {
    icon: '/favicon.ico',
  },
  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <div className="flex-1">{children}</div>
            <Footer />
          </div>
        </ThemeProvider>
          <div className='fixed text-green-400 bottom-2 lg:bottom-5 right-4 lg:right-10 z-50'>
                <Link href={"https://wa.link/0yiwdt"} target="_blank">
                  <Image
                    src={"/w.png"}
                    alt="WhatsApp"
                    width={60}
                    height={60}
                    className="rounded-full w-[50px] h-[50px] cursor-pointer hover:scale-110 transition-transform duration-300"
                  />
                </Link>
              </div>
      </body>
    </html>
  )
}
