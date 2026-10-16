import type { Metadata } from "next";
import { JetBrains_Mono, Outfit, Syne } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bishal Pal — Software Engineer",
  description:
    "Portfolio of Bishal Pal — full stack, backend systems, and distributed applications. Kolkata, India.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${syne.variable} ${mono.variable} h-full antialiased`}
    >
      <body className="aurora min-h-full flex flex-col">{children}</body>
    </html>
  );
}
