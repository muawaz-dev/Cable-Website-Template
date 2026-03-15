import Image from "next/image";
import Link from "next/link";


const serviceCards = [
  { icon: "/home/cabling-icon.png", title: "Structured Cabling", subtitle: "CAT5E | CAT6| COAX | FIBER OPTICS", href: "/services/cable-installation" },
  { icon: "/home/voip-icon.png", title: "AVAYA IP OFFICE SALES & SUPPORT", subtitle: "Hosted Communications | IP OFFICE | PARTNER ACS | MERLIN | LEGEND/MAGIX | DEFINITY", href: "/services/avaya-ip" },
  { icon: "/home/security-icon.png", title: "HIKVISION CCTV SECURITY CAMERAS", subtitle: "CCTV | IP | HIKVISION", href: "/services/security" },
];

export default function Services() {

  return (
    <section
      className="services-section max-w-7xl mx-auto px-6 -mt-16 relative z-10 bg-white"
      aria-label="Our Services"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {serviceCards.map((card) => (
          <Link
            key={card.href}
            href={card.href}
            className="service-card bg-white rounded-xl shadow-lg p-7 flex flex-col items-center text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-200 group"
            aria-label={`Learn about ${card.title}`}
          >
            <div className="relative w-22 h-22 rounded-full bg-brand-gradient flex items-center justify-center mb-5 group-hover:bg-purple-800 transition-colors">
              <Image className="object-contain" src={card.icon} alt={`${card.title} Icon`} fill />
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-3 uppercase leading-tight">
              {card.title}
            </h2>
            <div className="w-10 h-0.5 bg-purple-600 mb-3" aria-hidden="true" />
            <p className="text-sm text-gray-500 uppercase tracking-wide">{card.subtitle}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}