
import { Menu } from "lucide-react";
import React, { useState } from "react";

const navLinks = [
  { label: "About", href: "#" },
  { label: "Service", href: "#" },
  { label: "Contact", href: "#" },
];

const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="font-inter w-full bg-brand-navy shadow-sm sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 py-2 md:py-3">
        <div className="flex items-center gap-2">
          <img
            src="/lovable-uploads/85412dbc-d19c-4f63-8265-29253ad390eb.png"
            alt="DecisionSpaak Logo"
            className="h-8 w-8 rounded-full bg-white object-contain border-2 border-brand-gold"
          />
          <span className="font-bold text-lg text-white tracking-wide ml-2">DECISIONS<span className="text-brand-gold">PAAK</span><span className="ml-1 font-normal text-xs text-gray-200 tracking-normal">TECHNOLOGIES</span></span>
        </div>
        {/* Desktop Links */}
        <ul className="hidden md:flex gap-7 items-center">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href} className="text-white font-medium tracking-wide hover:text-brand-gold transition">
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <Menu className="text-white w-6 h-6 opacity-0" />
          </li>
        </ul>
        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            className="p-2 text-white rounded hover:bg-brand-gold hover:text-brand-navy transition"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Open menu"
          >
            <Menu className="w-7 h-7" />
          </button>
          {mobileOpen && (
            <div className="absolute top-full right-4 mt-3 bg-white shadow-lg rounded-lg w-48 py-2 z-50 border animate-fade-in">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block px-5 py-3 text-brand-navy hover:text-brand-gold transition"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
