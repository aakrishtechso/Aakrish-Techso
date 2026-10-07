import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import {
  Workflow,
  ArrowRight,
  CheckCircle2,
  PhoneCall,
  MessageSquare,
  Users,
  Database,
  Calendar,
  Zap,
  Clock,
  Sparkles
} from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";

const WORKFLOW_MODELS = [
  {
    id: "lead-nurture",
    title: "Inbound Lead to Discovery Meeting",
    description: "Captures visitors from paid ads, social campaigns, and website forms, qualifying intent before your sales team speaks to them.",
    steps: [
      { name: "LEAD", detail: "Inbound inquiry received via ad or form", time: "0s" },
      { name: "AI RESPONSE", detail: "Contextual greeting & intent detection", time: "1.2s" },
      { name: "QUALIFICATION", detail: "Budget, scope & decision maker verified", time: "30s" },
      { name: "CRM SYNC", detail: "Profile & transcript logged to HubSpot", time: "Instant" },
      { name: "FOLLOW-UP", detail: "Personalized collateral & case studies sent", time: "Auto" },
      { name: "MEETING", detail: "Discovery call booked directly in calendar", time: "Confirmed" }
    ],
    outcomeMetric: "3.8x More Meetings Booked",
    tools: ["WhatsApp Cloud API", "HubSpot CRM", "Google Calendar", "Make / n8n"]
  },
  {
    id: "missed-call",
    title: "Missed Call to Instant WhatsApp Booking",
    description: "Recovers callers who didn't get answered on the phone by immediately initiating a WhatsApp conversational triage.",
    steps: [
      { name: "MISSED CALL", detail: "Unanswered inbound phone call detected", time: "0s" },
      { name: "WHATSAPP", detail: "Immediate recovery ping: 'Sorry we missed you!'", time: "5s" },
      { name: "AI CONVERSATION", detail: "Answers questions, pricing & availability", time: "Real-time" },
      { name: "QUALIFICATION", detail: "Verifies service type & location requirements", time: "1 min" },
      { name: "BOOKING", detail: "Appointment confirmed with SMS/WhatsApp invite", time: "Scheduled" }
    ],
    outcomeMetric: "Zero Lost Callers to Competitors",
    tools: ["Twilio Voice Webhook", "WhatsApp API", "CRM Database", "SMS Gateway"]
  },
  {
    id: "invoice-dispatch",
    title: "Contract Close to Automated Invoicing",
    description: "Eliminates back-office paperwork when deals close by synchronizing agreements, invoicing, and project kickoff boards.",
    steps: [
      { name: "DEAL WON", detail: "Client signs proposal or agrees to scope", time: "0s" },
      { name: "PAYMENT LINK", detail: "Dynamic Stripe / Razorpay invoice generated", time: "Instant" },
      { name: "INVOICE DISPATCH", detail: "Branded PDF dispatched via email & WhatsApp", time: "1.5s" },
      { name: "DB & BOARD SYNC", detail: "Project created in Notion/Trello with roles", time: "Automated" },
      { name: "KICKOFF", detail: "Client onboarding portal access granted", time: "Day 1" }
    ],
    outcomeMetric: "15+ Hours Admin Saved Weekly",
    tools: ["Stripe / Razorpay", "PostgreSQL", "Notion API", "Transactional Email"]
  }
];

export const AutomationWorkflowSection = () => {
  const [activeWorkflowId, setActiveWorkflowId] = useState(WORKFLOW_MODELS[0].id);

  const selectedWorkflow =
    WORKFLOW_MODELS.find((w) => w.id === activeWorkflowId) || WORKFLOW_MODELS[0];

  return (
    <section id="automation-workflows-section" className="py-20 sm:py-28 bg-[#F6F2FF]/40 border-t border-[#E9D9FF] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <SectionHeading
          badge="Enterprise Automation"
          title="Automated Workflows Engineered for Relentless Speed"
          subtitle="Every business loses hours to repetitive status updates and delayed follow-ups. We design event-driven automation architectures that run quietly in the background."
          align="center"
        />

        {/* Workflow Model Selector Tabs */}
        <div className="mt-10 sm:mt-12 flex justify-center">
          <div className="inline-flex p-1.5 rounded-2xl bg-white border border-[#E9D9FF] flex-wrap justify-center gap-1 shadow-xs">
            {WORKFLOW_MODELS.map((wf) => {
              const isActive = activeWorkflowId === wf.id;

              return (
                <button
                  key={wf.id}
                  type="button"
                  onClick={() => setActiveWorkflowId(wf.id)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-[#1E1B4B] text-white shadow-xs font-semibold"
                      : "text-[#64748B] hover:text-[#1E1B4B] hover:bg-[#F6F2FF]"
                  }`}
                >
                  {wf.title}
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Workflow Visualization Card */}
        <div className="mt-10 sm:mt-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedWorkflow.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.3 }}
              className="p-6 sm:p-10 rounded-3xl bg-white border border-[#A98BE3] shadow-xl text-left space-y-8"
            >
              {/* Header Info */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#F6F2FF] pb-6">
                <div className="space-y-1">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#7C3AED]">
                    Engineered Architecture Pipeline
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#1E1B4B] font-display">
                    {selectedWorkflow.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#64748B] max-w-2xl">
                    {selectedWorkflow.description}
                  </p>
                </div>

                <div className="shrink-0 p-3.5 rounded-2xl bg-[#F6F2FF] border border-[#E9D9FF] text-center">
                  <div className="text-[10px] font-mono text-[#64748B] uppercase">Business Impact</div>
                  <div className="text-sm sm:text-base font-extrabold text-[#7C3AED] font-display mt-0.5">
                    {selectedWorkflow.outcomeMetric}
                  </div>
                </div>
              </div>

              {/* Step-by-Step Horizontal Workflow Chain */}
              <div className="space-y-3">
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#1E1B4B]">
                  Execution Pipeline:
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3">
                  {selectedWorkflow.steps.map((st, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-2xl bg-white border border-[#E9D9FF] hover:border-[#7C3AED] transition-colors space-y-2 shadow-2xs flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="text-[10px] font-mono font-bold text-[#7C3AED] bg-[#F6F2FF] px-2 py-0.5 rounded">
                            {st.time}
                          </span>
                          {idx < selectedWorkflow.steps.length - 1 && (
                            <span className="hidden lg:inline text-slate-300 font-mono text-xs">→</span>
                          )}
                        </div>

                        <div className="text-xs sm:text-sm font-extrabold text-[#1E1B4B] font-mono tracking-tight">
                          {st.name}
                        </div>
                      </div>

                      <p className="text-[11px] text-[#64748B] leading-tight">
                        {st.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tools & Call to Action Footer */}
              <div className="pt-4 border-t border-[#F6F2FF] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono text-[#64748B]">Integrated Technologies:</span>
                  {selectedWorkflow.tools.map((t, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] font-mono text-[#334155] bg-slate-100 px-2.5 py-0.5 rounded border border-slate-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <Link
                  to="/services#business-technology"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#1E1B4B] hover:bg-[#7C3AED] text-white text-xs sm:text-sm font-semibold transition-all shadow-xs cursor-pointer shrink-0"
                >
                  <span>Build This Workflow</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
