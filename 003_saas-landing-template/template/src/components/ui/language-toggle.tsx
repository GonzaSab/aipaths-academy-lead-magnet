"use client";

import { useLanguage, Language } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";

export function LanguageToggle() {
  const { lang, setLang } = useLanguage();

  const languages: { code: Language; label: string }[] = [
    { code: "en", label: "EN" },
    { code: "es", label: "ES" },
  ];

  return (
    <div className="flex items-center gap-1 text-sm">
      {languages.map((language, index) => (
        <span key={language.code} className="flex items-center">
          <button
            onClick={() => setLang(language.code)}
            className={cn(
              "px-1.5 py-0.5 rounded transition-colors",
              lang === language.code
                ? "text-accent font-medium"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            {language.label}
          </button>
          {index < languages.length - 1 && (
            <span className="text-muted-foreground mx-0.5">|</span>
          )}
        </span>
      ))}
    </div>
  );
}
