"use client"
import Link from "next/link"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { useEffect } from "react";
export default function CtaBanner() {
    useEffect(()=>{
    gsap.fromTo(
        ".cta-item",
        { opacity: 0,y: 50 },
        {
            opacity: 1,
            y: 0,
            duration: 1.5,
            ease: "power3.out",
            scrollTrigger: {
                trigger: ".cta-item",
                start: "top 75%",
                toggleActions: "play none none none",
            },
        }
    );
}, []);

    return (
        <section
            className="bg-white h-80 sm:h-90 flex py-16 px-6 bg-[url('/home/cta-bg.jpg')] bg-cover bg-center"
            aria-label="Upgrade your network, security, or VoIP service"
        >
            <div className="cta-item max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-4 sm:gap-16">
                <h2 className="text-3xl md:text-4xl font-black text-gray-800 text-center md:text-left leading-tight">
                    Ready To{" "}
                    <span className="text-secondary">UPGRADE</span>
                    {" "}Your Network,
                    <br />
                    Security, Or VOIP Service?
                </h2>
                <Link
                    href="/contact"
                    className="flex-shrink-0 bg-brand-gradient  text-white font-black px-5 py-3 sm:px-8 sm:py-4 rounded-full text-md sm:text-lg"
                >
                    CONTACT US
                </Link>
            </div>
        </section>
    )
}