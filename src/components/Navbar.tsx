import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import Logo from "./ui/Logo";
import { cn } from "@/lib/utils";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#why-partner" },
  { label: "Contact", href: "#contact" },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleNavClick = (href: string) => {
    if (href.startsWith("#")) {
      if (location.pathname === "/") {
        document.getElementById(href.substring(1))?.scrollIntoView({ behavior: "smooth" });
      } else {
        navigate("/");
        setTimeout(() => {
          document.getElementById(href.substring(1))?.scrollIntoView({ behavior: "smooth" });
        }, 500);
      }
    } else {
      navigate(href);
    }
    setIsOpen(false);
  };

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 ease-in-out",
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-md border-b border-gray-200"
          : "bg-gradient-to-b from-white/70 to-transparent backdrop-blur-sm"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a
          href="https://decisionspaak.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="z-30 cursor-pointer flex items-center"
        >
          <Logo className="w-48 h-auto hover:opacity-80 transition-opacity duration-200" />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavClick(item.href)}
              className="text-brand-navy hover:text-brand-gold font-medium transition-all duration-300 text-base relative after:absolute after:bottom-[-2px] after:left-0 after:h-[2px] after:w-0 after:bg-brand-gold after:transition-all hover:after:w-full"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-md md:hidden z-30 hover:bg-gray-100 transition-colors"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
          aria-controls="mobile-menu"
        >
          {isOpen ? (
            <X className="h-6 w-6 text-gray-900" />
          ) : (
            <Menu className="h-6 w-6 text-gray-800" />
          )}
        </button>

        {/* Mobile Navigation */}
        <div
          id="mobile-menu"
          className={cn(
            "fixed inset-0 bg-white/95 backdrop-blur-sm z-20 transform transition-transform duration-300 ease-in-out flex flex-col items-center justify-center h-screen w-full",
            isOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavClick(item.href)}
              className="text-gray-900 hover:text-brand-gold text-xl font-semibold py-4 transition-colors"
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
