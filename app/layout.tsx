import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import SmoothScroll from '@/components/SmoothScroll'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://thilina-dilshan-fernando-next-js-tixh.vercel.app'), // Live Vercel URL
  title: {
    default: 'Thilina Dilshan Fernando — Full-Stack Developer & SaaS Builder',
    template: '%s | Thilina Dilshan Fernando'
  },
  description:
    'Portfolio of Thilina Dilshan Fernando, a Software Engineering undergraduate at IJSE specializing in Full-Stack Web Development, Mobile Apps, Java, Spring Boot, React, and Node.js.',
  keywords: [
    'Thilina Fernando',
    'Thilina Dilshan',
    'Full-Stack Developer Sri Lanka',
    'Frontend Developer',
    'Backend Developer',
    'Java Developer',
    'Spring Boot Developer',
    'React Developer',
    'Next.js Developer',
    'Software Engineer',
    'Web Developer Portfolio',
    'SaaS Builder',
  ],
  authors: [{ name: 'Thilina Dilshan Fernando', url: 'https://github.com/thilina-fer' }],
  creator: 'Thilina Dilshan Fernando',
  openGraph: {
    title: 'Thilina Dilshan Fernando — Full-Stack Developer',
    description: 'Building production-grade full-stack applications with Java, Spring Boot, React & Node.js.',
    url: 'https://thilina-dilshan-fernando-next-js-tixh.vercel.app',
    siteName: 'Thilina Dilshan Fernando Portfolio',
    images: [
      {
        url: '/article/profile.png', // Replace with a generic OG image if available
        width: 1200,
        height: 630,
        alt: 'Thilina Dilshan Fernando Profile',
      },
    ],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Thilina Dilshan Fernando — Full-Stack Developer',
    description: 'Building production-grade full-stack applications with Java, Spring Boot, React & Node.js.',
    images: ['/article/profile.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'mRPVxoCSIiW5JNaIXZvDG8FNgaexhAm5eRgoyT7ku24',
  },
  alternates: {
    canonical: '/',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} antialiased`} suppressHydrationWarning>
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  )
}
