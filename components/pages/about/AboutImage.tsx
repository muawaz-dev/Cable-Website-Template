"use client"
import Image from "next/image"
export default function AboutImage() {
    return (
        <div className="overflow-hidden h-full flex items-center justify-center">
            <div className="shadow-lg bg-gray-100 rounded-xl relative h-96 w-full" >
                <Image
                    src="/about/about-products.png"
                    alt="Security cameras, headset, network cables — Harden Communications products"
                    className="w-full h-full object-cover rounded-xl opacity-0 transition-opacity duration-700"
                    loading="lazy"
                    fill
                    onLoad={(e)=>{
                        (e.target as HTMLImageElement).classList.add("opacity-100")
                    }}
                />
            </div>
        </div>

    )
}