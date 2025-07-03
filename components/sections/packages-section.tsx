'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, Star, Crown, Gem, ArrowRight, Phone } from 'lucide-react';

interface PackagesSectionProps {
  onStartWizard: () => void;
}

export function PackagesSection({ onStartWizard }: PackagesSectionProps) {
  const packages = [
    {
      id: 'essentiel',
      name: 'Séjour Essentiel',
      subtitle: 'Découverte',
      duration: '1-2 mois',
      price: '1,200',
      originalPrice: null,
      savings: null,
      description: 'Votre première expérience en Tunisie avec tout l\'essentiel pour un séjour serein et accompagné. Idéal pour découvrir notre concept et la douceur de vivre tunisienne.',
      badge: 'Découverte',
      badgeColor: 'bg-gray-100 text-gray-700',
      icon: Star,
      iconColor: 'text-gray-600',
      cardBorder: 'border-gray-200',
      buttonStyle: 'bg-gray-900 hover:bg-gray-800 text-white',
      features: [
        'Hébergement confortable premium',
        'Référent francophone dédié',
        'Activités hebdomadaires raffinées',
        'Assistance 24h/24 premium'
      ],
      link: '/formules/essentiel'
    },
    {
      id: 'premium',
      name: 'Séjour Premium',
      subtitle: 'Confort Premium',
      duration: '3-4 mois',
      price: '1,000',
      originalPrice: '1,200',
      savings: 'Économie de 200€/mois',
      description: 'L\'expérience complète avec excursions culturelles, suivi médical privilégié et services de conciergerie. Le parfait équilibre entre confort, découverte et sérénité.',
      badge: 'Plus populaire',
      badgeColor: 'bg-orange-500 text-white',
      icon: Crown,
      iconColor: 'text-orange-500',
      cardBorder: 'border-orange-300 ring-2 ring-orange-200',
      buttonStyle: 'bg-orange-500 hover:bg-orange-600 text-white',
      features: [
        'Tout l\'Essentiel inclus',
        'Excursions culturelles d\'exception',
        'Suivi médical privilégié',
        'Transferts aéroport premium',
        'Service de conciergerie'
      ],
      link: '/formules/premium'
    },
    {
      id: 'excellence',
      name: 'Séjour Excellence',
      subtitle: 'Luxe Absolu',
      duration: '5-6 mois',
      price: '900',
      originalPrice: '1,200',
      savings: 'Meilleur rapport qualité-prix',
      description: 'L\'art de vivre à la tunisienne dans un cadre d\'exception. Services sur mesure, expériences exclusives et confort absolu pour un séjour inoubliable.',
      badge: 'Luxe Absolu',
      badgeColor: 'bg-purple-500 text-white',
      icon: Gem,
      iconColor: 'text-purple-500',
      cardBorder: 'border-purple-300 ring-2 ring-purple-200',
      buttonStyle: 'bg-purple-600 hover:bg-purple-700 text-white',
      features: [
        'Tout le Premium inclus',
        'Suite avec terrasse privée',
        'Chef personnel 2x/semaine',
        'Spa & bien-être illimité',
        'Excursions premium exclusives'
      ],
      link: '/formules/excellence'
    }
  ];

  return (
    <section id="formules" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-orange-100 rounded-full mb-6">
            <Crown className="w-4 h-4 mr-2 text-orange-600" />
            <span className="text-orange-700 font-medium">Nos Formules d'Exception</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Des séjours sur mesure
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-purple-600 block sm:inline"> de 1 à 6 mois</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Avec accompagnement premium, services d'exception et garantie satisfaction absolue
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {packages.map((pkg) => {
            const Icon = pkg.icon;
            return (
              <Card key={pkg.id} className={`relative p-8 ${pkg.cardBorder} hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2`}>
                {/* Badge */}
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className={`${pkg.badgeColor} px-4 py-1 text-sm font-semibold`}>
                    {pkg.badge}
                  </Badge>
                </div>

                {/* Header */}
                <div className="text-center mb-8 pt-4">
                  <div className={`w-16 h-16 ${pkg.iconColor} mx-auto mb-4 bg-gray-50 rounded-full flex items-center justify-center`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  <p className="text-gray-600 mb-4">{pkg.duration}</p>
                  
                  {/* Price */}
                  <div className="mb-4">
                    <div className="flex items-baseline justify-center space-x-2">
                      <span className="text-4xl font-bold text-gray-900">À partir de {pkg.price}€</span>
                      <span className="text-gray-500">/mois</span>
                    </div>
                    {pkg.savings && (
                      <p className="text-green-600 font-medium mt-2">{pkg.savings}</p>
                    )}
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-center mb-8 leading-relaxed">
                  {pkg.description}
                </p>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  {pkg.features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <a href={pkg.link}>
                  <Button className={`w-full ${pkg.buttonStyle} py-3 text-lg font-semibold`}>
                    Découvrir cette formule
                  </Button>
                </a>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Besoin d'aide pour choisir ?</h3>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-8 leading-relaxed">
            Sophie et son équipe sont là pour vous conseiller et créer le séjour parfait selon vos envies et votre budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-semibold"
            >
              <Phone className="w-5 h-5 mr-2" />
              Parler à Sophie : +33 1 XX XX XX XX
            </Button>
            <Button 
              onClick={onStartWizard}
              size="lg" 
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold"
            >
              Construire mon séjour
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}