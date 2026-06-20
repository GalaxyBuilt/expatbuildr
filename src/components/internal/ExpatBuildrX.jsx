import { useState } from "react";

const posts = [
  {
    id: 1,
    pillar: "Arbitrage",
    platform: ["X", "Threads"],
    hook: "The Arbitrage Hook",
    tag: "Math",
    content: `Most people think “remote work” means working from home in Ohio.

Smart founders think differently.

The math of The New CEO:

• $25/hr remote job = $4,333/mo USD
• 1 USD = 60 PHP (2026 rate)
• That’s ₱260,000/mo in purchasing power
• Average Manila professional earns ₱35,000/mo
• You’re operating at 7.4× leverage

You’re not underpaid.
You’re mislocated.

→ ExpatBuildr Master List has 200+ roles at $17–$45/hr. $50 one-time.`,
    cta: "Master List",
  },
  {
    id: 2,
    pillar: "Arbitrage",
    platform: ["LinkedIn"],
    hook: "The Arbitrage Hook",
    tag: "Data",
    content: `I ran the numbers on remote work arbitrage. Here’s what nobody tells you:

$17/hr (entry remote role) in Cebu City, Philippines:

Monthly gross: $2,947 USD
Local rent (1BR furnished): $200–$350
Food budget (eating well): $150–$200
Total living cost: ~$700/mo
Savings rate potential: 76%

Compare to the same worker in Austin, TX:
Living cost: $3,200+/mo
Savings rate: Negative.

This isn’t a lifestyle choice. It’s an arbitrage play.

The question isn’t “can I afford to move?”
The question is “can I afford not to?”`,
    cta: "Landing Page",
  },
  {
    id: 3,
    pillar: "Grants",
    platform: ["X", "LinkedIn"],
    hook: "The Grant Hook",
    tag: "Data",
    content: `$500,000,000,000.

That’s how much the US government distributes in grants annually.

Breakdown nobody posts:
• $150B+ to small businesses & nonprofits
• $60B+ to tech/AI research & commercialization
• AI startup grant approval rate: ~12–18%
• Traditional business grant approval rate: ~6–9%
• Solo founders who apply: <3%

Translation: AI founders are 2× more likely to get funded than traditional biz.

And 97% of eligible founders never apply.

The best arbitrage isn’t geographic.
It’s informational.`,
    cta: "Landing Page",
  },
  {
    id: 4,
    pillar: "Grants",
    platform: ["X", "Threads"],
    hook: "The Grant Hook",
    tag: "Insider",
    content: `Quick grant math for solo AI founders in 2026:

SBIR Phase I: Up to $314,363 — no equity
NSF SBOE: Up to $2M over 2 years
EDA Tech Hubs: Up to $500K
State-level AI grants: $25K–$150K (vary by state)

Combined potential (stacked, legal): $750K–$3M+
Equity given up: $0

VC route for same capital: 15–25% of your company.

Grants aren’t charity. They’re leverage.
And the application window for most Q3 cycles closes in 6 weeks.`,
    cta: "Landing Page",
  },
  {
    id: 5,
    pillar: "Expat",
    platform: ["X", "Threads"],
    hook: "The Expat Hook",
    tag: "Trend",
    content: `The 2026 “Reverse Brain Drain” is real and the data backs it:

• 15.5M Americans now live abroad (State Dept est.)
• SE Asia relocation searches: +340% YoY (Google Trends)
• Philippines tops “Easiest English-Speaking Expat” lists 4 years running
• Average US startup founder who relocates to PH: saves $2,800/mo
• That’s $33,600/year that goes to runway, not rent

Translation: Moving to SE Asia isn’t dropping out.
It’s buying yourself 12 extra months of runway for free.`,
    cta: "Landing Page",
  },
  {
    id: 6,
    pillar: "Expat",
    platform: ["LinkedIn"],
    hook: "The Expat Hook",
    tag: "Proof",
    content: `I run a USD-earning automation business from the Philippines.

Here’s what my cost structure looks like vs. a US-based peer:

\`\`\`
             Me (PH)      US Peer
\`\`\`

Office:          $0            $800/mo
Rent:            $280          $2,100
Food:            $180          $600
Insurance:       $90           $450
Total:           $550          $3,950

We bill the same clients. We charge the same rates.

The difference is $3,400/mo = $40,800/yr = 1 full product launch budget.

Geography is a business decision.`,
    cta: "Landing Page",
  },
  {
    id: 7,
    pillar: "LeadGen",
    platform: ["X", "LinkedIn"],
    hook: "The Hidden Job Hook",
    tag: "Insider",
    content: `Uncomfortable truth about remote job hunting:

70–80% of remote roles are NEVER posted on LinkedIn or Indeed.

Where do they actually go?

→ Slack communities (invite-only)
→ Discord servers (niche industry)
→ Referral networks (warm intro only)
→ Proprietary company job boards
→ Recruiter cold outreach lists

If you’re only applying to posted jobs, you’re competing for 20% of the market.
With 100% of the competition.

ExpatBuildr exists because the real list isn’t public.
$50. One time. 200+ vetted remote roles.`,
    cta: "Master List",
  },
  {
    id: 8,
    pillar: "LeadGen",
    platform: ["X", "Threads"],
    hook: "The Hidden Job Hook",
    tag: "Math",
    content: `Job board math is broken and here’s the proof:

LinkedIn remote jobs posted today: ~180,000
Average applicants per posting: 200–400
Your statistical odds: 0.25–0.5%

Hidden market remote jobs (not posted): ~720,000 est.
Average applicants competing: 3–15 (referral/network)
Your statistical odds with warm intro: 15–40%

Same skills. Same resume. 60× better odds.

The job search isn’t broken.
The strategy is.`,
    cta: "Master List",
  },
  {
    id: 9,
    pillar: "Arbitrage",
    platform: ["X", "Threads"],
    hook: "The Arbitrage Hook",
    tag: "Mindset",
    content: `At $45/hr remote (top of the ExpatBuildr range):

Annual USD income: $93,600
Annual PH living cost (comfortable): $8,400
Net savings/investment capacity: $85,200

At that rate, you hit your first $100K faster than 94% of US households.

The median US household income is $80,610 (2024 Census).
You’d surpass it in year one.
While living near the beach.

The arbitrage isn’t a hack.
It’s just math that most people are too comfortable to run.`,
    cta: "Master List",
  },
  {
    id: 10,
    pillar: "Founder",
    platform: ["LinkedIn"],
    hook: "Founder Insight",
    tag: "Framework",
    content: `3 financial levers every solo founder should pull before raising:

1. GEOGRAPHIC ARBITRAGE
   Reduce burn by $2K–$4K/mo by relocating.
   That’s 6–12 extra months of runway.
1. NON-DILUTIVE GRANTS
   $500B+ distributed annually in the US.
   AI founders qualify at 2× the rate of traditional startups.
   You give up zero equity.
1. REMOTE INCOME BRIDGE
   $25–$45/hr remote contracts fund your build phase.
   No investors. No pressure. Just progress.

Most founders try to raise before pulling any of these levers.
That’s why 90% don’t make it to Series A.

Pull the levers first.`,
    cta: "Landing Page",
  },
  {
    id: 11,
    pillar: "Grants",
    platform: ["X"],
    hook: "The Grant Hook",
    tag: "Quick Hit",
    content: `Grant myth vs. reality:

MYTH: Grants are for nonprofits.
REALITY: 40%+ of SBIR/STTR awards go to for-profit companies.

MYTH: You need a team.
REALITY: Solo founders qualify. I have proof.

MYTH: It takes years.
REALITY: Phase I SBIR decisions: 6–8 months.

MYTH: You need a grant writer ($5K–$15K).
REALITY: AI tools + a solid template = competitive application.

The barrier is perceived, not real.`,
    cta: "Landing Page",
  },
  {
    id: 12,
    pillar: "Expat",
    platform: ["Threads"],
    hook: "The Expat Hook",
    tag: "Lifestyle",
    content: `What $550/mo gets you in Cebu, Philippines in 2026:

✔ 1BR furnished apartment (Aircon, fast WiFi)
✔ 3 meals/day (local + occasional western)
✔ Monthly unlimited LTE data plan
✔ Grab rides (Uber equivalent) daily
✔ Gym membership
✔ Weekend island trips

What $550/mo gets you in Austin, TX:

✔ Maybe a parking spot.

The math isn’t political. It’s just geography.`,
    cta: "Landing Page",
  },
  {
    id: 13,
    pillar: "LeadGen",
    platform: ["LinkedIn", "X"],
    hook: "The Hidden Job Hook",
    tag: "Data",
    content: `Remote work by the numbers (2026 data):

• 22M Americans work fully remote
• Remote job postings grew 85% since 2020
• Average remote salary premium over in-office: +18%
• Employers report filling remote roles 60% faster via referral vs. job board
• Top remote-hiring companies fill 73% of roles before public posting

The lesson: Getting the job isn’t about the application.
It’s about being in the room before the door opens.

ExpatBuildr is the early access list. 200+ roles. $50 flat.`,
    cta: "Master List",
  },
  {
    id: 14,
    pillar: "Founder",
    platform: ["X", "Threads"],
    hook: "Founder Insight",
    tag: "Mindset",
    content: `Startup runway math for solo founders:

US-based, bootstrapped:
$5K/mo burn × 12mo = $60K needed to reach MVP

PH-based, bootstrapped:
$700/mo burn × 12mo = $8,400 needed to reach MVP

Same skills. Same product. Same market.
$51,600 difference.

That difference is your Series Seed.
That you didn’t have to raise.
From anyone.

Location is not a lifestyle choice.
It’s a capitalization strategy.`,
    cta: "Landing Page",
  },
  {
    id: 15,
    pillar: "Arbitrage",
    platform: ["LinkedIn"],
    hook: "The Arbitrage Hook",
    tag: "Framework",
    content: `The “New CEO” framework for 2026:

C — Capital Arbitrage (earn USD, spend PHP)
E — Equity Preservation (grants over VC)
O — Opportunity Stack (remote income + builds + grants simultaneously)

Most founders pick one income strategy.
New CEOs run all three in parallel.

Example monthly stack:
• Remote contract: $3,200/mo (25hrs/wk)
• SaaS product MRR: $800/mo (growing)
• Grant pipeline: $150K pending
• Living cost: $700/mo

Net capital building rate: $3,300+/mo
Equity given up: 0%

This is the playbook. ExpatBuildr is the starting point.`,
    cta: "Landing Page",
  },
  {
    id: 16,
    pillar: "Grants",
    platform: ["Threads"],
    hook: "The Grant Hook",
    tag: "Actionable",
    content: `If you’re an AI founder and haven’t applied for an SBIR grant, here’s your wake-up call:

• SBIR Phase I: up to $314,363
• SBIR Phase II: up to $2,000,000
• No equity. No repayment. No investors.
• AI/ML projects get priority scoring in 2025–2026 cycles

Agencies currently funding AI:
→ NIH (health AI)
→ NSF (foundational AI research)
→ DoD/DARPA (defense AI)
→ DOE (energy/climate AI)
→ USDA (agri-tech AI)

You don’t need to be in Silicon Valley.
You need to be in the application portal.`,
    cta: "Landing Page",
  },
  {
    id: 17,
    pillar: "Expat",
    platform: ["X"],
    hook: "The Expat Hook",
    tag: "Quick Hit",
    content: `Americans moving to SE Asia to launch startups isn’t a trend.

It’s a rational capital allocation decision.

The data:
• Avg PH cost of living vs US: 71% cheaper
• English fluency rate (PH): 92% (highest in Asia)
• Internet speed (PH fiber): 100–500mbps (major cities)
• Time zone overlap with US West Coast: 3–4hrs daily
• Visa (tourist extendable): Low friction, widely used by founders

It’s not escaping America.
It’s outmaneuvering the cost of building in America.`,
    cta: "Landing Page",
  },
  {
    id: 18,
    pillar: "LeadGen",
    platform: ["LinkedIn"],
    hook: "The Hidden Job Hook",
    tag: "Framework",
    content: `Why I built ExpatBuildr’s remote job master list:

The problem with job boards:
→ Roles are 2–4 weeks old before you see them
→ 200–400 people applied before you clicked
→ 70–80% of roles never get posted at all

What the list actually is:
→ 200+ remote roles curated from non-public sources
→ $17–$45/hr range (US-rate, remote-friendly employers)
→ Updated regularly, not algorithmically recycled
→ Built for people who want to land fast, not scroll forever

One placement at $25/hr pays back the $50 in 2 hours.
ROI: 2,500%+ on hour one.`,
    cta: "Master List",
  },
  {
    id: 19,
    pillar: "Founder",
    platform: ["Threads", "X"],
    hook: "Founder Insight",
    tag: "Story",
    content: `Nobody talks about the boring phase of building.

Month 1–3: Remote contract income covers living cost.
Month 4–6: First SaaS users. Still on contract.
Month 7–9: Grant application submitted. MRR climbing.
Month 10–12: Grant approved. Contract hours cut.
Month 13+: Full product focus. Zero dilution.

This is the unsexy, systematic way to build a startup.
No pitch deck. No VC meetings. No equity lost.

The runway wasn’t raised.
It was engineered.`,
    cta: "Landing Page",
  },
  {
    id: 20,
    pillar: "Arbitrage",
    platform: ["X", "LinkedIn", "Threads"],
    hook: "The Arbitrage Hook",
    tag: "CTA",
    content: `Here’s the full stack for 2026 solo founder success:

STEP 1: Land a $25–$45/hr remote role (hidden market)
→ ExpatBuildr Master List ($50 one-time)

STEP 2: Relocate or reduce burn dramatically
→ Philippines, Mexico, Georgia (country), Portugal

STEP 3: Use excess capital to build your product
→ Target 6–12 month MVP timeline

STEP 4: Apply for non-dilutive AI grants
→ SBIR, NSF, state-level — stack them legally

STEP 5: Scale product to replace contract income
→ Then drop contract. Keep grants.

Total equity given up: 0%
Total outside capital needed: $0

The playbook exists. ExpatBuildr is the on-ramp.`,
    cta: "Master List",
  },
];

const threads = [
  {
    id: "t1",
    title: "How I Built a USD-Earning Engine While Living in a Bamboo House",
    subtitle: "The 10-tweet origin story of geographic arbitrage in practice",
    color: "#f59e0b",
    tweets: [
      {
        num: 1,
        label: "HOOK",
        text: "12 months ago I was paying $2,800/mo rent in a US city I couldn’t afford.\n\nToday I run a 6-figure USD automation business from the Philippines.\n\nMy rent: $280/mo.\n\nHere’s the full breakdown of how I rebuilt the math of my life: 🧵",
      },
      {
        num: 2,
        label: "THE PROBLEM",
        text: "The US cost structure makes building impossible.\n\n• Rent: $2,800\n• Food: $600\n• Health insurance: $450\n• Subscriptions/tools: $200\n\nTotal burn: $4,050/mo\n\nTo save $1K/mo you need to gross $70K+.\n\nThat’s not building a company. That’s survival.",
      },
      {
        num: 3,
        label: "THE REFRAME",
        text: "I started asking a different question.\n\nNot: ‘How do I earn more?’\nBut: ‘How do I make $1 worth $5?’\n\nThe answer was geography.\n\n1 USD = 60 Philippine Peso.\nAnd the Philippines has the highest English fluency in Asia.\n\nI started doing the math.",
      },
      {
        num: 4,
        label: "THE MATH",
        text: "Remote contract role: $30/hr\nMonthly at 40hrs/wk: $5,200 USD\nConverted: ₱312,000/mo\n\nAverage Metro Manila salary: ₱35,000/mo\n\nI wasn’t just earning more. I was operating in a completely different economic tier.\n\nSame laptop. Same clients. 7× the local purchasing power.",
      },
      {
        num: 5,
        label: "THE MOVE",
        text: "I didn’t ‘move to paradise.’\n\nI made a capital allocation decision.\n\nThe bamboo house near the beach wasn’t romantic.\nIt was $120/mo.\nWith 200mbps fiber.\nAnd a 4-hour overlap with US Pacific time.\n\nEvery dollar I saved was runway for the product I was building.",
      },
      {
        num: 6,
        label: "THE BUILD",
        text: "With $700/mo in total expenses:\n\nMonth 1–3: Learned the automation stack.\nMonth 4–6: Landed first 2 clients.\nMonth 7–9: Hit $2K MRR.\nMonth 10–12: $5K MRR. Reduced contract hours.\n\nTotal outside funding: $0.\nEquity given up: 0%.\n\nRunway came from geography, not investors.",
      },
      {
        num: 7,
        label: "THE GRANT LAYER",
        text: "Month 8: Applied for a state-level AI grant.\n\n$75,000. Non-dilutive. No repayment.\n\nApproval rate for AI founders: ~14%.\nFounders who actually apply: ~3%.\n\nI was in the 3%.\nThe grant covered 9 months of product development costs.\n\nCapital without a cap table.",
      },
      {
        num: 8,
        label: "THE STACK TODAY",
        text: "Current monthly structure:\n\n• Automation agency revenue: $8,200\n• SaaS product MRR: $3,100\n• Grant funds (active): $6,250/mo avg\n• Total living cost: $700\n• Net capital building: $16,850/mo\n\nSame skills I had in the US.\nDifferent math entirely.",
      },
      {
        num: 9,
        label: "THE PATTERN",
        text: "This isn’t a ‘me’ story. It’s a playbook.\n\nEvery founder I know who:\n→ Moved to low-cost geography\n→ Used remote income as bridge capital\n→ Stacked non-dilutive grants\n→ Built systematically\n\n…avoided VC pressure and kept their company.\n\nThe ones who stayed in SF mostly pitched decks.",
      },
      {
        num: 10,
        label: "THE CTA",
        text: "The on-ramp to this playbook:\n\nSTEP 1: Land a $25–$45/hr remote role.\nExpatBuildr Master List → 200+ roles, $50 flat.\n\nSTEP 2: Reduce your burn. Ruthlessly.\n\nSTEP 3: Build with the margin.\n\nSTEP 4: Stack grants. Give up zero equity.\n\nThe bamboo house is optional.\nThe math is not.",
      },
    ],
  },
  {
    id: "t2",
    title: "The 2026 Guide to AI Grants for Solo Founders",
    subtitle: "10 tweets on accessing the $500B no one is talking about",
    color: "#6366f1",
    tweets: [
      {
        num: 1,
        label: "HOOK",
        text: "$500,000,000,000 in US grants are distributed annually.\n\nLess than 3% of eligible AI founders apply.\n\nThis thread is for the other 97%.\n\nThe complete 2026 guide to getting funded without giving up equity: 🧵",
      },
      {
        num: 2,
        label: "THE LANDSCAPE",
        text: "The grant ecosystem most founders never see:\n\n• SBIR/STTR: $3.7B annually across 11 agencies\n• NSF SBIR: Focused on deep tech + AI\n• NIH SBIR: Health AI, diagnostics, biotech\n• DoD SBIR: Defense, logistics, surveillance AI\n• State grants: $25K–$500K (varies widely)\n• Private foundation grants: Often overlooked\n\nAI founders qualify across ALL of these.",
      },
      {
        num: 3,
        label: "THE MATH",
        text: "SBIR Phase I vs. VC seed comparison:\n\nSBIR Phase I:\n→ Up to $314,363\n→ Equity given up: 0%\n→ Repayment required: None\n→ Board seats surrendered: 0\n\nVC Seed ($314K):\n→ Equity given up: 10–20%\n→ Board observer rights: Often required\n→ Reporting requirements: Quarterly\n\nSame capital. Completely different terms.",
      },
      {
        num: 4,
        label: "THE ELIGIBILITY",
        text: "Who qualifies for SBIR?\n\n✔ For-profit US company\n✔ 500 or fewer employees\n✔ 51%+ US-owned and operated\n✔ Principal investigator primarily employed\n\nNote: You can be a one-person LLC.\nNote: You can work remotely from abroad.\nNote: You do NOT need a PhD.\n\nThe barrier is paperwork, not credentials.",
      },
      {
        num: 5,
        label: "THE AGENCIES",
        text: "Best SBIR agencies for AI founders in 2026:\n\n1. NSF — Foundational AI, no domain restrictions\n2. NIH — Health, mental health, diagnostics AI\n3. USDA — AgriTech, food systems, rural AI\n4. DOE — Energy, climate, grid optimization AI\n5. DHS — Safety, fraud detection, identity AI\n\nPick the one that maps to your product’s impact narrative.",
      },
      {
        num: 6,
        label: "THE APPLICATION",
        text: "Phase I application breakdown:\n\nCore sections:\n→ Project Summary (1 page)\n→ Project Description (6–12 pages)\n→ Budget Justification\n→ Commercialization Plan\n→ PI Qualifications\n\nTime to complete (with AI tools): 40–80 hrs\n\nCost to hire a grant writer: $5,000–$15,000\nCost to use a strong template + AI: ~$0\n\nThis is a learnable skill.",
      },
      {
        num: 7,
        label: "THE SUCCESS RATE",
        text: "Honest success rate data:\n\nSBIR Phase I acceptance: ~14–20%\nWith a strong commercialization plan: Meaningfully higher\nAI-focused applications (2024–2026): Priority scoring in most agencies\n\nTranslation: 1 in 6 quality applications gets funded.\n\nIf you submit 3 applications (different agencies), your odds of at least one approval exceed 40%.",
      },
      {
        num: 8,
        label: "THE STACKING STRATEGY",
        text: "Legal grant stacking (most founders don’t know this is allowed):\n\nRound 1: State-level AI grant — $25K–$75K\nRound 2: SBIR Phase I — up to $314K\nRound 3: SBIR Phase II — up to $2M\nRound 4: Private foundation grant — $10K–$100K\n\nTotal potential (over 24 months): $2.4M+\nEquity given up: 0%\n\nThis is legal. This is documented. Almost no one does it.",
      },
      {
        num: 9,
        label: "THE TIMELINE",
        text: "Realistic grant timeline for a solo AI founder:\n\nMonth 1: Research agency fit, outline proposal\nMonth 2: Write + refine with AI tools\nMonth 3: Submit Phase I\nMonth 4–8: Review period\nMonth 9: Decision (fund or revise)\nMonth 10: If funded, Phase I begins\nMonth 16–18: Phase II eligible\n\nStart now. The calendar compounds.",
      },
      {
        num: 10,
        label: "THE CTA",
        text: "Your 3-step grant activation:\n\n1. Identify your agency match (NSF, NIH, DOE, etc.)\n2. Read 3 funded abstracts in your domain (grants.gov)\n3. Draft your 1-page project summary this week\n\nThe funding isn’t locked behind credentials.\nIt’s locked behind action.\n\nAI founders who move first in 2026 will stack capital everyone else will spend the next 3 years trying to raise.",
      },
    ],
  },
  {
    id: "t3",
    title: "Why the $17/hr Remote Job Is the Most Underrated Wealth Tool in History",
    subtitle: "The compounding math most high earners ignore",
    color: "#10b981",
    tweets: [
      {
        num: 1,
        label: "HOOK",
        text: "$17/hr sounds like a consolation prize.\n\nUnless you’re building from a country where the median income is $600/mo.\n\nThen it’s a wealth-building weapon.\n\nHere’s the math most people refuse to run: 🧵",
      },
      {
        num: 2,
        label: "THE BASE CASE",
        text: "$17/hr remote, 40hrs/wk:\n\nMonthly gross: $2,947 USD\nConverted to PHP: ₱176,800\nAverage PH college grad salary: ₱18,000–₱25,000/mo\n\nYou’re earning 7–10× the local professional average.\n\nAt the lowest end of the ExpatBuildr range.\nBefore any skill premium or negotiation.",
      },
      {
        num: 3,
        label: "THE SAVINGS RATE",
        text: "The leverage unlocks through savings rate:\n\nUS-based at $17/hr:\n• Gross: $2,947\n• Living cost: $3,200 (average)\n• Savings: -$253 (deficit)\n\nPH-based at $17/hr:\n• Gross: $2,947\n• Living cost: $700\n• Savings: $2,247 (76% rate)\n\nSame wage. Completely inverted outcome.\nGeography is the multiplier.",
      },
      {
        num: 4,
        label: "THE COMPOUND MATH",
        text: "Investing $2,000/mo at a 10% annual return:\n\nYear 1: $25,200\nYear 3: $84,000\nYear 5: $153,000\nYear 10: $384,000\n\nAt a starting wage of $17/hr.\n\nThe $17/hr remote job isn’t a stepping stone.\nFor a geographically intelligent founder, it’s the foundation.",
      },
      {
        num: 5,
        label: "THE BUILD OPTION",
        text: "The other path: don’t invest the margin. Build with it.\n\n$2,000/mo surplus × 12 months = $24,000\n\nThat’s:\n→ 1 full MVP build (outsourced)\n→ Or 24 months of tool subscriptions\n→ Or 12 months of paid ad testing\n→ Or a grant match fund\n\nSame $17/hr. Now it’s venture capital you generated yourself.",
      },
      {
        num: 6,
        label: "THE SKILL PREMIUM",
        text: "The ceiling on this isn’t $17/hr. It’s $45/hr.\n\nThe skill ladder in remote work:\n\n$17–$20: General VA, admin, support\n$22–$28: Project management, operations\n$28–$35: Marketing, copywriting, automation\n$35–$45: AI/ML implementation, dev, strategy\n\nEach tier takes 3–6 months of deliberate skill building.\nThe compounding doesn’t stop.",
      },
      {
        num: 7,
        label: "THE HIDDEN MARKET",
        text: "Here’s why most people never access these rates:\n\n80% of remote jobs at $25–$45/hr are never publicly posted.\n\nThey fill via:\n→ Referral networks\n→ Curated lists (ExpatBuildr)\n→ Private Slack/Discord communities\n→ Direct recruiter outreach\n\nApplying on LinkedIn for these roles is like showing up after the party ended.",
      },
      {
        num: 8,
        label: "THE RISK PROFILE",
        text: "Risk comparison:\n\nVC-backed startup:\n→ 90% fail rate\n→ Founder equity diluted to 10–20%\n→ Pressure to ‘blitzscale’\n→ Runway controlled by others\n\n$17/hr remote + geographic arbitrage:\n→ Stable income from day one\n→ 0% equity given up\n→ Runway you control\n→ Builds toward product on your timeline\n\nThe ‘safe’ choice is riskier than it looks.",
      },
      {
        num: 9,
        label: "THE MINDSET SHIFT",
        text: "The mental reframe that changes everything:\n\nThe $17/hr remote job is not:\n❌ A ceiling\n❌ A fallback\n❌ Settling\n\nThe $17/hr remote job is:\n✔ A guaranteed income stream\n✔ A geographic arbitrage vehicle\n✔ A build-phase funding mechanism\n✔ The first chapter of a systematic wealth plan\n\nCall it what it is: capital infrastructure.",
      },
      {
        num: 10,
        label: "THE CTA",
        text: "If you’re still searching public job boards, you’re in the wrong market.\n\nThe ExpatBuildr Master List:\n→ 200+ remote roles, $17–$45/hr\n→ Curated from non-public sources\n→ $50, one-time\n\nAt $17/hr, one placement pays back the list in 3 hours.\nAt $45/hr, it’s under 90 minutes.\n\nThe math runs itself. You just have to show up in the right room.",
      },
    ],
  },
  {
    id: "t4",
    title: "The Founder Who Never Raised: A 2026 Zero-Dilution Playbook",
    subtitle: "Remote income + grants + arbitrage = your personal Series A",
    color: "#ec4899",
    tweets: [
      { num: 1, label: "HOOK", text: "I’ve never taken outside investment.\n\nI’ve never pitched a VC.\n\nI’ve never given up equity.\n\nAnd I’m building a company with more runway than most seed-funded startups.\n\nHere’s the complete zero-dilution playbook for 2026: 🧵" },
      { num: 2, label: "THE PREMISE", text: "The VC model has a dirty secret:\n\nMost ‘funded’ startups are on a death march.\n\n• Average seed: $2M\n• Average burn: $60–80K/mo\n• Runway: 25–33 months\n• Success rate: ~10%\n\nYou took their money. Now you’re on their timeline.\n\nThere’s a different model." },
      { num: 3, label: "PILLAR 1", text: "PILLAR 1: Remote Income as Bridge Capital\n\n$30/hr × 30hrs/wk = $3,900/mo\nLiving cost (PH-based): $700/mo\nFree cash flow: $3,200/mo\n\nThat’s $38,400/year in founder-controlled capital.\n\nNo board. No reporting. No pressure.\n\nJust pure build margin." },
      { num: 4, label: "PILLAR 2", text: "PILLAR 2: Geographic Cost Compression\n\nThe math is simple:\n\nUS burn rate: $4,000–$6,000/mo\nSE Asia burn rate: $600–$900/mo\n\nThe difference is your extended runway.\n\nEvery month you operate at low burn = one month you don’t need to fundraise.\n\nRunway is a location decision." },
      { num: 5, label: "PILLAR 3", text: "PILLAR 3: Grant Capital\n\n$500B+ distributed annually in the US.\nAI founders qualify at 2× the rate of traditional startups.\nLess than 3% of eligible founders apply.\n\nNon-dilutive capital is available at scale.\nThe only requirement is showing up with a quality application.\n\nMost founders are too busy pitching VCs to notice." },
      { num: 6, label: "THE STACK", text: "The zero-dilution capital stack in year one:\n\nRemote income surplus: $38,400\nState AI grant (if approved): $50,000\nSBIR Phase I (submitted month 3): $314,363 (pending)\n\nYear 1 accessible capital: $88,400–$402,763\nEquity given up: 0%\n\nVS. typical seed round: $500K for 15–20% equity." },
      { num: 7, label: "THE TIMELINE", text: "12-month zero-dilution build roadmap:\n\nM1: Land remote contract ($30/hr+)\nM2: Relocate or compress burn\nM3: Launch MVP, submit state grant\nM4–6: Iterate, build MRR\nM7: Submit SBIR Phase I\nM9: State grant decision\nM10–12: SBIR decision, Phase II eligible\nM13+: Full product mode, grants as fuel" },
      { num: 8, label: "THE RISK MATH", text: "Risk-adjusted comparison:\n\nVC path:\n→ 10% success rate (to meaningful exit)\n→ 15–30% equity gone at seed\n→ Timeline dictated by others\n\nZero-dilution path:\n→ Survivorship controlled by founder\n→ 0% equity given up\n→ Timeline entirely self-directed\n\nThe ‘risky’ path might be the VC one." },
      { num: 9, label: "THE MINDSET", text: "The real reason founders take VC money:\n\nIt’s not always necessity.\nIt’s often validation.\n\nThe check signals ‘someone believes in me.’\n\nBut here’s the thing:\nThe market is the only validation that matters.\n\nAnd the market doesn’t care where your money came from.\n\nBuild. Distribute. Collect signal. Then decide if you need outside capital." },
      { num: 10, label: "THE CTA", text: "The on-ramp to the zero-dilution path:\n\nStep 1: Get the income infrastructure right.\nExpatBuildr Master List → 200+ remote roles, $17–$45/hr, $50 flat.\n\nStep 2: Compress your burn.\nStep 3: Apply for grants before you think you’re ready.\nStep 4: Build on the margin.\n\nThe playbook is repeatable.\nThe only variable is whether you start." },
    ],
  },
  {
    id: "t5",
    title: "The Hidden Remote Job Market: Why 80% of Roles Never Get Posted",
    subtitle: "The data behind the invisible job market and how to access it",
    color: "#f97316",
    tweets: [
      { num: 1, label: "HOOK", text: "What if I told you that 80% of the remote jobs you want don’t exist on LinkedIn?\n\nThey’re real. They’re being filled right now.\n\nJust not by people scrolling job boards.\n\nThe hidden remote market, explained with data: 🧵" },
      { num: 2, label: "THE DATA", text: "The 70–80% stat comes from multiple labor market studies.\n\nWhat it means in practice:\n\n• LinkedIn shows: ~180,000 remote jobs\n• Estimated hidden market: ~540,000–720,000 roles\n• Total available: ~700,000–900,000\n\nYou’re only seeing 20–25% of the market.\nAnd competing with everyone who can Google." },
      { num: 3, label: "WHY IT’S HIDDEN", text: "Why companies don’t post roles publicly:\n\n→ Volume problem: 200–400 applicants per post\n→ Quality problem: Most applicants unqualified\n→ Speed problem: Internal referrals close in days, not weeks\n→ Cost problem: Job board fees + recruiter time\n\nCompanies prefer the referral pipeline.\nThe hidden market is just the referral pipeline at scale." },
      { num: 4, label: "WHERE THEY GO", text: "Where hidden remote jobs actually circulate:\n\n• Internal referral networks (ask employees directly)\n• Industry-specific Slack communities\n• Niche Discord servers\n• LinkedIn DMs (not postings)\n• Email newsletters from niche recruiters\n• Curated job lists (like ExpatBuildr)\n• GitHub, Product Hunt job boards\n• Founder Twitter DMs" },
      { num: 5, label: "THE ODDS", text: "Application odds comparison:\n\nPublic LinkedIn posting:\n→ Applicants: 200–400\n→ Your odds: 0.25–0.5%\n\nReferral/network hire:\n→ Candidates considered: 3–8\n→ Your odds (with warm intro): 15–40%\n\nCurated list with direct employer contact:\n→ Candidates competing: 5–20\n→ Your odds: 10–30%\n\nSame resume. 60× better odds. Different channel." },
      { num: 6, label: "THE RECRUITER MATH", text: "Why recruiters don’t post either:\n\nFilling a role via job board:\n→ 400 applications reviewed\n→ 20 phone screens\n→ 5 interviews\n→ 1 hire\n→ Time: 6–10 weeks\n\nFilling via curated list/referral:\n→ 10 candidates reviewed\n→ 4 phone screens\n→ 2 interviews\n→ 1 hire\n→ Time: 1–2 weeks\n\nThe recruiter prefers the second path. So should you." },
      { num: 7, label: "THE RATE PREMIUM", text: "Hidden market roles pay more. Here’s why:\n\nPublic posting = price competition\nEvery candidate knows the salary. Bidding down is easy.\n\nReferral/curated hire = value negotiation\nNo public anchor. Salary discussed person-to-person.\nNegotiation based on fit, not competition.\n\nData point: Referral hires earn 8–12% more than job board hires on average.\n\nThe hidden market isn’t just easier. It’s better paid." },
      { num: 8, label: "THE ACCESS STRATEGY", text: "3 ways to enter the hidden market:\n\n1. Build the network (12–24 months)\n   → Show up in communities. Give value. Get referred.\n\n2. Use trusted curated lists (immediate)\n   → Skip the network-building phase.\n   → Pay for access to pre-vetted roles.\n\n3. Direct outreach (intermediate)\n   → Target hiring managers. Personalize. No job posting required.\n\nExpatBuildr is strategy #2. The fastest on-ramp." },
      { num: 9, label: "THE TIMING", text: "The hidden market moves fast.\n\nWhy timing matters:\n\n• Referral roles fill in 1–2 weeks (vs. 6–8 for public)\n• First 3 applicants get 80% of callbacks (data-backed)\n• Early access = your competitive advantage\n\nThe day a role enters a curated list is the day to apply.\nThe day it hits LinkedIn, you’re already late." },
      { num: 10, label: "THE CTA", text: "You have two options:\n\nOption A: Keep scrolling LinkedIn.\nCompete with 300+ applicants.\nHope the algorithm surfaces you.\n\nOption B: Access the hidden market.\nExpatBuildr Master List → 200+ remote roles, $17–$45/hr.\nNon-public. Curated. Updated regularly.\n$50 flat.\n\nAt $25/hr, the list pays for itself in 2 hours of work.\nThe ROI math is not complicated." },
    ],
  },
];

const pillarColors = {
  Arbitrage: { bg: "#fef3c7", text: "#92400e", border: "#f59e0b" },
  Grants: { bg: "#ede9fe", text: "#4c1d95", border: "#7c3aed" },
  Expat: { bg: "#d1fae5", text: "#065f46", border: "#10b981" },
  LeadGen: { bg: "#fee2e2", text: "#7f1d1d", border: "#ef4444" },
  Founder: { bg: "#dbeafe", text: "#1e3a8a", border: "#3b82f6" },
};

const platformBadge = { X: "#000", LinkedIn: "#0a66c2", Threads: "#1c1c1c" };

export default function ExpatBuildrX() {
  const [view, setView] = useState("posts");
  const [activePillar, setActivePillar] = useState("All");
  const [activePlatform, setActivePlatform] = useState("All");
  const [expandedThread, setExpandedThread] = useState(null);
  const [expandedPost, setExpandedPost] = useState(null);
  const [copiedId, setCopiedId] = useState(null);

  const pillars = ["All", "Arbitrage", "Grants", "Expat", "LeadGen", "Founder"];
  const platforms = ["All", "X", "LinkedIn", "Threads"];

  const filteredPosts = posts.filter((p) => {
    const pillarOk = activePillar === "All" || p.pillar === activePillar;
    const platformOk = activePlatform === "All" || p.platform.includes(activePlatform);
    return pillarOk && platformOk;
  });

  const copyText = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 1800);
  };

  return (
    <div style={{ minHeight: "100vh", background: "#0a0a0f", color: "#e8e8f0", fontFamily: "inherit" }}>
      {/* Header */}
      <div style={{ background: "linear-gradient(135deg, #0a0a0f 0%, #12121e 100%)", borderBottom: "1px solid #1e1e2e", padding: "32px 24px 0" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 6 }}>
            <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#f59e0b", boxShadow: "0 0 8px #f59e0b" }} />
            <span style={{ fontFamily: "monospace", fontSize: 11, color: "#6b6b8a", letterSpacing: 3, textTransform: "uppercase" }}>ExpatBuildr</span>
          </div>
          <h1 style={{ fontSize: 28, fontWeight: 700, margin: "0 0 6px", color: "#ffffff", letterSpacing: -0.5 }}>
            ExpatBuildr X: Social Strike Engine
          </h1>
          <p style={{ margin: "0 0 28px", color: "#6b6b8a", fontSize: 14 }}>20 High-Impact Posts · 5 Mega-Threads · 4 Content Pillars</p>
          <div style={{ display: "flex", gap: 4 }}>
            {["posts", "threads"].map((v) => (
              <button
                key={v}
                onClick={() => setView(v)}
                style={{
                  padding: "10px 24px",
                  borderRadius: "8px 8px 0 0",
                  border: "none",
                  cursor: "pointer",
                  fontFamily: "monospace",
                  fontSize: 12,
                  letterSpacing: 1,
                  textTransform: "uppercase",
                  fontWeight: 600,
                  background: view === v ? "#1e1e2e" : "transparent",
                  color: view === v ? "#f59e0b" : "#6b6b8a",
                  borderBottom: view === v ? "2px solid #f59e0b" : "2px solid transparent",
                  transition: "all 0.2s",
                }}
              >
                {v === "posts" ? "📋 20 Posts" : "🧵 5 Mega-Threads"}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 900, margin: "0 auto", padding: "24px" }}>
        {view === "posts" && (
          <>
            {/* Filters */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 16, marginBottom: 24 }}>
              <div>
                <div style={{ fontSize: 10, fontFamily: "monospace", color: "#6b6b8a", letterSpacing: 2, marginBottom: 8, textTransform: "uppercase" }}>Pillar</div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {pillars.map((p) => (
                    <button key={p} onClick={() => setActivePillar(p)}
                      style={{
                        padding: "5px 14px", borderRadius: 20, border: "1px solid",
                        borderColor: activePillar === p ? "#f59e0b" : "#2a2a3e",
                        background: activePillar === p ? "#f59e0b22" : "transparent",
                        color: activePillar === p ? "#f59e0b" : "#6b6b8a",
                        fontSize: 12, cursor: "pointer", fontFamily: "monospace",
                      }}>
                      {p}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <div style={{ fontSize: 10, fontFamily: "monospace", color: "#6b6b8a", letterSpacing: 2, marginBottom: 8, textTransform: "uppercase" }}>Platform</div>
                <div style={{ display: "flex", gap: 6 }}>
                  {platforms.map((p) => (
                    <button key={p} onClick={() => setActivePlatform(p)}
                      style={{
                        padding: "5px 14px", borderRadius: 20, border: "1px solid",
                        borderColor: activePlatform === p ? "#6366f1" : "#2a2a3e",
                        background: activePlatform === p ? "#6366f122" : "transparent",
                        color: activePlatform === p ? "#818cf8" : "#6b6b8a",
                        fontSize: 12, cursor: "pointer", fontFamily: "monospace",
                      }}>
                      {p}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Stats bar */}
            <div style={{ display: "flex", gap: 16, marginBottom: 24, padding: "12px 16px", background: "#12121e", borderRadius: 10, border: "1px solid #1e1e2e" }}>
              {[
                { label: "Total Posts", val: filteredPosts.length },
                { label: "Arbitrage", val: filteredPosts.filter(p => p.pillar === "Arbitrage").length },
                { label: "Grants", val: filteredPosts.filter(p => p.pillar === "Grants").length },
                { label: "Expat", val: filteredPosts.filter(p => p.pillar === "Expat").length },
                { label: "LeadGen", val: filteredPosts.filter(p => p.pillar === "LeadGen").length },
              ].map(s => (
                <div key={s.label} style={{ textAlign: "center" }}>
                  <div style={{ fontSize: 20, fontWeight: 700, color: "#f59e0b" }}>{s.val}</div>
                  <div style={{ fontSize: 10, color: "#6b6b8a", fontFamily: "monospace" }}>{s.label}</div>
                </div>
              ))}
            </div>

            {/* Post cards */}
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {filteredPosts.map((post) => {
                const pc = pillarColors[post.pillar];
                const isOpen = expandedPost === post.id;
                return (
                  <div key={post.id} style={{ background: "#12121e", border: "1px solid #1e1e2e", borderRadius: 12, overflow: "hidden", transition: "border-color 0.2s" }}>
                    <div
                      onClick={() => setExpandedPost(isOpen ? null : post.id)}
                      style={{ padding: "16px 20px", cursor: "pointer", display: "flex", alignItems: "center", gap: 12 }}
                    >
                      <span style={{ fontSize: 11, fontFamily: "monospace", color: "#3a3a5c", minWidth: 28 }}>#{String(post.id).padStart(2, "0")}</span>
                      <span style={{ fontSize: 11, padding: "2px 10px", borderRadius: 20, background: pc.bg, color: pc.text, border: `1px solid ${pc.border}`, fontFamily: "monospace", whiteSpace: "nowrap" }}>
                        {post.pillar}
                      </span>
                      <span style={{ fontSize: 11, padding: "2px 8px", borderRadius: 4, background: "#1e1e2e", color: "#9f9fbe", fontFamily: "monospace" }}>{post.tag}</span>
                      <div style={{ display: "flex", gap: 4, marginLeft: 4 }}>
                        {post.platform.map(pl => (
                          <span key={pl} style={{ fontSize: 10, padding: "2px 8px", borderRadius: 4, background: platformBadge[pl], color: "#fff", fontFamily: "monospace" }}>{pl}</span>
                        ))}
                      </div>
                      <span style={{ marginLeft: "auto", color: "#3a3a5c", fontSize: 16 }}>{isOpen ? "▲" : "▼"}</span>
                    </div>
                    {isOpen && (
                      <div style={{ padding: "0 20px 20px" }}>
                        <div style={{ background: "#0a0a0f", border: "1px solid #1e1e2e", borderRadius: 10, padding: "18px 20px", marginBottom: 12 }}>
                          <pre style={{ margin: 0, whiteSpace: "pre-wrap", fontFamily: "inherit", fontSize: 14, lineHeight: 1.8, color: "#c8c8e0" }}>
                            {post.content}
                          </pre>
                        </div>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                          <span style={{ fontSize: 11, color: "#6b6b8a", fontFamily: "monospace" }}>
                            CTA → <span style={{ color: "#f59e0b" }}>{post.cta}</span>
                          </span>
                          <button
                            onClick={() => copyText(post.content, post.id)}
                            style={{
                              padding: "8px 20px", borderRadius: 8, border: "1px solid #2a2a3e",
                              background: copiedId === post.id ? "#10b981" : "#1e1e2e",
                              color: copiedId === post.id ? "#fff" : "#9f9fbe",
                              cursor: "pointer", fontSize: 12, fontFamily: "monospace",
                              transition: "all 0.2s",
                            }}
                          >
                            {copiedId === post.id ? "✔ Copied!" : "Copy Post"}
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </>
        )}

        {view === "threads" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {threads.map((thread) => {
              const isOpen = expandedThread === thread.id;
              return (
                <div key={thread.id} style={{ background: "#12121e", border: "1px solid #1e1e2e", borderRadius: 14, overflow: "hidden" }}>
                  <div
                    onClick={() => setExpandedThread(isOpen ? null : thread.id)}
                    style={{ padding: "20px 24px", cursor: "pointer", borderLeft: `4px solid ${thread.color}` }}
                  >
                    <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12 }}>
                      <div>
                        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
                          <span style={{ fontFamily: "monospace", fontSize: 10, color: thread.color, letterSpacing: 2, textTransform: "uppercase" }}>Mega-Thread · 10 Tweets</span>
                        </div>
                        <h3 style={{ margin: "0 0 4px", fontSize: 17, fontWeight: 700, color: "#e8e8f0", lineHeight: 1.3 }}>{thread.title}</h3>
                        <p style={{ margin: 0, fontSize: 13, color: "#6b6b8a" }}>{thread.subtitle}</p>
                      </div>
                      <span style={{ color: "#3a3a5c", fontSize: 20, flexShrink: 0 }}>{isOpen ? "▲" : "▼"}</span>
                    </div>
                  </div>
                  {isOpen && (
                    <div style={{ padding: "0 24px 24px", display: "flex", flexDirection: "column", gap: 10 }}>
                      {thread.tweets.map((tw) => (
                        <div key={tw.num} style={{ display: "flex", gap: 14, padding: "16px", background: "#0a0a0f", borderRadius: 10, border: "1px solid #1e1e2e" }}>
                          <div style={{ flexShrink: 0, textAlign: "center" }}>
                            <div style={{ width: 32, height: 32, borderRadius: "50%", background: thread.color + "22", border: `1px solid ${thread.color}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700, color: thread.color, fontFamily: "monospace" }}>
                              {tw.num}
                            </div>
                            <div style={{ fontSize: 9, fontFamily: "monospace", color: "#3a3a5c", marginTop: 4, letterSpacing: 1 }}>{tw.label}</div>
                          </div>
                          <div style={{ flex: 1 }}>
                            <pre style={{ margin: 0, whiteSpace: "pre-wrap", fontFamily: "inherit", fontSize: 13, lineHeight: 1.8, color: "#c8c8e0" }}>{tw.text}</pre>
                          </div>
                          <button
                            onClick={() => copyText(tw.text, `${thread.id}-${tw.num}`)}
                            style={{
                              flexShrink: 0, padding: "6px 14px", borderRadius: 6, border: "1px solid #2a2a3e",
                              background: copiedId === `${thread.id}-${tw.num}` ? "#10b981" : "#1e1e2e",
                              color: copiedId === `${thread.id}-${tw.num}` ? "#fff" : "#6b6b8a",
                              cursor: "pointer", fontSize: 11, fontFamily: "monospace", alignSelf: "flex-start",
                            }}
                          >
                            {copiedId === `${thread.id}-${tw.num}` ? "✔" : "Copy"}
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
