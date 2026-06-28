import { Link } from "wouter";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="border-t-4 border-blue-500" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-10 md:gap-12 mb-12">

          <div className="md:col-span-2">
            <Link href="/" className="font-heading font-bold text-xl tracking-tight mb-1 inline-block text-white hover:opacity-80 transition-opacity">
              DAHAR ENGINEERING COMPANY
            </Link>
            <p className="text-blue-400 text-xs font-medium tracking-widest uppercase mb-4">
              Precision Manufacturing
            </p>
            <p className="text-gray-400 text-sm leading-relaxed">
              Built with Precision. Driven by Quality. Reliable engineering solutions since 2019.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-bold text-sm tracking-wider uppercase text-gray-300 mb-5 pb-2 border-b border-white/10">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {["Home", "About", "Infrastructure", "Products", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-3 h-px bg-blue-400 transition-all duration-200 overflow-hidden" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-sm tracking-wider uppercase text-gray-300 mb-5 pb-2 border-b border-white/10">
              Products
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "Threaded Solutions", href: "/products/threaded-solutions" },
                { label: "SPM & Automations", href: "/products/spm-automations" },
                { label: "Tiny Parts", href: "/products/tiny-parts" },
                { label: "Custom Gauges", href: "/products/custom-gauges" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-3 h-px bg-blue-400 transition-all duration-200 overflow-hidden" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-heading font-bold text-sm tracking-wider uppercase text-gray-300 mb-5 pb-2 border-b border-white/10">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-blue-400 shrink-0" />
                <div className="text-gray-400 text-sm leading-relaxed space-y-2">
                  <div>
                    <p className="text-gray-300 font-semibold text-xs uppercase tracking-wide mb-0.5">Head Office</p>
                    <span>70, Raja Rajeshwari Nagar,<br />Srinivasa Nagar,<br />Podanur (P.O),<br />Coimbatore – 641023</span>
                  </div>
                  <div>
                    <p className="text-gray-300 font-semibold text-xs uppercase tracking-wide mb-0.5">Factory Address</p>
                    <span>#16B, Annai Indira Nagar, 4th Street,<br />Madukkarai Market Road,<br />Coimbatore – 641021</span>
                  </div>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <a href="tel:+919952873643" className="text-gray-400 hover:text-white text-sm transition-colors">
                  +91 99528 73643
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <span className="text-gray-400 text-sm">
                  info.daharengineering@gmail.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-7 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-gray-500 text-xs">
            &copy; {new Date().getFullYear()} Dahar Engineering Company. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs">
            Precision Engineering &amp; Manufacturing &mdash; Coimbatore, Tamil Nadu
          </p>
        </div>
      </div>
    </footer>
  );
}
