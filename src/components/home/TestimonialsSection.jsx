import { motion } from "motion/react";
import { Star, TrendingUp } from "lucide-react";
import { TESTIMONIALS_DATA } from "../../data/agencyData";

export const TestimonialsSection = () => {
  return (
    <section id="testimonials-section" className="py-20 sm:py-24 bg-[#F6F2FF]/40 border-t border-[#E9D9FF] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-[#7C3AED] mb-2">
            <span>Client Results</span>
            <span aria-hidden="true" className="text-[#CDB7F6]">·</span>
            <span>Verified Outcomes</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1E1B4B] tracking-tight font-display">
            Trusted by Growing Businesses.
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#64748B]">
            Measurable return on investment and clear engineering communication.
          </p>
        </div>

        {/* Dynamic Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TESTIMONIALS_DATA.map((t, index) => (
            <motion.div
              key={t.id}
              id={`testimonial-card-${t.id}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="bg-white rounded-2xl border border-[#E9D9FF] p-7 sm:p-8 flex flex-col justify-between hover:border-[#A98BE3] transition-all shadow-2xs hover:shadow-sm text-left"
            >
              <div>
                {/* Rating + Unboxed Metric */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#F59E0B] text-[#F59E0B]" />
                    ))}
                  </div>

                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#7C3AED] font-mono">
                    <TrendingUp className="w-3.5 h-3.5 text-[#7C3AED]" />
                    <span>{t.metrics}</span>
                  </div>
                </div>

                {/* Quote */}
                <p className="text-base sm:text-lg text-[#1E1B4B] leading-relaxed mb-6 font-normal">
                  "{t.quote}"
                </p>
              </div>

              {/* Author Info: clean unboxed metadata */}
              <div className="pt-4 border-t border-[#F6F2FF] flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-[#1E1B4B] font-display">
                    {t.clientName}
                  </h4>
                  <div className="text-xs text-[#64748B]">
                    <span>{t.role}</span>
                    <span aria-hidden="true" className="mx-1 text-[#CDB7F6]">·</span>
                    <span className="text-[#7C3AED] font-medium">{t.company}</span>
                  </div>
                </div>

                <span className="text-xs font-mono text-[#94A3B8]">
                  {t.projectType}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

