"use client";
import { useState } from "react";

// Define a type for your features
interface Feature {
  id: string;
  title: string;
  body: string;
}

const avayaFeatures: Feature[] = [
  {
    id: "locations",
    title: "LINK UP TO 16 LOCATIONS",
    body: "Avaya IP Office makes it simple to connect multiple offices..."
  },
  {
    id: "conference",
    title: "HOLD UP TO TWO 64-PARTY CONFERENCE CALLS",
    body: "Avaya IP Office gives your team the power..."
  },
  // ...rest of your features
];

export default function Accordion() {
  // Explicitly type state as an array of strings (feature IDs)
  const [isOpen, setIsOpen] = useState<string[]>([]);

  function handleClick(feature: Feature, e: React.MouseEvent<HTMLElement>) {
    e.preventDefault();
    if (isOpen.includes(feature.id)) {
      setIsOpen(isOpen.filter(id => id !== feature.id));
    } else {
      setIsOpen([...isOpen, feature.id]);
    }
  }

  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden divide-y divide-gray-200">
      {avayaFeatures.map((feature) => (
        <details
          key={feature.id}
          open={isOpen.includes(feature.id)}
          className="group"
        >
          <summary
            onClick={(e) => handleClick(feature, e)}
            className="flex items-center gap-3 px-6 py-4 cursor-pointer select-none hover:bg-gray-50 transition-colors"
          >
            <span className="text-purple-600 font-bold text-lg leading-none">
              {isOpen.includes(feature.id) ? "−" : "+"}
            </span>
            <span className="font-bold text-gray-800 text-md uppercase tracking-wide">
              {feature.title}
            </span>
          </summary>
          {feature.body && (
            <div className="px-6 pb-5 pt-1 text-gray-600 text-md leading-relaxed bg-white">
              {feature.body}
            </div>
          )}
        </details>
      ))}
    </div>
  );
}