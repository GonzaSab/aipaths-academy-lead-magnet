"use client";

import { motion } from "framer-motion";
import { useTranslation } from "@/hooks/useTranslation";
import aboutContent from "@/content/about.json";

export default function About() {
  const { t } = useTranslation();

  const sectionTitle = t(aboutContent.sectionTitle);
  const storyTitle = t(aboutContent.story.title);
  const storyParagraphs = aboutContent.story.content;
  const values = aboutContent.values;

  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-muted"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 text-foreground">
            {sectionTitle}
          </h2>

          <div className="mb-20">
            <h3 className="text-2xl sm:text-3xl font-semibold mb-6 text-foreground">
              {storyTitle}
            </h3>
            <div className="space-y-4 text-lg text-muted-foreground">
              {storyParagraphs.map((paragraph, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {t(paragraph)}
                </motion.p>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl sm:text-3xl font-semibold mb-8 text-center text-foreground">
              {t(aboutContent.valuesTitle)}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="bg-card p-6 rounded-lg border border-border"
                >
                  <h4 className="text-xl font-semibold mb-3 text-foreground">
                    {t(value.title)}
                  </h4>
                  <p className="text-muted-foreground">
                    {t(value.description)}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
