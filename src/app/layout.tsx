import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nida Sarac | Creative Tech Portfolio",
  description:
    "A playful bilingual portfolio for Nida Sarac, focused on mobile development, shipped apps, and product feel.",
  icons: {
    icon: "/ns-icon.png",
    shortcut: "/ns-icon.png",
    apple: "/ns-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
