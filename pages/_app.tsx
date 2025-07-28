import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Analytics } from '@vercel/analytics/react'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>ScreenBlink - Protect Your Eyes from Digital Eye Strain & Dry Eyes</title>
        {/* Favicons and Manifest */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="title" content="ScreenBlink - Protect Your Eyes from Digital Eye Strain & Dry Eyes" />
        <meta name="description" content="Combat digital eye strain, dry eyes, and computer vision syndrome with intelligent blink tracking. Free software to reduce eye strain and prevent red eyes from screen time." />
        <meta name="keywords" content="digital eye strain, dry eyes, computer strain, red eyes, eye strain relief, computer vision syndrome, blink tracking, eye health, screen time, eye protection, dry eye treatment, eye strain symptoms, computer eye strain, reduce eye strain" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="author" content="ScreenBlink" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://screenblink.org/" />
        <meta property="og:title" content="ScreenBlink - Protect Your Eyes from Digital Eye Strain & Dry Eyes" />
        <meta property="og:description" content="Combat digital eye strain, dry eyes, and computer vision syndrome with intelligent blink tracking. Free software to reduce eye strain and prevent red eyes from screen time." />
        <meta property="og:image" content="https://screenblink.org/og-image.svg" />
        <meta property="og:site_name" content="ScreenBlink" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://screenblink.org/" />
        <meta property="twitter:title" content="ScreenBlink - Protect Your Eyes from Digital Eye Strain & Dry Eyes" />
        <meta property="twitter:description" content="Combat digital eye strain, dry eyes, and computer vision syndrome with intelligent blink tracking. Free software to reduce eye strain and prevent red eyes from screen time." />
        <meta property="twitter:image" content="https://screenblink.org/og-image.svg" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="theme-color" content="#1e40af" />
        <meta name="msapplication-TileColor" content="#1e40af" />
        <link rel="canonical" href="https://screenblink.org/" />
        
        {/* Google Site Verification */}
        <meta name="google-site-verification" content="_4u4BGFu6JT0zfCF0xrPSG5aDTZA1ncs8-bBXR7On2w" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "ScreenBlink",
              "description": "Intelligent blink tracking software to combat digital eye strain, dry eyes, and computer vision syndrome. Helps reduce eye strain and prevent red eyes from prolonged screen time.",
              "url": "https://screenblink.org/",
              "applicationCategory": "HealthApplication",
              "operatingSystem": "Windows, macOS",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "ratingCount": "1250"
              },
              "keywords": "digital eye strain, dry eyes, computer strain, red eyes, eye strain relief, computer vision syndrome, blink tracking, eye health, screen time, eye protection, dry eye treatment, eye strain symptoms, computer eye strain, reduce eye strain",
              "author": {
                "@type": "Organization",
                "name": "ScreenBlink"
              }
            })
          }}
        />
      </Head>
      <Component {...pageProps} />
      <Analytics />
    </>
  )
}

export default MyApp
