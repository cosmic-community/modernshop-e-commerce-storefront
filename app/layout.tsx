import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navigation from '@/components/Navigation'
import CosmicBadge from '@/components/CosmicBadge'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ModernShop - E-Commerce Store',
  description: 'Browse our collection of premium products, curated collections, and verified customer reviews',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const bucketSlug = process.env.COSMIC_BUCKET_SLUG as string
  
  return (
    <html lang="en">
      <head>
        {/* Console capture script for dashboard debugging */}
        <script src="/dashboard-console-capture.js" />
      </head>
      <body className={inter.className}>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <footer className="bg-gray-900 text-white py-12 mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-gray-400">
                © {new Date().getFullYear()} ModernShop. All rights reserved.
              </p>
              <p className="text-gray-500 text-sm mt-2">
                Powered by Cosmic CMS
              </p>
            </div>
          </div>
        </footer>
        <CosmicBadge bucketSlug={bucketSlug} />
      </body>
    </html>
  )
}