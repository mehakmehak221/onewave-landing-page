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

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
            <div className="flex flex-col gap-6 lg:gap-8 text-center lg:text-left">
              <div className="w-fit flex items-center gap-2 lg:gap-3 pl-1 pr-4 py-1.5 rounded-full border border-[#FFFFFF] backdrop-blur-sm mx-auto lg:mx-0">
                <span className="bg-[#3073E7] font-inter text-[#FFFFFF] text-[10px] sm:text-xs lg:text-sm font-bold px-2 py-0.5 rounded-full">
                  New
                </span>
                <span className="text-[#FFFFFF] text-[10px] sm:text-xs lg:text-sm tracking-wide whitespace-nowrap font-inter">
                  Join the Revolution Now
                </span>
              </div>

              <div className="space-y-4 lg:space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-normal text-[#FFFFFF] leading-tight tracking-tight text-sf-pro">
                  Invest in the <br className="hidden sm:block" />
                  future of Real World <br className="hidden sm:block" />
                  Backed Crypto
                </h1>
              <p className="text-[#FFFFFF] text-base sm:text-lg lg:text-2xl font-normal leading-relaxed max-w-lg mx-auto lg:mx-0 text-sf-pro">
                  The first-ever token Presale Backed by gold, Silver, Diamond,
                  Jewellery & more.
                </p>

                <div className="w-full max-w-sm mx-auto lg:mx-0 pt-6">
                  <CountdownTimer />
                </div>
              </div>
            </div>

         
            <div className="relative w-full h-[400px] lg:h-[600px] flex items-center justify-center lg:justify-end overflow-visible">
              <div className="relative w-full h-full min-h-[400px]">
                <ThreeAnimation />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
