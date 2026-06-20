import { getCollection } from 'astro:content';

export async function GET(context: any) {
  const blog = await getCollection('blog', ({ data }) => !data.draft);
  const site = context.site.toString();
  
  // IndexNow API configuration
  const INDEXNOW_KEY = "eb8248d2036248cc8da2a80695123d9b"; // Placeholder - User should update
  const INDEXNOW_API = "https://www.bing.com/indexnow";

  const urlList = blog.map(post => new URL(`/blog/${post.id}/`, site).toString());
  
  // Include home and blog index
  urlList.push(site);
  urlList.push(new URL('/blog/', site).toString());

  const payload = {
    host: new URL(site).hostname,
    key: INDEXNOW_KEY,
    keyLocation: new URL(`/${INDEXNOW_KEY}.txt`, site).toString(),
    urlList: urlList
  };

  try {
    const response = await fetch(INDEXNOW_API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify(payload)
    });

    return new Response(JSON.stringify({
      status: response.status,
      message: response.statusText,
      urls_pinged: urlList.length
    }), {
      headers: { 'content-type': 'application/json' }
    });
  } catch (error: any) {
    return new Response(JSON.stringify({
      error: error.message
    }), {
      status: 500,
      headers: { 'content-type': 'application/json' }
    });
  }
}
