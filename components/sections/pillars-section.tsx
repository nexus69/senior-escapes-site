'use client';

import { Users, Heart, Shield, MapPin, Phone, Star } from 'lucide-react';
import { Card } from '@/components/ui/card';

export function PillarsSection() {
  const pillars = [
    {
      icon: Users,
      title: "Accompagnement Personnalisé",
      description: "Une équipe francophone dédiée vous accompagne à chaque étape de votre séjour.",
      features: [
        "Conseiller personnel attitré",
        "Assistance administrative complète",
        "Suivi médical coordonné",
        "Support 24h/24 en français"
      ],
      color: "blue"
    },
    {
      icon: Heart,
      title: "Communauté Chaleureuse",
      description: "Rejoignez une communauté dynamique de retraités européens partageant vos passions.",
      features: [
        "Activités culturelles quotidiennes",
        "Groupes d'intérêts communs",
        "Excursions et découvertes",
        "Événements conviviaux réguliers"
      ],
      color: "orange"
    },
    {
      icon: Shield,
      title: "Sérénité Absolue",
      description: "Profitez de votre séjour en toute tranquillité grâce à nos services sécurisés.",
      features: [
        "Résidences sécurisées 24h/24",
        "Partenariats médicaux fiables",
        "Assurance séjour incluse",
        "Services de conciergerie"
      ],
      color: "green"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: {
        bg: "bg-blue-50",
        iconBg: "bg-blue-100",
        iconColor: "text-blue-600",
        titleColor: "text-blue-800",
        border: "border-blue-200"
      },
      orange: {
        bg: "bg-orange-50",
        iconBg: "bg-orange-100",
        iconColor: "text-orange-600",
        titleColor: "text-orange-800",
        border: "border-orange-200"
      },
      green: {
        bg: "bg-green-50",
        iconBg: "bg-green-100",
        iconColor: "text-green-600",
        titleColor: "text-green-800",
        border: "border-green-200"
      }
    };
    return colorMap[color as keyof typeof colorMap];
  };

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full mb-6">
            <Star className="w-4 h-4 mr-2 text-blue-600" />
            <span className="text-blue-700 font-medium text-sm sm:text-base">Nos 3 piliers fondamentaux</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
            Pourquoi choisir 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-500 block sm:inline"> Senior Escapes</span> ?
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Nous avons conçu une approche unique qui place l'humain au centre de chaque séjour, 
            pour une expérience de retraite véritablement enrichissante.
          </p>
        </div>

        {/* Pillars Grid - Mobile Optimized */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {pillars.map((pillar, index) => {
            const colors = getColorClasses(pillar.color);
            const Icon = pillar.icon;
            
            return (
              <Card 
                key={index} 
                className={`p-6 sm:p-8 ${colors.bg} ${colors.border} border-2 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group`}
              >
                {/* Icon */}
                <div className={`w-16 h-16 sm:w-20 sm:h-20 ${colors.iconBg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 mx-auto sm:mx-0`}>
                  <Icon className={`w-8 h-8 sm:w-10 sm:h-10 ${colors.iconColor}`} />
                </div>

                {/* Content */}
                <div className="space-y-4 text-center sm:text-left">
                  <h3 className={`text-xl sm:text-2xl font-bold ${colors.titleColor} group-hover:scale-105 transition-transform duration-300`}>
                    {pillar.title}
                  </h3>
                  
                  <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                    {pillar.description}
                  </p>

                  {/* Features List - Mobile Optimized */}
                  <ul className="space-y-3 mt-6">
                    {pillar.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <div className={`w-2 h-2 ${colors.iconBg} rounded-full mt-3 flex-shrink-0`}></div>
                        <span className="text-gray-700 font-medium text-sm sm:text-base leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Trust Indicators - Mobile Optimized */}
        <div className="mt-12 sm:mt-16 bg-white rounded-2xl p-6 sm:p-8 shadow-lg">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-center">
            <div className="space-y-2">
              <div className="text-2xl sm:text-3xl font-bold text-blue-600">500+</div>
              <div className="text-gray-600 text-sm sm:text-base">Résidents satisfaits</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl sm:text-3xl font-bold text-orange-500">5 ans</div>
              <div className="text-gray-600 text-sm sm:text-base">D'expérience en Tunisie</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl sm:text-3xl font-bold text-green-600">98%</div>
              <div className="text-gray-600 text-sm sm:text-base">Taux de satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}