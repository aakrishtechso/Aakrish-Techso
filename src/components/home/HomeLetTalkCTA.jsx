import { Link } from "react-router-dom";
import { ArrowRight, MessageSquare, PhoneCall } from "lucide-react";
import { motion } from "motion/react";
import { COMPANY_INFO } from "../../data/agencyData";

export const HomeLetTalkCTA = () => {
  return (
    <section id="home-let-talk-cta" className="py-20 sm:py-24 bg-white relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="relative rounded-3xl bg-gradient-to-br from-[#F6F2FF] via-white to-[#F6F2FF] border border-[#E9D9FF] p-8 sm:p-14 text-center shadow-lg shadow-[#A98BE3]/10 overflow-hidden"
        >
          {/* Subtle accent glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#E9D9FF]/40 rounded-full blur-3xl pointer-events-none -z-10" />

          <div className="max-w-2xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-white text-[#7C3AED] border border-[#E9D9FF]">
              <MessageSquare className="w-3.5 h-3.5 text-[#7C3AED]" />
              <span>START A CONVERSATION</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1E1B4B] font-display tracking-tight">
              Ready to Build Your Next Digital Product?
            </h2>

            <p className="text-base sm:text-lg text-[#64748B] leading-relaxed">
              Tell us what you want to build, redesign, automate, or grow. We'll give you a straight answer, clear timeline, and direct engineering guidance.
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <Link
                id="cta-lets-talk-btn"
                to="/lets-talk"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-[#7C3AED] hover:bg-[#6D28D9] text-white text-base font-bold transition-all shadow-md shadow-[#7C3AED]/20 hover:shadow-lg hover:shadow-[#7C3AED]/30 hover:-translate-y-0.5 cursor-pointer group"
              >
                <span>Let's Talk</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <a
                id="cta-call-direct-btn"
                href={`tel:${COMPANY_INFO.phoneNumbers?.[0]?.number || "9691822276"}`}
                className="inline-flex items-center gap-2 px-6 py-4 rounded-xl bg-white border border-[#E9D9FF] hover:border-[#A98BE3] hover:bg-[#F6F2FF] text-[#1E1B4B] hover:text-[#7C3AED] text-base font-bold transition-all shadow-xs cursor-pointer"
              >
                <PhoneCall className="w-4 h-4 text-[#7C3AED]" />
                <span>Call Us Directly</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
