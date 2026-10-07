import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight, Bot, MessageSquare, CheckCircle2, ShieldCheck, Zap, User } from "lucide-react";
import { AI_AGENT_PRESETS } from "../../data/agencyData";
import { Button } from "../ui/Button";

export const AIAgentShowcase = () => {
  const [activePresetIndex, setActivePresetIndex] = useState(0);
  const activePreset = AI_AGENT_PRESETS[activePresetIndex] || AI_AGENT_PRESETS[0];

  return (
    <section id="ai-agent-showcase" className="py-20 sm:py-28 bg-white border-t border-[#E9D9FF] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Value proposition & 4 pillars */}
          <div className="lg:col-span-6 space-y-7 text-left">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-[#7C3AED] mb-3">
                <span>Autonomous Operations</span>
                <span aria-hidden="true" className="text-[#CDB7F6]">·</span>
                <span>24/7 Availability</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1E1B4B] tracking-tight font-display leading-[1.12]">
                Turn customer conversations into opportunities.
              </h2>
              <p className="mt-3.5 text-base sm:text-lg text-[#64748B] leading-relaxed">
                Intelligent agents trained on your business that qualify leads, handle inquiries, and schedule appointments without human delay.
              </p>
            </div>

            {/* 4 Pillars: RESPOND · QUALIFY · FOLLOW UP · BOOK */}
            <div className="grid grid-cols-2 gap-3.5 pt-1">
              {activePreset.capabilities.map((cap, idx) => (
                <div
                  key={cap.label}
                  className="p-4 rounded-xl border border-[#E9D9FF] bg-[#F6F2FF]/40 text-left"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED]" />
                    <span className="font-display font-bold text-sm text-[#1E1B4B]">
                      {cap.label}
                    </span>
                  </div>
                  <p className="text-xs text-[#64748B] leading-normal">
                    {cap.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-4">
              <Button
                id="ai-agent-build-btn"
                to="/contact?service=AI%20Agent%20Development"
                variant="primary"
                size="md"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Build My AI Agent →
              </Button>
              <span className="text-xs text-[#64748B] flex items-center gap-1.5 font-medium">
                <ShieldCheck className="w-4 h-4 text-[#7C3AED]" />
                <span>Deployed to WhatsApp, Web & CRM</span>
              </span>
            </div>
          </div>

          {/* Right Column: Realistic Conversation Interface */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl border border-[#E9D9FF] bg-white shadow-xl overflow-hidden">
              {/* Chat Window Top Bar */}
              <div className="px-5 py-3.5 bg-[#F6F2FF] border-b border-[#E9D9FF] flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#7C3AED] text-white flex items-center justify-center font-bold text-xs">
                    <Bot className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#1E1B4B] flex items-center gap-1.5">
                      <span>Aakrish Business Agent</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                    </div>
                    <div className="text-[11px] text-[#64748B]">Active on WhatsApp & Web · Latency &lt; 2s</div>
                  </div>
                </div>

                {/* Industry Preset Switcher */}
                <div className="flex items-center gap-1 bg-white p-1 rounded-lg border border-[#E9D9FF]">
                  {AI_AGENT_PRESETS.map((preset, pIdx) => (
                    <button
                      key={preset.id}
                      type="button"
                      onClick={() => setActivePresetIndex(pIdx)}
                      className={`px-2 py-1 text-[11px] font-semibold rounded-md transition-colors cursor-pointer ${
                        activePresetIndex === pIdx
                          ? "bg-[#7C3AED] text-white"
                          : "text-[#64748B] hover:text-[#1E1B4B]"
                      }`}
                    >
                      {preset.id === "fitness" ? "Fitness" : preset.id === "clinic" ? "Clinic" : "Real Estate"}
                    </button>
                  ))}
                </div>
              </div>

              {/* Chat Thread Messages */}
              <div className="p-5 sm:p-6 space-y-3.5 bg-gradient-to-b from-white to-[#F6F2FF]/20 min-h-[360px] flex flex-col justify-end text-left">
                {activePreset.messages.map((msg, mIdx) => {
                  const isUser = msg.sender === "customer";
                  return (
                    <motion.div
                      key={`${activePreset.id}-${mIdx}`}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: mIdx * 0.05 }}
                      className={`flex flex-col ${isUser ? "items-end" : "items-start"}`}
                    >
                      <div className="text-[10px] font-mono font-semibold uppercase text-[#94A3B8] mb-1 px-1">
                        {isUser ? "Prospective Customer" : "AI Agent"}
                      </div>
                      <div
                        className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-xs sm:text-sm leading-relaxed ${
                          isUser
                            ? "bg-[#1E1B4B] text-white rounded-tr-xs"
                            : "bg-[#F6F2FF] border border-[#E9D9FF] text-[#1E1B4B] rounded-tl-xs shadow-2xs"
                        }`}
                      >
                        {msg.text}
                      </div>
                    </motion.div>
                  );
                })}

                {/* Live simulated input field preview */}
                <div className="pt-3 border-t border-[#E9D9FF] flex items-center justify-between text-xs text-[#94A3B8]">
                  <span>AI Agent listening 24/7 across all channels</span>
                  <span className="text-[#10B981] font-mono font-semibold text-[11px]">Online</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
