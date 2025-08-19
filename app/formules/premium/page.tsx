'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, ArrowLeft, Calendar, Phone, MessageCircle, Star, Users, Shield, Heart, Camera } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { BookingForm } from '@/components/booking-form';
import { Breadcrumb } from '@/components/breadcrumb';

export default function PremiumPage() {
  const [showBookingForm, setShowBookingForm] = useState(false);

  const formulaData = {
    id: 'premium',
    name: 'Séjour Premium',
    price: 1000,
    duration: '3-4 mois',
    description: 'L\'expérience complète avec excursions culturelles, suivi médical privilégié et services de conciergerie.',
    features: [
      'Tout l\'Essentiel inclus',
      'Excursions culturelles d\'exception',
      'Suivi médical privilégié',
      'Transferts aéroport premium',
      'Service de conciergerie'
    ],
    color: 'orange',
    badge: 'Plus populaire'
  };

  const breadcrumbItems = [
    { label: 'Nos Offres', href: '/#formules' },
    { label: 'Séjour Premium' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
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
            <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg hover:shadow-xl transition-all duration-300">
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
              <Badge className="mb-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg">Art de Vivre Raffiné</Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Expérience Premium
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                L'expérience complète dans nos hôtels 5★ avec excursions d'exception, suivi médical privilégié 
                et conciergerie premium. L'équilibre parfait entre raffinement et authenticité.
              </p>
            </div>

            <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-lg">
              <div className="flex items-center space-x-2 mb-2">
                <Star className="w-5 h-5 text-orange-600" />
                <span className="font-semibold text-orange-900">À partir de 1,000€/mois</span>
              </div>
              <p className="text-orange-700 text-sm">
                Meilleur rapport qualité-prix • Économie de 200€/mois vs Essentiel
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                onClick={() => setShowBookingForm(true)}
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Réserver Premium
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-orange-300 text-orange-700 hover:bg-orange-50 px-8 py-4 text-lg font-semibold rounded-xl"
              >
                <Phone className="w-5 h-5 mr-2" />
                Conseil personnalisé
              </Button>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative w-full h-96 lg:h-full">
            <Image
              src="https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Suite premium hôtel 5★ avec vue panoramique"
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

        {/* Your Premium Experience */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Votre expérience résidentielle Premium
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Expérience Essentielle incluse",
                description: "Tous les services de l'Expérience Essentielle + les prestations Premium",
                color: "orange"
              },
              {
                icon: Camera,
                title: "Excursions privées d'exception",
                description: "2 excursions mensuelles avec guide privé : Carthage, Sidi Bou Saïd, patrimoine tunisien",
                color: "orange"
              },
              {
                icon: Heart,
                title: "Suivi médical privilégié",
                description: "Consultations avec médecins partenaires, coordination avec votre médecin traitant",
                color: "orange"
              },
              {
                icon: Users,
                title: "Transferts privés aéroport",
                description: "Service VIP aller-retour en véhicule premium avec chauffeur francophone",
                color: "orange"
              },
              {
                icon: Shield,
                title: "Conciergerie premium dédiée",
                description: "Réservations restaurants gastronomiques, spectacles, assistance administrative complète",
                color: "orange"
              },
              {
                icon: Heart,
                title: "Suite premium hôtel 5★",
                description: "Suite spacieuse avec salon séparé, services hôteliers 5★ et terrasse panoramique",
                color: "orange"
              }
            ].map((feature, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 bg-orange-50 border-orange-200">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-orange-600" />
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

        {/* Cultural Excursions */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Vos excursions privées d'exception
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Carthage & Sidi Bou Saïd",
                description: "Découverte privée des vestiges puniques et du village d'artistes",
                included: "Expérience privée",
                details: "Transport premium, guide expert, déjeuner gastronomique"
              },
              {
                title: "Kairouan la Sainte",
                description: "Immersion dans la première capitale arabe du Maghreb",
                included: "Expérience privée",
                details: "Transport premium, guide historien, déjeuner traditionnel"
              },
              {
                title: "Dougga & Testour",
                description: "Site romain exceptionnel avec guide archéologue",
                included: "Expérience privée",
                details: "Transport premium, guide spécialisé, déjeuner panoramique"
              },
              {
                title: "Hammamet & Nabeul",
                description: "Art de vivre côtier et artisanat d'exception",
                included: "Expérience premium",
                details: "Transport privé, ateliers artisanaux, dégustation"
              }
            ].map((excursion, index) => (
              <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="h-48 bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center">
                  <Camera className="w-16 h-16 text-white" />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-bold text-gray-900 text-lg">{excursion.title}</h3>
                    <Badge className="bg-orange-100 text-orange-700">{excursion.included}</Badge>
                  </div>
                  <p className="text-gray-600 mb-4">{excursion.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">{excursion.details}</span>
                    <span className="text-orange-600 font-medium text-sm">Expérience premium</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">
              2 excursions privées par mois • Programme personnalisé selon vos passions
            </p>
            <Button variant="outline" className="border-orange-300 text-orange-700 hover:bg-orange-50">
              Découvrir toutes les expériences
            </Button>
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">L'Art de Vivre Méditerranéen Raffiné</h3>
          <p className="text-lg text-orange-100 max-w-2xl mx-auto mb-8 leading-relaxed">
            L'expérience résidentielle complète dans nos hôtels 5★ partenaires.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={() => setShowBookingForm(true)}
              className="bg-white text-orange-600 hover:bg-orange-50 px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Réserver Premium
            </Button>
            <Button 
              size="lg" 
              className="bg-orange-600 text-white hover:bg-orange-700 border-0 px-8 py-4 text-lg font-semibold rounded-xl"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Conseil personnalisé
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 pt-8 border-t border-orange-400">
            <div>
              <div className="text-3xl font-bold mb-2">5★</div>
              <div className="text-orange-100">Hôtels partenaires</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">Privé</div>
              <div className="text-orange-100">Excursions exclusives</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">95%</div>
              <div className="text-orange-100">Satisfaction garantie</div>
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