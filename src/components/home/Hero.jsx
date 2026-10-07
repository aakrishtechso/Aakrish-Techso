import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/Button";

export const Hero = () => {
  return (
    <section id="hero-section" className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-white text-center">
      {/* Subtle ambient light accents in brand purple */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[380px] bg-[#E9D9FF]/35 rounded-full blur-[130px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-[#F6F2FF] rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#1E1B4B] leading-[1.12] font-display"
        >
          We Build Digital Experiences That Move Businesses Forward.
        </motion.h1>

        {/* Supporting Text */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.15, ease: "easeOut" }}
          className="text-lg sm:text-xl text-[#64748B] leading-relaxed max-w-2xl mx-auto font-normal"
        >
          We design and develop modern websites, applications, AI automation, and marketing strategies built around your business goals.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.25, ease: "easeOut" }}
          className="flex flex-wrap items-center justify-center gap-4 pt-2"
        >
          <Button
            id="hero-lets-talk-btn"
            to="/lets-talk"
            variant="primary"
            size="lg"
            icon={<ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />}
          >
            Let's Talk
          </Button>

          <Button
            id="hero-explore-services-btn"
            to="/services"
            variant="secondary"
            size="lg"
          >
            Explore Services
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
