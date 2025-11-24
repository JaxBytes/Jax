import { allPosts, Post } from 'contentlayer/generated';
import { compareDesc } from 'date-fns';
import RSS from 'rss';
import { siteConfig } from '@/siteconfig';

export interface MetaData {
  title: string;
  slug: string;
  description: string;
  publish: boolean;
  date: string;
  tags: string[];
}

export async function GET() {
  const feed = new RSS({
    title: siteConfig.site.title,
    description: siteConfig.site.description,
    site_url: siteConfig.site.url,
    feed_url: `${siteConfig.site.url}/feed.xml`,
    language: 'en',
    image_url: siteConfig.site.rssImageUrl,
  });
  const data = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  data.forEach((post: Post) => {
    feed.item({
      title: post.title,
      guid: post.slug,
      url: `${siteConfig.site.url}/posts/${post.slug}`,
      description: `${post.description || ''} <br/> <a href="${siteConfig.site.url}/posts/${post.slug}">Continue to read</a>`,
      date: new Date(post.date),
    });
  });

  return new Response(feed.xml(), {
    headers: {
      'content-type': 'application/xml',
    },
  });
}
