import Image from "next/image";
import {
  ShoppingCart,
  BookOpen,
  PlayCircle,
  MessageCircle,
  MapPin,
  ChevronDown,
} from "lucide-react";


export default function WhySection() {
  return (
    <section className="relative bg-white py-20">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-16 px-8 lg:flex-row">
        <div className="relative flex items-center gap-10">
            
        <div className="relative z-10 overflow-hidden  h-32 w-28 mt-24 rounded-full border-blue-300 border-4">
             <Image
              src="/people1.png"
              alt="Team presentation"
              fill
              className="object-cover scale-115"
            />
        </div>
          <div className="relative z-10 h-56 w-40 overflow-hidden rounded-full bg-gray-100">
            <Image
              src="/people2.png"
              alt="Business meeting"
              fill
              className="object-contain "
            />
          </div>

          <div className="absolute -bottom-6 left-12 h-32 w-48">
            <Image src="/union.png" alt="Dotted pattern" fill className="object-contain" />
          </div>

          <div className="absolute -left-6 bottom-5 h-6 w-6 rounded-full border border-yellow-300" />
        </div>

        <div className="relative max-w-lg">
          <h2 className="text-3xl font-bold text-gray-900">
            Why <span className="text-red-600">MarkMyAd</span> is the Smart Way to
            Sell?
          </h2>

          <div className="mt-8 inline-flex items-center gap-8 px-8 py-4 text-black">
            <ShoppingCart className="h-6 w-6" />
            <BookOpen className="h-6 w-6" />
            <PlayCircle className="h-6 w-6" />
            <MessageCircle className="h-6 w-6" />
            <MapPin className="h-6 w-6" />
          </div>
          <div className="mt-1 inline-flex items-center gap-8  px-8 py-4 text-black">
            <ShoppingCart className="h-6 w-6" />
            <BookOpen className="h-6 w-6" />
            <PlayCircle className="h-6 w-6" />
            <MessageCircle className="h-6 w-6" />
            <MapPin className="h-6 w-6" />
          </div>
          <div className="absolute sm:-right-8 right-0 bottom-0 h-10 w-10 rounded-full border-4 border-orange-400 border-b-transparent rotate-60" />
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 h-6 w-16 -translate-x-1/2  bg-[repeating-linear-gradient(60deg,#ef4444_0_6px,transparent_1px_10px)]" />
    </section>
  );
}
