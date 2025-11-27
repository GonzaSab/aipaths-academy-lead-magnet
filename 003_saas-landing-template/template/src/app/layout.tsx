import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { ThemeProvider } from "@/contexts/ThemeContext";
import siteConfig from "@/content/site.json";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: siteConfig.name.en,
    template: `%s | ${siteConfig.name.en}`,
  },
  description: siteConfig.description.en,
  keywords: ["SaaS", "landing page", "Next.js", "template", siteConfig.name.en],
  authors: [
    {
      name: siteConfig.legal.companyName,
    },
  ],
  creator: siteConfig.legal.companyName,
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name.en,
    description: siteConfig.description.en,
    siteName: siteConfig.name.en,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name.en,
    description: siteConfig.description.en,
    creator: siteConfig.social.twitter
      ? `@${siteConfig.social.twitter.split("/").pop()}`
      : undefined,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <LanguageProvider>
            <div className="flex min-h-screen flex-col bg-[rgb(var(--background))]">
              <Navbar />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
