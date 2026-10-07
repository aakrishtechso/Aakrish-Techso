import {
  CheckCircle2,
  Calendar,
  ShoppingBag,
  Truck,
  Sliders,
  Layers,
  Sparkles,
  ArrowUpRight,
  MessageSquare,
  Users,
  Car,
  PartyPopper,
  HardHat,
  GitBranch,
  FileCheck2,
  Code2
} from "lucide-react";

export const MockupVisual = ({ type, className = "" }) => {
  // Haiwa - Social Community & Real-time Chat
  if (type === "haiwa") {
    return (
      <div className={`relative rounded-2xl border border-[#E9D9FF] bg-white shadow-xl overflow-hidden ${className}`}>
        <div className="px-5 py-3 bg-[#F6F2FF] border-b border-[#E9D9FF] flex items-center justify-between text-xs">
          <div className="flex items-center gap-2 text-[#1E1B4B] font-semibold">
            <MessageSquare className="w-3.5 h-3.5 text-[#06B6D4]" /> Haiwa • Real-Time Community Hub
          </div>
          <span className="px-2.5 py-0.5 rounded-full text-[10px] bg-[#06B6D4]/15 text-[#0891B2] font-semibold border border-[#06B6D4]/30 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#06B6D4] animate-pulse" />
            Live WebSockets
          </span>
        </div>
        <div className="p-5 space-y-3.5">
          {/* Post preview */}
          <div className="p-4 rounded-xl bg-[#F6F2FF] border border-[#E9D9FF] space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#06B6D4] to-[#3B82F6] flex items-center justify-center text-white text-xs font-bold shadow-2xs">
                JD
              </div>
              <div className="flex-1">
                <div className="text-xs font-bold text-[#1E1B4B] flex items-center gap-1.5">
                  Jordan Developer <span className="text-[10px] font-mono text-[#06B6D4]">@jordandev</span>
                </div>
                <div className="text-[10px] text-[#64748B]">2 minutes ago • Tech & Frontend Channel</div>
              </div>
            </div>
            <p className="text-xs text-[#1E1B4B] leading-relaxed">
              Just deployed our new collaborative component library with zero runtime layout shift! Excited to hear feedback from the community. 🚀
            </p>
            <div className="flex items-center gap-4 pt-1 border-t border-[#E9D9FF]/70 text-[11px] text-[#64748B]">
              <span className="flex items-center gap-1 text-[#06B6D4] font-semibold">
                ❤️ 142 Likes
              </span>
              <span className="flex items-center gap-1">
                💬 28 Comments
              </span>
              <span className="flex items-center gap-1">
                🔖 19 Saves
              </span>
            </div>
          </div>

          {/* Active channels and live chat stream */}
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="p-3 rounded-xl bg-white border border-[#E9D9FF] flex items-center justify-between">
              <div>
                <div className="text-[10px] text-[#64748B]">Active Rooms</div>
                <div className="font-bold text-[#1E1B4B] text-xs">24 Channels</div>
              </div>
              <Users className="w-4 h-4 text-[#06B6D4]" />
            </div>
            <div className="p-3 rounded-xl bg-white border border-[#E9D9FF] flex items-center justify-between">
              <div>
                <div className="text-[10px] text-[#64748B]">Messaging Latency</div>
                <div className="font-bold text-[#10B981] text-xs">&lt;18ms P99</div>
              </div>
              <span className="w-2 h-2 rounded-full bg-[#10B981]" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  // RentRide - Vehicle Rental & Fleet Matrix
  if (type === "rentride") {
    return (
      <div className={`relative rounded-2xl border border-[#E9D9FF] bg-white shadow-xl overflow-hidden ${className}`}>
        <div className="px-5 py-3 bg-[#F6F2FF] border-b border-[#E9D9FF] flex items-center justify-between text-xs">
          <div className="flex items-center gap-2 text-[#1E1B4B] font-semibold">
            <Car className="w-3.5 h-3.5 text-[#10B981]" /> RentRide • Fleet Availability & Booking
          </div>
          <span className="px-2.5 py-0.5 rounded-full text-[10px] bg-[#10B981]/15 text-[#047857] font-semibold border border-[#10B981]/30">
            Instant Confirmation
          </span>
        </div>
        <div className="p-5 space-y-3.5">
          <div className="p-4 rounded-xl bg-[#F6F2FF] border border-[#E9D9FF] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#10B981] font-semibold">Featured Vehicle</span>
              <div className="text-sm font-bold text-[#1E1B4B]">Tesla Model 3 • Long Range AWD</div>
              <div className="text-[11px] text-[#64748B] flex items-center gap-2">
                <span>Automatic</span>
                <span>•</span>
                <span>5 Seats</span>
                <span>•</span>
                <span>Electric (540km Range)</span>
              </div>
            </div>
            <div className="text-right sm:border-l sm:border-[#E9D9FF] sm:pl-4">
              <div className="text-xs text-[#64748B]">Daily Rental</div>
              <div className="text-base font-extrabold text-[#1E1B4B] font-display">$89 <span className="text-xs font-normal text-[#64748B]">/ day</span></div>
              <span className="inline-block mt-1 px-2 py-0.5 rounded-md bg-[#10B981] text-white text-[10px] font-semibold">
                Available Today
              </span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2 text-center text-xs">
            <div className="p-2.5 rounded-xl bg-white border border-[#E9D9FF]">
              <div className="text-[10px] text-[#64748B]">Deposit</div>
              <div className="font-bold text-[#1E1B4B]">$200 (Hold)</div>
            </div>
            <div className="p-2.5 rounded-xl bg-white border border-[#E9D9FF]">
              <div className="text-[10px] text-[#64748B]">Insurance</div>
              <div className="font-bold text-[#10B981]">Full Coverage</div>
            </div>
            <div className="p-2.5 rounded-xl bg-white border border-[#E9D9FF]">
              <div className="text-[10px] text-[#64748B]">KYC Verification</div>
              <div className="font-bold text-[#7C3AED]">Instant Scan</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // NestParty - Event Planning & Venue Discovery
  if (type === "nestparty") {
    return (
      <div className={`relative rounded-2xl border border-[#E9D9FF] bg-white shadow-xl overflow-hidden ${className}`}>
        <div className="px-5 py-3 bg-[#F6F2FF] border-b border-[#E9D9FF] flex items-center justify-between text-xs">
          <div className="flex items-center gap-2 text-[#1E1B4B] font-semibold">
            <PartyPopper className="w-3.5 h-3.5 text-[#EC4899]" /> NestParty • Venue Discovery & RSVP
          </div>
          <span className="px-2.5 py-0.5 rounded-full text-[10px] bg-[#EC4899]/15 text-[#BE185D] font-semibold border border-[#EC4899]/30">
            Booking Active
          </span>
        </div>
        <div className="p-5 space-y-3.5">
          <div className="p-4 rounded-xl bg-[#F6F2FF] border border-[#E9D9FF] space-y-2.5">
            <div className="flex justify-between items-start">
              <div>
                <span className="text-[10px] font-mono text-[#EC4899] font-semibold uppercase tracking-wider">Featured Venue</span>
                <div className="text-sm font-bold text-[#1E1B4B]">Skyline Panorama Penthouse Lounge</div>
                <div className="text-[11px] text-[#64748B]">Downtown District • Capacity: 40–120 Guests</div>
              </div>
              <span className="px-2.5 py-1 rounded-lg bg-white border border-[#E9D9FF] text-xs font-bold text-[#EC4899] shadow-2xs">
                $450 / slot
              </span>
            </div>
            <div className="grid grid-cols-3 gap-1.5 pt-2 border-t border-[#E9D9FF]/70 text-[10px] text-[#64748B]">
              <span className="flex items-center gap-1">✨ Rooftop Access</span>
              <span className="flex items-center gap-1">🎵 Pro Audio Rig</span>
              <span className="flex items-center gap-1">🍸 Bar Staff Included</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="p-3 rounded-xl bg-white border border-[#E9D9FF] flex items-center justify-between">
              <div>
                <div className="text-[10px] text-[#64748B]">Guest RSVPs</div>
                <div className="font-bold text-[#1E1B4B]">48 Confirmed (96%)</div>
              </div>
              <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
            </div>
            <div className="p-3 rounded-xl bg-white border border-[#E9D9FF] flex items-center justify-between">
              <div>
                <div className="text-[10px] text-[#64748B]">Add-on Catering</div>
                <div className="font-bold text-[#EC4899]">Chef Package</div>
              </div>
              <Sparkles className="w-4 h-4 text-[#EC4899]" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  // BuiltMart - B2B Construction Materials Marketplace
  if (type === "builtmart") {
    return (
      <div className={`relative rounded-2xl border border-[#E9D9FF] bg-white shadow-xl overflow-hidden ${className}`}>
        <div className="px-5 py-3 bg-[#F6F2FF] border-b border-[#E9D9FF] flex items-center justify-between text-xs">
          <div className="flex items-center gap-2 text-[#1E1B4B] font-semibold">
            <HardHat className="w-3.5 h-3.5 text-[#F59E0B]" /> BuiltMart • Materials Marketplace & RFQ
          </div>
          <span className="px-2.5 py-0.5 rounded-full text-[10px] bg-[#F59E0B]/15 text-[#B45309] font-semibold border border-[#F59E0B]/30">
            Verified Suppliers
          </span>
        </div>
        <div className="p-5 space-y-3.5">
          <div className="p-4 rounded-xl bg-[#F6F2FF] border border-[#E9D9FF] space-y-2">
            <div className="flex justify-between items-start">
              <div>
                <span className="text-[10px] font-mono text-[#F59E0B] font-semibold uppercase tracking-wider">RFQ Tender #BM-4091</span>
                <div className="text-sm font-bold text-[#1E1B4B]">UltraTech 53 Grade OPC Cement (500 Bags)</div>
                <div className="text-[11px] text-[#64748B]">Site Location: Sector 62 Commercial Tower</div>
              </div>
              <span className="px-2.5 py-1 rounded-lg bg-[#10B981]/15 text-[#047857] text-xs font-semibold">
                3 Live Bids
              </span>
            </div>
            <div className="flex items-center justify-between pt-2 border-t border-[#E9D9FF]/70 text-[11px]">
              <span className="text-[#64748B]">Lowest Supplier Quote:</span>
              <span className="font-bold text-[#1E1B4B] text-xs">₹340 / bag • Free Site Delivery</span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2 text-center text-xs">
            <div className="p-2.5 rounded-xl bg-white border border-[#E9D9FF]">
              <div className="text-[10px] text-[#64748B]">Material Calc</div>
              <div className="font-bold text-[#1E1B4B]">Volumetric</div>
            </div>
            <div className="p-2.5 rounded-xl bg-white border border-[#E9D9FF]">
              <div className="text-[10px] text-[#64748B]">GST Invoicing</div>
              <div className="font-bold text-[#10B981]">Automated</div>
            </div>
            <div className="p-2.5 rounded-xl bg-white border border-[#E9D9FF]">
              <div className="text-[10px] text-[#64748B]">Dispatch Tracking</div>
              <div className="font-bold text-[#F59E0B]">GPS Enabled</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // DSA Web App - Data Structures & Algorithms Visualizer
  if (type === "dsa") {
    return (
      <div className={`relative rounded-2xl border border-[#E9D9FF] bg-white shadow-xl overflow-hidden ${className}`}>
        <div className="px-5 py-3 bg-[#F6F2FF] border-b border-[#E9D9FF] flex items-center justify-between text-xs">
          <div className="flex items-center gap-2 text-[#1E1B4B] font-semibold">
            <GitBranch className="w-3.5 h-3.5 text-[#7C3AED]" /> DSA Game Hub • Binary Search Tree
          </div>
          <span className="px-2.5 py-0.5 rounded-full text-[10px] bg-[#7C3AED]/15 text-[#7C3AED] font-semibold border border-[#7C3AED]/30 font-mono">
            O(log n) Search
          </span>
        </div>
        <div className="p-5 space-y-3.5">
          <div className="p-4 rounded-xl bg-[#F6F2FF] border border-[#E9D9FF] flex flex-col items-center justify-center py-6">
            {/* Minimal SVG Tree Visualizer */}
            <div className="flex flex-col items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#7C3AED] text-white flex items-center justify-center font-bold text-xs shadow-xs">
                50
              </div>
              <div className="flex items-center gap-12">
                <div className="w-8 h-8 rounded-full bg-[#A98BE3] text-white flex items-center justify-center font-bold text-xs shadow-2xs">
                  25
                </div>
                <div className="w-8 h-8 rounded-full bg-[#A98BE3] text-white flex items-center justify-center font-bold text-xs shadow-2xs">
                  75
                </div>
              </div>
            </div>
            <div className="mt-4 text-[11px] font-mono text-[#7C3AED] bg-white px-3 py-1 rounded-full border border-[#E9D9FF]">
              Traversal: In-Order [25, 50, 75]
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="p-3 rounded-xl bg-white border border-[#E9D9FF] text-center">
              <div className="text-[10px] text-[#64748B]">Interactive Challenge</div>
              <div className="font-bold text-[#1E1B4B]">Tree Balance Check</div>
            </div>
            <div className="p-3 rounded-xl bg-white border border-[#E9D9FF] text-center">
              <div className="text-[10px] text-[#64748B]">Player Score</div>
              <div className="font-bold text-[#10B981]">1,240 XP (Master)</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Resume Analyzer - AI Resume & ATS Optimizer
  if (type === "resume") {
    return (
      <div className={`relative rounded-2xl border border-[#E9D9FF] bg-white shadow-xl overflow-hidden ${className}`}>
        <div className="px-5 py-3 bg-[#F6F2FF] border-b border-[#E9D9FF] flex items-center justify-between text-xs">
          <div className="flex items-center gap-2 text-[#1E1B4B] font-semibold">
            <FileCheck2 className="w-3.5 h-3.5 text-[#7C3AED]" /> Resume Analyzer • ATS Audit Matrix
          </div>
          <span className="px-2.5 py-0.5 rounded-full text-[10px] bg-[#10B981]/15 text-[#047857] font-semibold border border-[#10B981]/30">
            Score: 92/100
          </span>
        </div>
        <div className="p-5 space-y-3.5">
          <div className="p-4 rounded-xl bg-[#F6F2FF] border border-[#E9D9FF] space-y-2">
            <div className="flex justify-between items-center text-xs">
              <span className="font-bold text-[#1E1B4B]">ATS Formatting & Parsing Test</span>
              <span className="text-[#10B981] font-semibold">98% Pass</span>
            </div>
            <div className="w-full bg-white rounded-full h-2 border border-[#E9D9FF] overflow-hidden">
              <div className="bg-gradient-to-r from-[#10B981] to-[#7C3AED] h-2 rounded-full" style={{ width: "92%" }} />
            </div>
            <div className="flex flex-wrap gap-1.5 pt-2">
              <span className="px-2 py-0.5 rounded-md bg-white border border-[#E9D9FF] text-[10px] text-[#047857] font-medium">✓ Clean Section Headers</span>
              <span className="px-2 py-0.5 rounded-md bg-white border border-[#E9D9FF] text-[10px] text-[#047857] font-medium">✓ Action Verbs Matched</span>
              <span className="px-2 py-0.5 rounded-md bg-white border border-[#E9D9FF] text-[10px] text-[#047857] font-medium">✓ Contact Info Verified</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="p-3 rounded-xl bg-white border border-[#E9D9FF]">
              <div className="text-[10px] text-[#64748B]">Target Role Match</div>
              <div className="font-bold text-[#1E1B4B]">Senior Frontend Eng</div>
            </div>
            <div className="p-3 rounded-xl bg-white border border-[#E9D9FF]">
              <div className="text-[10px] text-[#64748B]">Missing Keywords</div>
              <div className="font-bold text-[#7C3AED]">+3 Suggested</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Developer Portfolio Architecture
  if (type === "portfolio") {
    return (
      <div className={`relative rounded-2xl border border-[#E9D9FF] bg-white shadow-xl overflow-hidden ${className}`}>
        <div className="px-5 py-3 bg-[#F6F2FF] border-b border-[#E9D9FF] flex items-center justify-between text-xs">
          <div className="flex items-center gap-2 text-[#1E1B4B] font-semibold">
            <Code2 className="w-3.5 h-3.5 text-[#7C3AED]" /> Developer Portfolio • System Architecture
          </div>
          <span className="text-[10px] font-mono text-[#7C3AED] bg-[#E9D9FF] px-2 py-0.5 rounded-full font-medium">
            Core Web Vitals 100
          </span>
        </div>
        <div className="p-5 space-y-3 text-xs">
          <div className="p-3.5 rounded-xl bg-[#F6F2FF] border border-[#E9D9FF] flex items-center justify-between">
            <div>
              <div className="font-bold text-[#1E1B4B]">Responsive Engineering Showcase</div>
              <div className="text-[11px] text-[#64748B]">Production case studies, interactive UI demos & micro-interactions</div>
            </div>
            <ArrowUpRight className="w-4 h-4 text-[#7C3AED]" />
          </div>
          <div className="grid grid-cols-3 gap-2 text-center text-xs">
            <div className="p-2.5 rounded-xl bg-white border border-[#E9D9FF]">
              <div className="text-[10px] text-[#64748B]">Framework</div>
              <div className="font-bold text-[#1E1B4B]">React + Vite</div>
            </div>
            <div className="p-2.5 rounded-xl bg-white border border-[#E9D9FF]">
              <div className="text-[10px] text-[#64748B]">Styling</div>
              <div className="font-bold text-[#7C3AED]">Tailwind CSS</div>
            </div>
            <div className="p-2.5 rounded-xl bg-white border border-[#E9D9FF]">
              <div className="text-[10px] text-[#64748B]">Performance</div>
              <div className="font-bold text-[#10B981]">&lt;0.8s FCP</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Default fallback
  return (
    <div className={`relative rounded-2xl border border-[#E9D9FF] bg-white shadow-xl overflow-hidden ${className}`}>
      <div className="px-5 py-3 bg-[#F6F2FF] border-b border-[#E9D9FF] flex items-center justify-between text-xs">
        <div className="flex items-center gap-2 text-[#1E1B4B] font-semibold">
          <Layers className="w-3.5 h-3.5 text-[#7C3AED]" /> Digital Interface Platform
        </div>
        <span className="text-[10px] text-[#64748B]">Clean TypeScript</span>
      </div>
      <div className="p-5 space-y-2.5 text-xs text-[#64748B]">
        <div className="p-3.5 rounded-xl bg-[#F6F2FF] border border-[#E9D9FF]">
          <div className="flex justify-between items-center text-[#1E1B4B] font-semibold mb-1">
            <span>High Performance Web Application</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#7C3AED]" />
          </div>
          <p className="text-[11px] text-[#64748B]">
            Modular component trees, zero layout shift, and clean accessible standards.
          </p>
        </div>
      </div>
    </div>
  );
};
