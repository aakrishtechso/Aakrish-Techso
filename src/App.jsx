import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { WhatsAppButton } from "./components/layout/WhatsAppButton";
import { ScrollToTop } from "./components/layout/ScrollToTop";
import { HomePage } from "./pages/HomePage";
import { ServicesPage } from "./pages/ServicesPage";
import { AboutPage } from "./pages/AboutPage";
import { LetsTalkPage } from "./pages/LetsTalkPage";
import { LegalPage } from "./pages/LegalPage";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-white text-[#1E1B4B] flex flex-col font-sans selection:bg-[#A98BE3] selection:text-white">
        {/* Global Navigation Header */}
        <Navbar />

        {/* Main Routed Content */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/lets-talk" element={<LetsTalkPage />} />
            <Route path="/contact" element={<Navigate to="/lets-talk" replace />} />
            <Route path="/privacy-policy" element={<LegalPage type="privacy" />} />
            <Route path="/terms-of-service" element={<LegalPage type="terms" />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>

        {/* Floating WhatsApp Quick-Chat */}
        <WhatsAppButton />

        {/* Global Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}
