"use client";

import * as Icons from "lucide-react";
import { LucideIcon } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import homeContent from "@/../content/home.json";

type IconName = keyof typeof Icons;

interface FeatureCardProps {
  icon: string;
  title: { en: string; es: string };
  description: { en: string; es: string };
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  const { t } = useLanguage();
  // Convert kebab-case to PascalCase for Lucide icon names
  const iconName = icon
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("") as IconName;

  const IconComponent = (Icons[iconName] as LucideIcon) || Icons.Circle;

  return (
    <div className="group relative p-6 rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--background))] transition-all hover:border-[rgb(var(--accent))]/50 hover:shadow-xl hover:shadow-[rgb(var(--accent))]/10 hover:-translate-y-1">
      <div className="flex flex-col items-start space-y-4">
        {/* Icon */}
        <div className="p-3 rounded-xl bg-[rgb(var(--accent))]/10 text-[rgb(var(--accent))] transition-transform group-hover:scale-110">
          <IconComponent className="h-6 w-6" />
        </div>

        {/* Title */}
        <h3 className="text-xl font-semibold text-[rgb(var(--text))]">{t(title)}</h3>

        {/* Description */}
        <p className="text-[rgb(var(--text))]/70 leading-relaxed">{t(description)}</p>
      </div>
    </div>
  );
};

export const Features = () => {
  const { t } = useLanguage();
  const { features } = homeContent;

  return (
    <section id={features.id} className="w-full py-20 bg-[rgb(var(--muted))]/50">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[rgb(var(--text))]">
            {t(features.title)}
          </h2>
          <p className="text-lg text-[rgb(var(--text))]/70 max-w-2xl mx-auto">
            {t(features.subtitle)}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.items.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
