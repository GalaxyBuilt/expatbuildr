import { useState } from "react";

const TABS = ["Analysis", "Viral Tweets", "Long to Thread", "Founder Insights", "Growth Plan"];

const strengths = [
  "You write like a founder who lived it, not a content marketer who Googled it. That authenticity is rare.",
  "You use real product names, real repos, real numbers. Specificity is your biggest asset.",
  "Your natural voice is casual but credible. 'There had to be a better way' is more compelling than any polished copy.",
  "You already think in systems: flywheel, compounding, infrastructure. That framing resonates in this niche.",
  "You cite outliers like Pieter Levels and explain WHY they are outliers. That intellectual honesty builds trust."
];

const weaknesses = [
  "Tweets bury the insight. The first line needs to stop the scroll before anything else.",
  "You switch between polished and raw unpredictably. Pick a lane: raw builder wins right now.",
  "Some tweets end without a clear payoff. The reader needs a reason to retweet, not just read.",
  "You underuse numbers. '3 SaaS across 5 spreadsheets' is more viral than 'managing multiple things'.",
  "Long-form post has no visual structure for X. Bullet walls do not perform, reformat as punchy sequential points."
];

const viralIdeas = [
  { score: 98, source: "Long-form post", idea: "Pieter Levels is an outlier. Most $10k-$100k MRR bootstrappers leaned on SEO. Treating blog as core infrastructure." },
  { score: 95, source: "MultiSaaS tweet", idea: "Was managing 3 SaaS products across 5 spreadsheets. Built the tool I needed." },
  { score: 93, source: "Alerts tweet", idea: "AI watches your SaaS numbers while you sleep - churn, runway, MRR drops." },
  { score: 90, source: "PMF tweet", idea: "3 signals you have product-market fit: referrals, upset if removed, organic growth." },
  { score: 87, source: "Repo tweet", idea: "Open-source public repo plus private SaaS clone architecture for bootstrappers." },
  { score: 82, source: "Long-form post", idea: "Skip the blog and you are in the slower lane, dependent on social algos constantly." }
];

const tweetGroups = [
  {
    title: "From: SEO and Blog Infrastructure Post",
    accent: "#3b82f6",
    tweets: [
      {
        type: "Thread Hook",
        rt: "Very High",
        text: "Most bootstrapped founders make one mistake that costs them 12 months of growth.\n\nThey skip the blog at launch.\n\nHere is why the blog is your most important distribution asset and how to build it right:",
        note: "Use this to open a full thread breakdown"
      },
      {
        type: "Data Drop",
        rt: "Very High",
        text: "Most indie founders at $10k-$100k MRR share one thing:\n\nSEO infrastructure built early.\n\nNot virality. Not cold outreach. Not Product Hunt.\n\nContent that compounds while they sleep.\n\nThe blog is not optional. It is the moat.",
        note: "Works as a standalone tweet"
      },
      {
        type: "Contrarian",
        rt: "High",
        text: "Yes, @levelsio hit $200k/mo without a traditional blog.\n\nBut he had:\n- 10+ years of Twitter brand building\n- Perfect timing on viral products\n- Programmatic SEO with thousands of auto-generated pages\n\nYou are not Pieter. The blog is your cheat code.",
        note: "Naming big accounts gets reach - they often engage or RT"
      },
      {
        type: "Insight",
        rt: "High",
        text: "Bootstrapped founders treat their blog one of two ways:\n\nBad: Optional content fluff\nGood: Core distribution infrastructure\n\nThe ones at $50k+ MRR treat it like a product.\n\nShip it on day 1. SEO it properly. Let it compound.\n\nOrganic is the only channel that gets cheaper over time.",
        note: "Binary framing drives saves and shares"
      },
      {
        type: "Build In Public",
        rt: "High",
        text: "Building @EverRankApp because I kept solving the same problem:\n\nFounders with great products ranking nowhere.\n\nNot because their content was bad.\n\nBecause they had no SEO infrastructure.\n\nSo I am automating it. Autonomous AI SEO for SaaS founders.",
        note: "Product positioning tweet - drives early users"
      },
      {
        type: "Atomic Insight",
        rt: "High",
        text: "A blog post is the only piece of content that:\n\n- Keeps driving traffic in year 3\n- Builds domain authority passively\n- Educates your ICP while you sleep\n- Gets cheaper over time, not more expensive\n\nEvery other channel requires constant input.\n\nThe blog compounds.",
        note: "List format - highly saveable"
      }
    ]
  },
  {
    title: "From: MultiSaaS Origin Story",
    accent: "#10b981",
    tweets: [
      {
        type: "Origin Story",
        rt: "Very High",
        text: "I was managing 3 SaaS projects across 5 spreadsheets.\n\nRevenue in one tab.\nChurn in another.\nRunway buried somewhere in Google Drive.\n\nI kept asking: why is there no one dashboard for this?\n\nSo I built it.\n\nFree. Open source. Built in public.",
        note: "This is your best tweet. Simple, relatable, clear payoff."
      },
      {
        type: "Painful Truth",
        rt: "High",
        text: "Most solo founders running multiple SaaS products:\n\n- No unified metrics view\n- Churn discovered 30 days late\n- Runway calculated in a spreadsheet\n- Zero early warning system\n\nThat is where products die quietly.\n\nBuilding the solution: @MultiSaaS",
        note: "Problem-first framing - resonates before introducing product"
      },
      {
        type: "Architecture",
        rt: "High",
        text: "Here is how I structured @MultiSaaS as both open-source AND a SaaS business:\n\n/multisaas - public OSS, anyone can fork\n/multisaas-private - private SaaS clone with APIs and proprietary layer\n/multisaas-blog - Astro blog for distribution\n\nOne codebase. Two business models. Three moats.",
        note: "Technical founders bookmark and share architecture decisions"
      }
    ]
  },
  {
    title: "From: MultiSaaS Alerts Feature",
    accent: "#f59e0b",
    tweets: [
      {
        type: "Feature Drop",
        rt: "Very High",
        text: "Just shipped something I wanted for 2 years:\n\n@MultiSaaS now watches your SaaS numbers while you sleep.\n\nSet your thresholds:\n- Churn spikes above 5% - alert\n- Runway drops below 3 months - alert\n- MRR falls month-over-month - alert\n- Expense spike - alert\n\nFires to email, Slack, or any webhook.\n\nYour SaaS on autopilot.",
        note: "Feature tweets perform best when they name the emotional outcome: sleep"
      },
      {
        type: "Viral Insight",
        rt: "Very High",
        text: "Most founders find out their SaaS is dying 30 days after it started.\n\nBy then:\n- Churn has compounded\n- Runway math looks different\n- The cause is buried in data\n\nEarly warning systems are not optional at scale.\n\nBuilding one into @MultiSaaS.",
        note: "Problem framing without the feature - primes the audience first"
      },
      {
        type: "Contrarian",
        rt: "High",
        text: "Most AI tools wait for you to ask.\n\n@MultiSaaS AI does not.\n\nIt analyzes your SaaS metrics every morning and surfaces what matters.\n\nNo prompt. No dashboard check. Just signal in your inbox.\n\nProactive AI is the upgrade most tools have not shipped yet.",
        note: "Proactive vs reactive AI is a genuinely differentiated angle"
      }
    ]
  },
  {
    title: "From: PMF Signals Tweet",
    accent: "#8b5cf6",
    tweets: [
      {
        type: "Improved Version",
        rt: "Very High",
        original: "Here are 3 signals that prove you have got product market fit",
        text: "Forget the essays on product-market fit.\n\nHere are the only 3 signals that matter:\n\n1. Paying customers are referring others (at least 1 per week)\n2. Users would be genuinely upset if you shut it down\n3. You are growing without running a single campaign\n\nIf you have all 3: stop second-guessing. You have it.",
        note: "Your original was close. This version has a stronger hook and final punch."
      },
      {
        type: "Atomic",
        rt: "High",
        text: "PMF is not a feeling.\n\nIt is when your users start doing your marketing for you.\n\nOne referral per week from paying customers tells you more than any NPS survey.",
        note: "Short, quotable, saveable"
      }
    ]
  }
];

const threadTweets = [
  { n: 1, label: "Hook", text: "Most bootstrapped founders make one mistake that costs them 12 months of growth.\n\nThey skip the blog at launch.\n\nHere is why the blog is your most important distribution asset:" },
  { n: 2, label: "The case", text: "A blog on your own domain does 3 things paid ads cannot:\n\n- Compounds domain authority over time\n- Captures organic traffic you do not pay for every month\n- Builds trust with your ICP before they ever talk to you\n\nIt is the only channel that gets cheaper the longer you run it." },
  { n: 3, label: "The data", text: "From Indie Hackers and founder interviews:\n\nMost bootstrapped founders at $10k-$100k MRR share one trait.\n\nSEO infrastructure built early.\n\nNot Product Hunt. Not cold outreach. Not Twitter virality.\n\nContent that ranked. Quietly. Consistently." },
  { n: 4, label: "The outlier", text: "Yes - @levelsio hit $200k+/mo with almost no traditional blog.\n\nBut his growth came from:\n- 10+ years of Twitter brand equity\n- Programmatic SEO with thousands of auto-ranked pages\n- Perfect product timing\n\nHe is a genuine outlier. Study the tactics. Do not copy the path." },
  { n: 5, label: "The setup", text: "If you are starting from scratch, here is the minimum viable blog setup:\n\n- Blog on your product domain, not Substack\n- Target real keywords your ICP searches\n- Fast load, mobile-first, schema markup\n- Publish weekly with tutorials, breakdowns, case studies\n- Internal link everything" },
  { n: 6, label: "Product plug", text: "I built @EverRankApp because I kept watching great products rank nowhere.\n\nNot bad content. No SEO infrastructure.\n\nSo I am building autonomous AI SEO for SaaS founders.\n\nThe blog flywheel, automated." },
  { n: 7, label: "CTA", text: "If you are building a SaaS without a blog:\n\nShip it before your next feature.\n\nTreat it like core product, not content homework.\n\nThe organic flywheel takes 3-6 months to spin up.\n\nStart the clock today.\n\nFollow @ExpatBuildr for more systems for bootstrapped founders." }
];

const shortTweets = [
  "The blog is the only marketing channel that compounds. Every other channel flatlines the moment you stop paying attention.",
  "Organic SEO is the only acquisition cost that goes DOWN over time. Everything else gets more expensive. Build the blog.",
  "Most founders treat their blog like homework. The ones at $100k MRR treat it like their most important product feature.",
  "Skip the blog and you are constantly dependent on algorithm luck, community timing, referral randomness. Start the flywheel.",
  "A single blog post can drive qualified traffic for 5 years. A Twitter thread: 48 hours. Build both. Prioritize the one that lasts."
];

const founderInsights = [
  {
    raw: "Managing 3 SaaS projects across 5 spreadsheets",
    insight: "The spreadsheet is a signal. Founders do not reach for Excel because they love it. They reach for it because nothing better exists. That gap is always a product opportunity.",
    tweet: "Every spreadsheet a founder uses is a SaaS product waiting to be built.\n\nI had 5 of them before I built @MultiSaaS.\n\nThe best indie products start with a founder saying: I cannot believe I am using Excel for this."
  },
  {
    raw: "Blog as core infrastructure, not optional content fluff",
    insight: "Repositioning a commodity behavior as infrastructure is a powerful mental model shift. This framing is rare and shareable.",
    tweet: "Stop calling it a blog.\n\nCall it your distribution infrastructure.\n\nOne reframe. Completely different priorities."
  },
  {
    raw: "Pieter Levels is an outlier - do not build your strategy around him",
    insight: "Naming the most-cited exception and explaining WHY it is an exception is intellectual leadership. This builds enormous credibility in this niche.",
    tweet: "Everyone cites @levelsio as proof you do not need SEO or a blog.\n\nWhat they skip:\n- He has 10 years of Twitter brand equity\n- His SEO is programmatic, auto-generated at scale\n- His timing on each product was nearly perfect\n\nStudy his tactics. Do not copy his path. You are not him yet."
  },
  {
    raw: "Open-source public repo plus private SaaS money layer",
    insight: "The OSS plus commercial fork model is a growth strategy most founders do not document. The architecture itself is a viral insight for technical founders.",
    tweet: "My @MultiSaaS architecture:\n\nPublic repo: free, forkable, builds trust\nPrivate repo: APIs, proprietary layer, revenue\nBlog repo: Astro, open source, distribution\n\nThree repos. Three moats. One product."
  },
  {
    raw: "AI auto-generates insights daily without you asking",
    insight: "Proactive AI that acts without being prompted is a massive differentiator. Most AI tools wait. This angle is underleveraged in your niche.",
    tweet: "Most AI tools wait for you to ask.\n\n@MultiSaaS does not.\n\nIt analyzes your metrics every morning and surfaces what matters.\n\nNo prompt. No dashboard check. Just signal in your inbox.\n\nProactive AI is the upgrade most tools have not shipped yet."
  }
];

const topStyles = [
  { rank: 1, style: "Origin Story", why: "Your 3 SaaS across 5 spreadsheets narrative is gold. Founders share origin stories because they see themselves.", cadence: "1-2x per month" },
  { rank: 2, style: "Contrarian + Outlier Naming", why: "Your Pieter Levels breakdown is exactly this format. Naming a widely-cited exception and explaining why they are exceptional builds instant credibility.", cadence: "Weekly" },
  { rank: 3, style: "System or Architecture Reveal", why: "Your OSS plus private SaaS architecture tweet is underleveraged. Technical founders obsessively share this content.", cadence: "After every major build decision" },
  { rank: 4, style: "Before and After Metric Drop", why: "You have real data: spreadsheets to one dashboard, 0 to X users. Numbers travel faster than any take.", cadence: "Weekly" },
  { rank: 5, style: "Proactive AI Insight", why: "The AI that acts without being asked angle is genuinely differentiated. Nobody else in your niche is saying this clearly.", cadence: "When shipping AI features" }
];

const themes = [
  { theme: "SaaS ops infrastructure", why: "Churn, runway, MRR tracking. Founders viscerally relate to ops pain. Every post on this lands." },
  { theme: "Bootstrapped vs VC growth strategies", why: "Your niche is self-funded founders. Anything that helps them compete without capital gets shared." },
  { theme: "Open-source plus commercial hybrid models", why: "This architecture is poorly documented. You can own this conversation." },
  { theme: "AI that runs in the background (not chatbot AI)", why: "Proactive AI systems are the next wave. You are building it. Document it." },
  { theme: "SEO as compounding infrastructure", why: "You have two products in this space. Your content here directly converts to early users." }
];

function Badge({ text, color }) {
  return (
    <span style={{ fontSize: 10, fontWeight: 700, padding: "2px 8px", borderRadius: 4, background: color + "22", color: color, textTransform: "uppercase", letterSpacing: 1, border: "1px solid " + color + "44" }}>
      {text}
    </span>
  );
}

function CopyBtn({ text }) {
  const [done, setDone] = useState(false);
  return (
    <button
      onClick={() => { navigator.clipboard.writeText(text); setDone(true); setTimeout(() => setDone(false), 1500); }}
      style={{ fontSize: 11, padding: "3px 10px", borderRadius: 5, border: "1px solid #374151", background: done ? "#14532d" : "#1f2937", color: done ? "#86efac" : "#9ca3af", cursor: "pointer" }}
    >
      {done ? "Copied" : "Copy"}
    </button>
  );
}

function TweetCard({ tweet }) {
  const rtColor = tweet.rt === "Very High" ? "#34d399" : "#60a5fa";
  return (
    <div style={{ background: "#0f0f0f", border: "1px solid #1f2937", borderRadius: 10, padding: 16, marginBottom: 10 }}>
      <div style={{ display: "flex", gap: 8, marginBottom: 10, flexWrap: "wrap", alignItems: "center" }}>
        <Badge text={tweet.type} color="#a78bfa" />
        <Badge text={"RT: " + tweet.rt} color={rtColor} />
        {tweet.original && <Badge text="Improved" color="#fbbf24" />}
      </div>
      {tweet.original && (
        <div style={{ marginBottom: 10, padding: "8px 12px", background: "#1a0a0a", border: "1px solid #3f1515", borderRadius: 6 }}>
          <div style={{ fontSize: 10, color: "#ef4444", marginBottom: 4, textTransform: "uppercase" }}>Original</div>
          <div style={{ fontSize: 12, color: "#9ca3af", fontStyle: "italic" }}>{tweet.original}</div>
        </div>
      )}
      <div style={{ background: "#161616", border: "1px solid #262626", borderRadius: 8, padding: "12px 14px", marginBottom: 8, whiteSpace: "pre-line", fontSize: 13, color: "#f3f4f6", lineHeight: 1.65 }}>
        {tweet.text}
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 8 }}>
        <div style={{ fontSize: 11, color: "#6b7280" }}>{tweet.note}</div>
        <CopyBtn text={tweet.text} />
      </div>
    </div>
  );
}

export default function App() {
  const [tab, setTab] = useState(0);

  return (
    <div style={{ minHeight: "100vh", background: "#080808", color: "#f3f4f6", fontFamily: "monospace" }}>
      <div style={{ borderBottom: "1px solid #1f2937", padding: "20px 24px" }}>
        <div style={{ maxWidth: 820, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <div style={{ fontSize: 10, color: "#4b5563", letterSpacing: 3, textTransform: "uppercase", marginBottom: 4 }}>Content Analysis</div>
            <div style={{ fontSize: 18, fontWeight: 900, color: "#fff" }}>@ExpatBuildr Tweet Lab</div>
          </div>
          <div style={{ textAlign: "right" }}>
            <div style={{ fontSize: 10, color: "#4b5563" }}>Target</div>
            <div style={{ fontSize: 15, fontWeight: 700, color: "#34d399" }}>100-200 RTs</div>
          </div>
        </div>
      </div>

      <div style={{ borderBottom: "1px solid #1f2937", padding: "0 24px", overflowX: "auto" }}>
        <div style={{ maxWidth: 820, margin: "0 auto", display: "flex", gap: 2, paddingTop: 4, minWidth: "max-content" }}>
          {TABS.map((t, i) => (
            <button key={i} onClick={() => setTab(i)} style={{ padding: "8px 14px", fontSize: 12, borderRadius: "6px 6px 0 0", border: "none", cursor: "pointer", whiteSpace: "nowrap", fontFamily: "monospace", fontWeight: tab === i ? 700 : 400, background: tab === i ? "#fff" : "transparent", color: tab === i ? "#080808" : "#6b7280" }}>
              {t}
            </button>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: 820, margin: "0 auto", padding: "32px 24px" }}>

        {tab === 0 && (
          <div>
            <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 20 }}>Writing Style Analysis</div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 32 }}>
              <div style={{ background: "#0a160f", border: "1px solid #14532d", borderRadius: 10, padding: 16 }}>
                <div style={{ fontSize: 11, color: "#34d399", textTransform: "uppercase", letterSpacing: 2, marginBottom: 12 }}>Strengths</div>
                {strengths.map((s, i) => (
                  <div key={i} style={{ display: "flex", gap: 8, marginBottom: 10, fontSize: 12, color: "#d1d5db", lineHeight: 1.6 }}>
                    <span style={{ color: "#34d399" }}>+</span><span>{s}</span>
                  </div>
                ))}
              </div>
              <div style={{ background: "#150a0a", border: "1px solid #7f1d1d", borderRadius: 10, padding: 16 }}>
                <div style={{ fontSize: 11, color: "#f87171", textTransform: "uppercase", letterSpacing: 2, marginBottom: 12 }}>Fix These</div>
                {weaknesses.map((s, i) => (
                  <div key={i} style={{ display: "flex", gap: 8, marginBottom: 10, fontSize: 12, color: "#d1d5db", lineHeight: 1.6 }}>
                    <span style={{ color: "#f87171" }}>!</span><span>{s}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 14 }}>Virality Scoring</div>
            <div style={{ display: "grid", gap: 8 }}>
              {viralIdeas.map((v, i) => (
                <div key={i} style={{ background: "#0f0f0f", border: "1px solid #1f2937", borderRadius: 10, padding: 14, display: "flex", alignItems: "center", gap: 16 }}>
                  <div style={{ minWidth: 44, textAlign: "center" }}>
                    <div style={{ fontSize: 20, fontWeight: 900, color: v.score >= 95 ? "#34d399" : v.score >= 90 ? "#fbbf24" : "#60a5fa" }}>{v.score}</div>
                    <div style={{ fontSize: 9, color: "#4b5563", textTransform: "uppercase" }}>score</div>
                  </div>
                  <div>
                    <div style={{ fontSize: 10, color: "#4b5563", marginBottom: 3, textTransform: "uppercase" }}>{v.source}</div>
                    <div style={{ fontSize: 13, color: "#e5e7eb", lineHeight: 1.5 }}>{v.idea}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === 1 && (
          <div>
            <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 4 }}>Viral Tweets From Your Content</div>
            <div style={{ fontSize: 13, color: "#6b7280", marginBottom: 24 }}>Every tweet derived from something you actually wrote or built.</div>
            {tweetGroups.map((group, gi) => (
              <div key={gi} style={{ marginBottom: 32 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14, paddingBottom: 10, borderBottom: "1px solid #1f2937" }}>
                  <div style={{ width: 3, height: 18, background: group.accent, borderRadius: 2 }} />
                  <div style={{ fontSize: 12, color: "#9ca3af" }}>{group.title}</div>
                </div>
                {group.tweets.map((t, ti) => (
                  <TweetCard key={ti} tweet={t} />
                ))}
              </div>
            ))}
          </div>
        )}

        {tab === 2 && (
          <div>
            <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 4 }}>Long Article to Viral Content</div>
            <div style={{ fontSize: 13, color: "#6b7280", marginBottom: 24 }}>Source: your SEO and blog infrastructure post.</div>

            <div style={{ marginBottom: 28 }}>
              <div style={{ fontSize: 11, color: "#fbbf24", textTransform: "uppercase", letterSpacing: 2, marginBottom: 10 }}>1. Viral Single Tweet</div>
              <div style={{ background: "#0f0f0f", border: "1px solid #1f2937", borderRadius: 10, padding: 16 }}>
                <div style={{ background: "#161616", border: "1px solid #262626", borderRadius: 8, padding: "12px 14px", whiteSpace: "pre-line", fontSize: 13, color: "#f3f4f6", lineHeight: 1.65, marginBottom: 10 }}>
                  {"The blog is not content marketing.\n\nFor bootstrapped SaaS founders, it is infrastructure.\n\nDomain authority. Organic acquisition. Evergreen leads.\n\nMost founders launch with a thin landing page and pray for virality.\n\nThe ones at $50k MRR launched with a blog on day 1."}
                </div>
                <CopyBtn text={"The blog is not content marketing.\n\nFor bootstrapped SaaS founders, it is infrastructure.\n\nDomain authority. Organic acquisition. Evergreen leads.\n\nMost founders launch with a thin landing page and pray for virality.\n\nThe ones at $50k MRR launched with a blog on day 1."} />
              </div>
            </div>

            <div style={{ marginBottom: 28 }}>
              <div style={{ fontSize: 11, color: "#34d399", textTransform: "uppercase", letterSpacing: 2, marginBottom: 10 }}>2. Seven-Tweet Thread</div>
              {threadTweets.map((t) => (
                <div key={t.n} style={{ background: "#0f0f0f", border: "1px solid #1f2937", borderRadius: 10, padding: 14, marginBottom: 8, display: "flex", gap: 14 }}>
                  <div style={{ minWidth: 30, textAlign: "center" }}>
                    <div style={{ fontSize: 18, fontWeight: 900, color: "#374151" }}>{t.n}</div>
                    <div style={{ fontSize: 9, color: "#4b5563", textTransform: "uppercase" }}>{t.label}</div>
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 13, color: "#e5e7eb", whiteSpace: "pre-line", lineHeight: 1.6, marginBottom: 8 }}>{t.text}</div>
                    <CopyBtn text={t.text} />
                  </div>
                </div>
              ))}
            </div>

            <div>
              <div style={{ fontSize: 11, color: "#a78bfa", textTransform: "uppercase", letterSpacing: 2, marginBottom: 10 }}>3. Five Atomic Tweets</div>
              {shortTweets.map((t, i) => (
                <div key={i} style={{ background: "#0f0f0f", border: "1px solid #1f2937", borderRadius: 10, padding: 14, marginBottom: 8, display: "flex", alignItems: "center", gap: 14 }}>
                  <div style={{ fontSize: 18, fontWeight: 900, color: "#374151", minWidth: 24 }}>{i + 1}</div>
                  <div style={{ flex: 1, fontSize: 13, color: "#e5e7eb", lineHeight: 1.6 }}>{t}</div>
                  <CopyBtn text={t} />
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === 3 && (
          <div>
            <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 4 }}>Founder Insights From Your Writing</div>
            <div style={{ fontSize: 13, color: "#6b7280", marginBottom: 24 }}>Raw ideas distilled into tweetable insights.</div>
            {founderInsights.map((f, i) => (
              <div key={i} style={{ background: "#0f0f0f", border: "1px solid #1f2937", borderRadius: 12, padding: 18, marginBottom: 14 }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 14 }}>
                  <div>
                    <div style={{ fontSize: 10, color: "#4b5563", textTransform: "uppercase", letterSpacing: 1, marginBottom: 6 }}>Raw from your content</div>
                    <div style={{ fontSize: 12, color: "#9ca3af", fontStyle: "italic", lineHeight: 1.5, background: "#161616", borderRadius: 6, padding: "8px 10px" }}>{f.raw}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: 10, color: "#fbbf24", textTransform: "uppercase", letterSpacing: 1, marginBottom: 6 }}>Underlying insight</div>
                    <div style={{ fontSize: 12, color: "#d1d5db", lineHeight: 1.6 }}>{f.insight}</div>
                  </div>
                </div>
                <div style={{ fontSize: 10, color: "#34d399", textTransform: "uppercase", letterSpacing: 1, marginBottom: 8 }}>Tweetable version</div>
                <div style={{ background: "#0a160f", border: "1px solid #14532d44", borderRadius: 8, padding: "12px 14px", fontSize: 13, color: "#f3f4f6", whiteSpace: "pre-line", lineHeight: 1.65, marginBottom: 8 }}>{f.tweet}</div>
                <CopyBtn text={f.tweet} />
              </div>
            ))}
          </div>
        )}

        {tab === 4 && (
          <div>
            <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 24 }}>Growth Plan for @ExpatBuildr</div>

            <div style={{ marginBottom: 28 }}>
              <div style={{ fontSize: 11, color: "#fbbf24", textTransform: "uppercase", letterSpacing: 2, marginBottom: 12 }}>Top 5 Tweet Styles for Your Account</div>
              {topStyles.map((s) => (
                <div key={s.rank} style={{ background: "#0f0f0f", border: "1px solid #1f2937", borderRadius: 10, padding: 14, marginBottom: 8, display: "flex", gap: 14 }}>
                  <div style={{ fontSize: 22, fontWeight: 900, color: "#1f2937", minWidth: 28 }}>{"#" + s.rank}</div>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 700, color: "#fff", marginBottom: 4 }}>{s.style}</div>
                    <div style={{ fontSize: 12, color: "#9ca3af", lineHeight: 1.6, marginBottom: 6 }}>{s.why}</div>
                    <span style={{ fontSize: 10, padding: "2px 8px", borderRadius: 4, background: "#1f2937", color: "#6b7280" }}>{"Cadence: " + s.cadence}</span>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginBottom: 28 }}>
              <div style={{ fontSize: 11, color: "#34d399", textTransform: "uppercase", letterSpacing: 2, marginBottom: 12 }}>Best Content Themes for Attracting Founders</div>
              {themes.map((t, i) => (
                <div key={i} style={{ background: "#0f0f0f", border: "1px solid #1f2937", borderRadius: 10, padding: 14, marginBottom: 8, display: "flex", gap: 12 }}>
                  <div style={{ width: 3, background: "#34d399", borderRadius: 2, flexShrink: 0 }} />
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 700, color: "#fff", marginBottom: 4 }}>{t.theme}</div>
                    <div style={{ fontSize: 12, color: "#9ca3af", lineHeight: 1.5 }}>{t.why}</div>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ background: "#0a0f1a", border: "1px solid #1e3a8a", borderRadius: 12, padding: 20 }}>
              <div style={{ fontSize: 11, color: "#60a5fa", textTransform: "uppercase", letterSpacing: 2, marginBottom: 14 }}>Posting Frequency</div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10, marginBottom: 14 }}>
                {[["Threads", "3x per week"], ["Single Tweets", "1-2 per day"], ["Thread Ratio", "40 / 60"]].map(([label, val]) => (
                  <div key={label} style={{ background: "#060a14", border: "1px solid #1e3a5f", borderRadius: 8, padding: 12, textAlign: "center" }}>
                    <div style={{ fontSize: 14, fontWeight: 700, color: "#93c5fd" }}>{val}</div>
                    <div style={{ fontSize: 10, color: "#4b5563", marginTop: 4, textTransform: "uppercase" }}>{label}</div>
                  </div>
                ))}
              </div>
              <div style={{ fontSize: 13, color: "#9ca3af", lineHeight: 1.7 }}>
                Threads build authority and followers. Single tweets build reach and impressions. Thread on Mon, Wed, Fri. Single tweets daily. Reply 15x per day to accounts in your niche - this is the highest-leverage activity at under 500 followers.
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
