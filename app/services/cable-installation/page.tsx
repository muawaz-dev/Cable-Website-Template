// app/services/cable-installation/page.tsx — Cable Installation Service Page
// Sections: Hero Banner, Structured Cabling Overview, Benefits Accordion, CTA

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CtaBanner from "@/components/layout/CtaBanner";
import Accordion from "@/components/pages/cable-installation/Accordion";
export const metadata: Metadata = {
  title: "Structured Cabling & Cable Installation Denver CO | [Your Company]",
  description:
    "Professional structured cabling installation in Denver CO. Cat5e, Cat6, Coax, and Fiber Optics for businesses of all sizes. High-bandwidth, future-proof network infrastructure. Call (303) 668-5150.",
  keywords: [
    "structured cabling Denver",
    "cable installation Denver CO",
    "Cat6 cabling Denver",
    "fiber optic installation Denver",
    "network cabling Front Range",
  ],
  alternates: { canonical: "https://hardencommunications.com/services/cable-installation" },
};


export default function CableInstallationPage() {
  return (
    <>
      {/* ── SECTION 1: Hero Banner ────────────────────────────────────────── */}
      <section
        className="relative fade-in min-h-80 flex items-end overflow-hidden"
        aria-label="Cable Installation Services Denver CO"
      >
        <div
          className="absolute inset-0 bg-cover bg-[30%_48%] bg-no-repeat"
          style={{ backgroundImage: "url('/services/cabling-hero.png')" }}
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-10 pt-20">
          <h1 className="text-3xl md:text-4xl font-black text-white uppercase">
            CABLE INSTALLATION
          </h1>
        </div>
      </section>

      <div className="bg-white">

        {/* ── SECTION 2: Structured Cabling Overview ─────────────────────────── */}
        <section className="max-w-7xl fade-in bg-white mx-auto px-6 py-14" aria-label="Structured Cabling Services Denver CO">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left: Image */}
            <div className="rounded-xl relative overflow-hidden shadow-lg bg-gray-200 h-80">
              <Image
                src="/services/cabling-work.png"
                alt="Technicians performing structured cabling installation in a commercial building in Denver CO"
                className="w-full h-full object-cover"
                loading="lazy"
                fill
              />
            </div>

            {/* Right: Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-5 uppercase">STRUCTURED CABLING</h2>
              <p className="text-gray-700 text-md leading-relaxed">
                A high-performance business starts with a high-performance network.
                Professionally installed <strong>structured cabling</strong> ensures faster connections,
                smoother operations, and the ability to scale as your business grows. [Your Company] delivers industry-leading cabling solutions, precision
                installation, and dependable support for businesses across the region.
                Invest in quality. Invest in reliability. <strong>Trust [Your Company] for all
                  your structured cabling needs.</strong>
              </p>
            </div>
          </div>
        </section>

        {/* ── SECTION 3: What Is Structured Cabling ──────────────────────────── */}
        <section className="max-w-7xl bg-white mx-auto px-6 pb-14" aria-label="What Is Structured Cabling">
          <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-5">
            Structured Cabling – What It Is and Why Your Business Needs It (SEO-Optimized Version)
          </h2>

          <p className="text-gray-700 text-md leading-relaxed mb-4">
            <strong>Structured cabling</strong> is the foundation of your organization's entire IT network. It serves as the unified infrastructure that connects your computers, VoIP phones,
            wireless devices, security systems, and all communication technologies your business relies on every day. By creating a standardized and organized cabling
            system, structured cabling delivers a <strong>reliable, scalable, and future-ready</strong> network that supports your communication needs as they evolve.
          </p>
          <p className="text-gray-700 text-md leading-relaxed mb-10">
            Unlike traditional point-to-point wiring, structured cabling is designed for flexibility. It makes <strong>moves, add-ons, and changes</strong> simple and efficient—reducing
            installation time and ensuring your network can adapt as your business grows. A properly engineered structured cabling system won't become outdated; instead,
            it supports <strong>emerging technologies</strong>, higher bandwidth demands, and new applications for years to come.
          </p>

          {/* ── Benefits Accordion ───────────────────────────────────────── */}
          <Accordion />

        </section>
      </div>
      


      {/* ── SECTION 4: Contact CTA ─────────────────────────────────────────── */}
      <CtaBanner/>
    </>
  );
}
// END Cable Installation Page