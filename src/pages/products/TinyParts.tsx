import EmptyCategoryLayout from "@/components/products/EmptyCategoryLayout";
import { useEffect } from "react";
import { setSEO } from "@/lib/seo";

function TinyPartsIcon() {
  return (
    <svg viewBox="0 0 160 120" className="w-40 h-32" fill="none" xmlns="http://www.w3.org/2000/svg">
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
  );
}

export default function TinyParts() {
  useEffect(() => {
    setSEO(
      "Dahar Engineering Company — Precision Tiny Components",
      "Precision tiny components manufactured in Coimbatore by Dahar Engineering Company. Miniature machined parts for medical, instrumentation and industrial OEM applications produced to tight tolerances."
    );
  }, []);

  return (
    <EmptyCategoryLayout
      breadcrumbs={[{ label: "Products", href: "/products" }, { label: "Tiny Parts" }]}
      heroTitle="Tiny Parts"
      heroSubtitle="Precision-engineered miniature components manufactured to exact tolerances for specialized industrial applications."
      heroBackground="linear-gradient(135deg, #1e3a5f 0%, #1e40af 100%)"
      categoryDescription="Dahar Engineering Company manufactures precision miniature components that meet the tightest dimensional and surface quality requirements. Our tiny parts are machined on advanced CNC equipment, ensuring consistency, repeatability, and adherence to client-specified tolerances across every batch."
      capabilities={[
        "CNC-machined miniature components to tight tolerances",
        "Custom profiles manufactured to client drawings",
        "Variety of materials: stainless steel, brass, aluminium, mild steel",
        "High-volume batch production with consistent quality",
        "Surface finishing: polished, anodized, hardened",
        "Inspection and certification available on request",
      ]}
      icon={<TinyPartsIcon />}
    />
  );
}
