
import type { MetadataRoute } from "next";

const siteUrl = "https://www.zsell.in";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    {
      path: "",
      priority: 1.0,
      changeFrequency: "weekly" as const,
    },
    {
      path: "/services",
      priority: 0.9,
      changeFrequency: "monthly" as const,
    },
    {
      path: "/ai-tools",
      priority: 0.9,
      changeFrequency: "monthly" as const,
    },
    {
      path: "/resources",
      priority: 0.8,
      changeFrequency: "weekly" as const,
    },
    {
      path: "/about",
      priority: 0.7,
      changeFrequency: "monthly" as const,
    },
    {
      path: "/contact",
      priority: 0.7,
      changeFrequency: "monthly" as const,
    },
  ];

  return routes.map((route) => ({
    url: `${siteUrl}${route.path}`,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
