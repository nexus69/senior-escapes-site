'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  CalendarDays, 
  Clock, 
  MapPin, 
  Users, 
  Heart,
  Palette,
  Utensils,
  Music,
  Camera,
  
}Waves,
  Mountain,
  BookOpen,
  ArrowRight,
  Star
} from 'lucide-react';

interface CalendarSectionProps {
  onStartWizard?: () => void;
}

export function CalendarSection({ onStartWizard }: CalendarSectionProps) {
  const [selectedDay, setSelectedDay] = useState('lundi');

  const activityTypes = {
    'bien-etre': { 
      color: 'bg-slate-500', 
      textColor: 'text-slate-700',
      bgColor: 'bg-slate-50',
      label: 'Bien-être', 
      icon: Heart 
    },
    'culture': { 
      color: 'bg-slate-600', 
      textColor: 'text-slate-700',
      bgColor: 'bg-slate-50',
      label: 'Culture', 
      icon: Palette 
    },
    'gastronomie': { 
      color: 'bg-slate-500', 
      textColor: 'text-slate-700',
      bgColor: 'bg-slate-50',
      label: 'Gastronomie', 
      icon: Utensils 
    },
    'loisirs': { 
      color: 'bg-slate-600', 
      textColor: 'text-slate-700',
      bgColor: 'bg-slate-50',
      label: 'Loisirs', 
      icon: Music 
    },
    'excursion': { 
      color: 'bg-slate-500', 
      textColor: 'text-slate-700',
      bgColor: 'bg-slate-50',
      label: 'Excursions', 
      icon: Mountain 
    },
    'sport': { 
      color: 'bg-slate-600', 
      textColor: 'text-slate-700',
      bgColor: 'bg-slate-50',
      label: 'Sport', 
      icon: Waves 
    }
  };

  const weeklyProgram = {
    lundi: [
      {
        time: '08:00',
        title: 'Yoga matinal',
        type: 'bien-etre',
        location: 'Terrasse panoramique',
        participants: 12,
        description: 'Commencez la semaine en douceur avec une séance de yoga face à la mer',
        duration: '1h'
      },
      {
        time: '10:30',
        title: 'Atelier peinture aquarelle',
        type: 'culture',
        location: 'Atelier artistique',
        participants: 8,
        description: 'Capturez la beauté des paysages tunisiens à l\'aquarelle',
        duration: '2h'
      },
      {
        time: '15:00',
        title: 'Cours de cuisine : Couscous royal',
        type: 'gastronomie',
        location: 'Cuisine collective',
        participants: 10,
        description: 'Apprenez les secrets du couscous authentique avec notre chef',
        duration: '2h30'
      },
      {
        time: '20:00',
        title: 'Soirée jeux de société',
        type: 'loisirs',
        location: 'Salon principal',
        participants: 20,
        description: 'Moments conviviaux autour de jeux traditionnels et modernes',
        duration: '2h'
      }
    ],
    mardi: [
      {
        time: '09:00',
        title: 'Aqua-fitness',
        type: 'sport',
        location: 'Piscine chauffée',
        participants: 15,
        description: 'Exercices aquatiques adaptés aux seniors dans une eau à 28°C',
        duration: '45min'
      },
      {
        time: '14:00',
        title: 'Excursion Sidi Bou Saïd',
        type: 'excursion',
        location: 'Village pittoresque',
        participants: 25,
        description: 'Découverte du célèbre village aux maisons bleues et blanches',
        duration: '4h'
      },
      {
        time: '19:30',
        title: 'Dégustation vins tunisiens',
        type: 'gastronomie',
        location: 'Cave à vins',
        participants: 16,
        description: 'Découverte des cépages locaux accompagnée de mezzés',
        duration: '1h30'
      }
    ],
    mercredi: [
      {
        time: '08:30',
        title: 'Marche nordique',
        type: 'sport',
        location: 'Bord de mer',
        participants: 18,
        description: 'Marche tonifiante le long de la côte méditerranéenne',
        duration: '1h15'
      },
      {
        time: '10:00',
        title: 'Atelier poterie berbère',
        type: 'culture',
        location: 'Atelier artisanal',
        participants: 12,
        description: 'Initiation aux techniques ancestrales de la poterie tunisienne',
        duration: '2h'
      },
      {
        time: '16:00',
        title: 'Thé à la menthe et pâtisseries',
        type: 'gastronomie',
        location: 'Terrasse orientale',
        participants: 30,
        description: 'Moment de détente autour des saveurs authentiques',
        duration: '1h'
      },
      {
        time: '20:30',
        title: 'Concert de musique andalouse',
        type: 'culture',
        location: 'Amphithéâtre',
        participants: 50,
        description: 'Soirée musicale avec des artistes locaux renommés',
        duration: '1h30'
      }
    ],
    jeudi: [
      {
        time: '09:00',
        title: 'Méditation pleine conscience',
        type: 'bien-etre',
        location: 'Jardin zen',
        participants: 14,
        description: 'Séance de méditation dans un cadre paisible et verdoyant',
        duration: '45min'
      },
      {
        time: '10:30',
        title: 'Cours d\'arabe dialectal',
        type: 'culture',
        location: 'Salle de classe',
        participants: 20,
        description: 'Apprenez les bases de l\'arabe tunisien pour mieux échanger',
        duration: '1h'
      },
      {
        time: '14:30',
        title: 'Visite des souks de Hammamet',
        type: 'excursion',
        location: 'Médina d\'Hammamet',
        participants: 22,
        description: 'Exploration guidée des marchés traditionnels et négociation',
        duration: '3h'
      },
      {
        time: '19:00',
        title: 'Cours de danse orientale',
        type: 'loisirs',
        location: 'Studio de danse',
        participants: 16,
        description: 'Initiation ludique aux mouvements gracieux de la danse orientale',
        duration: '1h'
      }
    ],
    vendredi: [
      {
        time: '08:00',
        title: 'Tai Chi au lever du soleil',
        type: 'bien-etre',
        location: 'Plage privée',
        participants: 10,
        description: 'Mouvements harmonieux face à l\'horizon méditerranéen',
        duration: '1h'
      },
      {
        time: '10:00',
        title: 'Atelier calligraphie arabe',
        type: 'culture',
        location: 'Bibliothèque',
        participants: 8,
        description: 'Découverte de l\'art de la belle écriture arabe',
        duration: '2h'
      },
      {
        time: '15:00',
        title: 'Excursion Carthage antique',
        type: 'excursion',
        location: 'Site archéologique',
        participants: 28,
        description: 'Voyage dans l\'histoire de la civilisation carthaginoise',
        duration: '4h'
      },
      {
        time: '20:00',
        title: 'Dîner gastronomique tunisien',
        type: 'gastronomie',
        location: 'Restaurant panoramique',
        participants: 40,
        description: 'Menu dégustation des spécialités régionales',
        duration: '2h30'
      }
    ],
    samedi: [
      {
        time: '09:30',
        title: 'Natation libre encadrée',
        type: 'sport',
        location: 'Piscine olympique',
        participants: 12,
        description: 'Séance de natation avec maître-nageur pour tous niveaux',
        duration: '1h'
      },
      {
        time: '11:00',
        title: 'Marché aux épices guidé',
        type: 'gastronomie',
        location: 'Marché central',
        participants: 15,
        description: 'Découverte des épices et herbes aromatiques tunisiennes',
        duration: '2h'
      },
      {
        time: '16:00',
        title: 'Atelier photographie',
        type: 'loisirs',
        location: 'Vieille ville',
        participants: 10,
        description: 'Capturez la beauté architecturale de Hammamet',
        duration: '2h30'
      },
      {
        time: '19:30',
        title: 'Soirée contes et légendes',
        type: 'culture',
        location: 'Salon berbère',
        participants: 25,
        description: 'Récits traditionnels tunisiens dans une ambiance authentique',
        duration: '1h30'
      }
    ],
    dimanche: [
      {
        time: '09:00',
        title: 'Brunch dominical',
        type: 'gastronomie',
        location: 'Terrasse principale',
        participants: 60,
        description: 'Grand buffet méditerranéen en terrasse avec vue mer',
        duration: '2h'
      },
      {
        time: '11:30',
        title: 'Lecture partagée',
        type: 'loisirs',
        location: 'Bibliothèque',
        participants: 12,
        description: 'Club de lecture avec discussions autour d\'auteurs tunisiens',
        duration: '1h30'
      },
      {
        time: '15:00',
        title: 'Massage bien-être',
        type: 'bien-etre',
        location: 'Spa (sur RDV)',
        participants: 6,
        description: 'Soins relaxants aux huiles essentielles locales',
        duration: '1h'
      },
      {
        time: '17:00',
        title: 'Pétanque et apéritif',
        type: 'loisirs',
        location: 'Terrain de pétanque',
        participants: 24,
        description: 'Tournoi amical suivi d\'un apéritif convivial',
        duration: '2h'
      }
    ]
  };

  const days = [
    { id: 'lundi', label: 'Lundi', shortLabel: 'Lun' },
    { id: 'mardi', label: 'Mardi', shortLabel: 'Mar' },
    { id: 'mercredi', label: 'Mercredi', shortLabel: 'Mer' },
    { id: 'jeudi', label: 'Jeudi', shortLabel: 'Jeu' },
    { id: 'vendredi', label: 'Vendredi', shortLabel: 'Ven' },
    { id: 'samedi', label: 'Samedi', shortLabel: 'Sam' },
    { id: 'dimanche', label: 'Dimanche', shortLabel: 'Dim' }
  ];

  const getActivityTypeInfo = (type: string) => {
    return activityTypes[type as keyof typeof activityTypes] || activityTypes.loisirs;
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm border border-slate-200/50 rounded-full mb-8 shadow-sm">
            <CalendarDays className="w-4 h-4 mr-2 text-slate-600" />
            <span className="text-slate-700 font-medium tracking-wide">Votre programme hebdomadaire</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-slate-800 mb-6 leading-tight">
            Programme d'Exception
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-slate-600 via-blue-600 to-slate-700 font-normal mt-2">Méditerranéen</span>
          </h2>
          
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light">
            Expériences raffinées orchestrées par notre conciergerie dans nos hôtels partenaires d'exception.
          </p>
        </div>

        {/* Activity Types Overview */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
          {Object.entries(activityTypes).map(([key, type]) => {
            const Icon = type.icon;
            return (
              <Card key={key} className="p-6 text-center bg-white border-2 border-slate-200/50 hover:border-slate-300 hover:shadow-lg transition-all duration-500 shadow-sm">
                <div className="w-16 h-16 bg-gradient-to-br from-slate-100 to-slate-200 rounded-full flex items-center justify-center mx-auto mb-4 border border-slate-300">
                  <Icon className="w-6 h-6 text-slate-600" />
                </div>
                <div className="font-light text-slate-800 text-sm tracking-wide">
                  {type.label}
                </div>
              </Card>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Day Selector */}
          <div className="lg:col-span-1">
            <Card className="p-8 sticky top-8 bg-white border-2 border-slate-200 shadow-lg">
              <h3 className="text-xl font-light text-slate-800 mb-6 tracking-wide">Choisissez votre jour</h3>
              <div className="space-y-2">
                {days.map((day) => (
                  <Button
                    key={day.id}
                    variant={selectedDay === day.id ? "default" : "outline"}
                    className={`w-full justify-start text-left ${
                      selectedDay === day.id 
                        ? 'bg-slate-800 text-white font-light' 
                        : 'hover:bg-slate-50 border-slate-200 text-slate-700 font-light'
                    }`}
                    onClick={() => setSelectedDay(day.id)}
                  >
                    <CalendarDays className="w-4 h-4 mr-2" />
                    <span className="tracking-wide">{day.label}</span>
                  </Button>
                ))}
              </div>
              
              {/* Day Stats */}
              <div className="mt-8 pt-6 border-t border-slate-200">
                <div className="text-center">
                  <div className="text-3xl font-light text-slate-800 mb-2 tracking-wide">
                    {currentDayActivities.length}
                  </div>
                  <div className="text-sm text-slate-600 font-light tracking-wide">
                    activités ce jour
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Activities Timeline */}
          <div className="lg:col-span-3">
            <Card className="p-12 bg-white border-2 border-slate-200 shadow-lg">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-3xl font-light text-slate-800 tracking-wide">
                  Programme du {days.find(d => d.id === selectedDay)?.label.toLowerCase()}
                </h3>
                <Badge className="bg-slate-100 text-slate-700 px-4 py-2 font-light border border-slate-200">
                  {currentDayActivities.length} expériences
                </Badge>
              </div>

              <div className="space-y-6">
                {currentDayActivities.map((activity, index) => {
                  const typeInfo = getActivityTypeInfo(activity.type);
                  const Icon = typeInfo.icon;
                  
                  return (
                    <div key={index} className="relative">
                      {/* Timeline line */}
                      {index < currentDayActivities.length - 1 && (
                        <div className="absolute left-6 top-16 w-px h-16 bg-slate-300"></div>
                      )}
                      
                      <div className="flex items-start space-x-6">
                        {/* Time & Icon */}
                        <div className="flex flex-col items-center flex-shrink-0">
                          <div className={`w-12 h-12 ${typeInfo.color} rounded-full flex items-center justify-center mb-2`}>
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          <div className="text-sm font-light text-slate-800 tracking-wide">
                            {activity.time}
                          </div>
                        </div>

                        {/* Activity Details */}
                        <Card className="flex-1 p-8 bg-white border-2 border-slate-200 hover:shadow-lg transition-all duration-500">
                          <div className="flex items-start justify-between mb-4">
                            <div className="flex-1">
                              <div className="flex items-center space-x-3 mb-2">
                                <h4 className="text-xl font-light text-slate-800 tracking-wide">
                                  {activity.title}
                                </h4>
                                <Badge className="bg-slate-100 text-slate-700 text-xs font-light border border-slate-200">
                                  {typeInfo.label}
                                </Badge>
                              </div>
                              <p className="text-slate-600 leading-relaxed mb-6 font-light">
                                {activity.description}
                              </p>
                            </div>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                            <div className="flex items-center space-x-2 text-slate-600 font-light">
                              <MapPin className="w-4 h-4" />
                              <span>{activity.location}</span>
                            </div>
                            <div className="flex items-center space-x-2 text-slate-600 font-light">
                              <Users className="w-4 h-4" />
                              <span>{activity.participants} participants max</span>
                            </div>
                            <div className="flex items-center space-x-2 text-slate-600 font-light">
                              <Clock className="w-4 h-4" />
                              <span>Durée : {activity.duration}</span>
                            </div>
                          </div>
                        </Card>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Card>
          </div>
        </div>

        {/* Weekly Stats */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-8">
          <Card className="p-8 text-center bg-white border-2 border-slate-200 shadow-lg">
            <div className="text-4xl font-light text-slate-800 mb-3 tracking-wide">35+</div>
            <div className="text-slate-600 font-light tracking-wide">Expériences par semaine</div>
          </Card>
          <Card className="p-8 text-center bg-white border-2 border-slate-200 shadow-lg">
            <div className="text-4xl font-light text-slate-800 mb-3 tracking-wide">6</div>
            <div className="text-slate-600 font-light tracking-wide">Types d'expériences</div>
          </Card>
          <Card className="p-8 text-center bg-white border-2 border-slate-200 shadow-lg">
            <div className="text-4xl font-light text-slate-800 mb-3 tracking-wide">100%</div>
            <div className="text-slate-600 font-light tracking-wide">Optionnelles</div>
          </Card>
          <Card className="p-8 text-center bg-white border-2 border-slate-200 shadow-lg">
            <div className="text-4xl font-light text-slate-800 mb-3 tracking-wide">0€</div>
            <div className="text-slate-600 font-light tracking-wide">Coût supplémentaire</div>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 rounded-3xl p-16 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-slate-600/10"></div>
          <div className="relative z-10">
            <Star className="w-16 h-16 mx-auto mb-8 text-amber-300" />
            <h3 className="text-4xl font-light mb-6 tracking-wide">Programme Sur Mesure</h3>
            <p className="text-xl text-slate-200 max-w-3xl mx-auto mb-10 leading-relaxed font-light">
              Expériences entièrement personnalisables orchestrées par notre conciergerie dans nos hôtels partenaires d'exception.
          </p>
          <Button 
            onClick={onStartWizard}
            size="lg" 
              className="bg-white text-slate-800 hover:bg-slate-50 hover:text-slate-900 border-0 px-12 py-4 font-light text-lg tracking-wide transition-all duration-500 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
              Créer Mon Programme
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          </div>
        </div>
      </div>
    </section>
  );
}