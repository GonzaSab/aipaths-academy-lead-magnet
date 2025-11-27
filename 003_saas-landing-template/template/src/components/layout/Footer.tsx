"use client";

import Link from "next/link";
import { Twitter, Linkedin, Github } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import siteConfig from "@/content/site.json";

const socialIcons = {
  twitter: Twitter,
  linkedin: Linkedin,
  github: Github,
};

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border bg-muted/50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {/* Company Info */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              {t(siteConfig.name)}
            </h3>
            <p className="mt-4 text-sm text-muted-foreground">
              {t(siteConfig.tagline)}
            </p>
            {/* Social Media Icons */}
            <div className="mt-6 flex space-x-4">
              {Object.entries(siteConfig.social).map(([platform, url]) => {
                if (!url) return null;
                const Icon = socialIcons[platform as keyof typeof socialIcons];
                return (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground transition-colors hover:text-accent"
                    aria-label={platform}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Footer Link Groups */}
          {siteConfig.footer.links.map((group) => (
            <div
              key={
                typeof group.title === "string" ? group.title : group.title.en
              }
            >
              <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
                {t(group.title)}
              </h3>
              <ul className="mt-4 space-y-3">
                {group.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {t(item.label)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-border pt-8">
          <p className="text-center text-sm text-muted-foreground">
            &copy; {currentYear} {siteConfig.legal.companyName}. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
