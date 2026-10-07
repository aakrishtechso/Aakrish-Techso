import { motion } from "motion/react";
import { Check } from "lucide-react";

export const HowWeWorkSection = () => {
  const steps = [
    {
      stepNumber: "01 — Step 01",
      title: "Discover",
      subtitle: "Understand your business and requirements.",
      bullets: [
        "In-depth discussion on business objectives and target users",
        "Analysis of technical requirements and functional scope",
        "Transparent timeline, budget, and milestone roadmap"
      ]
    },
    {
      stepNumber: "02 — Step 02",
      title: "Plan",
      subtitle: "Create the structure and project plan.",
      bullets: [
        "Information architecture and user journey mapping",
        "Component blueprints and data flow planning",
        "Clear milestone deliverables and sign-off criteria"
      ]
    },
    {
      stepNumber: "03 — Step 03",
      title: "Build",
      subtitle: "Design and develop the solution.",
      bullets: [
        "Figma design system and ergonomic user experience",
        "Fast, responsive frontend with clean code",
        "Rigorous speed optimization and cross-device testing"
      ]
    },
    {
      stepNumber: "04 — Step 04",
      title: "Launch",
      subtitle: "Test, deploy, and deliver.",
      bullets: [
        "Production deployment with domain and security setup",
        "Complete code repository and asset ownership transfer",
        "Post-launch warranty support and team walkthrough"
      ]
    }
  ];

  return (
    <section
      id="how-we-work-section"
      className="py-20 sm:py-28 bg-white relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center px-3.5 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-[#F6F2FF] text-[#7C3AED] border border-[#E9D9FF]"
          >
            OUR PROCESS
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1E1B4B] font-display"
          >
            How We Work With You
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.16 }}
            className="text-base sm:text-lg text-[#64748B] leading-relaxed"
          >
            From the initial conversation to launch day and beyond, our process is clear, transparent, and structured around your goals.
          </motion.p>
        </div>

        {/* 4 Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.45, delay: idx * 0.1 }}
              className="group p-7 sm:p-9 rounded-3xl bg-[#FBFBFE] border border-[#E9D9FF] hover:border-[#A98BE3] hover:bg-white shadow-xs hover:shadow-xl hover:shadow-[#A98BE3]/10 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="inline-flex items-center text-xs font-mono font-bold text-[#7C3AED] bg-[#F6F2FF] border border-[#E9D9FF] px-3 py-1 rounded-full uppercase tracking-wider mb-4">
                  {step.stepNumber}
                </div>

                <h3 className="text-2xl font-bold text-[#1E1B4B] group-hover:text-[#7C3AED] transition-colors font-display tracking-tight mb-2">
                  {step.title}
                </h3>

                <p className="text-sm sm:text-base font-semibold text-[#1E1B4B] mb-5">
                  {step.subtitle}
                </p>

                <ul className="space-y-2.5 pt-4 border-t border-[#E9D9FF]/70">
                  {step.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2.5 text-sm text-[#475569]">
                      <div className="w-4 h-4 rounded-full bg-[#F6F2FF] text-[#7C3AED] flex items-center justify-center shrink-0 mt-0.5 border border-[#E9D9FF]">
                        <Check className="w-2.5 h-2.5" />
                      </div>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
