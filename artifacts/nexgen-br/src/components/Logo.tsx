import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface LogoProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg" | "xl";
  showText?: boolean;
}

const sizes = {
  sm: "w-8 h-8 text-lg",
  md: "w-10 h-10 text-xl",
  lg: "w-16 h-16 text-3xl",
  xl: "w-40 h-40 text-7xl rounded-3xl",
};

export const Logo = forwardRef<HTMLDivElement, LogoProps>(
  ({ className, size = "md", showText = true, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("flex items-center gap-3", className)} {...props}>
        <div className="relative">
          <div
            className={cn(
              "flex items-center justify-center font-bold text-white bg-gradient-primary shadow-lg",
              size === "xl" ? "rounded-3xl" : "rounded-xl",
              sizes[size]
            )}
          >
            N
          </div>
          {/* Glowing cyan dot */}
          <div
            className={cn(
              "absolute rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.8)]",
              size === "xl" ? "w-4 h-4 -top-1 -right-1" : "w-2 h-2 -top-0.5 -right-0.5"
            )}
          />
        </div>
        {showText && (
          <div className="flex flex-col">
            <span className={cn("font-bold text-white leading-none", size === "lg" ? "text-2xl" : "text-xl")}>
              NexGen <span className="font-light text-gray-300">BR</span>
            </span>
            <span className="text-[10px] tracking-[0.2em] text-gray-400 font-medium mt-1">
              TECHNOLOGIES
            </span>
          </div>
        )}
      </div>
    );
  }
);

Logo.displayName = "Logo";
