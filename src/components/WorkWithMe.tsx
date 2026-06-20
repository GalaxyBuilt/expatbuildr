import { useState, useEffect, useRef } from "react";

const COUNTRIES = [
  { name: "Philippines", code: "PHP", rate: 58.5, flag: "🇵🇭" },
  { name: "Thailand", code: "THB", rate: 36.7, flag: "🇹🇭" },
  { name: "Vietnam", code: "VND", rate: 25000, flag: "🇻🇳" },
  { name: "Bali / Indo", code: "IDR", rate: 16100, flag: "🇮🇩" },
];

function useCountUp(target: number, duration = 1200) {
  const [val, setVal] = useState(0);
  const raf = useRef<number | null>(null);
  useEffect(() => {
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      setVal(Math.floor(p * target));
      if (p < 1) raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);
    return () => { if (raf.current) cancelAnimationFrame(raf.current); };
  }, [target, duration]);
  return val;
}

// ─── Live Stats (swap these with real API calls) ──────────────────────────────
const STATS = {
  leadsToday: 847,
  jobsListed: 2193,
  membersActive: 384,
  privateLeads: 1200,
};

// ─── Dark Mode Toggle ──────────────────────────────────────────────────────────
function DarkModeToggle({ isDark, toggle }: { isDark: boolean; toggle: () => void }) {
  return (
    <button
      onClick={toggle}
      className="p-2 rounded-xl border-2 border-black dark:border-white hover:bg-black dark:hover:bg-white transition-all cursor-pointer"
      aria-label="Toggle dark mode"
    >
      {isDark ? (
        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ) : (
        <svg className="w-5 h-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      )}
    </button>
  );
}

function ArbitrageCalculator({ isDark }: { isDark: boolean }) {
  const [usdHour, setUsdHour] = useState(25);
  const [hoursWeek, setHoursWeek] = useState(40);

  const monthlyUSD = usdHour * hoursWeek * 4.33;

  const fmt = (n: number, currency: string, locale: string = "en-US") =>
    new Intl.NumberFormat(locale, {
      style: "currency",
      currency,
      maximumFractionDigits: 0,
    }).format(n);

  return (
    <div className={`border-2 px-4 py-8 md:p-10 ${isDark ? 'border-white bg-slate-800' : 'border-black bg-white'}`}>
      <p className={`text-xs font-mono uppercase tracking-widest mb-6 ${isDark ? 'text-slate-400' : 'text-institutional-muted'}`}>
        // multi_country_arbitrage.exe
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        <label className="block">
          <span className={`block text-sm font-bold uppercase tracking-wide mb-2 ${isDark ? 'text-white' : ''}`}>
            USD / Hour
          </span>
          <div className="flex items-center gap-4">
            <input
              type="range"
              min={17}
              max={120}
              value={usdHour}
              onChange={(e) => setUsdHour(Number(e.target.value))}
              className={`flex-1 h-2 cursor-pointer ${isDark ? 'accent-white' : 'accent-black'}`}
            />
            <span className={`font-mono text-xl font-bold w-20 text-right ${isDark ? 'text-white' : ''}`}>
              ${usdHour}/hr
            </span>
          </div>
        </label>

        <label className="block">
          <span className={`block text-sm font-bold uppercase tracking-wide mb-2 ${isDark ? 'text-white' : ''}`}>
            Hours / Week
          </span>
          <div className="flex items-center gap-4">
            <input
              type="range"
              min={10}
              max={40}
              value={hoursWeek}
              onChange={(e) => setHoursWeek(Number(e.target.value))}
              className={`flex-1 h-2 cursor-pointer ${isDark ? 'accent-white' : 'accent-black'}`}
            />
            <span className={`font-mono text-xl font-bold w-20 text-right ${isDark ? 'text-white' : ''}`}>
              {hoursWeek}h
            </span>
          </div>
        </label>
      </div>

      <div className={`border-t-2 pt-8 ${isDark ? 'border-slate-600' : 'border-black'}`}>
        <div className="mb-6">
          <p className={`text-xs uppercase tracking-widest mb-1 ${isDark ? 'text-slate-400' : 'text-institutional-muted'}`}>
            Total Monthly Earnings
          </p>
          <p className={`text-4xl md:text-5xl font-black tabular-nums ${isDark ? 'text-white' : 'text-black'}`}>
            {fmt(monthlyUSD, "USD")}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {COUNTRIES.map((c) => (
            <div key={c.code} className={`border-2 p-4 ${isDark ? 'border-slate-600 bg-slate-700' : 'border-black bg-gray-50'}`}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-2xl">{c.flag}</span>
                <span className={`text-xs font-mono ${isDark ? 'text-slate-400' : 'text-institutional-muted'}`}>
                  {c.code}
                </span>
              </div>
              <p className={`text-xs uppercase tracking-tight mb-1 ${isDark ? 'text-slate-400' : 'text-institutional-muted'}`}>
                {c.name}
              </p>
              <p className={`text-xl font-black tabular-nums ${isDark ? 'text-white' : ''}`}>
                {fmt(monthlyUSD * c.rate, c.code, c.code === "VND" ? "vi-VN" : "en-US")}
              </p>
            </div>
          ))}
        </div>
      </div>

      <p className={`mt-6 text-xs font-mono ${isDark ? 'text-slate-500' : 'text-institutional-muted'}`}>
        * Rates updated mid-stream · Living like a king in SEA
      </p>
    </div>
  );
}

// ─── STATS TICKER ─────────────────────────────────────────────────────────────
function StatCard({
  label,
  value,
  suffix = "",
  isDark,
}: {
  label: string;
  value: number;
  suffix?: string;
  isDark: boolean;
}) {
  const display = useCountUp(value, 1500);
  return (
    <div className={`border-2 p-5 ${isDark ? 'border-slate-600 bg-slate-800' : 'border-black'}`}>
      <p className={`text-3xl md:text-4xl font-black tabular-nums ${isDark ? 'text-white' : ''}`}>
        {display.toLocaleString()}
        {suffix}
      </p>
      <p className={`text-xs uppercase tracking-widest mt-1 ${isDark ? 'text-slate-400' : 'text-institutional-muted'}`}>
        {label}
      </p>
    </div>
  );
}

// ─── EMAIL CAPTURE (Native React Form) ───────────────────────────────────────────
function EmailCapture({ isDark }: { isDark: boolean }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const BEEHIIV_PUBLICATION_ID = 'pub_d6baaa9a-cbd0-4f48-a223-44c358e7e710';
      const BEEHIIV_API_KEY = 'gV9AjRLhiYXhyjIYSPcg7ztKR9ILFbzAzohqgUvR5R1ejgoAWqUxlIJGJ9ICkysl';
      const utm_source = new URLSearchParams(window.location.search).get('utm_source') || 'direct';

      const response = await fetch(
        `https://api.beehiiv.com/v2/publications/${BEEHIIV_PUBLICATION_ID}/subscriptions`,
        {
          method: "POST",
          headers: { 
            "Content-Type": "application/json",
            "Authorization": `Bearer ${BEEHIIV_API_KEY}`
          },
          body: JSON.stringify({ 
            email,
            reactivate_existing: false,
            send_welcome_email: true,
            utm_source,
            utm_medium: "arbitrage_page",
            utm_campaign: "job_list_sample",
            tags: ["remote_worker", "job_seeker", "calc_visitor"]
          }),
        }
      );
      
      if (response.status === 201 || response.status === 200) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error("Signup error:", err);
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className={`border-2 p-10 text-center animate-in fade-in zoom-in duration-500 ${isDark ? 'border-emerald-500/30 bg-emerald-500/5' : 'border-emerald-500/20 bg-emerald-50'}`}>
        <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center mx-auto mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
        </div>
        <h3 className={`text-xl font-black uppercase tracking-tight mb-2 ${isDark ? 'text-white' : ''}`}>Access Sent</h3>
        <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>Check your inbox for the 5 sample USD roles.</p>
      </div>
    );
  }

  return (
    <div className={`border-2 p-8 md:p-12 ${isDark ? 'border-slate-700 bg-slate-800' : 'border-black'}`}>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your best email..."
            required
            disabled={status === "loading"}
            className={`flex-grow px-6 py-4 border-2 font-mono text-base outline-none transition-all ${
              isDark 
                ? 'bg-slate-900 border-slate-600 text-white focus:border-white placeholder-slate-600' 
                : 'bg-white border-black text-black focus:ring-4 focus:ring-black/5 placeholder-gray-300'
            }`}
          />
        </div>
        <button
          type="submit"
          disabled={status === "loading"}
          className={`font-black uppercase tracking-widest px-8 py-4 text-sm transition-all whitespace-nowrap w-full ${
            isDark
              ? 'bg-white text-slate-900 hover:bg-slate-200'
              : 'bg-black text-white hover:bg-gray-800'
          } ${status === "loading" ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          {status === "loading" ? "Verifying..." : "Join Free →"}
        </button>
      </form>
      {status === "error" && (
        <p className="text-red-500 text-[10px] font-mono mt-3 uppercase tracking-widest animate-pulse">
          [ ERROR: CONNECTION_FAILED ]
        </p>
      )}
    </div>
  );
}


// ─── PAGE ─────────────────────────────────────────────────────────────────────
export default function WorkWithMe() {
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check localStorage for saved preference
    const savedPreference = localStorage.getItem('jobsDarkMode');
    if (savedPreference === 'true') {
      setIsDark(true);
      document.documentElement.classList.add('dark');
      document.body.classList.add('dark');
    }
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
    localStorage.setItem('jobsDarkMode', (!isDark).toString());
    if (!isDark) {
      document.documentElement.classList.add('dark');
      document.body.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.body.classList.remove('dark');
      document.body.style.backgroundColor = 'white';
    }
  };

  const handlePurchase = () => {
    const STRIPE_LINK = "https://buy.stripe.com/28E9AS0uj07g6lkaXe2oE00";
    window.location.href = STRIPE_LINK;
  };

  return (
    <main className={`min-h-screen font-sans antialiased selection:bg-accent-blue/30 selection:text-white ${
      isDark ? 'bg-slate-900 text-white' : 'bg-white text-slate-900'
    }`}>

      {/* ── Sticky Nav ── */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
          scrolled 
            ? `border-b-2 ${isDark ? 'border-slate-700 bg-slate-900/95' : 'border-slate-200 bg-white/95'} backdrop-blur` 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-5xl mx-auto px-4 py-3 flex justify-between items-center">
          <a href="/" className="flex items-center gap-3 group">
            <img 
              src="/images/logo.jpg" 
              alt="ExpatBuildr Logo" 
              className="w-8 h-8 rounded-lg object-cover ring-2 ring-black/5 group-hover:ring-black transition-all" 
            />
            <span className={`font-black text-lg tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Galaxy<span className="font-light">Built</span>
            </span>
          </a>
          <div className="flex items-center gap-3">
            <DarkModeToggle isDark={isDark} toggle={toggleDarkMode} />
            <button
              onClick={handlePurchase}
              className={`text-xs font-bold uppercase tracking-widest border-2 px-4 py-2 hover:transition-colors ${
                isDark 
                  ? 'border-white text-white hover:bg-white hover:text-slate-900' 
                  : 'border-black text-black hover:bg-black hover:text-white'
              }`}
            >
              Get Access — $50
            </button>
          </div>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="pt-28 pb-16 px-4 max-w-5xl mx-auto">
        {/* POV badge */}
        <div className={`inline-flex items-center gap-2 border px-3 py-1.5 text-xs font-mono mb-8 ${
          isDark ? 'border-slate-700 text-slate-400' : 'border-gray-300 text-institutional-secondary'
        }`}>
          <span className="inline-block w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          Live · Writing this from Palawan 🇵🇭
        </div>

        <h1 className={`text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tight mb-8 ${
          isDark ? 'text-white' : 'text-slate-900'
        }`}>
          Earn{" "}
          <span className={`inline-block border-b-4 ${isDark ? 'border-white' : 'border-slate-900'}`}>
            US dollars.
          </span>
          <br />
          Live on{" "}
          <span className={`inline-block border-b-4 ${isDark ? 'border-white' : 'border-slate-900'}`}>
            pesos.
          </span>
          <br />
          <span className={isDark ? 'text-slate-500 block mt-4' : 'text-institutional-muted block mt-4'}>Keep the gap.</span>
        </h1>

        <p className={`text-lg md:text-xl max-w-xl mb-10 leading-relaxed ${isDark ? 'text-slate-300' : 'text-institutional-secondary'}`}>
          A handpicked list of <strong>US remote jobs paying $17/hr+</strong>,
          sourced daily via the Galaxy Leads autonomous engine. One payment. Lifetime updates.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <button
            onClick={handlePurchase}
            className={`inline-flex items-center justify-center gap-2 font-bold uppercase tracking-widest px-8 py-4 text-sm hover:transition-colors ${
              isDark ? 'bg-white text-slate-900 hover:bg-slate-200' : 'bg-black text-white hover:bg-gray-900'
            }`}
          >
            Get Instant Access — $50 →
          </button>
          <a
            href="#sample"
            className={`inline-flex items-center justify-center gap-2 border-2 font-bold uppercase tracking-widest px-8 py-4 text-sm hover:transition-colors ${
              isDark 
                ? 'border-white text-white hover:bg-white hover:text-slate-900' 
                : 'border-black text-black hover:bg-black hover:text-white'
            }`}
          >
            Free Sample First
          </a>
        </div>

        <p className={`text-xs font-mono ${isDark ? 'text-slate-500' : 'text-institutional-muted'}`}>
          One-time · No subscription · PDF + Notion access
        </p>
      </section>

      <section className="px-4 max-w-5xl mx-auto mb-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {[
            { label: "Beach office, Siargao", image: "/images/lifestyle-beach.jpg", bg: "bg-blue-50" },
            { label: "Bamboo house setup", image: "/images/lifestyle-bamboo.jpg", bg: "bg-green-50" },
            { label: "Palawan beach bar", image: "/images/lifestyle-palawan.png", bg: "bg-cyan-50" },
            { label: "Monthly USD deposit", image: "/images/lifestyle-cash.jpg", bg: "bg-yellow-50" },
          ].map((pov) => (
            <div
              key={pov.label}
              className={`${pov.bg} dark:${isDark ? 'bg-slate-800' : ''} border-2 border-black dark:border-white aspect-square flex flex-col items-center justify-center gap-3 overflow-hidden relative group`}
            >
              <img 
                src={pov.image} 
                alt={pov.label} 
                className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
              />
              <div className={`absolute bottom-0 left-0 right-0 border-t-2 border-black dark:border-white p-2 transform translate-y-full group-hover:translate-y-0 transition-transform ${
                isDark ? 'bg-slate-900/90' : 'bg-white/90'
              }`}>
                <p className={`text-[10px] font-mono text-center uppercase tracking-tight ${
                  isDark ? 'text-white' : 'text-black'
                }`}>
                  {pov.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CALCULATOR ── */}
      <section className="px-4 max-w-5xl mx-auto mb-24">
        <div className="mb-8">
          <p className={`text-xs font-mono uppercase tracking-widest mb-2 ${isDark ? 'text-slate-500' : 'text-gray-400'}`}>
            02 · The Math
          </p>
          <h2 className={`text-3xl md:text-5xl font-black leading-tight ${isDark ? 'text-white' : ''}`}>
            See what $17/hr
            <br />
            looks like in PHP.
          </h2>
        </div>
        <ArbitrageCalculator isDark={isDark} />
      </section>

      {/* ── BUILD IN PUBLIC / PROOF ── */}
      <section className="px-4 max-w-5xl mx-auto mb-24">
        <div className="mb-8">
          <p className={`text-xs font-mono uppercase tracking-widest mb-2 ${isDark ? 'text-slate-500' : 'text-gray-400'}`}>
            03 · Build in Public
          </p>
          <h2 className={`text-3xl md:text-5xl font-black leading-tight ${isDark ? 'text-white' : ''}`}>
            Live stats.
            <br />
            No fluff.
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
          <StatCard label="Leads scanned by Galaxy Leads" value={STATS.leadsToday} isDark={isDark} />
          <StatCard label="Jobs in the list" value={STATS.jobsListed} isDark={isDark} />
          <StatCard label="Active members" value={STATS.membersActive} isDark={isDark} />
          <StatCard label="High-intent private leads" value={STATS.privateLeads} isDark={isDark} />
        </div>

        <div className={`border-2 p-6 ${isDark ? 'border-slate-600 bg-slate-800' : 'border-black bg-gray-50'}`}>
          <p className={`text-xs font-mono uppercase tracking-widest mb-4 ${isDark ? 'text-slate-400' : 'text-gray-500'}`}>
            // recent_activity.log
          </p>
          {[
            "14m ago · New $22/hr UX Writer role added (Texas co., remote)",
            "2h ago · 3 members landed interviews this week",
            "4h ago · List updated: 12 new jobs, 3 expired removed",
          ].map((log, i) => (
            <p key={i} className={`text-sm font-mono py-2 border-b last:border-0 ${isDark ? 'text-slate-300 border-slate-600' : 'text-gray-600 border-gray-200'}`}>
              {log}
            </p>
          ))}
        </div>
      </section>

      {/* ── THE OFFER ── */}
      <section id="offer" className="px-4 max-w-5xl mx-auto mb-24">
        <div className={`border-2 px-4 py-10 md:p-12 ${isDark ? 'border-slate-600' : 'border-black'}`}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className={`text-xs font-mono uppercase tracking-widest mb-4 ${isDark ? 'text-slate-500' : 'text-gray-400'}`}>
                04 · The Offer
              </p>
              <h2 className={`text-4xl md:text-6xl font-black leading-tight mb-6 ${isDark ? 'text-white' : ''}`}>
                $50.
                <br />
                <span className={`text-2xl md:text-4xl font-light ${isDark ? 'text-slate-400' : 'text-gray-400'}`}>
                  One time. No recurring fees.
                </span>
              </h2>

              <ul className="space-y-3 mb-10">
                {[
                  "✔  200+ US remote jobs, $17–$75/hr, updated weekly",
                  "✔  Exclusive Partnership Leads (Direct-to-Founder)",
                  "✔  Filter by role: Tech, Writing, Design, Support, Sales",
                  "✔  Private Notion board with application tracker",
                  "✔  Email alert when 5+ new jobs drop",
                  "✔  1 free list refresh if you haven't landed in 90 days",
                ].map((item) => (
                  <li key={item} className={`text-base md:text-lg font-medium ${isDark ? 'text-slate-300' : ''}`}>
                    {item}
                  </li>
                ))}
              </ul>

              <button
                onClick={handlePurchase}
                className={`inline-flex items-center justify-center w-full md:w-auto gap-3 font-black uppercase tracking-widest px-10 py-5 text-base md:text-lg mb-4 ${
                  isDark ? 'bg-white text-slate-900 hover:bg-slate-200' : 'bg-black text-white hover:bg-gray-900'
                }`}
              >
                Get Instant Access — $50 →
              </button>

              <p className={`text-xs font-mono mt-3 ${isDark ? 'text-slate-500' : 'text-gray-400'}`}>
                Stripe · Secure · Instant PDF access after payment
              </p>
            </div>

            <div className="relative group">
              <div className={`absolute inset-0 -z-10 transition-transform group-hover:translate-x-1 group-hover:translate-y-1 ${isDark ? 'bg-white' : 'bg-black'}`} />
              <div className={`border-2 p-2 ${isDark ? 'border-white bg-slate-900' : 'border-black bg-white'}`}>
                <img 
                  src="/images/software-mockup.png" 
                  alt="Remote Work Sniper Report Mockup" 
                  className="w-full h-auto"
                />
                <div className={`text-[10px] font-mono px-3 py-2 uppercase tracking-widest flex justify-between items-center ${
                  isDark ? 'bg-white text-slate-900' : 'bg-black text-white'
                }`}>
                  <span>Sample_Report.pdf</span>
                  <span>402 KB</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FREE SAMPLE ── */}
      <section id="sample" className="px-4 max-w-5xl mx-auto mb-24">
        <div className="mb-6">
          <p className={`text-xs font-mono uppercase tracking-widest mb-2 ${isDark ? 'text-slate-500' : 'text-gray-400'}`}>
            05 · Try Before You Buy
          </p>
          <h2 className={`text-3xl md:text-4xl font-black leading-tight mb-2 ${isDark ? 'text-white' : ''}`}>
            Not ready to commit?
          </h2>
          <p className={isDark ? 'text-slate-400' : 'text-gray-500'}>
            Get 5 jobs from this week's list — free. No credit card.
          </p>
        </div>
        <EmailCapture isDark={isDark} />
      </section>

      {/* ── FAQ ── */}
      <section className="px-4 max-w-5xl mx-auto mb-24">
        <p className={`text-xs font-mono uppercase tracking-widest mb-8 ${isDark ? 'text-slate-500' : 'text-gray-400'}`}>
          06 · FAQ
        </p>
        {[
          {
            q: "Is this for Filipinos only?",
            a: "The arbitrage framing is Filipino-first, but anyone in a low-cost country earning USD will find this useful.",
          },
          {
            q: "Are these legit jobs?",
            a: "Every listing is manually verified before adding. We check company LinkedIn, Glassdoor, and payment proof. Scams get killed immediately.",
          },
          {
            q: "How often is the list updated?",
            a: "Weekly minimum, usually 2–3x per week. You get notified by email when batches drop.",
          },
          {
            q: "Can I get a refund?",
            a: "If you apply to 5 jobs from the list in 30 days and get zero responses, email me. I'll refund or extend your access — your call.",
          },
        ].map(({ q, a }) => (
          <div key={q} className={`border-t-2 py-5 ${isDark ? 'border-slate-600' : 'border-black'}`}>
            <p className={`font-black text-base md:text-lg mb-2 ${isDark ? 'text-white' : 'text-black'}`}>{q}</p>
            <p className={`text-sm md:text-base leading-relaxed ${isDark ? 'text-slate-300' : 'text-institutional-secondary'}`}>{a}</p>
          </div>
        ))}
      </section>

      {/* ── FOOTER ── */}
      <footer className={`border-t-2 px-4 py-8 max-w-5xl mx-auto ${isDark ? 'border-slate-600' : 'border-black'}`}>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <span className={`font-black text-lg ${isDark ? 'text-white' : ''}`}>
              Galaxy<span className="font-light">Built</span>
            </span>
            <p className={`text-xs font-mono mt-1 ${isDark ? 'text-slate-500' : 'text-institutional-muted'}`}>
              Built in public · Philippines · {new Date().getFullYear()}
            </p>
          </div>
          <div className={`flex gap-6 text-xs font-mono ${isDark ? 'text-slate-500' : 'text-institutional-muted'}`}>
            <a href="/privacy" className={`hover:${isDark ? 'text-white' : 'text-black'} transition-colors`}>Privacy</a>
            <a href="/terms" className={`hover:${isDark ? 'text-white' : 'text-black'} transition-colors`}>Terms</a>
            <a href="https://x.com/YOURHANDLE" target="_blank" rel="noopener noreferrer" className={`hover:${isDark ? 'text-white' : 'text-black'} transition-colors`}>X / Twitter</a>
          </div>
        </div>
      </footer>

    </main>
  );
}
