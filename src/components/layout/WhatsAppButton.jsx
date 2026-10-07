import { useState } from "react";
import { MessageCircle, X, PhoneCall } from "lucide-react";
import { COMPANY_INFO } from "../../data/agencyData";
export const WhatsAppButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState(COMPANY_INFO.phoneNumbers[0].number);
  const [customMsg, setCustomMsg] = useState("Hi AAKRISH Techso, I would like to discuss a project with your team.");
  const handleSend = () => {
    const encoded = encodeURIComponent(customMsg);
    window.open(`https://wa.me/91${selectedNumber}?text=${encoded}`, "_blank");
    setIsOpen(false);
  };
  return <div id="floating-whatsapp-container" className="fixed bottom-6 right-6 z-40">
      {
    /* Quick message popup */
  }
      {isOpen && <div className="mb-3 w-84 rounded-2xl bg-[#111827] border border-[#1F2937] shadow-2xl p-4 text-[#F8FAFC] animate-in fade-in slide-in-from-bottom-2">
          <div className="flex items-center justify-between pb-2.5 border-b border-[#1F2937]">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-[#10B981] animate-pulse" />
              <span className="text-xs font-semibold text-[#F8FAFC]">Direct WhatsApp & Call</span>
            </div>
            <button
    onClick={() => setIsOpen(false)}
    className="text-[#94A3B8] hover:text-[#F8FAFC] p-1 cursor-pointer"
  >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          <p className="text-xs text-[#94A3B8] my-2">
            Select a contact line to start a WhatsApp chat or call directly:
          </p>

          {
    /* Number Selector Tabs */
  }
          <div className="grid grid-cols-2 gap-1.5 mb-2.5">
            {COMPANY_INFO.phoneNumbers.map((p) => {
    const isSelected = selectedNumber === p.number;
    return <button
      key={p.number}
      type="button"
      onClick={() => setSelectedNumber(p.number)}
      className={`px-2.5 py-1.5 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer flex flex-col items-center ${isSelected ? "bg-[#25D366]/20 text-[#25D366] border border-[#25D366]/50" : "bg-[#0B0F19] text-[#94A3B8] border border-[#1F2937] hover:border-[#374151]"}`}
    >
                  <span className="text-[10px] text-[#94A3B8] font-sans font-normal">Line</span>
                  <span>{p.number}</span>
                </button>;
  })}
          </div>

          <textarea
    rows={2}
    value={customMsg}
    onChange={(e) => setCustomMsg(e.target.value)}
    className="w-full text-xs bg-[#0B0F19] border border-[#1F2937] rounded-lg p-2.5 text-[#F8FAFC] focus:outline-none focus:border-[#25D366] resize-none"
    placeholder="Type your project query..."
  />

          <div className="grid grid-cols-2 gap-2 mt-2.5">
            <button
    type="button"
    onClick={handleSend}
    className="flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-lg bg-[#25D366] hover:bg-[#20bd5a] text-[#0B0F19] text-xs font-bold transition-colors cursor-pointer"
  >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </button>

            <a
    href={`tel:${selectedNumber}`}
    className="flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-lg bg-[#1F2937] hover:bg-[#374151] text-[#22D3EE] text-xs font-semibold transition-colors cursor-pointer border border-[#374151]"
  >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Call Now</span>
            </a>
          </div>

          <div className="pt-2 text-[10px] text-[#94A3B8] text-center">
            📍 {COMPANY_INFO.location}
          </div>
        </div>}

      {
    /* Main trigger button */
  }
      <button
    id="whatsapp-floating-trigger"
    onClick={() => setIsOpen(!isOpen)}
    className="w-13 h-13 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-xl shadow-[#25D366]/20 flex items-center justify-center transition-transform hover:scale-105 active:scale-95 focus:outline-none cursor-pointer"
    aria-label="Chat on WhatsApp"
    title={`Chat or Call ${COMPANY_INFO.name} on WhatsApp`}
  >
        <MessageCircle className="w-6 h-6 text-white fill-current" />
      </button>
    </div>;
};
