'use client';

import { Users, Heart, Shield, MapPin, Phone, Star, CheckCircle, ArrowRight } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export function PillarsSection() {
  const pillars = [
    {
      icon: Users,
      title: "Conciergerie Dédiée",
      description: "Une équipe francophone experte vous accompagne dans chaque aspect de votre expérience résidentielle.",
      features: [
        "Conciergerie personnelle disponible 6j/7",
        "Coordination administrative et traductions expertes",
        "Liaison médicale privilégiée avec vos praticiens",
        "Assistance premium 24h/24 en français"
      ],
      highlight: "Service d'Exception",
      stats: "98% satisfaction",
      gradient: "from-blue-600 to-indigo-600"
    },
    {
      icon: Heart,
      title: "Communauté Exclusive",
      description: "Rejoignez une communauté raffinée de résidents européens partageant l'art de vivre méditerranéen.",
      features: [
        "Expériences culturelles quotidiennes d'exception",
        "Cercles d'intérêts raffinés et clubs exclusifs",
        "Excursions privées en groupe restreint",
        "Événements exclusifs dans nos hôtels partenaires"
      ],
      highlight: "Esprit Communauté",
      stats: "350+ résidents",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: Shield,
      title: "Sérénité d'Exception",
      description: "Profitez de votre expérience résidentielle en toute quiétude grâce à nos services premium sécurisés.",
      features: [
        "Hôtels partenaires sécurisés 24h/24 avec surveillance",
        "Partenariats médicaux d'excellence reconnus",
        "Assurance expérience complète incluse",
        "Services de conciergerie ultra-premium"
      ],
      highlight: "Sécurité Absolue",
      stats: "0 incident",
      gradient: "from-emerald-600 to-green-600"
    }
  ];

  return (
    <section className="py-20 sm:py-28 bg-gradient-to-br from-slate-50 via-white to-blue-50/20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-3">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-400 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-400 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header - Amanjena Style */}
        <div className="text-center mb-20 sm:mb-24">
          <div className="inline-flex items-center px-8 py-4 bg-white/80 backdrop-blur-sm border border-slate-200/50 rounded-full mb-10 shadow-xl">
            <Star className="w-6 h-6 mr-4 text-slate-700" />
            <span className="text-slate-800 font-medium text-lg sm:text-xl tracking-wide">L'Excellence Vitanéo</span>
          </div>
          
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-light text-slate-800 mb-8 sm:mb-10 leading-tight tracking-tight">
            Nos Trois Piliers
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-slate-700 font-normal mt-2"> d'Excellence</span>
          </h2>
          
          <p className="text-xl sm:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed px-4 font-light">
            L'art de vivre méditerranéen orchestré avec le raffinement et l'attention aux détails 
            <span className="block mt-2 text-blue-600">qui caractérisent les plus beaux resorts du monde.</span>
          </p>
        </div>

        {/* Pillars Grid - Unified Luxury Design */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 sm:gap-12 mb-20">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            
            return (
              <Card 
                key={index} 
                className="relative p-10 sm:p-12 bg-white/90 backdrop-blur-sm border-2 border-slate-200/50 hover:border-slate-300/50 hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-4 group overflow-hidden rounded-3xl"
              >
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-white/30 to-transparent rounded-full -translate-y-20 translate-x-20 group-hover:scale-150 transition-transform duration-1000"></div>
                
                {/* Highlight Badge */}
                <div className={`absolute top-6 right-6 bg-gradient-to-r ${pillar.gradient} text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg`}>
                  {pillar.highlight}
                </div>

                {/* Icon - Unified Style */}
                <div className={`w-24 h-24 sm:w-28 sm:h-28 bg-gradient-to-br ${pillar.gradient} rounded-3xl flex items-center justify-center mb-10 group-hover:scale-110 transition-transform duration-700 mx-auto sm:mx-0 shadow-2xl`}>
                  <Icon className="w-12 h-12 sm:w-14 sm:h-14 text-white" />
                </div>

                {/* Content */}
                <div className="space-y-8 text-center sm:text-left">
                  <div>
                    <h3 className="text-3xl sm:text-4xl font-light text-slate-800 group-hover:scale-105 transition-transform duration-500 mb-6 tracking-wide">
                      {pillar.title}
                    </h3>
                    
                    <p className="text-slate-600 leading-relaxed text-lg sm:text-xl font-light">
                      {pillar.description}
                    </p>
                  </div>

                  {/* Features List - Unified Style */}
                  <div className="space-y-5">
                    {pillar.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-5 group/item">
                        <div className={`w-7 h-7 bg-gradient-to-br ${pillar.gradient} rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform duration-300 shadow-lg`}>
                          <CheckCircle className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-slate-700 font-medium text-base sm:text-lg leading-relaxed group-hover/item:text-slate-800 transition-colors duration-300">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="inline-flex items-center px-6 py-3 bg-slate-50/80 backdrop-blur-sm rounded-full border border-slate-200/50 shadow-md">
                    <Star className="w-5 h-5 text-slate-600 mr-3" />
                    <span className="text-slate-700 font-semibold text-base">{pillar.stats}</span>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Trust Indicators - Amanjena Style */}
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-10 sm:p-16 shadow-2xl border border-slate-200/50 mb-20">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 text-center">
            <div className="space-y-3">
              <div className="text-5xl sm:text-6xl font-light bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">350+</div>
              <div className="text-slate-600 text-base sm:text-lg font-light">Résidents d'Exception</div>
            </div>
            <div className="space-y-3">
              <div className="text-5xl sm:text-6xl font-light bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">5 ans</div>
              <div className="text-slate-600 text-base sm:text-lg font-light">D'Excellence Méditerranéenne</div>
            </div>
            <div className="space-y-3">
              <div className="text-5xl sm:text-6xl font-light bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">98%</div>
              <div className="text-slate-600 text-base sm:text-lg font-light">Satisfaction Absolue</div>
            </div>
            <div className="space-y-3">
              <div className="text-5xl sm:text-6xl font-light bg-gradient-to-r from-slate-600 to-slate-700 bg-clip-text text-transparent">24/7</div>
              <div className="text-slate-600 text-base sm:text-lg font-light">Conciergerie Premium</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-slate-800 via-blue-900 to-indigo-900 hover:from-slate-900 hover:via-blue-950 hover:to-indigo-950 text-white px-16 py-6 text-xl font-medium shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 transition-all duration-500 rounded-2xl"
          >
            Découvrir nos formules
            <ArrowRight className="w-6 h-6 ml-3" />
          </Button>
        </div>
      </div>
    </section>
  );
}