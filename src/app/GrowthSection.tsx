"use client";

import Image from "next/image";
import { useState } from "react";

const tabs = ["Brands", "Management", "Fast Payouts", "24x7 Support"];
const navItems = ["Intro", "Why Us", "Future with us", "Connect"];

export default function GrowthSection() {
  const [activeTab, setActiveTab] = useState("Brands");
  const [activeNav, setActiveNav] = useState("Future with us");

  return (
    <section className="relative overflow-hidden bg-white py-12 sm:py-14 lg:py-16 pr-4 sm:pr-8 lg:pr-16">
      <div className="absolute inset-x-0 bottom-0 h-3/4 bg-[#F5F5FF]" />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-6 sm:gap-8 lg:gap-10 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center gap-4 sm:gap-6 lg:gap-8 border-b border-gray-200 pb-2 text-xs sm:text-sm lg:text-sm font-semibold text-gray-400">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative pb-2 transition ${
                activeTab === tab
                  ? "text-gray-900 after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-full after:bg-orange-600"
                  : "hover:text-gray-600"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="relative z-20 rounded-2xl bg-white ring-1 ring-black">
          <div className="relative h-64 sm:h-80 lg:h-130 w-full lg:w-293 overflow-hidden rounded-2xl">
            <Image
              src="/ad.png"
              alt="Brand dashboard"
              fill
            />
          </div>

          {/* Cross image bottom right */}
          <div className="absolute -bottom-10 sm:-bottom-12 lg:-bottom-15 -right-10 sm:-right-20 lg:-right-32">
            <Image src="/cross.png" alt="cross" width={32} height={32} />
            {/* Small circle on top right of cross */}
            <div className="absolute -top-4 sm:-top-5 -right-4 sm:-right-5 h-4 sm:h-5 w-4 sm:w-5 rounded-full border border-orange-400" />
          </div>

          {/* Half circle rotated northeast on bottom left */}
          <div className="absolute -bottom-8 sm:-bottom-9 lg:-bottom-10 -left-8 sm:-left-12 lg:-left-16 h-8 sm:h-9 lg:h-10 w-8 sm:w-9 lg:w-10 rounded-full border-4 border-blue-500 border-b-transparent rotate-45" />
          <div className="absolute -bottom-20 sm:-bottom-28 lg:-bottom-35 right-10 sm:right-32 lg:right-54 h-10 sm:h-11 lg:h-12" >
            <img src="/scribble.png" alt="" className="h-16 sm:h-20 lg:h-24 -rotate-8"/>
          </div>
        </div>

        <div className="relative z-10 flex flex-col items-center text-center">
          <h2 className="text-xl sm:text-2xl lg:text-2xl font-bold text-gray-900">
            Visualize your <span className="text-red-500">Business Growth</span>
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-gray-500">
            Track progress, uncover opportunities, and see your success in
            action.
          </p>
          <button className="mt-3 sm:mt-4 rounded-full bg-gradient-to-r from-orange-400 to-red-500 px-4 sm:px-6 py-2 text-xs sm:text-sm font-semibold text-white shadow">
            BEGIN JOURNEY
          </button>

          <div className="relative mt-6 sm:mt-8 h-48 sm:h-64 lg:h-72 w-full max-w-4xl">
            {/* Left vertical nav */}
            <div className="absolute -left-12 sm:-left-20 lg:-left-32 top-0 hidden lg:flex flex-col items-start gap-3 sm:gap-4 text-xs sm:text-sm text-gray-400">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => setActiveNav(item)}
                  className="relative flex items-center gap-3"
                >
                  <div
                    className={`z-10 rounded-full ${
                      activeNav === item
                        ? "h-2 w-2 bg-gray-900"
                        : "h-1 w-1 bg-transparent"
                    }`}
                  />
                  <span
                    className={
                      activeNav === item
                        ? "font-semibold text-gray-900 text-xs sm:text-sm"
                        : "hover:text-gray-600 text-xs sm:text-sm"
                    }
                  >
                    {item}
                  </span>
                </button>
              ))}
              <div className="absolute left-[3px] top-0 h-full w-px bg-gray-300" />
            </div>

            <div className="absolute inset-0 opacity-30">
              <Image src="/map.png" alt="Map dots" fill className="object-contain" />
            </div>
            <div className="absolute left-1/3 top-16 flex h-3 w-3 items-center justify-center rounded-full bg-red-200">
              <div className="h-1 w-1 rounded-full bg-red-500" />
            </div>
            <div className="absolute left-1/2 top-24 flex h-3 w-3 items-center justify-center rounded-full bg-red-200">
              <div className="h-1 w-1 rounded-full bg-red-500" />
            </div>
            <div className="absolute left-2/3 top-28 flex h-3 w-3 items-center justify-center rounded-full bg-red-200">
              <div className="h-1 w-1 rounded-full bg-red-500" />
            </div>
            <div className="absolute left-1/4 top-40 flex h-3 w-3 items-center justify-center rounded-full bg-red-200">
              <div className="h-1 w-1 rounded-full bg-red-500" />
            </div>
            <div className="absolute right-1/4 top-44 flex h-3 w-3 items-center justify-center rounded-full bg-red-200">
              <div className="h-1 w-1 rounded-full bg-red-500" />
            </div>
            <div className="absolute right-6 sm:right-16 lg:right-35.5 top-36 sm:top-40 lg:top-46 h-28 sm:h-36 lg:h-48 w-28 sm:w-32 lg:w-44 ">
                <img src="/point.png" alt="" />
            </div>
          </div>
        </div>

        <div className="absolute left-6 sm:left-10 lg:left-12 top-32 sm:top-40 lg:top-48 h-7 sm:h-9 lg:h-10 w-7 sm:w-9 lg:w-10 rounded-full border-2 border-blue-400 border-l-transparent border-t-transparent" />
        <div className="absolute right-6 sm:right-12 lg:right-20 top-40 sm:top-52 lg:top-60 h-5 sm:h-6 w-5 sm:w-6 rounded-full border-2 border-orange-400 border-l-transparent border-t-transparent" />
      </div>
    </section>
  );
}
