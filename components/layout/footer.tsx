'use client';

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube, Heart } from 'lucide-react';

export function Footer() {
  const quickLinks = [
    { name: 'Accueil', href: '#accueil' },
    { name: 'La Vie sur Place', href: '#vie-sur-place' },
    { name: 'Activités', href: '#activites' },
    { name: 'Notre Équipe', href: '#equipe' },
    { name: 'Contact', href: '#contact' },
  ];

  const services = [
    'Séjours longue durée',
    'Accompagnement médical',
    'Activités culturelles',
    'Services conciergerie',
    'Assistance 24/7',
  ];

  const legalLinks = [
    'Mentions légales',
    'Politique de confidentialité',
    'Conditions générales',
    'Assurance et garanties',
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-green-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">SE</span>
              </div>
              <div>
                <div className="text-lg font-bold">Senior Escapes</div>
                <div className="text-xs text-blue-400 font-medium">TUNISIE</div>
              </div>
            </div>
            
            <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
              Votre nouvelle façon de vivre la retraite sous le soleil méditerranéen, 
              avec l'accompagnement et la sérénité que vous méritez.
            </p>

            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <span className="text-sm sm:text-base">Hammamet, Tunisie</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-sm sm:text-base">+33 1 23 45 67 89</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="w-5 h-5 text-orange-400 flex-shrink-0" />
                <span className="text-sm sm:text-base">contact@seniorescapes.tn</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Navigation</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm sm:text-base"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Nos Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service} className="text-gray-300 text-sm sm:text-base">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Informations</h3>
            <ul className="space-y-3 mb-6">
              {legalLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm sm:text-base"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>

            {/* Social Links */}
            <div>
              <h4 className="font-medium mb-3">Suivez-nous</h4>
              <div className="flex space-x-3">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-gray-600 text-gray-300 hover:text-white hover:border-blue-500 p-2"
                >
                  <Facebook className="w-4 h-4" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-gray-600 text-gray-300 hover:text-white hover:border-pink-500 p-2"
                >
                  <Instagram className="w-4 h-4" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-gray-600 text-gray-300 hover:text-white hover:border-red-500 p-2"
                >
                  <Youtube className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-gray-700" />

        {/* Bottom Footer */}
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <div className="text-gray-400 text-sm text-center sm:text-left">
            © 2025 Senior Escapes Tunisie. Tous droits réservés.
          </div>
          
          <div className="flex items-center space-x-2 text-gray-400 text-sm">
            <span>Fait avec</span>
            <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            <span>pour nos seniors</span>
          </div>
        </div>
      </div>
    </footer>
  );
}