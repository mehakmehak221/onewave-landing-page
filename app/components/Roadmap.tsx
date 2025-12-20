/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { motion, Variants } from 'framer-motion';
import { useState, useEffect } from 'react';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8
    }
  }
};

const roadmapData = [
  {
    quarter: 'Q1',
    year: '2025',
    items: [
      'Launch of the OneWave Platform',
      'Community Airdrop through tap-to-earn games',
      'Presale & Staking launch for the WAVE token',
      'Introduction of RWA-backed Presale and Staking',
      'Release of the Wave Money App for easy crypto management'
    ]
  },
  {
    quarter: 'Q2',
    year: '2025',
    items: [
      'Listing on tracking sites such as CoinMarketCap (CMC) and CoinGecko (CG)',
      'Launchpad listings for broader accessibility',
      'Integration of Crypto Gaming Utilities for play-to-earn and tap-to-earn',
      'Launch of the Wave Crypto Card for seamless global spending'
    ]
  },
  {
    quarter: 'Q3',
    year: '2025',
    items: [
      'Launch of the Arbitrage Bot Utility via subscription model',
      'Launch of the Traditional Staking Platform for passive income',
      'Introduction of the Crypto Payment Gateway for businesses'
    ]
  },
  {
    quarter: 'Q4',
    year: '2025',
    items: [
      'Launch of the Multi-Chain Cross-Payment Bridge for seamless transactions',
      'Release of the Wave Micro Tasks Mobile App for earning crypto',
      'Go live with FinLearn by Wave, enabling users to buy courses using WAVE Tokens',
      'Introduction of the International Forex by Wave for smooth broker deposits',
      'Listing on multiple reputed Crypto Exchanges for added liquidity'
    ]
  },
  {
    quarter: 'Q1',
    year: '2026',
    items: [
      'Deploy the advanced Wave AI Calling system for scalable, human-like voice automation',
      'Execute strategic acquisitions and partnerships to expand the ecosystem'
    ]
  },
  {
    quarter: 'Q2',
    year: '2026',
    items: [
      'Launch the high-performance WAVE Crypto Exchange with complete trading functionalities',
      'Mainnet release of the Wave Blockchain, powering the full ecosystem with reliability'
    ]
  }
];

const RoadmapCard = ({ quarter, year, items }: { quarter: string; year: string; items: string[] }) => {
  return (
    <div className="backdrop-blur-sm bg-white/2 border border-blue-500/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 relative overflow-hidden min-h-[380px] sm:h-[380px] flex items-center"
      style={{
        boxShadow: '0 0 60px rgba(59, 130, 246, 0.3), inset 0 1px 0 0 rgba(255,255,255,0.05)'
      }}
    >
      <div className="absolute top-0 left-0 w-[150px] sm:w-[200px] h-[150px] sm:h-[200px] bg-blue-500/30 rounded-full blur-[80px] sm:blur-[100px]" />
      <div className="absolute bottom-0 right-0 w-[200px] sm:w-[300px] h-[200px] sm:h-[300px] bg-blue-600/20 rounded-full blur-[100px] sm:blur-[120px]" />
      <div className='absolute -top-[65%] right-0 w-full h-full justify-end pointer-events-none transform -translate-x-[7%] hidden sm:flex'>
        <span className='text-[200px] lg:text-[300px] scale-x-[1.3] blur-sm text-[#3d75e9] font-bold'>{year}</span>
      </div>
      <div className="relative flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-8 w-full">
        <div className="w-full sm:w-1/3 flex flex-row sm:flex-col items-center justify-center gap-4 sm:gap-0">
          <h2 className="text-5xl sm:text-6xl lg:text-8xl font-bold text-white sm:mb-4">{quarter}</h2>
          <h3 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#3d75e9]">{year}</h3>
        </div>

        <div className="w-full sm:w-2/3 backdrop-blur-sm bg-black/40 border border-white/10 rounded-xl p-4 sm:p-6 lg:p-8">
          <ul className="space-y-3 sm:space-y-4 w-full">
            {items.map((item, index) => (
              <li key={index} className="flex items-start gap-2 sm:gap-3 w-full">
                <div className="w-2 h-2 rounded-full bg-[#3d75e9] mt-1.5 sm:mt-2 shrink-0" />
                <p className="text-white text-sm sm:text-base lg:text-lg flex-1">{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default function Roadmap() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    if (isDragging) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % roadmapData.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isDragging]);

  const handleDragEnd = (_: any, info: any) => {
    setIsDragging(false);
    const offset = info.offset.x;
    const velocity = info.velocity.x;

    if (Math.abs(velocity) > 500 || Math.abs(offset) > 100) {
      if (offset > 0) {
        setCurrentIndex((prev) => (prev - 1 + roadmapData.length) % roadmapData.length);
      } else {
        setCurrentIndex((prev) => (prev + 1) % roadmapData.length);
      }
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center px-4 sm:px-6 py-12 sm:py-16">
      <motion.div
        id="roadmap"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
        className="w-full max-w-[98%] sm:max-w-[95%] lg:max-w-[90%] backdrop-blur-xl bg-linear-to-b from-white/3 via-white/5 to-white/2 rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-12"
        style={{
          clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
          border: '1px solid rgba(255,255,255,0.1)',
          boxShadow: '0 8px 32px 0 rgba(0,0,0,0.5), inset 0 1px 0 0 rgba(255,255,255,0.1)'
        }}
      >
        <motion.div variants={itemVariants} className="text-center mb-8 sm:mb-12">
          <p className="text-xs sm:text-sm font-semibold text-white/60 tracking-wider uppercase mb-3 sm:mb-4">
            ROADMAP
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#3d75e9]">
            Milestones And Future Plans
          </h1>
        </motion.div>

        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.2}
          onDragStart={() => setIsDragging(true)}
          onDragEnd={handleDragEnd}
          className="cursor-grab active:cursor-grabbing"
        >
          <RoadmapCard
            quarter={roadmapData[currentIndex].quarter}
            year={roadmapData[currentIndex].year}
            items={roadmapData[currentIndex].items}
          />
        </motion.div>

        <div className="flex justify-center gap-1.5 sm:gap-2 mt-6 sm:mt-8">
          {roadmapData.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-[#3d75e9] w-6 sm:w-8' : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}
