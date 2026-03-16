"use client"
import Image from "next/image";
export default function CableHero() {
    return (
        <>
        <section
                className="relative fade-in min-h-80 flex items-end overflow-hidden"
                aria-label="Cable Installation Services Denver CO"
              >
                <Image
                src={"/services/cabling-hero.png"}
                alt="Hero"
                fill
                className="object-cover object-[30%_48%] opacity-0 bg-no-repeat transition-opacity duration-700"
                priority
                onLoad={(e)=>{
                    (e.target as HTMLImageElement).classList.add("opacity-100")
                }}
              />
                <div className="relative z-10 max-w-7xl mx-auto px-6 pb-10 pt-20">
                  <h1 className="text-3xl md:text-4xl font-black text-white uppercase">
                    CABLE INSTALLATION
                  </h1>
                </div>
              </section>
              </>
    )
}