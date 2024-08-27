"use client";

import type { Metadata } from "next";

import { GlobalStyles } from './styles/GlobalStyles';
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
        </ThemeProvider>
        {children}
      </body>
    </html>
  );
}
