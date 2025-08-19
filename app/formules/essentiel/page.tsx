'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, ArrowLeft, Calendar, Phone, MessageCircle, Star, Users, Shield, Heart } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { BookingForm } from '@/components/booking-form';
import { Breadcrumb } from '@/components/breadcrumb';

export default function EssentielPage() {
  const [showBookingForm, setShowBookingForm] = useState(false);

  const formulaData = {
    id: 'essentiel',
    name: 'Séjour Essentiel',
    price: 1200,
    duration: '1-2 mois',
    description: 'Votre première expérience en Tunisie avec tout l\'essentiel pour un séjour serein et accompagné.',
    features: [
      'Hébergement confortable premium',
      'Référent francophone dédié',
      'Activités hebdomadaires raffinées',
      'Assistance 24h/24 premium'
    ],
    color: 'blue',
    badge: 'Découverte'
  };

  const breadcrumbItems = [
    { label: 'Nos Offres', href: '/#formules' },
    { label: 'Séjour Essentiel' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Landing Page Header - Simplified */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center hover:opacity-80 transition-opacity duration-200">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">V❊</span>
              </div>
              <div className="ml-3">
                <div className="text-lg font-bold text-gray-900">Vitanéo</div>
                <div className="text-xs text-blue-600 font-medium">TUNISIE</div>
              </div>
            </Link>

            {/* Contact Button */}
            <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-xl transition-all duration-300">
              <Phone className="w-4 h-4 mr-2" />
              Contact
            </Button>
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <Breadcrumb items={breadcrumbItems} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div>
              <Badge className="mb-4 bg-blue-50 text-blue-700 border border-blue-200">Première Immersion</Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Expérience Essentielle
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Votre première immersion dans l&apos;art de vivre méditerranéen. Découvrez nos hôtels partenaires 
                et l&apos;authenticité tunisienne dans un cadre sécurisé et raffiné.
              </p>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
              <div className="flex items-center space-x-2 mb-2">
                <Star className="w-5 h-5 text-blue-600" />
                <span className="font-semibold text-blue-900">À partir de 1,200€/mois</span>
              </div>
              <p className="text-blue-700 text-sm">
                Tout inclus • Sans frais cachés • Annulation flexible
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                onClick={() => setShowBookingForm(true)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Réserver cette expérience
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-blue-300 text-blue-700 hover:bg-blue-50 px-8 py-4 text-lg font-semibold rounded-xl"
              >
                <Phone className="w-5 h-5 mr-2" />
                Conseil personnalisé
              </Button>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative w-full h-96 lg:h-full">
            <Image
              src="https://images.pexels.com/photos/8170256/pexels-photo-8170256.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Expérience Essentielle - Art de vivre méditerranéen"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="rounded-2xl shadow-xl"
            />
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-3">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <div className="text-xs text-center mt-1 font-medium">Service 5 étoiles</div>
            </div>
          </div>
        </div>

        {/* What's Included Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Votre expérience résidentielle inclut
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Suite dans hôtel partenaire 4★",
                description: "Suite confortable avec vue jardin, terrasse privée et services hôteliers inclus",
                color: "blue"
              },
              {
                icon: Users,
                title: "Conciergerie francophone dédiée",
                description: "Équipe de conciergerie disponible 6j/7 pour tous vos besoins et demandes personnalisées",
                color: "blue"
              },
              {
                icon: Heart,
                title: "Programme culturel authentique",
                description: "Activités raffinées : bien-être, découvertes culturelles, soirées conviviales",
                color: "blue"
              },
              {
                icon: Shield,
                title: "Assistance premium 24h/24",
                description: "Support francophone permanent, coordination médicale et assistance administrative",
                color: "blue"
              },
              {
                icon: Users,
                title: "Services hôteliers inclus",
                description: "WiFi premium, service de chambre, linge fourni, accès aux équipements de l'hôtel",
                color: "blue"
              },
              {
                icon: Heart,
                title: "Mobilité assurée",
                description: "Navettes vers commerces et activités, transferts organisés selon vos besoins",
                color: "blue"
              }
            ].map((feature, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Personalized Support Section */}
        <div className="mt-20 bg-white rounded-3xl p-12 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Votre conciergerie personnalisée
              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Notre équipe de conciergerie francophone vous accompagne dès votre arrivée 
                pour une expérience résidentielle parfaitement orchestrée.
              </p>
              
              <div className="space-y-4">
                {[
                  "Accueil VIP à l'aéroport et transfert privé",
                  "Installation dans votre suite et présentation des services",
                  "Assistance bancaire et administrative locale",
                  "Présentation des commerces et services de proximité",
                  "Réservations activités et expériences culturelles",
                  "Suivi personnalisé de votre confort et bien-être",
                  "Support pour toutes vos démarches quotidiennes",
                  "Liaison privilégiée avec vos proches en Europe"
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 text-center border border-blue-200">
                <div className="w-20 h-20 bg-white rounded-full mx-auto mb-4 flex items-center justify-center">
                  <div className="relative w-16 h-16">
                    <Image
                    src="https://images.generated.photos/WCExNLBmxRJRbP_1MVpv_3G4IrRExowujljU3ZkUDic/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/ODk0NDU3LmpwZw.jpg"
                    alt="Sophie Martin"
                      fill
                      style={{ objectFit: 'cover' }}
                      sizes="64px"
                      className="rounded-full"
                    />
                  </div>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Sophie Martin</h4>
                <p className="text-blue-600 font-medium mb-4">Directrice Conciergerie</p>
                <p className="text-gray-600 text-sm italic mb-4">
                  "Chaque expérience résidentielle est unique. Notre équipe orchestre votre séjour 
                  pour que vous profitiez pleinement de l'art de vivre méditerranéen."
                </p>
                <div className="flex justify-center space-x-4">
                  <Button size="sm" variant="outline">
                    <Phone className="w-4 h-4 mr-2" />
                    Appeler
                  </Button>
                  <Button size="sm">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Chat
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Guarantee Section */}
        <div className="mt-20">
          <Card className="p-8 bg-green-50 border-green-200">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Garantie expérience</h3>
              <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Si votre expérience ne correspond pas à vos attentes dans les 7 premiers jours, 
                nous vous proposons une solution alternative ou un remboursement intégral.
              </p>
            </div>
          </Card>
        </div>

        {/* Your Activity Program */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Vos expériences culturelles incluses
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                day: "Lundi",
                time: "09:00 - 10:00",
                activity: "Bien-être aquatique",
                location: "Spa de l'hôtel partenaire",
                badge: "Inclus"
              },
              {
                day: "Mercredi",
                time: "14:00 - 17:00",
                activity: "Découverte culturelle",
                location: "Patrimoine tunisien",
                badge: "Inclus"
              },
              {
                day: "Samedi",
                time: "19:30 - 22:00",
                activity: "Soirée conviviale",
                location: "Salon de l'hôtel",
                badge: "Inclus"
              }
            ].map((program, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex justify-between items-start mb-4">
                  <Badge className="bg-blue-100 text-blue-700">{program.day}</Badge>
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                    {program.badge}
                  </Button>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{program.activity}</h3>
                <p className="text-gray-600 text-sm mb-2">{program.time}</p>
                <p className="text-gray-500 text-sm">{program.location}</p>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">
              Expériences supplémentaires disponibles via votre conciergerie
            </p>
            <Button variant="outline">
              Découvrir toutes les expériences
            </Button>
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Prêt pour votre première immersion ?</h3>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-8 leading-relaxed">
            Réservez votre Expérience Essentielle et découvrez l'art de vivre méditerranéen 
            dans nos hôtels partenaires d'exception.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={() => setShowBookingForm(true)}
              className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Réserver cette expérience
            </Button>
            <Button 
              size="lg" 
              className="bg-blue-700 text-white hover:bg-blue-800 border-0 px-8 py-4 text-lg font-semibold rounded-xl"
            >
              <Phone className="w-5 h-5 mr-2" />
              Conciergerie : +33 1 XX XX XX XX
            </Button>
          </div>
        </div>
      </div>

      {/* Booking Form */}
      <BookingForm 
        open={showBookingForm}
        onClose={() => setShowBookingForm(false)}
        formula={formulaData}
      />
    </div>
  );
}