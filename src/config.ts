import type { PostFilter } from "./utils/posts";

export interface SiteConfig {
  title: string;
  slogan: string;
  description?: string;
  site: string,
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
  site: "https://example.com/", // your site url
  title: "An Orthodox View Of Islam     ",
  slogan: "Exploring everything about Islam from the lens of the Orthodox Faith",
  description: "The purpose of this site is to provide Orthodox Christians the necessary tools to defend their faith, for clergy to better understand this faith and for Muslims to learn why Orthodox Christians accept Jesus as Lord and not Muhammad",
  social: {
    github: "https://github.com/larry-xue/astro-zen-blog", // leave empty if you don't want to show the github
    linkedin: "https://www.linkedin.com/in/someone/", // leave empty if you don't want to show the linkedin
    email: "example@gmail.com", // leave empty if you don't want to show the email
    rss: true, // set this to false if you don't want to provide an rss feed
  },
  homepage: {
    maxPosts: 3,
    tags: [],
    excludeTags: [],
  },
  googleAnalysis: "", // your google analysis id
  search: true, // set this to false if you don't want to provide a search feature
};
