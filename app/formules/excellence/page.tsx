'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, ArrowLeft, Calendar, Phone, MessageCircle, Star, Users, Shield, Heart, Gem, Crown, Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function ExcellencePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50">
      {/* Landing Page Header - Simplified */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center hover:opacity-80 transition-opacity duration-200">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">SE</span>
              </div>
              <div className="ml-3">
                <div className="text-lg font-bold text-gray-900">Senior Escapes</div>
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div>
              <Badge className="mb-4 bg-purple-500 text-white">Luxe Absolu</Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Séjour Excellence
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                L'art de vivre à la tunisienne dans un cadre d'exception. Services sur mesure, 
                expériences exclusives et confort absolu pour un séjour inoubliable.
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
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 text-lg font-semibold"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Choisir Excellence
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-purple-300 text-purple-700 hover:bg-purple-50 px-8 py-4 text-lg font-semibold"
              >
                <Phone className="w-5 h-5 mr-2" />
                Entretien personnalisé
              </Button>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/3771120/pexels-photo-3771120.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Suite Excellence avec spa privé"
              className="w-full h-96 lg:h-full object-cover rounded-2xl shadow-xl"
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
            Services d'Exception
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Crown,
                title: "Tout le Premium inclus",
                description: "Tous les services Premium + les prestations d'exception Excellence",
                color: "purple"
              },
              {
                icon: Gem,
                title: "Suite avec terrasse privée",
                description: "Appartement 3 pièces avec salon, chambre séparée, cuisine équipée et terrasse panoramique",
                color: "purple"
              },
              {
                icon: Heart,
                title: "Chef personnel 2x/semaine",
                description: "Cuisine gastronomique à domicile avec chef tunisien formé à la cuisine française",
                color: "purple"
              },
              {
                icon: Sparkles,
                title: "Spa & bien-être illimité",
                description: "Accès libre au spa partenaire : massages, hammam, soins esthétiques",
                color: "purple"
              },
              {
                icon: Users,
                title: "Excursions premium exclusives",
                description: "Expériences exclusives : désert, oasis, sites archéologiques avec guide privé",
                color: "purple"
              },
              {
                icon: Shield,
                title: "Chauffeur personnel",
                description: "Véhicule avec chauffeur francophone à disposition 3 demi-journées/semaine",
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
            Vos expériences exclusives
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Désert du Sahara VIP",
                description: "Expédition de 3 jours avec guide privé, campement de luxe",
                included: "Expérience unique",
                details: "Transport privé, guide expert, hébergement premium"
              },
              {
                title: "Oasis de Tozeur & Chebika",
                description: "Découverte des oasis avec déjeuner chez l'habitant",
                included: "Journée complète",
                details: "4x4 privé, guide local, repas traditionnel"
              },
              {
                title: "Dougga & Bulla Regia",
                description: "Sites archéologiques avec archéologue privé",
                included: "Journée complète",
                details: "Guide archéologue, déjeuner gastronomique"
              },
              {
                title: "Atelier cuisine avec chef étoilé",
                description: "Cours privé avec chef renommé de Tunis",
                included: "Demi-journée",
                details: "Cours privé, dégustation, recettes exclusives"
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
              Expériences sur mesure • Programme personnalisé selon vos passions
            </p>
            <Button variant="outline" className="border-purple-300 text-purple-700 hover:bg-purple-50">
              Découvrir toutes les expériences
            </Button>
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-20 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-3xl p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Vivez l'Excellence à la Tunisienne</h3>
          <p className="text-lg text-purple-100 max-w-2xl mx-auto mb-8 leading-relaxed">
            Un séjour d'exception où chaque détail est pensé pour votre confort.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-purple-600 hover:bg-purple-50 px-8 py-4 text-lg font-semibold"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Réserver Excellence
            </Button>
            <Button 
              size="lg" 
              className="bg-purple-700 text-white hover:bg-purple-800 border-0 px-8 py-4 text-lg font-semibold"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Entretien personnalisé
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12 pt-8 border-t border-purple-400">
            <div>
              <div className="text-3xl font-bold mb-2">90m²</div>
              <div className="text-purple-100">Suite avec terrasse</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">5★</div>
              <div className="text-purple-100">Services de luxe</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">24h/24</div>
              <div className="text-purple-100">Conciergerie VIP</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">100%</div>
              <div className="text-purple-100">Satisfaction garantie</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}