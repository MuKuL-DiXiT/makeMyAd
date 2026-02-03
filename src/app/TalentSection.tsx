"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronDown, ChevronUp, Search, File } from "lucide-react";

const navItems = ["Intro", "Why Us", "Future with us", "Connect"];

const accordionItems = [
    { title: "Seller Resources", content: "" },
    {
        title: "Seller Benefits",
        content:
            "Related information will be here in 2 or 3 lines, that is lorem ipsum is dummy text which is use for dummy.",
    },
    { title: "Pricing/Fees", content: "" },
];

export default function TalentSection() {
    const [activeNav, setActiveNav] = useState("Future with us");
    const [openAccordion, setOpenAccordion] = useState("Seller Benefits");

    return (
        <section className="relative overflow-hidden bg-white py-20">
            
            {/* Top left half circle */}
            <div className="absolute left-20 top-8 h-12 w-12 rounded-full border-4 border-orange-400 border-r-transparent rotate-45" />

            <div className="mx-auto flex max-w-6xl gap-12 px-8">
                {/* Left side - Images */}
                <div className="relative flex-1">
                    {/* Left vertical nav */}
                    <div className="absolute -left-24 top-48 flex flex-col items-start gap-4 text-sm text-gray-400">
                        {navItems.map((item) => (
                            <button
                                key={item}
                                onClick={() => setActiveNav(item)}
                                className="relative flex items-center gap-3"
                            >
                                <div
                                    className={`z-10 rounded-full ${activeNav === item
                                            ? "h-2 w-2 bg-gray-900"
                                            : "h-1 w-1 bg-transparent"
                                        }`}
                                />
                                <span
                                    className={
                                        activeNav === item
                                            ? "font-semibold text-gray-900"
                                            : "hover:text-gray-600"
                                    }
                                >
                                    {item}
                                </span>
                            </button>
                        ))}
                        <div className="absolute left-[3px] top-0 h-full w-px bg-gray-300" />
                    </div>

                    {/* Images container */}
                    <div className="flex flex-col gap-8">
                        {/* Row 1 - Single image at start */}

                        <div className="ml-16 relative">
                            <div className="relative z-10 h-44 w-54 overflow-hidden">
                                <Image
                                    src="/image1.png"
                                    alt="Business woman"
                                    fill
                                />
                            </div>
                            {/* Cyan rounded shape behind/under - bottom left */}
                            <div className="absolute -top-3 left-3 h-44 w-54 rounded-br-[60px] rounded-bl-[60px] rounded-tl-[60px] bg-indigo-300" />
                            <div className="absolute -right-16 top-8 z-20 flex items-center gap-2 rounded-lg bg-white px-4 py-2 shadow-lg">
                            </div>
                            <div className="flex justify-center top-12 z-10  rounded-2xl py-1 items-center gap-2 absolute left-40 px-3">
                                <span className="text-sm shadow-2xl shadow-black text-gray-500 bg-white rounded-md p-3">Online Selling Platform, Brand</span>
                                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-orange-500">
                                    <Search className="h-4 w-4 text-white" />
                                </div>
                            </div>
                            <div className="absolute -bottom-6 right-24 h-32 w-48">
                                <Image src="/union.png" alt="Dotted pattern" fill className="object-contain" />
                            </div>
                        </div>

                        {/* Row 2 - Two images centered */}
                        <div className="flex justify-center gap-8">
                            {/* Image 2 */}
                            <div className="relative">
                                <div className="relative z-10 h-48 w-48 overflow-hidden">
                                    <Image
                                        src="/image2.png"
                                        alt="Online selling platform"
                                        fill
                                    />
                                </div>

                                {/* Blue rounded shape behind/under - bottom left */}
                                <div className="absolute -bottom-3 -left-3 h-48 w-48 rounded-bl-[60px] bg-gray-200" />
                                {/* Search bar overlay */}


                            </div>

                            {/* Image 3 */}
                            <div className="relative">
                                <div className="relative z-10 h-48 w-48 overflow-hidden">
                                    <Image
                                        src="/image3.png"
                                        alt="Dashboard analytics"
                                        fill
                                    />
                                </div>
                                {/* Cyan rounded shape behind/under - bottom right */}
                                <div className="absolute -bottom-4 -right-4 h-48 w-48 rounded-br-[60px] bg-cyan-400" />
                                {/* Payment details card overlay */}
                                <div className="absolute bottom-8 left-20 z-20 flex items-center gap-3 rounded-xl bg-white px-4 py-3 shadow-lg">
                                    <File className="text-red-600" />
                                    <div className="w-32">
                                        <p className="text-xs text-gray-400">Payment Details...</p>
                                        <p className="font-semibold text-gray-900">Company Name</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom decorations */}
                    <div className="relative mt-16 flex items-center gap-4">
                        <div className="flex gap-1">
                            {Array.from({ length: 6 }).map((_, i) => (
                                <div key={i} className="h-8 w-1 -rotate-20 rounded-full bg-blue-400" />
                            ))}
                        </div>
                        <div className="h-5 w-5 rounded-full border absolute -top-5 left-16 border-orange-400" />
                    </div>
                </div>

                {/* Right side - Content */}
                <div className="relative flex-1 pt-12">
                    <h2 className="text-4xl font-bold text-gray-900">
                        World of talent on your
                    </h2>
                    <h2 className="text-4xl font-bold text-orange-500">One-click</h2>

                    <div className="absolute top-32 -right-24 h-8 w-8">
                        <div className="h-8 w-8 rounded-full border border-orange-500 bg-transparent" />
                        <div className="absolute -top-2 -right-2 h-8 w-8 rounded-full bg-orange-500" />
                    </div> 

                {/* Accordion */}
                <div className="mt-12 space-y-4">
                    {accordionItems.map((item) => (
                        <div key={item.title} className="border-b border-gray-200 pb-4">
                            <button
                                onClick={() =>
                                    setOpenAccordion(openAccordion === item.title ? "" : item.title)
                                }
                                className="flex w-full items-center justify-between"
                            >
                                <span
                                    className={`text-xl font-semibold ${openAccordion === item.title
                                            ? "text-gray-900"
                                            : "text-orange-500"
                                        }`}
                                >
                                    {item.title}
                                </span>
                                {openAccordion === item.title ? (
                                    <ChevronUp className="h-5 w-5 text-gray-600" />
                                ) : (
                                    <ChevronDown className="h-5 w-5 text-gray-600" />
                                )}
                            </button>
                            {openAccordion === item.title && item.content && (
                                <p className="mt-3 text-gray-500">{item.content}</p>
                            )}
                        </div>
                    ))}
                </div>

                {/* Blue X decoration */}
                <div className="absolute -bottom-8 right-0">
                    <svg
                        className="h-16 w-16 text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={4}
                        viewBox="0 0 24 24"
                    >
                        <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                </div>
            </div>
        </div>
    </section >
  );
}
