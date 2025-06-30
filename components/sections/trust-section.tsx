'use client';

import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Shield, Award, Users, Globe, Heart, Star } from 'lucide-react';

export function TrustSection() {
  const certifications = [
    {
      icon: Shield,
      title: 'Assurance Complète',
      description: 'Couverture médicale et rapatriement incluse',
      badge: 'Certifié'
    },
    {
      icon: Award,
      title: 'Partenaire Officiel',
      description: 'Recommandé par les consulats européens',
      badge: 'Officiel'
    },
    {
      icon: Users,
      title: 'Équipe Qualifiée',
      description: 'Personnel médical et administratif certifié',
      badge: 'Expérience'
    },
    {
      icon: Globe,
      title: 'Réseau International',
      description: 'Partenariats avec cliniques européennes',
      badge: 'International'
    }
  ];

  const testimonials = [
    {
      name: 'Marie-Françoise L.',
      age: '72 ans',
      country: 'France',
      text: "Trois mois merveilleux ! L'équipe aux petits soins, les activités variées, et cette vue sur la mer... Je recommande vivement.",
      rating: 5,
      stay: 'Hiver 2024'
    },
    {
      name: 'Giovanni M.',
      age: '68 ans',
      country: 'Italie',
      text: "Enfin une structure qui comprend nos besoins. Sophie et son équipe ont rendu mon séjour inoubliable.",
      rating: 5,
      stay: 'Printemps 2024'
    },
    {
      name: 'Klaus & Ingrid K.',
      age: '74 & 71 ans',
      country: 'Allemagne',
      text: "Nous avons trouvé une vraie communauté. Les autres résidents sont devenus nos amis. Nous revenons l'année prochaine !",
      rating: 5,
      stay: 'Automne 2023'
    }
  ];

  const stats = [
    { value: '500+', label: 'Résidents accueillis' },
    { value: '98%', label: 'Satisfaction client' },
    { value: '85%', label: 'Clients fidèles' },
    { value: '24/7', label: 'Assistance disponible' }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-green-100 rounded-full mb-6">
            <Shield className="w-4 h-4 mr-2 text-green-600" />
            <span className="text-green-700 font-medium">Votre confiance, notre priorité</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Pourquoi nous faire
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600"> confiance</span> ?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Découvrez les garanties, certifications et témoignages qui font de Senior Escapes 
            le choix privilégié des retraités européens.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="p-6 text-center bg-white/80 backdrop-blur-sm">
              <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-2">{stat.value}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </Card>
          ))}
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Nos garanties</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => {
              const Icon = cert.icon;
              return (
                <Card key={index} className="p-6 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white/90 backdrop-blur-sm">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-green-600" />
                  </div>
                  <Badge className="mb-3 bg-green-100 text-green-700 hover:bg-green-200">
                    {cert.badge}
                  </Badge>
                  <h4 className="font-semibold text-gray-900 mb-2">{cert.title}</h4>
                  <p className="text-sm text-gray-600">{cert.description}</p>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Testimonials */}
        <div>
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Ils nous font confiance</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
                {/* Stars */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                {/* Testimonial Text */}
                <blockquote className="text-gray-700 mb-6 italic leading-relaxed">
                  "{testimonial.text}"
                </blockquote>
                
                {/* Author Info */}
                <div className="border-t pt-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.age} • {testimonial.country}</div>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {testimonial.stay}
                    </Badge>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Trust Banner */}
        <div className="mt-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-3xl p-12 text-center text-white">
          <Heart className="w-12 h-12 mx-auto mb-6 text-green-200" />
          <h3 className="text-3xl font-bold mb-4">Votre sérénité, notre engagement</h3>
          <p className="text-lg text-green-100 max-w-2xl mx-auto leading-relaxed">
            Depuis 5 ans, nous accompagnons les retraités européens avec le même engagement : 
            vous offrir une expérience exceptionnelle en toute sécurité.
          </p>
        </div>
      </div>
    </section>
  );
}