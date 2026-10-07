import { useState } from "react";
import { motion } from "motion/react";
import { SectionHeading } from "../ui/SectionHeading";
import { PROCESS_STEPS } from "../../data/agencyData";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "../ui/Button";

export const ProcessSection = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="process-section" className="py-20 sm:py-28 bg-white border-t border-[#E9D9FF] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeading
            badge="Simple 4-Step Process"
            title="How We Work With You"
            subtitle="From the initial conversation to launch day and beyond, our process is clear, transparent, and structured around your goals."
            align="center"
          />
        </motion.div>

        {/* 4-step process grid */}
        <div className="mt-14 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROCESS_STEPS.map((step, index) => {
            const isCurrent = activeStep === index;

            return (
              <motion.div
                key={step.number}
                id={`process-step-${step.number}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
                onClick={() => setActiveStep(index)}
                className={`cursor-pointer rounded-2xl p-7 transition-all duration-300 flex flex-col justify-between border ${
                  isCurrent
                    ? "bg-white border-[#A98BE3] shadow-xl shadow-[#A98BE3]/15 ring-2 ring-[#A98BE3]/30 -translate-y-1.5"
                    : "bg-[#F6F2FF]/60 border-[#E9D9FF] hover:border-[#CDB7F6] hover:bg-white hover:-translate-y-1 shadow-xs"
                }`}
              >
                <div>
                  {/* Top Step Pill & Number */}
                  <div className="flex items-center justify-between mb-5">
                    <span
                      className={`text-3xl font-mono font-extrabold transition-colors ${
                        isCurrent ? "text-[#7C3AED]" : "text-[#CDB7F6]"
                      }`}
                    >
                      {step.number}
                    </span>
                    <span
                      className={`text-[11px] font-mono px-2.5 py-0.5 rounded-full uppercase tracking-wider ${
                        isCurrent
                          ? "bg-[#E9D9FF] text-[#6D28D9] font-semibold"
                          : "bg-white text-[#64748B] border border-[#E9D9FF]"
                      }`}
                    >
                      Step 0{index + 1}
                    </span>
                  </div>

                  <h3
                    className={`text-xl font-bold mb-2.5 transition-colors font-display ${
                      isCurrent ? "text-[#1E1B4B]" : "text-[#334155]"
                    }`}
                  >
                    {step.title}
                  </h3>

                  <p className="text-sm text-[#64748B] leading-relaxed mb-6">
                    {step.description}
                  </p>
                </div>

                {/* Sub-deliverables list */}
                <div className="pt-4 border-t border-[#E9D9FF] space-y-2.5">
                  {step.details.map((detail, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-[#475569]">
                      <CheckCircle2
                        className={`w-4 h-4 shrink-0 mt-0.5 transition-colors ${
                          isCurrent ? "text-[#7C3AED]" : "text-[#A98BE3]"
                        }`}
                      />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Action Prompt */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-14 p-7 sm:p-9 rounded-2xl bg-gradient-to-r from-[#F6F2FF] to-white border border-[#E9D9FF] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs"
        >
          <div>
            <h4 className="text-xl sm:text-2xl font-bold text-[#1E1B4B] font-display">
              Ready to start your next milestone?
            </h4>
            <p className="text-sm sm:text-base text-[#64748B] mt-1.5 max-w-xl">
              Tell us what you want to achieve. We provide transparent scoping, fixed timelines, and weekly updates.
            </p>
          </div>
          <Button
            id="process-start-project-btn"
            to="/lets-talk"
            variant="primary"
            size="md"
            icon={<ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />}
          >
            Let's Talk
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
