import { useMemo } from "react";
import { useTranslation } from "react-i18next";

import {
  blogPosts as staticPosts,
  type BlogPost,
  type BlogPostSection,
} from "@/data/blog-posts";

function localizeSections(
  t: (key: string, options?: { defaultValue?: string }) => string,
  slug: string,
  sections: BlogPostSection[],
): BlogPostSection[] {
  return sections.map((section, index) => {
    const base = `blogPage.posts.${slug}.sections.${index}`;
    const headingKey = `${base}.heading`;
    const heading = section.heading
      ? t(headingKey, { defaultValue: section.heading })
      : undefined;

    const paragraphs = section.paragraphs.map((paragraph, pIndex) =>
      t(`${base}.paragraphs.${pIndex}`, { defaultValue: paragraph }),
    );

    return { heading, paragraphs };
  });
}

export function useLocalizedBlogPosts(): BlogPost[] {
  const { t, i18n } = useTranslation();

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
          author: t(`${key}.author`, { defaultValue: post.author }),
          sections: localizeSections(t, post.slug, post.sections),
        };
      }),
    [t, i18n.language],
  );
}

export function useLocalizedBlogPost(slug: string): BlogPost | undefined {
  const posts = useLocalizedBlogPosts();
  return posts.find((p) => p.slug === slug);
}
