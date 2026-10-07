import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Send,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  RotateCcw,
  MessageSquare,
  Clock,
  DollarSign,
  Briefcase,
  User,
  Phone,
  Mail
} from "lucide-react";
import { COMPANY_INFO } from "../../data/agencyData";

export const HomeInquiryForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    budget: "",
    timeline: "",
    message: ""
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const serviceOptions = [
    "Website Development",
    "Website Redesign",
    "Mobile Application",
    "Digital Marketing & Ads",
    "AI Agents",
    "Instagram Content Creation",
    "Other"
  ];

  const budgetOptions = [
    "Under ₹25,000 (< $300)",
    "₹25,000 – ₹50,000 ($300 – $600)",
    "₹50,000 – ₹1,00,000 ($600 – $1,200)",
    "₹1,00,000 – ₹2,50,000 ($1,200 – $3,000)",
    "₹2,50,000+ ($3,000+)",
    "Flexible / Need Consultation"
  ];

  const timelineOptions = [
    "Urgent (Within 1 week)",
    "1 – 2 Weeks",
    "2 – 4 Weeks",
    "1 – 2 Months",
    "Flexible / Ready to discuss"
  ];

  const validate = () => {
    const errs = {};

    if (!formData.name.trim()) {
      errs.name = "Client name is required";
    } else if (formData.name.trim().length < 2) {
      errs.name = "Please enter a valid name";
    }

    if (!formData.phone.trim()) {
      errs.phone = "Phone number is required";
    } else {
      const cleanPhone = formData.phone.replace(/[\s\-()+]/g, "");
      if (cleanPhone.length < 7) {
        errs.phone = "Please enter a valid phone number";
      }
    }

    if (!formData.email.trim()) {
      errs.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = "Please enter a valid email address";
    }

    if (!formData.service) {
      errs.service = "Please select a service type";
    }

    if (!formData.budget.trim()) {
      errs.budget = "Please select or specify your budget";
    }

    if (!formData.timeline.trim()) {
      errs.timeline = "Please specify when you want it completed";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    // Format WhatsApp message exactly as requested
    const formattedText = `New Project Inquiry\n\nName: ${formData.name.trim()}\nPhone: ${formData.phone.trim()}\nEmail: ${formData.email.trim()}\nService: ${formData.service}\nBudget: ${formData.budget.trim()}\nRequired Timeline: ${formData.timeline.trim()}\nMessage: ${formData.message.trim() || "N/A"}`;

    // Target phone number from existing company info
    const primaryPhone = COMPANY_INFO.phoneNumbers?.[0]?.number || "9691822276";
    const waUrl = `https://wa.me/91${primaryPhone}?text=${encodeURIComponent(formattedText)}`;

    // Open WhatsApp in new tab
    window.open(waUrl, "_blank", "noopener,noreferrer");

    // Show Thank-You success component
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      name: "",
      phone: "",
      email: "",
      service: "",
      budget: "",
      timeline: "",
      message: ""
    });
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <section
      id="homepage-inquiry-section"
      className="py-20 sm:py-28 bg-white relative overflow-hidden"
    >
      {/* Subtle background ambient blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-[#F6F2FF] rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatePresence mode="wait">
          {!isSubmitted ? (
            <motion.div
              key="inquiry-form"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4 }}
            >
              {/* Header */}
              <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14 space-y-3.5">
                <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-[#F6F2FF] text-[#7C3AED] border border-[#E9D9FF]">
                  <Sparkles className="w-3.5 h-3.5 text-[#7C3AED]" />
                  <span>Start Your Project</span>
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1E1B4B] font-display">
                  Let's Build Something Together
                </h2>
                <p className="text-base sm:text-lg text-[#64748B] leading-relaxed">
                  Tell us what you need, your budget, and your timeline. We'll help you turn your idea into a practical digital solution.
                </p>
              </div>

              {/* Form Card */}
              <div className="bg-white rounded-3xl border border-[#E9D9FF] shadow-xl shadow-[#A98BE3]/10 p-6 sm:p-10 lg:p-12">
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  {/* Row 1: Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Client Name */}
                    <div>
                      <label
                        htmlFor="client-name"
                        className="block text-xs font-bold text-[#1E1B4B] uppercase tracking-wider mb-2"
                      >
                        Client Name <span className="text-[#DC2626]">*</span>
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-[#94A3B8] absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                        <input
                          type="text"
                          id="client-name"
                          value={formData.name}
                          onChange={(e) => handleChange("name", e.target.value)}
                          placeholder="Your full name"
                          className={`w-full pl-11 pr-4 py-3.5 bg-[#FBFBFE] border rounded-xl text-sm text-[#1E1B4B] placeholder:text-[#94A3B8] transition-all focus:outline-none focus:bg-white ${
                            errors.name
                              ? "border-[#DC2626] focus:border-[#DC2626] focus:ring-2 focus:ring-[#DC2626]/20"
                              : "border-[#E9D9FF] focus:border-[#7C3AED] focus:ring-2 focus:ring-[#7C3AED]/20"
                          }`}
                        />
                      </div>
                      {errors.name && (
                        <p className="mt-1.5 text-xs text-[#DC2626] flex items-center gap-1">
                          <AlertCircle className="w-3 h-3 shrink-0" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label
                        htmlFor="client-phone"
                        className="block text-xs font-bold text-[#1E1B4B] uppercase tracking-wider mb-2"
                      >
                        Phone Number <span className="text-[#DC2626]">*</span>
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-[#94A3B8] absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                        <input
                          type="tel"
                          id="client-phone"
                          value={formData.phone}
                          onChange={(e) => handleChange("phone", e.target.value)}
                          placeholder="+91 98765 43210"
                          className={`w-full pl-11 pr-4 py-3.5 bg-[#FBFBFE] border rounded-xl text-sm text-[#1E1B4B] placeholder:text-[#94A3B8] transition-all focus:outline-none focus:bg-white ${
                            errors.phone
                              ? "border-[#DC2626] focus:border-[#DC2626] focus:ring-2 focus:ring-[#DC2626]/20"
                              : "border-[#E9D9FF] focus:border-[#7C3AED] focus:ring-2 focus:ring-[#7C3AED]/20"
                          }`}
                        />
                      </div>
                      {errors.phone && (
                        <p className="mt-1.5 text-xs text-[#DC2626] flex items-center gap-1">
                          <AlertCircle className="w-3 h-3 shrink-0" />
                          <span>{errors.phone}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Row 2: Email & Service Type */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Email */}
                    <div>
                      <label
                        htmlFor="client-email"
                        className="block text-xs font-bold text-[#1E1B4B] uppercase tracking-wider mb-2"
                      >
                        Email Address <span className="text-[#DC2626]">*</span>
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-[#94A3B8] absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                        <input
                          type="email"
                          id="client-email"
                          value={formData.email}
                          onChange={(e) => handleChange("email", e.target.value)}
                          placeholder="you@company.com"
                          className={`w-full pl-11 pr-4 py-3.5 bg-[#FBFBFE] border rounded-xl text-sm text-[#1E1B4B] placeholder:text-[#94A3B8] transition-all focus:outline-none focus:bg-white ${
                            errors.email
                              ? "border-[#DC2626] focus:border-[#DC2626] focus:ring-2 focus:ring-[#DC2626]/20"
                              : "border-[#E9D9FF] focus:border-[#7C3AED] focus:ring-2 focus:ring-[#7C3AED]/20"
                          }`}
                        />
                      </div>
                      {errors.email && (
                        <p className="mt-1.5 text-xs text-[#DC2626] flex items-center gap-1">
                          <AlertCircle className="w-3 h-3 shrink-0" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>

                    {/* Service Type Dropdown */}
                    <div>
                      <label
                        htmlFor="client-service"
                        className="block text-xs font-bold text-[#1E1B4B] uppercase tracking-wider mb-2"
                      >
                        Service Type <span className="text-[#DC2626]">*</span>
                      </label>
                      <div className="relative">
                        <Briefcase className="w-4 h-4 text-[#94A3B8] absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                        <select
                          id="client-service"
                          value={formData.service}
                          onChange={(e) => handleChange("service", e.target.value)}
                          className={`w-full pl-11 pr-10 py-3.5 bg-[#FBFBFE] border rounded-xl text-sm text-[#1E1B4B] transition-all appearance-none focus:outline-none focus:bg-white cursor-pointer ${
                            !formData.service ? "text-[#94A3B8]" : "text-[#1E1B4B]"
                          } ${
                            errors.service
                              ? "border-[#DC2626] focus:border-[#DC2626] focus:ring-2 focus:ring-[#DC2626]/20"
                              : "border-[#E9D9FF] focus:border-[#7C3AED] focus:ring-2 focus:ring-[#7C3AED]/20"
                          }`}
                        >
                          <option value="" disabled>
                            Select a service
                          </option>
                          {serviceOptions.map((opt) => (
                            <option key={opt} value={opt} className="text-[#1E1B4B]">
                              {opt}
                            </option>
                          ))}
                        </select>
                        <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#94A3B8]">
                          ▼
                        </div>
                      </div>
                      {errors.service && (
                        <p className="mt-1.5 text-xs text-[#DC2626] flex items-center gap-1">
                          <AlertCircle className="w-3 h-3 shrink-0" />
                          <span>{errors.service}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Row 3: Budget & Timeline */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Your Budget */}
                    <div>
                      <label
                        htmlFor="client-budget"
                        className="block text-xs font-bold text-[#1E1B4B] uppercase tracking-wider mb-2"
                      >
                        Your Budget <span className="text-[#DC2626]">*</span>
                      </label>
                      <div className="relative">
                        <DollarSign className="w-4 h-4 text-[#94A3B8] absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                        <select
                          id="client-budget"
                          value={formData.budget}
                          onChange={(e) => handleChange("budget", e.target.value)}
                          className={`w-full pl-11 pr-10 py-3.5 bg-[#FBFBFE] border rounded-xl text-sm transition-all appearance-none focus:outline-none focus:bg-white cursor-pointer ${
                            !formData.budget ? "text-[#94A3B8]" : "text-[#1E1B4B]"
                          } ${
                            errors.budget
                              ? "border-[#DC2626] focus:border-[#DC2626] focus:ring-2 focus:ring-[#DC2626]/20"
                              : "border-[#E9D9FF] focus:border-[#7C3AED] focus:ring-2 focus:ring-[#7C3AED]/20"
                          }`}
                        >
                          <option value="" disabled>
                            Select your estimated budget
                          </option>
                          {budgetOptions.map((opt) => (
                            <option key={opt} value={opt} className="text-[#1E1B4B]">
                              {opt}
                            </option>
                          ))}
                        </select>
                        <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#94A3B8]">
                          ▼
                        </div>
                      </div>
                      {errors.budget && (
                        <p className="mt-1.5 text-xs text-[#DC2626] flex items-center gap-1">
                          <AlertCircle className="w-3 h-3 shrink-0" />
                          <span>{errors.budget}</span>
                        </p>
                      )}
                    </div>

                    {/* Timeline */}
                    <div>
                      <label
                        htmlFor="client-timeline"
                        className="block text-xs font-bold text-[#1E1B4B] uppercase tracking-wider mb-2"
                      >
                        When do you want it completed? <span className="text-[#DC2626]">*</span>
                      </label>
                      <div className="relative">
                        <Clock className="w-4 h-4 text-[#94A3B8] absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                        <select
                          id="client-timeline"
                          value={formData.timeline}
                          onChange={(e) => handleChange("timeline", e.target.value)}
                          className={`w-full pl-11 pr-10 py-3.5 bg-[#FBFBFE] border rounded-xl text-sm transition-all appearance-none focus:outline-none focus:bg-white cursor-pointer ${
                            !formData.timeline ? "text-[#94A3B8]" : "text-[#1E1B4B]"
                          } ${
                            errors.timeline
                              ? "border-[#DC2626] focus:border-[#DC2626] focus:ring-2 focus:ring-[#DC2626]/20"
                              : "border-[#E9D9FF] focus:border-[#7C3AED] focus:ring-2 focus:ring-[#7C3AED]/20"
                          }`}
                        >
                          <option value="" disabled>
                            Select completion timeline
                          </option>
                          {timelineOptions.map((opt) => (
                            <option key={opt} value={opt} className="text-[#1E1B4B]">
                              {opt}
                            </option>
                          ))}
                        </select>
                        <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#94A3B8]">
                          ▼
                        </div>
                      </div>
                      {errors.timeline && (
                        <p className="mt-1.5 text-xs text-[#DC2626] flex items-center gap-1">
                          <AlertCircle className="w-3 h-3 shrink-0" />
                          <span>{errors.timeline}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Message / Project Details */}
                  <div>
                    <label
                      htmlFor="client-message"
                      className="block text-xs font-bold text-[#1E1B4B] uppercase tracking-wider mb-2"
                    >
                      Message / Project Details
                    </label>
                    <div className="relative">
                      <textarea
                        id="client-message"
                        rows={4}
                        value={formData.message}
                        onChange={(e) => handleChange("message", e.target.value)}
                        placeholder="Tell us about your brand, current challenges, key goals, or references..."
                        className="w-full p-4 bg-[#FBFBFE] border border-[#E9D9FF] rounded-xl text-sm text-[#1E1B4B] placeholder:text-[#94A3B8] transition-all focus:outline-none focus:bg-white focus:border-[#7C3AED] focus:ring-2 focus:ring-[#7C3AED]/20 resize-y"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      id="submit-inquiry-button"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-bold text-base transition-all shadow-md shadow-[#7C3AED]/20 hover:shadow-lg hover:shadow-[#7C3AED]/30 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                    >
                      <span>Submit Inquiry</span>
                      <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>
                    <p className="mt-3 text-xs text-[#64748B]">
                      Submitting prepares a pre-filled WhatsApp message for instant direct communication with our engineering team.
                    </p>
                  </div>
                </form>
              </div>
            </motion.div>
          ) : (
            /* Thank-You Success Component */
            <motion.div
              key="inquiry-success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="bg-white rounded-3xl border border-[#E9D9FF] shadow-xl shadow-[#A98BE3]/10 p-8 sm:p-14 text-center max-w-2xl mx-auto"
            >
              {/* Subtle success animation icon */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  delay: 0.1
                }}
                className="w-20 h-20 rounded-full bg-[#F6F2FF] border border-[#E9D9FF] text-[#7C3AED] flex items-center justify-center mx-auto mb-6 shadow-sm shadow-[#A98BE3]/20"
              >
                <CheckCircle2 className="w-10 h-10 text-[#7C3AED]" />
              </motion.div>

              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: 0.2 }}
                className="text-3xl sm:text-4xl font-extrabold text-[#1E1B4B] font-display tracking-tight mb-4"
              >
                Thank You!
              </motion.h3>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: 0.3 }}
                className="text-base sm:text-lg text-[#64748B] leading-relaxed max-w-md mx-auto mb-8"
              >
                Thanks for sharing your project details. We've received your inquiry and will get in touch with you soon.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: 0.4 }}
              >
                <button
                  type="button"
                  id="discuss-another-idea-btn"
                  onClick={handleReset}
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-white border border-[#E9D9FF] hover:border-[#A98BE3] hover:bg-[#F6F2FF] text-sm font-bold text-[#1E1B4B] hover:text-[#7C3AED] transition-all shadow-xs hover:shadow-md cursor-pointer group"
                >
                  <RotateCcw className="w-4 h-4 text-[#7C3AED] transition-transform duration-300 group-hover:-rotate-90" />
                  <span>Discuss Another Idea or Project</span>
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
