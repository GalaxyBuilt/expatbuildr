import { useState } from 'react';

export default function TonyLeadStrategy() {
  const [activeTab, setActiveTab] = useState('verdict');

  return (
    <div className="tony-leads-wrapper">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');
        
        .tony-leads-wrapper {
          --ink: #0f0f0f;
          --ink2: #3a3a3a;
          --ink3: #6b6b6b;
          --paper: #fafaf7;
          --card: #ffffff;
          --accent: #e8440a;
          --accent2: #1a1a2e;
          --gold: #c49a2c;
          --teal: #0d7377;
          --purple: #5b2d8e;
          --border: rgba(0,0,0,0.08);
          --border2: rgba(0,0,0,0.14);
          font-family: 'DM Sans', sans-serif;
          background: var(--paper);
          color: var(--ink);
          font-size: 14px;
          line-height: 1.6;
          min-height: 100vh;
          box-sizing: border-box;
        }

        .tony-leads-wrapper * { box-sizing: border-box; }

        @media (prefers-color-scheme: dark) {
          .tony-leads-wrapper {
            --ink: #f0ede8;
            --ink2: #c8c4be;
            --ink3: #888480;
            --paper: #111111;
            --card: #1c1c1c;
            --border: rgba(255,255,255,0.07);
            --border2: rgba(255,255,255,0.14);
          }
        }

        .report-wrap { max-width: 900px; margin: 0 auto; padding: 20px 16px 40px; }
        
        .masthead { border-bottom: 2px solid var(--ink); padding-bottom: 20px; margin-bottom: 32px; }
        .masthead-label { font-family: 'Syne', sans-serif; font-size: 10px; font-weight: 600; letter-spacing: .2em; text-transform: uppercase; color: var(--accent); margin-bottom: 8px; }
        .masthead-title { font-family: 'Syne', sans-serif; font-size: clamp(24px, 4vw, 38px); font-weight: 800; line-height: 1.1; color: var(--ink); margin-bottom: 12px; }
        .masthead-title span { color: var(--accent); }
        .masthead-sub { font-size: 13px; color: var(--ink3); max-width: 560px; }
        .masthead-meta { display: flex; gap: 24px; margin-top: 16px; flex-wrap: wrap; }
        .meta-chip { font-size: 11px; font-weight: 500; padding: 4px 10px; border: 0.5px solid var(--border2); border-radius: 4px; color: var(--ink2); }

        .section-rule { display: flex; align-items: center; gap: 12px; margin: 32px 0 20px; }
        .section-rule-num { font-family: 'Syne', sans-serif; font-size: 10px; font-weight: 700; letter-spacing: .15em; color: var(--accent); flex-shrink: 0; }
        .section-rule-title { font-family: 'Syne', sans-serif; font-size: 13px; font-weight: 700; letter-spacing: .05em; text-transform: uppercase; color: var(--ink); }
        .section-rule-line { flex: 1; height: 0.5px; background: var(--border2); }

        .verdict-banner { background: var(--accent2); color: #fff; border-radius: 10px; padding: 24px 28px; margin-bottom: 28px; position: relative; overflow: hidden; }
        .verdict-banner::before { content: ''; position: absolute; right: -20px; top: -20px; width: 120px; height: 120px; border-radius: 50%; background: var(--accent); opacity: .15; }
        .verdict-tag { font-size: 10px; font-weight: 600; letter-spacing: .18em; text-transform: uppercase; color: rgba(255,255,255,.55); margin-bottom: 6px; }
        .verdict-platform { font-family: 'Syne', sans-serif; font-size: clamp(20px, 3vw, 30px); font-weight: 800; color: #fff; margin-bottom: 6px; }
        .verdict-platform em { color: #f5c842; font-style: normal; }
        .verdict-why { font-size: 13px; color: rgba(255,255,255,.75); max-width: 640px; line-height: 1.65; }

        .platform-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); gap: 10px; margin-bottom: 8px; }
        .pcard { border: 0.5px solid var(--border); border-radius: 10px; background: var(--card); padding: 14px 16px; position: relative; overflow: hidden; transition: border-color .2s; }
        .pcard:hover { border-color: var(--border2); }
        .pcard.winner { border: 2px solid var(--accent); background: var(--card); }
        .pcard-badge { position: absolute; top: 0; right: 0; font-size: 9px; font-weight: 600; letter-spacing: .1em; text-transform: uppercase; background: var(--accent); color: #fff; padding: 3px 8px; border-bottom-left-radius: 6px; }
        .pcard-name { font-family: 'Syne', sans-serif; font-size: 15px; font-weight: 700; color: var(--ink); margin-bottom: 10px; }
        .pcard-row { display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 4px; }
        .pcard-label { font-size: 11px; color: var(--ink3); }
        .pcard-val { font-size: 12px; font-weight: 500; color: var(--ink2); }
        .pcard-score { margin-top: 10px; }
        .pcard-score-label { font-size: 10px; color: var(--ink3); margin-bottom: 4px; text-transform: uppercase; letter-spacing: .08em; }
        .bar-track { height: 4px; background: var(--border); border-radius: 2px; margin-bottom: 5px; overflow: hidden; }
        .bar-fill { height: 100%; border-radius: 2px; transition: width .6s ease; }
        .bar-label { font-size: 10px; color: var(--ink3); display: flex; justify-content: space-between; }

        .arb-table { width: 100%; border-collapse: collapse; font-size: 13px; margin-bottom: 8px; }
        .arb-table th { font-family: 'Syne', sans-serif; font-size: 10px; font-weight: 600; letter-spacing: .1em; text-transform: uppercase; color: var(--ink3); border-bottom: 0.5px solid var(--border2); padding: 8px 10px; text-align: left; }
        .arb-table td { padding: 9px 10px; border-bottom: 0.5px solid var(--border); color: var(--ink2); vertical-align: top; }
        .arb-table tr:last-child td { border-bottom: none; }
        .arb-table tr:hover td { background: var(--paper); }
        .arb-table .pos { color: #1a8a4a; font-weight: 500; }
        .arb-table .neg { color: #c0392b; font-weight: 500; }
        .arb-table .hl { color: var(--ink); font-weight: 500; }
        
        .tag { display: inline-block; font-size: 10px; font-weight: 600; padding: 2px 8px; border-radius: 3px; letter-spacing: .06em; text-transform: uppercase; }
        .tag-green { background: rgba(26,138,74,.1); color: #1a8a4a; }
        .tag-red { background: rgba(192,57,43,.1); color: #c0392b; }
        .tag-amber { background: rgba(196,154,44,.12); color: #a07818; }
        .tag-blue { background: rgba(13,115,119,.1); color: var(--teal); }

        .phase-block { border-left: 2px solid var(--border2); margin-left: 14px; padding: 0 0 28px 24px; position: relative; }
        .phase-block:last-child { padding-bottom: 0; border-left-color: transparent; }
        .phase-dot { position: absolute; left: -9px; top: 2px; width: 16px; height: 16px; border-radius: 50%; border: 2px solid var(--card); flex-shrink: 0; }
        .phase-dot-1 { background: var(--teal); }
        .phase-dot-2 { background: var(--gold); }
        .phase-dot-3 { background: var(--accent); }
        .phase-header { display: flex; align-items: baseline; gap: 10px; margin-bottom: 12px; }
        .phase-num { font-family: 'Syne', sans-serif; font-size: 10px; font-weight: 700; letter-spacing: .15em; text-transform: uppercase; }
        .phase-num-1 { color: var(--teal); }
        .phase-num-2 { color: var(--gold); }
        .phase-num-3 { color: var(--accent); }
        .phase-title { font-family: 'Syne', sans-serif; font-size: 16px; font-weight: 700; color: var(--ink); }
        .phase-range { font-size: 12px; color: var(--ink3); }
        .phase-cols { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
        @media (max-width: 500px) { .phase-cols { grid-template-columns: 1fr; } }
        .phase-col-title { font-size: 10px; font-weight: 600; letter-spacing: .1em; text-transform: uppercase; color: var(--ink3); margin-bottom: 8px; }
        .phase-item { font-size: 12px; color: var(--ink2); padding: 5px 0; border-bottom: 0.5px solid var(--border); display: flex; align-items: flex-start; gap: 6px; }
        .phase-item:last-child { border-bottom: none; }
        .phase-bullet { width: 4px; height: 4px; border-radius: 50%; background: var(--ink3); flex-shrink: 0; margin-top: 6px; }
        .phase-kpi { display: flex; gap: 8px; flex-wrap: wrap; margin-top: 12px; }
        .kpi-chip { font-size: 11px; font-weight: 500; padding: 4px 10px; border-radius: 4px; border: 0.5px solid var(--border2); color: var(--ink2); }

        .unit-econ { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 10px; margin-bottom: 8px; }
        .ue-card { background: var(--card); border: 0.5px solid var(--border); border-radius: 10px; padding: 16px; }
        .ue-label { font-size: 11px; color: var(--ink3); text-transform: uppercase; letter-spacing: .08em; margin-bottom: 6px; }
        .ue-val { font-family: 'Syne', sans-serif; font-size: 22px; font-weight: 700; color: var(--ink); line-height: 1; }
        .ue-sub { font-size: 11px; color: var(--ink3); margin-top: 4px; }
        .ue-delta { font-size: 11px; font-weight: 600; margin-top: 6px; }
        .ue-delta.pos { color: #1a8a4a; }
        .ue-delta.neg { color: #c0392b; }

        .arb-explainer { background: var(--card); border: 0.5px solid var(--border); border-radius: 10px; padding: 20px 22px; margin-bottom: 8px; }
        .arb-explainer h4 { font-family: 'Syne', sans-serif; font-size: 13px; font-weight: 700; color: var(--ink); margin-bottom: 10px; }
        .arb-formula { background: var(--paper); border-left: 3px solid var(--accent); padding: 10px 14px; font-family: monospace; font-size: 12px; color: var(--ink2); border-radius: 0 6px 6px 0; margin-bottom: 10px; line-height: 1.8; }
        .arb-note { font-size: 12px; color: var(--ink3); line-height: 1.65; }

        .offset-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 10px; }
        .offset-card { background: var(--card); border: 0.5px solid var(--border); border-radius: 8px; padding: 14px; }
        .offset-platform { font-size: 11px; font-weight: 600; letter-spacing: .08em; text-transform: uppercase; color: var(--ink3); margin-bottom: 4px; }
        .offset-amount { font-family: 'Syne', sans-serif; font-size: 18px; font-weight: 700; color: var(--teal); }
        .offset-detail { font-size: 11px; color: var(--ink3); margin-top: 4px; line-height: 1.5; }

        .roadmap-table { width: 100%; border-collapse: collapse; font-size: 12px; margin-bottom: 8px; }
        .roadmap-table th { font-size: 10px; font-weight: 600; letter-spacing: .1em; text-transform: uppercase; color: var(--ink3); border-bottom: 0.5px solid var(--border2); padding: 8px 10px; text-align: left; }
        .roadmap-table td { padding: 9px 10px; border-bottom: 0.5px solid var(--border); color: var(--ink2); vertical-align: top; line-height: 1.5; }
        .roadmap-table tr:last-child td { border-bottom: none; }
        .roadmap-table .month-col { font-family: 'Syne', sans-serif; font-size: 11px; font-weight: 700; color: var(--ink); white-space: nowrap; }

        .footnote { font-size: 11px; color: var(--ink3); margin-top: 24px; border-top: 0.5px solid var(--border); padding-top: 12px; line-height: 1.7; }

        .tab-nav { display: flex; gap: 4px; margin-bottom: 20px; flex-wrap: wrap; }
        .tab-btn { font-family: 'Syne', sans-serif; font-size: 10px; font-weight: 600; letter-spacing: .08em; text-transform: uppercase; padding: 6px 14px; border-radius: 4px; border: 0.5px solid var(--border2); background: transparent; color: var(--ink3); cursor: pointer; transition: all .15s; }
        .tab-nav .tab-btn.active { background: var(--ink); color: var(--paper); border-color: var(--ink); }
        .tab-btn:hover:not(.active) { color: var(--ink); border-color: var(--ink); }
        
        .cta-row { display: flex; gap: 10px; margin-top: 12px; flex-wrap: wrap; }
        .cta-btn { font-family: 'Syne', sans-serif; font-size: 11px; font-weight: 600; letter-spacing: .08em; text-transform: uppercase; padding: 8px 16px; border-radius: 5px; border: none; cursor: pointer; transition: opacity .15s; }
        .cta-btn:hover { opacity: .85; }
        .cta-primary { background: var(--accent); color: #fff; }
        .cta-secondary { background: var(--card); border: 0.5px solid var(--border2); color: var(--ink2); }
      `}</style>

      <div className="report-wrap">
        {/* MASTHEAD */}
        <div className="masthead">
          <div className="masthead-label">Growth Strategy Report · Tony Leads · 2025–2026</div>
          <div className="masthead-title">The <span>Infinity Loop</span> Platform Analysis:<br />$0 → $100K/Month in 18 Months</div>
          <div className="masthead-sub">A comparative media buying & organic growth strategy for B2B lead gen + AI automation services. Built for a solo founder targeting USD/GBP/EUR markets from a Tier-3 cost base.</div>
          <div className="masthead-meta">
            <span className="meta-chip">5 Platforms Analysed</span>
            <span className="meta-chip">Geographic Arbitrage</span>
            <span className="meta-chip">18-Month Roadmap</span>
            <span className="meta-chip">Unit Economics Included</span>
          </div>
        </div>

        {/* NAV TABS */}
        <div className="tab-nav">
          <button className={`tab-btn ${activeTab === 'verdict' ? 'active' : ''}`} onClick={() => setActiveTab('verdict')}>Verdict</button>
          <button className={`tab-btn ${activeTab === 'platforms' ? 'active' : ''}`} onClick={() => setActiveTab('platforms')}>Platform Showdown</button>
          <button className={`tab-btn ${activeTab === 'arbitrage' ? 'active' : ''}`} onClick={() => setActiveTab('arbitrage')}>Geo Arbitrage</button>
          <button className={`tab-btn ${activeTab === 'loop' ? 'active' : ''}`} onClick={() => setActiveTab('loop')}>Infinity Loop</button>
          <button className={`tab-btn ${activeTab === 'economics' ? 'active' : ''}`} onClick={() => setActiveTab('economics')}>Unit Economics</button>
          <button className={`tab-btn ${activeTab === 'roadmap' ? 'active' : ''}`} onClick={() => setActiveTab('roadmap')}>18-Month Roadmap</button>
        </div>

        {/* TAB: VERDICT */}
        {activeTab === 'verdict' && (
          <div className="tab-panel active">
            <div className="verdict-banner">
              <div className="verdict-tag">The Tony Leads Verdict — Primary Platform</div>
              <div className="verdict-platform"><em>TikTok</em> + LinkedIn Retargeting Stack</div>
              <div className="verdict-why">TikTok wins Phase 1 because it offers the fastest algorithm velocity for zero-spend virality, the lowest CPMs for pixel warming via geo-arbitrage, and a proven pattern of B2B decision-makers discovering services through educational content. LinkedIn retargeting closes the loop — you warm cold audiences on TikTok for $0.60–$2 CPM, then convert them on LinkedIn where intent is highest. Together, they form the cheapest full-funnel stack available to a solo operator in 2025–2026.</div>
            </div>

            <div className="section-rule">
              <span className="section-rule-num">01</span>
              <span className="section-rule-title">Why TikTok First</span>
              <span className="section-rule-line"></span>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: '10px', marginBottom: '24px' }}>
              <div className="ue-card">
                <div className="ue-label">Organic Reach Velocity</div>
                <div className="ue-val" style={{ fontSize: '16px', color: 'var(--accent)' }}>Day 1 → Viral</div>
                <div className="ue-sub">New accounts can hit 100K views within 48 hrs. No follower base required.</div>
              </div>
              <div className="ue-card">
                <div className="ue-label">Tier-2/3 Warm CPM</div>
                <div className="ue-val" style={{ color: 'var(--teal)' }}>$0.60–$2</div>
                <div className="ue-sub">IN, PH, NG geo-warming runs ~85% cheaper than US direct buy.</div>
              </div>
              <div className="ue-card">
                <div className="ue-label">Pixel Warm Cost (US audience)</div>
                <div className="ue-val" style={{ color: 'var(--gold)' }}>~$200</div>
                <div className="ue-sub">To get 1,000 US-equivalent profile visitors via geo-arbitrage warm sequence.</div>
              </div>
              <div className="ue-card">
                <div className="ue-label">Content Format Edge</div>
                <div className="ue-val" style={{ fontSize: '14px' }}>Educational POV</div>
                <div className="ue-sub">"Watch this AI automation save this business $8K/month" outperforms ads 6:1.</div>
              </div>
            </div>

            <div className="section-rule">
              <span className="section-rule-num">02</span>
              <span className="section-rule-title">Why LinkedIn as the Closer</span>
              <span className="section-rule-line"></span>
            </div>

            <table className="arb-table">
              <thead><tr><th>Factor</th><th>TikTok Role</th><th>LinkedIn Role</th></tr></thead>
              <tbody>
                <tr><td className="hl">Funnel Stage</td><td>Awareness + Interest</td><td>Consideration + Decision</td></tr>
                <tr><td className="hl">Audience Intent</td><td>Scrolling / discovering</td><td>Actively researching vendors</td></tr>
                <tr><td className="hl">Cost</td><td>$0.60–$2 CPM (geo-warm)</td><td>$6–$12 CPC (retargeting only)</td></tr>
                <tr><td className="hl">Your Job There</td><td>Educate, build trust, warm pixel</td><td>Convert with ROI case studies</td></tr>
                <tr><td className="hl">Effective CPA</td><td colSpan={2} className="pos">~$40–$120 blended (vs $800+ LinkedIn cold)</td></tr>
              </tbody>
            </table>

            <div className="cta-row">
              <button className="cta-btn cta-primary" onClick={() => setActiveTab('platforms')}>See Full Platform Showdown ↗</button>
              <button className="cta-btn cta-secondary" onClick={() => setActiveTab('roadmap')}>Jump to 18-Month Roadmap ↗</button>
            </div>
          </div>
        )}

        {/* TAB: PLATFORMS */}
        {activeTab === 'platforms' && (
          <div className="tab-panel active">
            <div className="section-rule">
              <span className="section-rule-num">01</span>
              <span className="section-rule-title">Platform Showdown — 5-Way Comparison</span>
              <span className="section-rule-line"></span>
            </div>
            <p style={{ fontSize: '12px', color: 'var(--ink3)', marginBottom: '16px' }}>All CPM/CPC figures are real-world benchmarks (2024–2026 industry data, B2B context). Scores are 1–10 for Tony Leads' specific use case.</p>

            <div className="platform-grid">
              {/* TikTok */}
              <div className="pcard winner">
                <div className="pcard-badge">Winner</div>
                <div className="pcard-name">TikTok</div>
                <div className="pcard-row"><span className="pcard-label">CPM (cold)</span><span className="pcard-val">$1.50–$4</span></div>
                <div className="pcard-row"><span className="pcard-label">CPM (geo-arb)</span><span className="pcard-val">$0.60–$1.80</span></div>
                <div className="pcard-row"><span className="pcard-label">CPC (B2B)</span><span className="pcard-val">$0.20–$0.80</span></div>
                <div className="pcard-score">
                  <div className="pcard-score-label">Algorithm Velocity</div>
                  <div className="bar-track"><div className="bar-fill" style={{ width: '96%', background: 'var(--accent)' }}></div></div>
                  <div className="bar-label"><span>Viral in 24–72h</span><span style={{ color: 'var(--accent)' }}>9.6/10</span></div>
                  <div className="pcard-score-label" style={{ marginTop: '8px' }}>Buying Intent</div>
                  <div className="bar-track"><div className="bar-fill" style={{ width: '55%', background: 'var(--gold)' }}></div></div>
                  <div className="bar-label"><span>Discovery mode</span><span>5.5/10</span></div>
                  <div className="pcard-score-label" style={{ marginTop: '8px' }}>Geo-Arb Viability</div>
                  <div className="bar-track"><div className="bar-fill" style={{ width: '94%', background: 'var(--teal)' }}></div></div>
                  <div className="bar-label"><span>Excellent</span><span style={{ color: 'var(--teal)' }}>9.4/10</span></div>
                  <div className="pcard-score-label" style={{ marginTop: '8px' }}>B2B Content Fit</div>
                  <div className="bar-track"><div className="bar-fill" style={{ width: '78%', background: 'var(--purple)' }}></div></div>
                  <div className="bar-label"><span>Strong (edutainment)</span><span>7.8/10</span></div>
                </div>
                <div style={{ marginTop: '10px' }}><span className="tag tag-green">Phase 1 Primary</span></div>
              </div>

              {/* LinkedIn */}
              <div className="pcard">
                <div className="pcard-name">LinkedIn</div>
                <div className="pcard-row"><span className="pcard-label">CPM (cold)</span><span className="pcard-val">$20–$65</span></div>
                <div className="pcard-row"><span className="pcard-label">CPM (retargeting)</span><span className="pcard-val">$8–$18</span></div>
                <div className="pcard-row"><span className="pcard-label">CPC (B2B)</span><span className="pcard-val">$6–$15</span></div>
                <div className="pcard-score">
                  <div className="pcard-score-label">Algorithm Velocity</div>
                  <div className="bar-track"><div className="bar-fill" style={{ width: '38%', background: 'var(--accent)' }}></div></div>
                  <div className="bar-label"><span>Slow, credential-gated</span><span>3.8/10</span></div>
                  <div className="pcard-score-label" style={{ marginTop: '8px' }}>Buying Intent</div>
                  <div className="bar-track"><div className="bar-fill" style={{ width: '96%', background: 'var(--gold)' }}></div></div>
                  <div className="bar-label"><span>Highest of all platforms</span><span style={{ color: 'var(--gold)' }}>9.6/10</span></div>
                  <div className="pcard-score-label" style={{ marginTop: '8px' }}>Geo-Arb Viability</div>
                  <div className="bar-track"><div className="bar-fill" style={{ width: '22%', background: 'var(--teal)' }}></div></div>
                  <div className="bar-label"><span>Poor (title targeting)</span><span>2.2/10</span></div>
                  <div className="pcard-score-label" style={{ marginTop: '8px' }}>B2B Content Fit</div>
                  <div className="bar-track"><div className="bar-fill" style={{ width: '92%', background: 'var(--purple)' }}></div></div>
                  <div className="bar-label"><span>Native B2B platform</span><span>9.2/10</span></div>
                </div>
                <div style={{ marginTop: '10px' }}><span className="tag tag-blue">Phase 1 Closer</span></div>
              </div>

              {/* YouTube */}
              <div className="pcard">
                <div className="pcard-name">YouTube</div>
                <div className="pcard-row"><span className="pcard-label">CPM (cold)</span><span className="pcard-val">$4–$12</span></div>
                <div className="pcard-row"><span className="pcard-label">CPM (geo-arb)</span><span className="pcard-val">$0.80–$2.50</span></div>
                <div className="pcard-row"><span className="pcard-label">CPC (B2B)</span><span className="pcard-val">$1.50–$4</span></div>
                <div className="pcard-score">
                  <div className="pcard-score-label">Algorithm Velocity</div>
                  <div className="bar-track"><div className="bar-fill" style={{ width: '52%', background: 'var(--accent)' }}></div></div>
                  <div className="bar-label"><span>3–6 months to gain</span><span>5.2/10</span></div>
                  <div className="pcard-score-label" style={{ marginTop: '8px' }}>Buying Intent</div>
                  <div className="bar-track"><div className="bar-fill" style={{ width: '74%', background: 'var(--gold)' }}></div></div>
                  <div className="bar-label"><span>Strong (search-intent)</span><span>7.4/10</span></div>
                  <div className="pcard-score-label" style={{ marginTop: '8px' }}>Geo-Arb Viability</div>
                  <div className="bar-track"><div className="bar-fill" style={{ width: '70%', background: 'var(--teal)' }}></div></div>
                  <div className="bar-label"><span>Good (AdSense offsets)</span><span>7.0/10</span></div>
                  <div className="pcard-score-label" style={{ marginTop: '8px' }}>B2B Content Fit</div>
                  <div className="bar-track"><div className="bar-fill" style={{ width: '72%', background: 'var(--purple)' }}></div></div>
                  <div className="bar-label"><span>Good (tutorial format)</span><span>7.2/10</span></div>
                </div>
                <div style={{ marginTop: '10px' }}><span className="tag tag-amber">Phase 2 Add-on</span></div>
              </div>

              {/* Instagram */}
              <div className="pcard">
                <div className="pcard-name">Instagram</div>
                <div className="pcard-row"><span className="pcard-label">CPM (cold)</span><span className="pcard-val">$6–$16</span></div>
                <div className="pcard-row"><span className="pcard-label">CPM (geo-arb)</span><span className="pcard-val">$1.50–$4</span></div>
                <div className="pcard-row"><span className="pcard-label">CPC (B2B)</span><span className="pcard-val">$1.20–$3.50</span></div>
                <div className="pcard-score">
                  <div className="pcard-score-label">Algorithm Velocity</div>
                  <div className="bar-track"><div className="bar-fill" style={{ width: '68%', background: 'var(--accent)' }}></div></div>
                  <div className="bar-label"><span>Reels can break fast</span><span>6.8/10</span></div>
                  <div className="pcard-score-label" style={{ marginTop: '8px' }}>Buying Intent</div>
                  <div className="bar-track"><div className="bar-fill" style={{ width: '42%', background: 'var(--gold)' }}></div></div>
                  <div className="bar-label"><span>Lifestyle / B2C bias</span><span>4.2/10</span></div>
                  <div className="pcard-score-label" style={{ marginTop: '8px' }}>Geo-Arb Viability</div>
                  <div className="bar-track"><div className="bar-fill" style={{ width: '72%', background: 'var(--teal)' }}></div></div>
                  <div className="bar-label"><span>Good via Meta</span><span>7.2/10</span></div>
                  <div className="pcard-score-label" style={{ marginTop: '8px' }}>B2B Content Fit</div>
                  <div className="bar-track"><div className="bar-fill" style={{ width: '45%', background: 'var(--purple)' }}></div></div>
                  <div className="bar-label"><span>Weak B2B signal</span><span>4.5/10</span></div>
                </div>
                <div style={{ marginTop: '10px' }}><span className="tag tag-red">Skip Phase 1</span></div>
              </div>

              {/* X/Twitter */}
              <div className="pcard">
                <div className="pcard-name">X (Twitter)</div>
                <div className="pcard-row"><span className="pcard-label">CPM (cold)</span><span className="pcard-val">$4–$10</span></div>
                <div className="pcard-row"><span className="pcard-label">CPM (geo-arb)</span><span className="pcard-val">$1–$3</span></div>
                <div className="pcard-row"><span className="pcard-label">CPC (B2B)</span><span className="pcard-val">$0.80–$2.50</span></div>
                <div className="pcard-score">
                  <div className="pcard-score-label">Algorithm Velocity</div>
                  <div className="bar-track"><div className="bar-fill" style={{ width: '75%', background: 'var(--accent)' }}></div></div>
                  <div className="bar-label"><span>Fast for viral threads</span><span>7.5/10</span></div>
                  <div className="pcard-score-label" style={{ marginTop: '8px' }}>Buying Intent</div>
                  <div className="bar-track"><div className="bar-fill" style={{ width: '48%', background: 'var(--gold)' }}></div></div>
                  <div className="bar-label"><span>Conversation-first</span><span>4.8/10</span></div>
                  <div className="pcard-score-label" style={{ marginTop: '8px' }}>Geo-Arb Viability</div>
                  <div className="bar-track"><div className="bar-fill" style={{ width: '62%', background: 'var(--teal)' }}></div></div>
                  <div className="bar-label"><span>Moderate</span><span>6.2/10</span></div>
                  <div className="pcard-score-label" style={{ marginTop: '8px' }}>B2B Content Fit</div>
                  <div className="bar-track"><div className="bar-fill" style={{ width: '65%', background: 'var(--purple)' }}></div></div>
                  <div className="bar-label"><span>Good (founder threads)</span><span>6.5/10</span></div>
                </div>
                <div style={{ marginTop: '10px' }}><span className="tag tag-amber">Phase 2 Supplement</span></div>
              </div>
            </div>
          </div>
        )}

        {/* TAB: ARBITRAGE */}
        {activeTab === 'arbitrage' && (
          <div className="tab-panel active">
            <div className="section-rule">
              <span className="section-rule-num">02</span>
              <span className="section-rule-title">The Math of Geographic Arbitrage</span>
              <span className="section-rule-line"></span>
            </div>
            <p style={{ fontSize: '12px', color: 'var(--ink3)', marginBottom: '16px' }}>Running initial ad spend through Tier-2/3 geos lowers your cost-per-pixel-event dramatically. Since your service is sold in USD/GBP/EUR, the revenue is Tier-1 while the acquisition cost is Tier-3. This spread is the arbitrage engine.</p>

            <div className="arb-explainer">
              <h4>The Core Arbitrage Formula</h4>
              <div className="arb-formula">
                Effective CPA = (Tier-3 Warm Cost × Conversion Lift Factor) + LinkedIn Retargeting CPL<br /><br />
                Example: ($200 TikTok warm → 1,000 engaged profiles)<br />
                + ($600 LinkedIn retargeting → 10 booked calls)<br />
                = $800 total spend → $2,000–$5,000 closed deal<br /><br />
                ROI on Ad Spend: 150% – 525% (before upsell)
              </div>
              <div className="arb-note">The "Conversion Lift Factor" accounts for the trust built through organic TikTok content — retargeted audiences who've seen 3+ of your videos convert at 4–6× the rate of cold LinkedIn audiences, justifying the blended model.</div>
            </div>

            <div className="section-rule">
              <span className="section-rule-num">02a</span>
              <span className="section-rule-title">Geo Arbitrage CPM Comparison</span>
              <span className="section-rule-line"></span>
            </div>

            <table className="arb-table">
              <thead><tr><th>Geography</th><th>TikTok CPM</th><th>LI CPM</th><th>YT CPM</th><th>Audience Quality</th><th>Strategy</th></tr></thead>
              <tbody>
                <tr><td className="hl">🇺🇸 USA (Tier 1)</td><td>$8–$20</td><td>$30–$65</td><td>$8–$18</td><td><span className="tag tag-green">Highest</span></td><td>Conversion + Close</td></tr>
                <tr><td className="hl">🇬🇧 UK / 🇦🇺 AU (Tier 1)</td><td>$6–$14</td><td>$20–$45</td><td>$6–$14</td><td><span className="tag tag-green">Very High</span></td><td>Conversion + Close</td></tr>
                <tr><td className="hl">🇮🇳 India (Tier 2)</td><td>$0.80–$2.20</td><td>$4–$10</td><td>$0.80–$2.50</td><td><span className="tag tag-amber">Medium</span></td><td>Pixel Warming</td></tr>
                <tr><td className="hl">🇧🇷 Brazil (Tier 2)</td><td>$1.20–$3</td><td>$5–$12</td><td>$1–$3</td><td><span className="tag tag-amber">Medium</span></td><td>Pixel Warming</td></tr>
                <tr><td className="hl">🇵🇭 Philippines (Tier 3)</td><td>$0.40–$1.20</td><td>$2–$6</td><td>$0.40–$1.20</td><td><span className="tag tag-amber">Medium-Low</span></td><td>Pixel Warming</td></tr>
                <tr><td className="hl">🇳🇬 Nigeria (Tier 3)</td><td>$0.30–$0.90</td><td>$1.50–$4</td><td>$0.30–$0.80</td><td><span className="tag tag-red">Low direct</span></td><td>Pixel Seed Only</td></tr>
              </tbody>
            </table>
          </div>
        )}

        {/* TAB: LOOP */}
        {activeTab === 'loop' && (
          <div className="tab-panel active">
            <div className="section-rule">
              <span className="section-rule-num">03</span>
              <span className="section-rule-title">The Infinity Loop — 3-Phase Model</span>
              <span className="section-rule-line"></span>
            </div>
            
            <div className="phase-block">
              <div className="phase-dot phase-dot-1"></div>
              <div className="phase-header">
                <span className="phase-num phase-num-1">Phase 01</span>
                <span className="phase-title">Organic Foundation + Manual Delivery</span>
                <span className="phase-range">Months 0–6</span>
              </div>
              <div className="phase-cols">
                <div>
                  <div className="phase-col-title">Content Engine</div>
                  <div className="phase-item"><div className="phase-bullet"></div><span>3–5 TikTok videos/week: "AI automation results," case studies</span></div>
                  <div className="phase-item"><div className="phase-bullet"></div><span>Cross-post Reels + LinkedIn (repurpose)</span></div>
                </div>
                <div>
                  <div className="phase-col-title">Ad Spend ($200–$800/mo)</div>
                  <div className="phase-item"><div className="phase-bullet"></div><span>$100–$200: TikTok Tier-3 pixel warming</span></div>
                  <div className="phase-item"><div className="phase-bullet"></div><span>$0–$300: LinkedIn retarget only</span></div>
                </div>
              </div>
            </div>

            <div className="phase-block">
              <div className="phase-dot phase-dot-2"></div>
              <div className="phase-header">
                <span className="phase-num phase-num-2">Phase 02</span>
                <span className="phase-title">Scaling Winning Creatives</span>
                <span className="phase-range">Months 6–12</span>
              </div>
              <div className="phase-cols">
                <div>
                  <div className="phase-col-title">Scale Content</div>
                  <div className="phase-item"><div className="phase-bullet"></div><span>Double down on high-converting hooks</span></div>
                </div>
                <div>
                  <div className="phase-col-title">Scale Spend ($2K–$10K/mo)</div>
                  <div className="phase-item"><div className="phase-bullet"></div><span>TikTok Spark Ads + YT Shorts scaling</span></div>
                </div>
              </div>
            </div>

            <div className="phase-block">
              <div className="phase-dot phase-dot-3"></div>
              <div className="phase-header">
                <span className="phase-num phase-num-3">Phase 03</span>
                <span className="phase-title">SaaS Transition</span>
                <span className="phase-range">Months 12–18</span>
              </div>
              <div className="phase-cols">
                <div>
                  <div className="phase-col-title">Productize</div>
                  <div className="phase-item"><div className="phase-bullet"></div><span>Self-serve SaaS dashboard launch</span></div>
                </div>
                <div>
                  <div className="phase-col-title">Revenue Stack</div>
                  <div className="phase-item"><div className="phase-bullet"></div><span>SaaS tiers + Premium DFY service</span></div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB: ECONOMICS */}
        {activeTab === 'economics' && (
          <div className="tab-panel active">
            <div className="section-rule">
              <span className="section-rule-num">04</span>
              <span className="section-rule-title">Unit Economics</span>
              <span className="section-rule-line"></span>
            </div>

            <div className="unit-econ">
              <div className="ue-card">
                <div className="ue-label">Cold Lead CPA</div>
                <div className="ue-val">$8–$25</div>
                <div className="ue-delta pos">↓ 94% vs cold LI</div>
              </div>
              <div className="ue-card">
                <div className="ue-label">Booked Call CPA</div>
                <div className="ue-val">$40–$120</div>
                <div className="ue-delta pos">↓ 85% vs LI Cold</div>
              </div>
              <div className="ue-card">
                <div className="ue-label">Average Retainer</div>
                <div className="ue-val">$2,500</div>
                <div className="ue-delta pos">LTV: $15,000+</div>
              </div>
            </div>
            
            <div className="offset-grid" style={{ marginTop: '20px' }}>
              <div className="offset-card">
                <div className="offset-platform">YT AdSense Offset</div>
                <div className="offset-amount">$300–$2,000/mo</div>
              </div>
              <div className="offset-card">
                <div className="offset-platform">Story Slot Sales</div>
                <div className="offset-amount">$500–$3,000/mo</div>
              </div>
            </div>
          </div>
        )}

        {/* TAB: ROADMAP */}
        {activeTab === 'roadmap' && (
          <div className="tab-panel active">
            <div className="section-rule">
              <span className="section-rule-num">05</span>
              <span className="section-rule-title">18-Month Roadmap</span>
              <span className="section-rule-line"></span>
            </div>

            <table className="roadmap-table">
              <thead>
                <tr>
                  <th style={{ width: '80px' }}>Month</th>
                  <th>Focus</th>
                  <th>Actions</th>
                  <th>Target</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="month-col">M1-M3</td><td>Foundations</td><td>Establish TikTok + LI presence, organic test</td><td>First Closes</td></tr>
                <tr><td className="month-col">M4-M6</td><td>MRR Lock</td><td>Spark Ads, pixel warming, VA hire</td><td>$20K MRR</td></tr>
                <tr><td className="month-col">M7-M12</td><td>Scale Content</td><td>Lookalikes, vertical domination</td><td>$50K+ MRR</td></tr>
                <tr><td className="month-col">M13-M18</td><td>SaaS Launch</td><td>SaaS transition, affiliate program</td><td>$100K+ MRR</td></tr>
              </tbody>
            </table>
          </div>
        )}

        <div className="footnote">
          Benchmarks sourced from 2024–2026 industry data. The Philippines base assumption reduces COGS by 60–80% vs US/UK equivalent operations.
        </div>
      </div>
    </div>
  );
}
