import { useState } from "react";

const data = {
  viralFramework: {
    title: "Viral Tweet Framework for AI/SaaS Builders",
    description: "Every high-performing tweet in this niche hits one of five emotional triggers:",
    pillars: [
      {
        name: "Painful Truth",
        icon: "⚡",
        formula: "State something founders feel but never say out loud",
        example: "Most SaaS founders spend 60% of their time in spreadsheets, not building. That's the problem I'm fixing with MultiSaaS.",
        why: "Resonates immediately. Founders share because it validates their frustration."
      },
      {
        name: "Contrarian Take",
        icon: "🔥",
        formula: "Challenge a widely held belief in the indie hacker space",
        example: "Stop chasing MRR. Track net revenue retention first. MRR is vanity. NRR tells you if your product actually works.",
        why: "Disagreement drives replies. Replies drive reach. Reach drives follows."
      },
      {
        name: "Behind The Build",
        icon: "🛠",
        formula: "Show the messy middle &mdash; not polished launches",
        example: "Day 34 building MultiSaaS. Stripe webhook just broke in prod. Here's the exact error and how I fixed it 🧵",
        why: "Authenticity builds trust. Trust converts to early users."
      },
      {
        name: "Data Drop",
        icon: "📊",
        formula: "Share a specific number most people haven't seen",
        example: "Analyzed 50 SaaS products under $1k MRR. 78% had no churn tracking at all. No wonder they die quietly.",
        why: "Specificity = credibility. Credibility = retweets from bigger accounts."
      },
      {
        name: "System Reveal",
        icon: "🤖",
        formula: "Show your exact workflow, stack, or AI setup",
        example: "My AI agent monitors all 3 of my SaaS products overnight. Here's the exact prompt + architecture that runs it:",
        why: "Technical founders crave systems. Sharing yours positions you as the expert."
      }
    ]
  },
  templates: [
    {
      id: 1,
      type: "Painful Truth",
      tweet: "Nobody tells you this about building multiple SaaS products:\n\nYour biggest bottleneck isn't code.\nIt's context switching between dashboards.\n\nStripe. Analytics. Support. Metrics.\n\nI got tired of it. So I built the one dashboard that shows everything.",
      rtPotential: "High",
      hook: "Nobody tells you this about..."
    },
    {
      id: 2,
      type: "Data Drop",
      tweet: "I tracked my time for 30 days as a solo SaaS founder:\n\n&rarr; 22% writing code\n&rarr; 31% in spreadsheets\n&rarr; 18% context switching\n&rarr; 14% on Stripe/PayPal dashboards\n&rarr; 15% actual strategy\n\nI automated the middle 63%. Here's how:",
      rtPotential: "Very High",
      hook: "I tracked my time for 30 days..."
    },
    {
      id: 3,
      type: "Contrarian",
      tweet: "Hot take: SEO isn't dead.\n\nSEO done by humans is dead.\n\nAI-generated slop SEO is dead.\n\nSEO infrastructure that compounds automatically?\n\nThat's just getting started. Building EverRank because I believe this.",
      rtPotential: "High",
      hook: "Hot take:"
    },
    {
      id: 4,
      type: "System Reveal",
      tweet: "My AI ops setup for managing 3 SaaS products:\n\n&rarr; MultiSaaS pulls metrics from Stripe + PayPal\n&rarr; Claude flags anomalies nightly\n&rarr; Alerts hit my phone before I wake up\n&rarr; I spend 20 min/day on ops\n\nFull breakdown of the architecture 🧵",
      rtPotential: "Very High",
      hook: "My AI ops setup for..."
    },
    {
      id: 5,
      type: "Behind The Build",
      tweet: "Shipped a feature I'm genuinely proud of today.\n\nMultiSaaS now detects churn risk 14 days before it happens using payment pattern analysis.\n\nNot magic. Just three signals most founders ignore.\n\nHere's exactly what it watches for:",
      rtPotential: "High",
      hook: "Shipped a feature I'm genuinely proud of..."
    },
    {
      id: 6,
      type: "Painful Truth",
      tweet: "The real reason most indie SaaS products fail:\n\nNot bad code.\nNot bad marketing.\n\nNo one tracking the right metrics at the right time.\n\nBy the time you see churn, you're already 30 days behind.",
      rtPotential: "High",
      hook: "The real reason most..."
    },
    {
      id: 7,
      type: "Build In Public",
      tweet: "MultiSaaS update:\n\nWeek 1: 0 users\nWeek 4: 12 beta users\nWeek 8: First $0 &rarr; $297 MRR\n\nWhat actually worked:\n&rarr; Posting daily on X\n&rarr; Cold DM to 5 founders/day\n&rarr; Being brutally honest about bugs\n\nNobody tells you the DMs matter more than the tweets.",
      rtPotential: "Very High",
      hook: "Update: [numbers]"
    },
    {
      id: 8,
      type: "Data Drop",
      tweet: "Looked at 100 SaaS landing pages in the indie hacker space.\n\n89 of them:\n&rarr; No clear pricing above the fold\n&rarr; No social proof in first 3 seconds\n&rarr; Benefit copy that sounds like everyone else\n\nThe 11 that convert? They do the opposite of all three.",
      rtPotential: "High",
      hook: "Looked at [N] [things]..."
    },
    {
      id: 9,
      type: "System Reveal",
      tweet: "BlogBanana's SEO pipeline in plain english:\n\n1. Keyword cluster identified by AI\n2. Content brief generated in 90 seconds\n3. Draft written, structured for E-E-A-T\n4. Internal links auto-placed\n5. Published &rarr; indexed &rarr; tracked\n\nZero human bottlenecks. This is what self-distributing SaaS looks like.",
      rtPotential: "High",
      hook: "[Product] pipeline in plain english:"
    },
    {
      id: 10,
      type: "Contrarian",
      tweet: "Unpopular opinion:\n\nBuilding in public without shipping is just performance.\n\nThe founders gaining real traction are sharing:\n- Specific numbers\n- Actual failures\n- The code / systems behind the win\n\nNot vibes. Not motivation. Signal.",
      rtPotential: "Very High",
      hook: "Unpopular opinion:"
    }
  ],
  threadFormats: [
    {
      name: "The Autopsy Thread",
      structure: "Tweet 1: Something you built failed. Here's what killed it. [HOOK]\nTweets 2&ndash;6: One honest reason per tweet\nTweet 7: What you rebuilt / changed\nTweet 8: CTA &rarr; follow for updates on the new version",
      when: "After a setback or pivot",
      rtMechanic: "Vulnerability + specificity = massive reshares from founders who've been there"
    },
    {
      name: "The System Breakdown",
      structure: "Tweet 1: I built a system that does [outcome]. Here's the exact architecture 🧵\nTweets 2&ndash;7: One component per tweet (tool/prompt/logic)\nTweet 8: The result (metric or outcome)\nTweet 9: Link to tool or waitlist",
      when: "After shipping a new AI workflow",
      rtMechanic: "Technical founders obsessively share this format &mdash; it's free education"
    },
    {
      name: "The Metric Milestone",
      structure: "Tweet 1: [Product] just hit [milestone]. Here's what the last 60 days looked like:\nTweets 2&ndash;5: Weekly snapshot with one key learning per week\nTweet 6: The single biggest unlock\nTweet 7: What's next + how to follow along",
      when: "Any MRR, user, or traffic milestone",
      rtMechanic: "Numbers get saved. Saved posts drive algorithmic reach."
    },
    {
      name: "The Contrarian Framework",
      structure: "Tweet 1: Everyone says [common belief]. They're wrong. Here's why:\nTweets 2&ndash;5: Break down the flawed logic\nTweet 6: Your alternative framework\nTweet 7: Proof from your own products",
      when: "When a bad take goes viral in your niche",
      rtMechanic: "Replies from disagreement + shares from people who agree = high engagement velocity"
    }
  ],
  dailyStructure: {
    posts: [
      { time: "7&ndash;8am", type: "Original tweet", format: "Insight / data drop / painful truth", effort: "High" },
      { time: "11am&ndash;12pm", type: "Replies (10&ndash;15)", format: "Add value to top accounts in niche", effort: "Medium" },
      { time: "2&ndash;3pm", type: "Build-in-public update", format: "Short progress tweet or screenshot", effort: "Low" },
      { time: "5&ndash;6pm", type: "Thread (3x per week)", format: "System reveal or metric milestone", effort: "High" },
      { time: "8&ndash;9pm", type: "Replies (5&ndash;10)", format: "Engage with replies on your own posts", effort: "Low" }
    ],
    weekly: "3 threads / 5&ndash;7 standalone tweets / 50&ndash;100 strategic replies"
  },
  replyStrategy: {
    targets: [
      "@levelsio", "@pieterlevels", "@marc_louvion", "@tibo_maker", "@dagorenouf", "@stephsmithio", "@csallen", "@jdnoc"
    ],
    rules: [
      "Never reply with just agreement &mdash; add a data point, a counter-angle, or your own experience",
      "Reply within the first 30 minutes of a post going live (early replies get pinned visibility)",
      "Use the formula: [Agree/Disagree] + [Your specific angle] + [1-line bridge to your product or experience]",
      "Aim for 10&ndash;15 quality replies per day minimum in the first 3 months",
      "Avoid: 'Great post!' / 'This!' / emojis-only &mdash; these get hidden and kill credibility"
    ],
    example: {
      originalTweet: "@levelsio: 'Solo founders should stay solo until $50k MRR'",
      badReply: "Totally agree! Solo is the way 🙌",
      goodReply: "Managing 3 products solo right now. The forcing function isn't MRR &mdash; it's ops overhead. The moment I automated metric tracking with AI, the ceiling raised significantly. Solo scales further than most think with the right systems."
    }
  },
  blogToTweet: {
    steps: [
      { step: 1, action: "Write the blog post for SEO (BlogBanana/EverRank distribute it)" },
      { step: 2, action: "Extract the single most surprising insight or stat from the post" },
      { step: 3, action: "Write a standalone tweet using that insight as the hook" },
      { step: 4, action: "Write a 7-tweet thread that summarizes the post's key sections" },
      { step: 5, action: "Pin the thread link in the first comment of the standalone tweet" },
      { step: 6, action: "3 days later, post 2&ndash;3 atomic tweets from the same post (different angles)" },
      { step: 7, action: "30 days later, repost the top-performing angle with updated context" }
    ],
    ratio: "1 blog post &rarr; 1 thread + 4&ndash;6 standalone tweets = 6&ndash;8 pieces of content per post"
  },
  buildInPublic: {
    formats: [
      { name: "The Weekly Snapshot", cadence: "Every Friday", template: "Week [N] of building [product]:\n\n&rarr; [metric]: [number]\n&rarr; [metric]: [number]\n&rarr; [metric]: [number]\n\nBiggest unlock this week: [one sentence]\nBiggest mistake: [one sentence]\n\nNext week I'm shipping: [one thing]" },
      { name: "The Problem Post", cadence: "When something breaks", template: "Just hit a problem I didn't expect with [product]:\n\n[Describe problem in 1 sentence]\n\nHere's what I tried and what failed:\n&rarr; [attempt 1] &mdash; didn't work because\n&rarr; [attempt 2] &mdash; didn't work because\n\nWhat finally fixed it: [solution]\n\nSaving someone 4 hours." },
      { name: "The Decision Log", cadence: "When making a product decision", template: "Made a hard product decision today.\n\n[Feature X] vs [Feature Y].\n\nHere's how I thought through it:\n&rarr; [criteria 1]\n&rarr; [criteria 2]\n&rarr; [criteria 3]\n\nWent with [X] because [one honest reason].\n\nBeta users weigh in 👇" }
    ]
  },
  flywheel: {
    stages: [
      { node: "Blog Post", arrow: "&rarr;", next: "Thread", note: "Summarize into 7-tweet thread" },
      { node: "Thread", arrow: "&rarr;", next: "Viral Tweet", note: "Extract best single insight" },
      { node: "Viral Tweet", arrow: "&rarr;", next: "New Followers", note: "Reach founders & builders" },
      { node: "New Followers", arrow: "&rarr;", next: "Product Update", note: "Build in public for trust" },
      { node: "Product Update", arrow: "&rarr;", next: "Early Users", note: "DM interested followers" },
      { node: "Early Users", arrow: "&rarr;", next: "New Data / Story", note: "User feedback = new blog post" },
      { node: "New Data / Story", arrow: "&rarr;", next: "Blog Post", note: "Cycle restarts with fresh SEO content" }
    ]
  },
  roadmap: [
    {
      phase: "Phase 1",
      range: "0 &rarr; 500 followers",
      duration: "Weeks 1&ndash;8",
      focus: "Credibility foundation",
      tactics: [
        "Post 1 high-insight tweet daily &mdash; no exceptions",
        "Reply 15x/day to accounts with 5k&ndash;50k followers in your niche",
        "Pin a thread that explains who you are + what you're building",
        "DM 3 founders per day &mdash; not pitching, just genuine curiosity about their problems",
        "Set up BlogBanana/EverRank for SEO content &mdash; let it compound in background",
        "Every Friday: post a build-in-public weekly snapshot"
      ],
      milestone: "50 quality followers who are actual founders. 1 thread hitting 50+ RTs."
    },
    {
      phase: "Phase 2",
      range: "500 &rarr; 2k followers",
      duration: "Weeks 8&ndash;20",
      focus: "Audience amplification",
      tactics: [
        "Start a weekly newsletter (even 50-person list) &mdash; mention it in bio",
        "Reach out to 3 accounts with 5&ndash;20k followers for cross-collaboration or quote tweets",
        "Post 3 threads per week instead of 2",
        "Launch MultiSaaS beta publicly &mdash; document the launch as a thread",
        "Create a 'flagship thread' (30+ tweets) on a topic you know deeply &mdash; pin it",
        "Use EverRank data to write a unique data-driven post nobody else can make"
      ],
      milestone: "First 20 beta users across products from X alone. 1 thread hitting 100+ RTs."
    },
    {
      phase: "Phase 3",
      range: "2k &rarr; 10k followers",
      duration: "Weeks 20&ndash;52",
      focus: "Compounding authority",
      tactics: [
        "Become the person who posts the most insightful AI+SaaS ops content on X",
        "Partner with 2&ndash;3 other indie hackers for joint content or product hunts",
        "Share specific MRR milestones (even small ones) &mdash; numbers travel fast",
        "Create a free resource (template, prompt pack, checklist) &mdash; gate it with a follow",
        "Every product milestone becomes a thread &mdash; celebrate publicly",
        "Systematize: use BlogBanana to blog &rarr; EverRank to rank &rarr; X to distribute"
      ],
      milestone: "10k followers. 60 total early users across all 3 products. Consistent 100+ RT threads."
    }
  ]
};

const TAB_LIST = ["Framework", "Templates", "Threads", "Daily Plan", "Reply Strategy", "Blog&rarr;Tweet", "Build In Public", "Flywheel", "Roadmap"];

const badge = (type) => {
  const map = {
    "Painful Truth": "bg-red-900 text-red-300",
    "Data Drop": "bg-blue-900 text-blue-300",
    "Contrarian": "bg-orange-900 text-orange-300",
    "System Reveal": "bg-purple-900 text-purple-300",
    "Behind The Build": "bg-yellow-900 text-yellow-300",
    "Build In Public": "bg-green-900 text-green-300",
    "Very High": "bg-emerald-800 text-emerald-200",
    "High": "bg-teal-800 text-teal-200"
  };
  return map[type] || "bg-zinc-700 text-zinc-300";
};

export default function Strategy() {
  const [tab, setTab] = useState(0);
  const [copied, setCopied] = useState(null);

  const copy = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 1500);
  };

  return (
    <div style={{ fontFamily: "'DM Mono', 'Courier New', monospace" }} className="min-h-screen bg-zinc-950 text-zinc-100">
      {/* Header */}
      <div className="border-b border-zinc-800 px-6 py-5">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div>
            <div className="text-xs text-zinc-500 mb-1 tracking-widest uppercase">X Growth OS</div>
            <h1 className="text-xl font-bold text-white">@ExpatBuildr &mdash; 0 &rarr; 10k Strategy</h1>
          </div>
          <div className="text-right">
            <div className="text-xs text-zinc-500">Target</div>
            <div className="text-lg font-bold text-emerald-400">10,000 followers</div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-zinc-800 px-6 overflow-x-auto">
        <div className="max-w-5xl mx-auto flex gap-1 py-1 min-w-max">
          {TAB_LIST.map((t, i) => (
            <button
              key={i}
              onClick={() => setTab(i)}
              className={`px-3 py-2 text-xs rounded transition-all whitespace-nowrap ${tab === i ? "bg-zinc-100 text-zinc-900 font-bold" : "text-zinc-400 hover:text-zinc-200"}`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-8">

        {/* Tab 0: Viral Framework */}
        {tab === 0 && (
          <div>
            <h2 className="text-lg font-bold mb-1">{data.viralFramework.title}</h2>
            <p className="text-zinc-400 text-sm mb-6">{data.viralFramework.description}</p>
            <div className="grid gap-4">
              {data.viralFramework.pillars.map((p, i) => (
                <div key={i} className="border border-zinc-800 rounded-lg p-5 bg-zinc-900">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">{p.icon}</span>
                    <span className="font-bold text-white">{p.name}</span>
                  </div>
                  <div className="text-xs text-zinc-500 mb-3 uppercase tracking-wider">{p.formula}</div>
                  <div className="bg-zinc-800 rounded p-3 text-sm text-zinc-200 mb-3 whitespace-pre-line border-l-2 border-zinc-600">
                    "{p.example}"
                  </div>
                  <div className="text-xs text-zinc-400">💡 {p.why}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 1: Templates */}
        {tab === 1 && (
          <div>
            <h2 className="text-lg font-bold mb-1">10 Tweet Templates</h2>
            <p className="text-zinc-400 text-sm mb-6">Each designed for 100–200 RTs in the founder/builder niche. Click to copy.</p>
            <div className="grid gap-4">
              {data.templates.map((t) => (
                <div key={t.id} className="border border-zinc-800 rounded-lg p-5 bg-zinc-900">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex gap-2">
                      <span className={`text-xs px-2 py-1 rounded font-bold ${badge(t.type)}`}>{t.type}</span>
                      <span className={`text-xs px-2 py-1 rounded font-bold ${badge(t.rtPotential)}`}>RT: {t.rtPotential}</span>
                    </div>
                    <button
                      onClick={() => copy(t.tweet, t.id)}
                      className="text-xs text-zinc-500 hover:text-zinc-200 border border-zinc-700 rounded px-2 py-1 transition-all"
                    >
                      {copied === t.id ? "&check; Copied" : "Copy"}
                    </button>
                  </div>
                  <div className="text-xs text-zinc-500 mb-2">Hook: <span className="text-zinc-400 italic">{t.hook}</span></div>
                  <div className="bg-zinc-800 rounded p-3 text-sm text-zinc-100 whitespace-pre-line leading-relaxed">
                    {t.tweet}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 2: Threads */}
        {tab === 2 && (
          <div>
            <h2 className="text-lg font-bold mb-1">Thread Formats for Technical Founders</h2>
            <p className="text-zinc-400 text-sm mb-6">These 4 formats consistently outperform single tweets in the indie hacker niche.</p>
            <div className="grid gap-5">
              {data.threadFormats.map((t, i) => (
                <div key={i} className="border border-zinc-800 rounded-lg p-5 bg-zinc-900">
                  <h3 className="font-bold text-white mb-3 text-base">{t.name}</h3>
                  <div className="text-xs text-zinc-500 uppercase tracking-wider mb-2">Structure</div>
                  <div className="bg-zinc-800 rounded p-3 text-sm text-zinc-200 whitespace-pre-line mb-3 leading-relaxed">
                    {t.structure}
                  </div>
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div>
                      <span className="text-zinc-500">When to use: </span>
                      <span className="text-zinc-300">{t.when}</span>
                    </div>
                    <div>
                      <span className="text-zinc-500">RT mechanic: </span>
                      <span className="text-zinc-300">{t.rtMechanic}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: Daily Plan */}
        {tab === 3 && (
          <div>
            <h2 className="text-lg font-bold mb-1">Daily Posting Structure</h2>
            <p className="text-zinc-400 text-sm mb-2">Weekly total: <span className="text-emerald-400 font-bold">{data.dailyStructure.weekly}</span></p>
            <div className="mb-6 border border-zinc-800 rounded-lg overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-zinc-800 text-zinc-400 text-xs uppercase tracking-wider">
                    <th className="text-left px-4 py-3">Time</th>
                    <th className="text-left px-4 py-3">Type</th>
                    <th className="text-left px-4 py-3">Format</th>
                    <th className="text-left px-4 py-3">Effort</th>
                  </tr>
                </thead>
                <tbody>
                  {data.dailyStructure.posts.map((p, i) => (
                    <tr key={i} className={`border-t border-zinc-800 ${i % 2 === 0 ? "bg-zinc-900" : "bg-zinc-950"}`}>
                      <td className="px-4 py-3 text-zinc-300 font-mono text-xs">{p.time}</td>
                      <td className="px-4 py-3 text-white font-bold text-xs">{p.type}</td>
                      <td className="px-4 py-3 text-zinc-400 text-xs">{p.format}</td>
                      <td className="px-4 py-3">
                        <span className={`text-xs px-2 py-0.5 rounded ${p.effort === "High" ? "bg-red-900 text-red-300" : p.effort === "Medium" ? "bg-yellow-900 text-yellow-300" : "bg-green-900 text-green-300"}`}>
                          {p.effort}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="bg-zinc-900 border border-zinc-700 rounded-lg p-4 text-sm">
              <div className="text-zinc-400 text-xs uppercase tracking-wider mb-2">Key Rule</div>
              <p className="text-zinc-200">The replies are as important as the original tweets in Phase 1. A well-placed reply on a 50k-follower account's post can bring 50–100 profile visits in one hour. Protect that time block like it's a product sprint.</p>
            </div>
          </div>
        )}

        {/* Tab 4: Reply Strategy */}
        {tab === 4 && (
          <div>
            <h2 className="text-lg font-bold mb-1">Reply Strategy</h2>
            <p className="text-zinc-400 text-sm mb-6">How to use other people's audiences to grow yours &mdash; without being a parasite.</p>
            <div className="mb-5">
              <div className="text-xs text-zinc-500 uppercase tracking-wider mb-3">Target Accounts (niche-relevant, 5k–100k followers)</div>
              <div className="flex flex-wrap gap-2">
                {data.replyStrategy.targets.map((t, i) => (
                  <span key={i} className="text-sm bg-zinc-800 border border-zinc-700 rounded px-3 py-1 text-blue-400">{t}</span>
                ))}
              </div>
            </div>
            <div className="mb-5">
              <div className="text-xs text-zinc-500 uppercase tracking-wider mb-3">Rules</div>
              <div className="grid gap-2">
                {data.replyStrategy.rules.map((r, i) => (
                  <div key={i} className="flex gap-3 bg-zinc-900 border border-zinc-800 rounded p-3 text-sm text-zinc-300">
                    <span className="text-emerald-400 mt-0.5">&rarr;</span>
                    <span>{r}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="border border-zinc-700 rounded-lg p-5 bg-zinc-900">
              <div className="text-xs text-zinc-500 uppercase tracking-wider mb-3">Example</div>
              <div className="mb-3 p-3 bg-zinc-800 rounded text-sm text-zinc-400">
                <span className="text-zinc-500 text-xs">Original tweet: </span>{data.replyStrategy.example.originalTweet}
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 bg-red-950 border border-red-800 rounded text-sm">
                  <div className="text-red-400 text-xs mb-1 font-bold uppercase">❌ Bad reply</div>
                  <div className="text-zinc-300">{data.replyStrategy.example.badReply}</div>
                </div>
                <div className="p-3 bg-emerald-950 border border-emerald-800 rounded text-sm">
                  <div className="text-emerald-400 text-xs mb-1 font-bold uppercase">&check; Good reply</div>
                  <div className="text-zinc-300">{data.replyStrategy.example.goodReply}</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 5: Blog&rarr;Tweet */}
        {tab === 5 && (
          <div>
            <h2 className="text-lg font-bold mb-1">Blog Post &rarr; Viral Tweet Pipeline</h2>
            <p className="text-zinc-400 text-sm mb-6">Ratio: <span className="text-emerald-400 font-bold">{data.blogToTweet.ratio}</span></p>
            <div className="grid gap-3">
              {data.blogToTweet.steps.map((s, i) => (
                <div key={i} className="flex gap-4 bg-zinc-900 border border-zinc-800 rounded-lg p-4">
                  <div className="text-2xl font-black text-zinc-700 w-8 shrink-0">{s.step}</div>
                  <div className="text-sm text-zinc-200 pt-1">{s.action}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 6: Build In Public */}
        {tab === 6 && (
          <div>
            <h2 className="text-lg font-bold mb-1">Build In Public System</h2>
            <p className="text-zinc-400 text-sm mb-6">Three repeating formats that turn your dev work into audience growth.</p>
            <div className="grid gap-5">
              {data.buildInPublic.formats.map((f, i) => (
                <div key={i} className="border border-zinc-800 rounded-lg p-5 bg-zinc-900">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-bold text-white">{f.name}</h3>
                    <span className="text-xs text-zinc-500 border border-zinc-700 rounded px-2 py-1">{f.cadence}</span>
                  </div>
                  <div className="bg-zinc-800 rounded p-3 text-sm text-zinc-200 whitespace-pre-line leading-relaxed">
                    {f.template}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 7: Flywheel */}
        {tab === 7 && (
          <div>
            <h2 className="text-lg font-bold mb-1">Content Flywheel</h2>
            <p className="text-zinc-400 text-sm mb-6">Every piece of content feeds the next. The system compounds &mdash; your SEO tools do the distribution.</p>
            <div className="grid gap-3">
              {data.flywheel.stages.map((s, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 w-36 text-center">
                    <div className="text-sm font-bold text-white">{s.node}</div>
                  </div>
                  <div className="text-zinc-600 text-xl">&rarr;</div>
                  <div className="bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 flex-1">
                    <span className="text-xs text-zinc-500">{s.note}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 bg-zinc-900 border border-emerald-800 rounded-lg p-4 text-sm text-zinc-300">
              <span className="text-emerald-400 font-bold">Key insight: </span>
              Most founders treat X as a standalone channel. You have an unfair advantage &mdash; BlogBanana and EverRank are your distribution infrastructure. Blog posts rank &rarr; pull in SEO traffic &rarr; those readers become followers &rarr; followers become users. The flywheel is your moat.
            </div>
          </div>
        )}

        {/* Tab 8: Roadmap */}
        {tab === 8 && (
          <div>
            <h2 className="text-lg font-bold mb-1">Growth Roadmap</h2>
            <p className="text-zinc-400 text-sm mb-6">Three distinct phases with specific tactics and milestones.</p>
            <div className="grid gap-6">
              {data.roadmap.map((phase, i) => (
                <div key={i} className="border border-zinc-800 rounded-lg overflow-hidden">
                  <div className="bg-zinc-800 px-5 py-4 flex items-center justify-between">
                    <div>
                      <span className="text-xs text-zinc-500 uppercase tracking-wider">{phase.phase} &middot; {phase.duration}</span>
                      <div className="font-bold text-white text-base mt-0.5">{phase.range}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-zinc-500">Focus</div>
                      <div className="text-sm text-emerald-400 font-bold">{phase.focus}</div>
                    </div>
                  </div>
                  <div className="p-5 bg-zinc-900">
                    <div className="grid gap-2 mb-4">
                      {phase.tactics.map((t, j) => (
                        <div key={j} className="flex gap-3 text-sm text-zinc-300">
                          <span className="text-zinc-600 mt-0.5">&rarr;</span>
                          <span>{t}</span>
                        </div>
                      ))}
                    </div>
                    <div className="border-t border-zinc-800 pt-3 mt-3">
                      <span className="text-xs text-zinc-500 uppercase tracking-wider">Phase milestone: </span>
                      <span className="text-sm text-yellow-400">{phase.milestone}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
