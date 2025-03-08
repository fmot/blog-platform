import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";
import { Toaster } from "@/components/ui/toaster";

const font_Noto_Sans_JP = Noto_Sans_JP({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: ["Next.js", "React", "TailwindCSS", "shadcn/ui"],
  authors: [
    {
      name: "fmot",
      url: siteConfig.url,
    },
  ],
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    type: "website",
    locale: "ja",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/og.jpg`],
    creator: "fmot",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font_Noto_Sans_JP.className}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
