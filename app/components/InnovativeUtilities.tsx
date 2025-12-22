
'use client';

import { motion, Variants } from 'framer-motion';

// Utility to Feature index mapping (0-indexed)
const utilityFeatureMap: { [key: string]: number } = {
  'Wave Blockchain': 0,
  'Wave Crypto Exchange': 2,
  'Wave Payment Gateway': 3,
  'Crypto Gaming': 4,
  'AI Calling': 1
};

const containerVariants : Variants= {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.4, 0, 0.2, 1]
    }
  }
};

export default function InnovativeUtilities({ onFeatureClick }: { onFeatureClick: (featureIndex: number) => void }) {
  return (
    <motion.div
      id="utilities"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.1 }}
      variants={containerVariants}
      className="scale-[1] min-h-screen justify-self-center w-full max-w-[95%] sm:max-w-[90%] lg:max-w-[1200px] gap-3 sm:gap-4 px-4 sm:px-6 lg:px-10 py-8 sm:py-10 flex flex-col justify-center items-center z-10"
    >
      <div className="flex flex-col lg:flex-row w-full h-full gap-3 sm:gap-4">
        <div className="flex flex-col gap-3 sm:gap-4 w-full lg:w-[40%]">
          <motion.div variants={itemVariants} className="w-full h-[250px] sm:h-[300px] lg:h-[350px]">
            <TextBuilder
              heading="Wave Blockchain"
              description="EVM-compatible blockchain driving the foundation for all DeFi systems."
              className="absolute -bottom-2 sm:-bottom-[10px] md:-bottom-[15px] lg:bottom-[25px]"
              deepVideoClass="scale-[0.6] sm:scale-[0.4] md:scale-[0.5] lg:scale-[1.5]"
              MainclassName="overflow-hidden p-3 sm:p-5"
              video="/6.webm"
              onClick={() => onFeatureClick(utilityFeatureMap['Wave Blockchain'])}
            />
          </motion.div>
          <motion.div variants={itemVariants} className="w-full h-[200px] sm:h-[250px] lg:h-[calc(100%-350px)]">
            <TextBuilder heading="Wave Payment Gateway"
              description="Seamless blockchain gateway powering payments across every DeFi network."
              onClick={() => onFeatureClick(utilityFeatureMap['Wave Payment Gateway'])}
              />
          </motion.div>
        </div>
        <div className="flex flex-col w-full gap-3 sm:gap-4">
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full">
            <motion.div variants={itemVariants} className="w-full h-[180px] sm:h-[200px]">
              <TextBuilder
                heading="Wave Staking"
                description="Stake trusted tokens and expand your holdings with secure growth. Stake Crypto. Earn WAVE Tokens."
              />
            </motion.div>
            <motion.div variants={itemVariants} className="w-full h-[180px] sm:h-[200px]">
              <TextBuilder
                video="/4.webm"
                className="-bottom-[4%] right-[10%] transform h-[45%] absolute"
                MainclassName="overflow-hidden"
                heading="Wave FinLearn"
                description="From trading to tech, learn anytime with verified mentors. Courses that truly pay, literally."/>
            </motion.div>
          </div>
          <motion.div variants={itemVariants} className="w-full h-[250px] sm:h-[300px] lg:h-[340px]">
            <TextBuilder
              MainclassName="overflow-hidden"
              className=""
              deepVideoClass="scale-[0.7] tranform -translate-y-0 lg:-translate-y-3 2xl:-translate-y-5"
              video="/2.webm"
              heading="Wave Crypto Exchange" description="A complete trading experience for all users. Fast, secure, and low-cost — all in one place."
              onClick={() => onFeatureClick(utilityFeatureMap['Wave Crypto Exchange'])}
            />
          </motion.div>
        </div>
        <div className="flex flex-col gap-3 sm:gap-4 w-full lg:w-[40%]">
          <motion.div variants={itemVariants} className="w-full h-[250px] sm:h-[300px] lg:h-[350px]">
            <TextBuilder
              className="mt-5"
              deepVideoClass="scale-[2]"
              MainclassName="overflow-hidden p-3 sm:p-5"
              video="/3.webm"
              heading="Crypto Gaming"
              description="Gaming redefined. With Wave, your gameplay skills now bring real digital rewards."
              onClick={() => onFeatureClick(utilityFeatureMap['Crypto Gaming'])}
            />
          </motion.div>
          <motion.div variants={itemVariants} className="w-full h-[200px] sm:h-[250px] lg:h-[calc(100%-350px)]">
            <TextBuilder heading="AI Calling" description="Make effortless, silent AI-powered calls no speaking needed."
              onClick={() => onFeatureClick(utilityFeatureMap['AI Calling'])}
            />
          </motion.div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row w-full h-auto sm:h-[180px] overflow-hidden gap-3 sm:gap-4">
        <motion.div variants={itemVariants} className="w-full h-[200px] sm:h-full">
          <TextBuilder2 heading="Wave Money" description="Carry blockchain in your pocket. Wave Money unites digital assets and everyday utilities seamlessly."/>
        </motion.div>
        <motion.div variants={itemVariants} className="w-full h-[200px] sm:h-full">
          <TextBuilder2 heading="Wave Card" description="Turn your crypto into real-world power. Spend globally with one tap using Wave Card anywhere."
            video="/5-2.webm" className="h-[200%]"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}



const TextBuilder2 = ({ heading, description, MainclassName, video, className, onClick }: { heading: string, description: string, MainclassName?: string, video?: string, className?: string, onClick?: () => void }) => {
  return (
    <>
      <div 
        className={`grid grid-cols-1 sm:grid-cols-2 relative w-full h-full text-center justify-start bg-[#070d1e] border rounded-xl items-center p-3 sm:p-4 transition-all duration-300 ${onClick ? 'cursor-pointer hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/20' : ''} ${MainclassName}`}
        onClick={onClick}
      >
        <div className="flex text-start flex-col h-full p-3 sm:p-5">
        <h2 className="text-base sm:text-lg lg:text-xl font-bold text-white">{heading}</h2>
        <p className="text-white/70 text-xs sm:text-sm mt-2">{description}</p>
        </div>

        {video && (
              <div className={`${className} hidden sm:block`}>
                  <video
              src={video}
              className={`w-full h-full object-contain object-center rounded-t-xl mix-blend-screen `}
              autoPlay
              muted
              loop
              playsInline
              />
              </div>
            )}
      </div>
    </>
  )
}

const TextBuilder = ({ heading, description, MainclassName, video, className, deepVideoClass, onClick }: { heading: string, description: string, MainclassName?: string, video?: string, className?: string, deepVideoClass?: string, onClick?: () => void }) => {
  return (
    <>
      <div 
        className={`flex relative flex-col w-full h-full text-center justify-start bg-[#070d1e] border rounded-xl items-center p-3 sm:p-4 transition-all duration-300 ${onClick ? 'cursor-pointer hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/20' : ''} ${MainclassName}`}
        onClick={onClick}
      >
        <h2 className="text-base sm:text-lg lg:text-xl font-bold text-white">{heading}</h2>
        <p className="text-white/70 text-xs sm:text-sm mt-2">{description}</p>
        {video && (
              <div className={`${className} `}>
                  <video
              src={video}
              className={`w-full h-full object-contain object-center rounded-t-xl mix-blend-screen ${deepVideoClass} `}
              autoPlay
              muted
              loop
              playsInline
              />
              </div>
            )}
      </div>
    </>
  )
}