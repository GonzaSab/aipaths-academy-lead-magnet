"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";
import homeContent from "@/../content/home.json";
import pricingContent from "@/../content/pricing.json";
import { Check } from "lucide-react";

// Note: This component now displays all pricing on the landing page
// The separate /pricing page has been removed

interface PricingCardProps {
  name: { en: string; es: string };
  description: { en: string; es: string };
  price: {
    monthly: number;
    yearly: number;
  };
  currency: string;
  features: Array<{ en: string; es: string }>;
  cta: {
    text: { en: string; es: string };
    href: string;
  };
  highlighted?: boolean;
  badge?: { en: string; es: string };
}

const PricingCard = ({
  name,
  description,
  price,
  currency,
  features,
  cta,
  highlighted,
  badge,
}: PricingCardProps) => {
  const { t } = useLanguage();
  return (
    <div
      className={cn(
        "relative flex flex-col p-8 rounded-2xl border bg-[rgb(var(--background))] transition-all hover:shadow-xl h-full",
        highlighted
          ? "border-[rgb(var(--accent))] shadow-lg shadow-[rgb(var(--accent))]/20 md:scale-105 z-10"
          : "border-[rgb(var(--border))] hover:border-[rgb(var(--accent))]/30"
      )}
    >
      {/* Badge */}
      {badge && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="bg-gradient-to-r from-[rgb(var(--accent))] to-[rgb(var(--accent))]/80 text-white px-4 py-1.5 rounded-full text-sm font-medium shadow-lg">
            {t(badge)}
          </span>
        </div>
      )}

      {/* Plan Name */}
      <h3 className="text-2xl font-bold text-[rgb(var(--text))]">{t(name)}</h3>

      {/* Description */}
      <p className="text-[rgb(var(--text))]/70 mt-2 mb-6">{t(description)}</p>

      {/* Price */}
      <div className="mb-6">
        <div className="flex items-baseline gap-1">
          <span className="text-4xl font-bold text-[rgb(var(--text))]">
            {currency}
            {price.monthly}
          </span>
          <span className="text-[rgb(var(--text))]/70">/month</span>
        </div>
        {price.yearly > 0 && (
          <p className="text-sm text-[rgb(var(--text))]/60 mt-1">
            or {currency}
            {price.yearly}/year
          </p>
        )}
      </div>

      {/* Features List */}
      <ul className="space-y-3 mb-8 flex-1">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <Check className="h-5 w-5 text-[rgb(var(--accent))] flex-shrink-0 mt-0.5" />
            <span className="text-[rgb(var(--text))]/80">{t(feature)}</span>
          </li>
        ))}
      </ul>

      {/* CTA Button */}
      <Link href={cta.href} className="w-full">
        <Button
          variant={highlighted ? "default" : "outline"}
          className={cn(
            "w-full",
            highlighted && "shadow-lg shadow-[rgb(var(--accent))]/25"
          )}
        >
          {t(cta.text)}
        </Button>
      </Link>
    </div>
  );
};

export const PricingPreview = () => {
  const { t } = useLanguage();
  const { pricingPreview } = homeContent;
  const firstThreeTiers = pricingContent.tiers.slice(0, 3);

  return (
    <section id={pricingPreview.id} className="w-full py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[rgb(var(--text))]">
            {t(pricingPreview.title)}
          </h2>
          <p className="text-lg text-[rgb(var(--text))]/70 max-w-2xl mx-auto">
            {t(pricingPreview.subtitle)}
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {firstThreeTiers.map((tier, index) => (
            <PricingCard
              key={index}
              name={tier.name}
              description={tier.description}
              price={tier.price}
              currency={tier.currency}
              features={tier.features}
              cta={tier.cta}
              highlighted={tier.highlighted}
              badge={tier.badge}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
