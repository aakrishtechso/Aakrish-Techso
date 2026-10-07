import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Github, Linkedin, Instagram, MessageCircle, PhoneCall } from "lucide-react";
import { COMPANY_INFO, SERVICES_DATA } from "../../data/agencyData";

export const Footer = () => {
  return (
    <footer id="main-footer" className="bg-[#F6F2FF] border-t border-[#E9D9FF] text-[#64748B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="inline-flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#A98BE3] to-[#CDB7F6] p-0.5">
                <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center">
                  <span className="font-display font-extrabold text-base text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] to-[#A98BE3]">
                    A
                  </span>
                </div>
              </div>
              <span className="font-display font-bold text-xl text-[#1E1B4B]">
                {COMPANY_INFO.name}
              </span>
            </Link>
            <p className="text-sm text-[#64748B] leading-relaxed max-w-sm">
              We design and develop modern websites and web applications that are fast, intuitive, scalable, and built around your business goals.
            </p>
            <div className="flex items-center gap-2 text-xs text-[#7C3AED] font-medium pt-1">
              <MapPin className="w-4 h-4 text-[#A98BE3] shrink-0" />
              <span>{COMPANY_INFO.location}</span>
            </div>
            <div className="pt-2 flex items-center gap-3 text-[#64748B]">
              <a
                id="footer-social-linkedin"
                href={COMPANY_INFO.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white border border-[#E9D9FF] flex items-center justify-center hover:text-[#7C3AED] hover:border-[#A98BE3] transition-all shadow-xs"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                id="footer-social-instagram"
                href={COMPANY_INFO.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white border border-[#E9D9FF] flex items-center justify-center hover:text-[#7C3AED] hover:border-[#A98BE3] transition-all shadow-xs"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                id="footer-social-github"
                href={COMPANY_INFO.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white border border-[#E9D9FF] flex items-center justify-center hover:text-[#7C3AED] hover:border-[#A98BE3] transition-all shadow-xs"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-2 space-y-3.5">
            <h3 className="text-sm font-semibold text-[#1E1B4B] tracking-wider uppercase font-mono">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="hover:text-[#7C3AED] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#7C3AED] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#7C3AED] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/lets-talk" className="hover:text-[#7C3AED] transition-colors">
                  Let's Talk
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Links */}
          <div className="lg:col-span-2 space-y-3.5">
            <h3 className="text-sm font-semibold text-[#1E1B4B] tracking-wider uppercase font-mono">
              Services
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              {SERVICES_DATA.map((service) => (
                <li key={service.id}>
                  <Link
                    to={`/services#${service.slug}`}
                    className="hover:text-[#7C3AED] transition-colors line-clamp-1"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Unified Contact Info */}
          <div className="lg:col-span-4 space-y-3.5">
            <h3 className="text-sm font-semibold text-[#1E1B4B] tracking-wider uppercase font-mono">
              Contact Us
            </h3>
            <div className="space-y-3 text-sm">
              {/* Email */}
              <a
                id="footer-email-link"
                href={`mailto:${COMPANY_INFO.email}`}
                className="flex items-center gap-2 hover:text-[#7C3AED] transition-colors group"
              >
                <div className="w-7 h-7 rounded-lg bg-[#E9D9FF] text-[#6D28D9] flex items-center justify-center shrink-0">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <span className="truncate font-mono text-xs text-[#1E1B4B] group-hover:text-[#7C3AED]">
                  {COMPANY_INFO.email}
                </span>
              </a>

              {/* Contact Numbers with Call and WhatsApp */}
              <div className="space-y-2 pt-1">
                {COMPANY_INFO.phoneNumbers.map((p) => (
                  <div
                    key={p.number}
                    className="p-2.5 rounded-xl bg-white border border-[#E9D9FF] flex items-center justify-between gap-2 shadow-xs"
                  >
                    <div className="flex items-center gap-2">
                      <Phone className="w-3.5 h-3.5 text-[#7C3AED] shrink-0" />
                      <span className="font-mono text-xs font-bold text-[#1E1B4B]">
                        {p.number}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <a
                        href={`tel:${p.number}`}
                        className="px-2.5 py-1 rounded-lg bg-[#F6F2FF] hover:bg-[#E9D9FF] text-[#6D28D9] text-[11px] font-semibold flex items-center gap-1 transition-colors"
                        title={`Call ${p.number}`}
                      >
                        <PhoneCall className="w-3 h-3" />
                        <span>Call</span>
                      </a>
                      <a
                        href={`https://wa.me/91${p.number}?text=${encodeURIComponent(
                          `Hi AAKRISH, I would like to discuss a new project.`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-2.5 py-1 rounded-lg bg-[#25D366]/15 hover:bg-[#25D366] text-[#15803d] hover:text-white text-[11px] font-bold flex items-center gap-1 transition-colors"
                        title={`WhatsApp ${p.number}`}
                      >
                        <MessageCircle className="w-3 h-3" />
                        <span>WhatsApp</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {/* Location */}
              <div className="flex items-start gap-2 text-xs text-[#64748B] pt-1">
                <MapPin className="w-4 h-4 text-[#A98BE3] shrink-0 mt-0.5" />
                <span>📍 {COMPANY_INFO.location}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Legal and Copyright */}
        <div className="mt-12 pt-8 border-t border-[#E9D9FF] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© 2026 {COMPANY_INFO.name} • {COMPANY_INFO.location}. All rights reserved.</p>
          <div className="flex items-center gap-6 text-[#64748B]">
            <Link to="/privacy-policy" className="hover:text-[#1E1B4B] transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="hover:text-[#1E1B4B] transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
