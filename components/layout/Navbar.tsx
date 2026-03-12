"use client";
// components/Navbar.tsx — Site-wide Navigation Component
// Features: top info bar, logo, nav links, Services hover dropdown, contact button

import { useState, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// ─── Service sub-menu items ───────────────────────────────────────────────────
const serviceLinks = [
  { label: "Cable Installation", href: "/services/cable-installation" },
  { label: "Security", href: "/services/security" },
  { label: "Avaya IP Office", href: "/services/avaya-ip" },
];

// ─── Main nav links ───────────────────────────────────────────────────────────
const navLinks = [
  { label: "HOME", href: "/" },
  { label: "ABOUT US", href: "/about" }
];

export default function Navbar() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Delay closing dropdown so mouse can move to it
  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setServicesOpen(true);
  };
  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setServicesOpen(false), 150);
  };

  return (
    <header className="w-full sticky top-0 z-50 shadow-md">
      {/* ── Top Info Bar ─────────────────────────────────────────────────── */}
      <div className="bg-gray-900 text-white text-sm py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-6">
            {/* Email */}
            <a
              href="mailto:jeff@hardencommunications.com"
              className="flex items-center gap-1 hover:text-purple-400 transition-colors"
              aria-label="Email Harden Communications"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              abc@gmail.com
            </a>
            {/* Phone */}
            <a
              href="tel:3036685150"
              className="flex items-center gap-1 hover:text-purple-400 transition-colors"
              aria-label="Call Harden Communications"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              (999) 999-9999
            </a>
          </div>
          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a href="#" aria-label="Facebook" className="hover:text-purple-400 transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
              </svg>
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-purple-400 transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-purple-400 transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* ── Main Navbar ───────────────────────────────────────────────────── */}
      <nav className="bg-white border-b border-gray-200" role="navigation" aria-label="Main navigation">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2" aria-label="Harden Communications Home">
            <div className="bg-purple-800 text-white font-black text-xl px-3 py-1 rounded-sm tracking-tight">
              Your
            </div>
            <span className="text-xs text-gray-500 leading-tight hidden sm:block">
              Logo
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <ul className="hidden md:flex items-center gap-1 list-none" role="menubar">
            {/* HOME */}
            <li role="none">
              <Link
                href="/"
                className={`px-4 py-2 text-sm font-semibold tracking-wide transition-colors ${
                  pathname === "/" ? "text-purple-700 border-b-2 border-purple-700" : "text-gray-700 hover:text-purple-700"
                }`}
                role="menuitem"
              >
                HOME
              </Link>
            </li>

            {/* SERVICES — Hover Dropdown */}
            <li
              role="none"
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className={`flex items-center gap-1 px-4 py-2 text-sm font-semibold tracking-wide transition-colors ${
                  pathname.startsWith("/services") ? "text-purple-700 border-b-2 border-purple-700" : "text-gray-700 hover:text-purple-700"
                }`}
                aria-haspopup="true"
                aria-expanded={servicesOpen}
                role="menuitem"
              >
                SERVICES
                <svg
                  className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown Menu */}
              <ul
                className={`absolute top-full left-0 w-52 bg-white shadow-xl border border-gray-100 rounded-b-lg overflow-hidden services-dropdown ${
                  servicesOpen ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-2 invisible"
                }`}
                role="menu"
                aria-label="Services submenu"
              >
                {serviceLinks.map((link) => (
                  <li key={link.href} role="none">
                    <Link
                      href={link.href}
                      className="block px-5 py-3 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-700 border-l-2 border-transparent hover:border-purple-600 transition-all font-medium"
                      role="menuitem"
                      onClick={() => setServicesOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>

            {/* ABOUT US */}
            <li role="none">
              <Link
                href="/about"
                className={`px-4 py-2 text-sm font-semibold tracking-wide transition-colors ${
                  pathname === "/about" ? "text-purple-700 border-b-2 border-purple-700" : "text-gray-700 hover:text-purple-700"
                }`}
                role="menuitem"
              >
                ABOUT US
              </Link>
            </li>
          </ul>

          {/* Search + CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/contact"
              className="bg-purple-700 hover:bg-purple-800 text-white text-sm font-bold px-5 py-2 rounded-full flex items-center gap-1.5 transition-colors"
            >
              CONTACT US
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-gray-700"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle mobile menu"
            aria-expanded={mobileOpen}
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* ── Mobile Menu ───────────────────────────────────────────────── */}
        {mobileOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 px-4 pb-4">
            <Link href="/" className="block py-2 text-sm font-semibold text-gray-700 hover:text-purple-700" onClick={() => setMobileOpen(false)}>HOME</Link>
            <div>
              <p className="py-2 text-sm font-semibold text-gray-700">SERVICES</p>
              {serviceLinks.map((link) => (
                <Link key={link.href} href={link.href} className="block py-1.5 pl-4 text-sm text-gray-600 hover:text-purple-700" onClick={() => setMobileOpen(false)}>
                  {link.label}
                </Link>
              ))}
            </div>
            <Link href="/about" className="block py-2 text-sm font-semibold text-gray-700 hover:text-purple-700" onClick={() => setMobileOpen(false)}>ABOUT US</Link>
            <Link href="/blog" className="block py-2 text-sm font-semibold text-gray-700 hover:text-purple-700" onClick={() => setMobileOpen(false)}>Blog</Link>
            <Link href="/contact" className="mt-3 block bg-purple-700 text-white text-center py-2 rounded-full text-sm font-bold" onClick={() => setMobileOpen(false)}>CONTACT US</Link>
          </div>
        )}
      </nav>
    </header>
  );
}
// END Navbar Component