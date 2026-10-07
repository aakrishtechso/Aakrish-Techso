import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight, ArrowDown, Bot, CheckCircle, Database, Repeat, CalendarCheck, PhoneMissed, MessageCircle, UserPlus, Zap } from "lucide-react";
import { WORKFLOWS_DATA } from "../../data/agencyData";
import { Button } from "../ui/Button";

export const BusinessAutomationSection = () => {
  const [selectedWorkflowId, setSelectedWorkflowId] = useState("lead-pipeline");

  const getWorkflowIcon = (iconName, className) => {
    switch (iconName) {
      case "UserPlus":
        return <UserPlus className={className} />;
      case "Bot":
        return <Bot className={className} />;
      case "CheckCircle":
        return <CheckCircle className={className} />;
      case "Database":
        return <Database className={className} />;
      case "Repeat":
        return <Repeat className={className} />;
      case "CalendarCheck":
        return <CalendarCheck className={className} />;
      case "PhoneMissed":
        return <PhoneMissed className={className} />;
      case "MessageCircle":
        return <MessageCircle className={className} />;
      default:
        return <Zap className={className} />;
    }
  };

  return (
    <section id="business-automation-section" className="py-20 sm:py-24 bg-[#F6F2FF]/50 border-t border-[#E9D9FF] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-[#7C3AED] mb-3">
            <span>Visual Pipelines</span>
            <span aria-hidden="true" className="text-[#CDB7F6]">·</span>
            <span>Zero Manual Busywork</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1E1B4B] tracking-tight font-display">
            Business Automation Workflows.
          </h2>

          <p className="mt-3 text-base sm:text-lg text-[#64748B]">
            Connect your customer channels directly into automated fulfillment, CRM updates, and calendar bookings.
          </p>
        </div>

        {/* Workflow Switcher Tabs */}
        <div className="flex items-center justify-center gap-2 mb-10">
          {WORKFLOWS_DATA.map((wf) => (
            <button
              key={wf.id}
              type="button"
              onClick={() => setSelectedWorkflowId(wf.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                selectedWorkflowId === wf.id
                  ? "bg-[#7C3AED] text-white shadow-sm"
                  : "bg-white text-[#64748B] border border-[#E9D9FF] hover:border-[#A98BE3]"
              }`}
            >
              {wf.title}
            </button>
          ))}
        </div>

        {/* Active Workflow Diagram Card */}
        {WORKFLOWS_DATA.filter((wf) => wf.id === selectedWorkflowId).map((wf) => (
          <div
            key={wf.id}
            className="rounded-2xl border border-[#E9D9FF] bg-white p-6 sm:p-10 shadow-lg text-left"
          >
            <div className="max-w-2xl mb-8">
              <h3 className="text-xl sm:text-2xl font-bold text-[#1E1B4B] font-display">
                {wf.title}
              </h3>
              <p className="text-sm text-[#64748B] mt-1">
                {wf.description}
              </p>
            </div>

            {/* Stepped Workflow Pipeline: Desktop horizontal row, mobile vertical */}
            <div className="hidden lg:grid grid-cols-6 gap-3 items-center">
              {wf.steps.map((st, sIdx) => {
                const isLast = sIdx === wf.steps.length - 1;
                return (
                  <div key={st.name} className="relative flex flex-col items-center text-center">
                    <div className="w-14 h-14 rounded-2xl bg-[#F6F2FF] border border-[#E9D9FF] flex items-center justify-center text-[#7C3AED] shadow-2xs mb-3 transition-transform hover:scale-105">
                      {getWorkflowIcon(st.icon, "w-6 h-6")}
                    </div>
                    <div className="font-display font-bold text-sm text-[#1E1B4B]">
                      {st.name}
                    </div>
                    <div className="text-[11px] text-[#64748B] mt-1 leading-snug">
                      {st.role}
                    </div>

                    {!isLast && (
                      <div className="absolute -right-3.5 top-5 text-[#CDB7F6] font-bold">
                        →
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Mobile Vertical Flow */}
            <div className="lg:hidden space-y-4">
              {wf.steps.map((st, sIdx) => {
                const isLast = sIdx === wf.steps.length - 1;
                return (
                  <div key={st.name} className="flex flex-col items-center">
                    <div className="w-full flex items-center gap-4 p-3.5 rounded-xl border border-[#E9D9FF] bg-[#F6F2FF]/40">
                      <div className="w-10 h-10 rounded-xl bg-white border border-[#E9D9FF] flex items-center justify-center text-[#7C3AED] shrink-0">
                        {getWorkflowIcon(st.icon, "w-5 h-5")}
                      </div>
                      <div>
                        <div className="font-display font-bold text-sm text-[#1E1B4B]">
                          {st.name}
                        </div>
                        <div className="text-xs text-[#64748B]">
                          {st.role}
                        </div>
                      </div>
                    </div>
                    {!isLast && (
                      <div className="py-1 text-[#7C3AED]">
                        <ArrowDown className="w-4 h-4" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Bottom CTA Bar */}
            <div className="mt-10 pt-6 border-t border-[#F6F2FF] flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-[#64748B]">
                Engineered with webhook triggers, API sync, and zero per-seat licensing.
              </span>
              <Button
                id={`automate-workflow-btn-${wf.id}`}
                to="/contact?service=Business%20Automation"
                variant="primary"
                size="md"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Automate My Business →
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
