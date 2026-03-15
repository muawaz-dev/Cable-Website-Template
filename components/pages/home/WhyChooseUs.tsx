"use client"
import Link from "next/link"
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { useEffect } from "react";
// ─── Why Choose Us content data ───────────────────────────────────────────────────
const whyChooseUs = [
  {
    title: "Experience YOU Can Trust",
    body: "With industry-leading certifications and years of hands-on expertise, [Your Company] brings proven knowledge in structured network cabling, surveillance systems, and VoIP phone solutions. We understand what your business needs — and we install it right the first time.",
    accent: "YOU",
  },
  {
    title: "Premium-Grade Systems & Clean Professional Work",
    body: "From enterprise-quality structured cabling to Hikvision CCTV and Avaya IP Office VoIP systems, we only use equipment known for performance, security, and longevity. Every install is clean, organized, and built for long-term reliability.",
  },
  {
    title: "Your Business. Always Connected. Always Protected.",
    body: "Whether you're upgrading your data network, securing your building, or modernizing your communication system, we deliver solutions that improve efficiency, protect your assets, and strengthen your customer experience.",
  },
  {
    title: "Local Service. Big Results.",
    body: "We take pride in serving Denver Colorado and surrounding regions with personalized support, fast response times, and a commitment to doing the job with integrity. When you call, we answer — and we show up.",
  },
];
export default function WhyChooseUs(){
      useEffect(() => {
    // Select all items
    const items = gsap.utils.toArray<HTMLElement>(".why-item");

    items.forEach((item) => {
      gsap.fromTo(
        item,
        { opacity: 0, y: 80 }, // start state
        {
          opacity: 1,
          y: 0,
          duration: 1.4,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,          // each item triggers itself
            start: "top 80%",       // when item enters viewport
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);



    return (
             <section className="bg-gray-50 py-16" aria-label="Why Choose [Your Company]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left: Images */}
            <div className="space-y-6 flex flex-col items-center">
              {/* Image 1: Security Camera Install */}
              <div className="rounded-xl relative overflow-hidden shadow-lg bg-gray-200 h-105 w-80 flex items-center justify-center">
                <Image
                  src="/home/camera-install.png"
                  alt="Technician installing a Hikvision security camera"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  fill
                />
              </div>
              {/* Image 2: Cable Installation */}
              <div className="rounded-xl relative overflow-hidden shadow-lg bg-gray-200 h-105 w-80 flex items-center justify-center">
                <Image
                  src="/home/cabling.png"
                  alt="Professional structured cabling installation in Denver CO"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  fill
                />
              </div>
            </div>

            {/* Right: Why Choose Us Content */}
            <div>
              <p className="text-purple-600 text-sm font-semibold uppercase tracking-widest mb-3">
                Why Choose Us?
              </p>
              {whyChooseUs.map((item, index) => (
                <div key={index} className="why-item mb-8">
                  <h3 className="text-3xl font-black text-gray-900 mb-3 border-l-4 border-purple-600 pl-4 leading-snug">
                    {/* Highlight "YOU" in first item */}
                    {index === 0 ? (
                      <>
                        Experience{" "}
                        <span className="text-secondary">YOU</span>
                        {" "}Can Trust
                      </>
                    ) : (
                      item.title
                    )}
                  </h3>
                  <p className="text-gray-600 text-md leading-relaxed pl-4">{item.body}</p>
                </div>
              ))}

              {/* CTA Row */}
              <div className="flex items-center gap-6 mt-8">
                <Link
                  href="/contact"
                  className="bg-brand-gradient hover:bg-purple-800 text-white font-bold px-6 py-3 rounded-full flex items-center gap-2 transition-colors text-sm"
                >
                  Contact Us
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <a
                  href="tel:3036685150"
                  className="flex items-center gap-2 text-gray-700 hover:text-purple-700 transition-colors font-semibold"
                  aria-label="Call [Your Company]"
                >
                  <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <span>
                    <span className="text-xs text-gray-500 block">Call for free</span>
                    999-999-9999
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}