import { Link } from "wouter";
import { useEffect } from "react";
import { setSEO, setBreadcrumbSchema } from "@/lib/seo";
import { Wrench, Settings, Cpu, Gauge, ArrowRight, Send } from "lucide-react";
import threadedRod from "@assets/threaded-rod.webp_1781200021680.png";
import spmLinear from "@assets/spm-linear-motion-system.jpg_1782459969444.png";

function TinyPartsPlaceholder() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-blue-50 to-slate-100 flex items-center justify-center relative overflow-hidden">
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="tp-grid" width="16" height="16" patternUnits="userSpaceOnUse">
            <path d="M 16 0 L 0 0 0 16" fill="none" stroke="#bfdbfe" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#tp-grid)" />
      </svg>
      <svg viewBox="0 0 160 120" className="w-2/3 h-2/3 relative z-10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="40" cy="40" r="14" stroke="#1e40af" strokeWidth="1.5" strokeDasharray="3 2" />
        <circle cx="40" cy="40" r="8" stroke="#3b82f6" strokeWidth="1.5" />
        <line x1="40" y1="32" x2="40" y2="48" stroke="#3b82f6" strokeWidth="1.5" />
        <line x1="32" y1="40" x2="48" y2="40" stroke="#3b82f6" strokeWidth="1.5" />
        <rect x="68" y="26" width="22" height="28" rx="2" stroke="#1e40af" strokeWidth="1.5" strokeDasharray="3 2" />
        <circle cx="79" cy="40" r="8" stroke="#3b82f6" strokeWidth="1.5" />
        <circle cx="120" cy="40" r="10" stroke="#1e40af" strokeWidth="1.5" />
        <circle cx="120" cy="40" r="4" stroke="#3b82f6" strokeWidth="1.5" fill="#dbeafe" />
        <rect x="25" y="68" width="30" height="12" rx="6" stroke="#1e40af" strokeWidth="1.5" strokeDasharray="3 2" />
        <rect x="28" y="71" width="24" height="6" rx="3" stroke="#3b82f6" strokeWidth="1" />
        <circle cx="90" cy="78" r="13" stroke="#1e40af" strokeWidth="1.5" strokeDasharray="3 2" />
        <circle cx="90" cy="78" r="6" stroke="#3b82f6" strokeWidth="1.5" />
        <path d="M 113 64 L 137 64 M 113 68 L 137 68 M 113 72 L 137 72 M 113 76 L 137 76 M 113 80 L 137 80 M 113 84 L 137 84 M 113 88 L 137 88 M 113 92 L 137 92" stroke="#3b82f6" strokeWidth="0.75" opacity="0.6" />
        <rect x="111" y="62" width="28" height="32" stroke="#1e40af" strokeWidth="1.5" strokeDasharray="3 2" />
        <path d="M 10 108 L 150 108" stroke="#93c5fd" strokeWidth="0.75" strokeDasharray="2 3" opacity="0.6" />
        <path d="M 10 18 L 10 112" stroke="#93c5fd" strokeWidth="0.75" strokeDasharray="2 3" opacity="0.6" />
      </svg>
    </div>
  );
}

function CustomGaugesPlaceholder() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-blue-50 to-slate-100 flex items-center justify-center relative overflow-hidden">
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="cg-grid" width="16" height="16" patternUnits="userSpaceOnUse">
            <path d="M 16 0 L 0 0 0 16" fill="none" stroke="#bfdbfe" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#cg-grid)" />
      </svg>
      <svg viewBox="0 0 160 130" className="w-2/3 h-2/3 relative z-10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="80" cy="68" r="46" stroke="#1e40af" strokeWidth="1.5" strokeDasharray="4 2" />
        <circle cx="80" cy="68" r="38" stroke="#3b82f6" strokeWidth="1.5" />
        <line x1="80" y1="30" x2="80" y2="39" stroke="#1e40af" strokeWidth="2" />
        <line x1="42" y1="68" x2="51" y2="68" stroke="#1e40af" strokeWidth="2" />
        <line x1="118" y1="68" x2="109" y2="68" stroke="#1e40af" strokeWidth="2" />
        <line x1="54" y1="41" x2="60" y2="47" stroke="#1e40af" strokeWidth="1.5" />
        <line x1="106" y1="41" x2="100" y2="47" stroke="#1e40af" strokeWidth="1.5" />
        <line x1="54" y1="95" x2="60" y2="89" stroke="#1e40af" strokeWidth="1.5" />
        <line x1="106" y1="95" x2="100" y2="89" stroke="#1e40af" strokeWidth="1.5" />
        <path d="M 80 68 L 60 42" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" />
        <circle cx="80" cy="68" r="4" fill="#3b82f6" stroke="#1e40af" strokeWidth="1" />
        <path d="M 30 112 L 130 112" stroke="#93c5fd" strokeWidth="0.75" strokeDasharray="2 3" opacity="0.6" />
        <line x1="30" y1="109" x2="30" y2="115" stroke="#93c5fd" strokeWidth="0.75" />
        <line x1="80" y1="109" x2="80" y2="115" stroke="#93c5fd" strokeWidth="0.75" />
        <line x1="130" y1="109" x2="130" y2="115" stroke="#93c5fd" strokeWidth="0.75" />
        <text x="27" y="124" fontSize="7" fill="#3b82f6" fontFamily="monospace">0</text>
        <text x="76" y="124" fontSize="7" fill="#3b82f6" fontFamily="monospace">50</text>
        <text x="121" y="124" fontSize="7" fill="#3b82f6" fontFamily="monospace">100</text>
        <text x="57" y="22" fontSize="7" fill="#3b82f6" fontFamily="monospace" opacity="0.7">PRECISION GAUGE</text>
      </svg>
    </div>
  );
}

type CategoryItem = {
  name: string;
  slug: string;
  icon: React.ElementType;
  desc: string;
  image: string | null;
  placeholder: React.ReactNode | null;
};

const categories: CategoryItem[] = [
  {
    name: "Threaded Solutions",
    slug: "threaded-solutions",
    icon: Wrench,
    desc: "Precision threaded components and engineered motion solutions for industrial applications.",
    image: threadedRod,
    placeholder: null,
  },
  {
    name: "SPM & Automations",
    slug: "spm-automations",
    icon: Settings,
    desc: "Custom special purpose machines and industrial automation solutions.",
    image: spmLinear,
    placeholder: null,
  },
  {
    name: "Tiny Parts",
    slug: "tiny-parts",
    icon: Cpu,
    desc: "Precision-engineered miniature components for specialized industrial applications.",
    image: null,
    placeholder: <TinyPartsPlaceholder />,
  },
  {
    name: "Custom Gauges",
    slug: "custom-gauges",
    icon: Gauge,
    desc: "Custom inspection and measurement gauges designed for industrial quality control.",
    image: null,
    placeholder: <CustomGaugesPlaceholder />,
  },
];

function CategoryCard({ cat }: { cat: CategoryItem }) {
  const Icon = cat.icon;
  return (
    <Link href={`/products/${cat.slug}`} className="group block h-full">
      <div className="h-full bg-white border border-gray-100 rounded-sm overflow-hidden hover:shadow-2xl hover:border-gray-200 hover:-translate-y-1.5 transition-all duration-300 flex flex-col cursor-pointer">
        <div className="relative overflow-hidden flex-shrink-0" style={{ height: "220px" }}>
          {cat.image ? (
            <img
              src={cat.image}
              alt={cat.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full">{cat.placeholder}</div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute top-3 left-3">
            <span className="flex items-center gap-1.5 px-2.5 py-1.5 bg-white/95 backdrop-blur-sm rounded-sm shadow-sm">
              <Icon size={13} className="text-primary" />
              <span className="text-[10px] font-bold text-gray-700 uppercase tracking-wider">{cat.name}</span>
            </span>
          </div>
        </div>

        <div className="p-5 flex flex-col flex-1 border-t border-gray-100 group-hover:border-blue-50 transition-colors">
          <h3 className="text-base font-heading font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors leading-snug">
            {cat.name}
          </h3>
          <p className="text-sm text-gray-400 leading-relaxed flex-1">{cat.desc}</p>
          <div className="mt-4">
            <span className="flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-primary text-white text-xs font-bold rounded-sm hover:bg-primary/90 transition-all duration-200 shadow-md group-hover:shadow-lg group-hover:-translate-y-0.5">
              Explore Category
              <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform duration-200" />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function Products() {
  useEffect(() => {
    setSEO(
      "Threaded Rod, Lead Screw & Jack Screw Manufacturer | Dahar Engineering Company",
      "Products from Dahar Engineering Company: threaded rod, lead screw and jack screw manufacturing in Coimbatore. Precision components for OEMs with custom sizes and tight tolerances."
    );
    setBreadcrumbSchema([
      { label: "Home", href: "/" },
      { label: "Products" },
    ]);
  }, []);
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-primary text-white py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl -translate-y-1/2 translate-x-1/4" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <p className="text-[10px] font-bold tracking-[0.18em] uppercase text-blue-400 mb-4 flex items-center gap-2.5">
            <span className="w-7 h-0.5 bg-blue-400 inline-block" />
            Precision Manufacturing
          </p>
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-4 leading-tight">Industrial Components &amp; Manufacturing Solutions</h1>
          <p className="text-base md:text-xl text-blue-100/85 max-w-xl font-light leading-relaxed">
            Dahar Engineering Company offers a complete portfolio of precision manufacturing products and industrial solutions for OEM and industrial applications, including <Link href="/products/threaded-solutions" className="underline">Threaded Solutions</Link>, <Link href="/products/spm-automations" className="underline">SPM &amp; Automations</Link>, <Link href="/products/tiny-parts" className="underline">Tiny Parts</Link>, and <Link href="/products/custom-gauges" className="underline">Custom Gauges</Link>. Explore each category for specifications and manufacturing capabilities.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="flex items-end justify-between mb-10 md:mb-14 gap-4 flex-wrap">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-0.5 h-5 bg-primary rounded-full" />
              <span className="text-[10px] font-bold text-blue-600 uppercase tracking-[0.18em]">Product Categories</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-gray-900">
              Browse Our Range
            </h2>
          </div>
          <p className="text-sm text-gray-400 max-w-xs leading-relaxed text-right">
            Select a category to explore our complete product range and specifications.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 md:gap-6">
          {categories.map((cat) => (
            <CategoryCard key={cat.slug} cat={cat} />
          ))}
        </div>
      </div>

      <div className="bg-primary py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-blue-500/10 blur-3xl -translate-y-1/2 translate-x-1/4" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <p className="text-xs font-bold tracking-[0.16em] uppercase text-blue-400 mb-3 flex items-center justify-center gap-2.5">
            <span className="w-6 h-px bg-blue-400" />
            Custom Solutions
            <span className="w-6 h-px bg-blue-400" />
          </p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4 md:mb-5">
            Need a custom-engineered component?
          </h2>
          <p className="text-blue-100/75 mb-8 md:mb-10 max-w-2xl mx-auto text-base md:text-lg leading-relaxed font-light">
            We specialize in custom Job Works and Tool Works based on client drawings and specifications. Our engineering team is ready to discuss your exact requirements.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2.5 px-8 py-4 text-sm md:text-base font-bold rounded-sm text-primary bg-white hover:bg-gray-50 transition-all duration-200 shadow-xl hover:shadow-2xl hover:-translate-y-0.5 group"
          >
            <Send size={16} className="group-hover:translate-x-0.5 transition-transform duration-200" />
            Request a Custom Quote
          </Link>
        </div>
      </div>
    </div>
  );
}
