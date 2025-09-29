"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Sparkles, Building2, Landmark, Coins, LineChart, Banknote, Layers, Menu, X } from "lucide-react";
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

function Stat({ label, value, compact = false, inline = false }: { label: string; value: string; compact?: boolean; inline?: boolean }) {
  return (
    <div className={`rounded-lg border border-white/10 bg-panel/60 ${inline ? "p-2" : compact ? "p-2" : "p-3 sm:p-4"} backdrop-blur-sm hover:border-gold/20 transition-colors`}>
      <div className={`${inline ? "text-lg font-bold text-gold" : compact ? "text-base sm:text-lg" : "text-lg sm:text-xl md:text-2xl"} font-semibold text-white`}>{value}</div>
      <div className={`${inline ? "text-[10px] leading-tight" : compact ? "text-[10px] sm:text-xs" : "text-xs sm:text-sm"} text-zinc-400 leading-tight`}>{label}</div>
    </div>
  );
}

function IconCard({ icon: Icon, title, desc }: { icon: React.ComponentType<{ className?: string }>; title: string; desc: string }) {
  return (
    <div className="shine group rounded-xl border border-white/10 bg-panel/50 p-4 sm:p-5 md:hover:translate-y-[-2px] md:hover:shadow-lg md:hover:shadow-gold/10 transition-all duration-300">
      <div className="mb-3 inline-flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-md bg-muted/60 text-gold">
        <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
      </div>
      <div className="font-semibold text-white text-sm sm:text-base mb-1">{title}</div>
      <div className="text-xs sm:text-sm text-zinc-300 leading-snug">{desc}</div>
    </div>
  );
}

//

function CTAButtons({ showMetrics }: { showMetrics: boolean }) {
  return (
    <div className="flex flex-col items-center gap-3">
    <div className="flex flex-col sm:flex-row gap-3">
      <Link href="http://ardglobal.app.n8n.cloud/form/65e79c2f-282f-4966-bde4-96a2a19e6c41" target="_blank" rel="noopener noreferrer" className="focus-ring shine inline-flex items-center justify-center gap-2 rounded-md bg-gold px-4 sm:px-5 py-3 text-black font-medium hover:bg-[var(--gold-600)] transition-colors text-sm sm:text-base">
          Get Started <ArrowRight className="h-4 w-4" />
      </Link>
      <Link href="#how" className="focus-ring inline-flex items-center justify-center gap-2 rounded-md border border-white/15 bg-transparent px-4 sm:px-5 py-3 text-white hover:bg-white/5 text-sm sm:text-base">
        See How Tokenization Works
      </Link>
      </div>
      {showMetrics && (
        <div className="flex items-center gap-4 text-xs text-zinc-400">
        <span className="flex items-center gap-1">
          <span className="text-gold font-semibold">9+</span>
          <span>jurisdictions</span>
        </span>
        <span className="flex items-center gap-1">
          <span className="text-gold font-semibold">$50M</span>
          <span>Year-1 target</span>
        </span>
        </div>
      )}
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
          How Tokenization Works
        </Link>
        <Link 
          href="#why-choose-us" 
          className="block text-white hover:text-gold transition-colors"
          onClick={onClose}
        >
          Why Choose Us
        </Link>
        <Link 
          href="http://ardglobal.app.n8n.cloud/form/65e79c2f-282f-4966-bde4-96a2a19e6c41" 
          target="_blank" 
          rel="noopener noreferrer"
          className="focus-ring shine inline-flex items-center gap-2 rounded-md bg-gold px-4 py-2 text-black font-medium hover:bg-[var(--gold-600)] transition-colors"
          onClick={onClose}
        >
          Get Started
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
        <Link href="http://ardglobal.app.n8n.cloud/form/65e79c2f-282f-4966-bde4-96a2a19e6c41" target="_blank" rel="noopener noreferrer" className="shine focus-ring inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-5 py-3 text-black font-semibold">
          Get Started <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}

export default function Home() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    const howSection = document.getElementById('how');
    if (howSection) {
      observer.observe(howSection);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-md border-b border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <Logo size="sm" />
            <nav className="hidden md:flex items-center gap-6 text-sm">
              <Link href="#how" className={`transition-colors ${activeSection === 'how' ? 'text-gold' : 'hover:text-gold'}`}>How Tokenization Works</Link>
              <Link href="#why-choose-us" className="hover:text-gold transition-colors">Why Choose Us</Link>
              <Link href="http://ardglobal.app.n8n.cloud/form/65e79c2f-282f-4966-bde4-96a2a19e6c41" target="_blank" rel="noopener noreferrer" className="focus-ring shine inline-flex items-center gap-2 rounded-md bg-gold px-4 py-2 text-black font-medium hover:bg-[var(--gold-600)] transition-colors">
                Get Started
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
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 pt-20 pb-14 md:pt-28 md:pb-20">
          <motion.div {...fadeUp}>
            <div className="mb-4 flex flex-wrap gap-2 text-xs sm:text-sm text-zinc-400">
              <span>Regulatory-aligned</span>
              <span>•</span>
              <span>Shariah-first</span>
              <span>•</span>
              <span>White-label ready</span>
            </div>
            <h1 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight">
              Tokenize Real-World Assets — <span className="bg-gradient-to-r from-gold to-yellow-300 bg-clip-text text-transparent font-bold">Shariah-Compliant</span>. Institution-Grade.
            </h1>
            <p className="mt-4 max-w-2xl text-sm sm:text-base text-zinc-300">
              OWN Lab is the end-to-end platform for issuing, managing, and trading tokenized RWAs—built for Islamic finance hubs and global capital connectivity.
            </p>
            {/* Supported Asset Classes — moved higher for visibility */}
            <motion.div 
              className="mt-5 sm:mt-6"
              {...fadeUp}
            >
              <div className="mb-2 text-[10px] sm:text-xs uppercase tracking-widest text-zinc-400">Supported asset classes</div>
              <div className="flex gap-2 sm:gap-3 overflow-x-auto md:flex-wrap md:overflow-visible whitespace-nowrap md:whitespace-normal pb-1 scrollbar-hide" style={{maskImage: 'linear-gradient(to right, transparent 0%, black 20px, black calc(100% - 20px), transparent 100%)'}}>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-panel/60 px-3 py-1.5 text-xs sm:text-sm text-zinc-200 hover:border-gold/30 hover:bg-gold/5 transition">
                  <Banknote className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-gold" />
                  <span>Private Credit</span>
                </div>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-panel/60 px-3 py-1.5 text-xs sm:text-sm text-zinc-200 hover:border-gold/30 hover:bg-gold/5 transition">
                  <Building2 className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-gold" />
                  <span>Real Estate</span>
                </div>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-panel/60 px-3 py-1.5 text-xs sm:text-sm text-zinc-200 hover:border-gold/30 hover:bg-gold/5 transition">
                  <Landmark className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-gold" />
                  <span>Treasuries</span>
                </div>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-panel/60 px-3 py-1.5 text-xs sm:text-sm text-zinc-200 hover:border-gold/30 hover:bg-gold/5 transition">
                  <Coins className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-gold" />
                  <span>Commodities</span>
                </div>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-panel/60 px-3 py-1.5 text-xs sm:text-sm text-zinc-200 hover:border-gold/30 hover:bg-gold/5 transition">
                  <LineChart className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-gold" />
                  <span>Stocks</span>
              </div>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-panel/60 px-3 py-1.5 text-xs sm:text-sm text-zinc-200 hover:border-gold/30 hover:bg-gold/5 transition">
                  <Sparkles className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-gold" />
                  <span>Carbon / ESG</span>
                </div>
              </div>
            </motion.div>
            <div className="mt-6 sm:mt-8">
              <CTAButtons showMetrics={true} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how" className="border-t border-white/5 bg-muted/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10 sm:py-12 md:py-14">
          <motion.div {...fadeUp}>
          <SectionHeading title="How Tokenization Works" />
          </motion.div>
          {/* Process Diagram */}
          <div className="mb-6 sm:mb-8 flex justify-center px-3 sm:px-0">
            <img
              src="/Process-OWN.svg"
              alt="OWN Lab tokenization process overview"
              className="w-full h-auto sm:max-w-6xl"
            />
          </div>
          
          
          
          {/* Process summary */}
          <motion.div 
            className="mt-6 sm:mt-8 text-center"
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


      


      {/* Why Choose Us */}
      <section id="why-choose-us" className="border-t border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10 sm:py-12 md:py-14">
          <SectionHeading title="Why Choose Us" />
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
            <motion.ul className="space-y-3 sm:space-y-4 text-sm sm:text-base text-zinc-300" {...fadeUp}>
              <li>First-mover advantage in Shariah-compliant tokenization with proven regulatory pathways</li>
              <li>End-to-end platform eliminates integration complexity and reduces time-to-market</li>
              <li>Built-in compliance automation reduces operational overhead and regulatory risk</li>
              <li>Institutional-grade security and custody with multi-jurisdictional regulatory coverage</li>
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



      

      

      {/* CTA Band */}
      <section id="contact" className="border-y border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10 sm:py-12 md:py-14 text-center">
          <h3 className="font-display text-xl sm:text-2xl md:text-3xl">Bring your next asset on-chain—safely and fast.</h3>
          <p className="mt-2 text-xs sm:text-sm text-zinc-400">Enterprise pricing tailored by asset class and jurisdiction.</p>
          <div className="mt-6 flex justify-center">
            <CTAButtons showMetrics={false}  />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-8 sm:py-10">
          
          
          <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-white/5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 text-xs text-zinc-500">
            <span>© {new Date().getFullYear()} OWN Lab. All rights reserved.</span>
           
          </div>
        </div>
      </footer>

      <StickyMobileCTA />
      </main>
    </>
  );
}
