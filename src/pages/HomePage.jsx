import { Hero } from "../components/home/Hero";
import { ServicesSection } from "../components/home/ServicesSection";
import { HomeInquiryForm } from "../components/home/HomeInquiryForm";
import { HighPerformanceSection } from "../components/home/HighPerformanceSection";
import { HowWeWorkSection } from "../components/home/HowWeWorkSection";
import { HomeLetTalkCTA } from "../components/home/HomeLetTalkCTA";
import { FAQSection } from "../components/home/FAQSection";

export const HomePage = () => {
  return (
    <div id="home-page-container" className="space-y-0">
      {/* 1. Hero */}
      <Hero />

      {/* 2. Services + See More Services */}
      <ServicesSection />

      {/* 3. Let's Build Something Together / Client Inquiry Form */}
      <HomeInquiryForm />

      {/* 4. Turning Ideas Into High-Performance Digital Products */}
      <HighPerformanceSection />

      {/* 5. How We Work With You */}
      <HowWeWorkSection />

      {/* 6. Let's Talk CTA */}
      <HomeLetTalkCTA />

      {/* 7. Frequently Asked Questions (Immediately before the Footer) */}
      <FAQSection />
    </div>
  );
};
