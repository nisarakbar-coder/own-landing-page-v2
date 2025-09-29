import { ReactNode } from "react";

type SectionProps = {
  id?: string;
  className?: string;
  children: ReactNode;
  bordered?: boolean;
  muted?: boolean;
};

export function Section({ id, className = "", children, bordered, muted }: SectionProps) {
  return (
    <section
      id={id}
      className={`${bordered ? "border-t border-white/5" : ""} ${muted ? "bg-muted/50" : ""} ${className}`}
    >
      {children}
    </section>
  );
}


