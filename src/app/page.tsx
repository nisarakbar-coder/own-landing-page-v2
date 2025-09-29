"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Sparkles, Building2, Landmark, Coins, LineChart, Banknote, Layers, Search, FileText, Zap, Users, Shield, Wallet, TrendingUp, Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Logo } from "@/components/Logo";

function SectionHeading({ title, eyebrow }: { title: string; eyebrow?: string }) {
  return (
    <div className="mb-6 sm:mb-8">
      {eyebrow ? (
        <div className="text-xs uppercase tracking-widest text-zinc-400">{eyebrow}</div>
      ) : null}
      <h2 className="heading-underline font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight">{title}</h2>
    </div>
  );
}

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
};

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-white/10 bg-panel/60 p-3 sm:p-4 backdrop-blur-sm">
      <div className="text-lg sm:text-xl md:text-2xl font-semibold text-white">{value}</div>
      <div className="text-xs sm:text-sm text-zinc-400 leading-tight">{label}</div>
    </div>
  );
}

function IconCard({ icon: Icon, title, desc }: { icon: React.ComponentType<{ className?: string }>; title: string; desc: string }) {
  return (
    <div className="shine group rounded-xl border border-white/10 bg-panel/60 p-4 sm:p-5 hover:translate-y-[-2px] transition-transform">
      <div className="mb-3 inline-flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-md bg-muted text-gold">
        <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
      </div>
      <div className="font-medium text-white text-sm sm:text-base">{title}</div>
      <div className="text-xs sm:text-sm text-zinc-400 leading-relaxed">{desc}</div>
    </div>
  );
}

function Step({ num, title, desc, icon: Icon, isLast = false }: { num: number; title: string; desc: string; icon: React.ComponentType<{ className?: string }>; isLast?: boolean }) {
  return (
    <div className="relative group">
      <motion.div 
        className="relative rounded-xl border border-white/10 bg-panel/60 p-4 sm:p-6 backdrop-blur-sm hover:border-gold/30 hover:bg-panel/80 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-gold/10"
        whileHover={{ y: -4 }}
        transition={{ duration: 0.2 }}
      >
        <div className="mb-3 sm:mb-4 flex items-center gap-2 sm:gap-3">
          <div className="relative">
            <div className="inline-flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-gradient-to-br from-gold/20 to-gold/10 border border-gold/20">
              <Icon className="h-4 w-4 sm:h-5 sm:w-5 text-gold" />
            </div>
            <div className="absolute -top-1 -right-1 inline-flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-full bg-gold text-[8px] sm:text-[10px] font-bold text-black">
              {num}
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-white text-base sm:text-lg">{title}</h3>
          </div>
        </div>
        <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">{desc}</p>
        
        {/* Hover glow effect */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </motion.div>
      
      {/* Connecting line to next step */}
      {!isLast && (
        <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-gold/60 to-gold/20 transform -translate-y-1/2 z-10">
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-[6px] border-l-gold/60 border-t-[3px] border-t-transparent border-b-[3px] border-b-transparent" />
      </div>
      )}
    </div>
  );
}

function CTAButtons() {
  return (
    <div className="flex flex-col sm:flex-row gap-3">
      <Link href="#contact" className="focus-ring shine inline-flex items-center justify-center gap-2 rounded-md bg-gold px-4 sm:px-5 py-3 text-black font-medium hover:bg-[var(--gold-600)] transition-colors text-sm sm:text-base">
        Start Tokenizing <ArrowRight className="h-4 w-4" />
      </Link>
      <Link href="#how" className="focus-ring inline-flex items-center justify-center gap-2 rounded-md border border-white/15 bg-transparent px-4 sm:px-5 py-3 text-white hover:bg-white/5 text-sm sm:text-base">
        See How It Works
      </Link>
    </div>
  );
}

function MobileNav({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -20 }}
      transition={{ duration: 0.2 }}
      className={`fixed inset-x-0 top-16 z-50 bg-background/95 backdrop-blur-md border-b border-white/5 md:hidden ${isOpen ? 'block' : 'hidden'}`}
    >
      <div className="px-6 py-4 space-y-4">
        <Link 
          href="#how" 
          className="block text-white hover:text-gold transition-colors"
          onClick={onClose}
        >
          How it Works
        </Link>
        <Link 
          href="#contact" 
          className="block text-white hover:text-gold transition-colors"
          onClick={onClose}
        >
          Contact
        </Link>
        <Link 
          href="#contact" 
          className="focus-ring shine inline-flex items-center gap-2 rounded-md bg-gold px-4 py-2 text-black font-medium hover:bg-[var(--gold-600)] transition-colors"
          onClick={onClose}
        >
          Start Tokenizing
        </Link>
      </div>
    </motion.div>
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
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-md border-b border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <Logo size="sm" />
            <nav className="hidden md:flex items-center gap-6 text-sm">
              <Link href="#how" className="hover:text-gold transition-colors">How it Works</Link>
              <Link href="#contact" className="hover:text-gold transition-colors">Contact</Link>
              <Link href="#contact" className="focus-ring shine inline-flex items-center gap-2 rounded-md bg-gold px-4 py-2 text-black font-medium hover:bg-[var(--gold-600)] transition-colors">
                Start Tokenizing
              </Link>
            </nav>
            <button
              className="md:hidden p-2 text-white hover:text-gold transition-colors"
              onClick={() => setMobileNavOpen(!mobileNavOpen)}
              aria-label="Toggle navigation menu"
            >
              {mobileNavOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        <MobileNav isOpen={mobileNavOpen} onClose={() => setMobileNavOpen(false)} />
      </header>

      <main className="relative">
        {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 pt-20 pb-16 md:pt-28 md:pb-24">
          <motion.div {...fadeUp}>
            <div className="mb-4 flex flex-wrap gap-2 text-xs sm:text-sm text-zinc-400">
              <span>Regulatory-aligned</span>
              <span>•</span>
              <span>Shariah-first</span>
              <span>•</span>
              <span>White-label ready</span>
            </div>
            <h1 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight">
              Tokenize Real-World Assets — Shariah-Compliant. Institution-Grade.
            </h1>
            <p className="mt-4 max-w-2xl text-sm sm:text-base text-zinc-300">
              OWN Lab is the end-to-end platform for issuing, managing, and trading tokenized RWAs—built for Islamic finance hubs and global capital connectivity.
            </p>
            <div className="mt-6 sm:mt-8">
              <CTAButtons />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Metrics */}
      <section aria-label="Key metrics" className="border-t border-white/5 bg-muted/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-8 sm:py-10">
          <motion.div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4" {...fadeUp}>
            <Stat value="9+" label="jurisdictions via partner regulatory footprint" />
            <Stat value="2–6 weeks" label="issuer onboarding pipeline" />
            <Stat value="$50M" label="AUM Year-1 target" />
            <Stat value="MENA & SEA" label="first; global next" />
          </motion.div>
          <p className="mt-4 text-center text-xs sm:text-sm text-zinc-400">
            Built for issuers, banks, family offices, and compliant retail.
          </p>
        </div>
      </section>

      {/* Strategic Positioning */}
      <section className="border-t border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16">
          <SectionHeading title="World's first Shariah-compliant, end-to-end tokenization platform" />
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
            <motion.ul className="space-y-3 sm:space-y-4 text-sm sm:text-base text-zinc-300" {...fadeUp}>
              <li>Shariah compliance leadership (advisory board, AAOIFI/IFSB alignment)</li>
              <li>Full lifecycle: pre-tokenization → issuance → compliance → secondary liquidity</li>
              <li>Regulatory stronghold: leverage DIFC/VARA/MAS pathways & partner licenses</li>
              <li>Liquidity creation: native marketplace roadmap (DEX + connectors)</li>
            </motion.ul>
            <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4" {...fadeUp}>
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
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16 md:py-20">
          <motion.div {...fadeUp}>
          <SectionHeading title="How It Works" />
            <p className="mb-8 sm:mb-12 text-center text-sm sm:text-base text-zinc-400 max-w-2xl mx-auto">
              From asset discovery to secondary trading, our end-to-end platform handles every step of the tokenization process with Shariah compliance and regulatory alignment.
            </p>
          </motion.div>
          
          <div className="relative">
            {/* Process flow line for desktop */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-gold/20 via-gold/40 to-gold/20 transform -translate-y-1/2 z-0" />
            
            <motion.div 
              className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-4 relative z-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, staggerChildren: 0.1 }}
            >
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6 }}
              >
                <Step 
                  num={1} 
                  title="Discover & Diligence" 
                  desc="Comprehensive asset screening and documentation intake with automated compliance checks." 
                  icon={Search}
                  isLast={false}
                />
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <Step 
                  num={2} 
                  title="Structure" 
                  desc="Legal and Shariah review with standardized templates and governance frameworks." 
                  icon={FileText}
                  isLast={false}
                />
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Step 
                  num={3} 
                  title="Tokenize" 
                  desc="Smart contract deployment, custody setup, and secure token issuance on blockchain." 
                  icon={Zap}
                  isLast={false}
                />
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Step 
                  num={4} 
                  title="Distribute" 
                  desc="Multi-channel distribution to institutional and compliant retail investors." 
                  icon={Users}
                  isLast={false}
                />
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Step 
                  num={5} 
                  title="Comply" 
                  desc="Automated KYC/AML/Travel Rule compliance with real-time reporting." 
                  icon={Shield}
                  isLast={false}
                />
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <Step 
                  num={6} 
                  title="Settle & Custody" 
                  desc="Secure settlement with firewalled, whitelisted institutional-grade custody." 
                  icon={Wallet}
                  isLast={false}
                />
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <Step 
                  num={7} 
                  title="Trade & Monitor" 
                  desc="Secondary market liquidity with comprehensive analytics and monitoring dashboards." 
                  icon={TrendingUp}
                  isLast={true}
                />
              </motion.div>
            </motion.div>
          </div>
          
          {/* Process summary */}
          <motion.div 
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/20 text-gold text-sm font-medium">
              <ShieldCheck className="h-4 w-4" />
              End-to-end Shariah-compliant process
            </div>
          </motion.div>
        </div>
      </section>

      {/* Asset Classes */}
      <section className="border-t border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16">
          <SectionHeading title="Asset Classes" />
          <motion.div className="grid gap-3 sm:gap-4 sm:grid-cols-2 lg:grid-cols-3" {...fadeUp}>
            <IconCard icon={Banknote} title="Private Credit / Sukuk-style yield" desc="Highest near-term adoption; enterprise pilots." />
            <IconCard icon={Building2} title="Real Estate" desc="Fractional CRE/REIT-style, ijara/musharakah structures." />
            <IconCard icon={Landmark} title="Treasuries / Cash Equivalents" desc="Tokenized liquidity products (select markets)." />
            <IconCard icon={Coins} title="Commodities (Gold)" desc="Shariah-certified bullion tokens with vault partners." />
            <IconCard icon={LineChart} title="Stocks (screened baskets)" desc="Shariah-screened equity exposures via partners." />
            <IconCard icon={Sparkles} title="Carbon / ESG (optional)" desc="On-chain provenance as standards mature." />
          </motion.div>
          <p className="mt-4 text-xs sm:text-sm text-zinc-400">Each card: 1-line benefit, "Learn more".</p>
        </div>
      </section>

      {/* For Whom */}
      <section className="border-t border-white/5 bg-muted/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16">
          <SectionHeading title="Built for Issuers & Investors" />
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
            <motion.div {...fadeUp}>
              <h3 className="font-display text-lg sm:text-xl text-white">Issuers</h3>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm sm:text-base text-zinc-300">
                <li>Real-estate developers, sukuk originators, commodity firms, banks, sovereigns</li>
              </ul>
              <p className="mt-2 text-xs sm:text-sm text-zinc-400">Value: Faster onboarding (2–6 weeks), turnkey legal/shariah, distribution, reporting.</p>
            </motion.div>
            <motion.div {...fadeUp}>
              <h3 className="font-display text-lg sm:text-xl text-white">Investors</h3>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm sm:text-base text-zinc-300">
                <li>Islamic banks/wealth, family offices, compliant retail, crypto-natives</li>
              </ul>
              <p className="mt-2 text-xs sm:text-sm text-zinc-400">Value: Ethical access, yield opportunities, regulated rails, on-chain transparency.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Regulatory & Trust */}
      <section className="border-t border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16">
          <SectionHeading title="Regulatory & Shariah" />
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
            <motion.div {...fadeUp}>
              <h3 className="font-display text-lg sm:text-xl text-white">Regulatory Moat</h3>
              <p className="mt-2 text-sm sm:text-base text-zinc-300">Leverage partner coverage in 9 jurisdictions; target DIFC/VARA/MAS; audits, custody, reporting standards.</p>
              <p className="mt-2 text-xs sm:text-sm text-zinc-400">Timeline: Pakistan SECP sandbox → GCC → Malaysia → global connectors.</p>
            </motion.div>
            <motion.div {...fadeUp}>
              <h3 className="font-display text-lg sm:text-xl text-white">Shariah Governance</h3>
              <p className="mt-2 text-sm sm:text-base text-zinc-300">Board setup, certification process, ongoing screening; template-based structures.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feature Stack */}
      <section className="border-t border-white/5 bg-muted/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16">
          <SectionHeading title="Platform Features" />
          <motion.div className="grid gap-3 sm:gap-4 sm:grid-cols-2 lg:grid-cols-4" {...fadeUp}>
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
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16 text-center">
          <h3 className="font-display text-xl sm:text-2xl md:text-3xl">Bring your next asset on-chain—safely and fast.</h3>
          <p className="mt-2 text-xs sm:text-sm text-zinc-400">Enterprise pricing tailored by asset class and jurisdiction.</p>
          <div className="mt-6 flex justify-center">
            <CTAButtons />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-8 sm:py-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 sm:gap-6">
            <nav aria-label="Footer" className="flex flex-wrap gap-3 sm:gap-4 text-xs sm:text-sm text-zinc-400">
              <Link href="#" className="hover:text-white">Solutions</Link>
              <Link href="#how" className="hover:text-white">How it Works</Link>
              <Link href="#" className="hover:text-white">Compliance</Link>
              <Link href="#" className="hover:text-white">Docs</Link>
              <Link href="#contact" className="hover:text-white">Contact</Link>
            </nav>
          </div>
          
          <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-white/5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 text-xs text-zinc-500">
            <span>© {new Date().getFullYear()} OWN Lab. All rights reserved.</span>
            <div className="flex gap-3">
              <Link aria-label="Twitter" href="#" className="hover:text-white">X</Link>
              <Link aria-label="LinkedIn" href="#" className="hover:text-white">LinkedIn</Link>
            </div>
          </div>
        </div>
      </footer>

      <StickyMobileCTA />
      </main>
    </>
  );
}
