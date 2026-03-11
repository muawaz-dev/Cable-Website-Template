// app/services/avaya-ip-office/page.tsx — Avaya IP Office Service Page
// Sections: Hero Banner, Sales & Support Overview, Smart Business Era, Features Accordion, CTA

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Avaya IP Office Sales & Support Denver CO | Harden Communications",
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
const avayaFeatures = [
  {
    id: "locations",
    title: "LINK UP TO 16 LOCATIONS",
    isOpen: true,
    body: "Avaya IP Office makes it simple to connect multiple offices, remote teams, and satellite locations—all on one unified communication system. With support for up to 16 connected sites, your entire organization can collaborate as if they're under one roof. Share resources, transfer calls seamlessly, standardize voicemail and messaging, and maintain consistent communication across every branch. Whether you're expanding, merging, or managing distributed teams, Avaya IP Office provides the reliability and flexibility your business needs to stay connected from anywhere.",
  },
  {
    id: "conference",
    title: "HOLD UP TO TWO 64-PARTY CONFERENCE CALLS",
    isOpen: false,
    body: "",
  },
  {
    id: "telephones",
    title: "MAINTAIN UP TO 360 TELEPHONES",
    isOpen: false,
    body: "",
  },
  {
    id: "scale",
    title: "SCALE UP TO 1000 USERS THROUGH 1 SITE",
    isOpen: false,
    body: "",
  },
  {
    id: "program",
    title: "EASY TO PROGRAM PREFERENCES",
    isOpen: false,
    body: "",
  },
  {
    id: "collaborate",
    title: "COLLABORATE IN REAL TIME VIA MOBILE OR DESKTOP",
    isOpen: false,
    body: "",
  },
  {
    id: "track",
    title: "TRACK, RECORD, & REPORT CALLS ON A LARGE SCALE",
    isOpen: false,
    body: "",
  },
];

export default function AvayaIPOfficePage() {
  return (
    <>
      {/* ── SECTION 1: Hero Banner ────────────────────────────────────────── */}
      <section
        className="relative bg-gray-900 min-h-[220px] flex items-end overflow-hidden"
        aria-label="Avaya IP Office Sales and Support Denver CO"
      >
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: "url('/images/avaya-hero.jpg')" }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/50" aria-hidden="true" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-10 pt-20">
          <h1 className="text-3xl md:text-4xl font-black text-white uppercase">
            AVAYA IP OFFICE
          </h1>
        </div>
      </section>

      {/* ── SECTION 2: Sales & Support Overview ──────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 py-14" aria-label="Avaya IP Office Sales & Support">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Image */}
          <div className="rounded-xl overflow-hidden shadow-lg bg-gray-200 h-72">
            <Image
              src="/images/avaya-office.jpg"
              alt="Business professionals using Avaya IP Office phone system in Denver office"
              className="w-full h-full object-cover"
              loading="lazy"
              fill
            />
          </div>

          {/* Right: Text */}
          <div>
            <h2 className="text-3xl font-black text-gray-900 mb-5 uppercase leading-tight">
              AVAYA IP OFFICE SALES &amp; SUPPORT
            </h2>

            <p className="text-gray-700 text-sm leading-relaxed mb-4">
              <strong>Looking for trusted Avaya IP Office support in Denver?</strong> Harden
              Communications is the leading local expert in Avaya IP Office phone systems
              for small and mid-sized businesses. We specialize in <strong>Avaya IP Office sales,
              installation, configuration, maintenance, and ongoing technical support</strong>—
              giving your business the same communication power and reliability used by
              top enterprise organizations.
            </p>

            <p className="text-gray-700 text-sm leading-relaxed mb-4">
              With Avaya IP Office, your company gains advanced features like unified
              communications, seamless VoIP calling, mobile integration, and scalable
              multi-location connectivity. Whether you're upgrading your existing system or
              deploying a brand-new solution, Harden Communications provides the expert
              guidance you need to choose the <strong>best business phone system in Denver</strong>.
            </p>

            <p className="text-gray-700 text-sm leading-relaxed font-semibold">
              Boost productivity, improve call quality, and streamline communication with
              Avaya IP Office—backed by the trusted specialists at Harden
              Communications.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: Smart Business Communication Era ──────────────────── */}
      <section className="bg-gray-50 py-16 px-6" aria-label="New Era of Smart Business Communication">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-5">
            Welcome to the New Era of Smart Business Communication
          </h2>

          <p className="text-gray-700 text-sm leading-relaxed mb-4">
            In today's fast-moving digital world, businesses need a communication system that can scale instantly—whether you're expanding, streamlining, or adapting to
            new opportunities. Modern technology is advancing faster than ever, delivering capabilities that were nearly unimaginable a decade ago. Now, even small
            businesses can access powerful communication tools designed for agility, reliability, and growth.
          </p>

          <p className="text-gray-700 text-sm leading-relaxed mb-4">
            For years, traditional telecom systems came with high expenses, complicated hardware, and slow repair times—making it difficult for small companies to stay
            competitive. Avaya IP Office changes that. This intelligent, web-based platform brings enterprise-level communication to Denver businesses at an affordable
            cost, delivering the speed, flexibility, and advanced features modern organizations demand.
          </p>

          <p className="text-gray-700 text-sm leading-relaxed">
            By consolidating your phone, messaging, mobility, conferencing, and customer communication tools into one streamlined system, <strong>Avaya IP Office increases
            productivity, reduces downtime, and strengthens your bottom line</strong>. It's the smarter, more efficient way to keep your business connected in today's digital age.
          </p>
        </div>
      </section>

      {/* ── SECTION 4: Features Accordion ─────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 py-14" aria-label="Avaya IP Office Features">
        <h2 className="text-2xl font-black text-gray-900 mb-6">Features of the AVAYA IP OFFICE</h2>

        <div className="border border-gray-200 rounded-xl overflow-hidden divide-y divide-gray-200">
          {avayaFeatures.map((feature) => (
            <details key={feature.id} open={feature.isOpen} className="group">
              <summary className="flex items-center gap-3 px-6 py-4 cursor-pointer select-none hover:bg-gray-50 transition-colors">
                <span className="text-purple-600 font-bold text-lg leading-none">
                  {feature.isOpen ? "−" : "+"}
                </span>
                <span className="font-bold text-gray-800 text-sm uppercase tracking-wide">
                  {feature.title}
                </span>
              </summary>
              {feature.body && (
                <div className="px-6 pb-5 pt-1 text-gray-600 text-sm leading-relaxed bg-white">
                  {feature.body}
                </div>
              )}
            </details>
          ))}
        </div>
      </section>

      {/* ── SECTION 5: Contact CTA ─────────────────────────────────────────── */}
      <section className="py-10 px-6 flex justify-end max-w-7xl mx-auto" aria-label="Contact for Avaya IP Office">
        <Link
          href="/contact"
          className="bg-purple-700 hover:bg-purple-800 text-white font-black px-10 py-4 rounded-full text-lg transition-colors"
        >
          CONTACT US
        </Link>
      </section>
    </>
  );
}
// END Avaya IP Office Page