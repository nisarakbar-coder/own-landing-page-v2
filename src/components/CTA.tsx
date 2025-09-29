import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CTAButtons() {
  return (
    <div className="flex flex-wrap gap-3">
      <Link href="#contact" className="focus-ring shine inline-flex items-center gap-2 rounded-md bg-gold px-5 py-3 text-black font-medium hover:bg-[var(--gold-600)] transition-colors">
        Start Tokenizing <ArrowRight className="h-4 w-4" />
      </Link>
      <Link href="#how" className="focus-ring inline-flex items-center gap-2 rounded-md border border-white/15 bg-transparent px-5 py-3 text-white hover:bg-white/5">
        See How It Works
      </Link>
    </div>
  );
}


