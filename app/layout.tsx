import { Geist, Geist_Mono } from "next/font/google"
import type { Metadata } from "next"

import { PRACTICE } from "@/lib/constants"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: PRACTICE.seo.title,
  description: PRACTICE.seo.description,
  keywords: PRACTICE.seo.keywords.join(", "),
  metadataBase: new URL(`https://${PRACTICE.domain}`),
  alternates: {
    canonical: "/",
    languages: {
      "de-DE": "/de-DE",
    },
  },
  openGraph: {
    title: PRACTICE.seo.title,
    description: PRACTICE.seo.description,
    url: `https://${PRACTICE.domain}`,
    siteName: PRACTICE.name,
    images: [
      {
        url: "https://meinruhepol.de/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: PRACTICE.seo.locale,
    type: "website",
  },
  // twitter: {
  //   card: "app",
  //   title: PRACTICE.seo.title,
  //   description: PRACTICE.seo.description,
  //   siteId: "",
  //   creator: "", //creator tag in twitter (@username)
  //   creatorId: "",
  //   images: {
  //     url: "https://meinruhepol.de/og-image.png",
  //     alt: PRACTICE.name,
  //   },
  // },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
    other: {
      rel: "apple-touch-icon",
      url: "/apple-touch-icon.png",
    },
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontMono.variable,
        "font-sans",
        geist.variable
      )}
    >
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
