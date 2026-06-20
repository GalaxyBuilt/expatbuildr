import { getCollection } from 'astro:content';

export async function GET(context: any) {
  const blog = await getCollection('blog', ({ data }) => !data.draft);

  const sorted = blog
    .filter(p => p.data.category !== 'Pillar Hub' && p.data.category !== 'Service')
    .sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime());

  const feed = {
    version: 'https://jsonfeed.org/version/1.1',
    title: 'ExpatBuildr — 4 Paths to Sovereignty',
    home_page_url: context.site.toString(),
    feed_url: new URL('/feed.json', context.site).toString(),
    description: 'Protocols for remote income, geo-arbitrage, lead generation, and AI automation. Free weekly intel.',
    icon: new URL('/logo.jpg', context.site).toString(),
    favicon: new URL('/favicon-32x32.png', context.site).toString(),
    language: 'en-US',
    authors: [
      {
        name: 'ExpatBuildr',
        url: context.site.toString(),
        avatar: new URL('/logo.jpg', context.site).toString(),
      },
    ],
    items: sorted.map((post) => {
      const url = new URL(`/blog/${post.id.replace(/\.mdx?$/, '')}/`, context.site).toString();
      const image = post.data.ogImage || post.data.heroImage;
      return {
        id: url,
        url,
        title: post.data.title,
        summary: post.data.description,
        date_published: post.data.pubDate.toISOString(),
        authors: [{ name: 'ExpatBuildr', url: context.site.toString() }],
        tags: [
          ...(post.data.pillarId ? [post.data.pillarId] : []),
          post.data.category,
          ...post.data.tags,
        ],
        ...(image
          ? { image: new URL(image, context.site).toString() }
          : {}),
      };
    }),
  };

  return new Response(JSON.stringify(feed, null, 2), {
    headers: {
      'content-type': 'application/feed+json; charset=utf-8',
    },
  });
}
