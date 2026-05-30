import { createFileRoute, notFound, Outlet } from "@tanstack/react-router";

import { getCategory } from "@/lib/portfolio-works";

export const Route = createFileRoute("/works/$category")({
  loader: ({ params }) => {
    const category = getCategory(params.category);
    if (!category) throw notFound();
    return { category };
  },
  component: WorksCategoryLayout,
});

function WorksCategoryLayout() {
  return <Outlet />;
}
