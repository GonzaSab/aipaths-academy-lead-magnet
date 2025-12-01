"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import contactContent from "@/content/contact.json";

export default function Contact() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const sectionTitle = t(contactContent.sectionTitle);
  const sectionDescription = t(contactContent.sectionDescription);
  const submitText = t(contactContent.form.submitText);
  const fields = contactContent.form.fields;
  const contactEmail = contactContent.contactInfo.email;
  const responseTime = t(contactContent.contactInfo.responseTime);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      alert("Please fill in all fields");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      alert("Please enter a valid email address");
      return;
    }

    alert(
      `Thank you for your message, ${formData.name}! We'll get back to you soon.`,
    );

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-background"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
              {sectionTitle}
            </h2>
            <p className="text-lg text-muted-foreground">
              {sectionDescription}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.form
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              {fields.map((field) => {
                const fieldLabel = t(field.label);
                const fieldPlaceholder = t(field.placeholder);

                return (
                  <div key={field.name} className="space-y-2">
                    <Label
                      htmlFor={field.name}
                      className="text-foreground"
                    >
                      {fieldLabel}
                      {field.required && (
                        <span className="text-destructive ml-1">*</span>
                      )}
                    </Label>
                    {field.type === "textarea" ? (
                      <Textarea
                        id={field.name}
                        name={field.name}
                        placeholder={fieldPlaceholder}
                        value={formData[field.name as keyof typeof formData]}
                        onChange={handleChange}
                        required={field.required}
                        rows={field.rows || 5}
                        className="resize-none"
                      />
                    ) : (
                      <Input
                        id={field.name}
                        name={field.name}
                        type={field.type}
                        placeholder={fieldPlaceholder}
                        value={formData[field.name as keyof typeof formData]}
                        onChange={handleChange}
                        required={field.required}
                      />
                    )}
                  </div>
                );
              })}

              <Button type="submit" className="w-full">
                {submitText}
              </Button>
            </motion.form>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col justify-center space-y-6"
            >
              <div className="bg-muted p-8 rounded-lg border border-border">
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  Contact Information
                </h3>
                <div className="flex items-center space-x-3 mb-4">
                  <Mail className="w-5 h-5 text-muted-foreground" />
                  <a
                    href={`mailto:${contactEmail}`}
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    {contactEmail}
                  </a>
                </div>
                <p className="text-sm text-muted-foreground">
                  {responseTime}
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
