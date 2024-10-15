import { Metadata } from 'next';

export const aboutMetadata: Metadata = {
  title: 'About Us - Your Application Name',
  description: 'Learn more about our team and mission at Your Application Name.',
  keywords: ['about', 'team', 'mission', 'history', 'company', 'Your Application Name'],

  alternates: {
    canonical: 'https://yourwebsite.com/about',
  },

  openGraph: {
    title: 'About Us - Your Application Name',
    description: 'Learn more about our team and mission at Your Application Name.',
    url: 'https://yourwebsite.com/about',
    siteName: 'Your Application Name',
    images: [
      {
        url: 'https://yourwebsite.com/about-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Team photo or relevant image description',
      },
    ],
    type: 'website',
    locale: 'cs_CZ',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'About Us - Your Application Name',
    description: 'Learn more about our team and mission at Your Application Name.',
    images: [
      {
        url: 'https://yourwebsite.com/about-twitter-image.jpg',
        alt: 'Team photo or relevant image description for Twitter',
      },
    ],
  },
};
