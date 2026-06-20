import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context: any) {
  const blog = await getCollection('blog', ({ data }) => !data.draft);

  const sorted = blog
    .filter(p => p.data.category !== 'Pillar Hub' && p.data.category !== 'Service')
    .sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime());

  return rss({
    title: 'ExpatBuildr — 4 Paths to Sovereignty',
    description: 'Protocols for remote income, geo-arbitrage, lead generation, and AI automation. Free weekly intel.',
    site: context.site,
    items: sorted.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/blog/${post.id.replace(/\.mdx?$/, '')}/`,
      categories: [
        ...(post.data.pillarId ? [post.data.pillarId] : []),
        post.data.category,
        ...post.data.tags,
      ],
      author: 'exoticdevlabs@gmail.com (ExpatBuildr)',
      ...(post.data.ogImage || post.data.heroImage
        ? {
            enclosure: {
              url: new URL(
                post.data.ogImage || post.data.heroImage!,
                context.site
              ).toString(),
              type: 'image/png',
              length: 0,
            },
          }
        : {}),
    })),
    customData: [
      '<language>en-us</language>',
      '<managingEditor>exoticdevlabs@gmail.com (ExpatBuildr)</managingEditor>',
      '<webMaster>exoticdevlabs@gmail.com (ExpatBuildr)</webMaster>',
      '<image>',
      `  <url>${new URL('/images/logo.jpg', context.site).toString()}</url>`,
      '  <title>ExpatBuildr</title>',
      `  <link>${context.site.toString()}</link>`,
      '</image>',
      '<ttl>60</ttl>',
    ].join('\n'),
  });
}
