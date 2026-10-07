import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import { motion } from "motion/react";

export const ServiceCard = ({ service, index = 0, isHomepage = false }) => {
  if (isHomepage) {
    return (
      <motion.div
        id={`home-service-card-${service.slug}`}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-30px" }}
        transition={{ duration: 0.4, delay: index * 0.06 }}
        className="group relative rounded-2xl bg-white border border-[#E9D9FF] hover:border-[#A98BE3] p-6 sm:p-7 flex flex-col justify-between shadow-xs hover:shadow-lg hover:shadow-[#A98BE3]/10 hover:-translate-y-1 transition-all duration-300"
      >
        <div>
          <div className="flex items-center justify-between mb-3.5">
            <span className="text-xs font-mono font-bold text-[#7C3AED] bg-[#F6F2FF] border border-[#E9D9FF] px-2.5 py-0.5 rounded-full uppercase tracking-wider">
              {service.number}
            </span>
          </div>

          <h3 className="text-lg sm:text-xl font-bold text-[#1E1B4B] group-hover:text-[#7C3AED] transition-colors font-display tracking-tight mb-2.5">
            {service.title}
          </h3>

          <p className="text-sm text-[#64748B] leading-relaxed font-normal">
            {service.shortDescription}
          </p>
        </div>

        <div className="pt-4 mt-4 border-t border-[#F6F2FF] flex items-center justify-between text-xs font-semibold text-[#7C3AED]">
          <Link
            to={`/lets-talk?service=${encodeURIComponent(service.title)}`}
            className="inline-flex items-center gap-1.5 hover:text-[#6D28D9] transition-colors group/link"
          >
            <span>Learn More & Inquire</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
          </Link>
        </div>
      </motion.div>
    );
  }

  // Detailed Services page card based on Section 9 & 10 design
  return (
    <motion.div
      id={`service-detail-${service.slug}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      className="group relative rounded-3xl bg-white border border-[#E9D9FF] hover:border-[#A98BE3] p-7 sm:p-9 flex flex-col justify-between shadow-xs hover:shadow-xl hover:shadow-[#A98BE3]/10 hover:-translate-y-1 transition-all duration-300"
    >
      <div className="space-y-6">
        {/* Header Tag & Title */}
        <div>
          <div className="inline-flex items-center text-xs font-mono font-bold text-[#7C3AED] bg-[#F6F2FF] border border-[#E9D9FF] px-3 py-1 rounded-full uppercase tracking-wider mb-3.5">
            {service.tag}
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1E1B4B] group-hover:text-[#7C3AED] transition-colors font-display tracking-tight mb-3">
            {service.title}
          </h2>
          <p className="text-sm sm:text-base text-[#64748B] leading-relaxed">
            {service.description}
          </p>
        </div>

        {/* What We Do */}
        <div className="pt-2 border-t border-[#F6F2FF]">
          <h4 className="text-xs font-bold text-[#1E1B4B] uppercase tracking-wider mb-3">
            What We Do
          </h4>
          <ul className="space-y-2">
            {service.whatWeDo.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-sm text-[#475569]">
                <div className="w-4 h-4 rounded-full bg-[#F6F2FF] text-[#7C3AED] flex items-center justify-center shrink-0 mt-0.5 border border-[#E9D9FF]">
                  <Check className="w-2.5 h-2.5" />
                </div>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Key Deliverables */}
        <div className="pt-2 border-t border-[#F6F2FF]">
          <h4 className="text-xs font-bold text-[#1E1B4B] uppercase tracking-wider mb-3">
            Key Deliverables
          </h4>
          <div className="grid grid-cols-2 gap-2">
            {service.keyDeliverables.map((deliverable, idx) => (
              <div
                key={idx}
                className="px-3 py-2 rounded-xl bg-[#FBFBFE] border border-[#E9D9FF] text-xs font-medium text-[#1E1B4B] flex items-center"
              >
                {deliverable}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Discuss Your Project Action Button */}
      <div className="pt-6 mt-6 border-t border-[#F6F2FF]">
        <Link
          id={`discuss-project-${service.slug}`}
          to={`/lets-talk?service=${encodeURIComponent(service.title)}`}
          className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#7C3AED] hover:bg-[#6D28D9] text-white text-sm font-bold transition-all shadow-sm shadow-[#7C3AED]/20 hover:shadow-md hover:shadow-[#7C3AED]/30 group/btn cursor-pointer"
        >
          <span>Discuss Your Project</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
        </Link>
      </div>
    </motion.div>
  );
};
