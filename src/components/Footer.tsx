
import { Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="font-inter bg-brand-navy text-white pt-8 pb-3 mt-12">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & Motto */}
        <div className="space-y-4 col-span-1">
          <div className="flex items-center gap-2">
            <img
              src="/lovable-uploads/85412dbc-d19c-4f63-8265-29253ad390eb.png"
              alt="Footer Logo"
              className="h-11 w-11 bg-white object-contain rounded-md border-2 border-brand-gold"
            />
            <span className="font-bold text-lg text-brand-gold">DECISIONS<span className="text-white ml-1">PAAK</span></span>
          </div>
          <div className="leading-snug text-[15px]">Innovating.<br />Empowering.<br />Transforming.</div>
          <div className="mt-3">
            <div className="flex items-center gap-2">
              <span role="img" aria-label="Nigeria" className="text-lg">🇳🇬</span>
              <span className="text-sm">DST Labs, Lagos, Nigeria</span>
            </div>
            <div className="flex items-center gap-2">
              <span role="img" aria-label="Qatar" className="text-lg">🇶🇦</span>
              <span className="text-sm">Floor 8, QFC Towers, Doha, Qatar</span>
            </div>
          </div>
        </div>
        {/* Services */}
        <div>
          <div className="font-semibold text-base mb-2 text-brand-gold">Services</div>
          <ul className="text-[15px] space-y-1">
            <li>• DST Labs</li>
            <li>• DST Advisory</li>
            <li>• DST Training</li>
          </ul>
        </div>
        {/* Quick Links */}
        <div>
          <div className="font-semibold text-base mb-2 text-brand-gold">Quick Links</div>
          <ul className="text-[15px] space-y-1">
            <li><a href="#" className="hover:text-brand-gold transition">About us</a></li>
            <li><a href="#" className="hover:text-brand-gold transition">Career</a></li>
            <li><a href="#" className="hover:text-brand-gold transition">Blog</a></li>
            <li><a href="#" className="hover:text-brand-gold transition">Contact</a></li>
          </ul>
        </div>
        {/* Newsletter */}
        <div>
          <div className="font-semibold text-base mb-2 text-brand-gold">Newsletter</div>
          <div className="text-sm mb-2">Subscribe to our newsletter for the latest update and insight</div>
          <form className="flex mt-3">
            <input
              className="rounded-l-lg bg-white/90 px-3 py-2 w-full text-gray-900 outline-none focus:ring-2 focus:ring-brand-gold"
              type="email"
              placeholder="Your email"
              required
            />
            <button
              className="bg-brand-gold hover:bg-yellow-400 px-4 flex items-center rounded-r-lg transition-all"
              type="submit"
              aria-label="Subscribe"
            >
              <Mail className="text-brand-navy w-5 h-5" />
            </button>
          </form>
        </div>
      </div>
      {/* Copyright */}
      <div className="border-t border-brand-gold/10 mt-8 pt-3 text-center text-gray-300 text-xs">
        © 2025 DecisionSpaak Technologies. All right reserved
      </div>
    </footer>
  );
};

export default Footer;
