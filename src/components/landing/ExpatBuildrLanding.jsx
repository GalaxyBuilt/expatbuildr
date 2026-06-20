/**
 * ExpatBuildrLanding.jsx
 * High-converting landing page for ExpatBuildr.dev
 * Targets: Founders, SaaS builders, creators, grant seekers, tech enthusiasts
 *
 * SEO/OG meta tags are exported separately as <ExpatBuildrMeta /> for use in <Head>
 * Primary CTA → Telegram: t.me/expatbuildrdev
 * Secondary CTAs → X, LinkedIn, YouTube
 */

import { useState, useEffect, useRef } from "react";

/* ─────────────────────────────────────────────
   META / SEO — drop inside Next.js <Head> or
   any <Helmet> provider
───────────────────────────────────────────── */
export function ExpatBuildrMeta() {
  return (
    <>
      <title>Expat Buildr — Institutional-Grade AI & SaaS Infrastructure</title>
      <meta name="description" content="AI apps, SaaS platforms, and grant engines built at institutional grade. Tell Expat Buildr your idea — and watch it ship." />
      <meta name="keywords" content="AI SaaS builder, app development, grant discovery, founder tools, institutional AI, Next.js, autonomous systems" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://expatbuildr.com" />
      <meta property="og:title" content="Expat Buildr — Ship Institutional-Grade AI & SaaS" />
      <meta property="og:description" content="Autonomous SaaS platforms, grant engines, and AI workflows built for founders who move fast. Join the Telegram hub." />
      <meta property="og:image" content="https://expatbuildr.com/images/logo.jpg" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@expatbuildr" />
      <meta name="twitter:title" content="Expat Buildr — Institutional AI & SaaS" />
      <meta name="twitter:description" content="AI apps. Grant engines. SaaS empires. Built at institutional grade. Tell me your idea." />
      <meta name="twitter:image" content="https://expatbuildr.com/images/logo.jpg" />
    </>
  );
}

/* ─────────────────────────────────────────────
   DATA — edit these arrays to update content
   without touching layout code
───────────────────────────────────────────── */

const PRODUCTS = [
  { name: "GrantWisdom", tag: "Funding Intelligence", desc: "200k+ grants. AI matching. Autonomous application writer.", url: "https://grantwisdom.com", img: "https://expatbuildr.com/images/grantwisdom.png", badge: "🏆 Live" },
  { name: "EverRank", tag: "SEO Command Center", desc: "Pillar clustering, topical authority, 10k+ keywords on autopilot.", url: "https://everrank.app", img: "https://expatbuildr.com/images/everrank.png", badge: "⚡ Live" },
  { name: "MultiSaaS", tag: "Portfolio Dashboard", desc: "Unified MRR, churn detection, AI insights across every SaaS you run.", url: "https://multisaas.xyz", img: "https://expatbuildr.com/images/multisaas.png", badge: "🔓 Open Source" },
  { name: "BlogBanana", tag: "Content AI", desc: "Automated image placement & AI blog enrichment at scale.", url: "https://blogbanana.app", img: "https://expatbuildr.com/images/blogbanana.png", badge: "🍌 Live" },
  { name: "FastAIFlow", tag: "Workflow Orchestration", desc: "Multi-agent pipelines. Vibe-code your way to autonomous output.", url: "https://fastaiflow.com", img: "https://expatbuildr.com/images/fastaiflow.png", badge: "🤖 Live" },
];

const STATS = [
  { value: "200k+", label: "Grants in Database" },
  { value: "5+", label: "Live SaaS Products" },
  { value: "3,000+", label: "Evergreen Guides Mapped" },
  { value: "7", label: "Platforms Supported" },
];

const TRUST_BULLETS = [
  { icon: "⚙️", text: "Institutional-grade architecture — not side-project scaffolding" },
  { icon: "🚀", text: "Ships in weeks, not quarters — velocity is the product" },
  { icon: "🧠", text: "AI-native from day one: Claude, GPT, Grok, Gemini all in the stack" },
  { icon: "💰", text: "Grant & funding intelligence built into the DNA" },
  { icon: "📈", text: "Systems that compound — SEO, content, and SaaS MRR over time" },
  { icon: "🔐", text: "Proprietary trading systems and risk frameworks on the side" },
];

/* ─────────────────────────────────────────────
   TESTIMONIALS — replace with real ones when available
───────────────────────────────────────────── */
const TESTIMONIALS = [
  { text: "Expat Buildr shipped our grant discovery MVP in under two weeks. The GrantWisdom engine alone saved us 80+ hours of manual research.", name: "Alex R.", role: "Startup Founder", initials: "AR" },
  { text: "The EverRank architecture is unlike anything I've seen — it's a true institutional SEO machine, not another pretty dashboard.", name: "Maya C.", role: "Content Director", initials: "MC" },
  { text: "MultiSaaS finally gave me one view of all my MRR across five products. Open source, clean code, and actually ships.", name: "James T.", role: "SaaS Founder", initials: "JT" },
];

/* ─────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────── */
export default function ExpatBuildrLanding() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [emailError, setEmailError] = useState("");

  const handleSubmit = () => {
    if (!email.includes("@") || !email.includes(".")) {
      setEmailError("Please enter a valid email.");
      return;
    }
    setEmailError("");
    // TODO: wire to your email provider (ConvertKit, Loops, Mailchimp, etc.)
    console.log("Lead captured:", email);
    setSubmitted(true);
    setEmail("");
  };

  return (
    <div className="gb-root">

      {/* ── TOP NAV ── */}
      <nav className="gb-topbar">
        <a href="https://expatbuildr.com" className="gb-logo">
          <span className="gb-logo-dot" />
          GALAXY BUILT
        </a>
        <div className="gb-topbar-cta">
          <a href="https://expatbuildr.com" className="btn-ghost" target="_blank" rel="noopener noreferrer">Projects</a>
          <a href="https://t.me/expatbuildrdev" className="btn-primary" target="_blank" rel="noopener noreferrer">
            Tell Me Your Idea →
          </a>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="gb-hero">
        <div className="gb-hero-grid" aria-hidden="true" />
        <div className="gb-hero-glow" aria-hidden="true" />

        {/* Urgency badge — change "2 spots" as needed */}
        <div className="gb-urgency">
          <span className="urgency-dot" />
          ⚡ ONLY 2 PROJECT SPOTS OPEN THIS MONTH — FIRST COME, FIRST BUILT
        </div>

        <div className="gb-eyebrow">Institutional-Grade AI & SaaS Infrastructure</div>

        <h1 className="gb-h1">
          Your Idea.<br />
          <span>Built at Scale.</span><br />
          Shipped in Weeks.
        </h1>

        <p className="gb-subhead">
          Expat Buildr engineers AI-native SaaS products, autonomous SEO systems, and grant intelligence engines — for founders who don't have time for slow agencies or junior devs. Tell me your idea. I'll build it.
        </p>

        {/* ── PRIMARY + SECONDARY CTAs ── */}
        <div className="gb-hero-ctas">
          {/* PRIMARY — Telegram Hub */}
          <a href="https://t.me/expatbuildrdev" className="btn-tg" target="_blank" rel="noopener noreferrer">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.833.941z" /></svg>
            Tell Me Your Idea
          </a>

          {/* X / Twitter */}
          <a href="https://x.com/expatbuildr" className="btn-x" target="_blank" rel="noopener noreferrer">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
            Follow @expatbuildr
          </a>

          {/* LinkedIn */}
          <a href="https://linkedin.com/in/expatbuildr" className="btn-li" target="_blank" rel="noopener noreferrer">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
            Connect on LinkedIn
          </a>

          {/* YouTube */}
          <a href="https://www.youtube.com/@expatbuildr" className="btn-yt" target="_blank" rel="noopener noreferrer">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
            Watch on YouTube
          </a>
        </div>

        {/* ── SCROLL HINT ── */}
        <div className="gb-scroll-hint" aria-hidden="true">
          <span>SCROLL</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 10l5 5 5-5" /></svg>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <div className="gb-stats" role="list" aria-label="Key statistics">
        {STATS.map((s) => (
          <div key={s.value} className="gb-stat" role="listitem">
            <div className="gb-stat-val">{s.value}</div>
            <div className="gb-stat-label">{s.label}</div>
          </div>
        ))}
      </div>

      {/* ── TRUST BULLETS ── */}
      <section className="gb-section">
        <div className="gb-section-label">Why Expat Buildr</div>
        <h2 className="gb-section-title">Not an Agency.<br />Not a Freelancer.<br />A Builder.</h2>
        <p className="gb-section-sub">
          Every product in the Expat Buildr portfolio ships with institutional-grade architecture, autonomous AI workflows, and systems designed to compound in value — not just look good in a demo.
        </p>
        <div className="gb-bullets">
          {TRUST_BULLETS.map((b, i) => (
            <div key={i} className="gb-bullet">
              <span className="gb-bullet-icon" aria-hidden="true">{b.icon}</span>
              <span className="gb-bullet-text">{b.text}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── PRODUCT SHOWCASE ── */}
      <section className="gb-section gb-section-alt">
        <div className="gb-section-label">Live Products</div>
        <h2 className="gb-section-title">The Portfolio.<br />All Shipping.</h2>
        <p className="gb-section-sub">
          From grant discovery to SEO command centers — these aren't mockups. They're live, scalable products built with the same stack and philosophy I'll use to build yours.
        </p>
        <div className="gb-products">
          {PRODUCTS.map((p) => (
            <article key={p.name} className="gb-product-card">
              {/* Replace img src with actual screenshots when available */}
              <img
                src={p.img}
                alt={`${p.name} product screenshot`}
                className="gb-product-img"
                loading="lazy"
                onError={(e) => { e.target.style.display = "none"; }}
              />
              <div className="gb-product-body">
                <span className="gb-product-badge">{p.badge}</span>
                <div className="gb-product-name">{p.name}</div>
                <div className="gb-product-tag">{p.tag}</div>
                <p className="gb-product-desc">{p.desc}</p>
                <a href={p.url} className="gb-product-link" target="_blank" rel="noopener noreferrer">
                  Access System →
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="gb-section">
        <div className="gb-section-label">Social Proof</div>
        <h2 className="gb-section-title">Founders Talk.</h2>
        <p className="gb-section-sub">
          Real results from real builders. {/* Replace with verified testimonials */}
        </p>
        <div className="gb-testimonials">
          {TESTIMONIALS.map((t, i) => (
            <blockquote key={i} className="gb-testi">
              <p className="gb-testi-text">{t.text}</p>
              <footer className="gb-testi-author">
                <div className="gb-testi-avatar" aria-hidden="true">{t.initials}</div>
                <div>
                  <div className="gb-testi-name">{t.name}</div>
                  <div className="gb-testi-role">{t.role}</div>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>
      </section>

      {/* ── LEAD CAPTURE (email backup) ── */}
      <section className="gb-section gb-section-alt">
        <div className="gb-form-wrap">
          <h2 className="gb-form-title">Get Early Access.</h2>
          <p className="gb-form-sub">
            Drop your email for launch alerts, build updates, and first access to new Expat Buildr tools. No spam — only signal.
          </p>
          {submitted ? (
            <div className="gb-form-success">✔ You're on the list. Watch your inbox.</div>
          ) : (
            <>
              <div className="gb-form-row">
                <input
                  type="email"
                  className="gb-input"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
                  aria-label="Email address"
                />
                <button className="btn-primary" onClick={handleSubmit}>
                  Get Access
                </button>
              </div>
              {emailError && <p style={{ color: "var(--accent3)", fontSize: "0.75rem", marginTop: "8px" }}>{emailError}</p>}
            </>
          )}
          <p className="gb-form-note">
            Or skip the inbox — join the Telegram hub directly: 
            <a href="https://t.me/expatbuildrdev" style={{ color: "var(--accent)", textDecoration: "none" }} target="_blank" rel="noopener noreferrer">t.me/expatbuildrdev</a>
          </p>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="gb-final-cta">
        <div className="gb-section-label" style={{ justifyContent: "center" }}>The Move</div>
        <h2 className="gb-final-title">
          You Have the Idea.<br />
          <span style={{ color: "var(--accent)" }}>I'll Build the System.</span>
        </h2>
        <p className="gb-final-sub">
          Stop waiting. Limited build slots go fast — message me on Telegram now and let's scope your product in 24 hours.
        </p>
        <a href="https://t.me/expatbuildrdev" className="btn-tg" style={{ display: "inline-flex", fontSize: "1.05rem", padding: "16px 36px" }} target="_blank" rel="noopener noreferrer">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.833.941z" /></svg>
          Get Your App Built →
        </a>

        {/* Secondary socials */}
        <div className="gb-social-row">
          <a href="https://x.com/expatbuildr" className="gb-social-pill" target="_blank" rel="noopener noreferrer">𝕏 @expatbuildr</a>
          <a href="https://linkedin.com/in/expatbuildr" className="gb-social-pill" target="_blank" rel="noopener noreferrer">in Expat Buildr</a>
          <a href="https://www.youtube.com/@expatbuildr" className="gb-social-pill" target="_blank" rel="noopener noreferrer">▶ @expatbuildr</a>
          <a href="https://expatbuildr.com" className="gb-social-pill" target="_blank" rel="noopener noreferrer">🌐 expatbuildr.com</a>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="gb-footer">
        <span className="gb-footer-copy">© {new Date().getFullYear()} Expat Buildr — All Systems Operational</span>
        <nav className="gb-footer-links" aria-label="Footer navigation">
          <a href="https://expatbuildr.com" className="gb-footer-link">Projects</a>
          <a href="https://t.me/expatbuildrdev" className="gb-footer-link">Telegram</a>
          <a href="https://x.com/expatbuildr" className="gb-footer-link">X</a>
          <a href="https://grantwisdom.com" className="gb-footer-link">GrantWisdom</a>
        </nav>
      </footer>

    </div>
  );
}
