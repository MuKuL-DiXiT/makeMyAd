import Image from "next/image";

export default function HeroSection() {
    return (
        <section className="relative sm:min-h-screen min-h-screen-[150vh] overflow-hidden bg-gradient-to-r from-[#1306AA] to-[#2d4391]">
            <header className="relative z-10 flex  w-full items-center justify-between bg-blue-950 px-6 py-2 sm:px-16 sm:py-6">
                <div className="flex items-center gap-2 sm:gap-3">
                    <div className="rounded-lg bg-red-600 px-1 py-2 text-lg font-bold text-white">
                        Mark
                    </div>
                    <span className="sm:text-xl font-bold text-white">My Ad</span>
                </div>
                <div className="flex items-center gap-6">
                    <a
                        href="#"
                        className="text-sm font-semibold text-orange-400 transition hover:opacity-80"
                    >
                        Log In
                    </a>
                    <button className="rounded bg-gradient-to-l from-orange-400 via-orange-400 to-red-500 py-1 px-2 sm:py-2 sm:px-6 font-bold text-white transition hover:bg-red-600">
                        START SELLING
                    </button>
                </div>
            </header>

            <div className="relative z-10 mx-auto lg:flex lg:flex-colmax-w-7xl items-center gap-20 px-16 py-12">
                <div className="relative flex-1">
                    <div className="flex justify-between w-5/6">
                        <img src="./dec.png" alt="" className="-translate-x-10 h-5" />
                        <div className="absolute right-44 top-0 h-10 w-10 rounded-full border-4 border-yellow-400 border-b-transparent -rotate-60" />
                        <div className="absolute sm:right-32 right-0 bottom-32 h-8 w-8 rounded-full border-4 border-orange-400 border-b-transparent rotate-60" />
                    </div>
                    <h1 className="my-8 text-2xl sm:text-3xl w-96 font-bold leading-tight text-blue-400">
                        Sell with the fastest-growing and preferred acquisition channel
                    </h1>

                    <div className="mb-12 flex items-center gap-6">
                        <button className="rounded-full bg-gradient-to-l from-orange-400 via-orange-400 to-red-400 py-2 px-3 sm:px-8 font-bold text-white transition hover:bg-red-600">
                            SIGN UP
                        </button>
                        <div className="text-sm font-semibold text-white">
                            <p>Now sell with</p>
                            <p>lower selling fee*</p>
                        </div>
                    </div>

                    <div className="my-16 flex items-end gap-6">
                        <Image
                            src="/Categories.png"
                            alt="Category icons"
                            width={220}
                            height={120}
                            className="h-auto w-96"
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

                <div className="relative flex-1 sm:h-96 h-72">
                    <div className="absolute top-24 -left-40 flex flex-col gap-4">
                     <div className="relative h-8 w-8">
                            <div className="h-8 w-8 rounded-full border border-white/80 bg-transparent" />
                            <div className="absolute -bottom-1 -left-1 h-8 w-8 rounded-full bg-orange-500" />
                        </div> </div>
                    <div className="absolute top-4 sm:top-5 lg:top-6 right-8 sm:right-32 lg:right-72 h-[160px] sm:h-[190px] lg:h-[220px] w-[230px] sm:w-[280px] lg:w-[320px]">
                        <div className="relative z-10 h-[160px] sm:h-[190px] lg:h-[220px] w-[230px] sm:w-[280px] lg:w-[320px]">
                            <Image
                                src="/mask1.png"
                                alt="Billboard mask"
                                fill
                                sizes="(min-width: 1024px) 320px, 60vw"
                                className="object-contain -rotate-3 translate-7"
                            />
                            <Image
                                src="/billboard1.png"
                                alt="Billboard display"
                                fill
                                className="object-center scale-120"
                            />
                        </div>
                        <div className="absolute -bottom-6 sm:-bottom-8 lg:-bottom-9 left-12 sm:left-16 lg:left-20 h-[130px] sm:h-[170px] lg:h-[200px] w-[170px] sm:w-[210px] lg:w-[236px] rounded-b-[100px] bg-yellow-400" />
                    </div>

                    <div
                        className="absolute top-32 right-32 h-32 w-2 rounded-full bg-gradient-to-b from-yellow-400 to-orange-500"
                        style={{
                            boxShadow: "0 0 20px rgba(255, 193, 7, 0.5)",
                        }}
                    />

                    <div className="absolute top-28 sm:top-30 lg:top-32 right-0 h-[140px] sm:h-[170px] lg:h-[190px] w-[210px] sm:w-[250px] lg:w-[280px]">
                        <div className="relative z-10 h-[140px] sm:h-[170px] lg:h-[190px] w-[210px] sm:w-[250px] lg:w-[280px]">
                            <Image
                                src="/mask2.png"
                                alt="Billboard mask"
                                fill
                                sizes="(min-width: 1024px) 280px, 55vw"
                                className="object-contain"
                            />
                            <Image
                                src="/billboard2.png"
                                alt="Billboard display"
                                fill
                                sizes="(min-width: 1024px) 280px, 55vw"
                                className="object translate-7 -translate-y-0.5"
                            />
                        </div>
                        <div className="absolute -bottom-1 sm:-bottom-2 right-6 sm:right-8 lg:right-11 h-[100px] sm:h-[130px] lg:h-[150px] w-[140px] sm:w-[180px] lg:w-[200px] rounded-br-[60px] bg-cyan-400" />
                    </div>

                    <div className="absolute -right-8 top-0 h-10 w-10 rounded-full border-4 border-orange-400 border-b-transparent -rotate-60" />


                    <div className="absolute hidden lg:flex md:flex-col right-72 sm:-bottom-24  z-10 text-center">
                        <h2 className="mb-2 lg:text-2xl font-bold text-yellow-400">
                            Heading will be here in 2 lines
                        </h2>
                        <p className="mb-4 font-semibold text-yellow-400">
                            Lorem ipsum is dummy text
                        </p>
                        <p className="text-sm text-white opacity-90">
                            Start up with the less quantity but best quality
                        </p>
                        <div className="mt-4 flex justify-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-white" />
                            <div className="h-2 w-2 rounded-full bg-white opacity-40" />
                            <div className="h-2 w-2 rounded-full bg-white opacity-40" />
                            <div className="h-2 w-2 rounded-full bg-white opacity-40" />
                        </div>
                    </div>

                </div>
            </div>


            <div className="absolute bottom-0 sm:left-100 left-10 z-10 flex sm:-translate-x-1/2 items-center gap-8 bg-transparent  py-6">
                <div className="flex -space-x-3">
                    <img
                        src="/seller.png"
                        alt="Seller"
                        className="h-12"
                    />
                </div>

                <div>
                    <p className="sm:text-lg font-bold text-gray-900">5 Star Ratings</p>
                    <p className="text-sm text-yellow-400">⭐ ⭐ ⭐ ⭐ ⭐ 4.58 (300k+)</p>
                </div>
            </div>

            <svg
                className="absolute bottom-0 left-0 w-full"
                viewBox="0 0 1200 120"
                preserveAspectRatio="none"
            >
                <path
                    d="M0,20 Q300,0 650,55 T1200,80 L1200,1200 L0,120 Z"
                    fill="white"
                />
            </svg>

            <div className="absolute w-48 bottom-32 right-48">
                <img src="/dots.png" alt="" />
            </div>
        </section>
    );
}