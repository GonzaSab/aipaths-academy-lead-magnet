"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import legalData from "@/../content/legal.json";

interface LegalSection {
  title: string | { en: string; es: string };
  content: string | { en: string; es: string };
}

const labels = {
  lastUpdated: { en: "Last updated:", es: "Última actualización:" },
};

export default function TermsPage() {
  const { t } = useLanguage();
  const { terms } = legalData;

  return (
    <main className="min-h-screen">
      {/* Page Header */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {t(terms.title)}
            </h1>
            <p className="text-muted-foreground">
              {t(labels.lastUpdated)} {terms.lastUpdated}
            </p>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-slate">
            <div className="space-y-12">
              {terms.sections.map((section: LegalSection, index: number) => (
                <div key={index}>
                  <h2 className="text-2xl font-bold mb-4 text-foreground">
                    {t(section.title)}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {t(section.content)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
