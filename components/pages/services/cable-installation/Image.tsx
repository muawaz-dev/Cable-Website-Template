"use client"
import Image from "next/image"
export default function CablingImage(){
    return (
        <div className="rounded-xl relative overflow-hidden shadow-lg bg-gray-200 h-80">
                <Image
                    src="/services/cabling-work.png"
                    alt="Security cameras, headset, network cables — Harden Communications products"
                    className="w-full h-full object-cover rounded-xl opacity-0 transition-opacity duration-700"
                    loading="lazy"
                    fill
                    onLoad={(e)=>{
                        (e.target as HTMLImageElement).classList.add("opacity-100")
                    }}
                />
            </div>
    )
}