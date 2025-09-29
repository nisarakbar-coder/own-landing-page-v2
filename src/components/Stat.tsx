export function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-white/10 bg-panel/60 p-4 backdrop-blur-sm">
      <div className="text-xl md:text-2xl font-semibold text-white">{value}</div>
      <div className="text-sm text-zinc-400">{label}</div>
    </div>
  );
}


