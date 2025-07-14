import { Mail, Twitter, Linkedin, ArrowRight, Instagram, Youtube } from "lucide-react";
import Logo from "./ui/Logo";
import { Link } from "react-router-dom";

const quickLinks = [
  { name: "About Us", to: "/about", isRoute: true },
  { name: "Career", to: "/career", isRoute: true },
  { name: "Blog", to: "/blog", isRoute: true },
  { name: "Contact", to: "/contact", isRoute: true },
];

const services = [
  { name: "DST Labs", to: "/dst-labs", isRoute: true },
  { name: "DST Advisory", to: "/dst-advisory", isRoute: true },
  { name: "DST Training", to: "/dst-training", isRoute: true },
];

const Footer = () => {
  return (
    <footer className="font-inter bg-brand-navy text-white pt-16 pb-8 mt-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Logo & Motto */}
        <div>
          <Logo className="w-32 h-24 bg-white p-2 rounded-lg mb-6" />
          <p className="text-gray-300 mt-4 max-w-xs text-sm italic">
            Innovating. Empowering. Transforming.
          </p>
          <div className="mt-8 space-y-4 text-sm text-gray-300">
            <div className="flex items-center gap-3">
              <span role="img" aria-label="Nigeria">🇳🇬</span>
              <span>DST Labs, Lagos, Nigeria</span>
            </div>
            <div className="flex items-center gap-3">
              <span role="img" aria-label="Qatar">🇶🇦</span>
              <span>Floor 8, QFC Towers, Doha, Qatar</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-brand-gold" />
              <a href="mailto:info@decisionspaak.com" className="hover:text-brand-gold transition">info@decisionspaak.com</a>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-brand-gold" />
              <a href="mailto:osip@decisionspaak.com" className="hover:text-brand-gold transition">osip@decisionspaak.com</a>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-6 border-b border-brand-gold/30 pb-2">Quick Links</h3>
          <ul className="space-y-3 text-sm text-gray-300">
            {quickLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.to}
                  className="inline-flex items-center hover:text-brand-gold transition-colors duration-200 group"
                >
                  <ArrowRight className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform" />
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-xl font-bold mb-6 border-b border-brand-gold/30 pb-2">Services</h3>
          <ul className="space-y-3 text-sm text-gray-300">
            {services.map((service) => (
              <li key={service.name}>
                <Link
                  to={service.to}
                  className="inline-flex items-center hover:text-brand-gold transition-colors duration-200 group"
                >
                  <ArrowRight className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform" />
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-xl font-bold mb-6 border-b border-brand-gold/30 pb-2">Newsletter</h3>
          <p className="text-sm mb-4 text-gray-300">Subscribe to our newsletter for the latest updates and insights.</p>
          <form className="flex rounded overflow-hidden shadow-md">
            <input
              type="email"
              placeholder="Your email"
              required
              className="px-4 py-2 w-full text-gray-900 outline-none focus:ring-2 focus:ring-brand-gold"
            />
            <button
              type="submit"
              aria-label="Subscribe"
              className="bg-brand-gold hover:bg-yellow-400 px-4 flex items-center justify-center transition-all"
            >
              <Mail className="text-brand-navy w-5 h-5" />
            </button>
          </form>
          <div className="flex gap-4 mt-4">
            <a href="http://x.com/decisionspaak" aria-label="Twitter" className="hover:text-brand-gold"><Twitter className="w-5 h-5" /></a>
            <a href="http://linkedin.com/company/decisionspaak" aria-label="LinkedIn" className="hover:text-brand-gold"><Linkedin className="w-5 h-5" /></a>
            <a href="https://instagram.com/decisionspaak" aria-label="Instagram" className="hover:text-brand-gold"><Instagram className="w-5 h-5" /></a>
            <a href="https://youtube.com/@decisionspaak?si=RAZ5mQXKWWM3GrTL" aria-label="YouTube" className="hover:text-brand-gold"><Youtube className="w-5 h-5" /></a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-brand-gold/10 mt-12 pt-4 text-center text-gray-500 text-xs">
        © 2025 DecisionSpaak Technologies. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
