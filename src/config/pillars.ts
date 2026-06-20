import {
  Zap,
  Target,
  Globe,
  Pencil
} from 'lucide-astro';

export const pillars = [
  {
    id: 'remote-income',
    name: 'Remote Income',
    label: 'Jobs, Income & Sniping',
    description: 'Tactical protocols for securing high-yield remote opportunities and micro-SaaS revenue.',
    icon: Zap,
    color: 'text-red-500',
    accent: 'bg-red-500/10',
    cta: 'Start Sniping',
    heroImage: '/images/remote work.jpg',
    longDescription: 'The Remote Income pillar focuses on high-speed monetization. From job sniping to data arbitrage and micro-SaaS assets, we build the infrastructure required to generate consistent, location-independent yield.'
  },
  {
    id: 'lead-generation',
    name: 'Lead Generation',
    label: 'Outreach, Systems & Automation',
    description: 'Professional-grade client acquisition frameworks and autonomous lead engines.',
    icon: Target,
    color: 'text-emerald-500',
    accent: 'bg-emerald-500/10',
    cta: 'Activate Systems',
    heroImage: '/images/lead gen.jpg',
    longDescription: 'Lead Generation is the engine of your business. We architect autonomous outreach systems, multi-vector intent scoring, and high-conversion client acquisition loops that decouple growth from manual labor.'
  },
  {
    id: 'geo-arbitrage',
    name: 'Geo-Arbitrage',
    label: 'Lifestyle, Cost & Global Living',
    description: 'Global living strategies, cost-optimization, and sovereign digital nomad protocols.',
    icon: Globe,
    color: 'text-cyan-400',
    accent: 'bg-cyan-400/10',
    cta: 'Engineer Lifestyle',
    heroImage: '/images/geo-arbitrage.jpg',
    longDescription: 'Geo-Arbitrage is the ultimate optimization for the sovereign individual. We leverage global market disconnects to engineer a high-performance lifestyle, significantly reducing burn while maximizing experience and security.'
  },
  {
    id: 'build-in-public',
    name: 'Build in Public',
    label: 'Process, Systems & Transparency',
    description: 'The live documentation of building a one-person business ecosystem from Southeast Asia.',
    icon: Pencil,
    color: 'text-violet-400',
    accent: 'bg-violet-400/10',
    cta: 'Follow the Build',
    heroImage: '/images/build-in-public-pillar.jpeg',
    longDescription: 'Build in Public documents the real journey — wins, failures, systems, and experiments — of constructing a one-person digital business ecosystem from Southeast Asia. Public execution compounds trust and turns transparency into leverage.'
  }
];

export const getPillarById = (id: string) => pillars.find(p => p.id === id);
