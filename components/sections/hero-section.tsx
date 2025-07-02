'use client';

import { Button } from '@/components/ui/button';
import { Play, ArrowRight, MapPin, Users, Shield } from 'lucide-react';
import { useState } from 'react';
import { WeatherWidget } from '@/components/weather-widget';

interface HeroSectionProps {
  onStartWizard: () => void;
}

export function HeroSection({ onStartWizard }: HeroSectionProps) {
  const [videoPlaying, setVideoPlaying] = useState(false);

  return (
    <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video/Image */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
          <img
            src="https://images.pexels.com/photos/15774203/pexels-photo-15774203.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
            alt="Vue sur la Méditerranée en Tunisie"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-800/60 to-transparent"></div>
        </div>
      </div>

      {/* Weather Widget - Positioned top right */}
      <div className="absolute top-24 right-4 lg:right-8 z-20 w-64 hidden lg:block">
        <WeatherWidget />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column - Text Content */}
          <div className="lg:col-span-7 text-white space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                <MapPin className="w-4 h-4 mr-2" />
                <span className="text-sm font-medium">Votre nouvelle vie sous le soleil tunisien</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Vivez votre retraite
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-500">
                  en toute sérénité
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl text-blue-100 leading-relaxed max-w-2xl">
                Découvrez une expérience unique alliant climat méditerranéen, 
                communauté chaleureuse et accompagnement personnalisé. 
                Séjours de 1 à 6 mois pour retraités européens actifs.
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-orange-400" />
                </div>
                <div>
                  <div className="text-2xl font-bold">500+</div>
                  <div className="text-blue-200 text-sm">Résidents heureux</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <Shield className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <div className="text-2xl font-bold">24/7</div>
                  <div className="text-blue-200 text-sm">Assistance francophone</div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6 max-w-2xl">
              <Button
                onClick={onStartWizard}
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 border-0 flex-shrink-0"
              >
                <span className="hidden sm:inline">Construire mon séjour sur mesure</span>
                <span className="sm:hidden">Mon séjour sur mesure</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg font-semibold backdrop-blur-sm bg-white/10 transition-all duration-300 flex-shrink-0"
              >
                <Play className="w-5 h-5 mr-2" />
                <span className="hidden sm:inline">Découvrir en vidéo</span>
                <span className="sm:hidden">Voir la vidéo</span>
              </Button>
            </div>
          </div>

          {/* Right Column - Feature Cards */}
          <div className="lg:col-span-5 space-y-6 mt-12 lg:mt-0">
            {/* Weather Widget for mobile */}
            <div className="lg:hidden mb-6">
              <WeatherWidget />
            </div>

            <div className="bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-white/20">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Accompagnement Personnalisé</h3>
                  <p className="text-base text-gray-600">Une équipe dédiée vous accompagne avant, pendant et après votre séjour pour une expérience sur mesure.</p>
                </div>
              </div>
            </div>

            <div className="bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-white/20">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Communauté Chaleureuse</h3>
                  <p className="text-base text-gray-600">Rejoignez une communauté de retraités européens partageant vos valeurs et vos envies de découverte.</p>
                </div>
              </div>
            </div>

            <div className="bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-white/20">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Sérénité Garantie</h3>
                  <p className="text-base text-gray-600">Logements sécurisés, assistance médicale et services conciergerie pour votre tranquillité d'esprit.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}