import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://mosaik-theta.vercel.app'), // Replace with your actual deployed URL
  title: "Mosaik ✦ | Creative Dot Art Studio",
  description: "An advanced, interactive browser-based studio for creating stunning dithered art, retro ASCII animations, and custom dot matrix graphics.",
  keywords: ["dithering", "dot art", "ascii", "retro", "graphics", "creative studio", "halftone", "generative art"],
  authors: [{ name: "Mosaik Studio" }],
  creator: "Mosaik Studio",
  publisher: "Mosaik Studio",
  openGraph: {
    title: "Mosaik ✦ | Creative Dot Art Studio",
    description: "An advanced, interactive browser-based studio for creating stunning dithered art, retro ASCII animations, and custom dot matrix graphics.",
    type: "website",
    siteName: "Mosaik Studio",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mosaik ✦",
    description: "Advanced interactive dithering and dot-art studio.",
  },
};

export const viewport: Viewport = {
  themeColor: "#00d1ff",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}