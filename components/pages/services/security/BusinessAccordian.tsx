"use client";
import { useState } from "react";
import SecurityCamera from "./accordion-components/BestSecurityCamera";
import SurveillanceSolutions from "./accordion-components/SurveillanceSolutions";
// Define a type for your service items
interface ServiceItem {
  id: string;
  title: string;
  content: React.ReactNode;
}

const servicesInfo: ServiceItem[] = [
  { id: "security-camera", title: "What is the best security camera option for my business?", content: <SecurityCamera /> },
  { id: "surveillance", title: "Strengthen your business security with advanced surveillance solutions.", content: <SurveillanceSolutions /> },
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
              <div className="px-6 pb-8 pt-2 bg-white">{item.content}</div>
            )}
          </details>
        ))}
      </div>
    </section>
  );
}