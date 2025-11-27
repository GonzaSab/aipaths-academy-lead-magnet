"use client";

import { useState, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useLanguage } from "@/contexts/LanguageContext";
import homeContent from "@/../content/home.json";
import { ArrowRight, Sparkles } from "lucide-react";

type MessageState = {
  type: "success" | "error" | null;
  text: string;
};

export const WaitlistCTA = () => {
  const { t } = useLanguage();
  const { waitlist } = homeContent;
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<MessageState>({
    type: null,
    text: "",
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage({ type: null, text: "" });

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setMessage({
          type: "success",
          text: t(waitlist.successMessage),
        });
        setEmail("");
      } else {
        const data = await response.json();
        setMessage({
          type: "error",
          text: data.error || t(waitlist.errorMessage),
        });
      }
    } catch {
      setMessage({
        type: "error",
        text: t(waitlist.errorMessage),
      });
    } finally {
      setIsLoading(false);
    }
  };

  const labels = {
    joining: { en: "Joining...", es: "Uniéndose..." },
  };

  return (
    <section
      id={waitlist.id}
      className="relative w-full py-24 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[rgb(var(--accent))] via-[rgb(var(--accent))] to-[rgb(var(--accent))]/80" />

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      </div>

      <div className="container relative mx-auto px-4 max-w-4xl">
        <div className="text-center space-y-6">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/20 mb-4">
            <Sparkles className="w-8 h-8 text-white" />
          </div>

          {/* Section Header */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            {t(waitlist.title)}
          </h2>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            {t(waitlist.subtitle)}
          </p>

          {/* Email Form */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto mt-8"
          >
            <Input
              type="email"
              placeholder={t(waitlist.placeholder)}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={isLoading}
              className="flex-1 h-14 bg-white text-[rgb(var(--text))] border-0 text-base placeholder:text-[rgb(var(--text))]/50 focus-visible:ring-2 focus-visible:ring-white/50"
            />
            <Button
              type="submit"
              disabled={isLoading}
              className="h-14 px-8 bg-white text-[rgb(var(--accent))] hover:bg-white/90 font-semibold text-base transition-all hover:scale-105"
            >
              {isLoading ? t(labels.joining) : t(waitlist.buttonText)}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </form>

          {/* Status Messages */}
          {message.type && (
            <div
              className={`mt-6 p-4 rounded-xl ${
                message.type === "success"
                  ? "bg-green-500/20 border border-green-300/50"
                  : "bg-red-500/20 border border-red-300/50"
              }`}
            >
              <p className="text-white font-medium">{message.text}</p>
            </div>
          )}

          {/* Trust badge */}
          <p className="text-white/70 text-sm pt-4">
            {t({ en: "No spam, ever. Unsubscribe anytime.", es: "Sin spam, nunca. Cancela cuando quieras." })}
          </p>
        </div>
      </div>
    </section>
  );
};
