import { useEffect, useRef } from "react";
import { X, Maximize2 } from "lucide-react";

type VideoModalProps = {
  src: string;
  title: string;
  onClose: () => void;
};

export default function VideoModal({ src, title, onClose }: VideoModalProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);

    const video = videoRef.current;
    if (video) {
      video.muted = true;
      video.playsInline = true;
      const tryPlay = () => {
        video.play().catch(() => {
          // Autoplay blocked — user can click controls
        });
      };
      if (video.readyState >= 2) {
        tryPlay();
      } else {
        video.addEventListener("loadeddata", tryPlay, { once: true });
      }
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
      if (video) {
        video.pause();
        video.removeAttribute("src");
        video.load();
      }
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative bg-gray-950 w-full max-w-4xl rounded-sm shadow-2xl overflow-hidden flex flex-col"
        style={{ maxHeight: "90vh" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-4 py-3 bg-gray-900 border-b border-gray-800 shrink-0">
          <div className="flex items-center gap-2.5 min-w-0">
            <Maximize2 size={14} className="text-blue-400 shrink-0" />
            <h3 className="text-white text-sm font-heading font-bold truncate">{title}</h3>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors ml-4 shrink-0 p-1 hover:bg-gray-800 rounded"
            aria-label="Close video"
          >
            <X size={18} />
          </button>
        </div>

        <div className="relative w-full bg-black" style={{ paddingTop: "56.25%" }}>
          <video
            ref={videoRef}
            src={src}
            controls
            autoPlay
            muted
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-contain"
          />
        </div>

        <div className="px-4 py-2.5 bg-gray-900 border-t border-gray-800 shrink-0">
          <p className="text-gray-500 text-[11px] text-center">
            Click outside or press <kbd className="px-1 py-0.5 bg-gray-800 text-gray-400 rounded text-[10px] font-mono">Esc</kbd> to close
          </p>
        </div>
      </div>
    </div>
  );
}
