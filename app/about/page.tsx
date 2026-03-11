// app/about/page.tsx — About Page
// Sections: Hero Banner, About Content, Services Accordion, Fiber Optic Banner, CTA

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Harden Communications | Denver CO Structured Cabling & VoIP Experts",
  description:
    "Jeff Harden, proud Colorado native with 30+ years in structured cabling, business communications, and professional surveillance systems. Serving Denver CO and the Front Range since 2014.",
  alternates: { canonical: "https://hardencommunications.com/about" },
};

// ─── Services Accordion data ──────────────────────────────────────────────────
const servicesInfo = [
  {
    id: "avaya",
    title: "AVAYA IP Office Systems",
    isOpen: true,
    content: (
      <>
        <h3 className="text-xl font-bold text-gray-900 mb-4">Avaya IP Office Systems</h3>
        <p className="text-gray-700 mb-4 text-sm leading-relaxed">
          Modern technology has transformed the way Denver and Front Range businesses communicate. Features and capabilities that once required expensive
          enterprise-level phone systems are now affordable and accessible to companies of all sizes. While some organizations still rely on traditional PBX landline
          systems, many are switching to advanced communication solutions that offer greater flexibility, scalability, and efficiency. Today's phone system options
          include digital, IP, VoIP, and cloud-based platforms—all capable of integrating voicemail, email, video conferencing, Wi-Fi calling, mobile extensions, and
          remote access.
        </p>
        <p className="text-gray-700 mb-6 text-sm leading-relaxed">
          At <strong>Harden Communications</strong>, we focus exclusively on <strong className="text-purple-700">Avaya IP Office</strong> because it delivers unmatched reliability, scalability, and performance for small to mid-sized businesses. Our goal is to provide communication solutions that enhance productivity and support long-term growth while staying within your budget.
        </p>

        <h4 className="text-lg font-bold text-gray-900 mb-3">Should You Repair or Replace Your Existing Phone System?</h4>
        <p className="text-gray-700 mb-4 text-sm leading-relaxed">
          Harden Communications has built a trusted reputation by helping businesses choose the best solution for their unique communication needs. Whether you
          require a single line added to your current system, a replacement handset, or a complete phone system upgrade, we approach every job with honesty,
          courtesy, and professionalism.
        </p>
        <p className="text-gray-700 text-sm leading-relaxed">
          We take the time to understand how your business operates so we can recommend the most cost-effective, functional option—whether that's repairing your
          existing system, expanding it, or implementing a new Avaya IP Office solution. Some companies benefit most from hosted (cloud-based) phone systems,
          while others prefer the control and security of an on-premise setup. Our job is to guide you to the right choice for <strong>your</strong> business—not ours.
        </p>
      </>
    ),
  },
  { id: "cabling", title: "Cabling Services", isOpen: false, content: null },
  { id: "security", title: "Security Services", isOpen: false, content: null },
  { id: "hikvision", title: "Hikvision CCTV Installation Partner", isOpen: false, content: null },
];

export default function AboutPage() {
  return (
    <>
      {/* ── SECTION 1: Hero Banner ────────────────────────────────────────── */}
      <section
        className="relative bg-red-900 min-h-[220px] flex items-end overflow-hidden"
        aria-label="About Harden Communications Denver CO"
      >
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: "url('/images/about-hero.jpg')" }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/50" aria-hidden="true" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-10 pt-20">
          <h1 className="text-3xl md:text-4xl font-black text-white">
            ABOUT HARDEN COMMUNICATIONS,
            <br />
            DENVER CO
          </h1>
        </div>
      </section>

      {/* ── SECTION 2: About Content ──────────────────────────────────────── */}
      <section className="max-w-7xl bg-white mx-auto px-6 py-14" aria-label="About Harden Communication Services">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Image */}
          <div className="rounded-xl overflow-hidden shadow-lg bg-gray-100 h-72 flex items-center justify-center">
            <Image
              src="/images/about-products.jpg"
              alt="Security cameras, headset, network cables — Harden Communications products"
              className="w-full h-full object-cover"
              loading="lazy"
              fill
            />
          </div>

          {/* Right: Text */}
          <div>
            <p className="text-purple-600 text-sm font-semibold uppercase tracking-widest mb-2">
              Serving Denver Colorado &amp; The Front Range
            </p>
            <h2 className="text-3xl font-black text-gray-900 mb-5 leading-snug">
              ABOUT HARDEN COMMUNICATION SERVICES
            </h2>

            <p className="text-gray-700 text-sm leading-relaxed mb-4">
              Jeff Harden, a proud Colorado native, has spent more than 30 years
              specializing in structured cabling, business communications, and
              professional surveillance systems. His hands-on experience includes projects
              of every size—from major commercial installations like the Colorado
              Convention Center to streamlined solutions for home-based offices and
              growing local businesses. After earning long-term customer loyalty through
              reliability, expertise, and exceptional service, Jeff founded{" "}
              <strong>Harden Communications</strong> in 2014.
            </p>
            <p className="text-gray-700 text-sm leading-relaxed mb-4">
              Today, Jeff remains actively involved in field work, providing personalized
              service and expert troubleshooting for every client he serves. Harden
              Communications is committed to delivering high-quality solutions for{" "}
              <strong>network cabling, Avaya IP Office phone systems, and CCTV security camera
              installations</strong> throughout the Denver metro area and beyond.
            </p>
            <p className="text-gray-700 text-sm leading-relaxed">
              If you're looking for a trusted local expert to design, upgrade, or support your
              communication and security systems, contact Harden Communications for a{" "}
              <strong>free consultation</strong> at{" "}
              <a href="tel:3036685150" className="text-purple-700 hover:underline font-semibold">
                (303) 668-5150
              </a>.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: About Our Services (Accordion) ─────────────────────── */}
      <section className="max-w-7xl bg-white mx-auto px-6 pb-14" aria-label="About Our Services">
        <h2 className="text-2xl font-black text-gray-900 mb-6 uppercase">ABOUT OUR SERVICES</h2>

        <div className="border border-gray-200 rounded-xl overflow-hidden divide-y divide-gray-200">
          {servicesInfo.map((item) => (
            <details key={item.id} open={item.isOpen} className="group">
              <summary className="flex items-center justify-between px-6 py-4 cursor-pointer select-none hover:bg-gray-50 transition-colors">
                <span className="font-semibold text-gray-800 flex items-center gap-2">
                  <span className="text-purple-600 font-bold">
                    {item.isOpen ? "−" : "+"}
                  </span>
                  {item.title}
                </span>
              </summary>
              {item.content && (
                <div className="px-6 pb-8 pt-2 bg-white">
                  {item.content}
                </div>
              )}
            </details>
          ))}
        </div>
      </section>

      {/* ── SECTION 4: Fiber Optic Banner ─────────────────────────────────── */}
      <section
        className="bg-purple-700 py-12 px-6 text-center"
        aria-label="Denver Fiber Optic Internet Announcement"
      >
        <p className="text-white font-black text-xl md:text-2xl leading-tight mb-6 max-w-2xl mx-auto uppercase">
          Fiber optic internet was recently acknowledged by the Denver Mayor and is set to be implemented in the city's most valued public resources
        </p>
        <Link
          href="/blog"
          className="inline-block bg-gray-900 hover:bg-gray-800 text-white font-bold px-6 py-3 rounded text-sm tracking-widest uppercase transition-colors"
        >
          READ ARTICLE HERE
        </Link>
      </section>

      {/* ── SECTION 5: Contact CTA ─────────────────────────────────────────── */}
      <section className="py-12 px-6 flex justify-end max-w-7xl mx-auto" aria-label="Contact Harden Communications">
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
// END About Page