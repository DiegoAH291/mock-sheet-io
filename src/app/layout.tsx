import { Manrope } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

const inter = Manrope({ subsets: ["latin"], weight: ["500", "600", "700"] });

export const metadata: Metadata = {
  title: {
    template: "%s - MockSheet.io",
    default: "Generate Test Excel Documents - MockSheet.io",
  },
  description:
    "Quickly and customizable generate test Excel documents with artificial intelligence.",
  keywords: [
    "IA",
    "Artificial intelligence",
    "Excel",
    "Generate",
    "Sheet",
    "Generate Excel documents",
    "Excel documents",
    "Excel sheets",
  ],
  icons: {
    icon: "/favicon-96x96.png",
    apple: "/apple-icon-114x114.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
