"use client"

import { useState } from "react";
const benefits = [
    {
        id: "bandwidth",
        title: "High Bandwidth + Faster Performance",

        body: "Structured cabling provides high bandwidth capacity, enabling faster data transfer, smoother communication, and improved productivity. Businesses benefit from a stable, high-speed network that enhances daily operations and employee efficiency.",
    },
    { id: "scalable", title: "Scalable and Future-Proof Infrastructure", body: "In a rapidly evolving business environment, scalability is crucial. Structured cabling allows your IT infrastructure to expand easily—supporting new devices, higher data loads, and advanced applications without costly rewiring." },
    { id: "management", title: "Simplified Network Management", body: "With multiple devices, systems, and communication tools running at once, having everything operate on a single, organized cabling system dramatically reduces complexity. This streamlined setup makes upgrades and changes easier and ensures a cleaner, more efficient workspace." },
    { id: "resolution", title: "Faster Problem Resolution", body: "When issues occur, troubleshooting is far simpler. Instead of digging through tangled, unorganized wiring, structured cabling isolates problems quickly—saving your business significant time, labor, and money." },
    { id: "reliability", title: "Increased Reliability + Reduced Downtime", body: "Unmanaged or chaotic cabling increases the risk of human error, disconnections, and costly outages. A professionally installed structured cabling system minimizes these risks, providing stable uptime, consistent performance, and uninterrupted business operations." },
    { id: "flow", title: "Supports Continuous Information Flow", body: "A flexible and robust cabling infrastructure ensures seamless communication across your entire organization, even during periods of high demand. This reliability keeps your business running smoothly and supports long-term growth." },
];



export default function Accordion() {
    const [isOpen, setIsOpen] = useState([])
    function handleClick(benefit, e) {
        e.preventDefault()
        if (isOpen.includes(benefit.id)) {
            setIsOpen(isOpen.filter(id => id !== benefit.id))
        } else {
            setIsOpen([...isOpen, benefit.id])
        }
    }
    return (
        <div className="border border-gray-200 rounded-xl overflow-hidden divide-y divide-gray-200">
            {benefits.map((benefit) => (
                <details key={benefit.id} open={isOpen.includes(benefit.id)} className="group">
                    <summary onClick={(e) => handleClick(benefit, e)} className="flex items-center gap-3 px-6 py-4 cursor-pointer select-none hover:bg-gray-50 transition-colors">
                        <span className="text-purple-600 font-bold text-lg leading-none">
                            {isOpen.includes(benefit.id) ? "−" : "+"}
                        </span>
                        <span className="font-bold text-gray-800 text-md uppercase tracking-wide">{benefit.title}</span>
                    </summary>
                    {benefit.body && (
                        <div className="px-6 pb-5 pt-1 text-gray-600 text-md leading-relaxed bg-white">
                            {benefit.body}
                        </div>
                    )}
                </details>
            ))}
        </div>
    )
}