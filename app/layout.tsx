import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import '../styles/index.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'FootyFiEND NEXT',
  description: 'The Future of Snowboarding',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="dark:bg-dark">
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}

import { Providers } from './providers';
