import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Oyun Portalı - En İyi Oyunlar",
  description:
    "En yeni ve popüler HTML5 oyunları burada oynayın! Arcade, yarış, bulmaca ve daha fazlası.",
  openGraph: {
    title: "Oyun Portalı",
    description: "En yeni ve popüler HTML5 oyunları burada oynayın!",
    url: "https://oyun-portali.vercel.app",
    siteName: "Oyun Portalı",
    images: [
      {
        url: "https://oyun-portali.vercel.app/og-image.png", // sosyal paylaşım resmi
        width: 1200,
        height: 630,
      },
    ],
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Oyun Portalı",
    description: "En yeni ve popüler HTML5 oyunları burada oynayın!",
    images: ["https://oyun-portali.vercel.app/og-image.png"],
  },
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <head>
        <meta name="google-site-verification" content="o-yguMQOnFfWFsTuQk_sfEExyFmeS-r4OmmfEYvTtos" />
          {/* Google AdSense Otomatik Reklam Kodu */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1058750842422715"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-3QVS42EL8E"
      />

      {/* İstemci tarafı kodunu da ayrı bir Script bileşeni içine alın */}
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-3QVS42EL8E');
        `}
      </Script>
    </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
