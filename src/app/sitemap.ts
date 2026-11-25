import type { MetadataRoute } from "next";
import { profile } from "@/data/profile";
import { seoPages } from "@/data/seo";

/** Every route in seoPages, so the sitemap can't miss a page. */
export default function sitemap(): MetadataRoute.Sitemap {
  return Object.keys(seoPages).map((route) => ({
    url: new URL(route, profile.links.portfolio).toString(),
    changeFrequency: "monthly",
    priority: route === "/" ? 1 : route.split("/").length > 2 ? 0.6 : 0.8,
  }));
}
