import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight, ArrowDownRight, CheckCircle2 } from "lucide-react";
import { PROBLEM_SOLUTIONS } from "../../data/agencyData";

export const ProblemSolutionSection = () => {
  const [selectedId, setSelectedId] = useState(PROBLEM_SOLUTIONS[0].id);

  return (
    <section id="problem-solution-section" className="py-20 sm:py-24 bg-white border-t border-[#E9D9FF] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="flex items-center justify-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-[#7C3AED] mb-3"
          >
            <span>Problems We Solve</span>
            <span aria-hidden="true" className="text-[#CDB7F6]">·</span>
            <span>Immediate ROI</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1E1B4B] tracking-tight font-display"
          >
            Have a problem? We can build the solution.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.15 }}
            className="mt-3 text-base sm:text-lg text-[#64748B]"
          >
            Identify your primary bottleneck. We build technology tailored directly to your commercial outcome.
          </motion.p>
        </div>

        {/* 6 Problem-Solution Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {PROBLEM_SOLUTIONS.map((item, idx) => {
            const isSelected = selectedId === item.id;

            return (
              <motion.div
                key={item.id}
                id={`problem-card-${item.id}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                onClick={() => setSelectedId(item.id)}
                className={`group rounded-2xl p-6 sm:p-7 border transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? "bg-[#F6F2FF]/80 border-[#7C3AED] shadow-md ring-1 ring-[#7C3AED]/30 -translate-y-1"
                    : "bg-white border-[#E9D9FF] hover:border-[#A98BE3] hover:shadow-xs"
                }`}
              >
                <div>
                  {/* Problem Statement */}
                  <div className="flex items-center justify-between text-xs font-mono text-[#94A3B8] mb-3">
                    <span>Issue 0{idx + 1}</span>
                    <ArrowDownRight className={`w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5 ${isSelected ? "text-[#7C3AED]" : "text-[#94A3B8]"}`} />
                  </div>

                  <h3 className="text-lg font-bold text-[#1E1B4B] font-display mb-3">
                    "{item.problem}"
                  </h3>

                  {/* Solution Highlight */}
                  <div className="pt-3 border-t border-[#E9D9FF]/70">
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-xs font-mono text-[#7C3AED] font-bold">→</span>
                      <span className="text-base font-extrabold text-[#7C3AED] font-display">
                        {item.solution}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed mb-4">
                      {item.tagline}
                    </p>

                    <div className="flex items-center gap-1.5 text-xs text-[#475569] font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0" />
                      <span>{item.stats}</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Contextual Link */}
                <div className="mt-6 pt-3 border-t border-[#E9D9FF]/70">
                  <Link
                    to={`/contact?service=${encodeURIComponent(item.serviceTarget)}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#7C3AED] group-hover:text-[#6D28D9] transition-colors"
                  >
                    <span>{item.actionLabel}</span>
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
