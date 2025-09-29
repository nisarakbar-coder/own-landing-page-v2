"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Sparkles, Building2, Landmark, Coins, LineChart, Banknote, Layers } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

function SectionHeading({ title, eyebrow }: { title: string; eyebrow?: string }) {
  return (
    <div className="mb-8">
      {eyebrow ? (
        <div className="text-xs uppercase tracking-widest text-zinc-400">{eyebrow}</div>
      ) : null}
      <h2 className="heading-underline font-display text-2xl md:text-3xl lg:text-4xl font-semibold">{title}</h2>
    </div>
  );
}

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] },
};

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-white/10 bg-panel/60 p-4 backdrop-blur-sm">
      <div className="text-xl md:text-2xl font-semibold text-white">{value}</div>
      <div className="text-sm text-zinc-400">{label}</div>
    </div>
  );
}

function IconCard({ icon: Icon, title, desc }: { icon: any; title: string; desc: string }) {
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

function Step({ num, title, desc }: { num: number; title: string; desc: string }) {
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

function CTAButtons() {
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

function StickyMobileCTA() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      setShow(window.scrollY > 300);
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className={`fixed inset-x-0 bottom-3 z-50 px-4 transition ${show ? "opacity-100" : "pointer-events-none opacity-0"} md:hidden`}>
      <div className="mx-auto max-w-screen-sm rounded-full border border-white/10 bg-panel/80 p-2 backdrop-blur supports-[backdrop-filter]:bg-panel/60">
        <Link href="#contact" className="shine focus-ring inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-5 py-3 text-black font-semibold">
          Start Tokenizing <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="relative">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-16 md:pt-28 md:pb-24">
          <motion.div {...fadeUp}>
            <div className="mb-4 flex flex-wrap gap-2 text-[12px] text-zinc-400">
              <span>Regulatory-aligned</span>
              <span>•</span>
              <span>Shariah-first</span>
              <span>•</span>
              <span>White-label ready</span>
            </div>
            <h1 className="font-display text-3xl leading-tight md:text-5xl lg:text-6xl">
              Tokenize Real-World Assets — Shariah-Compliant. Institution-Grade.
            </h1>
            <p className="mt-4 max-w-2xl text-zinc-300">
              OWN Lab is the end-to-end platform for issuing, managing, and trading tokenized RWAs—built for Islamic finance hubs and global capital connectivity.
            </p>
            <div className="mt-8">
              <CTAButtons />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Metrics */}
      <section aria-label="Key metrics" className="border-t border-white/5 bg-muted/50">
        <div className="mx-auto max-w-7xl px-6 py-10">
          <motion.div className="grid grid-cols-2 gap-4 md:grid-cols-4" {...fadeUp}>
            <Stat value="9+" label="jurisdictions via partner regulatory footprint" />
            <Stat value="2–6 weeks" label="issuer onboarding pipeline" />
            <Stat value="$50M" label="AUM Year-1 target" />
            <Stat value="MENA & SEA" label="first; global next" />
          </motion.div>
          <p className="mt-4 text-center text-sm text-zinc-400">
            Built for issuers, banks, family offices, and compliant retail.
          </p>
        </div>
      </section>

      {/* Strategic Positioning */}
      <section className="border-t border-white/5">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <SectionHeading title="World’s first Shariah-compliant, end-to-end tokenization platform" />
          <div className="grid gap-8 md:grid-cols-2">
            <motion.ul className="space-y-4 text-zinc-300" {...fadeUp}>
              <li>Shariah compliance leadership (advisory board, AAOIFI/IFSB alignment)</li>
              <li>Full lifecycle: pre-tokenization → issuance → compliance → secondary liquidity</li>
              <li>Regulatory stronghold: leverage DIFC/VARA/MAS pathways & partner licenses</li>
              <li>Liquidity creation: native marketplace roadmap (DEX + connectors)</li>
            </motion.ul>
            <motion.div className="grid grid-cols-2 gap-4" {...fadeUp}>
              <IconCard icon={ShieldCheck} title="Shariah-first" desc="Governance and screening baked in." />
              <IconCard icon={Layers} title="One-stop stack" desc="From structure to secondary." />
              <IconCard icon={Banknote} title="Regulatory-aligned" desc="Operate on compliant rails." />
              <IconCard icon={LineChart} title="Liquidity-oriented" desc="Designed for distribution and trading." />
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how" className="border-t border-white/5 bg-muted/50">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <SectionHeading title="How It Works" />
          <motion.ol className="grid gap-4 md:grid-cols-3 lg:grid-cols-4" {...fadeUp}>
            <Step num={1} title="Discover & Diligence" desc="Asset screening, docs intake." />
            <Step num={2} title="Structure" desc="Legal + Shariah review, templates." />
            <Step num={3} title="Tokenize" desc="Issuance SDKs, smart contracts, custody." />
            <Step num={4} title="Distribute" desc="Institutional & compliant retail channels." />
            <Step num={5} title="Comply" desc="KYC/AML/Travel Rule, reporting." />
            <Step num={6} title="Settle & Custody" desc="Firewalled, whitelisted wallets." />
            <Step num={7} title="Trade & Monitor" desc="Secondary liquidity, dashboards." />
          </motion.ol>
        </div>
      </section>

      {/* Asset Classes */}
      <section className="border-t border-white/5">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <SectionHeading title="Asset Classes" />
          <motion.div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3" {...fadeUp}>
            <IconCard icon={Banknote} title="Private Credit / Sukuk-style yield" desc="Highest near-term adoption; enterprise pilots." />
            <IconCard icon={Building2} title="Real Estate" desc="Fractional CRE/REIT-style, ijara/musharakah structures." />
            <IconCard icon={Landmark} title="Treasuries / Cash Equivalents" desc="Tokenized liquidity products (select markets)." />
            <IconCard icon={Coins} title="Commodities (Gold)" desc="Shariah-certified bullion tokens with vault partners." />
            <IconCard icon={LineChart} title="Stocks (screened baskets)" desc="Shariah-screened equity exposures via partners." />
            <IconCard icon={Sparkles} title="Carbon / ESG (optional)" desc="On-chain provenance as standards mature." />
          </motion.div>
          <p className="mt-4 text-sm text-zinc-400">Each card: 1-line benefit, “Learn more”.</p>
        </div>
      </section>

      {/* For Whom */}
      <section className="border-t border-white/5 bg-muted/50">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <SectionHeading title="Built for Issuers & Investors" />
          <div className="grid gap-8 md:grid-cols-2">
            <motion.div {...fadeUp}>
              <h3 className="font-display text-xl text-white">Issuers</h3>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-zinc-300">
                <li>Real-estate developers, sukuk originators, commodity firms, banks, sovereigns</li>
              </ul>
              <p className="mt-2 text-sm text-zinc-400">Value: Faster onboarding (2–6 weeks), turnkey legal/shariah, distribution, reporting.</p>
            </motion.div>
            <motion.div {...fadeUp}>
              <h3 className="font-display text-xl text-white">Investors</h3>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-zinc-300">
                <li>Islamic banks/wealth, family offices, compliant retail, crypto-natives</li>
              </ul>
              <p className="mt-2 text-sm text-zinc-400">Value: Ethical access, yield opportunities, regulated rails, on-chain transparency.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Regulatory & Trust */}
      <section className="border-t border-white/5">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <SectionHeading title="Regulatory & Shariah" />
          <div className="grid gap-8 md:grid-cols-2">
            <motion.div {...fadeUp}>
              <h3 className="font-display text-xl text-white">Regulatory Moat</h3>
              <p className="mt-2 text-zinc-300">Leverage partner coverage in 9 jurisdictions; target DIFC/VARA/MAS; audits, custody, reporting standards.</p>
              <p className="mt-2 text-sm text-zinc-400">Timeline: Pakistan SECP sandbox → GCC → Malaysia → global connectors.</p>
            </motion.div>
            <motion.div {...fadeUp}>
              <h3 className="font-display text-xl text-white">Shariah Governance</h3>
              <p className="mt-2 text-zinc-300">Board setup, certification process, ongoing screening; template-based structures.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feature Stack */}
      <section className="border-t border-white/5 bg-muted/50">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <SectionHeading title="Platform Features" />
          <motion.div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4" {...fadeUp}>
            <IconCard icon={Layers} title="White-label issuer portal" desc="Launch with enterprise-grade controls." />
            <IconCard icon={Sparkles} title="Tokenization SDKs" desc="Standardized issuance smart contracts." />
            <IconCard icon={ShieldCheck} title="Compliance APIs" desc="KYC/AML/Travel Rule integrations." />
            <IconCard icon={LineChart} title="Investor dashboards" desc="Real-time analytics and reporting." />
            <IconCard icon={Banknote} title="Custody/WaaS" desc="Firewalled, whitelisted wallets." />
            <IconCard icon={Coins} title="Secondary connectors" desc="Pathways to compliant liquidity." />
            <IconCard icon={Landmark} title="Marketplace roadmap" desc="Native venue for distribution." />
          </motion.div>
        </div>
      </section>

      {/* CTA Band */}
      <section id="contact" className="border-y border-white/5">
        <div className="mx-auto max-w-7xl px-6 py-16 text-center">
          <h3 className="font-display text-2xl md:text-3xl">Bring your next asset on-chain—safely and fast.</h3>
          <p className="mt-2 text-sm text-zinc-400">Enterprise pricing tailored by asset class and jurisdiction.</p>
          <div className="mt-6 flex justify-center">
            <CTAButtons />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/60">
        <div className="mx-auto max-w-7xl px-6 py-10">
          <nav aria-label="Footer" className="flex flex-wrap gap-4 text-sm text-zinc-400">
            <Link href="#" className="hover:text-white">Solutions</Link>
            <Link href="#how" className="hover:text-white">How it Works</Link>
            <Link href="#" className="hover:text-white">Compliance</Link>
            <Link href="#" className="hover:text-white">Docs</Link>
            <Link href="#contact" className="hover:text-white">Contact</Link>
          </nav>
          <div className="mt-4 flex items-center justify-between text-xs text-zinc-500">
            <span>© {new Date().getFullYear()} OWN Lab</span>
            <div className="flex gap-3">
              <Link aria-label="Twitter" href="#" className="hover:text-white">X</Link>
              <Link aria-label="LinkedIn" href="#" className="hover:text-white">LinkedIn</Link>
            </div>
          </div>
        </div>
      </footer>

      <StickyMobileCTA />
    </main>
  );
}
