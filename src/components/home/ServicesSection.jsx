import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { SERVICES_CATALOG } from "../../data/servicesData";
import { ServiceCard } from "../services/ServiceCard";

export const ServicesSection = () => {
  return (
    <section id="services-section" className="py-20 sm:py-28 bg-[#F6F2FF]/40 border-y border-[#E9D9FF]/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16 space-y-3">
          <div className="inline-flex items-center px-3.5 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-white text-[#7C3AED] border border-[#E9D9FF]">
            WHAT WE DO
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1E1B4B] font-display">
            Our Services
          </h2>
          <p className="text-base sm:text-lg text-[#64748B] leading-relaxed">
            Thoughtful design, modern development, and measurable marketing built around your business goals.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {SERVICES_CATALOG.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
              isHomepage={true}
            />
          ))}
        </div>

        {/* See More Services CTA */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mt-14 text-center"
        >
          <Link
            id="see-more-services-btn"
            to="/services"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-xl bg-white border border-[#E9D9FF] hover:border-[#A98BE3] hover:bg-[#F6F2FF] text-sm font-bold text-[#1E1B4B] hover:text-[#7C3AED] transition-all shadow-xs hover:shadow-md hover:-translate-y-0.5 group"
          >
            <span>See More Services</span>
            <ArrowRight className="w-4 h-4 text-[#7C3AED] transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
