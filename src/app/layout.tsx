import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";
import { Providers } from "@/providers";
import { getMessages, getLocale, getTimeZone } from "next-intl/server";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Orion Next.js Starter",
  description:
    "Enterprise-grade Next.js 16 starter template with modern development tooling and best practices pre-configured",
  openGraph: {
    title: "Orion Next.js Starter",
    description:
      "Production-ready Next.js starter with TypeScript, Tailwind CSS, and comprehensive tooling",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Orion Next.js Starter",
    description:
      "Enterprise-grade Next.js starter template with modern development tooling",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

/**
 * The root layout for the application.
 * It sets up the HTML structure, fonts, and providers.
 *
 * @param {object} props - The props for the component.
 * @param {React.ReactNode} props.children - The content to render within the layout.
 * @returns {Promise<React.ReactElement>} The rendered root layout.
 */
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();
  const locale = await getLocale();
  const timeZone = await getTimeZone();

  return (
    <html lang={locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers messages={messages} locale={locale} timeZone={timeZone}>
          {children}
        </Providers>
      </body>
    </html>
  );
}
