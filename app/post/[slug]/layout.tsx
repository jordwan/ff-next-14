import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Post Page Layout - FootyFiEND',
  description: 'The Future of Snowboarding',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="dark:bg-red">{children}</body>
    </html>
  );
}
