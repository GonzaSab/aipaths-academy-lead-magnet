'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useTranslation } from '@/hooks/useTranslation';
import homeContent from '@/content/home.json';

export default function Features() {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section
      id="features"
      ref={ref}
      className="py-24 px-4 sm:px-6 lg:px-8 bg-background"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold text-center mb-16"
        >
          {t(homeContent.features.sectionTitle)}
        </motion.h2>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {homeContent.features.items.map((feature, index) => {
            const IconComponent =
              LucideIcons[
                feature.icon as keyof typeof LucideIcons
              ] as LucideIcons.LucideIcon;

            return (
              <motion.div key={index} variants={itemVariants}>
                <motion.div
                  whileHover={{
                    y: -4,
                    scale: 1.02,
                    transition: { duration: 0.2 },
                  }}
                  className="h-full"
                >
                  <Card className="h-full hover:shadow-lg transition-shadow duration-200">
                    <CardContent className="flex flex-col items-start gap-4 pt-6">
                      {/* Icon */}
                      <div className="rounded-lg bg-primary/10 p-3">
                        {IconComponent && (
                          <IconComponent className="h-6 w-6 text-primary" />
                        )}
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold">
                        {t(feature.title)}
                      </h3>

                      {/* Description */}
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {t(feature.description)}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
