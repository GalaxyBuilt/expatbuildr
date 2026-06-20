import { useState } from "react";

const tweets = [
  {
    id: 1,
    author: "Alex Finn",
    handle: "@AlexFinn",
    likes: "2.2K",
    rts: "166",
    original: "Advice on curating your X feed for positive indie hacking and AI communities, emphasizing blocking negativity.",
    theme: "Community / Mindset",
    yours: "Your feed is your operating environment.\n\nIf it is full of people complaining about AI or dunking on indie hackers, that is the signal you are absorbing every morning.\n\nI unfollowed 200 accounts last month. Followed 50 builders instead.\n\nOutput quality went up immediately."
  },
  {
    id: 2,
    author: "Joe Reeve",
    handle: "@isnit0",
    likes: "4.5K",
    rts: "319",
    original: "Built an app for talking to statues in 2 hours, got museum collaboration interest. Classic build in public win.",
    theme: "Build In Public",
    yours: "Built a SaaS alert system in 3 hours last night.\n\nDid not announce it. Just shipped it inside @MultiSaaS.\n\nNext morning: 4 beta users asked if they could have it.\n\nThe best features are the ones you build for yourself first."
  },
  {
    id: 3,
    author: "Nikita Bier",
    handle: "@nikitabier",
    likes: "4.9K",
    rts: "220",
    original: "Build-in-public is better for established companies than startups for feedback and precision launches.",
    theme: "Build In Public",
    yours: "Unpopular opinion:\n\nBuilding in public before you have users is not marketing.\n\nIt is a journal nobody reads yet.\n\nThe founders who benefit most from building in public already have an audience watching.\n\nFirst get 10 paying users. Then build in public. The sequence matters."
  },
  {
    id: 4,
    author: "Ryan Carson",
    handle: "@ryancarson",
    likes: "3.4K",
    rts: "300",
    original: "Suggested documenting learnings in public instead of just building in public.",
    theme: "Build In Public",
    yours: "Stop tweeting what you built.\n\nTweet what you learned building it.\n\nNobody needs another screenshot of your Stripe dashboard.\n\nThey need to know:\n- What broke\n- What you assumed wrong\n- What you would do differently\n\nLearnings compound. Updates expire."
  },
  {
    id: 5,
    author: "Gordian",
    handle: "@0xgordian",
    likes: "3.9K",
    rts: "464",
    original: "Build in public gets you support from strangers over relying on tech friends.",
    theme: "Build In Public",
    yours: "The most useful feedback I got on @MultiSaaS did not come from my network.\n\nIt came from a founder in a different timezone who found a thread I posted at 2am.\n\nYour friends will tell you it looks great.\n\nStrangers will tell you what is actually broken.\n\nPost publicly. The internet finds you."
  },
  {
    id: 6,
    author: "GREG ISENBERG",
    handle: "@gregisenberg",
    likes: "3.1K",
    rts: "221",
    original: "Predicted SaaS market shifts with AI leading to layoffs, more indie founders, and smaller businesses.",
    theme: "AI / SaaS Future",
    yours: "The next wave of indie founders will not be hobbyists.\n\nThey will be ex-enterprise employees who realized:\n- 1 AI agent replaces a team of 5\n- A solo founder with the right stack can serve 500 customers\n- The moat is speed, not headcount\n\nThe solo SaaS era is just starting."
  },
  {
    id: 7,
    author: "inhuman resources",
    handle: "@inhumandept_vp",
    likes: "11.7K",
    rts: "504",
    original: "Satirical story of firing an engineer based on AI SaaS retention prediction.",
    theme: "AI Satire",
    yours: "The AI told me one of my SaaS products had a 73% chance of churning its top user.\n\nI ignored it.\n\nThey churned 11 days later.\n\nNow I listen to the AI first.\n\n@MultiSaaS flags these before I even open my laptop."
  },
  {
    id: 8,
    author: "KAY_ZUCK_X",
    handle: "@KAY_ZUCK_X",
    likes: "2.6K",
    rts: "415",
    original: "Warned against using generative AI as a decision-maker, viewing it as a typewriter for ideas.",
    theme: "AI Tools",
    yours: "AI is not your co-founder.\n\nIt is a very fast intern that never sleeps.\n\nIt executes. You decide.\n\nThe founders losing to AI right now are the ones who forgot that distinction.\n\nUse it to go 10x faster. Not to outsource the thinking."
  },
  {
    id: 9,
    author: "jack friks",
    handle: "@jackfriks",
    likes: "7.3K",
    rts: "498",
    original: "Went from no coding to $6k MRR across apps by just building projects.",
    theme: "Founder Journey",
    yours: "18 months ago I was managing 3 SaaS products in 5 spreadsheets.\n\nToday @MultiSaaS tracks all of them in one dashboard.\n\nI did not plan to build it. I built it because I was the customer.\n\nThe best SaaS products solve a pain you personally could not ignore anymore."
  },
  {
    id: 10,
    author: "Mansi",
    handle: "@MeMansi12",
    likes: "5.4K",
    rts: "171",
    original: "Humorous MRR progress showing $0 growth over 6 months.",
    theme: "Founder Humor",
    yours: "Honest MultiSaaS update:\n\nMonth 1: $0 MRR\nMonth 2: $0 MRR\nMonth 3: First beta user (free)\nMonth 4: Still free\nMonth 5: First $29\nMonth 6: Something is starting to move\n\nThe gap between launch and revenue is where most people quit.\n\nDo not quit in the gap."
  },
  {
    id: 11,
    author: "Nathan Barry",
    handle: "@nathanbarry",
    likes: "4.2K",
    rts: "642",
    original: "Method to scale SaaS from $1.5k to $100k MRR in 12 months.",
    theme: "SaaS Growth",
    yours: "The path from $0 to $10k MRR is not about marketing.\n\nIt is about finding 33 people with a problem sharp enough to pay $299/month to solve.\n\nThat is it. 33 people.\n\nMost founders are trying to find 10,000 before they find the 33.\n\nFind the 33 first. Everything else follows."
  },
  {
    id: 12,
    author: "Kristof",
    handle: "@CoastalFuturist",
    likes: "11.2K",
    rts: "406",
    original: "Joked about using Claude to design a $1M MRR SaaS startup.",
    theme: "AI Humor",
    yours: "Asked an AI to help me design the perfect SaaS.\n\nIt said: solve one painful problem, charge more than you think, talk to users daily.\n\nI already knew all of that.\n\nThe hard part was never information.\n\nIt was doing the boring thing consistently until it worked."
  },
  {
    id: 13,
    author: "Prajwal Tomar",
    handle: "@PrajwalTomar_",
    likes: "6.8K",
    rts: "574",
    original: "Guide to building production-ready MVPs with Cursor AI.",
    theme: "AI Dev Tools",
    yours: "The gap between idea and working product has collapsed.\n\nWith the right AI stack you can go from spec to deployed MVP in a weekend.\n\nWhat has not changed:\n- Finding people who will pay\n- Keeping them\n- Building what they actually need\n\nTools changed. Fundamentals did not."
  },
  {
    id: 14,
    author: "Ben Lang",
    handle: "@benln",
    likes: "5.2K",
    rts: "690",
    original: "YC on why vertical AI agents could be 10x bigger than SaaS.",
    theme: "AI / SaaS Future",
    yours: "Every SaaS dashboard you log into every day will be an AI agent in 3 years.\n\nNot a prettier UI.\n\nAn agent that already did the thing before you opened it.\n\nThat is exactly what I am building into @MultiSaaS.\n\nProactive software is the next SaaS category."
  },
  {
    id: 15,
    author: "GREG ISENBERG",
    handle: "@gregisenberg",
    likes: "5.9K",
    rts: "805",
    original: "How AI agents are dismantling the $1.3T SaaS model in phases.",
    theme: "AI / SaaS Future",
    yours: "SaaS is not dying.\n\nDumb SaaS is dying.\n\nThe products that make you log in, click around, and manually extract insights are getting replaced.\n\nThe ones that act, alert, and adapt without being asked will grow.\n\nThat is the only bet worth making right now."
  },
  {
    id: 16,
    author: "GREG ISENBERG",
    handle: "@gregisenberg",
    likes: "4.0K",
    rts: "492",
    original: "Future of work evolving to autonomous companies with AI leverage.",
    theme: "AI / Future of Work",
    yours: "The solo founder of 2026 will run what would have taken a 12-person team in 2022.\n\nNot because they are smarter.\n\nBecause:\n- AI handles ops\n- AI handles content\n- AI handles monitoring\n- AI handles first-pass support\n\nThe leverage is already here. Most people are not using it yet."
  },
  {
    id: 17,
    author: "Hasan Toor",
    handle: "@hasantoxr",
    likes: "4.0K",
    rts: "333",
    original: "Postman tool for building functional AI agents in minutes.",
    theme: "AI Tools",
    yours: "Built my first internal AI agent in an afternoon.\n\nIt watches @MultiSaaS metrics overnight and sends me a 3-line summary every morning.\n\nNo dashboard. No login. Just signal.\n\nThe best tools are the ones you forget are running."
  },
  {
    id: 18,
    author: "Param",
    handle: "@Param_eth",
    likes: "5.3K",
    rts: "454",
    original: "Clawdbot founder built 43 projects to succeed, emphasizing vibe coding.",
    theme: "Founder Journey",
    yours: "Most successful indie products are not the first idea.\n\nThey are the thing you built after you gave up on the thing you built after you gave up on the first thing.\n\nShip fast. Kill fast. Stay in the game long enough to find the one that works.\n\nVolume is the strategy."
  },
  {
    id: 19,
    author: "aditya",
    handle: "@adxtyahq",
    likes: "13.2K",
    rts: "503",
    original: "Praised simple app comparing delivery prices without AI or blockchain.",
    theme: "Product Simplicity",
    yours: "The most used feature in @MultiSaaS is not the AI.\n\nIt is the single screen that shows all your MRR in one place.\n\nNo AI. No agents. Just one number you do not have to hunt for.\n\nSolve the boring problem first. The smart stuff earns trust later."
  },
  {
    id: 20,
    author: "Tibo",
    handle: "@tibo_maker",
    likes: "4.7K",
    rts: "497",
    original: "Story of Ivan Kutskir making $1M+/year solo with 500k users.",
    theme: "Founder Story",
    yours: "There is a solo founder out there right now making more than most startup teams.\n\nNo investors. No press. No viral moment.\n\nJust a product that solved something real, distributed quietly, and compounded for 3 years.\n\nThat story does not make headlines. It should."
  },
  {
    id: 21,
    author: "Tibo",
    handle: "@tibo_maker",
    likes: "3.2K",
    rts: "343",
    original: "Indie hacker making $3M+/year building 70+ products while traveling.",
    theme: "Founder Lifestyle",
    yours: "The goal is not a big exit.\n\nThe goal is building something that generates real revenue while you are not actively working on it.\n\nThat is what @MultiSaaS is for me:\n\nA product I use every day that also pays for itself.\n\nThat is the indie hacker endgame."
  },
  {
    id: 22,
    author: "pc",
    handle: "@pcshipp",
    likes: "3.5K",
    rts: "339",
    original: "Everything in tech is declared dead except adapting fast.",
    theme: "Tech Trends",
    yours: "Things that were declared dead in the last 5 years:\n\n- SEO (still works)\n- Email marketing (still works)\n- Blogging (still works)\n- Bootstrapped SaaS (still works)\n\nThe pattern:\n\nEverything works if you do it with more consistency than the people who quit."
  },
  {
    id: 23,
    author: "Sam Altman",
    handle: "@sama",
    likes: "4.2K",
    rts: "546",
    original: "Adaptation to AI-integrated tools will happen quickly due to benefits.",
    theme: "AI Adoption",
    yours: "A year from now every founder will have an AI layer running underneath their SaaS.\n\nNot because it is trendy.\n\nBecause the ones who do not will simply cost more to operate and respond slower to problems.\n\nThe transition is not optional. Only the timing is."
  },
  {
    id: 24,
    author: "cts",
    handle: "@gf_256",
    likes: "12.1K",
    rts: "731",
    original: "Regretted switching to Notion from Google Docs, praising integrated tools.",
    theme: "Tool Fatigue",
    yours: "The best tool is the one already open.\n\nI switched @MultiSaaS to fewer screens on purpose.\n\nFounders do not need more dashboards. They need fewer places to look.\n\nEvery extra tool is a context switch you pay for with attention.\n\nConsolidate ruthlessly."
  },
  {
    id: 25,
    author: "Alex Finn",
    handle: "@AlexFinn",
    likes: "3.2K",
    rts: "249",
    original: "Claimed AI features can be replicated quickly, threatening SaaS moats.",
    theme: "AI / SaaS Future",
    yours: "Any AI feature you ship can be copied in 2 weeks.\n\nThat means the moat is not the feature.\n\nIt is:\n- The data you have collected\n- The workflow you are embedded in\n- The trust you built before the feature existed\n\nBuild the relationship. The features are just proof."
  }
];

function CopyBtn({ text }) {
  const [done, setDone] = useState(false);
  return (
    <button
      onClick={() => { navigator.clipboard.writeText(text); setDone(true); setTimeout(() => setDone(false), 1600); }}
      style={{
        fontSize: 11, padding: "4px 12px", borderRadius: 5,
        border: done ? "1px solid #16a34a" : "1px solid #334155",
        background: done ? "#14532d" : "#0f172a",
        color: done ? "#86efac" : "#64748b",
        cursor: "pointer", whiteSpace: "nowrap", fontFamily: "monospace"
      }}
    >
      {done ? "Copied" : "Copy"}
    </button>
  );
}

const THEMES = ["All", "Build In Public", "AI / SaaS Future", "Founder Journey", "AI Tools", "SaaS Growth", "Founder Humor", "AI Humor", "AI Dev Tools", "Product Simplicity", "Founder Story", "Tech Trends", "AI Adoption", "Tool Fatigue", "AI Satire", "Community / Mindset", "Founder Lifestyle", "AI / Future of Work"];

export default function App() {
  const [filter, setFilter] = useState("All");
  const [expanded, setExpanded] = useState(null);

  const visible = filter === "All" ? tweets : tweets.filter(t => t.theme === filter);

  return (
    <div style={{ minHeight: "100vh", background: "#f8f7f4", fontFamily: "Georgia, serif", color: "#1a1a1a" }}>

      <div style={{ background: "#1a1a1a", padding: "28px 24px 24px" }}>
        <div style={{ maxWidth: 780, margin: "0 auto" }}>
          <div style={{ fontSize: 11, color: "#52525b", letterSpacing: 4, textTransform: "uppercase", marginBottom: 8, fontFamily: "monospace" }}>@ExpatBuildr</div>
          <h1 style={{ fontSize: 26, fontWeight: 400, color: "#f8f7f4", margin: 0, lineHeight: 1.2 }}>Tweet Remix Library</h1>
          <p style={{ fontSize: 13, color: "#71717a", margin: "8px 0 0", fontFamily: "monospace" }}>25 viral tweets remixed into your voice</p>
        </div>
      </div>

      <div style={{ background: "#f1f0ec", borderBottom: "1px solid #e2e0db", padding: "12px 24px", overflowX: "auto" }}>
        <div style={{ maxWidth: 780, margin: "0 auto", display: "flex", gap: 6, minWidth: "max-content" }}>
          {["All", "Build In Public", "AI / SaaS Future", "Founder Journey", "SaaS Growth", "AI Tools", "Founder Humor"].map(t => (
            <button key={t} onClick={() => setFilter(t)} style={{
              fontSize: 11, padding: "5px 12px", borderRadius: 20, border: "1px solid",
              borderColor: filter === t ? "#1a1a1a" : "#d4d2cd",
              background: filter === t ? "#1a1a1a" : "transparent",
              color: filter === t ? "#f8f7f4" : "#52525b",
              cursor: "pointer", fontFamily: "monospace", whiteSpace: "nowrap"
            }}>{t}</button>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: 780, margin: "0 auto", padding: "24px" }}>
        <div style={{ fontSize: 12, color: "#a1a1aa", fontFamily: "monospace", marginBottom: 20 }}>
          Showing {visible.length} tweets
        </div>

        {visible.map((t) => (
          <div key={t.id} style={{ marginBottom: 16, border: "1px solid #e2e0db", borderRadius: 8, overflow: "hidden", background: "#fff" }}>

            <div style={{ padding: "14px 16px 10px", borderBottom: "1px solid #f1f0ec", display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12 }}>
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                  <span style={{ fontSize: 12, fontWeight: 700, fontFamily: "monospace", color: "#1a1a1a" }}>{t.author}</span>
                  <span style={{ fontSize: 11, color: "#a1a1aa", fontFamily: "monospace" }}>{t.handle}</span>
                  <span style={{ fontSize: 10, padding: "1px 7px", borderRadius: 3, background: "#f1f0ec", color: "#71717a", fontFamily: "monospace" }}>{t.theme}</span>
                </div>
                <div style={{ fontSize: 12, color: "#71717a", fontFamily: "monospace" }}>
                  {t.likes} likes &nbsp;|&nbsp; {t.rts} reposts
                </div>
              </div>
              <button
                onClick={() => setExpanded(expanded === t.id ? null : t.id)}
                style={{ fontSize: 11, padding: "4px 10px", borderRadius: 4, border: "1px solid #e2e0db", background: "transparent", color: "#71717a", cursor: "pointer", fontFamily: "monospace", whiteSpace: "nowrap" }}
              >
                {expanded === t.id ? "Hide original" : "Show original"}
              </button>
            </div>

            {expanded === t.id && (
              <div style={{ padding: "12px 16px", background: "#fafaf9", borderBottom: "1px solid #f1f0ec" }}>
                <div style={{ fontSize: 10, color: "#a1a1aa", textTransform: "uppercase", letterSpacing: 2, fontFamily: "monospace", marginBottom: 6 }}>Original concept</div>
                <div style={{ fontSize: 13, color: "#52525b", lineHeight: 1.6, fontStyle: "italic" }}>{t.original}</div>
              </div>
            )}

            <div style={{ padding: "14px 16px" }}>
              <div style={{ fontSize: 10, color: "#a1a1aa", textTransform: "uppercase", letterSpacing: 2, fontFamily: "monospace", marginBottom: 10 }}>Your version</div>
              <div style={{ fontSize: 14, color: "#1a1a1a", lineHeight: 1.7, whiteSpace: "pre-line", marginBottom: 12 }}>{t.yours}</div>
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <CopyBtn text={t.yours} />
              </div>
            </div>

          </div>
        ))}
      </div>

      <div style={{ padding: "20px 24px 40px", textAlign: "center" }}>
        <div style={{ fontSize: 11, color: "#a1a1aa", fontFamily: "monospace" }}>
          25 remixed tweets for @ExpatBuildr
        </div>
      </div>

    </div>
  );
}
