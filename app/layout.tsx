import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Worddare',
  description: 'Dev by Guru',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
