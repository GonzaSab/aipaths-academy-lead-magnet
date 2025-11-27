import siteData from "../../content/site.json";

type TranslatableString = { en: string; es: string } | string;

export interface NavigationItem {
  label: TranslatableString;
  href: string;
}

export interface FooterLink {
  label: TranslatableString;
  href: string;
}

export interface FooterSection {
  title: TranslatableString;
  items: FooterLink[];
}

export interface SocialLinks {
  twitter?: string;
  linkedin?: string;
  github?: string;
}

export interface LegalInfo {
  companyName: string;
  email: string;
  address?: string;
}

export interface LogoConfig {
  text: TranslatableString;
  showIcon?: boolean;
  image?: string;
}

export interface SiteConfig {
  name: TranslatableString;
  tagline: TranslatableString;
  description: TranslatableString;
  url: string;
  accentColor: string;
  logo: LogoConfig;
  navigation: NavigationItem[];
  footer: {
    links: FooterSection[];
  };
  social: SocialLinks;
  legal: LegalInfo;
}

export const siteConfig = siteData as SiteConfig;
