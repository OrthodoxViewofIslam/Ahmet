import type { PostFilter } from "./utils/posts";

export interface SiteConfig {
  title: string;
  slogan: string;
  description?: string;
  site: string;
  social: {
    github?: string;
    linkedin?: string;
    email?: string;
    rss?: boolean;
  };
  homepage: PostFilter;
  googleAnalysis?: string;
  search?: boolean;
}

export const siteConfig: SiteConfig = {
  site: "https://ahmet-iota.vercel.app/",

  title: "An Orthodox View of Islam",
  slogan: "Exploring Islam from the lens of the Orthodox Christian Faith",

  description:
    "This site provides Orthodox Christians with resources to defend their faith, assists clergy in understanding Islam, and invites Muslims to discover why Orthodox Christians follow Jesus Christ rather than Muhammad.",

  social: {
    github: "", // ← remove the demo repo link
    linkedin: "", // ← remove or replace with your real profile
    email: "example@gmail.com", // ← update with your actual email
    rss: true,
  },

  homepage: {
    maxPosts: 5, // feel free to show more posts
    tags: [], // leave empty to show all
    excludeTags: [],
  },

  googleAnalysis: "", // add your Google Analytics Measurement ID here if using GA4
  search: true,
};
