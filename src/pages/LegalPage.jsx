import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ShieldCheck, ArrowLeft, Lock } from "lucide-react";
import { COMPANY_INFO } from "../data/agencyData";

export const LegalPage = ({ type }) => {
  const isPrivacy = type === "privacy";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [type]);

  return (
    <div id="legal-page" className="pt-28 pb-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white min-h-screen">
      <div className="mb-8 text-left">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs font-semibold text-[#64748B] hover:text-[#7C3AED] transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Home</span>
        </Link>
      </div>

      <div className="p-8 sm:p-12 rounded-3xl bg-[#F6F2FF] border border-[#E9D9FF] space-y-6 text-left shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-white border border-[#E9D9FF] text-[#7C3AED] flex items-center justify-center shadow-xs">
            {isPrivacy ? <Lock className="w-6 h-6" /> : <ShieldCheck className="w-6 h-6" />}
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-[#1E1B4B] font-display">
              {isPrivacy ? "Privacy Policy" : "Terms of Service"}
            </h1>
            <p className="text-xs text-[#64748B] mt-0.5">Last updated: January 2026</p>
          </div>
        </div>

        <div className="space-y-6 text-sm text-[#64748B] leading-relaxed border-t border-[#E9D9FF] pt-6">
          {isPrivacy ? (
            <>
              <section className="space-y-2">
                <h2 className="text-base font-bold text-[#1E1B4B]">1. Information We Collect</h2>
                <p>
                  At {COMPANY_INFO.name}, we only collect information that you explicitly provide to us when submitting project inquiries, such as your full name, business email address, company name, phone number, and project descriptions.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="text-base font-bold text-[#1E1B4B]">2. How We Use Your Information</h2>
                <p>
                  Inquiry information is used strictly to communicate with you regarding your project scope, provide technical estimations, and formulate tailored proposals. We never sell, rent, or distribute your personal or commercial contact information to third parties.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="text-base font-bold text-[#1E1B4B]">3. Data Security & Confidentiality</h2>
                <p>
                  All project inquiries and business requirements shared with our agency are treated with strict confidentiality. Non-disclosure agreements (NDAs) are gladly executed prior to deep architectural reviews upon request.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="text-base font-bold text-[#1E1B4B]">4. Contact</h2>
                <p>
                  If you have any questions regarding this Privacy Policy, contact our privacy team at{" "}
                  <a href={`mailto:${COMPANY_INFO.email}`} className="text-[#7C3AED] underline font-medium">
                    {COMPANY_INFO.email}
                  </a>
                  .
                </p>
              </section>
            </>
          ) : (
            <>
              <section className="space-y-2">
                <h2 className="text-base font-bold text-[#1E1B4B]">1. Engagement Terms</h2>
                <p>
                  {COMPANY_INFO.name} delivers bespoke software development, UI/UX design, and web engineering services under formal Statements of Work (SOW) agreed upon between the client and our agency.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="text-base font-bold text-[#1E1B4B]">2. Intellectual Property & Code Ownership</h2>
                <p>
                  Upon completion of milestone obligations and full settlement of invoices, 100% of custom source code, assets, design files, and databases generated specifically for the client are transferred in full ownership to the client.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="text-base font-bold text-[#1E1B4B]">3. Quality & Warranties</h2>
                <p>
                  All delivered web applications and custom software include a dedicated post-launch warranty period to resolve any functional discrepancies against agreed specifications.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="text-base font-bold text-[#1E1B4B]">4. Contact & Inquiries</h2>
                <p>
                  For questions regarding our service agreements, reach out to{" "}
                  <a href={`mailto:${COMPANY_INFO.email}`} className="text-[#7C3AED] underline font-medium">
                    {COMPANY_INFO.email}
                  </a>
                  .
                </p>
              </section>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
