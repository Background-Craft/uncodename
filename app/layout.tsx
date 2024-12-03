import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "uncodename | Secret Codename Generator",
  description:
    "Generate mysterious and powerful codenames for your secret projects, usernames, or spy adventures. Powered by chaos and questionable wisdom.",
  keywords: [
    "codename generator",
    "username generator",
    "secret names",
    "project names",
    "random names",
  ],
  authors: [{ name: "Background Craft", url: "https://backgroundcraft.com" }],
  creator: "Background Craft",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://uncodename.com",
    title: "uncodename | Secret Codename Generator",
    description:
      "Generate mysterious and powerful codenames for your secret projects, usernames, or spy adventures.",
    siteName: "uncodename",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "uncodename - Secret Codename Generator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "uncodename | Secret Codename Generator",
    description:
      "Generate mysterious and powerful codenames for your secret projects, usernames, or spy adventures.",
    images: ["/og-image.jpg"],
    creator: "@background_bots",
  },
  themeColor: "#111827",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
