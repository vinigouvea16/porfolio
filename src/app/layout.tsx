import { darker, major } from '@/styles/fonts'
import type { Metadata } from 'next'
import Head from 'next/head'
import './globals.css'

type OGImage = string | URL

type CustomMetadata = Metadata & {
  openGraph: {
    images: OGImage
  }
}

export const metadata: CustomMetadata = {
  title: 'tailvinicss',
  description: `Vinicius Gouvea's portfolio`,
  metadataBase: new URL('https://tailvinicss.vercel.app'),
  openGraph: {
    images: 'https://tailvinicss.vercel.app/opengraph-image.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <meta name="description" content={metadata.description || ''} />
        <meta property="og:description" content={metadata.description || ''} />
        <meta
          property="og:url"
          content={metadata.metadataBase?.toString() || ''}
        />
        {metadata.openGraph.images && (
          <meta
            property="og:image"
            content={metadata.openGraph.images.toString()}
          />
        )}
      </Head>
      <body className={`${darker.variable} ${major.variable}`}>{children}</body>
    </html>
  )
}
