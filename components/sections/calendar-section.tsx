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
  Waves,
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
      color: 'bg-green-500', 
      textColor: 'text-green-700',
      bgColor: 'bg-green-50',
      label: 'Bien-être', 
      icon: Heart 
    },
    'culture': { 
      color: 'bg-blue-500', 
      textColor: 'text-blue-700',
      bgColor: 'bg-blue-50',
      label: 'Culture', 
      icon: Palette 
    },
    'gastronomie': { 
      color: 'bg-orange-500', 
      textColor: 'text-orange-700',
      bgColor: 'bg-orange-50',
      label: 'Gastronomie', 
      icon: Utensils 
    },
    'loisirs': { 
      color: 'bg-purple-500', 
      textColor: 'text-purple-700',
      bgColor: 'bg-purple-50',
      label: 'Loisirs', 
      icon: Music 
    },
    'excursion': { 
      color: 'bg-teal-500', 
      textColor: 'text-teal-700',
      bgColor: 'bg-teal-50',
      label: 'Excursions', 
      icon: Mountain 
    },
    'sport': { 
      color: 'bg-indigo-500', 
      textColor: 'text-indigo-700',
      bgColor: 'bg-indigo-50',
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
  };

  const currentDayActivities = weeklyProgram[selectedDay as keyof typeof weeklyProgram] || [];

  return (
    <section id="activites" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full mb-6">
            <CalendarDays className="w-4 h-4 mr-2 text-blue-600" />
            <span className="text-blue-700 font-medium">Votre programme hebdomadaire</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Une semaine type
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600"> riche en découvertes</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Découvrez la diversité de nos activités quotidiennes : culture, bien-être, gastronomie, 
            excursions... Il y en a pour tous les goûts et tous les rythmes !
          </p>
        </div>

        {/* Activity Types Overview */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {Object.entries(activityTypes).map(([key, type]) => {
            const Icon = type.icon;
            return (
              <Card key={key} className={`p-4 text-center ${type.bgColor} border-2 border-transparent hover:border-gray-200 transition-all duration-300`}>
                <div className={`w-12 h-12 ${type.color} rounded-full flex items-center justify-center mx-auto mb-3`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className={`font-semibold ${type.textColor} text-sm`}>
                  {type.label}
                </div>
              </Card>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Day Selector */}
          <div className="lg:col-span-1">
            <Card className="p-6 sticky top-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Choisissez votre jour</h3>
              <div className="space-y-2">
                {days.map((day) => (
                  <Button
                    key={day.id}
                    variant={selectedDay === day.id ? "default" : "outline"}
                    className={`w-full justify-start text-left ${
                      selectedDay === day.id 
                        ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white' 
                        : 'hover:bg-blue-50'
                    }`}
                    onClick={() => setSelectedDay(day.id)}
                  >
                    <CalendarDays className="w-4 h-4 mr-2" />
                    {day.label}
                  </Button>
                ))}
              </div>
              
              {/* Day Stats */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-1">
                    {currentDayActivities.length}
                  </div>
                  <div className="text-sm text-gray-600">
                    activités ce jour
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Activities Timeline */}
          <div className="lg:col-span-3">
            <Card className="p-8">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-bold text-gray-900">
                  Programme du {days.find(d => d.id === selectedDay)?.label.toLowerCase()}
                </h3>
                <Badge className="bg-blue-100 text-blue-700 px-3 py-1">
                  {currentDayActivities.length} activités
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
                        <div className="absolute left-6 top-16 w-0.5 h-16 bg-gray-200"></div>
                      )}
                      
                      <div className="flex items-start space-x-6">
                        {/* Time & Icon */}
                        <div className="flex flex-col items-center flex-shrink-0">
                          <div className={`w-12 h-12 ${typeInfo.color} rounded-full flex items-center justify-center mb-2`}>
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          <div className="text-sm font-bold text-gray-900">
                            {activity.time}
                          </div>
                        </div>

                        {/* Activity Details */}
                        <Card className={`flex-1 p-6 ${typeInfo.bgColor} border-l-4 ${typeInfo.color.replace('bg-', 'border-')} hover:shadow-lg transition-all duration-300`}>
                          <div className="flex items-start justify-between mb-4">
                            <div className="flex-1">
                              <div className="flex items-center space-x-3 mb-2">
                                <h4 className="text-xl font-bold text-gray-900">
                                  {activity.title}
                                </h4>
                                <Badge className={`${typeInfo.color} text-white text-xs`}>
                                  {typeInfo.label}
                                </Badge>
                              </div>
                              <p className="text-gray-700 leading-relaxed mb-4">
                                {activity.description}
                              </p>
                            </div>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                            <div className="flex items-center space-x-2 text-gray-600">
                              <MapPin className="w-4 h-4" />
                              <span>{activity.location}</span>
                            </div>
                            <div className="flex items-center space-x-2 text-gray-600">
                              <Users className="w-4 h-4" />
                              <span>{activity.participants} participants max</span>
                            </div>
                            <div className="flex items-center space-x-2 text-gray-600">
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
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="p-6 text-center bg-gradient-to-br from-blue-600 to-blue-700 text-white">
            <div className="text-3xl font-bold mb-2">35+</div>
            <div className="text-blue-100">Activités par semaine</div>
          </Card>
          <Card className="p-6 text-center bg-gradient-to-br from-green-600 to-green-700 text-white">
            <div className="text-3xl font-bold mb-2">6</div>
            <div className="text-green-100">Types d'activités</div>
          </Card>
          <Card className="p-6 text-center bg-gradient-to-br from-orange-600 to-orange-700 text-white">
            <div className="text-3xl font-bold mb-2">100%</div>
            <div className="text-orange-100">Optionnelles</div>
          </Card>
          <Card className="p-6 text-center bg-gradient-to-br from-purple-600 to-purple-700 text-white">
            <div className="text-3xl font-bold mb-2">0€</div>
            <div className="text-purple-100">Coût supplémentaire</div>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-12 text-center text-white">
          <Star className="w-12 h-12 mx-auto mb-6 text-yellow-300" />
          <h3 className="text-3xl font-bold mb-4">Votre programme personnalisé</h3>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-8 leading-relaxed">
            Ce programme est adaptable selon vos préférences ! Participez aux activités qui vous intéressent, 
            à votre rythme, sans aucune obligation.
          </p>
          <Button 
            onClick={onStartWizard}
            size="lg" 
            className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-semibold"
          >
            Personnaliser mon séjour
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}