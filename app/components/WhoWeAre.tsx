'use client';

import { motion, Variants } from 'framer-motion';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const leftVariants: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8
    }
  }
};

const rightVariants: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8
    }
  }
};

export default function WhoWeAre() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
      className="mt-6 sm:mt-10 min-w-[95%] sm:min-w-[90%] max-w-[95%] sm:max-w-[90%] backdrop-blur-xl bg-linear-to-b  flex justify-self-center rounded-xl sm:rounded-2xl"
      style={{
        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
        border: '1px solid rgba(255,255,255,0.1)',
        boxShadow: '0 8px 32px 0 rgba(0,0,0,0.5), inset 0 1px 0 0 rgba(255,255,255,0.1)'
      }}>
      <div className='flex flex-col lg:flex-row w-full'>
       <motion.div variants={leftVariants} className='w-full lg:w-1/2 p-6 sm:p-10 flex flex-col justify-center items-center order-2 lg:order-1'>
  <div className='relative w-full h-[300px] sm:h-[400px] lg:h-[500px] flex items-center justify-center'>
    <div className="absolute inset-0 bg-black
    blur-[100px]" />
    <video
      // autoPlay
      autoPlay
      loop
      muted
      playsInline
      className="w-full h-full object-contain rounded-xl scale-125"
      style={{  
        filter: 'brightness(0.8) saturate(1.4) ',
        // mixBlendMode: 'screen' // This removes black
      }}
    >
      <source src="/card.webm" type="video/webm" />
    </video>
  </div>
</motion.div>

        <motion.div variants={rightVariants} className='w-full lg:w-1/2 p-6 sm:p-10 flex flex-col justify-center order-1 lg:order-2'>
          <div className="backdrop-blur-xl lg:scale-90 bg-linear-to-br from-white/8 to-white/2 border border-white/10 rounded-xl p-6 sm:p-8 space-y-4 sm:space-y-6 shadow-2xl"
            style={{
              boxShadow: '0 8px 32px 0 rgba(0,0,0,0.4), inset 0 1px 0 0 rgba(255,255,255,0.1)'
            }}
          >
            <div className="space-y-3 sm:space-y-4">
              <p className="text-xs sm:text-sm font-semibold text-white/60 tracking-wider uppercase">
                WHO WE ARE
              </p>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight">
                Welcome to OneWave
                <br />
                <span className="text-white/90">The Decentralized</span>
                <br />
                <span className="text-white/90">Multi-Utility</span>
                <br />
                <span className="text-white/90">Ecosystem</span>
              </h2>

              <div className="space-y-3 sm:space-y-4 pt-2 sm:pt-4">
                <p className="text-white/70 text-sm sm:text-base leading-relaxed">
                  OneWave is an advanced Web3 ecosystem powered by blockchain innovation, created to enable users with a range of utilities across multiple chains. From digital payments and gaming to staking, OneWave serves as your unified platform for all decentralized needs.
                </p>

                <p className="text-white/70 text-sm sm:text-base leading-relaxed">
                  Our purpose is to connect traditional finance with the crypto economy, making blockchain accessible, practical, and rewarding for every user.
                </p>
              </div>
            </div>

            <div className="pt-3 sm:pt-4 border-t border-white/10">
              <p className="text-white/70 text-xs sm:text-sm">
                Multichain&nbsp;&nbsp;&nbsp;User Centric Design&nbsp;&nbsp;&nbsp;Innovative Utilities&nbsp;&nbsp;&nbsp;Community Driven
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}