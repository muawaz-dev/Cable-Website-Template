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
    body: "Avaya IP Office makes it simple to connect multiple offices, remote teams, and satellite locations—all on one unified communication system. With support for up to 16 connected sites, your entire organization can collaborate as if they’re under one roof. Share resources, transfer calls seamlessly, standardize voicemail and messaging, and maintain consistent communication across every branch. Whether you’re expanding, merging, or managing distributed teams, Avaya IP Office provides the reliability and flexibility your business needs to stay connected from anywhere."
  },
  {
    id: "conference",
    title: "HOLD UP TO TWO 64-PARTY CONFERENCE CALLS",
    body: "Avaya IP Office gives your team the power to host large, high-quality conference calls without relying on third-party services. With support for two simultaneous 64-participant conferences, you can bring together departments, clients, partners, and remote staff in an instant. This built-in capability delivers crystal-clear audio, reliable call stability, and seamless collaboration—perfect for training sessions, company-wide updates, or large project meetings. Keep your communication efficient and cohesive with enterprise-level conferencing features designed for growing organizations."
  },
  {
    id: "telephones",
    title: "Maintain Up to 360 Telephones",
    body: "Avaya IP Office is built to support growing businesses, offering the capacity to manage and maintain up to 360 telephones on a single system. Whether you operate a busy office, a multi-department organization, or a high-call-volume environment, this platform ensures every user stays connected with reliable performance and consistent call quality. As your team expands, Avaya IP Office scales effortlessly—allowing you to add new phones, extensions, or departments without costly infrastructure changes. It’s a flexible, future-ready solution designed to grow with your business."
  },
  {
    id: "scale",
    title: "Scale up to 1000 Users through 1 site",
    body: "Avaya IP Office delivers exceptional scalability, allowing your organization to support up to 1,000 users from a single location. This enterprise-grade capacity ensures your communication system grows right alongside your business—without the need for expensive hardware replacements or complicated multi-system setups. As your team expands, Avaya IP Office keeps everything unified, efficient, and easy to manage. Whether you’re adding new departments, onboarding seasonal staff, or preparing for long-term growth, this powerful platform gives you the flexibility to scale confidently and cost-effectively."
  },
  {
    id: "references",
    title: "Easy To Program Preferences",
    body: "Avaya IP Office is designed with simplicity in mind, making it easy for your team to customize system settings and user preferences without relying on complex programming or outside support. From call forwarding and voicemail options to ring groups, extensions, and interface layouts, everything can be adjusted quickly through an intuitive management dashboard. This flexibility empowers your business to tailor the system to your workflow, streamline daily operations, and ensure every user has the features they need—exactly the way they need them."
  },
  {
    id: "collaboration",
    title: "Collaborate in Real time via mobile or desktop",
    body: "Avaya IP Office keeps your team connected no matter where they are, offering real-time collaboration across both mobile devices and desktop computers. Employees can join calls, share messages, access voicemail, and manage communication tools from anywhere—whether they’re in the office, working remotely, or on the go. This seamless mobility ensures faster response times, smoother teamwork, and uninterrupted productivity. With unified communication features built directly into the platform, your business stays agile, responsive, and fully connected at all times."
  },
  {
    id: "track-calls",
    title: "Track, record, & report calls on a large scale",
    body: "Avaya IP Office gives your business powerful tools to manage call activity with precision and insight. Easily track incoming and outgoing calls, record conversations for training or compliance, and generate detailed reports that highlight performance trends across your entire organization. Whether you manage a high-volume call environment or simply want better visibility into daily communication, Avaya IP Office delivers enterprise-level analytics that help improve service, strengthen accountability, and enhance customer experience. It’s a smart, scalable solution for businesses that rely on clear, measurable communication data."
  },
 
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
    <section className="max-w-7xl bg-white mx-auto px-6 py-14" aria-label="Avaya IP Office Features">
      <h2 className="text-3xl uppercase font-bold text-gray-900 mb-6">Features of the AVAYA IP OFFICE</h2>
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
              <span className="font-bold text-primary text-md uppercase tracking-wide">
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
    </section >
  );
}