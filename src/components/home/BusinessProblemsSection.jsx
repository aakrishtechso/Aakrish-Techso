import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowRight,
  CheckCircle2,
  Bot,
  Zap,
  Clock,
  Layers,
  Sparkles,
  Target,
  Workflow,
  ShieldCheck,
  Check,
  ChevronRight
} from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";

const BUSINESS_PROBLEMS = [
  {
    id: "conversion",
    problemQuote: "“My website gets visitors but not customers.”",
    category: "Conversion Rate & Positioning",
    solutionName: "Conversion-Focused Website & Positioning",
    rootCause: "Generic messaging, slow mobile load times, weak visual hierarchy, and confusing inquiry funnels that fail to build confidence in under 3 seconds.",
    howWeSolve: "We re-architect your digital presence with sub-second page loads, authoritative typography, clear value proposition copy, and frictionless inquiry pathways.",
    whatWeBuild: [
      "Sub-second load times (<0.5s FCP) retaining high-intent buyers",
      "Persuasive messaging architecture eliminating corporate jargon",
      "High-contrast, distraction-free booking & contact funnels",
      "100/100 Core Web Vitals benchmarked on Google PageSpeed"
    ],
    outcome: "Higher inquiry rate without spending an extra rupee on ad traffic.",
    serviceLink: "/services#web-development",
    ctaLabel: "Explore Website Modernization"
  },
  {
    id: "repetitive-tasks",
    problemQuote: "“My team spends hours doing repetitive tasks.”",
    category: "Operational Automation",
    solutionName: "End-to-End Business Automation & CRM Middleware",
    rootCause: "High-value personnel wasting 15+ hours weekly manually updating spreadsheets, moving data between disjointed software, and chasing invoices.",
    howWeSolve: "We build custom event-driven automation pipelines connecting your WhatsApp, CRM, payment gateway, and databases to eliminate manual data entry.",
    whatWeBuild: [
      "Two-way live synchronization across CRM, databases & spreadsheets",
      "Automated PDF invoice generation and instant WhatsApp dispatch",
      "Internal team notification bridges (Slack / WhatsApp / Email)",
      "Zero-code error handling and automated retry workflows"
    ],
    outcome: "Eliminates 70% of manual back-office tasks, freeing team for revenue generation.",
    serviceLink: "/services#ai-agents-automation",
    ctaLabel: "Explore Business Automation"
  },
  {
    id: "lead-followup",
    problemQuote: "“Leads aren't followed up properly.”",
    category: "Sales Pipeline Acceleration",
    solutionName: "AI Lead Qualification & Multi-Touch Follow-Up",
    rootCause: "Prospects reach out at odd hours, weekends, or during meetings. By the time a human replies 2 hours later, the lead has already chosen a competitor.",
    howWeSolve: "We deploy autonomous AI Sales Agents that reply in <2 seconds across WhatsApp and web, qualify buyer intent, answer questions, and book calendar calls.",
    whatWeBuild: [
      "24/7 instant lead engagement in under 2 seconds",
      "Intelligent budget, timeline, and requirement qualification",
      "Automated multi-day WhatsApp & email follow-up cadences",
      "Direct integration into Calendly, Google Calendar, and HubSpot"
    ],
    outcome: "3.8x increase in qualified discovery meetings booked per month.",
    serviceLink: "/services#ai-agents-automation",
    ctaLabel: "Explore AI Sales Agents"
  },
  {
    id: "repetitive-questions",
    problemQuote: "“Customers ask the same questions every day.”",
    category: "24/7 Customer Experience",
    solutionName: "AI Customer Support Agent with Custom Knowledge Base",
    rootCause: "Support inboxes flooded with repetitive inquiries regarding pricing, availability, status, and policies, causing delayed response times and team burnout.",
    howWeSolve: "We engineer private RAG (Retrieval-Augmented Generation) AI agents trained exclusively on your verified manuals, FAQs, and database records.",
    whatWeBuild: [
      "Zero-hallucination answers grounded on your verified documentation",
      "Official WhatsApp Cloud API & website chat widget integration",
      "Graceful human escalation when complex edge-cases occur",
      "Live support dashboard with sentiment tracking and query analytics"
    ],
    outcome: "80% of routine customer questions resolved instantly without human intervention.",
    serviceLink: "/services#ai-agents-automation",
    ctaLabel: "Explore Customer Support Agents"
  },
  {
    id: "app-development",
    problemQuote: "“I want to build an app but don't know where to start.”",
    category: "Product Engineering",
    solutionName: "Full-Stack Product Development & SaaS MVP",
    rootCause: "Founders get trapped between unreliable freelancers, overpriced traditional agencies, and confusing technical choices that stall launches for months.",
    howWeSolve: "We guide you from product architecture through high-fidelity Figma prototypes to production-ready React/Node/PostgreSQL code in fixed-timeline sprints.",
    whatWeBuild: [
      "Requirements architecture, database modeling, and user journey specs",
      "Clickable interactive prototypes in Figma for fast validation",
      "Production full-stack engineering with 100% IP & code ownership",
      "Scalable cloud deployment with automated backups and monitoring"
    ],
    outcome: "Launch a production-grade digital product in 4–6 weeks with senior engineers.",
    serviceLink: "/services#web-applications",
    ctaLabel: "Explore Product Development"
  },
  {
    id: "scale-digitally",
    problemQuote: "“I want to scale my business digitally.”",
    category: "Digital Strategy & Technology",
    solutionName: "Integrated Digital Infrastructure & Growth Systems",
    rootCause: "A business cannot scale if its customer acquisition is erratic, website looks unprofessional, and operations rely on manual human bandwidth.",
    howWeSolve: "We unite modern high-converting web engineering, automated operations, and data-driven performance marketing into a cohesive growth engine.",
    whatWeBuild: [
      "Enterprise digital brand positioning and high-speed web platform",
      "Centralized operational dashboards giving real-time executive visibility",
      "Targeted Google Search & Meta ad funnels with server-side tracking",
      "Automated lead capture, qualification, and sales booking pipelines"
    ],
    outcome: "A predictable, scalable digital engine built for long-term commercial leverage.",
    serviceLink: "/services#digital-marketing-ad-runs",
    ctaLabel: "Explore Growth Systems"
  }
];

export const BusinessProblemsSection = () => {
  const [activeProblemId, setActiveProblemId] = useState(BUSINESS_PROBLEMS[0].id);

  const selectedProblem =
    BUSINESS_PROBLEMS.find((p) => p.id === activeProblemId) || BUSINESS_PROBLEMS[0];

  return (
    <section id="business-problems-section" className="py-20 sm:py-28 bg-[#F6F2FF]/40 border-t border-[#E9D9FF] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <SectionHeading
          badge="Business Problems We Solve"
          title="Technology Built Around Real Business Friction"
          subtitle="We don't sell technology for the sake of technology. Select a real bottleneck your business faces to see how Aakrish engineers the solution."
          align="center"
        />

        {/* Interactive Split Grid: Problems on Left, Interactive Solution Reveal on Right */}
        <div className="mt-14 sm:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          {/* Left Column: Interactive Problems Selector (5 cols) */}
          <div className="lg:col-span-5 space-y-2.5">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#64748B] mb-3 text-left pl-1">
              Select What You Are Experiencing:
            </div>

            {BUSINESS_PROBLEMS.map((problem) => {
              const isSelected = activeProblemId === problem.id;

              return (
                <button
                  key={problem.id}
                  type="button"
                  onClick={() => setActiveProblemId(problem.id)}
                  className={`w-full p-4 sm:p-5 rounded-2xl text-left border transition-all duration-200 cursor-pointer flex items-center justify-between group ${
                    isSelected
                      ? "bg-white border-[#7C3AED] shadow-md shadow-[#7C3AED]/10 translate-x-1"
                      : "bg-white/80 border-[#E9D9FF] hover:border-[#CDB7F6] hover:bg-white text-slate-700"
                  }`}
                >
                  <div className="space-y-1 pr-3">
                    <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-[#7C3AED]">
                      {problem.category}
                    </span>
                    <h3 className={`text-sm sm:text-base font-bold font-display leading-snug ${
                      isSelected ? "text-[#1E1B4B]" : "text-[#334155] group-hover:text-[#1E1B4B]"
                    }`}>
                      {problem.problemQuote}
                    </h3>
                  </div>

                  <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                    isSelected ? "bg-[#7C3AED] text-white" : "bg-[#F6F2FF] text-[#7C3AED] group-hover:bg-[#E9D9FF]"
                  }`}>
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Dynamic Solution Reveal Card (7 cols) */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedProblem.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
                className="p-6 sm:p-8 rounded-3xl bg-white border border-[#A98BE3] shadow-xl text-left space-y-6"
              >
                {/* Header Tag + Solution Name */}
                <div className="space-y-2 border-b border-[#F6F2FF] pb-5">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-[#F6F2FF] text-[#7C3AED] border border-[#E9D9FF]">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Aakrish Solution</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1E1B4B] font-display">
                    {selectedProblem.solutionName}
                  </h3>
                </div>

                {/* The Real Root Cause */}
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                  <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-rose-700">
                    Why This Happens
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {selectedProblem.rootCause}
                  </p>
                </div>

                {/* How Aakrish Solves It */}
                <div className="space-y-2">
                  <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#1E1B4B]">
                    How We Engineer The Solution
                  </div>
                  <p className="text-sm text-[#475569] leading-relaxed">
                    {selectedProblem.howWeSolve}
                  </p>
                </div>

                {/* What We Build Checklist */}
                <div className="space-y-2.5 pt-1">
                  <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#7C3AED]">
                    What We Build Specifically:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {selectedProblem.whatWeBuild.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[#334155]">
                        <div className="w-4 h-4 rounded-full bg-[#F6F2FF] border border-[#CDB7F6] flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5 text-[#7C3AED]" />
                        </div>
                        <span className="font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Outcome Badge & CTA Footer */}
                <div className="p-4 rounded-2xl bg-[#F6F2FF] border border-[#E9D9FF] flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4">
                  <div className="space-y-0.5">
                    <div className="text-[10px] font-mono text-[#7C3AED] uppercase font-bold">
                      Expected Commercial Result
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-[#1E1B4B]">
                      {selectedProblem.outcome}
                    </div>
                  </div>

                  <Link
                    to={selectedProblem.serviceLink}
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#1E1B4B] hover:bg-[#7C3AED] text-white text-xs sm:text-sm font-semibold transition-all shadow-xs cursor-pointer shrink-0"
                  >
                    <span>{selectedProblem.ctaLabel}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
