import './globals.css'

import type { Metadata } from 'next'
import localFont from 'next/font/local'

const poppins = localFont({
  variable: '--font-poppins',
  display: 'swap',
  src: [
    {
      path: '../../public/fonts/poppins-v20-latin-300.woff2',
      weight: '300'
    },
    {
      path: '../../public/fonts/poppins-v20-latin-600.woff2',
      weight: '600'
    },
    {
      path: '../../public/fonts/poppins-v20-latin-regular.woff2',
      weight: '400'
    }
  ]
})

export const metadata: Metadata = {
  title: {
    template: '%s | wongames',
    default: 'wongames'
  },
  description: 'Start new applications with a boilerplate'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="font-poppins antialiased">{children}</body>
    </html>
  )
}
