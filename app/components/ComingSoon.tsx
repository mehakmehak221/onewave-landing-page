"use client";

import Image from "next/image";
import Header from "../components/Header";

export default function ComingSoon() {


  return (
    <div className="relative w-full min-h-screen flex flex-col overflow-x-hidden">
      <Header />

      <div className="flex-1 relative flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero_bg.png"
            alt="Background"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 w-full py-8 sm:py-12 lg:py-16 grid md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12 items-center mx-auto">
          <div className="flex flex-col gap-4 sm:gap-6 lg:gap-8 max-w-2xl mx-auto lg:mx-0 lg:ml-[83px] lg:mt-32 text-center lg:text-left">
            <div className="w-fit flex items-center gap-1.5 sm:gap-2 lg:gap-3 pl-1 pr-3 sm:pr-4 lg:pr-5 py-1 sm:py-1.5 rounded-full border border-[#FFFFFF] backdrop-blur-sm mx-auto lg:mx-0">
              <span className="bg-[#3073E7] text-[#FFFFFF] text-[9px] sm:text-xs lg:text-sm font-bold px-1.5 sm:px-2 lg:px-3 py-0.5 sm:py-1 rounded-full">
                New
              </span>
              <span className="text-[#FFFFFF] text-[10px] sm:text-xs lg:text-sm tracking-wide whitespace-nowrap">
                Join the Revolution Now
              </span>
            </div>

            <div className="space-y-4 lg:space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-medium text-[#FFFFFF] leading-tight tracking-tight text-sf-pro">
                Invest in the <br className="hidden sm:block" />
                future of Real World <br className="hidden sm:block" />
                Backed Crypto
              </h1>
              <p className="text-[#FFFFFF] text-base sm:text-lg lg:text-xl font-normal leading-relaxed max-w-lg mx-auto lg:mx-0 text-sf-pro">
                The first-ever token Presale Backed by gold, Silver, Diamond,
                Jewellery & more.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
