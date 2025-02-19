import { Icon } from "@/components/icon";

export type NavItem = {
  title: string;
  href: string;
  disable?: boolean;
};

export type SiteConfig = {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    x: string;
    github: string;
  };
};

export type MarketingConfig = {
  mainNav: NavItem[];
};

export type SidebarNavItem = {
  title: string;
  disabled?: boolean;
  extarnal?: boolean;
  icon?: keyof typeof Icon;
} & (
  | {
      href: string;
      items?: never;
    }
  | {
      href?: string;
      items: NavItem[];
    }
);

export type DashboardConfig = {
  mainNav: NavItem[];
  sidebarNav: SidevarNavItem[];
};
