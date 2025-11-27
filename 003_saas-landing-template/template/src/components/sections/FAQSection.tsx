"use client";

import { Accordion, AccordionItem } from "@/components/ui/accordion";
import { useLanguage } from "@/contexts/LanguageContext";

type TranslatableString = { en: string; es: string } | string;

interface FAQSectionProps {
  id?: string;
  title: TranslatableString;
  subtitle?: TranslatableString;
  items: Array<{
    question: TranslatableString;
    answer: TranslatableString;
  }>;
}

export const FAQSection = ({ id, title, subtitle, items }: FAQSectionProps) => {
  const { t } = useLanguage();

  return (
    <section id={id} className="w-full py-20 bg-[var(--text)]/5">
      <div className="container mx-auto px-4 max-w-3xl">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text)]">
            {t(title)}
          </h2>
          {subtitle && (
            <p className="text-lg text-[var(--text)]/70">{t(subtitle)}</p>
          )}
        </div>

        {/* FAQ Accordion */}
        <Accordion>
          {items.map((item, index) => (
            <AccordionItem
              key={index}
              title={t(item.question)}
              defaultOpen={index === 0}
            >
              {t(item.answer)}
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
