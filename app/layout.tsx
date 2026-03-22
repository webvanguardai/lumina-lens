import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair', style: ['normal', 'italic'] })

export const metadata: Metadata = {
  title: 'Lumina Lens Studio | Premium Photography Dubai',
  description: 'Dubai\'s premier photography studio specializing in editorial, luxury brand, and lifestyle photography. Capturing moments that define brands and tell stories.',
  keywords: 'photography studio Dubai, luxury photographer Dubai, editorial photography Dubai, brand photography UAE, commercial photographer Dubai, portrait photography Dubai',
  authors: [{ name: 'Lumina Lens Studio' }],
  robots: 'index, follow',
  alternates: {
    canonical: 'https://lumina-lens-six.vercel.app',
  },
  openGraph: {
    type: 'website',
    locale: 'en_AE',
    url: 'https://lumina-lens-six.vercel.app',
    title: 'Lumina Lens Studio | Premium Photography Dubai',
    description: 'Dubai\'s premier photography studio. Editorial, luxury brand & lifestyle photography that defines the extraordinary.',
    siteName: 'Lumina Lens Studio',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'Lumina Lens Studio Dubai',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lumina Lens Studio | Premium Photography Dubai',
    description: 'Dubai\'s premier photography studio. Editorial, luxury brand & lifestyle photography.',
    images: ['https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=1200&q=80'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        {/* GA4 Placeholder */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-PLACEHOLDER"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-PLACEHOLDER');`,
          }}
        />
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans bg-black text-white antialiased`}>
        {children}
      </body>
    </html>
  )
}
