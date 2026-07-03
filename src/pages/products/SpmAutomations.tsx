import { useState, useEffect } from "react";
import { Send, Play, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import Breadcrumb from "@/components/products/Breadcrumb";
import VideoModal from "@/components/products/VideoModal";
import { setSEO } from "@/lib/seo";

import spmLinear from "@assets/spm-linear-motion-system.jpg_1782459969444.png";
import spmPneumatic from "@assets/spm-multi-station-pneumatic-assembly-machine.jpg_1782459969443.png";

const spmLinearVideo = `${import.meta.env.BASE_URL}videos/spm-linear-motion-system-demo.mp4`;
const spmPneumaticVideo = `${import.meta.env.BASE_URL}videos/spm-pneumatic-assembly-demo.mp4`;

type Machine = {
  id: string;
  title: string;
  description: string;
  image: string;
  videoSrc: string;
  specs: { label: string; value: string }[];
};

const machines: Machine[] = [
  {
    id: "linear-motion",
    title: "Linear Motion Automation System",
    description:
      "High-precision linear motion automation system engineered for custom industrial applications. Designed and built to exact client specifications with servo motor integration, precision linear guides, and programmable control systems for repeatable, accurate motion.",
    image: spmLinear,
    videoSrc: spmLinearVideo,
    specs: [
      { label: "Type", value: "Linear Motion SPM" },
      { label: "Drive System", value: "Servo Motor" },
      { label: "Control", value: "Programmable PLC" },
      { label: "Application", value: "Custom Industrial" },
      { label: "Build", value: "Made to Order" },
    ],
  },
  {
    id: "pneumatic-assembly",
    title: "Multi-Station Pneumatic Assembly Machine",
    description:
      "Custom pneumatic assembly solution designed for precision manufacturing and automated production. Features multiple workstations with pneumatic actuators, precision tooling, and synchronized operation for high-throughput industrial assembly processes.",
    image: spmPneumatic,
    videoSrc: spmPneumaticVideo,
    specs: [
      { label: "Type", value: "Multi-Station SPM" },
      { label: "Drive System", value: "Pneumatic Actuators" },
      { label: "Stations", value: "Multi-Station" },
      { label: "Application", value: "Precision Assembly" },
      { label: "Build", value: "Made to Order" },
    ],
  },
];

function MachineCard({ machine }: { machine: Machine }) {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <>
      <div
        id={machine.id}
        className="scroll-mt-[72px] bg-white border border-gray-100 rounded-sm overflow-hidden hover:shadow-2xl hover:border-gray-200 transition-all duration-300 group flex flex-col"
      >
        <div className="relative overflow-hidden" style={{ height: "280px" }}>
          <img
            src={machine.image}
            alt={machine.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

          <div className="absolute top-4 right-4">
            <span className="px-2.5 py-1 bg-primary/90 text-white text-[10px] font-bold uppercase tracking-wider rounded-sm">
              Custom SPM
            </span>
          </div>
        </div>

        <div className="p-6 flex flex-col flex-1">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-0.5 h-4 bg-primary rounded-full" />
            <span className="text-[10px] font-bold text-blue-600 uppercase tracking-[0.16em]">Automation Solution</span>
          </div>
          <h3 className="text-xl font-heading font-bold text-gray-900 mb-3 leading-snug group-hover:text-primary transition-colors">
            {machine.title}
          </h3>
          <p className="text-sm text-gray-500 leading-relaxed mb-5 flex-1">{machine.description}</p>

          <div className="border border-gray-100 rounded-sm overflow-hidden mb-5">
            <table className="w-full text-xs">
              <tbody>
                {machine.specs.map((spec, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="px-3 py-2 font-medium text-gray-600 w-2/5 border-r border-gray-100">{spec.label}</td>
                    <td className="px-3 py-2 text-gray-500">{spec.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => setVideoOpen(true)}
              className="flex-1 flex items-center justify-center gap-2 py-2.5 text-xs font-bold text-primary border border-primary/30 rounded-sm hover:bg-primary hover:text-white hover:border-primary transition-all duration-200"
            >
              <Play size={13} fill="currentColor" />
              Watch Demo
            </button>
            <Link
              href="/contact"
              className="flex-1 flex items-center justify-center gap-2 py-2.5 text-xs font-bold bg-primary text-white rounded-sm hover:bg-primary/90 transition-all duration-200 shadow-md hover:shadow-lg"
            >
              <Send size={13} />
              Request Quote
            </Link>
          </div>
        </div>
      </div>

      {videoOpen && (
        <VideoModal src={machine.videoSrc} title={machine.title} onClose={() => setVideoOpen(false)} />
      )}
    </>
  );
}

export default function SpmAutomations() {
  useEffect(() => {
    setSEO(
      "Dahar Engineering Company — Special Purpose Machines & Automation",
      "SPM and industrial automation by Dahar Engineering Company, Coimbatore — design and manufacture of special purpose machines and automation systems, including precision components."
    );
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-primary text-white py-20 md:py-28 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${spmLinear})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-blue-950/80" />
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-primary to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-6">
            <Breadcrumb items={[{ label: "Products", href: "/products" }, { label: "SPM & Automations" }]} />
          </div>
          <p className="text-[10px] font-bold tracking-[0.18em] uppercase text-blue-400 mb-4 flex items-center gap-2.5">
            <span className="w-7 h-0.5 bg-blue-400 inline-block" />
            Special Purpose Machines
          </p>
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-4 leading-tight">SPM & Automations</h1>
          <p className="text-base md:text-xl text-blue-100/85 max-w-xl font-light leading-relaxed">
            Custom special purpose machines and industrial automation solutions, engineered precisely to your requirements.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="flex items-end justify-between mb-10 md:mb-14 gap-4 flex-wrap">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-0.5 h-5 bg-primary rounded-full" />
              <span className="text-[10px] font-bold text-blue-600 uppercase tracking-[0.18em]">Our Machines</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-gray-900">
              Industrial Automation Solutions
            </h2>
          </div>
          <Link
            href="/contact"
            className="flex items-center gap-2 text-sm font-bold text-primary hover:text-primary/80 transition-colors shrink-0"
          >
            Enquire About Custom Build
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {machines.map((machine) => (
            <MachineCard key={machine.id} machine={machine} />
          ))}
        </div>
      </div>

      <div className="bg-gray-50 border-t border-gray-100 py-14 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { title: "Custom Designed", desc: "Every machine is engineered to your exact process requirements and specifications." },
              { title: "Precision Built", desc: "Manufactured using high-quality components for reliable, long-term industrial use." },
              { title: "On-Site Support", desc: "Installation, commissioning, and ongoing technical support available." },
            ].map((item) => (
              <div key={item.title} className="p-6">
                <div className="w-10 h-0.5 bg-primary mx-auto mb-4" />
                <h3 className="text-base font-heading font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-primary py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <p className="text-xs font-bold tracking-[0.16em] uppercase text-blue-400 mb-3 flex items-center justify-center gap-2.5">
            <span className="w-6 h-px bg-blue-400" />
            Custom Automation
            <span className="w-6 h-px bg-blue-400" />
          </p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4 md:mb-5">
            Have a specific automation requirement?
          </h2>
          <p className="text-blue-100/75 mb-8 md:mb-10 max-w-2xl mx-auto text-base md:text-lg leading-relaxed font-light">
            Share your process requirements and our engineering team will design and build a custom SPM solution tailored to your production needs.
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
