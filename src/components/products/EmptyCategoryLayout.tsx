import { Link } from "wouter";
import { Send, Phone, ClipboardList } from "lucide-react";
import Breadcrumb, { type BreadcrumbItem } from "./Breadcrumb";

type EmptyCategoryLayoutProps = {
  breadcrumbs: BreadcrumbItem[];
  heroTitle: string;
  heroSubtitle: string;
  heroBackground: string;
  categoryDescription: string;
  capabilities: string[];
  icon: React.ReactNode;
};

export default function EmptyCategoryLayout({
  breadcrumbs,
  heroTitle,
  heroSubtitle,
  heroBackground,
  categoryDescription,
  capabilities,
  icon,
}: EmptyCategoryLayoutProps) {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-primary text-white py-20 md:py-28 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: heroBackground }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-blue-950/80" />
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-primary to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-6">
            <Breadcrumb items={breadcrumbs} />
          </div>
          <p className="text-[10px] font-bold tracking-[0.18em] uppercase text-blue-400 mb-4 flex items-center gap-2.5">
            <span className="w-7 h-0.5 bg-blue-400 inline-block" />
            Precision Manufacturing
          </p>
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-4 leading-tight">{heroTitle}</h1>
          <p className="text-base md:text-xl text-blue-100/85 max-w-xl font-light leading-relaxed">
            {heroSubtitle}
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-0.5 h-5 bg-primary rounded-full" />
              <span className="text-[10px] font-bold text-blue-600 uppercase tracking-[0.18em]">About This Category</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 mb-5 leading-tight">
              {heroTitle}
            </h2>
            <p className="text-gray-500 leading-relaxed mb-8">{categoryDescription}</p>

            <div className="bg-blue-50 border border-blue-100 rounded-sm p-5 mb-8">
              <div className="flex items-start gap-3">
                <ClipboardList size={18} className="text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-bold text-gray-900 mb-1">Product Catalog In Preparation</p>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    Our team is currently compiling detailed product specifications, certifications, and high-resolution imagery for this category. Contact us directly to discuss your requirements and receive tailored information.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white font-bold text-sm rounded-sm hover:bg-primary/90 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                <Send size={15} />
                Request Quote
              </Link>
              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-white text-primary font-bold text-sm rounded-sm border border-primary/30 hover:border-primary hover:bg-blue-50 transition-all duration-200"
              >
                <Phone size={15} />
                Contact Us
              </Link>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-0.5 h-5 bg-primary rounded-full" />
              <span className="text-[10px] font-bold text-blue-600 uppercase tracking-[0.18em]">Capabilities</span>
            </div>
            <div className="bg-gray-50 border border-gray-100 rounded-sm overflow-hidden mb-6">
              <div className="p-6 flex items-center justify-center border-b border-gray-100" style={{ minHeight: "200px" }}>
                {icon}
              </div>
              <div className="p-5">
                <ul className="space-y-3">
                  {capabilities.map((cap, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                      {cap}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="border border-primary/15 bg-primary/3 rounded-sm p-4">
              <p className="text-xs font-bold text-primary uppercase tracking-wider mb-1">Custom Orders Welcome</p>
              <p className="text-sm text-gray-500 leading-relaxed">
                All products are manufactured to client drawings and specifications. Share your requirements and our engineering team will respond promptly.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-primary py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <p className="text-xs font-bold tracking-[0.16em] uppercase text-blue-400 mb-3 flex items-center justify-center gap-2.5">
            <span className="w-6 h-px bg-blue-400" />
            Custom Solutions
            <span className="w-6 h-px bg-blue-400" />
          </p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            Need a custom-engineered component?
          </h2>
          <p className="text-blue-100/75 mb-8 max-w-2xl mx-auto text-base leading-relaxed font-light">
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
