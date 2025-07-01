'use client';

import { Mail, Phone, MapPin, Facebook, Instagram, Youtube, FileText, ShieldCheck } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

        {/* Logo & Description */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Senior Escapes</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Votre retraite active au soleil. Séjours longue durée en Tunisie avec accompagnement personnalisé.
          </p>
        </div>

        {/* Liens utiles */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Navigation</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="#vie-sur-place" className="hover:text-white transition">La vie sur place</a></li>
            <li><a href="#activites" className="hover:text-white transition">Activités</a></li>
            <li><a href="#equipe" className="hover:text-white transition">Notre équipe</a></li>
            <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Coordonnées */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact</h4>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li className="flex items-center gap-2"><Phone className="w-4 h-4" /> +33 1 23 45 67 89</li>
            <li className="flex items-center gap-2"><Mail className="w-4 h-4" /> contact@seniorescapes.tn</li>
            <li className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Hammamet, Tunisie</li>
          </ul>
        </div>

        {/* Réseaux sociaux */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Suivez-nous</h4>
          <div className="flex space-x-4 text-gray-400">
            <a href="#" className="hover:text-white transition-colors duration-200"><Facebook className="w-5 h-5" /></a>
            <a href="#" className="hover:text-white transition-colors duration-200"><Instagram className="w-5 h-5" /></a>
            <a href="#" className="hover:text-white transition-colors duration-200"><Youtube className="w-5 h-5" /></a>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-800 pt-6 flex flex-col sm:flex-row justify-between items-center text-gray-500 text-xs px-4">
        <div className="mb-4 sm:mb-0">&copy; {new Date().getFullYear()} Senior Escapes. Tous droits réservés.</div>
        <div className="flex space-x-6">
          <a href="/mentions-legales" className="flex items-center gap-1 hover:text-white transition-colors duration-200">
            <FileText className="w-4 h-4" /> Mentions légales
          </a>
          <a href="/politique-confidentialite" className="flex items-center gap-1 hover:text-white transition-colors duration-200">
            <ShieldCheck className="w-4 h-4" /> Politique de confidentialité
          </a>
        </div>
      </div>
    </footer>
  );
}