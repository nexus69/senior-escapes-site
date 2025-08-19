'use client';

import { Users, Heart, Shield, MapPin, Phone, Star, CheckCircle, ArrowRight } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export function PillarsSection() {
  const pillars = [
    {
      icon: Users,
      title: "Conciergerie d'Exception",
      description: "Une équipe francophone dédiée orchestre chaque détail de votre expérience résidentielle dans nos hôtels partenaires.",
      features: [
        "Conciergerie personnelle francophone 6j/7",
        "Coordination privilégiée avec vos praticiens",
        "Assistance administrative experte",
        "Support premium 24h/24 en français"
      ],
      highlight: "Excellence",
      stats: "98% satisfaction",
      gradient: "from-slate-600 to-blue-700"
    },
    {
      icon: Heart,
      title: "Art de Vivre Méditerranéen",
      description: "Découvrez l'authenticité tunisienne dans le cadre raffiné de nos hôtels partenaires d'exception.",
      features: [
        "Expériences culturelles authentiques",
        "Excursions privées avec guides experts",
        "Gastronomie méditerranéenne raffinée",
        "Événements dans nos resorts partenaires"
      ],
      highlight: "Authenticité",
      stats: "300 jours de soleil",
      gradient: "from-amber-500 to-orange-600"
    },
    {
      icon: Shield,
      title: "Sérénité Absolue",
      description: "Votre tranquillité d'esprit assurée par nos partenariats d'excellence et notre expertise reconnue.",
      features: [
        "Hôtels partenaires 4★ et 5★ sécurisés",
        "Partenariats médicaux d'excellence",
        "Assurance expérience complète",
        "Expertise reconnue depuis 5 ans"
      ],
      highlight: "Confiance",
      stats: "0 incident",
      gradient: "from-emerald-500 to-teal-600"
    }
  ];

  return (
    <section className="py-24 sm:py-32 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-72 h-72 bg-blue-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-amber-300 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header - Style Épuré */}
        <div className="text-center mb-24 sm:mb-28">
          <div className="inline-flex items-center px-8 py-4 bg-white/90 backdrop-blur-sm border border-slate-200/40 rounded-full mb-12 shadow-lg">
            <Star className="w-5 h-5 mr-3 text-slate-600" />
            <span className="text-slate-700 font-medium text-lg tracking-wide">L'Excellence Vitanéo</span>
          </div>
          
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-light text-slate-800 mb-10 leading-tight tracking-tight">
            Trois Piliers
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-slate-600 via-blue-600 to-slate-700 font-normal mt-3"> d'Excellence</span>
          </h2>
          
          <p className="text-xl sm:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-light">
            L'art de vivre méditerranéen dans nos hôtels partenaires d'exception.
            <span className="block mt-3 text-blue-600">Raffinement, authenticité, sérénité.</span>
          </p>
        </div>

        {/* Pillars Grid - Style Amanjena Épuré */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 sm:gap-16 mb-24">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            
            return (
              <Card 
                key={index} 
                className="relative p-12 sm:p-16 bg-white/95 backdrop-blur-sm border border-slate-200/30 hover:border-slate-300/40 hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-6 group overflow-hidden rounded-3xl"
              >
                {/* Subtle Decorative Element */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/20 to-transparent rounded-full -translate-y-16 translate-x-16 group-hover:scale-125 transition-transform duration-1000"></div>
                
                {/* Highlight Badge */}
                <div className={`absolute top-8 right-8 bg-gradient-to-r ${pillar.gradient} text-white px-5 py-2 rounded-full text-sm font-medium shadow-lg`}>
                  {pillar.highlight}
                </div>

                {/* Icon - Style Épuré */}
                <div className={`w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br ${pillar.gradient} rounded-2xl flex items-center justify-center mb-12 group-hover:scale-110 transition-transform duration-700 shadow-xl`}>
                  <Icon className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
                </div>

                {/* Content - Centré et Épuré */}
                <div className="space-y-8 text-center">
                  <div>
                    <h3 className="text-3xl sm:text-4xl font-light text-slate-800 mb-6 tracking-wide leading-tight">
                      {pillar.title}
                    </h3>
                    
                    <p className="text-slate-600 leading-relaxed text-lg font-light max-w-sm mx-auto">
                      {pillar.description}
                    </p>
                  </div>

                  {/* Features List - Style Minimaliste */}
                  <div className="space-y-4">
                    {pillar.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center justify-center space-x-3 group/item">
                        <div className={`w-6 h-6 bg-gradient-to-br ${pillar.gradient} rounded-full flex items-center justify-center flex-shrink-0 shadow-md`}>
                          <CheckCircle className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-slate-700 font-medium text-base leading-relaxed">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="inline-flex items-center px-6 py-3 bg-slate-50/60 backdrop-blur-sm rounded-full border border-slate-200/40 shadow-sm">
                    <Star className="w-4 h-4 text-slate-500 mr-2" />
                    <span className="text-slate-600 font-medium text-sm">{pillar.stats}</span>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Trust Indicators - Style Épuré */}
        <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-12 sm:p-20 shadow-xl border border-slate-200/30 mb-24">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-12 text-center">
            <div className="space-y-3">
              <div className="text-4xl sm:text-5xl font-light bg-gradient-to-r from-slate-600 to-blue-700 bg-clip-text text-transparent">500+</div>
              <div className="text-slate-600 text-sm sm:text-base font-light">Résidents Accueillis</div>
            </div>
            <div className="space-y-3">
              <div className="text-4xl sm:text-5xl font-light bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent">5★</div>
              <div className="text-slate-600 text-sm sm:text-base font-light">Hôtels Partenaires</div>
            </div>
            <div className="space-y-3">
              <div className="text-4xl sm:text-5xl font-light bg-gradient-to-r from-emerald-500 to-teal-600 bg-clip-text text-transparent">98%</div>
              <div className="text-slate-600 text-sm sm:text-base font-light">Satisfaction Client</div>
            </div>
            <div className="space-y-3">
              <div className="text-4xl sm:text-5xl font-light bg-gradient-to-r from-slate-600 to-slate-700 bg-clip-text text-transparent">24/7</div>
              <div className="text-slate-600 text-sm sm:text-base font-light">Assistance Premium</div>
            </div>
          </div>
        </div>

        {/* Call to Action - Style Épuré */}
        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-slate-700 via-blue-800 to-slate-800 hover:from-slate-800 hover:via-blue-900 hover:to-slate-900 text-white px-12 py-4 text-lg font-medium shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 rounded-xl"
          >
            Découvrir nos formules
            <ArrowRight className="w-6 h-6 ml-3" />
          </Button>
        </div>
      </div>
    </section>
  );
}