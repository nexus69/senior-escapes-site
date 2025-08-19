'use client';

import { Button } from '@/components/ui/button';
import { Play, ArrowRight, MapPin, Users, Shield, Star, Sparkles } from 'lucide-react';
import { useState } from 'react';
import { WeatherWidget } from '@/components/weather-widget';

interface HeroSectionProps {
  onStartWizard: () => void;
}

export function HeroSection({ onStartWizard }: HeroSectionProps) {
  const [videoPlaying, setVideoPlaying] = useState(false);

  return (
    <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Premium Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
          <img
            src="https://images.pexels.com/photos/15774203/pexels-photo-15774203.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
            alt="Vue sur la Méditerranée en Tunisie"
            className="w-full h-full object-cover"
          />
          {/* Premium Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
          {/* Luxury Texture Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30"></div>
          {/* Golden Accent */}
          <div className="absolute inset-0 bg-gradient-to-tr from-amber-900/20 via-transparent to-transparent"></div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-amber-400 rounded-full animate-pulse opacity-60"></div>
      <div className="absolute top-40 right-20 w-1 h-1 bg-amber-300 rounded-full animate-pulse opacity-40 delay-1000"></div>
      <div className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-amber-500 rounded-full animate-pulse opacity-50 delay-2000"></div>

      {/* Weather Widget - Enhanced */}
      <div className="absolute top-24 right-4 lg:right-8 z-20 w-64 hidden lg:block">
        <div className="backdrop-blur-md bg-white/10 rounded-2xl border border-white/20 shadow-2xl">
          <WeatherWidget />
        </div>
      </div>

      {/* Premium Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column - Premium Text Content */}
          <div className="lg:col-span-7 text-white space-y-10">
            {/* Premium Badge */}
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-amber-500/20 to-amber-600/20 backdrop-blur-sm rounded-full border border-amber-400/30 shadow-xl">
              <Sparkles className="w-5 h-5 mr-3 text-amber-400" />
              <span className="text-amber-100 font-semibold text-base tracking-wide">
                L'Excellence du Séjour Senior de Luxe
              </span>
            </div>
            
            {/* Premium Headline */}
            <div className="space-y-8">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
                <span className="block text-white drop-shadow-2xl">Vivez votre retraite</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-200 drop-shadow-lg">
                  d'exception
                </span>
              </h1>
              
              <p className="text-xl sm:text-2xl text-gray-200 leading-relaxed max-w-3xl font-light tracking-wide">
                Une expérience unique alliant <span className="text-amber-300 font-medium">climat méditerranéen</span>, 
                <span className="text-amber-300 font-medium"> communauté d'élite</span> et 
                <span className="text-amber-300 font-medium"> accompagnement sur mesure</span>. 
                Séjours de prestige de 1 à 6 mois.
              </p>
            </div>

            {/* Premium Stats */}
            <div className="flex flex-wrap gap-8 lg:gap-12">
              <div className="flex items-center space-x-4 group">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-400/20 to-amber-600/20 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-amber-400/30 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-8 h-8 text-amber-400" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">500+</div>
                  <div className="text-amber-200 text-sm font-medium tracking-wide">Résidents d'Exception</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 group">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-400/20 to-emerald-600/20 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-emerald-400/30 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-8 h-8 text-emerald-400" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">24/7</div>
                  <div className="text-emerald-200 text-sm font-medium tracking-wide">Conciergerie Premium</div>
                </div>
              </div>

              <div className="flex items-center space-x-4 group">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400/20 to-blue-600/20 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-blue-400/30 group-hover:scale-110 transition-transform duration-300">
                  <Star className="w-8 h-8 text-blue-400" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">98%</div>
                  <div className="text-blue-200 text-sm font-medium tracking-wide">Satisfaction Absolue</div>
                </div>
              </div>
            </div>

            {/* Premium CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 pt-8">
              <Button
                onClick={onStartWizard}
                size="lg"
                className="group relative bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 hover:from-amber-600 hover:via-amber-700 hover:to-amber-800 text-white px-10 py-6 text-xl font-bold shadow-2xl hover:shadow-amber-500/25 transform hover:-translate-y-2 transition-all duration-500 border-0 rounded-2xl overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                <span className="relative z-10 flex items-center">
                  <span className="hidden sm:inline">Créer Mon Séjour d'Exception</span>
                  <span className="sm:hidden">Mon Séjour d'Exception</span>
                  <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="group relative border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 px-10 py-6 text-xl font-bold backdrop-blur-sm bg-white/5 transition-all duration-500 rounded-2xl hover:shadow-2xl hover:shadow-white/10"
              >
                <Play className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform duration-300" />
                <span className="hidden sm:inline">Découvrir en Vidéo</span>
                <span className="sm:hidden">Voir la Vidéo</span>
              </Button>
            </div>
          </div>

          {/* Right Column - Premium Feature Cards */}
          <div className="lg:col-span-5 space-y-8 mt-16 lg:mt-0">
            {/* Weather Widget for mobile */}
            <div className="lg:hidden mb-8">
              <div className="backdrop-blur-md bg-white/10 rounded-2xl border border-white/20 shadow-2xl">
                <WeatherWidget />
              </div>
            </div>

            {/* Premium Feature Cards */}
            <div className="space-y-6">
              <div className="group relative bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-white/20 hover:border-white/30 transition-all duration-500 hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10 flex items-start space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-xl group-hover:scale-110 transition-transform duration-300">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-200 transition-colors duration-300">
                      Accompagnement d'Excellence
                    </h3>
                    <p className="text-gray-200 leading-relaxed text-lg">
                      Une équipe dédiée de professionnels vous accompagne avec un service personnalisé digne des plus grands palaces.
                    </p>
                  </div>
                </div>
              </div>

              <div className="group relative bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-white/20 hover:border-white/30 transition-all duration-500 hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10 flex items-start space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-xl group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-amber-200 transition-colors duration-300">
                      Communauté Privilégiée
                    </h3>
                    <p className="text-gray-200 leading-relaxed text-lg">
                      Rejoignez une communauté exclusive de retraités européens raffinés partageant vos valeurs et votre art de vivre.
                    </p>
                  </div>
                </div>
              </div>

              <div className="group relative bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-white/20 hover:border-white/30 transition-all duration-500 hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10 flex items-start space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-xl group-hover:scale-110 transition-transform duration-300">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-emerald-200 transition-colors duration-300">
                      Sérénité Absolue
                    </h3>
                    <p className="text-gray-200 leading-relaxed text-lg">
                      Logements sécurisés haut de gamme, assistance médicale premium et conciergerie 5 étoiles pour votre tranquillité totale.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Premium Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-white/40 rounded-full flex justify-center backdrop-blur-sm bg-white/5">
          <div className="w-1.5 h-4 bg-gradient-to-b from-amber-400 to-transparent rounded-full mt-3 animate-pulse"></div>
        </div>
      </div>

      {/* Premium Decorative Elements */}
      <div className="absolute top-1/4 right-10 w-32 h-32 border border-amber-400/20 rounded-full animate-pulse opacity-30"></div>
      <div className="absolute bottom-1/4 left-10 w-24 h-24 border border-white/20 rounded-full animate-pulse opacity-20 delay-1000"></div>
    </section>
  );
}