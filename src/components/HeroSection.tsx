import Image from "next/image";
import HeroDecorations from "./HeroDecorations";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-r from-blue-950 via-blue-900 to-blue-800">
      <header className="relative z-10 flex w-full items-center justify-between bg-blue-950 px-16 py-6">
        <div className="flex items-center gap-3">
          <div className="rounded-lg bg-red-600 px-1 py-2 text-lg font-bold text-white">
            Mark
          </div>
          <span className="text-xl font-bold text-white">My Ad</span>
        </div>
        <div className="flex items-center gap-6">
          <a
            href="#"
            className="text-sm font-semibold text-orange-400 transition hover:opacity-80"
          >
            Log In
          </a>
          <button className="rounded bg-gradient-to-l from-orange-400 via-orange-400 to-red-500 py-2 px-6 font-bold text-white transition hover:bg-red-600">
            START SELLING
          </button>
        </div>
      </header>

      <HeroDecorations />

      <div className="relative z-10 mx-auto flex max-w-7xl items-center gap-20 px-16 py-12">
        <div className="relative flex-1">
          <div className="absolute -left-12 top-0 bottom-0 border-l-2 border-dashed border-blue-400 opacity-40" />
          <div className="mb-6 h-1 w-10 rounded bg-purple-500" />

          <h1 className="mb-8 text-5xl font-bold leading-tight text-white">
            Sell with the fastest-growing and preferred acquisition channel
          </h1>

          <div className="mb-12 flex items-center gap-6">
            <button className="rounded-full bg-gradient-to-l from-orange-400 via-orange-400 to-red-400 py-4 px-10 font-bold text-white transition hover:bg-red-600">
              SIGN UP
            </button>
            <div className="text-sm font-semibold text-white">
              <p>Now sell with</p>
              <p>lower selling fee*</p>
            </div>
          </div>

          <div className="mb-16 flex items-end gap-6">
            <Image
              src="/imagecopy3.png"
              alt="Category icons"
              width={220}
              height={120}
              className="h-auto w-44"
              priority
            />
          </div>

          <Image
            src="/cross.png"
            alt="Decorative cross"
            width={40}
            height={40}
            className="absolute -bottom-10 -left-6 h-10 w-10 opacity-70"
          />
        </div>

        <div className="relative flex-1 h-96">
          <div
            className="absolute top-6 right-28 h-[220px] w-[320px] -rotate-6"
            style={{
              WebkitMaskImage: "url(/mask1.png)",
              WebkitMaskSize: "100% 100%",
              WebkitMaskRepeat: "no-repeat",
              WebkitMaskPosition: "center",
              maskImage: "url(/mask1.png)",
              maskSize: "100% 100%",
              maskRepeat: "no-repeat",
              maskPosition: "center",
              filter: "drop-shadow(0 20px 35px rgba(0, 0, 0, 0.35))",
            }}
          >
            <Image
              src="/billboard.png"
              alt="Billboard"
              fill
              sizes="(min-width: 1024px) 320px, 60vw"
              className="object-cover"
              priority
            />
          </div>

          <div
            className="absolute top-32 right-32 h-32 w-2 rounded-full bg-gradient-to-b from-yellow-400 to-orange-500"
            style={{
              boxShadow: "0 0 20px rgba(255, 193, 7, 0.5)",
            }}
          />

          <div
            className="absolute top-32 right-2 h-[190px] w-[280px] rotate-12"
            style={{
              WebkitMaskImage: "url(/mask2.png)",
              WebkitMaskSize: "100% 100%",
              WebkitMaskRepeat: "no-repeat",
              WebkitMaskPosition: "center",
              maskImage: "url(/mask2.png)",
              maskSize: "100% 100%",
              maskRepeat: "no-repeat",
              maskPosition: "center",
              filter: "drop-shadow(0 16px 28px rgba(0, 0, 0, 0.35))",
            }}
          >
            <Image
              src="/billboard2.png"
              alt="Billboard display"
              fill
              sizes="(min-width: 1024px) 280px, 55vw"
              className="object-cover"
            />
          </div>

          <Image
            src="/halfmoon.png"
            alt="Half moon"
            width={48}
            height={48}
            className="absolute top-6 right-10 h-12 w-12"
          />

          <div className="absolute bottom-20 right-32">
            <div className="mb-5 h-2 w-2 rounded-full bg-yellow-400" />
            <div className="mb-5 h-2 w-2 rounded-full bg-yellow-400" />
            <div className="mb-5 h-2 w-2 rounded-full bg-yellow-400" />
            <div className="h-2 w-2 rounded-full bg-yellow-400" />
          </div>

          <div className="absolute top-1/3 right-96 h-12 w-12 rounded-full bg-orange-500 opacity-70" />

          <div className="absolute top-32 right-64 flex gap-1">
            <div className="h-6 w-1 rounded-full bg-yellow-400" />
            <div className="h-6 w-1 rounded-full bg-yellow-400" />
            <div className="h-6 w-1 rounded-full bg-yellow-400" />
            <div className="h-6 w-1 rounded-full bg-yellow-400" />
          </div>
        </div>
      </div>

      <div className="absolute right-32 bottom-48 z-10 text-right">
        <h2 className="mb-2 text-2xl font-bold text-yellow-400">
          Heading will be here in 2 lines
        </h2>
        <p className="mb-4 font-semibold text-yellow-400">
          Lorem ipsum is dummy text
        </p>
        <p className="text-sm text-white opacity-90">
          Start up with the less quantity but best quality
        </p>
        <div className="mt-4 flex justify-end gap-2">
          <div className="h-2 w-2 rounded-full bg-white" />
          <div className="h-2 w-2 rounded-full bg-white opacity-40" />
          <div className="h-2 w-2 rounded-full bg-white opacity-40" />
          <div className="h-2 w-2 rounded-full bg-white opacity-40" />
        </div>
      </div>

      <div className="absolute bottom-0 left-100 z-10 flex -translate-x-1/2 items-center gap-8 bg-transparent px-8 py-6">
        <div className="flex -space-x-3">
          <Image
            src="/indSellers.png"
            alt="Seller"
            width={48}
            height={48}
            className="h-12 rounded-full border-2 border-white object-cover"
          />
        </div>

        <div>
          <p className="text-lg font-bold text-gray-900">5 Star Ratings</p>
          <p className="text-sm text-yellow-400">⭐ ⭐ ⭐ ⭐ ⭐ 4.58 (300k+)</p>
        </div>
      </div>

      <svg
        className="absolute bottom-0 left-0 w-full"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M0,60 Q300,10 600,60 T1200,60 L1200,120 L0,120 Z"
          fill="white"
        />
      </svg>

      <div className="absolute bottom-32 right-12 opacity-30">
        <div className="grid grid-cols-4 gap-2">
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={i} className="h-1.5 w-1.5 rounded-full bg-blue-400" />
          ))}
        </div>
      </div>
    </section>
  );
}
