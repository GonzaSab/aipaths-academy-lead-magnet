"use client";

import { motion, type Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/hooks/useTranslation";
import content from "@/content/home.json";

const Hero = () => {
  const { t } = useTranslation();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  const handleScrollToWaitlist = () => {
    const waitlistSection = document.querySelector("#waitlist");
    if (waitlistSection) {
      waitlistSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleScrollToContact = () => {
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-b from-background via-background to-muted/20 px-4 py-20">
      {/* Decorative gradient blobs */}
      <motion.div
        initial={{ y: 0 }}
        animate={{
          y: [-10, 10, -10],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-1/4 top-1/4 size-96 rounded-full bg-gradient-to-br from-gradient-from/30 to-gradient-to/30 blur-3xl"
        aria-hidden="true"
      />
      <motion.div
        initial={{ y: 0 }}
        animate={{
          y: [-10, 10, -10],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute bottom-1/4 right-1/4 size-80 rounded-full bg-gradient-to-br from-gradient-to/20 to-gradient-from/20 blur-3xl"
        aria-hidden="true"
      />
      <motion.div
        initial={{ y: 0 }}
        animate={{
          y: [-10, 10, -10],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute right-1/3 top-1/3 size-64 rounded-full bg-gradient-to-br from-gradient-from/20 to-gradient-to/20 blur-3xl"
        aria-hidden="true"
      />

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto max-w-5xl text-center"
      >
        {/* Headline */}
        <motion.h1
          variants={itemVariants}
          className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
        >
          <span className="bg-gradient-to-r from-foreground via-foreground to-foreground/80 bg-clip-text text-transparent">
            {t(content.hero.headline)}
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={itemVariants}
          className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground sm:text-xl md:text-2xl"
        >
          {t(content.hero.subheadline)}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button
            size="lg"
            onClick={handleScrollToWaitlist}
            className="w-full text-base sm:w-auto sm:px-8 sm:py-6 sm:text-lg"
          >
            {t(content.hero.ctaText)}
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={handleScrollToContact}
            className="w-full text-base sm:w-auto sm:px-8 sm:py-6 sm:text-lg"
          >
            {t(content.hero.ctaSecondaryText)}
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
