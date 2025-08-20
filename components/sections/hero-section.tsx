'use client';

import { Button } from '@/components/ui/button';
import { Play, ArrowRight, MapPin, Users, Shield, Star, Sparkles, Sun, Waves } from 'lucide-react';
import { useState } from 'react';
import { WeatherWidget } from '@/components/weather-widget';

interface HeroSectionProps {
  onStartWizard: () => void;
}

export function HeroSection({ onStartWizard }: HeroSectionProps) {
  const [videoPlaying, setVideoPlaying] = useState(false);

  return (
    <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-slate-50 to-white">
      {/* Luxury Mediterranean Background */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
          <img
            src="https://images.pexels.com/photos/15774203/pexels-photo-15774203.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
            alt="Vue sur la Méditerranée en Tunisie"
            className="w-full h-full object-cover"
          />
          {/* Amanjena Style Overlay - Très subtil */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/40 via-slate-800/20 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-slate-50/10"></div>
          {/* Subtle Mediterranean Blue Accent */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-transparent to-amber-50/5"></div>
        </div>
      </div>

      {/* Floating Luxury Elements - Très discrets */}
      <div className="absolute top-32 right-16 w-1 h-1 bg-amber-300 rounded-full animate-pulse opacity-40"></div>
      <div className="absolute bottom-48 left-24 w-0.5 h-0.5 bg-blue-300 rounded-full animate-pulse opacity-30 delay-2000"></div>

      {/* Weather Widget - Style Luxury Resort */}
      <div className="absolute top-24 right-4 lg:right-8 z-20 w-64 hidden lg:block">
        <div className="backdrop-blur-sm bg-white/80 rounded-xl border border-white/40 shadow-lg">
          <WeatherWidget />
        </div>
      </div>

      {/* Main Content - Amanjena Inspired */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column - Épuré et Élégant */}
          <div className="lg:col-span-7 text-white space-y-12">
            
            {/* Luxury Badge - Style Resort */}
            <div className="inline-flex items-center px-8 py-4 bg-white/90 backdrop-blur-sm rounded-full shadow-lg">
              <Sun className="w-5 h-5 mr-3 text-amber-600" />
              <span className="text-slate-800 font-medium text-base tracking-wide">
                L'Art de Vivre sa Retraite en Toute Liberté
              </span>
            </div>
            
            {/* Main Headline - Amanjena Style */}
            <div className="space-y-8">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light leading-tight tracking-tight text-white">
                <span className="block font-extralight">Vitanéo</span>
                <span className="block text-4xl sm:text-5xl lg:text-6xl text-blue-200 font-light mt-2">
                  Tunisie
                </span>
              </h1>
              
              <p className="text-xl sm:text-2xl text-slate-100 leading-relaxed max-w-3xl font-light tracking-wide">
                Résidences hôtelières d'exception en Méditerranée. 
                <span className="block mt-2 text-blue-200">
                  Sérénité, authenticité, confort absolu.
                </span>
              </p>
            </div>

            {/* Luxury Stats - Style Resort Discret */}
            <div className="flex flex-wrap gap-12">
              <div className="flex items-center space-x-4 group">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20">
                  <Users className="w-6 h-6 text-blue-200" />
                </div>
                <div>
                  <div className="text-2xl font-light text-white">500+</div>
                  <div className="text-blue-200 text-sm font-light">Résidents</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 group">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20">
                  <Shield className="w-6 h-6 text-emerald-200" />
                </div>
                <div>
                  <div className="text-2xl font-light text-white">24/7</div>
                  <div className="text-emerald-200 text-sm font-light">Conciergerie</div>
                </div>
              </div>

              <div className="flex items-center space-x-4 group">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20">
                  <Star className="w-6 h-6 text-amber-200" />
                </div>
                <div>
                  <div className="text-2xl font-light text-white">5★</div>
                  <div className="text-amber-200 text-sm font-light">Hôtels Partenaires</div>
                </div>
              </div>
            </div>

            {/* CTA Buttons - Style Luxury Resort */}
            <div className="flex flex-col sm:flex-row gap-6 pt-8">
              <Button
                onClick={onStartWizard}
                size="lg"
                className="group bg-white text-slate-800 hover:bg-slate-50 px-10 py-6 text-lg font-medium shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-500 border-0 rounded-full"
              >
                <span className="flex items-center">
                  Créer Mon Séjour d'Exception
                  <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="group border-2 border-white/40 text-white hover:bg-white/10 hover:border-white/60 px-10 py-6 text-lg font-medium backdrop-blur-sm bg-white/5 transition-all duration-500 rounded-full"
              >
                <Play className="w-5 h-5 mr-3" />
                Découvrir Vitanéo
              </Button>
            </div>
          </div>

          {/* Right Column - Cards Épurées Style Resort */}
          <div className="lg:col-span-5 space-y-8 mt-16 lg:mt-0">
            
            {/* Weather Widget Mobile */}
            <div className="lg:hidden mb-8">
              <div className="backdrop-blur-sm bg-white/80 rounded-xl border border-white/40 shadow-lg">
                <WeatherWidget />
              </div>
            </div>

            {/* Luxury Feature Cards - Style Amanjena */}
            <div className="space-y-6">
              
              {/* Card 1 - Hôtels Partenaires */}
              <div className="group relative bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                <div className="flex items-start space-x-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Star className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-slate-800 mb-3">
                      Hôtels Partenaires 5★
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      Résidez dans nos hôtels partenaires sélectionnés pour leur excellence et leur raffinement méditerranéen.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 2 - Conciergerie */}
              <div className="group relative bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                <div className="flex items-start space-x-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Shield className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-slate-800 mb-3">
                      Conciergerie Dédiée
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      Une équipe francophone à votre service 24h/24 pour une sérénité absolue et un accompagnement personnalisé.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 3 - Art de Vivre */}
              <div className="group relative bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                <div className="flex items-start space-x-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Waves className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-slate-800 mb-3">
                      Art de Vivre Méditerranéen
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      Découvrez l'authenticité tunisienne dans un cadre de liberté totale, entre culture millénaire et modernité.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Style Épuré */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border border-white/40 rounded-full flex justify-center backdrop-blur-sm bg-white/5">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>

      {/* Decorative Elements - Très Subtils */}
      <div className="absolute top-1/3 right-12 w-24 h-24 border border-white/10 rounded-full animate-pulse opacity-20"></div>
      <div className="absolute bottom-1/3 left-12 w-16 h-16 border border-blue-200/10 rounded-full animate-pulse opacity-15 delay-1000"></div>
    </section>
  );
}