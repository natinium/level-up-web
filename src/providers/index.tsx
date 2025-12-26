"use client";

import { ReactNode } from "react";
import { NextIntlClientProvider } from "next-intl";
import { ThemeProvider } from "./theme-provider";

type Props = {
  children: ReactNode;
  messages: Record<string, unknown>;
  locale?: string; // Add optional locale prop
  timeZone?: string;
};

export const Providers = ({
  children,
  messages,
  locale = "en",
  timeZone,
}: Props) => {
  return (
    <NextIntlClientProvider
      messages={messages}
      locale={locale}
      timeZone={timeZone}
    >
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </NextIntlClientProvider>
  );
};
