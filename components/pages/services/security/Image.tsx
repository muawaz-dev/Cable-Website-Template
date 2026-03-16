"use client"
import Image from "next/image"
export default function SecurityImage() {
    return (
        <div className="rounded-xl flex justify-center items-center overflow-hidden h-full">
            <div className="shadow-lg bg-gray-100 rounded-xl relative h-96 w-full" >
                <Image
                    src="/services/hikvision-camera.png"
                    alt="Security cameras, headset, network cables — [Your Company] products"
                    className="w-full h-full object-cover rounded-xl opacity-0 transition-opacity duration-700"
                    priority
                    fill
                    onLoad={(e) => {
                        (e.target as HTMLImageElement).classList.add("opacity-100")
                    }}
                />
            </div>
        </div>
    )
}