import { useState } from "react";

const TABS = ["Algorithm", "Post Framework", "Comment Strategy", "Connection Strategy", "Authority Positioning", "Content Funnel", "Post Examples", "90-Day Plan"];

const algorithmFacts = [
  {
    title: "The Golden Window",
    icon: "60",
    unit: "minutes",
    detail: "LinkedIn scores your post in the first 60 minutes. If it gets comments, likes, and shares in that window, it gets pushed to second-degree connections. If it dies, it stays buried. Post when your audience is active: 7-9am or 12-1pm on weekdays."
  },
  {
    title: "Comments Beat Likes",
    icon: "5x",
    unit: "multiplier",
    detail: "A comment signals 5x more value to the algorithm than a like. A comment that triggers a reply thread signals even more. This is why your first goal on every post is to get a conversation started in the comments, not just reactions."
  },
  {
    title: "Dwell Time",
    icon: "See More",
    unit: "trigger",
    detail: "LinkedIn tracks how long someone looks at your post. Posts that make people click 'see more' rank higher because they signal genuine interest. Your first two lines are not the introduction. They are the entire hook. Everything hangs on those two lines."
  },
  {
    title: "Native Content Only",
    icon: "0",
    unit: "external links",
    detail: "LinkedIn suppresses posts with external links. Never put a URL in the body of a post. Put it in the first comment instead, and reference it in the post. This applies to your product pages, blog posts, and anything else you want people to click."
  },
  {
    title: "Early Commenters Win Too",
    icon: "Top",
    unit: "comment visibility",
    detail: "When you comment on someone else's post within the first 30 minutes and your comment gets likes, your name shows up to everyone who sees that post. This is free distribution to audiences you do not have yet. It is your most underused growth lever."
  },
  {
    title: "Connection Degree Matters",
    icon: "1st",
    unit: "priority",
    detail: "LinkedIn shows posts first to your 1st-degree connections. Then 2nd-degree. Then hashtag followers. This means the quality of who you connect with directly determines who sees your content. Connect strategically, not randomly."
  }
];

const postTypes = [
  {
    day: "Monday",
    type: "Founder Insight",
    format: "Single insight with numbered breakdown",
    hook: "Start with a counterintuitive statement about SaaS, SEO, or AI",
    example: "Most SaaS founders track MRR.\n\nThe ones growing track something different.\n\nHere is what actually predicts revenue health:\n\n1. Net Revenue Retention (not gross)\n2. Time to first value for new users\n3. Expansion MRR from existing customers\n4. Churn by acquisition channel\n\nMRR tells you where you are.\n\nThese four tell you where you are going.\n\nWhat metric do you obsess over?",
    goal: "Comments + saves"
  },
  {
    day: "Tuesday",
    type: "Build In Public",
    format: "Real update with honest numbers",
    hook: "This week / this month / day X of building...",
    example: "Week 6 of building MultiSaaS in public.\n\nHonest update:\n\nWhat worked:\n- First paying beta user signed up without me asking\n- Alert system shipped and live\n- Stripe + PayPal integration connected\n\nWhat did not work:\n- Tried to add 3 features. Shipped 1.\n- Support took more time than I budgeted\n- Still no clear SEO traffic\n\nRevenue: $29\nBeta users: 7\nBiggest lesson: do less. Ship faster.\n\nFollowing this build? Drop a comment and I will add you to the beta list.",
    goal: "Beta signups + follower growth"
  },
  {
    day: "Wednesday",
    type: "SEO or AI Insight",
    format: "Teach one specific thing most founders get wrong",
    hook: "Nobody talks about this but...",
    example: "Nobody talks about this SEO mistake that kills new SaaS blogs.\n\nYou write 10 articles.\nYou target 10 keywords.\nYou get no traffic.\n\nHere is why:\n\nYou skipped topical authority.\n\nGoogle does not rank individual articles.\nIt ranks sites it trusts as an authority on a topic.\n\nIf your first 10 posts are scattered across 10 topics, you are nobody to Google.\n\nIf your first 10 posts all cover the same niche deeply, you become an authority.\n\nHow to build it:\n- Pick ONE topic cluster\n- Write 8-12 posts on it\n- Interlink them all\n- Then expand\n\nThis is the system I built EverRank to automate.\n\nLink in comments.",
    goal: "Profile visits + product discovery"
  },
  {
    day: "Thursday",
    type: "Founder Story",
    format: "Personal narrative with a specific lesson at the end",
    hook: "Start mid-action, not at the beginning",
    example: "I almost killed MultiSaaS in month 2.\n\nNot because of a technical problem.\n\nBecause I added 11 features nobody asked for.\n\nThe dashboard was getting more complex every week.\nI thought complexity meant progress.\nUsers thought it meant confusion.\n\nThen one beta user sent me a message:\n\n'I just want to see all my MRR in one place without logging into 4 apps.'\n\nI deleted 9 features the next day.\n\nThe version after that was the one people actually used.\n\nSimplicity is not a design choice. It is a product strategy.",
    goal: "Shares + emotional engagement"
  },
  {
    day: "Friday",
    type: "Tool or Resource",
    format: "Share something genuinely useful, not a pitch",
    hook: "Here is the exact [thing] I use to [outcome]",
    example: "Here is the exact SEO content structure I use for every SaaS blog post.\n\nMost founders write and hope.\n\nThis structure converts:\n\n1. Keyword in H1 and first sentence\n2. Problem framing in paragraph 1\n3. Promise of solution in paragraph 2\n4. Subheadings as mini-answers to follow-up questions\n5. Internal links to 2-3 related posts\n6. CTA that matches search intent (not 'sign up', match the intent)\n\nThe template is in the comments.\n\nSave this. It works.",
    goal: "Saves + shares"
  },
  {
    day: "Saturday",
    type: "Contrarian Take",
    format: "Challenge a widely held belief with evidence",
    hook: "Unpopular opinion:",
    example: "Unpopular opinion:\n\nBuilding in public is not a growth strategy.\n\nIt is a trust strategy.\n\nIf you are posting updates expecting followers, you are playing the wrong game.\n\nBuilding in public works when:\n- You already have an audience paying attention\n- Your updates contain genuine insight, not just status\n- You treat it like a knowledge product, not a diary\n\nMost indie hackers build in public and wonder why nobody cares.\n\nBecause updates without insight are just noise.\n\nDocument what you learned. Not just what you shipped.",
    goal: "Comments + debate + shares"
  },
  {
    day: "Sunday",
    type: "Week Ahead",
    format: "Short, personal, what you are shipping next week",
    hook: "This week I am focused on...",
    example: "This week:\n\nShipping the EverRank keyword clustering feature.\nOnboarding 3 new MultiSaaS beta users.\nWriting 2 blog posts for BlogBanana SEO test.\n\nOne goal. One metric. One shipping moment.\n\nWhat are you shipping this week?",
    goal: "Replies + community feel"
  }
];

const commentTargets = [
  { name: "Greg Isenberg", handle: "@gregisenberg", why: "AI and SaaS future audience, massive reach, posts frequently", angle: "Add a real counterpoint or extend his idea with your product experience" },
  { name: "Lenny Rachitsky", handle: "Lenny's Newsletter", why: "Product and SaaS audience that pays for content, high quality followers", angle: "Share a founder-specific nuance he did not cover" },
  { name: "Corey Haines", handle: "SaaS growth", why: "Bootstrapped SaaS audience, direct product fit with your tools", angle: "Offer a concrete tactic or data point from your own build" },
  { name: "Arvid Kahl", handle: "@arvidkahl", why: "Bootstrapped founder audience, writes about audience-first building", angle: "Reference your own journey and what changed for you" },
  { name: "Hiten Shah", handle: "SaaS metrics", why: "Operator-level SaaS founders who care about metrics", angle: "Share a specific metric insight from running MultiSaaS" },
  { name: "Justin Welsh", handle: "Creator economy", why: "Massive LinkedIn-native audience, many are solo founders", angle: "Apply his frameworks to SaaS specifically with a concrete twist" }
];

const commentRules = [
  "Comment within the first 20 minutes of a post going live. Set alerts for your target accounts.",
  "Your comment must add something the original post did not say. Agree plus insight, disagree plus evidence, or extend with a specific example.",
  "Write at least 3 sentences. One-line comments get buried. Substantial comments get pinned at the top if they earn likes.",
  "End your comment with a question when possible. Questions get replies. Replies push your comment higher.",
  "Never promote your product in a comment on someone else's post. You are building credibility, not pitching. The profile does the converting.",
  "Engage with the replies on your own comment. A comment thread boosts the original post and keeps your name visible."
];

const connectionStrategy = [
  { rule: "Daily limit", value: "15-20 requests", detail: "LinkedIn flags accounts sending 30+ requests per day. Stay under 20 and you stay off the radar." },
  { rule: "Who to connect with", value: "ICP founders first", detail: "SaaS founders, indie hackers, developers building products, B2B startup operators. Filter by title: Founder, CEO, Co-founder, Head of Product, Solo Founder." },
  { rule: "Note or no note", value: "Always add a note", detail: "Do not pitch. Reference something specific: their recent post, their product, something you have in common. 1-2 sentences max." },
  { rule: "Acceptance rate target", value: "Above 40%", detail: "If your acceptance rate drops below 40%, your connection quality or note is off. Adjust targeting or messaging." },
  { rule: "After connecting", value: "Engage first", detail: "Like or comment on their recent post before sending a message. Warm the connection before any conversation." },
  { rule: "Convert to conversation", value: "Day 3-5", detail: "After they accept and you have engaged with their content, send a 2-sentence message. Ask a genuine question about their product or challenge. No pitch." }
];

const authorityPillars = [
  {
    pillar: "AI Engineering",
    color: "#6366f1",
    posts: "How I built the AI alert layer for MultiSaaS. What model, what prompts, what failed first.",
    topics: ["Prompting for business logic", "AI agents in SaaS products", "Proactive vs reactive AI", "Cost of running AI in production"]
  },
  {
    pillar: "SaaS Systems",
    color: "#0ea5e9",
    posts: "The exact architecture of running multiple SaaS products as a solo founder.",
    topics: ["Multi-product metric dashboards", "Churn detection systems", "Revenue attribution models", "OSS plus commercial hybrid models"]
  },
  {
    pillar: "SEO Traffic Engines",
    color: "#10b981",
    posts: "How I turned a blog into a compounding traffic engine using BlogBanana and EverRank.",
    topics: ["Topical authority building", "Keyword clustering for SaaS", "Programmatic SEO", "Content that ranks vs content that gets shared"]
  },
  {
    pillar: "Tools for Founders",
    color: "#f59e0b",
    posts: "Why I build every tool I wish existed. The gap between what founders need and what the market sells.",
    topics: ["Founder workflow automation", "Dashboard consolidation", "Bootstrapped tech stacks", "Build vs buy decisions"]
  }
];

const funnelStages = [
  {
    stage: "Awareness",
    action: "Stranger sees a post",
    content: "Insight posts, contrarian takes, founder stories",
    conversion: "Profile visit"
  },
  {
    stage: "Interest",
    action: "They follow or connect",
    content: "Build-in-public updates, product reveals, SEO breakdowns",
    conversion: "Follow + comment"
  },
  {
    stage: "Trust",
    action: "They engage consistently",
    content: "Authority posts showing expertise in AI, SEO, SaaS systems",
    conversion: "Saves + DM conversations"
  },
  {
    stage: "Curiosity",
    action: "They click your featured section",
    content: "Product demos, beta results, user testimonials",
    conversion: "Link click to product"
  },
  {
    stage: "Signup",
    action: "They try the product",
    content: "Low-friction offer: free trial, beta access, waitlist",
    conversion: "User"
  }
];

const postExamples = [
  {
    product: "EverRank",
    type: "SEO Insight",
    label: "High save potential",
    post: "I analyzed 100 SaaS blog posts that rank on page 1.\n\nHere is what they all had that most founders skip:\n\n1. Topic cluster ownership\nNot one article. A network of 8-12 posts on the same topic, all interlinked.\n\n2. Keyword in the first 50 words\nNot buried in paragraph 3. First sentence if possible.\n\n3. Answer boxes\nA direct 2-3 sentence answer to the search query near the top, then the full explanation below.\n\n4. Internal link density\nEvery post linked to at least 3 others on the same topic.\n\n5. Updated date visible\nFresh content gets ranking preference. Update old posts.\n\nI built EverRank to track all five of these automatically.\n\nIf you want early access, the link is in the comments."
  },
  {
    product: "BlogBanana",
    type: "SEO Discovery",
    label: "High comment potential",
    post: "Your SaaS blog is probably not failing because of writing quality.\n\nIt is failing because of architecture.\n\nHere is what I mean:\n\nMost founders write articles in isolation.\nNo keyword strategy.\nNo internal linking structure.\nNo topic cluster.\n\nGoogle cannot figure out what you are an authority on.\nSo it ranks you for nothing.\n\nThe fix:\n\nPick one niche. Write 8 posts on it. Link them all together.\nPublish consistently for 90 days.\n\nThen check your Search Console.\n\nI built BlogBanana specifically because this process was too slow to do manually.\n\nAnyone here running an SEO-first content strategy? What is working?"
  },
  {
    product: "MultiSaaS",
    type: "Build In Public",
    label: "High share potential",
    post: "I used to manage 3 SaaS products across 5 spreadsheets.\n\nHere is what that actually looked like:\n\nMonday: Export Stripe CSV, paste into revenue sheet\nTuesday: Check PayPal dashboard manually\nWednesday: Realize churn data is 3 weeks old\nThursday: Try to figure out why MRR dropped\nFriday: Give up and just look at the number\n\nI was a founder doing accountant work.\n\nSo I built MultiSaaS.\n\nNow:\n- All MRR in one screen\n- Churn flagged automatically\n- AI surfaces anomalies before I notice them\n- Alerts fire to Slack before things go wrong\n\nFree and open source.\n\nLink in comments if you are managing more than one product."
  },
  {
    product: "General",
    type: "Founder Lesson",
    label: "High emotional resonance",
    post: "The hardest moment in building MultiSaaS was not technical.\n\nIt was day 47.\n\nZero MRR. Seven beta users. One churn.\n\nI had shipped 14 features nobody asked for.\nThe product was getting worse the more I added.\n\nI almost pivoted.\n\nThen I went back and read every message from beta users.\n\nEvery single one said the same thing:\n'I just want to see all my revenue in one place.'\n\nI deleted 11 features in one afternoon.\n\nWeek after that: first paid user.\n\nLessons are expensive.\nSometimes the product is already there.\nYou are just hiding it under the wrong features."
  },
  {
    product: "EverRank",
    type: "AI Engineering",
    label: "High authority signal",
    post: "Here is how I used AI to automate SEO keyword analysis for EverRank.\n\nThe problem:\nManually clustering keywords takes hours.\nMost tools do it wrong anyway.\n\nThe solution I built:\n\n1. Pull keyword data from Search Console API\n2. Send to Claude with a prompt that clusters by search intent (not just topic)\n3. Score each cluster by competition vs volume ratio\n4. Rank by opportunity score\n5. Return a prioritized content calendar\n\nWhat used to take 4 hours now takes 4 minutes.\n\nThe full prompt structure is in the comments.\n\nWho else is building AI on top of SEO data?"
  }
];

const plan90 = [
  {
    phase: "Phase 1",
    range: "Days 1-30",
    goal: "Foundation and visibility",
    followers: "0 to 500",
    conversions: "10 beta signups",
    daily: [
      "Post 1 piece of content (rotate post types)",
      "Comment on 5-10 posts from target accounts within 30 min of posting",
      "Send 15 connection requests to ICP founders",
      "Reply to every comment on your posts within 2 hours"
    ],
    weekly: [
      "1 long-form insight post (Monday)",
      "1 build-in-public update (Tuesday)",
      "1 SEO or AI breakdown (Wednesday)",
      "1 founder story (Thursday)",
      "1 tool or resource share (Friday)",
      "Review connection acceptance rate",
      "Note which post type got the most engagement"
    ],
    milestone: "First 100 followers who are actual founders. First 5 comments that start real conversations."
  },
  {
    phase: "Phase 2",
    range: "Days 31-60",
    goal: "Authority and product discovery",
    followers: "500 to 2000",
    conversions: "50 beta signups across products",
    daily: [
      "Post 1 piece of content",
      "Comment on 10-15 posts (increase volume)",
      "Send 15-20 connection requests",
      "Send 3-5 follow-up messages to warm connections",
      "Engage with everyone who comments on your posts"
    ],
    weekly: [
      "1 product-specific post per product per week",
      "1 data or results post (show real numbers)",
      "1 detailed SEO or AI breakdown",
      "Track which posts drive profile visits",
      "Add product links to featured section of profile",
      "Post one testimonial or user feedback received"
    ],
    milestone: "1 post hitting 5000+ impressions. First 10 DM conversations with interested founders."
  },
  {
    phase: "Phase 3",
    range: "Days 61-90",
    goal: "Conversion and compounding",
    followers: "2000 to 5000",
    conversions: "150-500 product signups",
    daily: [
      "Post 1 content piece",
      "Comment on 15-20 posts",
      "Follow up on every warm conversation",
      "Track signups from LinkedIn specifically"
    ],
    weekly: [
      "1 case study or detailed product update",
      "1 collaboration or mention with another founder",
      "1 resource post with direct product CTA in comments",
      "Review top 3 posts by conversion and double down on that format",
      "Send beta invites to high-engagement followers directly"
    ],
    milestone: "500 total signups for BlogBanana or EverRank. 3000+ followers. Consistent weekly inbound DMs asking about products."
  }
];

function CopyBtn({ text }) {
  const [done, setDone] = useState(false);
  return (
    <button onClick={() => { navigator.clipboard.writeText(text); setDone(true); setTimeout(() => setDone(false), 1500); }}
      style={{ fontSize: 11, padding: "4px 12px", borderRadius: 4, border: done ? "1px solid #16a34a" : "1px solid #d1d5db", background: done ? "#dcfce7" : "#fff", color: done ? "#16a34a" : "#6b7280", cursor: "pointer", fontFamily: "inherit" }}>
      {done ? "Copied" : "Copy post"}
    </button>
  );
}

export default function App() {
  const [tab, setTab] = useState(0);
  const [expandedPost, setExpandedPost] = useState(null);
  const [expandedExample, setExpandedExample] = useState(0);

  return (
    <div style={{ minHeight: "100vh", background: "#f9fafb", fontFamily: "system-ui, sans-serif", color: "#111827" }}>

      <div style={{ background: "#0a0a0a", padding: "32px 24px" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <div style={{ display: "inline-block", background: "#0077b5", color: "#fff", fontSize: 10, fontWeight: 700, padding: "2px 8px", borderRadius: 3, letterSpacing: 2, textTransform: "uppercase", marginBottom: 10 }}>LinkedIn</div>
          <h1 style={{ fontSize: 24, fontWeight: 700, color: "#fff", margin: "0 0 6px" }}>@ExpatBuildr Growth Strategy</h1>
          <p style={{ fontSize: 13, color: "#71717a", margin: 0 }}>0 to 10k followers. 500 product signups. Organic only.</p>
        </div>
      </div>

      <div style={{ background: "#fff", borderBottom: "1px solid #e5e7eb", overflowX: "auto" }}>
        <div style={{ maxWidth: 860, margin: "0 auto", display: "flex", minWidth: "max-content" }}>
          {TABS.map((t, i) => (
            <button key={i} onClick={() => setTab(i)} style={{ padding: "14px 16px", fontSize: 12, fontWeight: tab === i ? 700 : 400, border: "none", borderBottom: tab === i ? "2px solid #0077b5" : "2px solid transparent", background: "transparent", color: tab === i ? "#0077b5" : "#6b7280", cursor: "pointer", whiteSpace: "nowrap" }}>
              {t}
            </button>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: 860, margin: "0 auto", padding: "32px 24px" }}>

        {tab === 0 && (
          <div>
            <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 4 }}>How the LinkedIn Algorithm Works</h2>
            <p style={{ fontSize: 13, color: "#6b7280", marginBottom: 24 }}>Understanding this is the difference between 200 impressions and 20,000 impressions on the same post.</p>
            <div style={{ display: "grid", gap: 12 }}>
              {algorithmFacts.map((f, i) => (
                <div key={i} style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: 10, padding: 20, display: "flex", gap: 20 }}>
                  <div style={{ minWidth: 64, textAlign: "center" }}>
                    <div style={{ fontSize: 22, fontWeight: 900, color: "#0077b5" }}>{f.icon}</div>
                    <div style={{ fontSize: 9, color: "#9ca3af", textTransform: "uppercase", letterSpacing: 1 }}>{f.unit}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 700, marginBottom: 6 }}>{f.title}</div>
                    <div style={{ fontSize: 13, color: "#4b5563", lineHeight: 1.7 }}>{f.detail}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === 1 && (
          <div>
            <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 4 }}>7-Day Posting Framework</h2>
            <p style={{ fontSize: 13, color: "#6b7280", marginBottom: 24 }}>One post type per day. Rotate consistently. The algorithm rewards predictable publishing schedules.</p>
            <div style={{ display: "grid", gap: 10 }}>
              {postTypes.map((p, i) => (
                <div key={i} style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: 10, overflow: "hidden" }}>
                  <div onClick={() => setExpandedPost(expandedPost === i ? null : i)} style={{ padding: "16px 20px", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
                      <div style={{ minWidth: 90, fontSize: 11, fontWeight: 700, color: "#0077b5", textTransform: "uppercase", letterSpacing: 1 }}>{p.day}</div>
                      <div>
                        <div style={{ fontSize: 14, fontWeight: 700 }}>{p.type}</div>
                        <div style={{ fontSize: 12, color: "#6b7280" }}>{p.format}</div>
                      </div>
                    </div>
                    <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                      <span style={{ fontSize: 10, padding: "2px 8px", borderRadius: 20, background: "#eff6ff", color: "#3b82f6", fontWeight: 600 }}>Goal: {p.goal}</span>
                      <span style={{ color: "#9ca3af", fontSize: 12 }}>{expandedPost === i ? "Hide" : "View example"}</span>
                    </div>
                  </div>
                  {expandedPost === i && (
                    <div style={{ padding: "0 20px 16px", borderTop: "1px solid #f3f4f6" }}>
                      <div style={{ fontSize: 11, color: "#9ca3af", textTransform: "uppercase", letterSpacing: 1, margin: "14px 0 8px" }}>Hook strategy</div>
                      <div style={{ fontSize: 13, color: "#374151", marginBottom: 14 }}>{p.hook}</div>
                      <div style={{ fontSize: 11, color: "#9ca3af", textTransform: "uppercase", letterSpacing: 1, marginBottom: 8 }}>Example post</div>
                      <div style={{ background: "#f9fafb", border: "1px solid #e5e7eb", borderRadius: 8, padding: 16, fontSize: 13, color: "#111827", whiteSpace: "pre-line", lineHeight: 1.7, marginBottom: 10 }}>{p.example}</div>
                      <CopyBtn text={p.example} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === 2 && (
          <div>
            <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 4 }}>Comment Strategy</h2>
            <p style={{ fontSize: 13, color: "#6b7280", marginBottom: 24 }}>Commenting on the right posts is how you get in front of 50,000 people before you have 500 followers.</p>

            <div style={{ marginBottom: 28 }}>
              <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 12, color: "#374151" }}>Target Accounts</div>
              <div style={{ display: "grid", gap: 10 }}>
                {commentTargets.map((t, i) => (
                  <div key={i} style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: 10, padding: 16, display: "grid", gridTemplateColumns: "1fr 2fr", gap: 16 }}>
                    <div>
                      <div style={{ fontSize: 14, fontWeight: 700 }}>{t.name}</div>
                      <div style={{ fontSize: 11, color: "#0077b5", marginBottom: 6 }}>{t.handle}</div>
                      <div style={{ fontSize: 12, color: "#6b7280" }}>{t.why}</div>
                    </div>
                    <div>
                      <div style={{ fontSize: 10, color: "#9ca3af", textTransform: "uppercase", letterSpacing: 1, marginBottom: 4 }}>Your angle</div>
                      <div style={{ fontSize: 13, color: "#374151" }}>{t.angle}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 12, color: "#374151" }}>Comment Rules</div>
            <div style={{ display: "grid", gap: 8 }}>
              {commentRules.map((r, i) => (
                <div key={i} style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: 8, padding: 14, display: "flex", gap: 12 }}>
                  <div style={{ minWidth: 24, height: 24, borderRadius: "50%", background: "#0077b5", color: "#fff", fontSize: 11, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center" }}>{i + 1}</div>
                  <div style={{ fontSize: 13, color: "#374151", lineHeight: 1.6 }}>{r}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === 3 && (
          <div>
            <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 4 }}>Connection Strategy</h2>
            <p style={{ fontSize: 13, color: "#6b7280", marginBottom: 24 }}>Who you connect with determines who sees your content. Be deliberate.</p>
            <div style={{ display: "grid", gap: 10 }}>
              {connectionStrategy.map((c, i) => (
                <div key={i} style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: 10, padding: 18, display: "grid", gridTemplateColumns: "160px 1fr", gap: 20, alignItems: "start" }}>
                  <div>
                    <div style={{ fontSize: 11, color: "#9ca3af", textTransform: "uppercase", letterSpacing: 1, marginBottom: 4 }}>{c.rule}</div>
                    <div style={{ fontSize: 16, fontWeight: 800, color: "#0077b5" }}>{c.value}</div>
                  </div>
                  <div style={{ fontSize: 13, color: "#374151", lineHeight: 1.7 }}>{c.detail}</div>
                </div>
              ))}
            </div>

            <div style={{ background: "#eff6ff", border: "1px solid #bfdbfe", borderRadius: 10, padding: 18, marginTop: 20 }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: "#1d4ed8", marginBottom: 8 }}>Connection note template</div>
              <div style={{ background: "#fff", border: "1px solid #dbeafe", borderRadius: 6, padding: 14, fontSize: 13, color: "#374151", lineHeight: 1.7, marginBottom: 10 }}>
                {"Hey [Name], saw your post about [specific thing they posted]. Building something in a similar space (MultiSaaS, a dashboard for founders running multiple products). Would be good to connect."}
              </div>
              <CopyBtn text={"Hey [Name], saw your post about [specific thing they posted]. Building something in a similar space (MultiSaaS, a dashboard for founders running multiple products). Would be good to connect."} />
            </div>
          </div>
        )}

        {tab === 4 && (
          <div>
            <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 4 }}>Authority Positioning</h2>
            <p style={{ fontSize: 13, color: "#6b7280", marginBottom: 24 }}>You need to be known for one thing before you can be trusted on everything. Build authority pillar by pillar.</p>
            <div style={{ display: "grid", gap: 14 }}>
              {authorityPillars.map((p, i) => (
                <div key={i} style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: 10, overflow: "hidden" }}>
                  <div style={{ height: 4, background: p.color }} />
                  <div style={{ padding: 20 }}>
                    <div style={{ fontSize: 16, fontWeight: 700, marginBottom: 8, color: p.color }}>{p.pillar}</div>
                    <div style={{ fontSize: 13, color: "#374151", marginBottom: 14, lineHeight: 1.6 }}>{p.posts}</div>
                    <div style={{ fontSize: 11, color: "#9ca3af", textTransform: "uppercase", letterSpacing: 1, marginBottom: 8 }}>Content topics</div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                      {p.topics.map((t, ti) => (
                        <span key={ti} style={{ fontSize: 11, padding: "3px 10px", borderRadius: 20, background: p.color + "15", color: p.color, fontWeight: 600 }}>{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: 10, padding: 20, marginTop: 14 }}>
              <div style={{ fontSize: 14, fontWeight: 700, marginBottom: 10 }}>LinkedIn Profile Setup for Authority</div>
              <div style={{ display: "grid", gap: 8 }}>
                {[
                  ["Headline", "AI engineer building SaaS tools for founders | MultiSaaS, BlogBanana, EverRank"],
                  ["About section", "Open with the problem you solve. Not your background. What do you build and who is it for."],
                  ["Featured section", "Pin your best post, a product demo link, and a link to your free resource or beta signup"],
                  ["Banner image", "Show your products. A screenshot of MultiSaaS dashboard with your handle visible"],
                  ["Creator mode", "Turn on. Lets you add a follow button and shows your top topics. Critical for growth accounts."]
                ].map(([label, val], i) => (
                  <div key={i} style={{ display: "grid", gridTemplateColumns: "140px 1fr", gap: 12, padding: "10px 0", borderBottom: i < 4 ? "1px solid #f3f4f6" : "none" }}>
                    <div style={{ fontSize: 11, fontWeight: 700, color: "#9ca3af", textTransform: "uppercase", letterSpacing: 1 }}>{label}</div>
                    <div style={{ fontSize: 13, color: "#374151" }}>{val}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {tab === 5 && (
          <div>
            <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 4 }}>Content to Conversion Funnel</h2>
            <p style={{ fontSize: 13, color: "#6b7280", marginBottom: 24 }}>Every post fits into a stage. Know which stage you are posting for.</p>

            <div style={{ display: "grid", gap: 3, marginBottom: 28 }}>
              {funnelStages.map((s, i) => (
                <div key={i} style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: 8, padding: 16, display: "grid", gridTemplateColumns: "100px 1fr 1fr 120px", gap: 16, alignItems: "center" }}>
                  <div>
                    <div style={{ fontSize: 10, color: "#9ca3af", textTransform: "uppercase", letterSpacing: 1 }}>Stage {i + 1}</div>
                    <div style={{ fontSize: 14, fontWeight: 700 }}>{s.stage}</div>
                  </div>
                  <div style={{ fontSize: 12, color: "#374151" }}>{s.action}</div>
                  <div style={{ fontSize: 12, color: "#6b7280" }}>{s.content}</div>
                  <div style={{ fontSize: 11, padding: "3px 8px", borderRadius: 4, background: "#f0fdf4", color: "#16a34a", fontWeight: 600, textAlign: "center" }}>{s.conversion}</div>
                </div>
              ))}
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12 }}>
              {[
                { product: "BlogBanana", cta: "SEO audit of your blog (free)", post: "Wednesday SEO breakdown posts", trigger: "Founders frustrated with no organic traffic" },
                { product: "EverRank", cta: "Free keyword cluster report", post: "SEO insight posts with data", trigger: "Founders wanting to rank but not knowing where to start" },
                { product: "MultiSaaS", cta: "Free beta access, open source", post: "Build-in-public updates, dashboard demos", trigger: "Founders managing multiple products in spreadsheets" }
              ].map((p, i) => (
                <div key={i} style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: 10, padding: 16 }}>
                  <div style={{ fontSize: 14, fontWeight: 700, marginBottom: 10, color: "#0077b5" }}>{p.product}</div>
                  <div style={{ fontSize: 11, color: "#9ca3af", textTransform: "uppercase", letterSpacing: 1, marginBottom: 4 }}>CTA offer</div>
                  <div style={{ fontSize: 12, color: "#374151", marginBottom: 10 }}>{p.cta}</div>
                  <div style={{ fontSize: 11, color: "#9ca3af", textTransform: "uppercase", letterSpacing: 1, marginBottom: 4 }}>Best post type</div>
                  <div style={{ fontSize: 12, color: "#374151", marginBottom: 10 }}>{p.post}</div>
                  <div style={{ fontSize: 11, color: "#9ca3af", textTransform: "uppercase", letterSpacing: 1, marginBottom: 4 }}>Buyer trigger</div>
                  <div style={{ fontSize: 12, color: "#374151" }}>{p.trigger}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === 6 && (
          <div>
            <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 4 }}>High-Performing Post Examples</h2>
            <p style={{ fontSize: 13, color: "#6b7280", marginBottom: 24 }}>Real post drafts for each product and post type. Copy and adapt.</p>
            <div style={{ display: "flex", gap: 8, marginBottom: 20, flexWrap: "wrap" }}>
              {postExamples.map((p, i) => (
                <button key={i} onClick={() => setExpandedExample(i)} style={{ fontSize: 12, padding: "6px 14px", borderRadius: 20, border: "1px solid", borderColor: expandedExample === i ? "#0077b5" : "#e5e7eb", background: expandedExample === i ? "#0077b5" : "#fff", color: expandedExample === i ? "#fff" : "#374151", cursor: "pointer", fontWeight: expandedExample === i ? 700 : 400 }}>
                  {p.product}: {p.type}
                </button>
              ))}
            </div>
            {expandedExample !== null && (
              <div style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: 10, overflow: "hidden" }}>
                <div style={{ padding: "16px 20px", borderBottom: "1px solid #f3f4f6", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div>
                    <span style={{ fontSize: 12, fontWeight: 700, color: "#0077b5", marginRight: 8 }}>{postExamples[expandedExample].product}</span>
                    <span style={{ fontSize: 12, color: "#6b7280" }}>{postExamples[expandedExample].type}</span>
                  </div>
                  <span style={{ fontSize: 11, padding: "2px 8px", borderRadius: 20, background: "#f0fdf4", color: "#16a34a", fontWeight: 600 }}>{postExamples[expandedExample].label}</span>
                </div>
                <div style={{ padding: 20 }}>
                  <div style={{ fontSize: 14, color: "#111827", whiteSpace: "pre-line", lineHeight: 1.8, marginBottom: 16 }}>{postExamples[expandedExample].post}</div>
                  <CopyBtn text={postExamples[expandedExample].post} />
                </div>
              </div>
            )}
          </div>
        )}

        {tab === 7 && (
          <div>
            <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 4 }}>90-Day Growth Plan</h2>
            <p style={{ fontSize: 13, color: "#6b7280", marginBottom: 24 }}>Three phases. Each builds on the last. Do not skip to phase 3.</p>
            <div style={{ display: "grid", gap: 16 }}>
              {plan90.map((p, i) => (
                <div key={i} style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: 12, overflow: "hidden" }}>
                  <div style={{ background: i === 0 ? "#eff6ff" : i === 1 ? "#f0fdf4" : "#fefce8", padding: "16px 20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div>
                      <div style={{ fontSize: 11, color: "#9ca3af", textTransform: "uppercase", letterSpacing: 2, marginBottom: 2 }}>{p.range}</div>
                      <div style={{ fontSize: 16, fontWeight: 700 }}>{p.phase}: {p.goal}</div>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <div style={{ fontSize: 18, fontWeight: 900, color: i === 0 ? "#3b82f6" : i === 1 ? "#16a34a" : "#d97706" }}>{p.followers}</div>
                      <div style={{ fontSize: 11, color: "#9ca3af" }}>followers</div>
                    </div>
                  </div>
                  <div style={{ padding: 20 }}>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
                      <div>
                        <div style={{ fontSize: 11, color: "#9ca3af", textTransform: "uppercase", letterSpacing: 1, marginBottom: 10 }}>Daily actions</div>
                        {p.daily.map((d, di) => (
                          <div key={di} style={{ display: "flex", gap: 8, marginBottom: 8, fontSize: 13, color: "#374151", lineHeight: 1.5 }}>
                            <span style={{ color: "#0077b5", marginTop: 2 }}>-</span><span>{d}</span>
                          </div>
                        ))}
                      </div>
                      <div>
                        <div style={{ fontSize: 11, color: "#9ca3af", textTransform: "uppercase", letterSpacing: 1, marginBottom: 10 }}>Weekly goals</div>
                        {p.weekly.map((w, wi) => (
                          <div key={wi} style={{ display: "flex", gap: 8, marginBottom: 8, fontSize: 13, color: "#374151", lineHeight: 1.5 }}>
                            <span style={{ color: "#0077b5", marginTop: 2 }}>-</span><span>{w}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div style={{ marginTop: 16, padding: 14, background: "#f9fafb", borderRadius: 8, borderLeft: "3px solid #0077b5" }}>
                      <div style={{ fontSize: 11, color: "#9ca3af", textTransform: "uppercase", letterSpacing: 1, marginBottom: 4 }}>Phase milestone</div>
                      <div style={{ fontSize: 13, color: "#374151" }}>{p.milestone}</div>
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
