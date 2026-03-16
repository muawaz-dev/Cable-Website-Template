"use client"
import Image from "next/image"

export default function AvayaHero() {
    return (
        <>
         <section
                className="relative fade-in min-h-80 flex items-end overflow-hidden"
                aria-label="Avaya IP Office Sales and Support Denver CO"
              >
                <Image
                src={"/services/avaya-hero.png"}
                alt="Hero"
                fill
                className="object-cover object-[30%_48%] bg-no-repeat opacity-0 transition-opacity duration-700"
                priority
                onLoad={(e)=>{
                    (e.target as HTMLImageElement).classList.add("opacity-100")
                }}
              />
        
                <div className="relative z-10 max-w-7xl mx-auto px-6 pb-10 pt-20">
                  <h1 className="text-3xl md:text-4xl font-black text-white uppercase">
                    AVAYA IP OFFICE
                  </h1>
                </div>
              </section>
        </>
    )
}