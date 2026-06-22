import { Geist, Geist_Mono } from "next/font/google"
import type { Metadata } from "next"

import { PRACTICE } from "@/lib/constants"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/sonner"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: PRACTICE.seo.title,
  description: PRACTICE.seo.description,
  keywords: PRACTICE.seo.keywords.join(", "),
  metadataBase: new URL(`https://${PRACTICE.domain}`),
  other: {
    "google-site-verification": "mZ_9pIrz9cD5c9VtY6eGZdmZjZpkwR1VLK7w2FK3tws",
  },
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
        url: `https://${PRACTICE.domain}/og-image.png`,
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
    icon: [
      `https://${PRACTICE.domain}/favicon.ico`,
      `https://${PRACTICE.domain}/favicon-32x32.png`,
    ],
    shortcut: `https://${PRACTICE.domain}/favicon-16x16.png`,
    apple: `https://${PRACTICE.domain}/apple-touch-icon.png`,
    other: {
      rel: "icon",
      type: "image/svg+xml",
      url: `https://${PRACTICE.domain}/images/logo.svg`,
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
        <Toaster />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(PRACTICE.seo.jsonLd).replace(
              /</g,
              "\\u003c"
            ),
          }}
        />
      </body>
    </html>
  )
}
