"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

export type Language = "en" | "es";

type TranslatableString = { en: string; es: string };

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (obj: TranslatableString | string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>("en");

  useEffect(() => {
    // Check localStorage first, then browser language
    const saved = localStorage.getItem("lang") as Language;
    if (saved && (saved === "en" || saved === "es")) {
      setLangState(saved);
    } else {
      // Detect browser language
      const browserLang = navigator.language.startsWith("es") ? "es" : "en";
      setLangState(browserLang);
    }
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    if (typeof window !== "undefined") {
      localStorage.setItem("lang", newLang);
    }
  };

  const t = (obj: TranslatableString | string): string => {
    if (typeof obj === "string") return obj;
    return obj[lang] || obj.en || "";
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
