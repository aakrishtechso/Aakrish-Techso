import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight, Globe, RefreshCw, Smartphone, TrendingUp, Bot, Instagram } from "lucide-react";

export const ServiceCard = ({ service, mode = "full", index = 0 }) => {
  const getIcon = (name) => {
    switch (name) {
      case "Globe":
        return <Globe className="w-5 h-5" />;
      case "RefreshCw":
        return <RefreshCw className="w-5 h-5" />;
      case "Smartphone":
        return <Smartphone className="w-5 h-5" />;
      case "TrendingUp":
        return <TrendingUp className="w-5 h-5" />;
      case "Bot":
        return <Bot className="w-5 h-5" />;
      case "Instagram":
        return <Instagram className="w-5 h-5" />;
      default:
        return <Globe className="w-5 h-5" />;
    }
  };

  const isPreview = mode === "preview";

  return (
    <motion.div
      id={`service-card-${service.slug}`}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.4, delay: index * 0.06, ease: "easeOut" }}
      className="group relative rounded-2xl bg-white border border-[#E9D9FF] hover:border-[#A98BE3] transition-all duration-300 p-7 sm:p-8 flex flex-col justify-between shadow-2xs hover:shadow-lg hover:-translate-y-1 text-left"
    >
      <div>
        {/* Top: Service Number & Icon */}
        <div className="flex items-center justify-between mb-6">
          <span className="text-2xl sm:text-3xl font-mono font-extrabold text-[#CDB7F6] group-hover:text-[#7C3AED] transition-colors duration-300">
            {service.number}
          </span>
          <div className="w-10 h-10 rounded-xl bg-[#F6F2FF] border border-[#E9D9FF] group-hover:border-[#CDB7F6] flex items-center justify-center text-[#7C3AED] transition-all duration-300 shadow-2xs">
            {getIcon(service.iconName)}
          </div>
        </div>

        {/* Service Title */}
        <h3 className="text-xl sm:text-2xl font-bold text-[#1E1B4B] group-hover:text-[#7C3AED] transition-colors duration-200 font-display mb-3">
          {service.title}
        </h3>

        {/* Description: Short for preview on home, full professional paragraph on services */}
        <p className={`text-[#64748B] leading-relaxed font-normal ${isPreview ? "text-sm sm:text-base line-clamp-3 mb-6" : "text-sm sm:text-base mb-6"}`}>
          {isPreview ? service.shortDescription : service.fullDescription}
        </p>
      </div>

      {/* Action: Discuss Service */}
      <div className="pt-4 border-t border-[#F6F2FF]">
        <Link
          id={`discuss-service-${service.slug}`}
          to={`/lets-talk?service=${encodeURIComponent(service.title)}`}
          className="inline-flex items-center gap-2 text-sm font-bold text-[#7C3AED] hover:text-[#6D28D9] group-hover:translate-x-1 transition-all duration-200"
        >
          <span>Discuss Service</span>
          <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
        </Link>
      </div>
    </motion.div>
  );
};
