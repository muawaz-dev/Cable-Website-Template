"use client";
import AvayaIP from "./AvayaIP";
import { useState } from "react";

// Define a type for your service items
interface ServiceItem {
  id: string;
  title: string;
  content: React.ReactNode;
}

const servicesInfo: ServiceItem[] = [
  { id: "avaya-ip", title: "Avaya IP Office Systems", content: <AvayaIP /> },
  { id: "cabling", title: "Cabling Services", content: "null" },
  { id: "security", title: "Security Services", content: "null" },
  { id: "hikvision", title: "Hikvision CCTV Installation Partner", content: "null" },
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
      aria-label="About Our Services"
    >
      <h2 className="text-3xl font-bold text-gray-900 mb-6 uppercase">
        ABOUT OUR SERVICES
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
              <span className="font-semibold text-md text-gray-800 flex items-center uppercase tracking-wide gap-2">
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