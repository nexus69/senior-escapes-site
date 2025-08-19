'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, ArrowLeft, Calendar, Phone, MessageCircle, Star, Users, Shield, Heart, Gem, Crown, Sparkles } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { BookingForm } from '@/components/booking-form';
import { Breadcrumb } from '@/components/breadcrumb';

export default function ExcellencePage() {
  const [showBookingForm, setShowBookingForm] = useState(false);

  const formulaData = {
    id: 'excellence',
    name: 'Séjour Excellence',
    price: 900,
    duration: '5-6 mois',
    description: 'L\'art de vivre à la tunisienne dans un cadre d\'exception. Services sur mesure, expériences exclusives et confort absolu.',
    features: [
      'Tout le Premium inclus',
      'Suite avec terrasse privée',
      'Chef personnel 2x/semaine',
      'Spa & bien-être illimité',
      'Excursions premium exclusives'
    ],
    color: 'purple',
    badge: 'Luxe Absolu'
  };

  const breadcrumbItems = [
    { label: 'Nos Offres', href: '/#formules' },
    { label: 'Séjour Excellence' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50">
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
            <Button className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white shadow-lg hover:shadow-xl transition-all duration-300">
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
              <Badge className="mb-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg">Raffinement Absolu</Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Expérience Excellence
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                L'art de vivre méditerranéen dans sa forme la plus raffinée. Suites d'exception, 
                expériences exclusives et services sur mesure dans nos plus beaux hôtels partenaires.
              </p>
            </div>

            <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg">
              <div className="flex items-center space-x-2 mb-2">
                <Star className="w-5 h-5 text-purple-600" />
                <span className="font-semibold text-purple-900">À partir de 900€/mois</span>
              </div>
              <p className="text-purple-700 text-sm">
                Meilleur rapport qualité-prix • Économie de 300€/mois vs Essentiel
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                onClick={() => setShowBookingForm(true)}
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Réserver Excellence
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-purple-300 text-purple-700 hover:bg-purple-50 px-8 py-4 text-lg font-semibold rounded-xl"
              >
                <Phone className="w-5 h-5 mr-2" />
                Entretien personnalisé
              </Button>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative w-full h-96 lg:h-full">
            <Image
              src="https://images.pexels.com/photos/3771120/pexels-photo-3771120.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Suite Excellence hôtel de luxe avec spa privé"
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

        {/* Services d'Exception */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Votre expérience résidentielle d'Exception
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Crown,
                title: "Expérience Premium incluse",
                description: "Tous les services Premium + les prestations d'exception Excellence",
                color: "purple"
              },
              {
                icon: Gem,
                title: "Suite d'exception avec terrasse",
                description: "Suite prestige avec salon privé, chambre master et terrasse panoramique exclusive",
                color: "purple"
              },
              {
                icon: Heart,
                title: "Expériences gastronomiques privées",
                description: "Chef personnel à disposition, cuisine gastronomique dans votre suite",
                color: "purple"
              },
              {
                icon: Sparkles,
                title: "Spa & bien-être illimité",
                description: "Accès privilégié aux spas partenaires : soins premium, hammam, massages",
                color: "purple"
              },
              {
                icon: Users,
                title: "Excursions exclusives sur mesure",
                description: "Expériences uniques : désert VIP, oasis privées, patrimoine avec experts",
                color: "purple"
              },
              {
                icon: Shield,
                title: "Chef personnel à disposition",
                description: "Service de chef privé 2x/semaine pour expériences culinaires exclusives",
                color: "purple"
              }
            ].map((feature, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 bg-purple-50 border-purple-200">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-purple-600" />
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

        {/* Expériences Exclusives */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Vos expériences exclusives sur mesure
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Désert du Sahara VIP",
                description: "Expédition exclusive 3 jours avec guide expert et campement de luxe",
                included: "Expérience unique",
                details: "Transport premium, guide privé, campement 5★"
              },
              {
                title: "Oasis de Tozeur & Chebika",
                description: "Immersion dans les oasis avec expériences authentiques privées",
                included: "Expérience privée",
                details: "4x4 premium, guide expert, déjeuner d'exception"
              },
              {
                title: "Dougga & Bulla Regia",
                description: "Sites archéologiques avec archéologue renommé",
                included: "Expérience exclusive",
                details: "Expert archéologue, déjeuner gastronomique privé"
              },
              {
                title: "Atelier cuisine avec chef étoilé",
                description: "Masterclass culinaire avec chef étoilé tunisien",
                included: "Expérience unique",
                details: "Cours privé, dégustation premium, recettes secrètes"
              }
            ].map((experience, index) => (
              <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="h-48 bg-gradient-to-br from-purple-400 to-indigo-500 flex items-center justify-center">
                  <Gem className="w-16 h-16 text-white" />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-bold text-gray-900 text-lg">{experience.title}</h3>
                    <Badge className="bg-purple-100 text-purple-700">{experience.included}</Badge>
                  </div>
                  <p className="text-gray-600 mb-4">{experience.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">{experience.details}</span>
                    <span className="text-purple-600 font-medium text-sm">Expérience exclusive</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">
              Expériences entièrement personnalisées selon vos passions et désirs
            </p>
            <Button variant="outline" className="border-purple-300 text-purple-700 hover:bg-purple-50">
              Créer mon programme sur mesure
            </Button>
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-20 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-3xl p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Le Raffinement Méditerranéen Absolu</h3>
          <p className="text-lg text-purple-100 max-w-2xl mx-auto mb-8 leading-relaxed">
            Une expérience résidentielle d'exception où chaque détail est orchestré pour votre plaisir.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={() => setShowBookingForm(true)}
              className="bg-white text-purple-600 hover:bg-purple-50 px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Réserver Excellence
            </Button>
            <Button 
              size="lg" 
              className="bg-purple-700 text-white hover:bg-purple-800 border-0 px-8 py-4 text-lg font-semibold rounded-xl"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Entretien personnalisé
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12 pt-8 border-t border-purple-400">
            <div>
              <div className="text-3xl font-bold mb-2">Suite</div>
              <div className="text-purple-100">D'exception</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">Chef</div>
              <div className="text-purple-100">Personnel</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">Spa</div>
              <div className="text-purple-100">Illimité</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">100%</div>
              <div className="text-purple-100">Sur mesure</div>
            </div>
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