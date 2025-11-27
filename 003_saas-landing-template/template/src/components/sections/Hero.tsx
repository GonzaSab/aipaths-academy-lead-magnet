"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import homeContent from "@/../content/home.json";

export const Hero = () => {
  const { t } = useLanguage();
  const { hero } = homeContent;
  const [imageError, setImageError] = useState(false);

  const showImage = hero.image?.src && !imageError;

  return (
    <section className="relative w-full py-20 md:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[rgb(var(--accent))]/5 via-transparent to-[rgb(var(--accent))]/10 pointer-events-none" />

      {/* Decorative blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[rgb(var(--accent))]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[rgb(var(--accent))]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container relative mx-auto px-4 max-w-6xl">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-[rgb(var(--accent))]/10 text-[rgb(var(--accent))] text-sm font-medium">
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[rgb(var(--accent))] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[rgb(var(--accent))]"></span>
            </span>
            {t({ en: "Now in early access", es: "Ahora en acceso anticipado" })}
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[rgb(var(--text))] max-w-4xl leading-tight">
            {t(hero.headline)}
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-[rgb(var(--text))]/70 max-w-2xl leading-relaxed">
            {t(hero.subheadline)}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link href={hero.primaryCTA.href}>
              <Button variant="default" size="lg" className="text-base px-8 py-6 shadow-lg shadow-[rgb(var(--accent))]/25 hover:shadow-xl hover:shadow-[rgb(var(--accent))]/30 transition-all">
                {t(hero.primaryCTA.text)}
              </Button>
            </Link>
            <Link href={hero.secondaryCTA.href}>
              <Button variant="outline" size="lg" className="text-base px-8 py-6">
                {t(hero.secondaryCTA.text)}
              </Button>
            </Link>
          </div>

          {/* Social proof */}
          <div className="flex items-center gap-2 pt-4 text-sm text-[rgb(var(--text))]/60">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full bg-gradient-to-br from-[rgb(var(--accent))]/30 to-[rgb(var(--accent))]/60 border-2 border-white"
                />
              ))}
            </div>
            <span>{t({ en: "Join 500+ on the waitlist", es: "Únete a 500+ en la lista de espera" })}</span>
          </div>

          {/* Hero Image - only show if valid */}
          {showImage && (
            <div className="mt-12 w-full max-w-4xl">
              <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-[rgb(var(--muted))] border border-[rgb(var(--border))] shadow-2xl">
                <Image
                  src={hero.image.src}
                  alt={t(hero.image.alt)}
                  fill
                  className="object-cover"
                  priority
                  onError={() => setImageError(true)}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
