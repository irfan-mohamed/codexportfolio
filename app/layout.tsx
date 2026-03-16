import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL('https://irfan-portfolio.vercel.app'),
  title: 'Irfan Mohamed | Machine Learning Engineer Portfolio',
  description:
    'Machine Learning Engineer and Data Scientist portfolio featuring projects, experience, GitHub activity, and contact information.',
  keywords: [
    'Machine Learning Engineer',
    'Data Scientist',
    'Backend Developer',
    'Portfolio',
    'Next.js',
  ],
  openGraph: {
    title: 'Irfan Mohamed | Machine Learning Engineer Portfolio',
    description:
      'I build intelligent systems, data-driven applications, and scalable backend solutions.',
    type: 'website',
  },
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
