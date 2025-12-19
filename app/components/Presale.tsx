'use client';

import { motion, Variants } from 'framer-motion';
import { useRouter } from 'next/navigation';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
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

const presalePhases = [
  {
    phase: 1,
    price: 0.25,
    cliff: '4 Months',
    vesting: '10% X 13 Months total'
  }
  // Phase 2 hidden for now - will be enabled later
  // {
  //   phase: 2,
  //   price: 0.6,
  //   cliff: '12 Months',
  //   vesting: '5% X 20 Months'
  // }
];

export default function Presale() {
  const router = useRouter();

  const handleBuyNow = () => {
    router.push('/buy-now');
  };

  return (
    <div className="min-h-[85vh] w-full relative flex items-center justify-center px-4 sm:px-6 py-8 sm:py-12">
      <div className="absolute top-0 left-0 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-blue-400/30 rounded-full blur-[80px] sm:blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-blue-400/30 rounded-full blur-[100px] sm:blur-[120px]" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        className="relative z-10 w-full max-w-7xl flex flex-col lg:flex-row items-center gap-8 sm:gap-10 lg:gap-12"
      >
        <motion.div variants={itemVariants} className="flex-1 text-center lg:text-left">
          <p className="text-xs sm:text-sm font-semibold text-white/60 tracking-wider uppercase mb-3 sm:mb-4">
            PRESALE 2025
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-4 sm:mb-6">
            World&apos;s First Real World Assets (RWA) Backed Presale
          </h1>
          <p className="text-white/70 text-sm sm:text-base lg:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
            The OneWave Presale introduces a new benchmark in crypto — backed by real-world assets such as gold, silver, and certified gems, ensuring unmatched trust and tangible value.
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="flex-1 relative flex items-center justify-center gap-3 sm:gap-4 w-full">
          {presalePhases.map((phase) => (
            <motion.div
              key={phase.phase}
              variants={itemVariants}
              className="backdrop-blur-xl bg-black/40 border border-white/20 rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-10 w-full max-w-[440px] relative overflow-hidden scale-[1.02] scale-x-125"
              style={{
                boxShadow: '0 8px 32px 0 rgba(0,0,0,0.6), inset 0 1px 0 0 rgba(255,255,255,0.1)'
              }}
            >
              <div className="absolute top-0 left-0 w-[100px] sm:w-[150px] h-[100px] sm:h-[150px] bg-white/20 rounded-full blur-[40px] sm:blur-[60px]" />
              <div className="absolute bottom-0 right-0 w-[100px] sm:w-[150px] h-[100px] sm:h-[150px] bg-white/20 rounded-full blur-[40px] sm:blur-[60px]" />

              <div className="relative z-10">
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8 text-center">
                  Presale Phase {phase.phase}
                </h3>

                <div className="space-y-4 sm:space-y-5 mb-6 sm:mb-8">
                  <div className="flex justify-between items-center gap-2">
                    <span className="text-white/80 text-sm sm:text-base whitespace-nowrap font-bold">Price</span>
                    <div className="flex-1 border-b border-dotted border-white/70 mb-1" />
                    <span className="text-white font-semibold text-base sm:text-lg whitespace-nowrap">${phase.price}</span>
                  </div>
                  <div className="flex justify-between items-center gap-2">
                    <span className="text-white/80 text-sm sm:text-base whitespace-nowrap font-bold">Cliff</span>
                    <div className="flex-1 border-b border-dotted border-white/70 mb-1" />
                    <span className="text-white font-semibold text-base sm:text-lg whitespace-nowrap">{phase.cliff}</span>
                  </div>
                  <div className="flex justify-between items-center gap-2">
                    <span className="text-white/80 text-sm sm:text-base whitespace-nowrap font-bold">Vesting</span>
                    <div className="flex-1 border-b border-dotted border-white/70 mb-1" />
                    <span className="text-white font-semibold text-base sm:text-lg whitespace-nowrap">{phase.vesting}</span>
                  </div>
                </div>

                <button
                  onClick={handleBuyNow}
                  className="w-full scale-[0.6] bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 sm:py-4 text-base sm:text-4xl rounded-lg transition-all duration-300"
                >
                  Buy Now
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
