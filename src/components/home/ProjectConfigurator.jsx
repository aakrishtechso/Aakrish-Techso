import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Check, ArrowRight, ArrowLeft, Sparkles, MessageCircle, Phone, RefreshCw } from "lucide-react";
import { CONFIGURATOR_DATA, COMPANY_INFO } from "../../data/agencyData";
import { Button } from "../ui/Button";

export const ProjectConfigurator = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Form State
  const [selectedNeed, setSelectedNeed] = useState("AI Agent");
  const [businessType, setBusinessType] = useState("");
  const [selectedGoal, setSelectedGoal] = useState("Automate work");
  const [selectedBudget, setSelectedBudget] = useState("₹1L – ₹3L");
  const [selectedTimeline, setSelectedTimeline] = useState("Within 1 month");
  const [contactName, setContactName] = useState("");
  const [contactInfo, setContactInfo] = useState("");
  const [errors, setErrors] = useState({});

  const handleNext = () => {
    if (currentStep === 2 && !businessType.trim()) {
      setErrors({ business: "Please briefly describe what your business does." });
      return;
    }
    setErrors({});
    if (currentStep < 6) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!contactName.trim()) {
      setErrors({ name: "Please enter your name." });
      return;
    }
    if (!contactInfo.trim()) {
      setErrors({ contact: "Please provide a phone number or email." });
      return;
    }
    setErrors({});
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setCurrentStep(1);
  };

  // Derive recommended solution based on need & goal
  const getRecommendedStack = () => {
    const needLower = selectedNeed.toLowerCase();
    if (needLower.includes("ai") || needLower.includes("chatbot")) {
      return "AUTONOMOUS AI AGENT + WHATSAPP INTEGRATION + CRM PIPELINE";
    }
    if (needLower.includes("app") || needLower.includes("saas")) {
      return "FULL-STACK CLOUD APP + AUTH + AUTOMATION + SPEED OPTIMIZATION";
    }
    if (needLower.includes("commerce")) {
      return "HIGH-CONVERTING E-COMMERCE + STRIPE/RAZORPAY + AUTOMATED INVOICING";
    }
    if (needLower.includes("marketing")) {
      return "CONVERSION LANDING PAGE + TARGETED AD FUNNEL + CAPI TRACKING";
    }
    return "PERFORMANCE PLATFORM + BUSINESS AUTOMATION + ANALYTICS";
  };

  const generateWhatsAppLink = () => {
    const summaryText = encodeURIComponent(
      `Hi Aakrish Techs! I configured my project on your website:\n\n` +
      `• Business: ${businessType || "Not specified"}\n` +
      `• Need: ${selectedNeed}\n` +
      `• Goal: ${selectedGoal}\n` +
      `• Budget: ${selectedBudget}\n` +
      `• Timeline: ${selectedTimeline}\n` +
      `• Name: ${contactName}\n` +
      `• Contact: ${contactInfo}\n\n` +
      `I'd like to discuss how we can build this.`
    );
    return `https://wa.me/919691822276?text=${summaryText}`;
  };

  return (
    <section id="project-configurator-section" className="py-20 sm:py-28 bg-white border-t border-[#E9D9FF] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="flex items-center justify-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-[#7C3AED] mb-2">
            <span>Project Discovery</span>
            <span aria-hidden="true" className="text-[#CDB7F6]">·</span>
            <span>Interactive Configurator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1E1B4B] tracking-tight font-display">
            What are you building?
          </h2>
          <p className="mt-2.5 text-sm sm:text-base text-[#64748B]">
            Configure your technical scope in 60 seconds and receive an immediate architectural recommendation.
          </p>
        </div>

        {/* Configurator Container */}
        <div className="rounded-3xl border border-[#E9D9FF] bg-gradient-to-b from-[#F6F2FF]/40 to-white p-6 sm:p-10 shadow-xl">
          {!isSubmitted ? (
            <div>
              {/* Step indicator */}
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#E9D9FF]/70">
                <div className="flex items-center gap-2 text-xs font-mono text-[#64748B]">
                  <span className="font-bold text-[#7C3AED]">STEP 0{currentStep}</span>
                  <span>/</span>
                  <span>06</span>
                </div>
                <div className="flex gap-1.5">
                  {[1, 2, 3, 4, 5, 6].map((s) => (
                    <div
                      key={s}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        s === currentStep
                          ? "w-8 bg-[#7C3AED]"
                          : s < currentStep
                          ? "w-4 bg-[#A98BE3]"
                          : "w-4 bg-[#E9D9FF]"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Step Content */}
              <AnimatePresence mode="wait">
                {/* STEP 1: WHAT DO YOU NEED? */}
                {currentStep === 1 && (
                  <motion.div
                    key="step-1"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-5 text-left"
                  >
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-[#1E1B4B] font-display">
                        What do you need?
                      </h3>
                      <p className="text-xs sm:text-sm text-[#64748B] mt-1">
                        Select the primary capability you require.
                      </p>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                      {CONFIGURATOR_DATA.needs.map((need) => {
                        const isSelected = selectedNeed === need;
                        return (
                          <button
                            key={need}
                            type="button"
                            onClick={() => setSelectedNeed(need)}
                            className={`p-3.5 rounded-xl border text-left text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center justify-between ${
                              isSelected
                                ? "bg-white border-[#7C3AED] text-[#7C3AED] shadow-xs ring-1 ring-[#7C3AED]/20 font-bold"
                                : "bg-white/80 border-[#E9D9FF] text-[#1E1B4B] hover:border-[#CDB7F6]"
                            }`}
                          >
                            <span>{need}</span>
                            {isSelected && <Check className="w-4 h-4 text-[#7C3AED] shrink-0" />}
                          </button>
                        );
                      })}
                    </div>
                  </motion.div>
                )}

                {/* STEP 2: ABOUT YOUR BUSINESS */}
                {currentStep === 2 && (
                  <motion.div
                    key="step-2"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-5 text-left"
                  >
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-[#1E1B4B] font-display">
                        About your business
                      </h3>
                      <p className="text-xs sm:text-sm text-[#64748B] mt-1">
                        What does your business do? (e.g., Fitness Studio, Dental Clinic, Real Estate Agency, B2B SaaS)
                      </p>
                    </div>

                    <div>
                      <input
                        type="text"
                        value={businessType}
                        onChange={(e) => {
                          setBusinessType(e.target.value);
                          if (errors.business) setErrors({});
                        }}
                        placeholder="e.g. Fitness Studio & Gym in Pune"
                        className="w-full px-4 py-3.5 rounded-xl border border-[#E9D9FF] focus:border-[#7C3AED] focus:ring-2 focus:ring-[#7C3AED]/20 text-sm text-[#1E1B4B] bg-white placeholder-[#94A3B8] outline-hidden"
                      />
                      {errors.business && (
                        <p className="text-xs text-red-500 mt-1.5">{errors.business}</p>
                      )}
                    </div>

                    <div className="pt-2">
                      <span className="text-xs text-[#94A3B8]">Quick presets:</span>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {["Fitness Studio", "Healthcare & Clinic", "B2B Logistics", "Real Estate", "E-commerce Store"].map((preset) => (
                          <button
                            key={preset}
                            type="button"
                            onClick={() => {
                              setBusinessType(preset);
                              if (errors.business) setErrors({});
                            }}
                            className="px-2.5 py-1 text-xs rounded-lg bg-[#F6F2FF] border border-[#E9D9FF] text-[#64748B] hover:text-[#7C3AED] cursor-pointer"
                          >
                            + {preset}
                          </button>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* STEP 3: YOUR GOAL */}
                {currentStep === 3 && (
                  <motion.div
                    key="step-3"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-5 text-left"
                  >
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-[#1E1B4B] font-display">
                        Your goal
                      </h3>
                      <p className="text-xs sm:text-sm text-[#64748B] mt-1">
                        What outcome matters most for this project?
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {CONFIGURATOR_DATA.goals.map((goal) => {
                        const isSelected = selectedGoal === goal;
                        return (
                          <button
                            key={goal}
                            type="button"
                            onClick={() => setSelectedGoal(goal)}
                            className={`p-3.5 rounded-xl border text-left text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center justify-between ${
                              isSelected
                                ? "bg-white border-[#7C3AED] text-[#7C3AED] shadow-xs ring-1 ring-[#7C3AED]/20 font-bold"
                                : "bg-white/80 border-[#E9D9FF] text-[#1E1B4B] hover:border-[#CDB7F6]"
                            }`}
                          >
                            <span>{goal}</span>
                            {isSelected && <Check className="w-4 h-4 text-[#7C3AED] shrink-0" />}
                          </button>
                        );
                      })}
                    </div>
                  </motion.div>
                )}

                {/* STEP 4: BUDGET */}
                {currentStep === 4 && (
                  <motion.div
                    key="step-4"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-5 text-left"
                  >
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-[#1E1B4B] font-display">
                        Estimated Budget
                      </h3>
                      <p className="text-xs sm:text-sm text-[#64748B] mt-1">
                        We tailor the technical architecture to fit your target budget transparently.
                      </p>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                      {CONFIGURATOR_DATA.budgets.map((b) => {
                        const isSelected = selectedBudget === b;
                        return (
                          <button
                            key={b}
                            type="button"
                            onClick={() => setSelectedBudget(b)}
                            className={`p-3.5 rounded-xl border text-left text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center justify-between ${
                              isSelected
                                ? "bg-white border-[#7C3AED] text-[#7C3AED] shadow-xs ring-1 ring-[#7C3AED]/20 font-bold"
                                : "bg-white/80 border-[#E9D9FF] text-[#1E1B4B] hover:border-[#CDB7F6]"
                            }`}
                          >
                            <span>{b}</span>
                            {isSelected && <Check className="w-4 h-4 text-[#7C3AED] shrink-0" />}
                          </button>
                        );
                      })}
                    </div>
                  </motion.div>
                )}

                {/* STEP 5: TIMELINE */}
                {currentStep === 5 && (
                  <motion.div
                    key="step-5"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-5 text-left"
                  >
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-[#1E1B4B] font-display">
                        Timeline
                      </h3>
                      <p className="text-xs sm:text-sm text-[#64748B] mt-1">
                        When do you want this live in production?
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-2.5">
                      {CONFIGURATOR_DATA.timelines.map((time) => {
                        const isSelected = selectedTimeline === time;
                        return (
                          <button
                            key={time}
                            type="button"
                            onClick={() => setSelectedTimeline(time)}
                            className={`p-3.5 rounded-xl border text-left text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center justify-between ${
                              isSelected
                                ? "bg-white border-[#7C3AED] text-[#7C3AED] shadow-xs ring-1 ring-[#7C3AED]/20 font-bold"
                                : "bg-white/80 border-[#E9D9FF] text-[#1E1B4B] hover:border-[#CDB7F6]"
                            }`}
                          >
                            <span>{time}</span>
                            {isSelected && <Check className="w-4 h-4 text-[#7C3AED] shrink-0" />}
                          </button>
                        );
                      })}
                    </div>
                  </motion.div>
                )}

                {/* STEP 6: CONTACT */}
                {currentStep === 6 && (
                  <motion.div
                    key="step-6"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-5 text-left"
                  >
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-[#1E1B4B] font-display">
                        Where should we send your project summary?
                      </h3>
                      <p className="text-xs sm:text-sm text-[#64748B] mt-1">
                        Enter your direct details so our engineers can prepare your walkthrough.
                      </p>
                    </div>

                    <div className="space-y-3.5">
                      <div>
                        <label className="block text-xs font-semibold text-[#1E1B4B] mb-1">
                          Your Name
                        </label>
                        <input
                          type="text"
                          value={contactName}
                          onChange={(e) => {
                            setContactName(e.target.value);
                            if (errors.name) setErrors((prev) => ({ ...prev, name: null }));
                          }}
                          placeholder="e.g. Rahul Sharma"
                          className="w-full px-4 py-3 rounded-xl border border-[#E9D9FF] focus:border-[#7C3AED] focus:ring-2 focus:ring-[#7C3AED]/20 text-sm text-[#1E1B4B] bg-white placeholder-[#94A3B8] outline-hidden"
                        />
                        {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-[#1E1B4B] mb-1">
                          Phone Number or Email
                        </label>
                        <input
                          type="text"
                          value={contactInfo}
                          onChange={(e) => {
                            setContactInfo(e.target.value);
                            if (errors.contact) setErrors((prev) => ({ ...prev, contact: null }));
                          }}
                          placeholder="e.g. +91 98765 43210 or name@business.com"
                          className="w-full px-4 py-3 rounded-xl border border-[#E9D9FF] focus:border-[#7C3AED] focus:ring-2 focus:ring-[#7C3AED]/20 text-sm text-[#1E1B4B] bg-white placeholder-[#94A3B8] outline-hidden"
                        />
                        {errors.contact && <p className="text-xs text-red-500 mt-1">{errors.contact}</p>}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Navigation buttons */}
              <div className="mt-8 pt-6 border-t border-[#E9D9FF]/70 flex items-center justify-between">
                {currentStep > 1 ? (
                  <button
                    type="button"
                    onClick={handleBack}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#64748B] hover:text-[#1E1B4B] cursor-pointer"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back</span>
                  </button>
                ) : (
                  <div />
                )}

                {currentStep < 6 ? (
                  <Button
                    onClick={handleNext}
                    variant="primary"
                    size="md"
                    icon={<ArrowRight className="w-4 h-4" />}
                  >
                    Next Step
                  </Button>
                ) : (
                  <Button
                    onClick={handleSubmit}
                    variant="primary"
                    size="md"
                    icon={<ArrowRight className="w-4 h-4" />}
                  >
                    Discuss My Project →
                  </Button>
                )}
              </div>
            </div>
          ) : (
            /* STEP 7: PERSONALIZED PROJECT SUMMARY SCREEN */
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="text-left space-y-6"
            >
              <div className="flex items-center justify-between border-b border-[#E9D9FF] pb-4">
                <div>
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#7C3AED]">
                    Personalized Direction
                  </span>
                  <h3 className="text-2xl font-extrabold text-[#1E1B4B] font-display mt-0.5">
                    YOUR PROJECT
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={handleReset}
                  className="inline-flex items-center gap-1 text-xs text-[#64748B] hover:text-[#7C3AED] cursor-pointer"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Reconfigure</span>
                </button>
              </div>

              {/* Summary Matrix */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-2xl bg-white border border-[#E9D9FF]">
                <div>
                  <div className="text-[11px] font-mono text-[#94A3B8] uppercase">Business</div>
                  <div className="text-sm font-bold text-[#1E1B4B] mt-0.5">{businessType || "Custom Project"}</div>
                </div>
                <div>
                  <div className="text-[11px] font-mono text-[#94A3B8] uppercase">Need</div>
                  <div className="text-sm font-bold text-[#7C3AED] mt-0.5">{selectedNeed}</div>
                </div>
                <div>
                  <div className="text-[11px] font-mono text-[#94A3B8] uppercase">Goal</div>
                  <div className="text-sm font-bold text-[#1E1B4B] mt-0.5">{selectedGoal}</div>
                </div>
                <div>
                  <div className="text-[11px] font-mono text-[#94A3B8] uppercase">Budget</div>
                  <div className="text-sm font-bold text-[#1E1B4B] mt-0.5">{selectedBudget}</div>
                </div>
              </div>

              {/* Recommended Stack Box */}
              <div className="p-5 rounded-2xl bg-[#F6F2FF] border border-[#E9D9FF]">
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#7C3AED] mb-1">
                  Recommended Architecture:
                </div>
                <div className="text-base sm:text-lg font-extrabold text-[#1E1B4B] font-display">
                  {getRecommendedStack()}
                </div>
              </div>

              <div className="text-base text-[#1E1B4B] font-medium">
                Let's discuss how we can build this.
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <a
                  href={generateWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-sm shadow-md transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Talk to Aakrish on WhatsApp →</span>
                </a>

                <a
                  href="tel:9691822276"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#F6F2FF] border border-[#E9D9FF] hover:border-[#CDB7F6] text-[#1E1B4B] font-semibold text-sm transition-all"
                >
                  <Phone className="w-4 h-4 text-[#7C3AED]" />
                  <span>Call Directly (+91 96918 22276)</span>
                </a>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};
