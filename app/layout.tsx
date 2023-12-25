import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
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
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
