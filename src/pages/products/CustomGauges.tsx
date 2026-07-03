import EmptyCategoryLayout from "@/components/products/EmptyCategoryLayout";
import { useEffect } from "react";
import { setSEO, setBreadcrumbSchema } from "@/lib/seo";

function CustomGaugesIcon() {
  return (
    <svg viewBox="0 0 160 130" className="w-40 h-32" fill="none" xmlns="http://www.w3.org/2000/svg">
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
  );
}

export default function CustomGauges() {
  useEffect(() => {
    setSEO(
      "Dahar Engineering Company — Custom Gauges & Inspection",
      "Custom gauges and inspection fixtures from Dahar Engineering Company, Coimbatore. Precision manufacturing for metrology and quality control with bespoke gauge design."
    );
    setBreadcrumbSchema([
      { label: "Home", href: "/" },
      { label: "Products", href: "/products" },
      { label: "Custom Gauges" },
    ]);
  }, []);

  return (
    <EmptyCategoryLayout
      breadcrumbs={[{ label: "Products", href: "/products" }, { label: "Custom Gauges" }]}
      heroTitle="Custom Gauges"
      heroSubtitle="Custom inspection and measurement gauges designed for industrial quality control and precision verification."
      heroBackground="linear-gradient(135deg, #1e3a5f 0%, #1e40af 100%)"
      categoryDescription="Dahar Engineering Company designs and manufactures custom gauges tailored to each client's specific inspection and measurement requirements. Our gauges are precision-machined to ensure accurate, repeatable measurement results in demanding industrial environments, supporting quality assurance throughout the manufacturing process."
      capabilities={[
        "Custom go/no-go gauges to client specifications",
        "Thread gauges, plug gauges, and ring gauges",
        "Gauges manufactured to IS, DIN, and client standards",
        "Hard-wearing tool steel and carbide construction",
        "Calibration and certification on request",
        "Designed for production-floor durability",
      ]}
      icon={<CustomGaugesIcon />}
    />
  );
}
