export function Step({ num, title, desc }: { num: number; title: string; desc: string }) {
  return (
    <div className="relative rounded-lg border border-white/10 bg-panel/60 p-5">
      <div className="mb-2 flex items-center gap-2 text-gold">
        <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-gold/15 text-[11px] font-semibold text-gold">{num}</span>
        <span className="font-medium text-white">{title}</span>
      </div>
      <p className="text-sm text-zinc-400">{desc}</p>
    </div>
  );
}


