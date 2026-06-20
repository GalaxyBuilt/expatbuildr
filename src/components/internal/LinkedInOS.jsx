import { useState, useRef } from 'react';

export default function LinkedInOS() {
  const [activeNav, setActiveNav] = useState('profile');
  const mainRef = useRef(null);

  const topics = [
    "How I built X in 48 hours", "The $0 → first MRR playbook", "Why most SaaS founders quit too early",
    "My full AI stack for building alone", "Month X: what I shipped and what I didn't", "The pricing mistake I almost made",
    "Poll: Bootstrap vs Raise?", "How GrantWisdom works under the hood", "Why SEO is the best SaaS growth channel",
    "What I'd do differently starting over", "Framework I use to validate every SaaS idea", "Lessons from shipping 4 products at once",
    "How I reverse-engineered the LinkedIn algorithm", "Hot take: most build-in-public posts are useless", "EverRank update — what we shipped",
    "The AI prompt saving me 10 hours/week", "I almost pivoted. Here's why I didn't.", "The real reason SaaS products fail in year 1",
    "Customer research with zero audience", "My honest take on building with Next.js 14", "The growth channel nobody talks about: docs",
    "Poll: what kills SaaS products fastest?", "How I launch with no budget", "10 AI tools I use daily as a founder",
    "The MultiSaaS story — a dashboard for dashboards", "Unpopular opinion: build boring SaaS", "Idea to live product in 14 days",
    "The content engine running BlogBanana", "Why your LinkedIn profile kills your authority", "Thread: 30 things after shipping 4 products"
  ];

  const scrollToSection = (id) => {
    setActiveNav(id);
    const element = document.getElementById(`s-${id}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="linkedin-os-root">
      <style>{`
        .linkedin-os-root {
          font-family: 'DM Mono', 'Fira Code', 'Courier New', monospace;
          background: #07080d;
          color: #dde0f0;
          display: flex;
          min-height: 100vh;
        }
        .linkedin-os-root * { box-sizing: border-box; margin: 0; padding: 0; }
        
        .side {
          width: 210px;
          background: #0d0f18;
          border-right: 1px solid #1c1f30;
          padding: 24px 0;
          position: sticky;
          top: 0;
          height: 100vh;
          overflow-y: auto;
          flex-shrink: 0;
          display: flex;
          flex-direction: column;
        }
        .logo { padding: 0 18px 20px; border-bottom: 1px solid #1c1f30; margin-bottom: 18px; }
        .logo-tag { font-size: 8px; letter-spacing: .3em; color: #454870; text-transform: uppercase; margin-bottom: 6px; }
        .logo-title { font-size: 12px; font-weight: 800; color: #00e5a0; letter-spacing: .05em; }
        .logo-sub { font-size: 9px; color: #454870; margin-top: 3px; }
        
        .nav-btn {
          display: block;
          width: 100%;
          text-align: left;
          padding: 8px 18px;
          font-size: 9px;
          letter-spacing: .12em;
          text-transform: uppercase;
          color: #454870;
          background: transparent;
          border: none;
          border-left: 2px solid transparent;
          cursor: pointer;
          transition: all .15s;
          margin-bottom: 1px;
          font-family: inherit;
        }
        .nav-btn.on { color: #00e5a0; background: rgba(0, 229, 160, .08); border-left: 2px solid #00e5a0; }
        
        .meta { padding: 16px 18px; border-top: 1px solid #1c1f30; margin-top: auto; }
        .meta-row { font-size: 8px; color: #454870; margin-bottom: 4px; letter-spacing: .06em; }
        .meta-row span { color: #8890b0; }
        
        .main-content { flex: 1; padding: 40px 44px 80px; max-width: 820px; overflow-y: auto; }
        .pg-eyebrow { font-size: 8px; letter-spacing: .35em; color: #454870; text-transform: uppercase; margin-bottom: 12px; }
        .pg-title { font-size: 24px; font-weight: 800; color: #fff; line-height: 1.25; margin-bottom: 12px; letter-spacing: -.01em; }
        .pg-sub { font-size: 12px; color: #8890b0; line-height: 1.8; max-width: 500px; }
        
        .stats { display: flex; gap: 12px; margin-top: 22px; flex-wrap: wrap; }
        .stat { background: #111420; border: 1px solid #1c1f30; border-radius: 8px; padding: 12px 16px; min-width: 100px; }
        .stat-v { font-size: 18px; font-weight: 800; margin-bottom: 3px; }
        .stat-l { font-size: 8px; letter-spacing: .16em; color: #454870; text-transform: uppercase; }
        
        .divider { height: 1px; background: #1c1f30; margin: 40px 0 36px; }
        .sec { margin-bottom: 56px; scroll-margin-top: 20px; }
        .sh { display: flex; align-items: center; gap: 12px; margin-bottom: 24px; }
        .sh-num { font-size: 8px; letter-spacing: .25em; color: #454870; text-transform: uppercase; min-width: 18px; }
        .sh-title { font-size: 16px; font-weight: 800; color: #dde0f0; letter-spacing: .02em; }
        .sh-line { flex: 1; height: 1px; background: #1c1f30; margin-left: 6px; }
        
        .card { background: #111420; border: 1px solid #1c1f30; border-radius: 10px; padding: 18px 22px; margin-bottom: 14px; }
        .card-title { font-size: 8px; letter-spacing: .2em; text-transform: uppercase; font-weight: 800; margin-bottom: 10px; }
        .card-body { font-size: 12px; color: #8890b0; line-height: 1.8; }
        
        .code-box { background: #080a12; border: 1px solid #1c1f30; border-radius: 7px; padding: 12px 16px; font-size: 11px; color: #00e5a0; font-family: monospace; line-height: 1.9; margin: 10px 0; white-space: pre-wrap; }
        
        .grid2 { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin-bottom: 4px; }
        @media (max-width: 600px) { .grid2 { grid-template-columns: 1fr; } }
        
        .ul-list { margin: 0; padding: 0; }
        .li-item { list-style: none; font-size: 12px; color: #8890b0; line-height: 1.8; margin-bottom: 6px; padding-left: 3px; display: flex; align-items: flex-start; }
        .arr-icon { font-weight: 900; font-size: 10px; margin-right: 7px; flex-shrink: 0; }
        
        .tag-pill { display: inline-block; padding: 2px 8px; border-radius: 3px; font-size: 9px; letter-spacing: .07em; text-transform: uppercase; font-weight: 700; margin-right: 4px; margin-bottom: 4px; background: rgba(0, 229, 160, .1); color: #00e5a0; border: 1px solid rgba(0, 229, 160, .22); }
        
        .tbl-wrap { overflow-x: auto; border-radius: 7px; border: 1px solid #1c1f30; margin-bottom: 14px; }
        table { width: 100%; border-collapse: collapse; font-size: 11px; }
        th { text-align: left; padding: 9px 12px; background: #0d0f18; color: #454870; font-size: 8px; letter-spacing: .16em; text-transform: uppercase; border-bottom: 1px solid #1c1f30; white-space: nowrap; }
        td { padding: 9px 12px; border-bottom: 1px solid #1c1f30; font-size: 11px; line-height: 1.6; vertical-align: top; color: #8890b0; }
        
        .phase-box { background: #111420; border: 1px solid #1c1f30; border-radius: 10px; overflow: hidden; margin-bottom: 18px; }
        .phase-hd { padding: 12px 18px; display: flex; align-items: center; gap: 10px; }
        .phase-ph { font-size: 8px; letter-spacing: .2em; text-transform: uppercase; font-weight: 800; }
        .phase-ti { font-size: 12px; font-weight: 700; color: #dde0f0; }
        .phase-bd { padding: 16px 18px; }
        
        strong { color: #dde0f0; font-weight: 700; }
      `}</style>

      <aside className="side">
        <div className="logo">
          <div className="logo-tag">ExpatBuildr Vault</div>
          <div className="logo-title">LinkedIn OS</div>
          <div className="logo-sub">@expatbuildr · 0 → 100K</div>
        </div>
        <button className={`nav-btn ${activeNav === 'profile' ? 'on' : ''}`} onClick={() => scrollToSection('profile')}>Profile Optimization</button>
        <button className={`nav-btn ${activeNav === 'content' ? 'on' : ''}`} onClick={() => scrollToSection('content')}>Content Strategy</button>
        <button className={`nav-btn ${activeNav === 'ads' ? 'on' : ''}`} onClick={() => scrollToSection('ads')}>Ads Strategy</button>
        <button className={`nav-btn ${activeNav === 'engagement' ? 'on' : ''}`} onClick={() => scrollToSection('engagement')}>Engagement Tactics</button>
        <button className={`nav-btn ${activeNav === 'analytics' ? 'on' : ''}`} onClick={() => scrollToSection('analytics')}>Analytics &amp; Iteration</button>
        <button className={`nav-btn ${activeNav === 'action' ? 'on' : ''}`} onClick={() => scrollToSection('action')}>Action Plan</button>
        
        <div className="meta">
          <div className="meta-row">Niche: <span>All Founders</span></div>
          <div className="meta-row">Tone: <span>Mixed</span></div>
          <div className="meta-row">Formats: <span>Text·Carousel·Poll</span></div>
          <div className="meta-row">Ads: <span>$0→$2K/mo</span></div>
          <div className="meta-row">Target: <span>100K followers</span></div>
        </div>
      </aside>

      <main className="main-content" ref={mainRef}>
        <div className="pg-eyebrow">@expatbuildr · Full LinkedIn Growth System</div>
        <h1 className="pg-title">100K Founder Audience<br />Growth Strategy</h1>
        <p className="pg-sub">A complete LinkedIn OS for a multi-SaaS founder targeting AI builders, bootstrappers, and B2B makers. Profile · Content · Ads · Engagement · Analytics — built to compound from 0 to 100K.</p>
        
        <div className="stats">
          <div className="stat"><div className="stat-v" style={{ color: '#00e5a0' }}>100K</div><div className="stat-l">Follower Goal</div></div>
          <div className="stat"><div className="stat-v" style={{ color: '#4da8ff' }}>3–4×</div><div className="stat-l">Posts / Week</div></div>
          <div className="stat"><div className="stat-v" style={{ color: '#f0c040' }}>$0→$2K</div><div className="stat-l">Ad Budget Path</div></div>
          <div className="stat"><div className="stat-v" style={{ color: '#ff5470' }}>12–18mo</div><div className="stat-l">Timeline</div></div>
        </div>
        
        <div className="divider"></div>

        {/* 01 PROFILE */}
        <section className="sec" id="s-profile">
          <div className="sh"><span className="sh-num">01</span><span className="sh-title">Profile Optimization</span><div className="sh-line"></div></div>

          <div className="card" style={{ borderLeft: '3px solid #00e5a0' }}>
            <div className="card-title" style={{ color: '#00e5a0' }}>Headline Formula</div>
            <div className="card-body">
              <strong>Signal 1: Builder Identity · Signal 2: Product Output · Signal 3: Pattern Interrupt</strong>
              <div className="code-box">Building AI SaaS in public → GrantWisdom · EverRank · BlogBanana · MultiSaaS
Founder. AI Engineer. Shipping what most people only plan.</div>
              Punchy alternate:
              <div className="code-box">AI SaaS founder shipping 4 products simultaneously → follow to watch how.</div>
            </div>
          </div>

          <div className="card" style={{ borderLeft: '3px solid #f0c040' }}>
            <div className="card-title" style={{ color: '#f0c040' }}>About / Bio — 5-Block Structure</div>
            <div className="card-body">
              <ul className="ul-list">
                <li className="li-item"><span className="arr-icon" style={{ color: '#f0c040' }}>→</span><span><strong>Block 1 — Hook:</strong> "I build AI SaaS products in public. No fluff. Just systems, code, and results."</span></li>
                <li className="li-item"><span className="arr-icon" style={{ color: '#f0c040' }}>→</span><span><strong>Block 2 — Portfolio:</strong> List your 4 products with a one-line description each (GrantWisdom, EverRank, BlogBanana, MultiSaaS).</span></li>
                <li className="li-item"><span className="arr-icon" style={{ color: '#f0c040' }}>→</span><span><strong>Block 3 — What You Post:</strong> "I write about building SaaS with AI, growing without VC money, and decisions founders avoid talking about."</span></li>
                <li className="li-item"><span className="arr-icon" style={{ color: '#f0c040' }}>→</span><span><strong>Block 4 — Social Proof:</strong> Mention a real milestone. "Shipped 4 products in X months" earns immediate credibility.</span></li>
                <li className="li-item"><span className="arr-icon" style={{ color: '#f0c040' }}>→</span><span><strong>Block 5 — CTA:</strong> "Follow @expatbuildr. New post every week. DMs open."</span></li>
              </ul>
            </div>
          </div>

          <div className="grid2">
            <div className="card" style={{ borderLeft: '3px solid #4da8ff' }}>
              <div className="card-title" style={{ color: '#4da8ff' }}>Banner Strategy</div>
              <div className="card-body">
                <ul className="ul-list">
                  <li className="li-item"><span className="arr-icon" style={{ color: '#4da8ff' }}>→</span><span>Dark terminal / code aesthetic</span></li>
                  <li className="li-item"><span className="arr-icon" style={{ color: '#4da8ff' }}>→</span><span>Show all 4 product names visually</span></li>
                  <li className="li-item"><span className="arr-icon" style={{ color: '#4da8ff' }}>→</span><span>Tagline: "Building AI SaaS in Public"</span></li>
                </ul>
              </div>
            </div>
            <div className="card" style={{ borderLeft: '3px solid #ff5470' }}>
              <div className="card-title" style={{ color: '#ff5470' }}>Featured Section</div>
              <div className="card-body">
                <ul className="ul-list">
                  <li className="li-item"><span className="arr-icon" style={{ color: '#ff5470' }}>→</span><span>Slot 1: Screenshot of best-performing post</span></li>
                  <li className="li-item"><span className="arr-icon" style={{ color: '#ff5470' }}>→</span><span>Slot 2: GrantWisdom page or waitlist</span></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="card" style={{ borderLeft: '3px solid #00e5a0' }}>
            <div className="card-title" style={{ color: '#00e5a0' }}>SEO Keywords</div>
            <div className="card-body">
              <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {['AI SaaS founder', 'SaaS builder', 'indie hacker', 'AI engineer', 'build in public', 'SEO SaaS'].map(tag => (
                  <span key={tag} className="tag-pill">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 02 CONTENT */}
        <section className="sec" id="s-content">
          <div className="sh"><span className="sh-num">02</span><span className="sh-title">Content Strategy</span><div className="sh-line"></div></div>
          <div className="tbl-wrap">
            <table>
              <thead>
                <tr><th>Pillar</th><th>What You Post</th><th>Emotion</th><th>Freq</th></tr>
              </thead>
              <tbody>
                <tr><td style={{ color: '#00e5a0', fontWeight: '700' }}>Build in Public</td><td>Progress updates, revenue numbers</td><td>Inspiration</td><td>1×/wk</td></tr>
                <tr><td style={{ color: '#00e5a0', fontWeight: '700' }}>Founder Insight</td><td>Hard lessons, decisions while building</td><td>Respect</td><td>1×/wk</td></tr>
              </tbody>
            </table>
          </div>
          <div className="card" style={{ borderLeft: '3px solid #00e5a0' }}>
            <div className="card-title" style={{ color: '#00e5a0' }}>30-Post Topic Bank</div>
            <div className="card-body">
              <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {topics.map(t => (
                  <span key={t} className="tag-pill">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 03 ADS */}
        <section className="sec" id="s-ads">
          <div className="sh"><span className="sh-num">03</span><span className="sh-title">Ads Strategy</span><div className="sh-line"></div></div>
          <div className="phase-box">
            <div className="phase-hd" style={{ background: 'rgba(240,192,64,.1)', borderBottom: '1px solid rgba(240,192,64,.25)' }}>
              <span className="phase-ph" style={{ color: '#f0c040' }}>Phase 2 · Growth</span>
              <span className="phase-ti">$150 / Month — Follower Acquisition Ads</span>
            </div>
            <div className="phase-bd">
              <ul className="ul-list">
                <li className="li-item"><span className="arr-icon" style={{ color: '#f0c040' }}>→</span><span>LinkedIn Follower Ads — direct objective.</span></li>
              </ul>
            </div>
          </div>
        </section>

        {/* 04 ENGAGEMENT */}
        <section className="sec" id="s-engagement">
          <div className="sh"><span className="sh-num">04</span><span className="sh-title">Engagement Tactics</span><div className="sh-line"></div></div>
          <div className="card" style={{ borderLeft: '3px solid #f0c040' }}>
            <div className="card-title" style={{ color: '#f0c040' }}>The 3-Line Value Comment Formula</div>
            <div className="card-body">
              <div className="code-box">Line 1: Agree with core point.
Line 2: Add specific personal experience.
Line 3: Ask a follow-up question.</div>
            </div>
          </div>
        </section>

        {/* 06 ACTION PLAN */}
        <section className="sec" id="s-action">
          <div className="sh"><span className="sh-num">06</span><span className="sh-title">Step-by-Step Action Plan</span><div className="sh-line"></div></div>
          <div className="phase-box">
            <div className="phase-hd" style={{ background: 'rgba(0,229,160,.1)', borderBottom: '1px solid rgba(0,229,160,.25)' }}>
              <span className="phase-ph" style={{ color: '#00e5a0' }}>This Week · Days 1–7</span>
              <span className="phase-ti">Profile &amp; Foundation Sprint</span>
            </div>
            <div className="phase-bd">
              <ul className="ul-list">
                <li className="li-item"><span className="arr-icon" style={{ color: '#00e5a0' }}>→</span><span>Day 1: Rewrite headline with the 3-signal formula.</span></li>
                <li className="li-item"><span className="arr-icon" style={{ color: '#00e5a0' }}>→</span><span>Day 2: Design and upload new banner. Enable Creator Mode.</span></li>
              </ul>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
