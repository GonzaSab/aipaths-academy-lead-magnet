"use client";

import Link from "next/link";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";

interface PricingTier {
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
  highlighted: boolean;
  badge?: { en: string; es: string };
}

interface PricingTiersProps {
  tiers: PricingTier[];
  isYearly: boolean;
}

const labels = {
  month: { en: "month", es: "mes" },
  year: { en: "year", es: "año" },
  save: { en: "Save", es: "Ahorra" },
  perYear: { en: "per year", es: "por año" },
};

export function PricingTiers({ tiers, isYearly }: PricingTiersProps) {
  const { t } = useLanguage();
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {tiers.map((tier, index) => (
        <div
          key={index}
          className={cn(
            "relative bg-background border rounded-lg p-8 flex flex-col",
            tier.highlighted && "ring-2 ring-primary shadow-xl"
          )}
        >
          {tier.badge && (
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <span className="bg-primary text-primary-foreground text-sm font-medium px-3 py-1 rounded-full">
                {t(tier.badge)}
              </span>
            </div>
          )}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-2">{t(tier.name)}</h3>
            <p className="text-muted-foreground text-sm mb-4">
              {t(tier.description)}
            </p>
            <div className="flex items-baseline gap-1">
              <span className="text-4xl font-bold">
                {tier.currency}
                {isYearly ? tier.price.yearly : tier.price.monthly}
              </span>
              {tier.price.monthly > 0 && (
                <span className="text-muted-foreground">
                  /{isYearly ? t(labels.year) : t(labels.month)}
                </span>
              )}
            </div>
            {isYearly && tier.price.yearly > 0 && (
              <p className="text-sm text-muted-foreground mt-1">
                {t(labels.save)} {tier.currency}
                {tier.price.monthly * 12 - tier.price.yearly}{" "}
                {t(labels.perYear)}
              </p>
            )}
          </div>
          <ul className="space-y-3 mb-8 flex-1">
            {tier.features.map((feature, featureIndex) => (
              <li key={featureIndex} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm">{t(feature)}</span>
              </li>
            ))}
          </ul>
          <Link
            href={tier.cta.href}
            className={cn(
              "w-full inline-flex items-center justify-center rounded-md px-8 py-3 text-sm font-medium shadow transition-colors",
              tier.highlighted
                ? "bg-primary text-primary-foreground hover:bg-primary/90"
                : "border border-input bg-background hover:bg-accent hover:text-accent-foreground"
            )}
          >
            {t(tier.cta.text)}
          </Link>
        </div>
      ))}
    </div>
  );
}
