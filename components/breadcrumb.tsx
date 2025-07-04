'use client';

import Link from 'next/link';
import { ChevronRight, Home, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  backToOffersHref?: string;
}

export function Breadcrumb({ items, backToOffersHref = "/#formules" }: BreadcrumbProps) {
  return (
    <div className="bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Fil d'Ariane */}
          <nav className="flex items-center space-x-2 text-sm">
            <Link 
              href="/" 
              className="flex items-center text-gray-500 hover:text-blue-600 transition-colors duration-200"
            >
              <Home className="w-4 h-4 mr-1" />
              Accueil
            </Link>
            
            {items.map((item, index) => (
              <div key={index} className="flex items-center space-x-2">
                <ChevronRight className="w-4 h-4 text-gray-400" />
                {item.href ? (
                  <Link 
                    href={item.href}
                    className="text-gray-500 hover:text-blue-600 transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-gray-900 font-medium">{item.label}</span>
                )}
              </div>
            ))}
          </nav>

          {/* Bouton Retour aux offres */}
          <Link href={backToOffersHref}>
            <Button 
              variant="outline" 
              size="sm"
              className="flex items-center space-x-2 text-blue-600 border-blue-200 hover:bg-blue-50 hover:border-blue-300 transition-all duration-200"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Retour aux offres</span>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}