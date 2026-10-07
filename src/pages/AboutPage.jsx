import { motion } from "motion/react";
import {
  Target,
  Sparkles,
  Code2,
  TrendingUp,
  ShieldCheck,
  Layers,
  Zap,
  ArrowRight
} from "lucide-react";
import { COMPANY_INFO, COMPANY_STATS } from "../data/agencyData";
import { Button } from "../components/ui/Button";

export const AboutPage = () => {
  return (
    <div id="about-page" className="pt-28 pb-24 bg-white min-h-screen">
      {/* Page Header */}
      <section className="py-12 sm:py-16 text-center max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F6F2FF] border border-[#E9D9FF] text-xs font-semibold text-[#7C3AED] mb-4 shadow-xs"
        >
          <Layers className="w-3.5 h-3.5 text-[#A98BE3]" />
          <span>Our Story & Principles</span>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1E1B4B] tracking-tight font-display"
        >
          Engineered With Precision. Built For Longevity.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="mt-5 text-base sm:text-lg text-[#64748B] leading-relaxed max-w-2xl mx-auto"
        >
          We are an independent technology agency focused on building high-performance web applications, reliable custom software, and intuitive user experiences.
        </motion.p>
      </section>

      {/* Dynamic Animated Statistics Counters */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {COMPANY_STATS.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="p-6 rounded-2xl bg-[#F6F2FF]/60 border border-[#E9D9FF] text-center shadow-xs"
            >
              <div className="text-3xl sm:text-4xl font-extrabold text-[#7C3AED] font-display mb-1">
                {stat.value}
              </div>
              <div className="text-sm font-bold text-[#1E1B4B] mb-0.5">
                {stat.label}
              </div>
              <div className="text-xs text-[#64748B]">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Section 1: Who We Are */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl bg-gradient-to-br from-[#F6F2FF] to-white border border-[#E9D9FF] p-8 sm:p-12 lg:p-14 space-y-6 text-left shadow-xs"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-white text-[#7C3AED] border border-[#E9D9FF]">
            <span>Who We Are</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1E1B4B] font-display">
            A Dedicated Engineering & Design Studio
          </h2>
          <div className="space-y-4 text-base sm:text-lg text-[#64748B] leading-relaxed">
            <p>
              {COMPANY_INFO.name} was established on a simple premise: modern businesses deserve software that works reliably, loads instantly, and adapts smoothly as requirements grow.
            </p>
            <p className="text-sm sm:text-base">
              Instead of relying on heavy multi-tier corporate hierarchies or generic pre-packaged templates, we operate as a tight-knit technical partner. When you work with us, you collaborate directly with the engineers and UI designers who architect and write your code.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Section 2: Our Approach */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 text-left">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-4"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#F6F2FF] text-[#7C3AED] border border-[#E9D9FF]">
              <span>Our Approach</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1E1B4B] font-display">
              Business First, Code Second.
            </h2>
            <p className="text-sm sm:text-base text-[#64748B] leading-relaxed">
              We never start writing code until we deeply understand your core business model, target end-users, and operational bottlenecks.
            </p>
          </motion.div>

          <div className="lg:col-span-7 space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="p-6 rounded-2xl bg-white border border-[#E9D9FF] hover:border-[#A98BE3] transition-all space-y-2 shadow-xs hover:shadow-md"
            >
              <h3 className="text-base font-bold text-[#1E1B4B] flex items-center gap-2">
                <Target className="w-4 h-4 text-[#7C3AED]" />
                1. Deep Requirement Clarity
              </h3>
              <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                We identify edge cases, user friction points, and operational dependencies early in the discovery phase.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="p-6 rounded-2xl bg-white border border-[#E9D9FF] hover:border-[#A98BE3] transition-all space-y-2 shadow-xs hover:shadow-md"
            >
              <h3 className="text-base font-bold text-[#1E1B4B] flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#A98BE3]" />
                2. Intuitive & Ergonomic UX
              </h3>
              <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                We craft interfaces that require zero training manuals. Clean typography, predictable navigation, and zero unnecessary visual clutter.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="p-6 rounded-2xl bg-white border border-[#E9D9FF] hover:border-[#A98BE3] transition-all space-y-2 shadow-xs hover:shadow-md"
            >
              <h3 className="text-base font-bold text-[#1E1B4B] flex items-center gap-2">
                <Code2 className="w-4 h-4 text-[#7C3AED]" />
                3. Modern, Maintainable Stack
              </h3>
              <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                Type-safe TypeScript, robust relational databases, and decoupled UI layers that make future modifications effortless.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 3: Core Values */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 text-left">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#F6F2FF] text-[#7C3AED] border border-[#E9D9FF] mb-3">
            <span>Core Values</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1E1B4B] font-display">
            Why We Build
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#64748B]">
            The foundational standards that guide how we engineer products and treat client relationships.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="p-7 rounded-2xl bg-white border border-[#E9D9FF] hover:border-[#A98BE3] hover:shadow-lg hover:shadow-[#A98BE3]/10 transition-all space-y-3 shadow-xs"
          >
            <div className="w-10 h-10 rounded-xl bg-[#E9D9FF] border border-[#CDB7F6] flex items-center justify-center text-[#6D28D9]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[#1E1B4B]">Craft & Integrity</h3>
            <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
              We never take shortcuts that create future technical debt. We write clean, documented code that your team owns completely.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="p-7 rounded-2xl bg-white border border-[#E9D9FF] hover:border-[#A98BE3] hover:shadow-lg hover:shadow-[#A98BE3]/10 transition-all space-y-3 shadow-xs"
          >
            <div className="w-10 h-10 rounded-xl bg-[#E9D9FF] border border-[#CDB7F6] flex items-center justify-center text-[#6D28D9]">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[#1E1B4B]">Speed & Responsiveness</h3>
            <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
              We respect your timeline. We communicate proactively, hold scheduled milestone demos, and hit deadlines consistently.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="p-7 rounded-2xl bg-white border border-[#E9D9FF] hover:border-[#A98BE3] hover:shadow-lg hover:shadow-[#A98BE3]/10 transition-all space-y-3 shadow-xs"
          >
            <div className="w-10 h-10 rounded-xl bg-[#E9D9FF] border border-[#CDB7F6] flex items-center justify-center text-[#6D28D9]">
              <TrendingUp className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[#1E1B4B]">Long-Term Partnership</h3>
            <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
              We stand behind everything we build. Post-launch support and long-term evolutionary scaling are built into our model.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="mt-20 max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#F6F2FF] to-white border border-[#E9D9FF] space-y-4 shadow-sm"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1E1B4B] font-display">
            Ready to work with a dedicated engineering partner?
          </h2>
          <p className="text-sm text-[#64748B] max-w-lg mx-auto">
            Reach out today to discuss your next web application, website overhaul, or custom software project.
          </p>
          <div className="pt-2">
            <Button
              to="/lets-talk"
              variant="primary"
              size="md"
              icon={<ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />}
            >
              Let's Talk
            </Button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};
