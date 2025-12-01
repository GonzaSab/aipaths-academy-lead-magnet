'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import pricingContent from '@/content/pricing.json';

export default function Pricing() {
  const { t } = useTranslation();

  const sectionTitle = t(pricingContent.sectionTitle);
  const sectionDescription = t(pricingContent.sectionDescription);
  const tiers = pricingContent.tiers;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  const highlightedCardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section
      id="pricing"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-muted"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            {sectionTitle}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {sectionDescription}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-6"
        >
          {tiers.map((tier, index) => {
            const isHighlighted = tier.highlighted;
            const tierName = t(tier.name);
            const tierPrice = tier.price;
            const tierPeriod = t(tier.period);
            const tierDescription = t(tier.description);
            const tierCtaText = t(tier.ctaText);

            return (
              <motion.div
                key={index}
                variants={isHighlighted ? highlightedCardVariants : cardVariants}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.3, ease: "easeOut" as const },
                }}
                className="relative"
              >
                {isHighlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                    <Badge className="px-4 py-1">
                      {t({ en: 'Popular', es: 'Popular' })}
                    </Badge>
                  </div>
                )}

                <Card
                  className={`h-full flex flex-col relative transition-all duration-300 ${
                    isHighlighted
                      ? 'border-primary dark:border-primary shadow-lg ring-2 ring-primary/20 dark:ring-primary/30'
                      : 'border-border'
                  }`}
                >
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl mb-2">{tierName}</CardTitle>
                    <div className="mb-3">
                      <span className="text-4xl sm:text-5xl font-bold text-foreground">
                        {typeof tierPrice === 'number' ? `$${tierPrice}` : tierPrice}
                      </span>
                      {typeof tierPrice === 'number' && (
                        <span className="text-muted-foreground ml-2">
                          {tierPeriod}
                        </span>
                      )}
                      {typeof tierPrice === 'string' && tierPrice === 'Free' && (
                        <span className="text-muted-foreground ml-2">
                          {tierPeriod}
                        </span>
                      )}
                    </div>
                    <CardDescription className="text-base">
                      {tierDescription}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="flex-grow">
                    <ul className="space-y-3">
                      {tier.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-start gap-3 text-foreground"
                        >
                          <Check
                            className="shrink-0 mt-0.5 text-primary"
                            size={20}
                          />
                          <span>{t(feature)}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>

                  <CardFooter>
                    <Button
                      variant={isHighlighted ? 'default' : 'outline'}
                      size="lg"
                      className="w-full"
                    >
                      {tierCtaText}
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
