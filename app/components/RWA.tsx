'use client';

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const presaleImages = [
  "/presale1.png",
  "/presale2.png",
  "/presale3.png",
  
];

export default function RWA() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1); 
  const [isPaused, setIsPaused] = useState(false);

  const carouselRef = useRef<HTMLDivElement>(null);

  const maxIndex = presaleImages.length - 2; 

 
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
      
        if (prev >= maxIndex) {
          setDirection(-1);
          return prev - 1;
        }

        if (prev <= 0) {
          setDirection(1);
          return prev + 1;
        }

        return prev + direction;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [direction, isPaused, maxIndex]);

  useEffect(() => {
    if (!isPaused) return;

    const timer = setTimeout(() => {
      setIsPaused(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, [isPaused]);


  const goToPrevious = () => {
    setIsPaused(true);
    setDirection(-1);
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const goToNext = () => {
    setIsPaused(true);
    setDirection(1);
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  return (
    <div className="w-full relative">
      <div className="relative lg:aspect-[1920/656] hidden lg:flex">
        <Image
          src="/bgRWAPresale.png"
          alt="rwa bg"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 flex items-center justify-center max-w-[96rem] mx-auto">
          <div className="w-full max-w-[90%] h-full flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 py-8">

          
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="w-full lg:w-[50%] xl:w-[45%] flex flex-col space-y-6 px-4"
            >
              <h2 className="text-2xl sm:text-3xl lg:text-[37px] xl:text-5xl text-white leading-tight">
                World's First Real World Assets (RWA) Backed Presale
              </h2>
              <p className="text-base lg:text-[17px] xl:text-[18px] text-white/80 leading-relaxed">
                OneWave Presale sets a new benchmark in crypto-backed by real-world
                assets like gold, silver, and certified gems for unmatched trust and value.
              </p>
            </motion.div>

         
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              className="w-full lg:w-[50%] xl:w-[55%] relative flex items-center justify-center"
            >
              <div className="relative w-full max-w-4xl">

                <div ref={carouselRef} className="relative overflow-hidden rounded-xl">
                  <motion.div
                    className="flex gap-4"
                    animate={{
                      x: `-${currentIndex * 50}%`,
                    }}
                    transition={{
                      duration: 0.6,
                      ease: "easeInOut",
                    }}
                  >
                    {presaleImages.map((image, index) => (
                      <div
                        key={index}
                        className="flex-shrink-0 w-[calc(50%-0.5rem)]"
                      >
                        <Image
                          src={image}
                          alt={`Presale Phase ${index + 1}`}
                          width={600}
                          height={400}
                          className="w-full h-auto object-contain rounded-xl"
                          priority={index < 2}
                        />
                      </div>
                    ))}
                  </motion.div>
                </div>

       
                <button
                  onClick={goToPrevious}
                  className="absolute -left-11 top-1/2 -translate-y-1/2 z-10 transition hover:scale-110"
                >
                  <IoIosArrowForward className="text-white text-[34px]" />
                </button>

                <button
                  onClick={goToNext}
                  className="absolute -right-11 top-1/2 -translate-y-1/2 z-10 transition hover:scale-110"
                >
                  <IoIosArrowBack className="text-white text-[34px]" />
                </button>

              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="relative aspect-[1058/656] flex lg:hidden">
 <Image
          src="/bgmobile.png"
          alt="rwa bg"
          fill
          priority
          className="object-fill border-b border-white"
        />
      </div>
      <div className="w-full flex lg:hidden px-10 py-14 sm:my-16 md:py-20">
        <div className="w-full max-w-md md:max-w-2xl mx-auto relative">
        
          <div className="relative overflow-hidden rounded-xl">
            <motion.div
              className="flex gap-3"
              animate={{
                x: `-${currentIndex * 50}%`,
              }}
              transition={{
                duration: 0.6,
                ease: "easeInOut",
              }}
            >
              {presaleImages.map((image, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-[calc(50%-0.375rem)]"
                >
                  <Image
                    src={image}
                    alt={`Presale Phase ${index + 1}`}
                    width={400}
                    height={300}
                    className="w-full h-auto object-contain rounded-xl"
                    priority={index < 2}
                  />
                </div>
              ))}
            </motion.div>
          </div>

        
          <button
            onClick={goToPrevious}
            className="absolute -left-8 md:-left-12 top-1/2 -translate-y-1/2 z-10 transition hover:scale-110"
            aria-label="Previous slide"
          >
            <IoIosArrowForward className="text-white text-3xl md:text-4xl" />
          </button>

          <button
            onClick={goToNext}
            className="absolute -right-8 md:-right-12 top-1/2 -translate-y-1/2 z-10 transition hover:scale-110"
            aria-label="Next slide"
          >
            <IoIosArrowBack className="text-white text-3xl md:text-4xl" />
          </button>
        </div>
      </div>
    </div>
  );
}
