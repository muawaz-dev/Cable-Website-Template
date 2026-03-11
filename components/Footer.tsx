// components/Footer.tsx — Site-wide Footer Component
// Displays logo, description, official info (email, phone, hours), social icons

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white" role="contentinfo" aria-label="Site footer">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* ── Brand Column ──────────────────────────────────────────────── */}
          <div>
            {/* Logo */}
            <Link href="/" aria-label="Harden Communications Home">
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-white text-purple-800 font-black text-lg px-3 py-1 rounded-sm tracking-tight">
                  HARDEN
                </div>
                <div className="text-xs text-gray-400 leading-tight">
                  COMMUNICATIONS
                </div>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-4 max-w-xs">
              Harden Communications delivers professional structured cabling, CCTV security
              systems, and VoIP phone solutions for businesses of all sizes. With reliable
              service, quality installations, and a commitment to keeping you connected and
              protected, we're the partner you can trust for all your communication needs.
            </p>
            {/* About Us Button */}
            <Link
              href="/about"
              className="inline-block bg-purple-700 hover:bg-purple-600 text-white text-xs font-bold px-5 py-2 rounded-full transition-colors"
            >
              About us
            </Link>

            {/* Social Icons */}
            <div className="flex gap-4 mt-6">
              <a href="#" aria-label="Facebook" className="bg-gray-700 hover:bg-purple-700 transition-colors w-9 h-9 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a href="#" aria-label="Twitter" className="bg-gray-700 hover:bg-purple-700 transition-colors w-9 h-9 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="bg-gray-700 hover:bg-purple-700 transition-colors w-9 h-9 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          {/* ── Official Info Column ──────────────────────────────────────── */}
          <div>
            <h2 className="text-white font-bold text-lg mb-3">Official info:</h2>
            <div className="w-12 h-0.5 bg-purple-500 mb-5" aria-hidden="true" />

            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <a
                  href="mailto:jeff@hardencommunications.com"
                  className="flex items-center gap-2 hover:text-purple-400 transition-colors"
                  aria-label="Email Harden Communications"
                >
                  <svg className="w-4 h-4 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  jeff@hardencommunications.com
                </a>
              </li>
              <li>
                <a
                  href="tel:3036685150"
                  className="flex items-center gap-2 hover:text-purple-400 transition-colors"
                  aria-label="Phone Harden Communications"
                >
                  <svg className="w-4 h-4 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  303-668-5150
                </a>
              </li>
              <li className="pt-2">
                <p className="text-white font-semibold mb-1">Open Hours:</p>
                <p>Mon – Fri: 8 am – 5 pm,</p>
                <p>Saturday &amp; Sunday: CLOSED</p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* ── Copyright Bar ────────────────────────────────────────────────── */}
      <div className="border-t border-gray-800 py-4 text-center text-xs text-gray-600">
        © {new Date().getFullYear()} Harden Communications Inc. All rights reserved.
      </div>
    </footer>
  );
}
// END Footer Component