import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "../ui/Button";

export const FinalCTA = () => {
  return (
    <section id="final-cta-section" className="py-24 bg-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#E9D9FF]/20 to-transparent pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[320px] bg-[#E9D9FF]/30 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-3xl bg-gradient-to-b from-[#F6F2FF] to-white border border-[#E9D9FF] p-8 sm:p-12 lg:p-16 text-center space-y-6 shadow-xl relative overflow-hidden">
          {/* Top badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E9D9FF] text-xs font-semibold text-[#7C3AED] shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#A98BE3]" />
            <span>Ready To Get Started?</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#1E1B4B] leading-tight font-display max-w-3xl mx-auto">
            Have an idea? Let's turn it into something real.
          </h2>

          {/* Supporting text */}
          <p className="text-base sm:text-lg text-[#64748B] leading-relaxed max-w-2xl mx-auto font-normal">
            Tell us about your project and let's discuss how we can bring it to life. We review all inquiries within 24 hours.
          </p>

          {/* Action Buttons */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              id="cta-start-conversation-btn"
              to="/lets-talk"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Let's Talk
            </Button>
            <Button
              id="cta-view-services-btn"
              to="/services"
              variant="secondary"
              size="lg"
            >
              Explore Services
            </Button>
          </div>

          {/* Reassurance text */}
          <p className="text-xs text-[#94A3B8] pt-2">
            No obligations • Free initial architectural consult • Transparent milestones
          </p>
        </div>
      </div>
    </section>
  );
};
