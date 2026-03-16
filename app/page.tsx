// app/page.tsx — Home Page
// Sections: Hero Slider, Service Cards, Mission Statement, Why Choose Us, CTA Banner

import type { Metadata } from "next";
import Hero from "@/components/pages/home/Hero";
import Services from "@/components/pages/home/Services";
import MissionStatement from "@/components/pages/home/MissionStatement";
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
      <div className="bg-[#E1E5ED]">

        <Services />

        {/* ── SECTION 3: Mission Statement ────────────────────────────────── */}
        <MissionStatement />

      </div>


      {/* ── SECTION 4: Why Choose Us ──────────────────────────────────────── */}
      <WhyChooseUs />

      {/* ── SECTION 5: Bottom CTA Banner ──────────────────────────────────── */}
      <CtaBanner />
    </>
  );
}
// END Home Page