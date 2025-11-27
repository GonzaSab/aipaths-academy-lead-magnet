"use client";

import { Accordion, AccordionItem } from "@/components/ui/accordion";
import { useLanguage } from "@/contexts/LanguageContext";
import homeContent from "@/../content/home.json";
import faqContent from "@/../content/faq.json";

export const FAQ = () => {
  const { t } = useLanguage();
  const { faq } = homeContent;

  return (
    <section id={faq.id} className="w-full py-20 bg-[rgb(var(--background))]">
      <div className="container mx-auto px-4 max-w-3xl">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[rgb(var(--text))]">
            {t(faq.title)}
          </h2>
          <p className="text-lg text-[rgb(var(--text))]/70">{t(faq.subtitle)}</p>
        </div>

        {/* FAQ Accordion */}
        <Accordion>
          {faqContent.items.map((item, index) => (
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
