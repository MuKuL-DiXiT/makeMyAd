"use client";

import { useState } from "react";
import { Minus, Plus, Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Youtube } from "lucide-react";

const navItems = ["Intro", "Why Us", "Future with us", "Connect"];

const faqItems = [
  {
    question: "How does the free trial work?",
    answer:
      "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    question: "How do you find different criteria in your process?",
    answer: "",
  },
  {
    question: "How does the free trial work?",
    answer: "",
  },
  {
    question: "How do you find different criteria in your process?",
    answer: "",
  },
];

const registeredTypes = [
  { label: "Public Ltd" },
  { label: "Private Ltd" },
  { label: "LLP" },
  { label: "HUF" },
  { label: "Partnership" },
  { label: "Proprietorship" },
  { label: "LLP" },
  { label: "HUF" },
];

export default function JoinSection() {
  const [activeNav, setActiveNav] = useState("Connect");
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="relative bg-white">
      {/* Top blue section with background image */}
      <div className="relative">
        <div
          className="absolute w-full h-[820px] sm:h-[980px] lg:h-[1112px] top-0 left-0 bg-[url('/bg-1.png')] bg-cover bg-center"
        />

        {/* Join Us Section */}
        <section className="relative overflow-hidden py-12 sm:py-16 lg:py-20 px-4 sm:px-8 lg:px-24">
          {/* Top right half circle decoration */}
          <div className="absolute right-20 sm:right-40 lg:right-72 top-2 sm:top-3 lg:top-4 h-7 sm:h-9 lg:h-10 w-7 sm:w-9 lg:w-10 rounded-full border-4 border-orange-400  border-r-transparent rotate-45" />

          <div className="mx-auto flex max-w-6xl gap-8 sm:gap-12 lg:gap-16 px-0 sm:px-4 lg:px-8 flex-col lg:flex-row">
            {/* Left side */}
            <div className="relative px-0 sm:px-10 lg:px-24 flex-1 order-2 lg:order-1">
              {/* Left vertical nav */}
              <div className="absolute -left-6 sm:-left-12 lg:-left-20 top-6 sm:top-10 lg:top-12 hidden lg:flex flex-col items-start gap-2 sm:gap-3 text-xs text-gray-400">
                {navItems.map((item) => (
                  <button
                    key={item}
                    onClick={() => setActiveNav(item)}
                    className="relative flex items-center gap-3"
                  >
                    <div
                      className={`z-10 rounded-full ${
                        activeNav === item
                          ? "h-2 w-2 bg-white"
                          : "h-1 w-1 bg-transparent"
                      }`}
                    />
                    <span
                      className={
                        activeNav === item
                          ? "font-semibold text-white text-xs sm:text-sm"
                          : "hover:text-gray-300 text-xs sm:text-sm"
                      }
                    >
                      {item}
                    </span>
                  </button>
                ))}
                <div className="absolute left-[3px] top-0 h-full w-px bg-gray-600" />
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
                Join Us in a
                <br />
                Few Simple
                <br />
                Steps
              </h2>
              <p className="mt-4 hidden sm:flex sm:mt-5 lg:mt-6 text-base sm:text-lg lg:text-xl text-gray-300 max-w-xs">
                Join us quickly with our simple, step-by-step guide. Just a few
                easy actions and you'll be ready to start connecting with top
                advertisers and growing your revenue.
              </p>

              {/* Bottom decorations */}
              <div className="mt-8 sm:mt-10 lg:mt-12 flex items-center justify-between gap-4">
                <div className="h-5 sm:h-6 w-5 sm:w-6 ml-24 sm:ml-36 lg:ml-48 rounded-full border-2 border-orange-600" />
                <div className="flex absolute left-48 sm:left-72 lg:left-90 bottom-6 sm:bottom-7 lg:bottom-8 gap-1">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <div key={i} className="h-6 sm:h-8 lg:h-9 w-1 sm:w-1.5 -rotate-20 bg-blue-400" />
                  ))}
                </div>
              </div>
            </div>

            {/* Right side - Form Card (WHITE) */}
            <div className="relative lg:absolute lg:top-24 lg:right-0 flex-1 order-1 lg:order-2">
              <div className="rounded-l-2xl bg-white/20 p-4 sm:p-5 lg:p-6 shadow-xl">
                {/* Steps header */}
                <div className="ml-0 sm:ml-6 lg:ml-12 flex w-full sm:w-5/6 items-center justify-between text-xs sm:text-sm mb-2">
                  <span className="text-white font-medium text-xs sm:text-sm">
                    About the Business
                  </span>
                  <span className="text-gray-400 text-xs sm:text-sm">Contact Information</span>
                  <span className="text-gray-400 text-xs sm:text-sm hidden sm:inline">Other Details</span>
                </div>

                {/* Progress bar with dots between labels */}
                <div className="ml-0 sm:ml-6 lg:ml-12 relative w-full sm:w-5/6 flex items-center">
                  {/* Main filled circle with number */}
                  <div className="flex h-8 sm:h-9 lg:h-10 w-8 sm:w-9 lg:w-10 border-2 border-gray-400/50 items-center justify-center rounded-full bg-white text-black text-xs sm:text-sm z-10">
                    1
                  </div>
                  {/* Progress line */}
                  <div className="h-1.5 sm:h-2 flex-1 bg-gray-400/50 -ml-1 relative">
                    <div className="h-full w-24 bg-gray-400/50" />
                    {/* Dot between "About the Business" and "Contact Information" */}
                    <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 h-2 sm:h-3 w-2 sm:w-3 rounded-full bg-gray-100" />
                    {/* Dot before "Other Details" */}
                    <div className="absolute top-1/2 right-[15%] -translate-y-1/2 h-2 sm:h-3 w-2 sm:w-3 rounded-full bg-gray-100" />
                  </div>
                </div>

                {/* Form content */}
                <div className="ml-0 sm:ml-6 lg:ml-12 mt-4 sm:mt-5 lg:mt-6">
                  <h3 className="text-white font-semibold text-sm sm:text-base">
                    What's your Business Type?
                  </h3>

                  <div className="mt-3 sm:mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs text-gray-500 mb-2">
                        Individual Business
                      </p>
                      <button className="rounded-md bg-indigo-300 px-3 sm:px-4 py-2 text-xs sm:text-sm font-semibold text-blue-950">
                        Individual
                      </button>
                    </div>

                    <div >
                      <p className="text-xs text-white mb-2">
                        Registered Business
                      </p>
                      <div className="flex flex-wrap gap-1 sm:gap-2">
                        {registeredTypes.slice(0, 4).map((type, i) => (
                          <button
                            key={i}
                            className="rounded border border-gray-300 px-2 sm:px-3 py-1 text-xs text-white hover:border-indigo-600 hover:text-indigo-600"
                          >
                            {type.label}
                          </button>
                        ))}
                      </div>
                      <div className="mt-2 flex flex-wrap gap-1 sm:gap-2">
                        {registeredTypes.slice(4, 8).map((type, i) => (
                          <button
                            key={i}
                            className="rounded border border-gray-300 px-2 sm:px-3 py-1 text-xs text-white hover:border-indigo-600 hover:text-indigo-600"
                          >
                            {type.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <button className="mt-4 sm:mt-5 lg:mt-6 rounded-full bg-gradient-to-r from-orange-400 to-red-500 px-4 sm:px-5 lg:px-6 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold text-white">
                    WANT'S TO JOIN WITH US
                  </button>
                </div>
              </div>

              {/* X decoration */}
              <div className="absolute right-12 sm:right-16 lg:right-24 -bottom-6 sm:-bottom-7 lg:-bottom-8" >
            <img src="/cross.png" alt="" className="h-8 sm:h-10 lg:h-12" />
          </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section - overlapping cards on white curve */}
        <section className="relative overflow-hidden pt-8 sm:pt-10 lg:pt-12 pb-10 sm:pb-12 lg:pb-16">
          {/* Orange circle decoration */}
          

          <div className="mx-auto flex max-w-6xl gap-6 sm:gap-10 lg:gap-12 flex-col lg:flex-row">
            {/* Left side - Testimonial cards */}
            <div className="relative flex-1">
              {/* Left vertical nav */}
              <div className="absolute -left-10 sm:-left-20 lg:-left-28 bottom-8 sm:bottom-10 lg:bottom-12 hidden lg:flex flex-col items-start gap-2 sm:gap-3 text-xs text-gray-400">
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

              <div className="flex gap-4 sm:gap-6 flex-col sm:flex-row overflow-x-auto pb-2">
                {/* Card 1 */}
                <div className="rounded-xl border border-gray-200 bg-white p-4 sm:p-5 shadow-sm min-w-[260px] sm:max-w-xs">
                  <p className="text-red-500 font-semibold text-xs sm:text-sm">Awesome...</p>
                  <div className="mt-1 mb-8 sm:mb-12 flex gap-0.5 text-yellow-400 text-xs sm:text-sm">
                    ★ ★ ★ ★ ★
                  </div>
                  <p className="mt-2 sm:mt-3 border-b pb-6 sm:pb-10 border-gray-200 text-xs sm:text-sm text-gray-500">
                    "Related explanation will be here in 5 to 6 or max 7 lines.
                    Lorem ipsum is dummy text which is use for dummy websites.
                  </p>
                  <div className="mt-3 sm:mt-4 flex items-center gap-2 sm:gap-3">
                    <div className="h-8 sm:h-10 w-8 sm:w-10 rounded bg-gray-300" />
                    <div>
                      <p className="font-semibold text-gray-900 text-xs sm:text-sm">
                        Company Name
                      </p>
                      <p className="text-xs text-gray-400">Australia</p>
                    </div>
                    <span className="ml-auto text-2xl sm:text-4xl text-gray-200 font-serif">
                      "
                    </span>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="mt-6 sm:mt-12 rounded-xl border border-gray-200 bg-white p-4 sm:p-5 shadow-sm min-w-[260px] sm:max-w-xs">
                  <p className="text-orange-500 font-semibold text-xs sm:text-sm">
                    Great Opportunity...
                  </p>
                  <div className="mt-1 mb-8 sm:mb-12 flex gap-0.5 text-yellow-400 text-xs sm:text-sm">
                    ★ ★ ★ ★ ★
                  </div>
                  <p className="mt-2 sm:mt-3 border-b pb-6 sm:pb-10 border-gray-200 text-xs sm:text-sm text-gray-500">
                    "Related explanation will be here in 5 to 6 or max 7 lines.
                    Lorem ipsum is dummy text which is use for dummy websites.
                  </p>
                  <div className="mt-3 sm:mt-4 flex items-center gap-2 sm:gap-3">
                    <div className="h-8 sm:h-10 w-8 sm:w-10 rounded bg-gray-300" />
                    <div>
                      <p className="font-semibold text-gray-900 text-xs sm:text-sm">
                        Company Name
                      </p>
                      <p className="text-xs text-gray-400">Australia</p>
                    </div>
                    <span className="ml-auto text-2xl sm:text-4xl text-gray-200 font-serif">
                      "
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Content */}
            <div className="flex-1 pt-6 sm:pt-10 lg:pt-16 mt-4 sm:mt-12 lg:mt-24">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                Clients loves
                <br />
                <span className="text-red-600 text-2xl sm:text-3xl lg:text-4xl">MarkmyAd</span>
              </h2>
              <p className="mt-3 sm:mt-4 w-full sm:w-48 text-xs sm:text-sm lg:text-base text-gray-500 max-w-sm">
                Lorem ipsum is dummy text which is use for dummy website related
                explanation will be in 3 to 4 lines
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="relative overflow-hidden py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">

          <div className="mx-auto max-w-3xl px-0 sm:px-6 lg:px-8">
            {/* Heading */}
            <div className="mb-8 sm:mb-10 lg:mb-12 text-center relative">
              {/* Cross image top left */}
              <img 
                src="/cross.png" 
                alt="" 
                className="absolute -top-10 sm:-top-12 lg:-top-16 left-4 sm:left-8 lg:left-10 h-7 sm:h-9 lg:h-10 w-7 sm:w-9 lg:w-10"
              />
              {/* Bars decoration top right */}
              <div className="absolute -top-6 sm:-top-7 lg:-top-8 right-2 sm:right-4 lg:right-0 flex gap-0.5">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="h-4 sm:h-5 w-0.5 sm:w-1 -rotate-20 bg-blue-400" />
                ))}
              </div>
              {/* Bars decoration bottom left */}
              <div className="absolute -bottom-8 sm:-bottom-10 lg:-bottom-12 left-2 sm:left-4 lg:left-0 flex gap-0.5">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="h-4 sm:h-5 w-0.5 sm:w-1 -rotate-20 bg-blue-400" />
                ))}
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                Frequently Ask <span className="text-red-600">Question?</span>
              </h2>
            </div>

            {/* Left nav */}
            <div className="absolute left-2 sm:left-6 lg:left-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-start gap-2 sm:gap-3 text-xs text-gray-400">
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

            {/* FAQ Accordion */}
            <div className="space-y-3 sm:space-y-4 relative">
              <img 
                src="/cross2.png" 
                alt="" 
                className="absolute top-24 sm:top-30 lg:top-35 -left-12 sm:-left-18 lg:-left-24 h-7 sm:h-9 lg:h-10 w-7 sm:w-9 lg:w-10"
              />
               <div className="absolute top-32 sm:top-40 lg:top-48 -left-6 sm:-left-8 lg:-left-12 h-3 sm:h-4 w-3 sm:w-4">
                        <div className="h-3 sm:h-4 w-3 sm:w-4 rounded-full border border-orange-500 bg-transparent" />
                        <div className="absolute -top-1 -right-1 h-3 sm:h-4 w-3 sm:w-4 rounded-full bg-orange-500" />
                </div> 
              {faqItems.map((item, index) => (
                <div key={index} className="border-b border-gray-200 pb-3 sm:pb-4">
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                    className="flex w-full items-center justify-between gap-4"
                  >
                    <span className="text-base sm:text-lg font-semibold text-gray-900 text-left">
                      {item.question}
                    </span>
                    {openFaq === index ? (
                      <div className="flex h-5 sm:h-6 w-5 sm:w-6 items-center justify-center rounded-full bg-orange-500">
                        <Minus className="h-3 sm:h-4 w-3 sm:w-4 text-white" />
                      </div>
                    ) : (
                      <Plus className="h-4 sm:h-5 w-4 sm:w-5 text-gray-400" />
                    )}
                  </button>
                  {openFaq === index && item.answer && (
                    <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-gray-500">{item.answer}</p>
                  )}
                </div>
              ))}
            </div>

            
          </div>
        </section>
      </div>

      {/* Bottom section with second background image */}
      <div className="relative">
        <div
          className="absolute w-full h-full top-0 left-0 bg-[url('/bg-2.png')] bg-cover bg-center"
        />

        {/* Newsletter Section */}
        <section className="relative overflow-hidden py-12">
          <div className="mx-auto flex max-w-5xl bg-white shadow-2xl  items-center justify-between gap-8 px-8 py-12 rounded-4xl">
            <div>
              <p className="text-black text-2xl">Ready to discuss your product details</p>
              <p className="text-2xl font-bold text-red-600">
                Subscribe to Our Newsletter.
              </p>
            </div>

            <div className="flex items-center">
              <input
                type="email"
                placeholder="Your mail address"
                className="rounded-l-lg bg-white px-4 py-3 text-sm text-gray-700 outline-none w-64"
              />
              <button className="rounded-r-lg bg-orange-500 px-6 py-3 text-sm font-semibold text-white">
                SUBSCRIBE
              </button>
            </div>
          </div>

          {/* Dots decoration */}
          <div className="absolute right-24 top-4 grid grid-cols-8 gap-1 opacity-30">
            {Array.from({ length: 32 }).map((_, i) => (
              <div key={i} className="h-1 w-1 rounded-full bg-white" />
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="relative py-12">
          <div className="mx-auto max-w-6xl px-6 sm:px-8">
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
              {/* Logo & Contact */}
              <div className="flex-shrink-0 relative">

                <div className="absolute -top-4 sm:-right-8 right-12 h-8 w-8 rounded-full border-4 border-orange-400 border-b-transparent  -rotate-45" />
                
                <div className="flex items-center gap-2">
                  <div className="rounded bg-red-600 px-1 py-2 text-sm font-bold text-white">
                    Mark
                  </div>
                  <span className="text-lg font-bold text-white">My Ad</span>
                </div>



                <div className="mt-6 space-y-2 text-sm text-gray-400">
                  <p className="flex items-center gap-2">
                    <Phone className="h-4 w-4" /> +91 7700000766
                  </p>
                  <p className="flex items-center gap-2">
                    <Mail className="h-4 w-4" /> Akshaygaur622@gmail.com
                  </p>
                  <p className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" /> 589, Lorem Ipsum is simply Region, City
                    521468
                  </p>
                </div>
              </div>

              {/* Links columns */}
              <div className="grid flex-1 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-3 text-sm">
                <div>
                  <h4 className="font-semibold text-white mb-4">
                    Sell with MarkMyAd
                  </h4>
                  <ul className="space-y-2 text-gray-400">
                    <li>Sell online</li>
                    <li>How to sell on MarkMyAd</li>
                    <li>How much does it cost?</li>
                    <li>Product ideas</li>
                    <li>What is dropshipping</li>
                    <li>Sell books online</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-white mb-4">
                    Selling Programs
                  </h4>
                  <ul className="space-y-2 text-gray-400">
                    <li>Fulfillment by MarkMyAd</li>
                    <li>MarkMyAd Advertising</li>
                    <li>Global selling</li>
                    <li>MarkMyAd Business</li>
                    <li>Black Business Accelerator</li>
                    <li>More programs</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-white mb-4">
                    MarkMyAd for Brands
                  </h4>
                  <ul className="space-y-2 text-gray-400">
                    <li>Online store builder</li>
                    <li>MarkMyAd Brand Registry</li>
                    <li>Brand management</li>
                    <li>Product reviews</li>
                    <li>Customer Behavior Analytics</li>
                    <li>A+ Content</li>
                  </ul>
                </div>

                <div className="relative">
                  <img 
                    src="/cross2.png" 
                    alt="" 
                    className="absolute -top-12 right-24 h-10 w-10"
                  />
                  <img 
                    src="/union.png" 
                    alt="" 
                    className="absolute -top-24 right-36 h-10 w-32"
                  />
                  <h4 className="font-semibold text-white mb-4">Resources</h4>
                  <ul className="space-y-2 text-gray-400">
                    <li>Privacy Policy</li>
                    <li>Seller University</li>
                    <li>contact us</li>
                    <li>Accelerate Seller Event</li>
                    <li>Seller FAQs</li>
                    <li>More ways to make money</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Social icons */}
            

            {/* Copyright */}
            <div className="mt-8 flex flex-col sm:flex-row justify-between border-t border-gray-700 pt-6 items-center text-center text-xs text-white gap-4 sm:gap-0">
              <div>
                © Copyright 2022 by company name
              </div>
              <div className="flex flex-col sm:flex-row justify-between gap-2 items-center">
                <div>
                    Social Media Icons
                </div>
                <div className="flex justify-end gap-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-white">
                    <Facebook className="h-3 w-3 text-white" />
                  </div>
                  <div className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-white">
                    <Twitter className="h-3 w-3 text-white" />
                  </div>
                  <div className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-white">
                    <Linkedin className="h-3 w-3 text-white" />
                  </div>
                  <div className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-white">
                    <Youtube className="h-3 w-3 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}