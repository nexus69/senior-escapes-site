'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';

interface HeaderProps {
  onStartWizard: () => void;
}

export function Header({ onStartWizard }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: 'La vie sur place', href: '#vie-sur-place' },
    { name: 'Votre séjour', href: '#articles' },
    { name: 'Activités', href: '#activites' },
    { name: 'Notre équipe', href: '#equipe' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo - Now clickable */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <a 
                href="#accueil" 
                className="flex items-center hover:opacity-80 transition-opacity duration-200"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">SE</span>
                </div>
                <div className="ml-3">
                  <div className="text-lg font-bold text-gray-900">Senior Escapes</div>
                  <div className="text-xs text-blue-600 font-medium">TUNISIE</div>
                </div>
              </a>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              className="border-blue-200 text-blue-700 hover:bg-blue-50"
            >
              <Phone className="w-4 h-4 mr-2" />
              +33 1 23 45 67 89
            </Button>
            <Button
              onClick={onStartWizard}
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Construire mon séjour
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-3"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation - Improved */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-100 bg-white shadow-lg">
            <div className="px-4 pt-4 pb-6 space-y-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-3 text-lg font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              
              {/* Mobile CTA Buttons */}
              <div className="pt-4 space-y-3 border-t border-gray-100">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full border-blue-200 text-blue-700 hover:bg-blue-50 py-4 text-lg"
                >
                  <Phone className="w-5 h-5 mr-3" />
                  Appeler maintenant
                </Button>
                <Button
                  onClick={() => {
                    onStartWizard();
                    setMobileMenuOpen(false);
                  }}
                  size="lg"
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-4 text-lg font-semibold"
                >
                  <MessageCircle className="w-5 h-5 mr-3" />
                  Mon séjour sur mesure
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}