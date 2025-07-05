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

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: {
        bg: "bg-gradient-to-br from-blue-50 via-blue-100 to-indigo-100",
        iconBg: "bg-gradient-to-br from-blue-500 to-blue-600",
        iconColor: "text-white",
        titleColor: "text-blue-900",
        border: "border-blue-200",
        accent: "text-blue-600",
        highlight: "bg-blue-500",
        button: "bg-blue-600 hover:bg-blue-700"
      },
      orange: {
        bg: "bg-gradient-to-br from-orange-50 via-orange-100 to-red-100",
        iconBg: "bg-gradient-to-br from-orange-500 to-red-500",
        iconColor: "text-white",
        titleColor: "text-orange-900",
        border: "border-orange-200",
        accent: "text-orange-600",
        highlight: "bg-orange-500",
        button: "bg-orange-600 hover:bg-orange-700"
      },
      green: {
        bg: "bg-gradient-to-br from-green-50 via-green-100 to-emerald-100",
        iconBg: "bg-gradient-to-br from-green-500 to-emerald-600",
        iconColor: "text-white",
        titleColor: "text-green-900",
        border: "border-green-200",
        accent: "text-green-600",
        highlight: "bg-green-500",
        button: "bg-green-600 hover:bg-green-700"
      }
    };
    return colorMap[color as keyof typeof colorMap];
  };

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header - Enhanced */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-100 to-orange-100 rounded-full mb-8 shadow-lg">
            <Star className="w-5 h-5 mr-3 text-blue-600" />
            <span className="text-blue-700 font-bold text-base sm:text-lg">Nos 3 piliers fondamentaux</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 sm:mb-8 leading-tight">
            Pourquoi choisir 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 block sm:inline"> Senior Escapes</span> ?
          </h2>
          
          <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4 font-light">
            Nous avons conçu une approche unique qui place l'humain au centre de chaque séjour, 
            pour une expérience de retraite véritablement enrichissante.
          </p>
        </div>

        {/* Enhanced Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10 mb-16">
          {pillars.map((pillar, index) => {
            const colors = getColorClasses(pillar.color);
            const Icon = pillar.icon;
            
            return (
              <Card 
                key={index} 
                className={`relative p-8 sm:p-10 ${colors.bg} ${colors.border} border-2 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 group overflow-hidden`}
              >
                {/* Highlight Badge */}
                <div className={`absolute top-4 right-4 ${colors.highlight} text-white px-3 py-1 rounded-full text-xs font-bold`}>
                  {pillar.highlight}
                </div>

                {/* Icon with enhanced styling */}
                <div className={`w-20 h-20 sm:w-24 sm:h-24 ${colors.iconBg} rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 mx-auto sm:mx-0 shadow-xl`}>
                  <Icon className={`w-10 h-10 sm:w-12 sm:h-12 ${colors.iconColor}`} />
                </div>

                {/* Content */}
                <div className="space-y-6 text-center sm:text-left">
                  <div>
                    <h3 className={`text-2xl sm:text-3xl font-bold ${colors.titleColor} group-hover:scale-105 transition-transform duration-300 mb-4`}>
                      {pillar.title}
                    </h3>
                    
                    <p className="text-gray-700 leading-relaxed text-base sm:text-lg font-medium">
                      {pillar.description}
                    </p>
                  </div>

                  {/* Enhanced Features List */}
                  <div className="space-y-4">
                    {pillar.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-4 group/item">
                        <div className={`w-6 h-6 ${colors.iconBg} rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform duration-200 shadow-md`}>
                          <CheckCircle className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-gray-800 font-semibold text-sm sm:text-base leading-relaxed group-hover/item:text-gray-900 transition-colors duration-200">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className={`inline-flex items-center px-4 py-2 ${colors.bg} rounded-full border ${colors.border}`}>
                    <Star className={`w-4 h-4 ${colors.accent} mr-2`} />
                    <span className={`${colors.accent} font-bold text-sm`}>{pillar.stats}</span>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Enhanced Trust Indicators */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-gray-100">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
            <div className="space-y-3">
              <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">500+</div>
              <div className="text-gray-600 text-sm sm:text-base font-medium">Résidents satisfaits</div>
            </div>
            <div className="space-y-3">
              <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">5 ans</div>
              <div className="text-gray-600 text-sm sm:text-base font-medium">D'expérience en Tunisie</div>
            </div>
            <div className="space-y-3">
              <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">98%</div>
              <div className="text-gray-600 text-sm sm:text-base font-medium">Taux de satisfaction</div>
            </div>
            <div className="space-y-3">
              <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">24/7</div>
              <div className="text-gray-600 text-sm sm:text-base font-medium">Assistance disponible</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 hover:from-blue-700 hover:via-purple-700 hover:to-orange-600 text-white px-12 py-6 text-xl font-bold shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300"
          >
            Découvrir nos formules
            <ArrowRight className="w-6 h-6 ml-3" />
          </Button>
        </div>
      </div>
    </section>
  );
}