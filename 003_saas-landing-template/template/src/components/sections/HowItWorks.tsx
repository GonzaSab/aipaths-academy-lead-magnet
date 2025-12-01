"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useTranslation } from "@/hooks/useTranslation";
import homeContent from "@/content/home.json";

export default function HowItWorks() {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const steps = homeContent.howItWorks.steps;

  return (
    <section
      id="how-it-works"
      ref={sectionRef}
      className="relative py-20 md:py-32 bg-gradient-to-b from-background to-muted/20 overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-from/5 dark:bg-gradient-from/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to/5 dark:bg-gradient-to/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t(homeContent.howItWorks.sectionTitle)}
          </h2>
          <div className="w-20 h-1 bg-brand-gradient mx-auto rounded-full" />
        </motion.div>

        {/* Steps Container */}
        <div className="relative max-w-6xl mx-auto">
          {/* Desktop Connecting Line */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
              className="h-full bg-brand-gradient origin-left"
              style={{ transformOrigin: "left" }}
            />
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.stepNumber}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2,
                  ease: "easeOut",
                }}
                className="relative"
              >
                {/* Step Card */}
                <div className="relative bg-card rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-border">
                  {/* Step Number Circle */}
                  <div className="flex justify-center mb-6">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : {}}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.2 + 0.3,
                        type: "spring",
                        stiffness: 200,
                      }}
                      className="relative"
                    >
                      {/* Pulsing background glow */}
                      <motion.div
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.5, 0.8, 0.5],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.2,
                        }}
                        className="absolute inset-0 bg-brand-gradient rounded-full blur-md"
                      />

                      {/* Number circle */}
                      <div className="relative w-16 h-16 bg-brand-gradient rounded-full flex items-center justify-center shadow-lg">
                        <span className="text-2xl font-bold text-primary-foreground">
                          {step.stepNumber}
                        </span>
                      </div>
                    </motion.div>
                  </div>

                  {/* Step Content */}
                  <div className="text-center space-y-3">
                    <h3 className="text-xl font-bold text-foreground">
                      {t(step.title)}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {t(step.description)}
                    </p>
                  </div>

                  {/* Mobile connecting line */}
                  {index < steps.length - 1 && (
                    <motion.div
                      initial={{ scaleY: 0 }}
                      animate={isInView ? { scaleY: 1 } : {}}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.2 + 0.8,
                      }}
                      className="lg:hidden absolute left-1/2 -bottom-8 w-0.5 h-8 bg-brand-gradient transform -translate-x-1/2 origin-top"
                    />
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1, delay: 1 }}
          className="mt-20 h-px bg-gradient-to-r from-transparent via-border to-transparent"
        />
      </div>
    </section>
  );
}
