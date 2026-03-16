"use client"
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const serviceCards = [
  { icon: "/home/cabling-icon.png", title: "Structured Cabling", subtitle: "CAT5E | CAT6| COAX | FIBER OPTICS", href: "/services/cable-installation" },
  { icon: "/home/voip-icon.png", title: "AVAYA IP OFFICE SALES & SUPPORT", subtitle: "Hosted Communications | IP OFFICE | PARTNER ACS | MERLIN | LEGEND/MAGIX | DEFINITY", href: "/services/avaya-ip" },
  { icon: "/home/security-icon.png", title: "HIKVISION CCTV SECURITY CAMERAS", subtitle: "CCTV | IP | HIKVISION", href: "/services/security" },
];

export default function Services() {
  useEffect(()=>{
      gsap.fromTo(
        ".service-card",
        { opacity: 1, y: 120 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".services-section",
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
  },[])
  return (
    <section
      className="services-section max-w-7xl mx-auto px-6 -mt-16 relative z-10 bg-transparent"
      aria-label="Our Services"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-6">
        {serviceCards.map((card) => (
          <Link
            key={card.href}
            href={card.href}
            className="service-card mb-12 md:mb-0 bg-white rounded-md shadow-lg p-7 flex flex-col items-center text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-200 group"
            aria-label={`Learn about ${card.title}`}
          >
            <div className="relative translate-y-[-80%] w-24 h-24 rounded-full bg-brand-gradient flex items-center justify-center justify-centergroup-hover:bg-purple-800 transition-colors">
              <Image className="object-contain" src={card.icon} alt={`${card.title} Icon`} height={50} width={50} />
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-3 uppercase leading-tight">
              {card.title}
            </h2>
            <div className="w-10 h-0.5 bg-purple-600 mb-3" aria-hidden="true" />
            <p className="text-sm mb-6 text-gray-500 uppercase tracking-wide">{card.subtitle}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}