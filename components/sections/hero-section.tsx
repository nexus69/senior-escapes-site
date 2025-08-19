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
    <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-blue-50 to-white">
      {/* Background Video/Image */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
          <img
            src="https://images.pexels.com/photos/15774203/pexels-photo-15774203.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
            alt="Vue sur la Méditerranée en Tunisie"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 via-blue-800/40 to-blue-600/20"></div>
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
              <div className="inline-flex items-center px-6 py-3 bg-white/95 backdrop-blur-sm rounded-full border border-blue-200 mb-8 shadow-lg">
                <MapPin className="w-5 h-5 mr-3 text-blue-600" />
                <span className="text-blue-800 font-medium tracking-wide text-base sm:text-lg">Hammamet • Tunisie • Méditerranée</span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light leading-tight">
                <span className="block text-white mb-2">Vitanéo</span>
                <span className="block text-2xl sm:text-3xl lg:text-4xl text-blue-100 font-light italic">
                  L'art de vivre sa retraite en toute liberté
                </span>
              </h1>
              
              <p className="text-xl sm:text-2xl text-blue-50 leading-relaxed max-w-3xl font-light">
                Résidence temporaire de luxe face à la Méditerranée. 
                L'élégance d'un resort 5 étoiles, la sérénité d'un foyer, 
                l'authenticité de la Tunisie.
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8">
              <div className="flex items-center space-x-3">
                <div className="w-14 h-14 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg border border-blue-200">
                  <Users className="w-7 h-7 text-blue-600" />
                </div>
                <div>
                  <div className="text-3xl font-light text-white">500+</div>
                  <div className="text-blue-100 text-sm font-light">Résidents privilégiés</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-14 h-14 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg border border-blue-200">
                  <Shield className="w-7 h-7 text-blue-600" />
                </div>
                <div>
                  <div className="text-3xl font-light text-white">24/7</div>
                  <div className="text-blue-100 text-sm font-light">Conciergerie privée</div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6 max-w-2xl">
              <Button
                onClick={onStartWizard}
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-10 py-5 text-xl font-medium shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300 border-0 flex-shrink-0 rounded-full"
              >
                <span className="hidden sm:inline">Créer mon séjour d'exception</span>
                <span className="sm:hidden">Mon séjour d'exception</span>
                <ArrowRight className="w-5 h-5 ml-3" />
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-800 px-10 py-5 text-xl font-medium backdrop-blur-sm bg-white/10 transition-all duration-300 flex-shrink-0 rounded-full"
              >
                <Play className="w-5 h-5 mr-2" />
                <span className="hidden sm:inline">Découvrir Vitanéo</span>
                <span className="sm:hidden">Découvrir</span>
              </Button>
            </div>
          </div>

          {/* Right Column - Feature Cards */}
          <div className="lg:col-span-5 space-y-6 mt-12 lg:mt-0">
            {/* Weather Widget for mobile */}
            <div className="lg:hidden mb-6">
              <WeatherWidget />
            </div>

            <div className="bg-white/95 backdrop-blur-sm p-8 rounded-3xl shadow-2xl border border-blue-100">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-medium text-blue-900 mb-3">Conciergerie Privée</h3>
                  <p className="text-lg text-blue-700 leading-relaxed font-light">Une équipe dédiée anticipe vos besoins pour une expérience résidentielle sans égal.</p>
                </div>
              </div>
            </div>

            <div className="bg-white/95 backdrop-blur-sm p-8 rounded-3xl shadow-2xl border border-blue-100">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-medium text-blue-900 mb-3">Communauté Privilégiée</h3>
                  <p className="text-lg text-blue-700 leading-relaxed font-light">Rejoignez une communauté raffinée de résidents européens partageant l'art de vivre méditerranéen.</p>
                </div>
              </div>
            </div>

            <div className="bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-slate-200">
            <div className="bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-blue-100">
              <div className="flex items-start space-x-4">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Shield className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-light tracking-wide text-blue-900 mb-3">Sérénité Absolue</h3>
                  <p className="text-base text-blue-800 leading-relaxed font-light tracking-wide">Sécurité hôtelière, assistance médicale coordonnée et tranquillité d'esprit pour vous et vos proches.</p>
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