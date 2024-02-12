import { MainNavItem } from "@/types";

const links = {
  linkedin: "https://www.linkedin.com/in/jose-luis-capote/",
  github: "https://github.com/jlcapor/MostoParts-cali",
};

export const siteConfig = {
  name: "Digital Store",
  links,
  mainNav: [
    {
      title: "Inicio",
      href: "/",
      icon: 'home',
    },
    {
      title: "Productos",
      href: "/products",
      icon: 'store',
    },
   

    {
      title: "Contacto",
      href: "/contact",
      icon: 'contact',
    },
    {
      title: "Blog",
      href: "/blog",
      icon: 'blog',
    },
  ] satisfies MainNavItem[],
};

export type SiteConfig = typeof siteConfig;
