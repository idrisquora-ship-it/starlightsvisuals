import { useMemo } from "react";
import { useTranslation } from "react-i18next";

import { blogPosts as staticPosts, type BlogPost } from "@/data/blog-posts";

export function useLocalizedBlogPosts(): BlogPost[] {
  const { t } = useTranslation();

  return useMemo(
    () =>
      staticPosts.map((post) => {
        const key = `blogPage.posts.${post.slug}`;
        return {
          ...post,
          title: t(`${key}.title`, { defaultValue: post.title }),
          excerpt: t(`${key}.excerpt`, { defaultValue: post.excerpt }),
          category: t(`${key}.category`, { defaultValue: post.category }),
          date: t(`${key}.date`, { defaultValue: post.date }),
          readTime: t(`${key}.readTime`, { defaultValue: post.readTime }),
        };
      }),
    [t],
  );
}

export function useLocalizedBlogPost(slug: string): BlogPost | undefined {
  const posts = useLocalizedBlogPosts();
  return posts.find((p) => p.slug === slug);
}
