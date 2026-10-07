import { motion } from "motion/react";
import { ShieldCheck, Zap, CalendarCheck, MessageSquare } from "lucide-react";

export const HighPerformanceSection = () => {
  const highlights = [
    {
      value: "100%",
      label: "Code & Asset Ownership",
      description: "Zero recurring agency fees",
      icon: ShieldCheck
    },
    {
      value: "<1s",
      label: "Average Page Load Speed",
      description: "Near-perfect Core Web Vitals",
      icon: Zap
    },
    {
      value: "100%",
      label: "On-Time Milestone Delivery",
      description: "Predictable fixed-scope timelines",
      icon: CalendarCheck
    },
    {
      value: "Direct",
      label: "Engineer Communication",
      description: "No middle-tier account layers",
      icon: MessageSquare
    }
  ];

  return (
    <section
      id="high-performance-section"
      className="py-20 sm:py-28 bg-[#F6F2FF]/40 border-y border-[#E9D9FF]/60 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Content */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 space-y-5">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center px-3.5 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-white text-[#7C3AED] border border-[#E9D9FF]"
          >
            OUR COMMITMENT
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1E1B4B] tracking-tight font-display leading-[1.15]"
          >
            Turning Ideas Into High-Performance Digital Products.
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.16 }}
            className="space-y-4 text-base sm:text-lg text-[#64748B] leading-relaxed pt-1"
          >
            <p>
              We help businesses transform ambitious concepts into intuitive digital reality. We believe exceptional digital products are defined by speed, clarity, and direct business results — not by layers of technical jargon or unnecessary meetings.
            </p>
            <p className="font-medium text-[#1E1B4B]">
              Every website, application, and store we craft is engineered with purposeful architecture, clear user pathways, and 100% client code ownership.
            </p>
          </motion.div>
        </div>

        {/* Four Clean Highlight Components */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="group p-6 sm:p-7 rounded-2xl bg-white border border-[#E9D9FF] hover:border-[#A98BE3] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl sm:text-4xl font-extrabold text-[#7C3AED] font-display tracking-tight">
                      {item.value}
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-[#F6F2FF] border border-[#E9D9FF] text-[#7C3AED] flex items-center justify-center">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>
                  <h3 className="text-base font-bold text-[#1E1B4B] mb-1.5 font-display">
                    {item.label}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
