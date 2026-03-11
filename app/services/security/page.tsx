// app/services/security/page.tsx — Security & CCTV Service Page
// Sections: Hero Banner, Overview, Features, CTA

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hikvision CCTV Security Camera Installation Denver CO | Harden Communications",
  description:
    "Professional Hikvision CCTV security camera installation in Denver CO and the Front Range. IP cameras, analog systems, and complete surveillance solutions for businesses. Call (303) 668-5150.",
  keywords: [
    "Hikvision CCTV Denver",
    "security camera installation Denver CO",
    "CCTV cameras Denver",
    "IP security cameras Denver",
    "surveillance systems Denver Front Range",
  ],
  alternates: { canonical: "https://hardencommunications.com/services/security" },
};

// ─── Security Features data ───────────────────────────────────────────────────
const securityFeatures = [
  {
    title: "HD & 4K Video Quality",
    description: "Crystal-clear footage with industry-leading Hikvision cameras for precise identification.",
  },
  {
    title: "Remote Monitoring",
    description: "View your cameras from anywhere via smartphone, tablet, or desktop browser.",
  },
  {
    title: "Night Vision & Low-Light",
    description: "Advanced IR and color night vision keeps your property protected around the clock.",
  },
  {
    title: "Motion Detection & Alerts",
    description: "Instant notifications when motion is detected so you can act immediately.",
  },
  {
    title: "Scalable Systems",
    description: "Start with a few cameras and expand as your business grows—no need to replace hardware.",
  },
  {
    title: "Professional Installation",
    description: "Clean, organized, and fully tested installations by certified Hikvision technicians.",
  },
];

export default function SecurityPage() {
  return (
    <>
      {/* ── SECTION 1: Hero Banner ────────────────────────────────────────── */}
      <section
        className="relative bg-gray-900 min-h-[220px] flex items-end overflow-hidden"
        aria-label="Hikvision CCTV Security Camera Installation Denver CO"
      >
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: "url('/images/security-hero.jpg')" }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/50" aria-hidden="true" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-10 pt-20">
          <h1 className="text-3xl md:text-4xl font-black text-white uppercase">
            HIKVISION CCTV SECURITY CAMERAS
          </h1>
        </div>
      </section>

      {/* ── SECTION 2: Overview ───────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 py-14" aria-label="Hikvision Security Camera Overview">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Image */}
          <div className="rounded-xl overflow-hidden shadow-lg bg-gray-200 h-72">
            <Image
              src="/images/hikvision-camera.jpg"
              alt="Hikvision CCTV security camera installed in Denver business"
              className="w-full h-full object-cover"
              loading="lazy"
              fill
            />
          </div>

          {/* Right: Text */}
          <div>
            <p className="text-purple-600 text-sm font-semibold uppercase tracking-widest mb-2">
              Hikvision Authorized Partner | Denver CO &amp; Front Range
            </p>
            <h2 className="text-3xl font-black text-gray-900 mb-5 uppercase leading-tight">
              HIKVISION CCTV SECURITY CAMERA INSTALLATION
            </h2>

            <p className="text-gray-700 text-sm leading-relaxed mb-4">
              Protect your business, employees, and assets with professional-grade surveillance systems from Hikvision — the world's leading CCTV manufacturer. Harden Communications is a certified Hikvision installation partner serving Denver CO and the Front Range.
            </p>
            <p className="text-gray-700 text-sm leading-relaxed mb-4">
              Whether you need a single camera for a small office or a comprehensive multi-site surveillance network, we design, install, and support systems that deliver crystal-clear video, remote access, and long-term reliability.
            </p>
            <p className="text-gray-700 text-sm leading-relaxed">
              We offer <strong>CCTV, IP, and Hikvision</strong> solutions tailored to your specific security needs and budget. Every installation is clean, organized, and fully tested before we leave the job site.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: Features Grid ──────────────────────────────────────── */}
      <section className="bg-gray-50 py-16 px-6" aria-label="CCTV Security Camera Features">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-black text-gray-900 mb-3 text-center">Why Choose Hikvision CCTV?</h2>
          <p className="text-gray-500 text-sm text-center mb-10 max-w-xl mx-auto">
            Industry-leading cameras backed by expert installation from Harden Communications.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {securityFeatures.map((feature) => (
              <div
                key={feature.title}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-purple-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-sm">{feature.title}</h3>
                <p className="text-gray-600 text-xs leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 4: Contact CTA ─────────────────────────────────────────── */}
      <section className="py-12 px-6 flex justify-end max-w-7xl mx-auto" aria-label="Contact Harden Communications for Security">
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
// END Security Page