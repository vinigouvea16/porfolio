import { darker, major } from '@/styles/fonts'
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'tailvinicss',
  description: `Vinicius Gouvea's porfolio`,
  metadataBase: new URL('https://tailvinicss.vercel.app'),
  openGraph: {
    images: '/opengraph-image.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${darker.variable} ${major.variable}`}>{children}</body>
    </html>
  )
}
