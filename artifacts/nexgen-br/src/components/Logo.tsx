import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface LogoProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg" | "xl";
  showText?: boolean;
}

const sizeMap = {
  sm: { box: "w-8 h-8", text: "text-base", name: "text-base", sub: "text-[8px]" },
  md: { box: "w-10 h-10", text: "text-lg", name: "text-lg", sub: "text-[9px]" },
  lg: { box: "w-14 h-14", text: "text-2xl", name: "text-xl", sub: "text-[10px]" },
  xl: { box: "w-36 h-36", text: "text-5xl", name: "text-3xl", sub: "text-sm" },
};

export const Logo = forwardRef<HTMLDivElement, LogoProps>(
  ({ className, size = "md", showText = true, ...props }, ref) => {
    const s = sizeMap[size];
    const isXl = size === "xl";
    return (
      <div ref={ref} className={cn("flex items-center gap-3", className)} {...props}>
        {/* Icon mark */}
        <div className="relative flex-shrink-0">
          <div
            className={cn(
              "relative flex items-center justify-center font-black text-white overflow-hidden shadow-lg",
              isXl ? "rounded-3xl" : "rounded-xl",
              s.box
            )}
            style={{ background: "linear-gradient(135deg, #4f6ef7 0%, #7c3aed 60%, #06b6d4 100%)" }}
          >
            {/* Inner geometric accent */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute bottom-0 left-0 w-full h-1/2 bg-black/30 rounded-b-xl" />
            </div>
            {/* Circuit-dot decoration */}
            <div className="absolute top-1 left-1 w-1 h-1 rounded-full bg-white/40" />
            <div className="absolute bottom-1 right-1 w-1 h-1 rounded-full bg-cyan-300/50" />
            <span className={cn("relative z-10 tracking-tight select-none", s.text)}>
              N
            </span>
          </div>
          {/* Glowing status dot */}
          <span
            className={cn(
              "absolute rounded-full bg-cyan-400 animate-pulse",
              "shadow-[0_0_8px_2px_rgba(6,182,212,0.7)]",
              isXl ? "w-4 h-4 -top-1.5 -right-1.5" : "w-2 h-2 -top-0.5 -right-0.5"
            )}
          />
        </div>

        {showText && (
          <div className="flex flex-col leading-tight">
            <span className={cn("font-extrabold text-white tracking-tight", s.name)}>
              NexGen{" "}
              <span
                className="font-bold"
                style={{ background: "linear-gradient(90deg,#4f6ef7,#7c3aed)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
              >
                BR
              </span>
            </span>
            <span className={cn("tracking-[0.18em] text-gray-400 font-semibold uppercase mt-0.5", s.sub)}>
              Technologies
            </span>
          </div>
        )}
      </div>
    );
  }
);

Logo.displayName = "Logo";
