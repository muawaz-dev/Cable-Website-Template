// app/services/security/page.tsx — Security & CCTV Service Page
// Sections: Hero Banner, Overview, Features, CTA

import type { Metadata } from "next";
import SecurityImage from "@/components/pages/services/security/Image";
import BusinessAccordion from "@/components/pages/services/security/BusinessAccordian";
import HomeAccordion from "@/components/pages/services/security/HomeAccordion";
import CtaBanner from "@/components/layout/CtaBanner";
import SecurityHero from "@/components/pages/services/security/Hero";
export const metadata: Metadata = {
  title: "Hikvision CCTV Security Camera Installation Denver CO | [Your Company]",
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
      <SecurityHero/>

      <div className="bg-white">

      {/* ── SECTION 2: Overview ───────────────────────────────────────────── */}
      <section className="max-w-7xl fade-in bg-white mx-auto px-6 py-14" aria-label="Hikvision Security Camera Overview">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 items-start">
          {/* Left: Image */}
          <SecurityImage/>

          {/* Right: Text */}
          <div>
            <p className="text-purple-600 text-sm font-semibold uppercase tracking-widest mb-2">
              Hikvision Authorized Partner | Denver CO &amp; Front Range
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-5 uppercase leading-tight">
              HIKVISION CCTV SECURITY CAMERA INSTALLATION
            </h2>

            <p className="text-gray-700 text-md leading-relaxed mb-4">
              Protect your business, employees, and assets with professional-grade surveillance systems from Hikvision — the world's leading CCTV manufacturer. [Your Company] is a certified Hikvision installation partner serving Denver CO and the Front Range.
            </p>
            <p className="text-gray-700 text-md leading-relaxed mb-4">
              Whether you need a single camera for a small office or a comprehensive multi-site surveillance network, we design, install, and support systems that deliver crystal-clear video, remote access, and long-term reliability.
            </p>
            <p className="text-gray-700 text-md leading-relaxed">
              We offer <strong>CCTV, IP, and Hikvision</strong> solutions tailored to your specific security needs and budget. Every installation is clean, organized, and fully tested before we leave the job site.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: Trust and Value Section ──────────────────────────── */}
      <section className="max-w-7xl bg-white mx-auto px-6 pb-6" aria-label="What Is Structured Cabling">
        <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-5">
          We stand firmly behind our products and installation.
        </h2>

        <p className="text-gray-700 text-md leading-relaxed mb-4">
          Modern security cameras are no longer a luxury—they’re a vital layer of protection for both homes and businesses
          . What used to be an expensive option limited to high-value properties has evolved into an affordable and essential tool for
           safeguarding your family, employees, and assets.
        </p>
        <p className="text-gray-700 text-md leading-relaxed mb-4">
          Today’s <strong>professional security camera systems</strong> offer clearer images, smarter features, 
          and more reliable performance than ever before. And despite the misconception that expert 
          installation is costly, most property owners are surprised at how budget-friendly a professionally installed system can be.
           Law enforcement, fire departments, and first responders consistently emphasize that a well-installed surveillance system is one of the most effective steps you can take to deter crime, document incidents, and protect your property.
        </p>
        <p className="text-gray-700 text-md leading-relaxed mb-4">
         At [Your Company], <strong>we stand firmly behind the products we install 
         and the workmanship we deliver</strong>. When you choose us, you choose proven 
         reliability, superior quality, and long-lasting peace of mind.
        </p>
      </section>

      {/* ── SECTION 3: Business Accordion ──────────────────────────────────────── */}

      <BusinessAccordion />

      {/* ── SECTION 4: Home Accordion ──────────────────────────────────────── */}

      <HomeAccordion />
      </div>

      {/* ── SECTION 5: Features Grid ──────────────────────────────────────── */}
      <section className="bg-gray-50 py-16 px-6" aria-label="CCTV Security Camera Features">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3 text-center">Why Choose Hikvision CCTV?</h2>
          <p className="text-gray-500 text-sm text-center mb-10 max-w-xl mx-auto">
            Industry-leading cameras backed by expert installation from [Your Company].
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {securityFeatures.map((feature) => (
              <div
                key={feature.title}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-purple-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-xl">{feature.title}</h3>
                <p className="text-gray-600 text-md leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 6: Contact CTA ─────────────────────────────────────────── */}
      <CtaBanner />
    </>
  );
}
// END Security Page