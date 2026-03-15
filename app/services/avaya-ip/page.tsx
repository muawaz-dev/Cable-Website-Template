// app/services/avaya-ip-office/page.tsx — Avaya IP Office Service Page
// Sections: Hero Banner, Sales & Support Overview, Smart Business Era, Features Accordion, CTA

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Accordian from "@/components/pages/avaya-ip/Accordian";
export const metadata: Metadata = {
  title: "Avaya IP Office Sales & Support Denver CO | [Your Company]",
  description:
    "Denver's trusted Avaya IP Office dealer and support specialist. Sales, installation, configuration, maintenance for small and mid-sized businesses. Hosted & on-premise solutions. Call (303) 668-5150.",
  keywords: [
    "Avaya IP Office Denver",
    "VoIP phone systems Denver CO",
    "business phone system Denver",
    "Avaya IP Office support Denver",
    "hosted phone system Denver",
  ],
  alternates: { canonical: "https://hardencommunications.com/services/avaya-ip-office" },
};

// ─── Avaya IP Office Features ─────────────────────────────────────────────────


export default function AvayaIPOfficePage() {
  return (
    <>
      {/* ── SECTION 1: Hero Banner ────────────────────────────────────────── */}
      <section
        className="relative min-h-80 flex items-end overflow-hidden"
        aria-label="Avaya IP Office Sales and Support Denver CO"
      >
        <div
          className="absolute inset-0 bg-cover bg-[30%_48%] bg-no-repeat"
          style={{ backgroundImage: "url('/services/avaya-hero.png')" }}
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-10 pt-20">
          <h1 className="text-3xl md:text-4xl font-black text-white uppercase">
            AVAYA IP OFFICE
          </h1>
        </div>
      </section>

      {/* ── SECTION 2: Sales & Support Overview ──────────────────────────── */}
      <section className="max-w-7xl bg-white mx-auto px-6 py-14" aria-label="Avaya IP Office Sales & Support">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Image */}
          <div className="rounded-xl flex justify-center items-center overflow-hidden h-full">
            <div className="shadow-lg bg-gray-100 rounded-xl relative h-96 w-full" >
              <Image
                src="/services/office-working.jpeg"
                alt="Security cameras, headset, network cables — [Your Company] products"
                className="w-full h-full object-cover rounded-xl"
                loading="lazy"
                fill
              />
            </div>
          </div>

          {/* Right: Text */}
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-5 uppercase leading-tight">
              AVAYA IP OFFICE SALES &amp; SUPPORT
            </h2>

            <p className="text-gray-700 text-md leading-relaxed mb-4">
              <strong>Looking for trusted Avaya IP Office support in Denver?</strong> Harden
              Communications is the leading local expert in Avaya IP Office phone systems
              for small and mid-sized businesses. We specialize in <strong>Avaya IP Office sales,
                installation, configuration, maintenance, and ongoing technical support</strong>—
              giving your business the same communication power and reliability used by
              top enterprise organizations.
            </p>

            <p className="text-gray-700 text-md leading-relaxed mb-4">
              With Avaya IP Office, your company gains advanced features like unified
              communications, seamless VoIP calling, mobile integration, and scalable
              multi-location connectivity. Whether you're upgrading your existing system or
              deploying a brand-new solution, [Your Company] provides the expert
              guidance you need to choose the <strong>best business phone system in Denver</strong>.
            </p>

            <p className="text-gray-700 text-md leading-relaxed font-semibold">
              Boost productivity, improve call quality, and streamline communication with
              Avaya IP Office—backed by the trusted specialists at Harden
              Communications.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: Smart Business Communication Era ──────────────────── */}
      <section className="bg-white py-12 px-6" aria-label="New Era of Smart Business Communication">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-5">
            Welcome to the New Era of Smart Business Communication
          </h2>

          <p className="text-gray-700 text-md leading-relaxed mb-4">
            In today's fast-moving digital world, businesses need a communication system that can scale instantly—whether you're expanding, streamlining, or adapting to
            new opportunities. Modern technology is advancing faster than ever, delivering capabilities that were nearly unimaginable a decade ago. Now, even small
            businesses can access powerful communication tools designed for agility, reliability, and growth.
          </p>

          <p className="text-gray-700 text-md leading-relaxed mb-4">
            For years, traditional telecom systems came with high expenses, complicated hardware, and slow repair times—making it difficult for small companies to stay
            competitive. Avaya IP Office changes that. This intelligent, web-based platform brings enterprise-level communication to Denver businesses at an affordable
            cost, delivering the speed, flexibility, and advanced features modern organizations demand.
          </p>

          <p className="text-gray-700 text-md leading-relaxed">
            By consolidating your phone, messaging, mobility, conferencing, and customer communication tools into one streamlined system, <strong>Avaya IP Office increases
              productivity, reduces downtime, and strengthens your bottom line</strong>. It's the smarter, more efficient way to keep your business connected in today's digital age.
          </p>
        </div>
      </section>

      {/* ── SECTION 4: Features Accordion ─────────────────────────────────── */}
      <section className="max-w-7xl bg-white mx-auto px-6 py-14" aria-label="Avaya IP Office Features">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Features of the AVAYA IP OFFICE</h2>

        <Accordian />
        
      </section>

      {/* ── SECTION 5: Contact CTA ─────────────────────────────────────────── */}
      <section className="py-10 px-6 flex justify-end max-w-7xl mx-auto" aria-label="Contact for Avaya IP Office">
        <Link
          href="/contact"
          className="bg-purple-700 mx-auto hover:bg-purple-800 text-white font-black px-10 py-4 rounded-full text-lg transition-colors"
        >
          CONTACT US
        </Link>
      </section>
    </>
  );
}
// END Avaya IP Office Page