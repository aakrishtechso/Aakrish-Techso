import { SERVICES_CATALOG } from "../data/servicesData";
import { ServiceCard } from "../components/services/ServiceCard";
import { FAQSection } from "../components/home/FAQSection";
import { motion } from "motion/react";

export const ServicesPage = () => {
  return (
    <div id="services-page" className="min-h-screen bg-white pt-32 pb-0 lg:pt-36">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header Section */}
        <section className="text-center max-w-4xl mx-auto mb-16 sm:mb-20 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center px-3.5 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-[#F6F2FF] text-[#7C3AED] border border-[#E9D9FF]"
          >
            WHAT WE DO
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1E1B4B] tracking-tight font-display leading-[1.15]"
          >
            Digital Solutions Built to Move Your Business Forward.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.16 }}
            className="text-base sm:text-lg text-[#64748B] leading-relaxed max-w-3xl mx-auto font-normal pt-1"
          >
            Build, redesign, automate, and grow your digital presence with modern technology, thoughtful design, and measurable marketing strategies.
          </motion.p>
        </section>

        {/* All Services Components */}
        <section id="services-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 pb-20 sm:pb-28">
          {SERVICES_CATALOG.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
              isHomepage={false}
            />
          ))}
        </section>
      </div>

      {/* Frequently Asked Questions + Have another question? / Ask Us Directly */}
      <FAQSection />
    </div>
  );
};
