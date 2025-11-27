"use client";

import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

type TranslatableString = { en: string; es: string } | string;

interface FormField {
  name: string;
  label: TranslatableString;
  type: string;
  placeholder?: TranslatableString;
  required: boolean;
  options?: TranslatableString[];
}

interface ContactFormProps {
  fields: FormField[];
  submitText: TranslatableString;
  successMessage: TranslatableString;
  errorMessage: TranslatableString;
}

const labels = {
  sending: { en: "Sending...", es: "Enviando..." },
  selectOption: { en: "Select an option", es: "Selecciona una opción" },
};

export function ContactForm({
  fields,
  submitText,
  successMessage,
  errorMessage,
}: ContactFormProps) {
  const { t } = useLanguage();
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      // TODO: Implement actual submission to Supabase or API
      // For now, simulate success
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setMessage({ type: "success", text: t(successMessage) });
      setFormData({});
    } catch (error) {
      setMessage({ type: "error", text: t(errorMessage) });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {fields.map((field) => (
        <div key={field.name}>
          <label
            htmlFor={field.name}
            className="block text-sm font-medium mb-2"
          >
            {t(field.label)}
            {field.required && <span className="text-red-500 ml-1">*</span>}
          </label>
          {field.type === "textarea" ? (
            <textarea
              id={field.name}
              name={field.name}
              value={formData[field.name] || ""}
              onChange={handleChange}
              placeholder={field.placeholder ? t(field.placeholder) : ""}
              required={field.required}
              disabled={loading}
              rows={5}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50"
            />
          ) : field.type === "select" ? (
            <select
              id={field.name}
              name={field.name}
              value={formData[field.name] || ""}
              onChange={handleChange}
              required={field.required}
              disabled={loading}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50"
            >
              <option value="">{t(labels.selectOption)}</option>
              {field.options?.map((option, idx) => (
                <option key={idx} value={t(option)}>
                  {t(option)}
                </option>
              ))}
            </select>
          ) : (
            <input
              type={field.type}
              id={field.name}
              name={field.name}
              value={formData[field.name] || ""}
              onChange={handleChange}
              placeholder={field.placeholder ? t(field.placeholder) : ""}
              required={field.required}
              disabled={loading}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50"
            />
          )}
        </div>
      ))}
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-primary text-primary-foreground px-8 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors disabled:opacity-50"
      >
        {loading ? t(labels.sending) : t(submitText)}
      </button>
      {message && (
        <div
          className={`p-4 rounded-md ${
            message.type === "success"
              ? "bg-green-50 text-green-800 border border-green-200"
              : "bg-red-50 text-red-800 border border-red-200"
          }`}
        >
          {message.text}
        </div>
      )}
    </form>
  );
}
