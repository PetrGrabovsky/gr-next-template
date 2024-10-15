import '@/shared/styles/globals.css';
import { FC, ReactNode } from 'react';
import { inter } from '@/shared/styles/fonts';
import { appMetadata } from './appMetadata';
import AppStateProvider from '@/features/layout/providers/AppStateProvider';
import AppHeader from '@/features/layout/organisms/AppHeader';
import AppFooter from '@/features/layout/organisms/AppFooter';

export const metadata = appMetadata;

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang='cs'>
      <head>
        <meta name='mobile-web-app-capable' content='yes' />
        <meta name='msapplication-TileColor' content='#da532c' />
        <meta name='msapplication-TileImage' content='/mstile-144x144.png' />
        <meta name='geo.region' content='CZ' />
        <meta name='geo.placename' content='Czech Republic' />
        <meta property='og:see_also' content='https://www.facebook.com/yourprofile' />
        <meta property='og:see_also' content='https://www.instagram.com/yourprofile' />
      </head>
      <body
        className={`${inter.className} flex min-h-screen flex-col overflow-x-hidden antialiased`}
      >
        <AppStateProvider>
          <AppHeader />
          {children}
          <AppFooter />
        </AppStateProvider>
      </body>
    </html>
  );
};

export default RootLayout;
