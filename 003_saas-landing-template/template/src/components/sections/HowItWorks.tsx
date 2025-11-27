"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import homeContent from "@/../content/home.json";

interface StepProps {
  number: number;
  title: { en: string; es: string };
  description: { en: string; es: string };
  isLast?: boolean;
}

const Step = ({ number, title, description, isLast }: StepProps) => {
  const { t } = useLanguage();
  return (
    <div className="relative flex flex-col md:flex-row gap-6 items-start">
      {/* Step Number Circle */}
      <div className="flex-shrink-0 relative">
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[rgb(var(--accent))] to-[rgb(var(--accent))]/80 text-white flex items-center justify-center text-2xl font-bold shadow-lg shadow-[rgb(var(--accent))]/25">
          {number}
        </div>

        {/* Connecting Line */}
        {!isLast && (
          <div className="hidden md:block absolute top-16 left-1/2 w-0.5 h-24 bg-gradient-to-b from-[rgb(var(--accent))]/50 to-[rgb(var(--accent))]/10 -translate-x-1/2" />
        )}
      </div>

      {/* Step Content */}
      <div className="flex-1 pt-2">
        <h3 className="text-2xl font-semibold text-[rgb(var(--text))] mb-3">
          {t(title)}
        </h3>
        <p className="text-[rgb(var(--text))]/70 text-lg leading-relaxed">{t(description)}</p>
      </div>
    </div>
  );
};

export const HowItWorks = () => {
  const { t } = useLanguage();
  const { howItWorks } = homeContent;

  return (
    <section id={howItWorks.id} className="w-full py-20 bg-[rgb(var(--muted))]/50">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[rgb(var(--text))]">
            {t(howItWorks.title)}
          </h2>
          <p className="text-lg text-[rgb(var(--text))]/70 max-w-2xl mx-auto">
            {t(howItWorks.subtitle)}
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-12">
          {howItWorks.steps.map((step, index) => (
            <Step
              key={index}
              number={step.number}
              title={step.title}
              description={step.description}
              isLast={index === howItWorks.steps.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
