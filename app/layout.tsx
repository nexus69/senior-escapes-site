import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Senior Escapes Tunisie - Séjours Premium pour Retraités Actifs',
  description: 'Découvrez une nouvelle façon de vivre votre retraite en Tunisie. Séjours longs durée avec accompagnement personnalisé, communauté chaleureuse et sérénité garantie.',
  keywords: 'retraite tunisie, séjour senior, résidence retraités, accompagnement senior, communauté retraités',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={inter.className}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}