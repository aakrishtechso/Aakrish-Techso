import { motion } from "motion/react";
import { Zap, Target, Lock, ArrowUpRight } from "lucide-react";
import { COMPANY_STATS } from "../../data/agencyData";

export const IntroSection = () => {
  return (
    <section id="intro-section" className="py-20 sm:py-28 bg-[#F6F2FF]/60 border-y border-[#E9D9FF] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 space-y-4"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-white text-[#7C3AED] border border-[#E9D9FF] shadow-xs">
              <span>Our Philosophy</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1E1B4B] leading-tight font-display">
              Turning Ideas Into High-Performance Digital Products.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-6 space-y-4 text-[#64748B] text-base sm:text-lg leading-relaxed"
          >
            <p>
              We help businesses transform ambitious concepts into intuitive digital reality. We believe exceptional digital products are defined by speed, clarity, and direct business results — not by layers of technical jargon or unnecessary meetings.
            </p>
            <p className="text-sm sm:text-base text-[#475569]">
              Every website, application, and digital solution we craft is engineered with purposeful architecture, clear user pathways, and dedicated engineering commitment.
            </p>
          </motion.div>
        </div>

        {/* Dynamic Animated Statistics Counters */}
        <div className="mt-14 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {COMPANY_STATS.map((stat, idx) => (
            <motion.div
              key={idx}
              id={`stat-card-${idx}`}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="p-6 rounded-2xl bg-white border border-[#E9D9FF] hover:border-[#A98BE3] transition-all text-center shadow-xs hover:shadow-md"
            >
              <div className="text-3xl sm:text-4xl font-extrabold text-[#7C3AED] font-display mb-1">
                {stat.value}
              </div>
              <div className="text-sm font-bold text-[#1E1B4B] mb-1">
                {stat.label}
              </div>
              <div className="text-xs text-[#64748B]">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
