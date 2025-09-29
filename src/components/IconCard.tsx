import { ComponentType } from "react";

export function IconCard({ icon: Icon, title, desc }: { icon: ComponentType<{ className?: string }>; title: string; desc: string }) {
  return (
    <div className="shine group rounded-xl border border-white/10 bg-panel/60 p-5 hover:translate-y-[-2px] transition-transform">
      <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-md bg-muted text-gold">
        <Icon className="h-5 w-5" />
      </div>
      <div className="font-medium text-white">{title}</div>
      <div className="text-sm text-zinc-400">{desc}</div>
    </div>
  );
}


