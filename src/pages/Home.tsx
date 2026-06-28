import { useState, useEffect, useCallback, useRef } from "react";
import { Link } from "wouter";
import { ArrowRight, CheckCircle2, Settings, ShieldCheck, Clock, Target, Flag, ChevronLeft, ChevronRight, ChevronDown, Wrench, Cpu, Gauge, ClipboardList } from "lucide-react";
import { RevealSection } from "@/components/RevealSection";
import heroCnc1 from "@assets/hero-cnc-1.jpg_1781200035734.jpg";
import heroCnc2 from "@assets/hero-cnc-2.jpg_1781200035733.jpeg";
import heroCnc3 from "@assets/hero-cnc-3.jpg_1781200035734.jpeg";
import statsBg from "@assets/stats-background.jpg_1781200058074.jpg";
import aboutUsImg from "@assets/aboutus.webp_1781244483406.png";

const heroImages = [heroCnc1, heroCnc2, heroCnc3];

import threadedRod from "@assets/threaded-rod.webp_1781200021680.png";
import spmImg from "@assets/homepage-spm-automation-thumbnail.png_1782453764349.png";

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

const categories = [
  {
    name: "Threaded Solutions",
    icon: Wrench,
    desc: "Precision threaded components for industrial applications.",
    image: threadedRod,
    placeholder: null,
  },
  {
    name: "SPM & Automations",
    icon: Settings,
    desc: "Custom special purpose machines and industrial automation solutions.",
    image: spmImg,
    placeholder: null,
  },
  {
    name: "Tiny Parts",
    icon: Cpu,
    desc: "Precision-engineered miniature components for specialized industrial applications.",
    image: null,
    placeholder: <TinyPartsPlaceholder />,
  },
  {
    name: "Custom Gauges",
    icon: Gauge,
    desc: "Custom inspection and measurement gauges designed for industrial quality control.",
    image: null,
    placeholder: <CustomGaugesPlaceholder />,
  },
];

const stats = [
  { number: "7+", label: "Years Experience", sub: "Proven industrial expertise", icon: Clock },
  { number: "8+", label: "Product Categories", sub: "Precision components", icon: Settings },
  { number: "100%", label: "Quality Focus", sub: "Rigorous inspection", icon: ShieldCheck },
  { number: "24/7", label: "Customer Assistance", sub: "Always available", icon: CheckCircle2 },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide((index + heroImages.length) % heroImages.length);
  }, []);

  const goNext = useCallback(() => goToSlide(currentSlide + 1), [currentSlide, goToSlide]);
  const goPrev = useCallback(() => goToSlide(currentSlide - 1), [currentSlide, goToSlide]);

  useEffect(() => {
    if (isPaused) return;
    timerRef.current = setInterval(goNext, 3000);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [isPaused, goNext]);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section
        className="relative h-[80vh] md:h-screen flex items-center justify-center overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {heroImages.map((img, index) => (
          <div
            key={index}
            className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
            style={{
              backgroundImage: `url(${img})`,
              opacity: index === currentSlide ? 1 : 0,
              zIndex: 0,
            }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/75 via-primary/65 to-primary/90 z-10" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-primary to-transparent z-10" />

        {/* Hero content */}
        <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-sm rounded-sm px-4 py-1.5 mb-6 animate-in fade-in duration-700">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
            <span className="text-blue-200 text-xs font-semibold tracking-widest uppercase">Precision Engineering &amp; Manufacturing</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white tracking-tight leading-[1.08] mb-5 md:mb-7 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
            Built with Precision.<br />
            <span className="text-blue-300">Driven by Quality.</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-blue-100/90 max-w-2xl mx-auto font-light mb-8 md:mb-10 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            Coimbatore's trusted partner for precision-engineered components, fixtures, tooling, and industrial solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
            <Link
              href="/products"
              className="inline-flex justify-center items-center gap-2 px-7 py-3.5 md:px-9 md:py-4 text-sm md:text-base font-bold rounded-sm text-primary bg-white hover:bg-gray-50 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 w-full sm:w-auto"
            >
              Explore Products
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex justify-center items-center gap-2 px-7 py-3.5 md:px-9 md:py-4 text-sm md:text-base font-bold rounded-sm text-white border-2 border-white/30 hover:bg-white/10 hover:border-white/50 transition-all duration-200 w-full sm:w-auto"
            >
              Get a Quote
            </Link>
          </div>
        </div>

        {/* Dot indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`rounded-full transition-all duration-400 ${
                index === currentSlide
                  ? "bg-white w-8 h-2"
                  : "bg-white/35 hover:bg-white/60 w-2 h-2"
              }`}
            />
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 right-6 md:right-10 z-30 hidden md:flex flex-col items-center gap-1.5 opacity-50">
          <span className="text-white text-[10px] tracking-widest uppercase font-medium writing-mode-vertical rotate-90">Scroll</span>
          <ChevronDown className="w-4 h-4 text-white animate-bounce" />
        </div>
      </section>

      {/* About Brief */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20 items-center">
            <RevealSection>
              <p className="section-overline">About Dahar Engineering Company</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-gray-900 mb-6 leading-tight">
                Delivering reliable engineering solutions since 2019.
              </h2>
              <p className="text-base md:text-lg text-gray-600 mb-5 leading-relaxed">
                Dahar Engineering Company is a Coimbatore-based engineering and manufacturing firm specializing in the design and production of precision industrial components.
              </p>
              <p className="text-base md:text-lg text-gray-600 mb-8 leading-relaxed">
                We deliver reliable solutions through quality manufacturing, skilled workmanship, and customer-focused service, providing expertly machined parts that sit inside machinery all over India.
              </p>
              <Link href="/about" className="inline-flex items-center gap-2 font-semibold text-primary hover:gap-3 transition-all duration-200 text-sm md:text-base group">
                Read our full story
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </RevealSection>

            <RevealSection delay={150} className="reveal-delay-100">
              <div className="img-hover-zoom rounded-sm overflow-hidden shadow-2xl border border-gray-100 relative">
                <div className="absolute top-4 left-4 z-10 bg-primary text-white text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded-sm">
                  Est. 2019
                </div>
                <img
                  src={aboutUsImg}
                  alt="Dahar Engineering Company — Factory Floor"
                  className="w-full h-full object-cover"
                />
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="relative py-20 md:py-28 bg-primary overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: `url(${statsBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-blue-950/80" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="bg-white/6 backdrop-blur-sm border border-white/10 rounded-sm p-6 md:p-8 text-center group hover:bg-white/10 hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-11 h-11 md:w-14 md:h-14 rounded-sm bg-blue-500/15 border border-blue-400/20 mb-4 md:mb-5 group-hover:bg-blue-500/25 transition-colors duration-300">
                  <stat.icon className="w-5 h-5 md:w-7 md:h-7 text-blue-300" />
                </div>
                <div className="text-3xl md:text-5xl font-heading font-bold text-white mb-1.5">{stat.number}</div>
                <div className="text-blue-200 font-semibold tracking-wider uppercase text-[10px] md:text-xs mb-1">{stat.label}</div>
                <div className="text-blue-300/50 text-xs hidden md:block">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealSection className="text-center mb-12 md:mb-16">
            <p className="section-overline justify-center">Our Direction</p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900">Vision &amp; Mission</h2>
          </RevealSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <RevealSection>
              <div className="bg-white border border-gray-100 rounded-sm shadow-sm hover:shadow-xl transition-all duration-400 group h-full overflow-hidden">
                <div className="h-1 bg-gradient-to-r from-primary to-blue-600" />
                <div className="p-7 md:p-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-sm bg-primary flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300 shadow-lg">
                      <Target className="w-6 h-6 md:w-7 md:h-7 text-white" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold tracking-widest uppercase text-primary/50 mb-0.5">Where we aim</p>
                      <h3 className="text-xl md:text-2xl font-heading font-bold text-primary">Our Vision</h3>
                    </div>
                  </div>
                  <div className="w-10 h-0.5 bg-blue-200 mb-5" />
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                    To be a trusted leader in precision engineering and manufacturing, delivering innovative, high-quality industrial components and engineering solutions that set the benchmark for reliability, performance, and customer satisfaction.
                  </p>
                </div>
              </div>
            </RevealSection>

            <RevealSection delay={150}>
              <div className="bg-white border border-gray-100 rounded-sm shadow-sm hover:shadow-xl transition-all duration-400 group h-full overflow-hidden">
                <div className="h-1 bg-gradient-to-r from-blue-600 to-blue-400" />
                <div className="p-7 md:p-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-sm bg-primary flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300 shadow-lg">
                      <Flag className="w-6 h-6 md:w-7 md:h-7 text-white" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold tracking-widest uppercase text-primary/50 mb-0.5">How we operate</p>
                      <h3 className="text-xl md:text-2xl font-heading font-bold text-primary">Our Mission</h3>
                    </div>
                  </div>
                  <div className="w-10 h-0.5 bg-blue-200 mb-5" />
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                    To deliver precision-engineered products through skilled workmanship, quality manufacturing practices, and a customer-focused approach. We are committed to providing reliable solutions, maintaining high quality standards, ensuring timely delivery, and building long-term relationships with our customers.
                  </p>
                </div>
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealSection className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
            <p className="section-overline justify-center">Our Products</p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">Our Product Categories</h2>
            <p className="text-gray-500 text-base md:text-lg">
              High-precision engineered products and solutions for diverse industrial applications.
            </p>
          </RevealSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-7">
            {categories.map((cat, idx) => (
              <RevealSection key={idx} delay={idx * 80} className="h-full">
                <div className="group bg-white border border-gray-100 rounded-sm overflow-visible hover:shadow-xl hover:border-gray-200 transition-all duration-350 hover:-translate-y-1.5 h-full flex flex-col">
                  {/* Image area */}
                  <div className="relative h-[180px] bg-gray-50 rounded-t-sm overflow-visible">
                    {cat.image ? (
                      <img
                        src={cat.image}
                        alt={cat.name}
                        className="w-full h-full object-cover rounded-t-sm transform group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full rounded-t-sm overflow-hidden">
                        {cat.placeholder}
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-sm" />
                    {/* Icon badge */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white border-2 border-gray-100 flex items-center justify-center shadow-md group-hover:border-primary/20 group-hover:bg-primary/5 transition-all duration-300">
                      <cat.icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                    </div>
                  </div>
                  {/* Content */}
                  <div className="pt-9 pb-6 px-6 flex flex-col flex-1">
                    <h3 className="font-heading font-bold text-gray-900 text-lg mb-1.5 group-hover:text-primary transition-colors duration-200 text-center">{cat.name}</h3>
                    <div className="w-8 h-0.5 bg-primary mx-auto mb-3" />
                    <p className="text-sm text-gray-500 leading-relaxed text-center mb-6 flex-1">{cat.desc}</p>
                    <Link
                      href="/products"
                      className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-primary text-white font-semibold text-sm rounded-sm hover:bg-primary/90 transition-all duration-200 group/btn"
                    >
                      Explore Category
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform duration-200" />
                    </Link>
                  </div>
                </div>
              </RevealSection>
            ))}
          </div>

          {/* CTA Banner */}
          <RevealSection className="mt-10 md:mt-14">
            <div className="bg-gray-50 border border-gray-200 rounded-sm p-6 md:p-8 flex flex-col md:flex-row items-center gap-5 md:gap-8">
              <div className="flex items-start gap-4 flex-1">
                <div className="w-12 h-12 shrink-0 rounded-sm bg-primary/8 border border-primary/12 flex items-center justify-center mt-0.5">
                  <ClipboardList className="w-5 h-5 text-primary" strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-gray-900 text-lg mb-1">Need a Custom Solution?</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">We specialize in precision engineering and custom manufacturing solutions tailored to your industrial requirements.</p>
                </div>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-white font-bold rounded-sm hover:bg-primary/90 transition-all duration-200 shadow-sm hover:shadow-md group/cta whitespace-nowrap text-sm md:text-base shrink-0"
              >
                Get a Quote
                <ArrowRight className="w-4 h-4 group-hover/cta:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-blue-900/30 blur-3xl translate-y-1/2 -translate-x-1/4" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <RevealSection>
            <p className="section-overline justify-center !text-blue-400 before:!bg-blue-400">Get Started</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-5 md:mb-6 leading-tight">
              Ready to discuss your<br className="hidden md:block" /> engineering requirements?
            </h2>
            <p className="text-base md:text-xl text-blue-100/80 mb-8 md:mb-10 font-light max-w-2xl mx-auto">
              Contact us today for a quote or to learn more about our precision manufacturing capabilities.
            </p>
            <Link
              href="/contact"
              className="inline-flex justify-center items-center gap-2.5 px-8 py-4 md:px-10 md:py-4.5 text-base md:text-lg font-bold rounded-sm text-primary bg-white hover:bg-gray-50 transition-all duration-200 shadow-xl hover:shadow-2xl hover:-translate-y-0.5 group"
            >
              Get in Touch
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </RevealSection>
        </div>
      </section>
    </div>
  );
}
