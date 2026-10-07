import { Check, AlertCircle, ArrowRight, TrendingUp, Users, Target } from "lucide-react";

export const ServiceBusinessSpecs = ({ service }) => {
  return (
    <div className="space-y-8 pt-4">
      {/* 1. Who It's For & Problem/Solution Matrix */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* The Business Problem */}
        {service.theProblem && (
          <div className="p-5 sm:p-6 rounded-2xl bg-slate-50/80 border border-slate-200/90 text-left space-y-2">
            <div className="flex items-center gap-2 text-rose-700 text-xs font-mono font-bold uppercase tracking-wider">
              <AlertCircle className="w-4 h-4" />
              <span>The Problem in Business</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {service.theProblem}
            </p>
          </div>
        )}

        {/* The Aakrish Solution */}
        {service.theSolution && (
          <div className="p-5 sm:p-6 rounded-2xl bg-[#F6F2FF] border border-[#CDB7F6] text-left space-y-2">
            <div className="flex items-center gap-2 text-[#7C3AED] text-xs font-mono font-bold uppercase tracking-wider">
              <Check className="w-4 h-4" />
              <span>The Aakrish Solution</span>
            </div>
            <p className="text-xs sm:text-sm text-[#1E1B4B] leading-relaxed">
              {service.theSolution}
            </p>
          </div>
        )}
      </div>

      {/* Target Audience / Who It's For */}
      {service.whoItsFor && (
        <div className="p-4 sm:p-5 rounded-2xl bg-white border border-[#E9D9FF] flex flex-col sm:flex-row sm:items-center gap-3 text-left">
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase text-[#7C3AED] shrink-0">
            <Users className="w-4 h-4" />
            <span>Target Profile:</span>
          </div>
          <p className="text-xs sm:text-sm text-[#475569]">
            {service.whoItsFor}
          </p>
        </div>
      )}

      {/* 2. Realistic Step-by-Step Workflow Pipeline */}
      {service.workflow && service.workflow.length > 0 && (
        <div className="space-y-3 text-left">
          <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#1E1B4B] flex items-center justify-between">
            <span>Realistic Production Workflow</span>
            <span className="text-[11px] text-[#7C3AED] font-mono">Step-by-Step Execution</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {service.workflow.map((item, idx) => (
              <div
                key={idx}
                className="relative p-4 rounded-xl bg-white border border-[#E9D9FF] hover:border-[#A98BE3] transition-colors space-y-2 shadow-2xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-mono font-extrabold text-[#7C3AED] bg-[#F6F2FF] px-2 py-0.5 rounded">
                      {item.step}
                    </span>
                    {idx < service.workflow.length - 1 && (
                      <span className="hidden lg:inline text-slate-300 font-mono text-xs">→</span>
                    )}
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#1E1B4B] font-display">
                    {item.label}
                  </h4>
                </div>
                <p className="text-[11px] text-[#64748B] leading-snug">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 3. What Aakrish Can Build (Concrete Capabilities) */}
      {service.whatAakrishBuilds && service.whatAakrishBuilds.length > 0 && (
        <div className="p-5 sm:p-6 rounded-2xl bg-white border border-[#E9D9FF] text-left space-y-4">
          <div className="flex items-center justify-between border-b border-[#F6F2FF] pb-3">
            <h4 className="text-xs sm:text-sm font-mono font-bold uppercase tracking-wider text-[#1E1B4B] flex items-center gap-2">
              <Target className="w-4 h-4 text-[#7C3AED]" />
              <span>What Aakrish Can Build For You</span>
            </h4>
            <span className="text-[11px] font-mono text-[#64748B]">
              Custom Engineering & Architecture
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {service.whatAakrishBuilds.map((item, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#334155]">
                <div className="w-4 h-4 rounded-full bg-[#F6F2FF] border border-[#CDB7F6] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-2.5 h-2.5 text-[#7C3AED]" />
                </div>
                <span className="font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 4. How It Helps The Business (Measurable Results) */}
      {service.howItHelps && service.howItHelps.length > 0 && (
        <div className="text-left space-y-3">
          <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#1E1B4B] flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-[#7C3AED]" />
            <span>Measurable Business Impact</span>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {service.howItHelps.map((metricItem, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-white border border-[#E9D9FF] space-y-1 shadow-2xs hover:border-[#A98BE3] transition-colors"
              >
                <div className="text-xl sm:text-2xl font-extrabold text-[#7C3AED] font-display">
                  {metricItem.metric}
                </div>
                <div className="text-xs font-bold text-[#1E1B4B]">
                  {metricItem.label}
                </div>
                <div className="text-[11px] text-[#64748B] leading-tight">
                  {metricItem.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
