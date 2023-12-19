import WhatsappButton from '@/components/atoms/WhatsappButton';
import type { Metadata } from 'next';
import './globals.css';
import ThemeProvider from './materialTheme';

export const metadata: Metadata = {
  title: 'MUG Filmes',
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
        <ThemeProvider>
          <WhatsappButton />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
