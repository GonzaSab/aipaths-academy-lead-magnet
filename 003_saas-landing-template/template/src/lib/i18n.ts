export type TranslatableString = {
  en: string;
  es: string;
};

export type TranslatableContent<T> = {
  [K in keyof T]: T[K] extends string
    ? TranslatableString
    : T[K] extends object
      ? TranslatableContent<T[K]>
      : T[K];
};

// Helper to create bilingual content
export function bilingual(en: string, es: string): TranslatableString {
  return { en, es };
}
