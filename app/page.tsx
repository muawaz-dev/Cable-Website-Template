// app/page.tsx — Home Page
// Sections: Hero Slider, Service Cards, Mission Statement, Why Choose Us, CTA Banner

import type { Metadata } from "next";
import Hero from "@/components/pages/home/Hero";
import Services from "@/components/pages/home/Services";
import WhyChooseUs from "@/components/pages/home/WhyChooseUs";
import CtaBanner from "@/components/layout/CtaBanner";
export const metadata: Metadata = {
  title: "[Your Company] | Structured Cabling, Security Cameras & VoIP Denver CO",
  description:
    "Serving Denver CO & the Front Range. Professional structured cabling (Cat5e/Cat6/Fiber), Hikvision CCTV security camera installation, and Avaya IP Office VoIP phone systems. Call (303) 668-5150.",
  alternates: { canonical: "https://[Your Company]communications.com" },
};




export default function HomePage() {
  return (
    <>
      {/* ── SECTION 1: Hero ──────────────────────────────────────────────── */}
      <Hero />
      {/* ── SECTION 2: Service Cards ──────────────────────────────────────── */}
      <div className="bg-white">

        <Services />

        {/* ── SECTION 3: Mission Statement ────────────────────────────────── */}
        <section className="max-w-7xl bg-white mx-auto px-6 py-16" aria-label="Our Mission">
          <p className="text-xl font-extrabold text-gray-900 mb-4 leading-tight">
            At [Your Company], our mission is simple: deliver reliable, secure, and future-ready communication
            solutions that keep your business connected, protected, and running at peak performance.
          </p>
          <p className="text-gray-600 text-md leading-relaxed">
            We believe every business — large or small — deserves world-class structured cabling, professional-grade security systems, and crystal-clear VoIP communications.
            Our commitment is to provide honest guidance, precision installation, and dependable support you can trust day after day.
          </p>
        </section>

      </div>


      {/* ── SECTION 4: Why Choose Us ──────────────────────────────────────── */}
      <WhyChooseUs />

      {/* ── SECTION 5: Bottom CTA Banner ──────────────────────────────────── */}
      <CtaBanner />
    </>
  );
}
// END Home Page