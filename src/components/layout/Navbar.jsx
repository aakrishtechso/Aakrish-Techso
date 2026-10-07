import { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "../ui/Button";
import { COMPANY_INFO } from "../../data/agencyData";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" }
  ];

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-[#E9D9FF] shadow-xs py-3.5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            id="brand-logo-link"
            to="/"
            className="flex items-center gap-3 group cursor-pointer focus:outline-none"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#7C3AED] to-[#CDB7F6] p-0.5 shadow-sm shadow-[#A98BE3]/20 group-hover:shadow-md transition-all">
              <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center">
                <span className="font-display font-extrabold text-lg text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] to-[#A98BE3]">
                  A
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-lg text-[#1E1B4B] tracking-tight group-hover:text-[#7C3AED] transition-colors leading-tight">
                AAKRISH Techso
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav id="desktop-nav" className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                id={`nav-link-${link.name.toLowerCase()}`}
                to={link.path}
                className={({ isActive }) =>
                  `px-3.5 py-2 text-sm font-medium rounded-xl transition-all ${
                    isActive
                      ? "text-[#7C3AED] bg-[#F6F2FF] border border-[#E9D9FF] font-semibold shadow-2xs"
                      : "text-[#64748B] hover:text-[#1E1B4B] hover:bg-[#F6F2FF]"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              id="navbar-cta-button"
              to="/lets-talk"
              variant="primary"
              size="sm"
              icon={<ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />}
            >
              Let's Talk
            </Button>
          </div>

          {/* Mobile Hamburger Trigger */}
          <button
            id="mobile-menu-toggle"
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-xl text-[#1E1B4B] hover:bg-[#F6F2FF] border border-[#E9D9FF] focus:outline-none cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu with AnimatePresence */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-nav-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden fixed inset-x-0 top-[65px] bg-white/98 backdrop-blur-xl border-b border-[#E9D9FF] px-6 py-6 shadow-xl overflow-hidden"
          >
            <div className="flex flex-col space-y-2.5">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  id={`mobile-nav-${link.name.toLowerCase()}`}
                  to={link.path}
                  className={({ isActive }) =>
                    `px-4 py-3 rounded-xl text-base font-medium transition-colors flex items-center justify-between ${
                      isActive
                        ? "text-[#7C3AED] bg-[#F6F2FF] border border-[#E9D9FF] font-semibold"
                        : "text-[#64748B] hover:text-[#1E1B4B] hover:bg-[#F6F2FF]"
                    }`
                  }
                >
                  <span>{link.name}</span>
                  <span className="text-xs text-[#7C3AED]">→</span>
                </NavLink>
              ))}
              <div className="pt-3 border-t border-[#E9D9FF]">
                <Button
                  id="mobile-cta-button"
                  to="/lets-talk"
                  variant="primary"
                  size="md"
                  className="w-full"
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  Let's Talk
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
