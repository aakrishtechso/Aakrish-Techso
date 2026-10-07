import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus, ArrowRight, HelpCircle } from "lucide-react";
import { FAQ_DATA } from "../../data/agencyData";

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section
      id="faq-section"
      className="py-20 sm:py-24 bg-[#FBFBFE] border-t border-[#E9D9FF] relative overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14 space-y-3">
          <div className="inline-flex items-center px-3.5 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-[#F6F2FF] text-[#7C3AED] border border-[#E9D9FF]">
            Frequently Asked Questions
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1E1B4B] font-display">
            Everything You Need to Know
          </h2>
          <p className="text-sm sm:text-base text-[#64748B] leading-relaxed pt-1 max-w-xl mx-auto">
            Straight answers to common questions about timelines, code ownership, costs, and working with our engineering team.
          </p>
        </div>

        {/* Dynamic Smooth Accordion */}
        <div className="space-y-3.5">
          {FAQ_DATA.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={faq.id}
                id={`faq-item-${faq.id}`}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "bg-white border-[#A98BE3] shadow-md shadow-[#A98BE3]/10"
                    : "bg-white border-[#E9D9FF] hover:border-[#CDB7F6]"
                }`}
              >
                <button
                  type="button"
                  id={`faq-btn-${faq.id}`}
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 sm:px-8 py-5 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-[#1E1B4B] font-display">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? "bg-[#7C3AED] text-white rotate-180"
                        : "bg-[#F6F2FF] text-[#7C3AED] border border-[#E9D9FF]"
                    }`}
                  >
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${faq.id}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-6 sm:px-8 pb-6 text-sm sm:text-base text-[#64748B] leading-relaxed border-t border-[#F6F2FF] pt-4 font-normal">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Have another question? / Ask Us Directly */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mt-12 p-6 sm:p-8 rounded-2xl bg-[#F6F2FF] border border-[#E9D9FF] flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left"
        >
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-xl bg-white border border-[#E9D9FF] flex items-center justify-center text-[#7C3AED] shrink-0 shadow-2xs">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-[#1E1B4B] font-display">
                Have another question?
              </h3>
              <p className="text-xs sm:text-sm text-[#64748B]">
                We're happy to answer anything about your project goals.
              </p>
            </div>
          </div>

          <Link
            id="faq-ask-us-directly-btn"
            to="/lets-talk"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#7C3AED] hover:bg-[#6D28D9] text-white text-sm font-bold transition-all shadow-sm shadow-[#7C3AED]/20 hover:shadow-md cursor-pointer group shrink-0"
          >
            <span>Ask Us Directly</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
