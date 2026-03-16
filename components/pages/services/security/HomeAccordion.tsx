"use client";
import { useState } from "react";
import SecurityCamera from "./accordion-components/BestSecurityCamera";
// Define a type for your service items
interface ServiceItem {
  id: string;
  title: string;
  content: React.ReactNode;
}

const servicesInfo: ServiceItem[] = [
  { id: "property-protection", title: "Protect Your Property", content: "One of the biggest reasons to install home security cameras is to protect the people and property you value most. A professional home surveillance system helps safeguard your family, deter burglars, prevent break-ins, and keep your valuables secure with 24/7 video monitoring and real-time alerts."},
  { id: "hazard-awareness", title: "Fire & Hazard Awareness", content: "While home security cameras are commonly known for preventing burglaries, many homeowners don’t realize these systems can also help detect early signs of fire, smoke, and household hazards. Modern surveillance cameras provide real-time monitoring that helps identify threats quickly, enhancing overall home safety and protection." },
  { id: "insurance-premiums", title: "Lower Homeowner's Insurance Premiums", content: "Homeowners insurance is essential for anyone who owns a home, but the cost can vary widely depending on factors such as your coverage level, location, insurance provider, payment plan, and the type of home you live in. Installing a reliable home security camera system can often help lower insurance premiums by reducing risk and improving overall property protection." },
  { id: "remote-monitoring", title: "Remotely Monitor Your Home", content: "When you travel, it’s natural to worry about the safety of your home—but today’s smart security camera systems make it easy to protect your property from anywhere in the world. Remote monitoring allows you to check in on your home in real time, receive instant motion alerts, and verify that everything is secure while you’re away. With professionally installed home security cameras, you can spot unusual activity, deter potential intruders, and ensure packages, doors, windows, and entryways remain protected. Whether you’re on vacation for a few days or traveling abroad for weeks, a reliable surveillance system provides peace of mind by keeping your home under constant watch and giving you full control right from your smartphone." },
  { id: "monitoring", title: "24/7 Monitoring", content: "With professionally installed home security cameras in Denver, you can monitor your property around the clock with true 24/7 surveillance. Modern home security systems allow you to view live video, check recorded footage, and receive instant mobile alerts anytime motion is detected—no matter where you are. This constant visibility helps deter intruders, protect your family, and give you complete peace of mind knowing your home is always being watched and secured." },
  { id: "peace", title: "Peace of Mind", content: "Ultimately, the biggest reason to invest in a home security camera system is the peace of mind it provides. With reliable, high-quality surveillance in place, you can feel confident that your family, your home, and your valuable assets are protected—whether you’re relaxing at home or hundreds of miles away. A modern home security camera system offers 24/7 monitoring, real-time alerts, and crystal-clear video footage, ensuring you always know what’s happening on your property. This level of protection helps prevent break-ins, reduces risk, and gives homeowners the reassurance they need to feel safe and secure every day." },
];

export default function Accordion() {
  // Explicitly type state as an array of strings (IDs)
  const [isOpen, setIsOpen] = useState<string[]>([]);

  function clickHandler(item: ServiceItem, e: React.MouseEvent<HTMLElement>) {
    e.preventDefault();
    if (isOpen.includes(item.id)) {
      setIsOpen(isOpen.filter(id => id !== item.id));
    } else {
      setIsOpen([...isOpen, item.id]);
    }
  }

  return (
    <section
      className="max-w-7xl bg-white mx-auto px-6 pb-14"
      aria-label="Considering Security for your business?"
    >
      <h2 className="text-3xl font-bold text-gray-900 mb-6 uppercase">
        Considering Security for your business?
      </h2>

      <div className="border border-gray-200 rounded-xl overflow-hidden divide-y divide-gray-200">
        {servicesInfo.map((item) => (
          <details
            onClick={(e) => clickHandler(item, e)}
            key={item.id}
            open={isOpen.includes(item.id)}
            className="group"
          >
            <summary className="flex items-center justify-between px-6 py-4 cursor-pointer select-none hover:bg-gray-50 transition-colors">
              <span className="font-semibold text-md text-primary flex items-center uppercase tracking-wide gap-2">
                <span className="text-purple-600 font-bold">
                  {isOpen.includes(item.id) ? "-" : "+"}
                </span>
                {item.title}
              </span>
            </summary>
            {item.content && (
              <div className="px-6 pb-8 pt-2 text-md text-gray-700 bg-white">{item.content}</div>
            )}
          </details>
        ))}
      </div>
    </section>
  );
}