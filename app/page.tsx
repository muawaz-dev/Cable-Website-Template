// app/page.tsx — Home Page
// Sections: Hero Slider, Service Cards, Mission Statement, Why Choose Us, CTA Banner

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "[Your Company] | Structured Cabling, Security Cameras & VoIP Denver CO",
  description:
    "Serving Denver CO & the Front Range. Professional structured cabling (Cat5e/Cat6/Fiber), Hikvision CCTV security camera installation, and Avaya IP Office VoIP phone systems. Call (303) 668-5150.",
  alternates: { canonical: "https://[Your Company]communications.com" },
};

// ─── Service Card Data ────────────────────────────────────────────────────────
const serviceCards = [
  {
    icon: (
      // Network/cabling icon
      <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M5 12l4-4m-4 4l4 4M19 12l-4-4m4 4l-4 4" />
      </svg>
    ),
    title: "Structured Cabling",
    subtitle: "CAT5E | CAT6| COAX | FIBER OPTICS",
    href: "/services/cable-installation",
  },
  {
    icon: (
      // Phone/office icon
      <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    title: "AVAYA IP OFFICE SALES & SUPPORT",
    subtitle: "Hosted Communications | IP OFFICE | PARTNER ACS | MERLIN | LEGEND/MAGIX | DEFINITY",
    href: "/services/avaya-ip-office",
  },
  {
    icon: (
      // Camera icon
      <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.069A1 1 0 0121 8.867v6.266a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
    title: "HIKVISION CCTV SECURITY CAMERAS",
    subtitle: "CCTV | IP | HIKVISION",
    href: "/services/security",
  },
];

// ─── Why Choose Us Data ───────────────────────────────────────────────────────
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

export default function HomePage() {
  return (
    <>
      {/* ── SECTION 1: Hero ──────────────────────────────────────────────── */}
      <section
        className="relative min-h-[560px] flex items-center justify-start overflow-hidden bg-red-900"
        aria-label="Hero: Structured Cabling, Security Cameras & VoIP Denver CO"
      >
        {/* Background image placeholder — replace src with real Hikvision/cabling image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
          aria-hidden="true"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-transparent" aria-hidden="true" />

        {/* Hero Content */}
        <div className="relative z-10 grow px-6 py-20">
          {/* Badge */}
          <span className="inline-block bg-purple-600 text-white text-xs font-bold px-4 py-1.5 rounded-full mb-6 tracking-widest uppercase">
            Serving Denver CO &amp; The Front Range
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight max-w-4xl">
            STRUCTURED CABLING,
            SECURITY CAMERAS &amp;
            <br />
            <span className="text-purple-400">VoIP Phone Systems</span>
          </h1>

          <div className="mt-8">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 bg-purple-700 hover:bg-purple-600 text-white font-bold px-6 py-3 rounded-full transition-colors"
            >
              Learn More About Us
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

     
        {/* ── SECTION 2: Service Cards ──────────────────────────────────────── */}
        <section
          className="max-w-7xl mx-auto px-6 -mt-16 relative z-10 bg-white"
          aria-label="Our Services"
        >

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {serviceCards.map((card) => (
              <Link
                key={card.href}
                href={card.href}
                className="bg-white rounded-xl shadow-lg p-7 flex flex-col items-center text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-200 group"
                aria-label={`Learn about ${card.title}`}
              >
                {/* Icon Circle */}
                <div className="w-16 h-16 rounded-full bg-purple-700 flex items-center justify-center mb-5 group-hover:bg-purple-800 transition-colors">
                  {card.icon}
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-3 uppercase leading-tight">
                  {card.title}
                </h2>
                {/* Divider */}
                <div className="w-10 h-0.5 bg-purple-600 mb-3" aria-hidden="true" />
                <p className="text-sm text-gray-500 uppercase tracking-wide">{card.subtitle}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* ── SECTION 3: Mission Statement ────────────────────────────────── */}
        <section className="max-w-7xl bg-white mx-auto px-6 py-16" aria-label="Our Mission">
          <p className="text-xl font-extrabold text-gray-900 mb-4 leading-relaxed">
            At [Your Company], our mission is simple: deliver reliable, secure, and future-ready communication
            solutions that keep your business connected, protected, and running at peak performance.
          </p>
          <p className="text-gray-600 text-md leading-relaxed">
            We believe every business — large or small — deserves world-class structured cabling, professional-grade security systems, and crystal-clear VoIP communications.
            Our commitment is to provide honest guidance, precision installation, and dependable support you can trust day after day.
          </p>
        </section>
    


      {/* ── SECTION 4: Why Choose Us ──────────────────────────────────────── */}
      <section className="bg-gray-50 py-16" aria-label="Why Choose [Your Company]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left: Images */}
            <div className="space-y-6 flex flex-col items-center">
              {/* Image 1: Security Camera Install */}
              <div className="rounded-xl relative overflow-hidden shadow-lg bg-gray-200 h-96 w-72 flex items-center justify-center">
                <Image
                  src="/home/camera-install.png"
                  alt="Technician installing a Hikvision security camera"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  fill
                />
              </div>
              {/* Image 2: Cable Installation */}
              <div className="rounded-xl relative overflow-hidden shadow-lg bg-gray-200 h-96 w-72 flex items-center justify-center">
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
                <div key={index} className="mb-8">
                  <h3 className="text-3xl font-black text-gray-900 mb-3 border-l-4 border-purple-600 pl-4 leading-snug">
                    {/* Highlight "YOU" in first item */}
                    {index === 0 ? (
                      <>
                        Experience{" "}
                        <span className="text-purple-600">YOU</span>
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
                  className="bg-purple-700 hover:bg-purple-800 text-white font-bold px-6 py-3 rounded-full flex items-center gap-2 transition-colors text-sm"
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
                  <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
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

      {/* ── SECTION 5: Bottom CTA Banner ──────────────────────────────────── */}
      <section
        className="bg-gray-900 py-16 px-6"
        aria-label="Upgrade your network, security, or VoIP service"
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <h2 className="text-xl md:text-3xl font-black text-white text-center md:text-left leading-tight">
            Ready To{" "}
            <span className="text-purple-400">UPGRADE</span>
            {" "}Your Network,
            <br />
            Security, Or VOIP Service?
          </h2>
          <Link
            href="/contact"
            className="flex-shrink-0 bg-purple-700 hover:bg-purple-600 text-white font-black px-8 py-4 rounded-full text-lg transition-colors"
          >
            CONTACT US
          </Link>
        </div>
      </section>
    </>
  );
}
// END Home Page