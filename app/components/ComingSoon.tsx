"use client";

import Image from "next/image";
import Header from "../components/Header";
import CountdownTimer from "./CountdownTimer";
import ThreeAnimation from "./ThreeAnimation";

export default function ComingSoon() {


  return (
    <div className="relative w-full min-h-screen flex flex-col overflow-x-hidden">
      <Header />

      <div className="min-h-screen w-full bg-black relative flex items-center justify-center px-4 sm:px-6 py-12 sm:py-16 overflow-hidden">
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

        <div className="relative z-10 w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 pt-12 pb-6 sm:py-8 md:py-10 lg:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center">
          
          
            <div className="flex flex-col gap-4 sm:gap-5 md:gap-6 lg:gap-8 text-center lg:text-left order-1 lg:order-1">
              <div className="w-fit flex items-center gap-2 sm:gap-2.5 lg:gap-3 pl-1 pr-3.5 sm:pr-4 py-1.5 sm:py-1.5 rounded-full border border-[#FFFFFF] backdrop-blur-sm mx-auto lg:mx-0">
                <span className="bg-[#3073E7] font-inter text-[#FFFFFF] text-[10px] sm:text-[11px] md:text-xs lg:text-sm font-bold px-2 sm:px-2.5 py-0.5 rounded-full">
                  New
                </span>
                <span className="text-[#FFFFFF] text-[11px] sm:text-xs md:text-xs lg:text-sm tracking-wide whitespace-nowrap font-inter">
                  Join the Revolution Now
                </span>
              </div>

              <div className="space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-normal text-[#FFFFFF] leading-tight tracking-tight text-sf-pro">
                  Invest in the <br className="hidden sm:block" />
                  future of Real World <br className="hidden sm:block" />
                  Backed Crypto
                </h1>
                <p className="text-[#FFFFFF] text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-normal leading-relaxed max-w-lg mx-auto lg:mx-0 text-sf-pro">
                  The first-ever token Presale Backed by gold, Silver, Diamond,
                  Jewellery & more.
                </p>

              </div>
            </div>


            <div className="relative w-full h-[350px] xs:h-[380px] sm:h-[420px] md:h-[460px] lg:h-[500px] xl:h-[600px] flex items-center justify-center lg:justify-end overflow-visible order-2 lg:order-2">
              <div className="relative w-full h-full">
                <ThreeAnimation />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
