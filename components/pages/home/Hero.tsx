"use client"
import { useState,useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import Image from "next/image";
gsap.registerPlugin(ScrollTrigger);
export default function Hero() {
    const [imageLoaded, setImageLoaded] = useState(false);
    useEffect(() => {
    if (imageLoaded) {
      gsap.fromTo(
        ".hero-text",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          stagger: 0.4,
          delay: 0.4,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".hero-text",
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, [imageLoaded]);

    return (
        <>
            {/* ── SECTION 1: Hero ──────────────────────────────────────────────── */}
            <section
                className={`relative ${imageLoaded ? 'fade-in' : 'opacity-0'} sm:mb-0 mb-12 min-h-155 flex items-center justify-start overflow-hidden`}
                aria-label="Hero: Structured Cabling, Security Cameras & VoIP Denver CO"
            >
                {/* Background image placeholder — replace src with real Hikvision/cabling image */}
                {/* <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    aria-hidden="true"
                /> */}

                <Image
                    src="/home/home-hero.png"
                    alt="Hero Background"
                    className={`block object-cover object-center`}
                    fill
                    onLoad={() => setImageLoaded(true)}
                    priority
                />

                {/* Hero Content */}
                <div className="relative z-10 grow px-6 py-20">
                    {/* Badge */}
                    <span className="inline-block bg-brand-gradient text-white text-xs font-bold px-4 py-1.5 rounded-full mb-6 tracking-widest uppercase">
                        Serving Denver CO &amp; The Front Range
                    </span>

                    <h1 className="hero-text text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight max-w-4xl">
                        STRUCTURED CABLING,
                        SECURITY CAMERAS &amp;
                        <br />
                        <span className="text-purple-400 hero-text">VoIP Phone Systems</span>
                    </h1>

                    <div className="mt-8">
                        <Link
                            href="/about"
                            className="inline-flex items-center gap-2 bg-gradient-to-r from-secondary to-primary hover:bg-purple-600 text-white font-bold px-6 py-3 rounded-full transition-colors"
                        >
                            Learn More About Us
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}