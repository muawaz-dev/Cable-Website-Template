"use client";

import { useState } from "react";

// Define a type for your benefits
interface Benefit {
  id: string;
  title: string;
  body: string;
}

const benefits: Benefit[] = [
  {
    id: "bandwidth",
    title: "High Bandwidth + Faster Performance",
    body: "Structured cabling provides high bandwidth capacity..."
  },
  {
    id: "scalable",
    title: "Scalable and Future-Proof Infrastructure",
    body: "In a rapidly evolving business environment..."
  },
  {
    id: "management",
    title: "Simplified Network Management",
    body: "With multiple devices, systems, and communication tools..."
  },
  {
    id: "resolution",
    title: "Faster Problem Resolution",
    body: "When issues occur, troubleshooting is far simpler..."
  },
  {
    id: "reliability",
    title: "Increased Reliability + Reduced Downtime",
    body: "Unmanaged or chaotic cabling increases the risk..."
  },
  {
    id: "flow",
    title: "Supports Continuous Information Flow",
    body: "A flexible and robust cabling infrastructure ensures..."
  },
];

export default function Accordion() {
  // Explicitly type state as an array of strings (benefit IDs)
  const [isOpen, setIsOpen] = useState<string[]>([]);

  function handleClick(benefit: Benefit, e:React.MouseEvent<HTMLElement>) {
    e.preventDefault();
    if (isOpen.includes(benefit.id)) {
      setIsOpen(isOpen.filter(id => id !== benefit.id));
    } else {
      setIsOpen([...isOpen, benefit.id]);
    }
  }

  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden divide-y divide-gray-200">
      {benefits.map((benefit) => (
        <details
          key={benefit.id}
          open={isOpen.includes(benefit.id)}
          className="group"
        >
          <summary
            onClick={(e) => handleClick(benefit, e)}
            className="flex items-center gap-3 px-6 py-4 cursor-pointer select-none hover:bg-gray-50 transition-colors"
          >
            <span className="text-purple-600 font-bold text-lg leading-none">
              {isOpen.includes(benefit.id) ? "−" : "+"}
            </span>
            <span className="font-bold text-gray-800 text-md uppercase tracking-wide">
              {benefit.title}
            </span>
          </summary>
          {benefit.body && (
            <div className="px-6 pb-5 pt-1 text-gray-600 text-md leading-relaxed bg-white">
              {benefit.body}
            </div>
          )}
        </details>
      ))}
    </div>
  );
}