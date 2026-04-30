import '../index.css';

export const metadata = {
  metadataBase: new URL('https://vivekbendre.me'),
  title: {
    default: 'Vivek Bendre | Full Stack Developer',
    template: '%s | Vivek Bendre',
  },
  description:
    'Portfolio of Vivek Bendre, a full stack developer focused on web apps, backend systems, and modern digital experiences.',
  keywords: [
    'Vivek Bendre',
    'Full Stack Developer',
    'Web Developer',
    'Software Engineer',
    'MERN Stack',
    'React',
    'Next.js',
    'Portfolio'
  ],
  authors: [{ name: 'Vivek Bendre', url: 'https://vivekbendre.me' }],
  creator: 'Vivek Bendre',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Vivek Bendre | Full Stack Developer',
    description:
      'Portfolio of Vivek Bendre, a full stack developer focused on web apps, backend systems, and modern digital experiences.',
    url: '/',
    siteName: 'Vivek Bendre Portfolio',
    images: [
      {
        url: '/profile.png',
        width: 1200,
        height: 630,
        alt: 'Vivek Bendre portfolio preview',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vivek Bendre | Full Stack Developer',
    description:
      'Portfolio of Vivek Bendre, a full stack developer focused on web apps, backend systems, and modern digital experiences.',
    images: ['/profile.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}