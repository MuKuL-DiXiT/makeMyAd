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
          className="absolute w-full h-[1112px] top-0 left-0 bg-[url('/bg-1.png')] bg-cover bg-center"
        />

        {/* Join Us Section */}
        <section className="relative overflow-hidden py-20 px-24">
          {/* Top right half circle decoration */}
          <div className="absolute right-72 top-4 h-10 w-10 rounded-full border-4 border-orange-400  border-r-transparent rotate-45" />

          <div className="mx-auto flex max-w-6xl gap-16 px-8">
            {/* Left side */}
            <div className="relative px-24 flex-1">
              {/* Left vertical nav */}
              <div className="absolute -left-20 top-12 flex flex-col items-start gap-3 text-xs text-gray-400">
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
                          ? "font-semibold text-white"
                          : "hover:text-gray-300"
                      }
                    >
                      {item}
                    </span>
                  </button>
                ))}
                <div className="absolute left-[3px] top-0 h-full w-px bg-gray-600" />
              </div>

              <h2 className="text-4xl font-bold text-white leading-tight">
                Join Us in a
                <br />
                Few Simple
                <br />
                Steps
              </h2>
              <p className="mt-6 text-xl text-gray-300 max-w-xs">
                Join us quickly with our simple, step-by-step guide. Just a few
                easy actions and you'll be ready to start connecting with top
                advertisers and growing your revenue.
              </p>

              {/* Bottom decorations */}
              <div className="mt-12 flex items-center justify-between gap-4">
                <div className="h-6 w-6 ml-48 rounded-full border-2 border-orange-600" />
                <div className="flex absolute left-90 bottom-8 gap-1">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <div key={i} className="h-9 w-1.5 -rotate-20 bg-blue-400" />
                  ))}
                </div>
              </div>
            </div>

            {/* Right side - Form Card (WHITE) */}
            <div className="absolute top-24 right-0 flex-1">
              <div className="rounded-l-2xl bg-white/20 p-6 shadow-xl">
                {/* Steps header */}
                <div className="ml-12 flex w-5/6 items-center justify-between text-sm mb-2">
                  <span className="text-white font-medium">
                    About the Business
                  </span>
                  <span className="text-gray-400">Contact Information</span>
                  <span className="text-gray-400">Other Details</span>
                </div>

                {/* Progress bar with dots between labels */}
                <div className="ml-12 relative w-5/6 flex items-center">
                  {/* Main filled circle with number */}
                  <div className="flex h-10 w-10 border-2 border-gray-400/50 items-center justify-center rounded-full bg-white text-black text-sm z-10">
                    1
                  </div>
                  {/* Progress line */}
                  <div className="h-2 flex-1 bg-gray-400/50 -ml-1 relative">
                    <div className="h-full w-24 bg-gray-400/50" />
                    {/* Dot between "About the Business" and "Contact Information" */}
                    <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 h-3 w-3 rounded-full bg-gray-100" />
                    {/* Dot before "Other Details" */}
                    <div className="absolute top-1/2 right-[15%] -translate-y-1/2 h-3 w-3 rounded-full bg-gray-100" />
                  </div>
                </div>

                {/* Form content */}
                <div className="ml-12 mt-6">
                  <h3 className="text-white font-semibold">
                    What's your Business Type?
                  </h3>

                  <div className="mt-4 grid grid-cols-2">
                    <div>
                      <p className="text-xs text-gray-500 mb-2">
                        Individual Business
                      </p>
                      <button className="rounded-md bg-indigo-300 px-4 py-2 text-sm font-semibold text-blue-950">
                        Individual
                      </button>
                    </div>

                    <div >
                      <p className="text-xs text-white mb-2">
                        Registered Business
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {registeredTypes.slice(0, 4).map((type, i) => (
                          <button
                            key={i}
                            className="rounded border border-gray-300 px-3 py-1.5 text-xs text-white hover:border-indigo-600 hover:text-indigo-600"
                          >
                            {type.label}
                          </button>
                        ))}
                      </div>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {registeredTypes.slice(4, 8).map((type, i) => (
                          <button
                            key={i}
                            className="rounded border border-gray-300 px-3 py-1.5 text-xs text-white hover:border-indigo-600 hover:text-indigo-600"
                          >
                            {type.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <button className="mt-6 rounded-full bg-gradient-to-r from-orange-400 to-red-500 px-6 py-2.5 text-sm font-semibold text-white">
                    WANT'S TO JOIN WITH US
                  </button>
                </div>
              </div>

              {/* X decoration */}
              <div className="absolute right-24 -bottom-8" >
            <img src="/cross.png" alt="" className="h-12" />
          </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section - overlapping cards on white curve */}
        <section className="relative overflow-hidden pt-12 pb-16">
          {/* Orange circle decoration */}
          

          <div className="mx-auto flex max-w-6xl gap-12">
            {/* Left side - Testimonial cards */}
            <div className="relative flex-1">
              {/* Left vertical nav */}
              <div className="absolute -left-28 bottom-12  flex flex-col items-start gap-3 text-xs text-gray-400">
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

              <div className="flex gap-6">
                {/* Card 1 */}
                <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm max-w-xs">
                  <p className="text-red-500 font-semibold">Awesome...</p>
                  <div className="mt-1 mb-12 flex gap-0.5 text-yellow-400 text-sm">
                    ★ ★ ★ ★ ★
                  </div>
                  <p className="mt-3 border-b pb-10 border-gray-200 text-sm text-gray-500">
                    "Related explanation will be here in 5 to 6 or max 7 lines.
                    Lorem ipsum is dummy text which is use for dummy websites.
                  </p>
                  <div className="mt-4 flex items-center gap-3">
                    <div className="h-10 w-10 rounded bg-gray-300" />
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">
                        Company Name
                      </p>
                      <p className="text-xs text-gray-400">Australia</p>
                    </div>
                    <span className="ml-auto text-4xl text-gray-200 font-serif">
                      "
                    </span>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="mt-12 rounded-xl border border-gray-200 bg-white p-5 shadow-sm max-w-xs">
                  <p className="text-orange-500 font-semibold">
                    Great Opportunity...
                  </p>
                  <div className="mt-1 mb-12 flex gap-0.5 text-yellow-400 text-sm">
                    ★ ★ ★ ★ ★
                  </div>
                  <p className="mt-3 border-b pb-10 border-gray-200 text-sm text-gray-500">
                    "Related explanation will be here in 5 to 6 or max 7 lines.
                    Lorem ipsum is dummy text which is use for dummy websites.
                  </p>
                  <div className="mt-4 flex items-center gap-3">
                    <div className="h-10 w-10 rounded bg-gray-300" />
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">
                        Company Name
                      </p>
                      <p className="text-xs text-gray-400">Australia</p>
                    </div>
                    <span className="ml-auto text-4xl text-gray-200 font-serif">
                      "
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Content */}
            <div className="flex-1 pt-16 mt-24">
              <h2 className="text-3xl font-bold text-gray-900">
                Clients loves
                <br />
                <span className="text-red-600 text-4xl">MarkmyAd</span>
              </h2>
              <p className="mt-4 w-48 text-gray-500 max-w-sm">
                Lorem ipsum is dummy text which is use for dummy website related
                explanation will be in 3 to 4 lines
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="relative overflow-hidden py-20">

          <div className="mx-auto max-w-3xl px-8">
            {/* Heading */}
            <div className="mb-12 text-center relative">
              {/* Cross image top left */}
              <img 
                src="/cross.png" 
                alt="" 
                className="absolute -top-16 left-10 h-10 w-10"
              />
              {/* Bars decoration top right */}
              <div className="absolute -top-8 right-0 flex gap-0.5">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="h-5 w-1 -rotate-20 bg-blue-400" />
                ))}
              </div>
              {/* Bars decoration bottom left */}
              <div className="absolute -bottom-12 left-0 flex gap-0.5">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="h-5 w-1 -rotate-20 bg-blue-400" />
                ))}
              </div>
              <h2 className="text-3xl font-bold text-gray-900">
                Frequently Ask <span className="text-red-600">Question?</span>
              </h2>
            </div>

            {/* Left nav */}
            <div className="absolute left-8 top-1/2 -translate-y-1/2 flex flex-col items-start gap-3 text-xs text-gray-400">
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

            {/* FAQ Accordion */}
            <div className="space-y-4 relative">
              <img 
                src="/cross2.png" 
                alt="" 
                className="absolute top-35 -left-24 h-10 w-10"
              />
               <div className="absolute top-48 -left-12 h-4 w-4">
                        <div className="h-4 w-4 rounded-full border border-orange-500 bg-transparent" />
                        <div className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-orange-500" />
                </div> 
              {faqItems.map((item, index) => (
                <div key={index} className="border-b border-gray-200 pb-4">
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                    className="flex w-full items-center justify-between"
                  >
                    <span className="text-lg font-semibold text-gray-900">
                      {item.question}
                    </span>
                    {openFaq === index ? (
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-orange-500">
                        <Minus className="h-4 w-4 text-white" />
                      </div>
                    ) : (
                      <Plus className="h-5 w-5 text-gray-400" />
                    )}
                  </button>
                  {openFaq === index && item.answer && (
                    <p className="mt-3 text-sm text-gray-500">{item.answer}</p>
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
          <div className="mx-auto max-w-6xl px-8">
            <div className="flex gap-16">
              {/* Logo & Contact */}
              <div className="flex-shrink-0 relative">

                <div className="absolute -top-4 -right-8 h-8 w-8 rounded-full border-4 border-orange-400 border-b-transparent  -rotate-45" />
                
                <div className="flex items-center gap-2">
                  <div className="rounded bg-red-600 px-1 py-2 text-sm font-bold text-white">
                    Mark
                  </div>
                  <span className="text-lg font-bold text-white">My Ad</span>
                </div>

                {/* Half circle decoration */}


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
              <div className="grid flex-1 grid-cols-4 gap-3 text-sm">
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
            <div className="mt-8 flex justify-between border-t border-gray-700 pt-6 items-center text-center text-xs text-white">
              <div>
                © Copyright 2022 by company name
              </div>
              <div className="flex justify-between gap-2 items-center">
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