import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { useTranslation } from "react-i18next";

import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { blogPosts, getBlogPost } from "@/data/blog-posts";
import { useLocalizedBlogPost, useLocalizedBlogPosts } from "@/hooks/use-localized-blog";

export const Route = createFileRoute("/blog/$slug")({
  head: ({ params }) => {
    const post = getBlogPost(params.slug);
    return {
      meta: [
        {
          title: post
            ? `${post.title} — Starlights Visuals Blog`
            : "Blog — Starlights Visuals",
        },
        {
          name: "description",
          content: post?.excerpt ?? "Starlights Visuals studio blog.",
        },
      ],
    };
  },
  loader: ({ params }) => {
    const post = getBlogPost(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  component: BlogPostPage,
});

function BlogPostPage() {
  const { t } = useTranslation();
  const { post: staticPost } = Route.useLoaderData() as {
    post: NonNullable<ReturnType<typeof getBlogPost>>;
  };
  const post = useLocalizedBlogPost(staticPost.slug) ?? staticPost;
  const allPosts = useLocalizedBlogPosts();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <article>
        <header className="relative isolate border-b border-border/40">
          <img
            src={post.image}
            alt=""
            className="absolute inset-0 -z-10 h-full w-full object-cover opacity-25"
          />
          <div className="absolute inset-0 -z-10 bg-background/80" />
          <div className="absolute inset-0 -z-10 grid-bg opacity-40" />
          <div className="mx-auto max-w-3xl px-6 py-20 md:py-28">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 font-display text-xs uppercase tracking-widest text-muted-foreground transition hover:text-neon-green"
            >
              <ArrowLeft className="h-4 w-4" /> {t("blogPage.backToBlog")}
            </Link>
            <p className="mt-8 font-display text-[10px] uppercase tracking-widest text-neon-green">
              {post.category}
            </p>
            <h1 className="mt-4 font-display text-4xl tracking-tight text-balance md:text-5xl">
              {post.title}
            </h1>
            <p className="mt-4 text-sm text-muted-foreground">
              {post.date} · {post.readTime}
            </p>
          </div>
        </header>

        <div className="mx-auto max-w-3xl px-6 py-16 md:py-20">
          <p className="text-lg leading-relaxed text-muted-foreground">{post.excerpt}</p>
          <div className="mt-10 space-y-6 text-base leading-relaxed text-foreground/90">
            <p>{t("blogPage.postBody1", { category: post.category.toLowerCase() })}</p>
            <p>{t("blogPage.postBody2")}</p>
            <p>{t("blogPage.postBody3")}</p>
          </div>
          <Link
            to="/contact"
            className="mt-12 inline-flex items-center justify-center rounded-full bg-neon-green px-8 py-3.5 font-display text-sm uppercase tracking-widest text-background transition hover:glow-blue"
          >
            {t("blogPage.startProject")}
          </Link>
        </div>
      </article>

      <section className="border-t border-border/40 bg-card/30">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-14">
          <h2 className="font-display text-2xl tracking-tight">{t("blogPage.moreFromJournal")}</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {allPosts
              .filter((p) => p.slug !== post.slug)
              .slice(0, 3)
              .map((p) => (
                <Link
                  key={p.slug}
                  to="/blog/$slug"
                  params={{ slug: p.slug }}
                  className="group border border-border bg-background p-5 transition hover:border-neon-green"
                >
                  <p className="font-display text-[10px] uppercase tracking-widest text-neon-green">
                    {p.category}
                  </p>
                  <h3 className="mt-2 font-display text-lg tracking-tight group-hover:text-neon-green">
                    {p.title}
                  </h3>
                </Link>
              ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
