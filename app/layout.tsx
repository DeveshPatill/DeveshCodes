import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadataBase = new URL("https://deveshcodes.dev");

export const metadata: Metadata = {
  title: {
    default: "DeveshCodes | Devesh Vijay Patil - Full-Stack Developer",
    template: "%s | DeveshCodes",
  },
  description: "Software Developer with an M.Sc. in Information Technology (AI Specialization) and experience developing web applications using Python, Django, Flask, React.js, SQL, MongoDB, and REST APIs. Skilled in full-stack development, database management, authentication systems, API integration, and building scalable software solutions.",
  keywords: [
    "Full-Stack Developer",
    "Software Developer",
    "AI Enthusiast",
    "React Developer",
    "Next.js",
    "TypeScript",
    "Python Developer",
    "Django Developer",
    "Node.js",
    "Software Engineer",
    "Web Developer",
    "Portfolio",
    "DeveshCodes",
    "Devesh Vijay Patil",
  ],
  authors: [{ name: "Devesh Vijay Patil" }],
  creator: "Devesh Vijay Patil",
  publisher: "DeveshCodes",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://deveshcodes.dev",
    siteName: "DeveshCodes",
    title: "DeveshCodes | Devesh Vijay Patil - Full-Stack Developer",
    description: "Software Developer with an M.Sc. in Information Technology (AI Specialization) and experience developing web applications using Python, Django, Flask, React.js, SQL, MongoDB, and REST APIs.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "DeveshCodes - Devesh Vijay Patil Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DeveshCodes | Devesh Vijay Patil - Full-Stack Developer",
    description: "Software Developer with an M.Sc. in Information Technology (AI Specialization) and experience developing web applications using Python, Django, Flask, React.js, SQL, MongoDB, and REST APIs.",
    images: ["/og-image.png"],
    creator: "@DeveshPatill",
  },
  verification: {
    google: "google-site-verification-code",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://github.com" />
        <link rel="dns-prefetch" href="https://linkedin.com" />
      </head>
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}