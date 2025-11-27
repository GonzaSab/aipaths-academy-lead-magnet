"use client";

import { Heart, Target, Shield, Rocket, LucideIcon } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

const iconMap: Record<string, LucideIcon> = {
  heart: Heart,
  target: Target,
  shield: Shield,
  rocket: Rocket,
};

type TranslatableString = { en: string; es: string } | string;

interface ValueItem {
  icon: string;
  title: TranslatableString;
  description: TranslatableString;
}

interface AboutContentProps {
  storyTitle: TranslatableString;
  storyContent: TranslatableString[];
  valuesTitle: TranslatableString;
  valuesItems: ValueItem[];
  ctaTitle: TranslatableString;
  ctaSubtitle: TranslatableString;
  ctaButtonText: TranslatableString;
  ctaButtonHref: string;
}

export function AboutContent({
  storyTitle,
  storyContent,
  valuesTitle,
  valuesItems,
  ctaTitle,
  ctaSubtitle,
  ctaButtonText,
  ctaButtonHref,
}: AboutContentProps) {
  const { t } = useLanguage();

  return (
    <div className="space-y-20">
      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              {t(storyTitle)}
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground">
              {storyContent.map((paragraph, index) => (
                <p key={index}>{t(paragraph)}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            {t(valuesTitle)}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {valuesItems.map((value, index) => {
              const Icon = iconMap[value.icon] || Heart;
              return (
                <div
                  key={index}
                  className="bg-background p-6 rounded-lg border text-center"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    {t(value.title)}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {t(value.description)}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center bg-primary text-primary-foreground rounded-lg p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t(ctaTitle)}
            </h2>
            <p className="text-lg mb-8 opacity-90">{t(ctaSubtitle)}</p>
            <Link
              href={ctaButtonHref}
              className="inline-flex items-center justify-center rounded-md bg-background text-foreground px-8 py-3 text-sm font-medium shadow transition-colors hover:bg-background/90"
            >
              {t(ctaButtonText)}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
