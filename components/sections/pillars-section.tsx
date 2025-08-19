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
    <section className="py-24 sm:py-32 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 relative">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 opacity-3">
        <div className="absolute top-32 right-32 w-96 h-96 bg-blue-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 left-32 w-96 h-96 bg-amber-200 rounded-full blur-3xl"></div>
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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 mb-20">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            
            return (
              <div key={index} className="relative">
                {/* Vertical Separator Lines */}
                {index < pillars.length - 1 && (
                  <div className="hidden lg:block absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-slate-300/40 to-transparent z-10"></div>
                )}
                
                <div className="relative p-12 lg:p-16 bg-white/95 backdrop-blur-sm border-0 hover:bg-white transition-all duration-700 group">
                  {/* Pillar Number - Style Palace */}
                  <div className="absolute top-8 left-8 w-12 h-12 border border-slate-300/30 rounded-full flex items-center justify-center bg-white/50 backdrop-blur-sm">
                    <span className="text-slate-600 font-light text-lg">{pillar.number}</span>
                  </div>

                  {/* Icon - Très discret style palace */}
                  <div className="w-8 h-8 mb-8 mx-auto lg:mx-0">
                    <Icon className="w-8 h-8 text-slate-400 group-hover:text-slate-600 transition-colors duration-500" />
                  </div>

                  {/* Content */}
                  <div className="space-y-6 text-center lg:text-left">
                    <div>
                      <h3 className="text-2xl lg:text-3xl font-light text-slate-800 mb-3 leading-tight tracking-wide">
                        {pillar.title}
                      </h3>
                      <p className="text-sm font-medium text-slate-500 mb-6 tracking-widest uppercase">
                        {pillar.subtitle}
                      </p>
                      <p className="text-slate-600 leading-relaxed font-light text-base lg:text-lg">
                        {pillar.description}
                      </p>
                    </div>

                    {/* Features List */}
                    <div className="space-y-4">
                      {pillar.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start space-x-4 justify-center lg:justify-start">
                          <div className="w-1 h-1 bg-slate-400 rounded-full mt-3 flex-shrink-0"></div>
                          <span className="text-slate-700 text-sm lg:text-base leading-relaxed font-light">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Stats */}
                    <div className="pt-6 border-t border-slate-200/30">
                      <div className="text-slate-600 font-light text-sm tracking-wide">
                        {pillar.stats}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Horizontal Separator */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-300/40 to-transparent mb-16"></div>

        {/* Trust Indicators */}
        <div className="bg-white/90 backdrop-blur-sm rounded-none p-12 border-t border-b border-slate-200/30 mb-16">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-12 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-light text-slate-800 tracking-wide">500+</div>
              <div className="text-slate-600 text-sm font-light tracking-wide">Résidents Accueillis</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-light text-slate-800 tracking-wide">5★</div>
              <div className="text-slate-600 text-sm font-light tracking-wide">Hôtels Partenaires</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-light text-slate-800 tracking-wide">98%</div>
              <div className="text-slate-600 text-sm font-light tracking-wide">Satisfaction Client</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-light text-slate-800 tracking-wide">24/7</div>
              <div className="text-slate-600 text-sm font-light tracking-wide">Assistance Premium</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-slate-800 hover:bg-slate-900 text-white px-12 py-4 font-light text-lg tracking-wide shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-500 rounded-none"
          >
            Découvrir nos Expériences
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}