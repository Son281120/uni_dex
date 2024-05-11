'use client';

import { Inter } from 'next/font/google';
import './globals.css';
import { ReduxProvider } from '@/redux/provider';
import { ThemeProvider } from '@/context/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import { Web3Modal } from '@/context/web3modal';
import { BrowserRouter } from 'react-router-dom';
const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <BrowserRouter>
      <ReduxProvider>
        <html lang="en" suppressHydrationWarning>
          <body className={inter.className}>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <Web3Modal>
                <main>{children}</main>
                <Toaster />
              </Web3Modal>
            </ThemeProvider>
          </body>
        </html>
      </ReduxProvider>
    </BrowserRouter>
  );
}
