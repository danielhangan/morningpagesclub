import type { Metadata } from 'next'
import './globals.css'

import localFont from '@next/font/local';
import { ThemeProvider } from '@/components/ui/theme-provider';



export const metadata: Metadata = {
  title: 'Morning Pages Club',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
