import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import Sidebar from '@/components/Sidbar'
const inter = Inter({ subsets: ['latin'] })

// Metadata for the application
export const metadata: Metadata = {
  title: 'Hasnain Afzal - Portfolio',
  description: 'Aspiring Full-Stack Developer',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <div className="flex">
          <Sidebar />
          <main className="flex-1">{children}</main>
        </div>
      </body>
    </html>
  )
}
