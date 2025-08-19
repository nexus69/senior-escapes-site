'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, Star, Crown, Gem, ArrowRight, Phone, Sparkles, Calendar, Shield } from 'lucide-react';

interface PackagesSectionProps {
  onStartWizard: () => void;
}

export function PackagesSection({ onStartWizard }: PackagesSectionProps) {
  const packages = [
    {
      id: 'essentiel',
      name: 'Expérience Essentielle',
      subtitle: 'Première Immersion',
      duration: '1-2 mois',
      price: '1,200',
      originalPrice: null,
      savings: null,
      description: 'Votre première immersion dans l\'art de vivre méditerranéen. Découvrez nos hôtels partenaires et l\'authenticité tunisienne dans un cadre sécurisé et raffiné.',
      badge: 'Première Expérience',
      badgeColor: 'bg-blue-50 text-blue-700 border border-blue-200',
      icon: Star,
      iconColor: 'text-blue-600',
      cardBorder: 'border-blue-200 hover:border-blue-300',
      cardBg: 'bg-gradient-to-br from-white to-blue-50/30',
      buttonStyle: 'bg-blue-600 hover:bg-blue-700 text-white',
      features: [
        'Suite dans hôtel partenaire 4★',
        'Conciergerie francophone dédiée',
        'Programme culturel authentique',
        'Assistance premium 24h/24'
      ],
      link: '/formules/essentiel'
    },
    {
      id: 'premium',
      name: 'Expérience Premium',
      subtitle: 'Art de Vivre Raffiné',
      duration: '3-4 mois',
      price: '1,000',
      originalPrice: '1,200',
      savings: 'Économie de 200€/mois • Plus Prisée',
      description: 'L\'expérience complète dans nos hôtels 5★ avec excursions d\'exception, suivi médical privilégié et conciergerie premium. L\'équilibre parfait entre raffinement et authenticité.',
      badge: 'Plus Prisée',
      badgeColor: 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg',
      icon: Crown,
      iconColor: 'text-orange-500',
      cardBorder: 'border-orange-300 ring-2 ring-orange-200/50 shadow-xl',
      cardBg: 'bg-gradient-to-br from-white via-orange-50/20 to-amber-50/30',
      buttonStyle: 'bg-orange-500 hover:bg-orange-600 text-white',
      features: [
        'Suite premium hôtel 5★',
        'Excursions privées d\'exception',
        'Suivi médical privilégié',
        'Transferts privés aéroport',
        'Conciergerie premium dédiée'
      ],
      link: '/formules/premium'
    },
    {
      id: 'excellence',
      name: 'Expérience Excellence',
      subtitle: 'Raffinement Absolu',
      duration: '5-6 mois',
      price: '900',
      originalPrice: '1,200',
      savings: 'Rapport qualité-prix exceptionnel',
      description: 'L\'art de vivre méditerranéen dans sa forme la plus raffinée. Suites d\'exception, expériences exclusives et services sur mesure dans nos plus beaux hôtels partenaires.',
      badge: 'Raffinement Absolu',
      badgeColor: 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg',
      icon: Gem,
      iconColor: 'text-purple-500',
      cardBorder: 'border-purple-300 ring-2 ring-purple-200/50 shadow-xl',
      cardBg: 'bg-gradient-to-br from-white via-purple-50/20 to-indigo-50/30',
      buttonStyle: 'bg-purple-600 hover:bg-purple-700 text-white',
      features: [
        'Suite d\'exception avec terrasse',
        'Expériences gastronomiques privées',
        'Chef personnel à disposition',
        'Spa & bien-être illimité',
        'Excursions exclusives sur mesure'
      ],
      link: '/formules/excellence'
    }
  ];

  return (
    <section id="formules" className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm border border-blue-200/50 rounded-full mb-8 shadow-lg">
            <Sparkles className="w-5 h-5 mr-3 text-blue-600" />
            <span className="text-slate-700 font-medium text-lg">Expériences Résidentielles d'Exception</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-light text-slate-800 mb-8 leading-tight">
            L'Art de Vivre
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-600 font-normal"> Méditerranéen</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-light">
            Trois expériences résidentielles uniques dans nos hôtels partenaires d'exception.
            <span className="block mt-2 text-blue-600">De 1 à 6 mois de raffinement méditerranéen.</span>
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-20">
          {packages.map((pkg) => {
            const Icon = pkg.icon;
            return (
              <Card key={pkg.id} className={`relative p-10 ${pkg.cardBg} ${pkg.cardBorder} hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 group overflow-hidden`}>
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/20 to-transparent rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700"></div>
                
                {/* Badge */}
                <div className="absolute top-4 right-4">
                  <Badge className={`${pkg.badgeColor} px-6 py-2 text-sm font-semibold rounded-full`}>
                    {pkg.badge}
                  </Badge>
                </div>

                {/* Header */}
                <div className="text-center mb-10 pt-2">
                  <div className={`w-20 h-20 mx-auto mb-6 bg-white/80 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg border border-white/50 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-10 h-10 ${pkg.iconColor}`} />
                  </div>
                  <h3 className="text-3xl font-light text-slate-800 mb-3 tracking-wide">{pkg.name}</h3>
                  <p className="text-blue-600 font-medium mb-2">{pkg.subtitle}</p>
                  <p className="text-slate-500 text-sm">{pkg.duration}</p>
                  
                  {/* Price */}
                  <div className="mb-6 mt-6">
                    <div className="flex items-baseline justify-center space-x-3">
                      <span className="text-4xl font-light text-slate-800">À partir de {pkg.price}€</span>
                      <span className="text-slate-500 font-light">/mois</span>
                    </div>
                    {pkg.savings && (
                      <p className="text-emerald-600 font-medium mt-3 text-sm">{pkg.savings}</p>
                    )}
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-600 text-center mb-10 leading-relaxed font-light">
                  {pkg.description}
                </p>

                {/* Features */}
                <div className="space-y-5 mb-10">
                  {pkg.features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-4 group/item">
                      <div className="w-6 h-6 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 shadow-md group-hover/item:scale-110 transition-transform duration-200">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-slate-700 font-medium leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <a href={pkg.link}>
                  <Button className={`w-full ${pkg.buttonStyle} py-4 text-lg font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105`}>
                    <Calendar className="w-5 h-5 mr-2" />
                    Découvrir cette expérience
                  </Button>
                </a>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="bg-gradient-to-r from-slate-800 via-blue-900 to-indigo-900 rounded-3xl p-16 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="relative z-10">
            <Shield className="w-16 h-16 mx-auto mb-6 text-blue-200" />
            <h3 className="text-4xl font-light mb-6 tracking-wide">Votre Expérience Sur Mesure</h3>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-10 leading-relaxed font-light">
              Notre équipe de conciergerie dédiée vous accompagne dans le choix de l'expérience parfaite selon vos aspirations et votre rythme de vie.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-slate-800 hover:bg-blue-50 hover:text-blue-800 px-10 py-4 text-lg font-medium rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <Phone className="w-5 h-5 mr-3" />
                Conseil Personnalisé
              </Button>
              <Button 
                onClick={onStartWizard}
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 text-lg font-medium rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 border-0"
              >
                <Sparkles className="w-5 h-5 mr-3" />
                Créer Mon Expérience
                <ArrowRight className="w-5 h-5 ml-3" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}