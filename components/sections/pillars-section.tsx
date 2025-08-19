'use client';

import { Users, Heart, Shield, MapPin, Phone, Star, CheckCircle, ArrowRight } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export function PillarsSection() {
  const pillars = [
    {
      icon: Users,
      title: "Accompagnement Personnalisé",
      description: "Une équipe francophone dédiée vous accompagne à chaque étape de votre séjour.",
      features: [
        "Conseiller personnel attitré disponible 6j/7",
        "Assistance administrative complète et traductions",
        "Suivi médical coordonné avec vos médecins",
        "Support d'urgence 24h/24 en français"
      ],
      color: "blue",
      highlight: "Service Premium",
      stats: "98% satisfaction"
    },
    {
      icon: Heart,
      title: "Communauté Chaleureuse",
      description: "Rejoignez une communauté dynamique de retraités européens partageant vos passions.",
      features: [
        "Activités culturelles quotidiennes variées",
        "Groupes d'intérêts communs et clubs",
        "Excursions découvertes en groupe",
        "Événements conviviaux et soirées thématiques"
      ],
      color: "orange",
      highlight: "Esprit Famille",
      stats: "500+ résidents"
    },
    {
      icon: Shield,
      title: "Sérénité Absolue",
      description: "Profitez de votre séjour en toute tranquillité grâce à nos services sécurisés.",
      features: [
        "Résidences sécurisées 24h/24 avec surveillance",
        "Partenariats médicaux fiables et reconnus",
        "Assurance séjour complète incluse",
        "Services de conciergerie haut de gamme"
      ],
      color: "green",
      highlight: "Sécurité Totale",
      stats: "0 incident"
    }
  ];


  return (
    <section className="py-16 sm:py-24 bg-white relative">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header - Enhanced */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center px-6 py-3 bg-white/95 backdrop-blur-sm rounded-full border border-slate-200 mb-8 shadow-lg">
            <Star className="w-5 h-5 mr-3 text-slate-600" />
            <span className="text-slate-700 font-light tracking-wide text-base sm:text-lg">Nos 3 piliers fondamentaux</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 sm:mb-8 leading-tight">
            Pourquoi choisir 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-800 to-slate-900 font-light tracking-wide block sm:inline"> Vitanéo</span> ?
          </h2>
          
          <p className="text-xl sm:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed px-4 font-light tracking-wide">
            Nous avons conçu une approche unique qui place l'humain au centre de chaque séjour, 
            pour une expérience de retraite véritablement enrichissante.
          </p>
        </div>

        {/* Enhanced Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10 mb-16">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            
            return (
              <Card 
                key={index} 
                className="relative p-8 sm:p-10 bg-white border-2 border-slate-300 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-3 group overflow-hidden"
              >
                {/* Highlight Badge */}
                <div className="absolute top-4 right-4 bg-slate-800 text-white px-3 py-1 rounded-full text-xs font-light tracking-wide">
                  {pillar.highlight}
                </div>

                {/* Icon with enhanced styling */}
                <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 mx-auto sm:mx-0 shadow-xl">
                  <Icon className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
                </div>

                {/* Content */}
                <div className="space-y-6 text-center sm:text-left">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-light tracking-wide text-slate-900 group-hover:scale-105 transition-transform duration-300 mb-4">
                      {pillar.title}
                    </h3>
                    
                    <p className="text-slate-700 leading-relaxed text-base sm:text-lg font-light tracking-wide">
                      {pillar.description}
                    </p>
                  </div>

                  {/* Enhanced Features List */}
                  <div className="space-y-4">
                    {pillar.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-4 group/item">
                        <div className="w-6 h-6 bg-slate-800 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform duration-200 shadow-md">
                          <CheckCircle className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-slate-800 font-light tracking-wide text-sm sm:text-base leading-relaxed group-hover/item:text-slate-900 transition-colors duration-200">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="inline-flex items-center px-4 py-2 bg-slate-50 rounded-full border border-slate-200">
                    <Star className="w-4 h-4 text-slate-600 mr-2" />
                    <span className="text-slate-800 font-light tracking-wide text-sm">{pillar.stats}</span>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Enhanced Trust Indicators */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-2xl border-2 border-slate-300">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
            <div className="space-y-3">
              <div className="text-4xl sm:text-5xl font-light tracking-wide text-slate-800">500+</div>
              <div className="text-slate-600 text-sm sm:text-base font-light tracking-wide">Résidents satisfaits</div>
            </div>
            <div className="space-y-3">
              <div className="text-4xl sm:text-5xl font-light tracking-wide text-slate-800">5 ans</div>
              <div className="text-slate-600 text-sm sm:text-base font-light tracking-wide">D'expérience en Tunisie</div>
            </div>
            <div className="space-y-3">
              <div className="text-4xl sm:text-5xl font-light tracking-wide text-slate-800">98%</div>
              <div className="text-slate-600 text-sm sm:text-base font-light tracking-wide">Taux de satisfaction</div>
            </div>
            <div className="space-y-3">
              <div className="text-4xl sm:text-5xl font-light tracking-wide text-slate-800">24/7</div>
              <div className="text-slate-600 text-sm sm:text-base font-light tracking-wide">Assistance disponible</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-slate-800 to-slate-900 hover:from-slate-900 hover:to-slate-800 text-white px-12 py-6 text-xl font-light tracking-wide shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300"
          >
            Découvrir nos formules
            <ArrowRight className="w-6 h-6 ml-3" />
          </Button>
        </div>
      </div>
    </section>
  );
}