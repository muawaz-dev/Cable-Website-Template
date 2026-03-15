// app/about/page.tsx — About Page
// Sections: Hero Banner, About Content, Services Accordion, Fiber Optic Banner, CTA

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CtaBanner from "@/components/layout/CtaBanner";
import Accordion from "@/components/pages/about/Accordion";
export const metadata: Metadata = {
  title: "About Harden Communications | Denver CO Structured Cabling & VoIP Experts",
  description:
    "Jeff Harden, proud Colorado native with 30+ years in structured cabling, business communications, and professional surveillance systems. Serving Denver CO and the Front Range since 2014.",
  alternates: { canonical: "https://hardencommunications.com/about" },
};

// ─── Services Accordion data ──────────────────────────────────────────────────

export default function AboutPage() {
  return (
    <>
      {/* ── SECTION 1: Hero Banner ────────────────────────────────────────── */}
      <section
        className="relative fade-in min-h-80 flex items-end overflow-hidden"
        aria-label="About Harden Communications Denver CO"
      >
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/about/about-hero.png')" }}
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-10 pt-20">
          <h1 className="text-3xl md:text-4xl font-black text-white">
            ABOUT HARDEN COMMUNICATIONS,
            <br />
            DENVER CO
          </h1>
        </div>
      </section>


        {/* ── SECTION 2: About Content ──────────────────────────────────────── */}
        <section className="max-w-7xl fade-in bg-white mx-auto px-6 py-14" aria-label="About Harden Communication Services">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Left: Image */}
            <div className="overflow-hidden h-full flex items-center justify-center">
              <div className="shadow-lg bg-gray-100 rounded-xl relative h-96 w-full" >
                <Image
                  src="/about/about-products.png"
                  alt="Security cameras, headset, network cables — Harden Communications products"
                  className="w-full h-full object-cover rounded-xl"
                  loading="lazy"
                  fill
                />
              </div>
            </div>

            {/* Right: Text */}
            <div>
              <p className="text-purple-600 text-sm font-semibold uppercase tracking-widest mb-2">
                Serving Denver Colorado &amp; The Front Range
              </p>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-5 leading-snug">
                ABOUT [YOUR COMPANY] SERVICES
              </h2>

              <p className="text-gray-700 text-md leading-relaxed mb-4">
                Jeff, a proud Colorado native, has spent more than 30 years
                specializing in structured cabling, business communications, and
                professional surveillance systems. His hands-on experience includes projects
                of every size—from major commercial installations like the Colorado
                Convention Center to streamlined solutions for home-based offices and
                growing local businesses. After earning long-term customer loyalty through
                reliability, expertise, and exceptional service, Jeff founded{" "}
                <strong>[YOUR COMPANY]</strong> in 2014.
              </p>
              <p className="text-gray-700 text-md leading-relaxed mb-4">
                Today, Jeff remains actively involved in field work, providing personalized
                service and expert troubleshooting for every client he serves. [YOUR COMPANY]
                is committed to delivering high-quality solutions for{" "}
                <strong>network cabling, Avaya IP Office phone systems, and CCTV security camera
                  installations</strong> throughout the Denver metro area and beyond.
              </p>
              <p className="text-gray-700 text-sm leading-relaxed">
                If you're looking for a trusted local expert to design, upgrade, or support your
                communication and security systems, contact [YOUR COMPANY] for a{" "}
                <strong>free consultation</strong> at{" "}
                <a href="tel:3036685150" className="text-purple-700 hover:underline font-semibold">
                  (999) 999-9999
                </a>.
              </p>
            </div>
          </div>
        </section>

        {/* ── SECTION 3: About Our Services (Accordion) ─────────────────────── */}
        <Accordion />
      {/* ── SECTION 4: Fiber Optic Banner ─────────────────────────────────── */}
      <section
        className="bg-brand-gradient flex justify-center items-center h-40 py-12 px-6 text-center"
        aria-label="Denver Fiber Optic Internet Announcement"
      >
        <p className="text-white font-black text-xl md:text-2xl leading-tight mb-6 max-w-2xl mx-auto uppercase">
          We Value Quality And Honour commitment
        </p>
      </section>

      {/* ── SECTION 5: Contact CTA ─────────────────────────────────────────── */}
      <CtaBanner/>
    </>
  );
}
// END About Page