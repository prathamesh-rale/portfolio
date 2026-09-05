import type { Metadata } from 'next';
import '../styles/globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ThemeProvider from '@/components/ThemeProvider';

export const metadata: Metadata = {
  title: 'Prathamesh Rale | Senior Solutions Consultant',
  description:
    'Portfolio of Prathamesh Rale - Senior Solutions Consultant specializing in HR/Payroll integrations, iPaaS, and AI-driven automation.',
  keywords: [
    'Prathamesh Rale',
    'Senior Solutions Consultant',
    'HR Integration',
    'iPaaS',
    'ETL',
    'Flexspring',
    'Solutions Architect',
    'Software Engineer',
  ],
  viewport: 'width=device-width, initial-scale=1, maximum-scale=5',
  robots: 'index, follow',
  openGraph: {
    title: 'Prathamesh Rale | Senior Solutions Consultant',
    description:
      'Portfolio showcasing HR/Payroll integration expertise and technical solutions',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
    siteName: 'Prathamesh Rale Portfolio',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Prathamesh Rale | Senior Solutions Consultant',
    description: 'HR Integration & AI-Driven Automation Specialist',
  },
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  icons: {
    icon: [
      {
        url: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">💼</text></svg>',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const theme = localStorage.getItem('theme') || 'dark';
                  document.documentElement.setAttribute('data-theme', theme);
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body>
        <ThemeProvider>
          <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Navigation />
            <main style={{ flex: 1, padding: '2rem', maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
