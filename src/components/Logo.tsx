import { ComponentType } from "react";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "light" | "dark";
}

export function Logo({ className = "", size = "md", variant = "light" }: LogoProps) {
  const textSizes = {
    sm: "text-lg",
    md: "text-xl", 
    lg: "text-2xl"
  };

  return (
    <div className={`inline-flex items-center ${className}`}>
      <span className={`font-display font-bold text-white ${textSizes[size]}`}>OWN Lab</span>
    </div>
  );
}

export function LogoIcon({ className = "", size = "md" }: { className?: string; size?: "sm" | "md" | "lg" }) {
  const textSizes = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg"
  };

  return (
    <div className={`inline-flex items-center ${className}`}>
      <span className={`font-display font-bold text-gold ${textSizes[size]}`}>OWN Lab</span>
    </div>
  );
}
