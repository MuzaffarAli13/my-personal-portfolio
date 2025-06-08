"use client"

import Image from "next/image"
import Link from "next/link"


export default function Whatsapp() {
  return (
   <>
         <Link href={"https://api.whatsapp.com/send?phone=923113536989&text=portfolio%20website%20msg"} target="_blank">
                  <Image
                    src={"/w.png"}
                    alt="WhatsApp"
                    width={60}
                    height={60}
                    className="rounded-full w-[60px] h-[60px] cursor-pointer hover:scale-110 transition-transform duration-300"
                  />
                </Link>
   </>
  )
}
