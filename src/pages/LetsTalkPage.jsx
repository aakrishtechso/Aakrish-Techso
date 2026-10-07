import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import {
  Send,
  Phone,
  MessageCircle,
  Mail,
  CheckCircle2,
  AlertCircle,
  PhoneCall,
  Clock,
  MapPin,
  RotateCcw
} from "lucide-react";
import { COMPANY_INFO } from "../data/agencyData";

export const LetsTalkPage = () => {
  const [searchParams] = useSearchParams();
  const serviceParam = searchParams.get("service");

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Pre-fill message if service param is present
  useEffect(() => {
    if (serviceParam) {
      const decodedService = decodeURIComponent(serviceParam);
      setFormData((prev) => ({
        ...prev,
        message: prev.message || `Hi, I would like to discuss ${decodedService} for my business.`
      }));
    }
  }, [serviceParam]);

  const validate = () => {
    const errs = {};

    if (!formData.name.trim()) {
      errs.name = "Name is required";
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
      errs.email = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = "Please enter a valid email address";
    }

    if (!formData.message.trim()) {
      errs.message = "Please let us know how we can help you";
    } else if (formData.message.trim().length < 5) {
      errs.message = "Please provide a little more detail";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    // Compose professional WhatsApp message
    const formattedText = `Hello AAKRISH Techso,\n\nName: ${formData.name.trim()}\nPhone: ${formData.phone.trim()}\nEmail: ${formData.email.trim()}\n\nHow can we help:\n${formData.message.trim()}`;

    // Target phone number from company info
    const primaryPhone = "919691822276";
    const waUrl = `https://wa.me/${primaryPhone}?text=${encodeURIComponent(formattedText)}`;

    // Open WhatsApp
    window.open(waUrl, "_blank", "noopener,noreferrer");

    // Show success message state
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      name: "",
      phone: "",
      email: "",
      message: ""
    });
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <div id="lets-talk-page" className="min-h-screen bg-white pt-32 pb-24 lg:pt-36 lg:pb-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <section className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1E1B4B] tracking-tight font-display"
          >
            Let's Talk
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="text-lg sm:text-xl text-[#64748B] leading-relaxed font-normal"
          >
            Tell us what you want to build, redesign, automate, or grow.
          </motion.p>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start max-w-5xl mx-auto">
          {/* Main Form Column (7 cols) */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-white border border-[#E9D9FF] p-6 sm:p-8 lg:p-10 shadow-lg">
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.35 }}
                    className="text-center py-8 space-y-5"
                  >
                    <div className="w-16 h-16 rounded-full bg-[#10B981]/15 text-[#10B981] mx-auto flex items-center justify-center border border-[#10B981]/30">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold text-[#1E1B4B] font-display">
                        Message Ready on WhatsApp!
                      </h3>
                      <p className="text-sm text-[#64748B] max-w-md mx-auto leading-relaxed">
                        Your pre-filled message has been generated for WhatsApp. If WhatsApp didn't open automatically, click the button below.
                      </p>
                    </div>

                    <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                      <a
                        href={`https://wa.me/919691822276?text=${encodeURIComponent(
                          `Hello Aakrish Techs,\n\nName: ${formData.name.trim()}\nPhone: ${formData.phone.trim()}\nEmail: ${formData.email.trim()}\n\nHow can we help:\n${formData.message.trim()}`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-sm transition-all"
                      >
                        <MessageCircle className="w-4 h-4" />
                        <span>Open WhatsApp Now</span>
                      </a>

                      <button
                        type="button"
                        onClick={handleReset}
                        className="w-full sm:w-auto px-5 py-3 rounded-xl bg-[#F6F2FF] hover:bg-[#E9D9FF] text-[#1E1B4B] text-sm font-semibold flex items-center justify-center gap-2 border border-[#E9D9FF] transition-all cursor-pointer"
                      >
                        <RotateCcw className="w-4 h-4 text-[#7C3AED]" />
                        <span>Send Another Message</span>
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <form
                    key="form"
                    onSubmit={handleSubmit}
                    noValidate
                    className="space-y-5 text-left"
                  >
                    {/* Name */}
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-xs font-bold text-[#1E1B4B] uppercase tracking-wider mb-1.5"
                      >
                        Name <span className="text-[#EF4444]">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={(e) => {
                          setFormData({ ...formData, name: e.target.value });
                          if (errors.name) setErrors({ ...errors, name: null });
                        }}
                        className={`w-full px-4 py-3 rounded-xl bg-[#F6F2FF] border text-sm text-[#1E1B4B] placeholder-[#94A3B8] focus:bg-white focus:outline-none transition-all ${
                          errors.name
                            ? "border-[#EF4444] ring-2 ring-[#EF4444]/20"
                            : "border-[#E9D9FF] focus:border-[#7C3AED] focus:ring-2 focus:ring-[#7C3AED]/20"
                        }`}
                      />
                      {errors.name && (
                        <p className="mt-1.5 text-xs text-[#EF4444] flex items-center gap-1 font-medium">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-xs font-bold text-[#1E1B4B] uppercase tracking-wider mb-1.5"
                      >
                        Phone Number <span className="text-[#EF4444]">*</span>
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        placeholder="e.g. 9691822276"
                        value={formData.phone}
                        onChange={(e) => {
                          setFormData({ ...formData, phone: e.target.value });
                          if (errors.phone) setErrors({ ...errors, phone: null });
                        }}
                        className={`w-full px-4 py-3 rounded-xl bg-[#F6F2FF] border text-sm text-[#1E1B4B] placeholder-[#94A3B8] focus:bg-white focus:outline-none transition-all ${
                          errors.phone
                            ? "border-[#EF4444] ring-2 ring-[#EF4444]/20"
                            : "border-[#E9D9FF] focus:border-[#7C3AED] focus:ring-2 focus:ring-[#7C3AED]/20"
                        }`}
                      />
                      {errors.phone && (
                        <p className="mt-1.5 text-xs text-[#EF4444] flex items-center gap-1 font-medium">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.phone}</span>
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs font-bold text-[#1E1B4B] uppercase tracking-wider mb-1.5"
                      >
                        Email <span className="text-[#EF4444]">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="e.g. yourname@example.com"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: null });
                        }}
                        className={`w-full px-4 py-3 rounded-xl bg-[#F6F2FF] border text-sm text-[#1E1B4B] placeholder-[#94A3B8] focus:bg-white focus:outline-none transition-all ${
                          errors.email
                            ? "border-[#EF4444] ring-2 ring-[#EF4444]/20"
                            : "border-[#E9D9FF] focus:border-[#7C3AED] focus:ring-2 focus:ring-[#7C3AED]/20"
                        }`}
                      />
                      {errors.email && (
                        <p className="mt-1.5 text-xs text-[#EF4444] flex items-center gap-1 font-medium">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>

                    {/* How can we help you? */}
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-xs font-bold text-[#1E1B4B] uppercase tracking-wider mb-1.5"
                      >
                        How can we help you? <span className="text-[#EF4444]">*</span>
                      </label>
                      <textarea
                        id="message"
                        rows={5}
                        placeholder="Tell us what you want to build, redesign, automate, or grow..."
                        value={formData.message}
                        onChange={(e) => {
                          setFormData({ ...formData, message: e.target.value });
                          if (errors.message) setErrors({ ...errors, message: null });
                        }}
                        className={`w-full px-4 py-3 rounded-xl bg-[#F6F2FF] border text-sm text-[#1E1B4B] placeholder-[#94A3B8] focus:bg-white focus:outline-none transition-all resize-y ${
                          errors.message
                            ? "border-[#EF4444] ring-2 ring-[#EF4444]/20"
                            : "border-[#E9D9FF] focus:border-[#7C3AED] focus:ring-2 focus:ring-[#7C3AED]/20"
                        }`}
                      />
                      {errors.message && (
                        <p className="mt-1.5 text-xs text-[#EF4444] flex items-center gap-1 font-medium">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.message}</span>
                        </p>
                      )}
                    </div>

                    {/* Send Message Button */}
                    <div className="pt-2">
                      <button
                        id="send-message-btn"
                        type="submit"
                        className="w-full py-3.5 px-6 rounded-xl bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-md shadow-[#7C3AED]/25 transition-all hover:shadow-lg hover:-translate-y-0.5 cursor-pointer"
                      >
                        <span>Send Message</span>
                        <Send className="w-4 h-4" />
                      </button>
                    </div>
                  </form>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Direct Contact Column (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl bg-white border border-[#E9D9FF] p-6 sm:p-8 shadow-md text-left space-y-6">
              <div className="border-b border-[#E9D9FF] pb-4">
                <h2 className="text-xl font-bold text-[#1E1B4B] font-display">
                  Direct Contact
                </h2>
                <p className="text-xs text-[#64748B] mt-1">
                  Prefer direct communication? Reach us directly via call, WhatsApp, or email.
                </p>
              </div>

              {/* Call Us & WhatsApp Us actions */}
              <div className="space-y-4">
                {/* Primary Number */}
                <div className="p-4 rounded-xl bg-[#F6F2FF] border border-[#E9D9FF] space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-[11px] font-mono text-[#64748B]">Primary Line</div>
                      <div className="font-mono font-bold text-base text-[#1E1B4B]">
                        {COMPANY_INFO.phone}
                      </div>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#10B981]/15 text-[#047857] font-semibold border border-[#10B981]/30">
                      Available
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 pt-1">
                    {/* Call Us Button */}
                    <a
                      id="direct-call-btn-primary"
                      href={`tel:${COMPANY_INFO.phoneNumbers[0].number}`}
                      className="py-2.5 px-3 rounded-lg bg-white hover:bg-[#E9D9FF] text-[#1E1B4B] hover:text-[#7C3AED] text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors border border-[#E9D9FF] shadow-2xs"
                    >
                      <PhoneCall className="w-3.5 h-3.5 text-[#7C3AED]" />
                      <span>Call Us</span>
                    </a>

                    {/* WhatsApp Us Button */}
                    <a
                      id="direct-whatsapp-btn-primary"
                      href={`https://wa.me/91${COMPANY_INFO.phoneNumbers[0].number}?text=${encodeURIComponent(
                        "Hi AAKRISH Techso, I would like to discuss a project with your team."
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2.5 px-3 rounded-lg bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-colors shadow-2xs"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>WhatsApp Us</span>
                    </a>
                  </div>
                </div>

                {/* Secondary Line */}
                <div className="p-3.5 rounded-xl bg-[#F6F2FF]/70 border border-[#E9D9FF] flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-[#7C3AED]" />
                    <span className="font-mono text-xs font-bold text-[#1E1B4B]">
                      {COMPANY_INFO.phoneNumbers[1].formatted}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <a
                      href={`tel:${COMPANY_INFO.phoneNumbers[1].number}`}
                      className="px-2.5 py-1 rounded-md bg-white hover:bg-[#E9D9FF] text-[#1E1B4B] text-[11px] font-semibold transition-colors border border-[#E9D9FF]"
                    >
                      Call
                    </a>
                    <a
                      href={`https://wa.me/91${COMPANY_INFO.phoneNumbers[1].number}?text=${encodeURIComponent(
                        "Hi AAKRISH Techso, I would like to discuss a project with your team."
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-2.5 py-1 rounded-md bg-[#25D366] text-white text-[11px] font-bold transition-colors"
                    >
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="pt-2">
                <div className="text-xs font-bold text-[#1E1B4B] uppercase tracking-wider mb-2 font-mono">
                  Official Email
                </div>
                <a
                  id="direct-email-link"
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="p-3.5 rounded-xl bg-[#F6F2FF] border border-[#E9D9FF] hover:border-[#A98BE3] flex items-center gap-3 transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#E9D9FF] text-[#6D28D9] flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-[11px] text-[#64748B]">Inquiries & Proposals</div>
                    <div className="font-mono font-bold text-xs text-[#1E1B4B] group-hover:text-[#7C3AED] transition-colors truncate">
                      {COMPANY_INFO.email}
                    </div>
                  </div>
                </a>
              </div>

              {/* Additional Details */}
              <div className="pt-4 border-t border-[#E9D9FF] space-y-2 text-xs text-[#64748B]">
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#7C3AED] shrink-0" />
                  <span>{COMPANY_INFO.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-[#A98BE3] shrink-0" />
                  <span>{COMPANY_INFO.workingHours}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
