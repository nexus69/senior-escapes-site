'use client';

import { Users, Heart, Shield, MapPin, Phone, Star, CheckCircle, ArrowRight } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export function PillarsSection() {
  const pillars = [
    {
      icon: Users,
      title: "Conciergerie Dédiée",
      subtitle: "Excellence Personnalisée",
      description: "Une équipe francophone experte orchestre chaque détail de votre expérience résidentielle avec la discrétion et l'efficacité des plus grands palaces.",
      features: [
        "Conciergerie personnelle francophone",
        "Coordination médicale privilégiée", 
        "Assistance administrative discrète",
        "Support premium 24h/24"
      ],
      number: "01",
      stats: "98% de satisfaction",
      color: "blue"
    },
    {
      icon: Heart,
      title: "Art de Vivre",
      subtitle: "Authenticité Méditerranéenne", 
      description: "Découvrez les trésors de la culture tunisienne dans le cadre préservé de nos résidences partenaires, loin du tourisme de masse.",
      features: [
        "Expériences culturelles privées",
        "Guides historiens reconnus",
        "Gastronomie méditerranéenne d'exception",
        "Accès privilégié au patrimoine"
      ],
      number: "02",
      stats: "300 jours de soleil",
      color: "amber"
    },
    {
      icon: Shield,
      title: "Sérénité Absolue",
      subtitle: "Confiance & Expertise",
      description: "Votre tranquillité d'esprit garantie par nos partenariats d'excellence et notre expertise reconnue depuis plus de 5 ans.",
      features: [
        "Résidences partenaires certifiées",
        "Partenariats médicaux d'excellence", 
        "Assurance tous risques incluse",
        "Expertise reconnue depuis 2019"
      ],
      number: "03", 
      stats: "Zéro incident majeur",
      color: "emerald"
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
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm border border-slate-200/50 rounded-full mb-8 shadow-sm">
            <Star className="w-4 h-4 mr-2 text-slate-600" />
            <span className="text-slate-700 font-medium tracking-wide">L'Excellence Vitanéo</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-slate-800 mb-6 leading-tight">
            Nos Trois Piliers
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-slate-600 via-blue-600 to-slate-700 font-normal mt-2">d'Excellence</span>
          </h2>
          
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light">
            Les fondements de votre expérience résidentielle d'exception en Méditerranée.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            const isCenter = index === 1;
            
            return (
              <div key={index} className="relative">
                {/* Separator Line - Only between pillars */}
                {index < pillars.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-px h-32 bg-gradient-to-b from-transparent via-slate-300 to-transparent transform -translate-y-1/2 z-10"></div>
                )}
                
                <Card className={`relative p-8 bg-white/95 backdrop-blur-sm border border-slate-200/40 hover:border-slate-300/50 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 group ${isCenter ? 'lg:scale-105 lg:shadow-lg' : ''}`}>
                  {/* Pillar Number */}
                  <div className="absolute top-6 right-6 w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center">
                    <span className="text-slate-600 text-sm font-medium">{pillar.number}</span>
                  </div>

                  {/* Icon - Plus discret */}
                  <div className={`w-12 h-12 bg-${pillar.color}-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-${pillar.color}-100 transition-colors duration-300`}>
                    <Icon className={`w-6 h-6 text-${pillar.color}-600`} />
                  </div>

                  {/* Content */}
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-light text-slate-800 mb-2 leading-tight">
                        {pillar.title}
                      </h3>
                      <p className={`text-sm font-medium text-${pillar.color}-600 mb-4 tracking-wide uppercase`}>
                        {pillar.subtitle}
                      </p>
                      <p className="text-slate-600 leading-relaxed font-light">
                        {pillar.description}
                      </p>
                    </div>

                    {/* Features List */}
                    <div className="space-y-3">
                      {pillar.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start space-x-3">
                          <div className={`w-1.5 h-1.5 bg-${pillar.color}-500 rounded-full mt-2.5 flex-shrink-0`}></div>
                          <span className="text-slate-700 text-sm leading-relaxed">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Stats */}
                    <div className="pt-4 border-t border-slate-200/50">
                      <div className={`text-${pillar.color}-600 font-medium text-sm`}>
                        {pillar.stats}
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            );
          })}
        </div>

        {/* Trust Indicators */}
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-sm border border-slate-200/40 mb-16">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-light text-slate-700">500+</div>
              <div className="text-slate-600 text-sm font-light">Résidents Accueillis</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-light text-slate-700">5★</div>
              <div className="text-slate-600 text-sm font-light">Hôtels Partenaires</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-light text-slate-700">98%</div>
              <div className="text-slate-600 text-sm font-light">Satisfaction Client</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-light text-slate-700">24/7</div>
              <div className="text-slate-600 text-sm font-light">Assistance Premium</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-slate-800 hover:bg-slate-900 text-white px-8 py-3 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
          >
            Découvrir nos Expériences
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}