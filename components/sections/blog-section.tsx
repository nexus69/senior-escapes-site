'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { 
  BookOpen, 
  Calendar, 
  User, 
  ArrowRight, 
  Clock, 
  Heart,
  Home,
  Utensils,
  Shield,
  Users,
  MapPin,
  CheckCircle,
  Camera,
  ZoomIn,
  X
} from 'lucide-react';

export function BlogSection() {
  const [selectedArticle, setSelectedArticle] = useState(0);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const articles = [
    {
      id: 1,
      title: "Nos Logements d'Exception",
      subtitle: "Découvrez votre nouveau chez-vous sous le soleil tunisien",
      category: "Logement",
      readTime: "5 min",
      date: "15 janvier 2025",
      author: "Sophie Martineau",
      image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
      excerpt: "Découvrez nos appartements d'exception avec vue imprenable sur la Méditerranée. Chaque logement a été pensé pour votre confort et votre bien-être.",
      gallery: [
        {
          url: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200",
          title: "Salon moderne avec vue mer",
          description: "Espace de vie lumineux avec baie vitrée panoramique"
        },
        {
          url: "https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=1200",
          title: "Salon convivial",
          description: "Décoration soignée et mobilier confortable"
        },
        {
          url: "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1200",
          title: "Chambre paisible",
          description: "Espace nuit avec vue sur jardin méditerranéen"
        },
        {
          url: "https://images.pexels.com/photos/2062426/pexels-photo-2062426.jpeg?auto=compress&cs=tinysrgb&w=1200",
          title: "Cuisine moderne",
          description: "Cuisine entièrement équipée avec électroménager haut de gamme"
        },
        {
          url: "https://images.pexels.com/photos/1454804/pexels-photo-1454804.jpeg?auto=compress&cs=tinysrgb&w=1200",
          title: "Salle de bain spa",
          description: "Salle de bain moderne avec douche italienne"
        },
        {
          url: "https://images.pexels.com/photos/1457847/pexels-photo-1457847.jpeg?auto=compress&cs=tinysrgb&w=1200",
          title: "Chambre d'enfant",
          description: "Espace coloré et sécurisé pour les plus jeunes"
        }
      ],
      content: {
        intro: "Nos appartements vue mer offrent un panorama à couper le souffle sur la baie d'Hammamet. Réveillez-vous chaque matin face à l'horizon bleu de la Méditerranée et profitez de couchers de soleil inoubliables depuis votre terrasse privée.",
        sections: [
          {
            title: "Un cadre de vie exceptionnel",
            icon: Home,
            description: "Chaque appartement a été conçu pour maximiser votre confort et votre bien-être, avec une attention particulière portée à la vue et à la luminosité.",
            points: [
              "Vue panoramique sur la baie d'Hammamet",
              "Terrasses privées avec mobilier haut de gamme",
              "Architecture moderne intégrée au paysage",
              "Espaces lumineux et aérés"
            ]
          },
          {
            title: "Équipements et services inclus",
            icon: CheckCircle,
            description: "Tous nos logements sont entièrement équipés et incluent de nombreux services pour votre confort quotidien.",
            points: [
              "Cuisine équipée avec électroménager moderne",
              "Climatisation réversible et chauffage",
              "WiFi haut débit gratuit",
              "Service de ménage hebdomadaire",
              "Accès privilégié à la piscine commune chauffée",
              "Parking privé sécurisé",
              "Coffre-fort personnel"
            ]
          },
          {
            title: "Types d'appartements disponibles",
            icon: MapPin,
            description: "Nous proposons différents types de logements pour s'adapter à vos besoins et préférences.",
            apartments: [
              {
                type: "Studios (35m²)",
                description: "Parfaits pour une personne, avec coin cuisine, salle de bain moderne et grande terrasse.",
                features: ["Coin cuisine équipé", "Salle de bain avec douche italienne", "Terrasse 8m²"]
              },
              {
                type: "2 pièces (55m²)",
                description: "Chambre séparée, salon spacieux, cuisine équipée et terrasse panoramique.",
                features: ["Chambre avec dressing", "Salon avec coin repas", "Terrasse 12m²"]
              },
              {
                type: "3 pièces (75m²)",
                description: "Idéaux pour les couples, avec 2 chambres, grand salon et terrasse de 15m².",
                features: ["2 chambres confortables", "Grand salon lumineux", "Terrasse panoramique 15m²"]
              }
            ]
          },
          {
            title: "Services personnalisés",
            icon: Heart,
            description: "Notre équipe conciergerie est à votre disposition pour personnaliser votre expérience et répondre à tous vos besoins.",
            points: [
              "Équipe conciergerie à votre disposition",
              "Service de courses et réservations",
              "Maintenance et dépannage 24h/24",
              "Décoration personnalisée selon vos goûts",
              "Accueil personnalisé à votre arrivée"
            ]
          }
        ]
      }
    },
    {
      id: 2,
      title: "Votre Accompagnement Sur Mesure",
      subtitle: "Une équipe dédiée pour votre sérénité au quotidien",
      category: "Services",
      readTime: "4 min",
      date: "12 janvier 2025",
      author: "Jean-Pierre Lefort",
      image: "https://images.pexels.com/photos/3768114/pexels-photo-3768114.jpeg?auto=compress&cs=tinysrgb&w=800",
      excerpt: "Découvrez comment notre équipe francophone vous accompagne à chaque étape de votre séjour pour une expérience sans stress.",
      gallery: [
        {
          url: "https://images.pexels.com/photos/3768114/pexels-photo-3768114.jpeg?auto=compress&cs=tinysrgb&w=1200",
          title: "Équipe d'accueil",
          description: "Notre équipe francophone à votre service"
        },
        {
          url: "https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=1200",
          title: "Service conciergerie",
          description: "Assistance personnalisée 24h/24"
        },
        {
          url: "https://images.pexels.com/photos/3768097/pexels-photo-3768097.jpeg?auto=compress&cs=tinysrgb&w=1200",
          title: "Coordination résidents",
          description: "Accompagnement dans toutes vos démarches"
        },
        {
          url: "https://images.pexels.com/photos/3760069/pexels-photo-3760069.jpeg?auto=compress&cs=tinysrgb&w=1200",
          title: "Suivi médical",
          description: "Coordination avec les professionnels de santé"
        }
      ],
      content: {
        intro: "Chez Senior Escapes, nous croyons que chaque résident mérite un accompagnement personnalisé. Notre équipe francophone dédiée est là pour vous offrir une expérience sur mesure, de votre arrivée jusqu'à votre départ.",
        sections: [
          {
            title: "Avant votre arrivée",
            icon: Calendar,
            description: "Nous préparons minutieusement votre séjour en amont pour que tout soit parfait dès votre arrivée.",
            points: [
              "Entretien personnalisé pour comprendre vos besoins",
              "Préparation de votre logement selon vos préférences",
              "Organisation du transfert aéroport",
              "Briefing complet sur la vie locale",
              "Mise en place des services médicaux si nécessaire"
            ]
          },
          {
            title: "Pendant votre séjour",
            icon: Users,
            description: "Notre équipe reste à vos côtés tout au long de votre séjour pour vous garantir une expérience sereine et enrichissante.",
            points: [
              "Conseiller personnel attitré disponible 6j/7",
              "Assistance administrative complète",
              "Coordination avec les services médicaux locaux",
              "Organisation d'activités personnalisées",
              "Support 24h/24 en cas d'urgence",
              "Médiation et résolution de problèmes"
            ]
          },
          {
            title: "Services conciergerie premium",
            icon: Shield,
            description: "Profitez d'un service conciergerie haut de gamme pour simplifier votre quotidien et enrichir votre expérience.",
            points: [
              "Réservations restaurants et spectacles",
              "Organisation d'excursions privées",
              "Service de courses et livraisons",
              "Prise de rendez-vous médicaux",
              "Traductions et accompagnement administratif",
              "Maintenance et dépannage express"
            ]
          }
        ]
      }
    },
    {
      id: 3,
      title: "Art de Vivre à la Tunisienne",
      subtitle: "Immergez-vous dans la richesse culturelle et gastronomique",
      category: "Culture",
      readTime: "6 min",
      date: "8 janvier 2025",
      author: "Ahmed Ben Salem",
      image: "https://images.pexels.com/photos/3764353/pexels-photo-3764353.jpeg?auto=compress&cs=tinysrgb&w=800",
      excerpt: "Plongez dans l'authenticité tunisienne à travers notre programme culturel et gastronomique unique.",
      gallery: [
        {
          url: "https://images.pexels.com/photos/3764353/pexels-photo-3764353.jpeg?auto=compress&cs=tinysrgb&w=1200",
          title: "Cuisine tunisienne",
          description: "Découverte des saveurs méditerranéennes authentiques"
        },
        {
          url: "https://images.pexels.com/photos/3771120/pexels-photo-3771120.jpeg?auto=compress&cs=tinysrgb&w=1200",
          title: "Atelier artisanal",
          description: "Initiation aux arts traditionnels tunisiens"
        },
        {
          url: "https://images.pexels.com/photos/3791466/pexels-photo-3791466.jpeg?auto=compress&cs=tinysrgb&w=1200",
          title: "Paysages tunisiens",
          description: "Beauté naturelle de la côte méditerranéenne"
        },
        {
          url: "https://images.pexels.com/photos/3760854/pexels-photo-3760854.jpeg?auto=compress&cs=tinysrgb&w=1200",
          title: "Excursions culturelles",
          description: "Découverte du patrimoine historique"
        }
      ],
      content: {
        intro: "La Tunisie offre un patrimoine culturel et gastronomique d'une richesse exceptionnelle. Notre programme vous invite à découvrir les trésors authentiques de ce pays méditerranéen, loin des circuits touristiques classiques.",
        sections: [
          {
            title: "Découvertes culturelles authentiques",
            icon: BookOpen,
            description: "Explorez la richesse du patrimoine tunisien à travers des expériences authentiques et des rencontres privilégiées.",
            points: [
              "Visites guidées des sites historiques avec historien local",
              "Rencontres avec des artisans traditionnels",
              "Ateliers de calligraphie arabe et poterie",
              "Soirées musicales avec artistes locaux",
              "Découverte de l'architecture islamique",
              "Initiation aux traditions berbères"
            ]
          },
          {
            title: "Gastronomie méditerranéenne",
            icon: Utensils,
            description: "Savourez les délices de la cuisine tunisienne et apprenez les secrets des recettes traditionnelles.",
            points: [
              "Cours de cuisine tunisienne avec chef local",
              "Dégustation d'huiles d'olive premium",
              "Découverte des épices et herbes aromatiques",
              "Visite des marchés traditionnels accompagnée",
              "Dîners thématiques régionaux",
              "Initiation à l'art du thé à la menthe"
            ]
          },
          {
            title: "Excursions sur mesure",
            icon: MapPin,
            description: "Partez à la découverte des sites les plus emblématiques de la Tunisie lors d'excursions organisées spécialement pour vous.",
            points: [
              "Sidi Bou Saïd et ses maisons bleues et blanches",
              "Carthage et ses vestiges antiques",
              "Kairouan, ville sainte et ses mosquées",
              "Dougga et son théâtre romain",
              "Oasis de Tozeur et désert du Sahara",
              "Villages berbères des montagnes"
            ]
          }
        ]
      }
    }
  ];

  const currentArticle = articles[selectedArticle];

  // Image Zoom Modal Component
  const ImageZoomModal = ({ imageUrl, title, description, onClose }: {
    imageUrl: string;
    title: string;
    description: string;
    onClose: () => void;
  }) => (
    <Dialog open={!!imageUrl} onOpenChange={() => onClose()}>
      <DialogContent className="max-w-6xl w-full p-0 bg-black/95 border-0">
        <div className="relative">
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="absolute top-4 right-4 z-10 bg-black/50 text-white hover:bg-black/70 rounded-full w-10 h-10 p-0"
          >
            <X className="w-5 h-5" />
          </Button>
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-auto max-h-[90vh] object-contain"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
            <h3 className="text-white text-xl font-bold mb-2">{title}</h3>
            <p className="text-gray-300">{description}</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );

  return (
    <section id="articles" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-orange-100 rounded-full mb-6">
            <BookOpen className="w-4 h-4 mr-2 text-orange-600" />
            <span className="text-orange-700 font-medium">Découvrez nos articles</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Tout savoir sur
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-blue-600"> votre séjour</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explorez nos guides détaillés pour mieux comprendre ce qui vous attend 
            lors de votre expérience Senior Escapes en Tunisie.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Article List */}
          <div className="lg:col-span-1 space-y-4">
            {articles.map((article, index) => (
              <Card 
                key={article.id}
                className={`p-4 cursor-pointer transition-all duration-300 hover:shadow-lg ${
                  selectedArticle === index 
                    ? 'ring-2 ring-blue-500 bg-blue-50' 
                    : 'hover:bg-gray-50'
                }`}
                onClick={() => setSelectedArticle(index)}
              >
                <div className="flex items-start space-x-3">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <Badge className="mb-2 text-xs bg-orange-100 text-orange-700">
                      {article.category}
                    </Badge>
                    <h3 className="font-semibold text-gray-900 text-sm leading-tight mb-1">
                      {article.title}
                    </h3>
                    <div className="flex items-center text-xs text-gray-500 space-x-2">
                      <Clock className="w-3 h-3" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Article Content */}
          <div className="lg:col-span-3">
            <Card className="shadow-xl overflow-hidden">
              {/* Article Header */}
              <div className="relative">
                <img
                  src={currentArticle.image}
                  alt={currentArticle.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <Badge className="mb-3 bg-orange-500 text-white border-0">
                    {currentArticle.category}
                  </Badge>
                  <h1 className="text-3xl lg:text-4xl font-bold mb-2">
                    {currentArticle.title}
                  </h1>
                  <p className="text-xl text-orange-200 font-medium">
                    {currentArticle.subtitle}
                  </p>
                </div>
              </div>

              <div className="p-8">
                {/* Article Meta */}
                <div className="flex items-center space-x-6 mb-8 text-sm text-gray-500">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>{currentArticle.date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4" />
                    <span>{currentArticle.author}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>{currentArticle.readTime} de lecture</span>
                  </div>
                </div>

                {/* Article Intro */}
                <div className="prose prose-lg max-w-none mb-10">
                  <p className="text-xl text-gray-700 leading-relaxed font-light">
                    {currentArticle.content.intro}
                  </p>
                </div>

                {/* Photo Gallery */}
                {currentArticle.gallery && (
                  <div className="mb-12">
                    <div className="flex items-center space-x-3 mb-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-orange-100 rounded-xl flex items-center justify-center">
                        <Camera className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-gray-900">Galerie photos complète</h2>
                        <p className="text-gray-600">Cliquez sur une image pour l'agrandir</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {currentArticle.gallery.map((photo, index) => (
                        <div
                          key={index}
                          className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                          onClick={() => setSelectedImage(photo.url)}
                        >
                          <img
                            src={photo.url}
                            alt={photo.title}
                            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                              <ZoomIn className="w-6 h-6 text-white" />
                            </div>
                          </div>
                          <div className="absolute bottom-3 left-3 right-3 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <h4 className="font-semibold text-sm mb-1">{photo.title}</h4>
                            <p className="text-xs text-gray-200">{photo.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <Separator className="my-10" />

                {/* Article Sections */}
                <div className="space-y-12">
                  {currentArticle.content.sections.map((section, index) => {
                    const Icon = section.icon;
                    return (
                      <article key={index} className="space-y-6">
                        {/* Section Header */}
                        <header className="space-y-4">
                          <div className="flex items-center space-x-4">
                            <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                              <Icon className="w-7 h-7 text-blue-600" />
                            </div>
                            <div className="flex-1">
                              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                                {section.title}
                              </h2>
                              {section.description && (
                                <p className="text-lg text-gray-600 leading-relaxed">
                                  {section.description}
                                </p>
                              )}
                            </div>
                          </div>
                        </header>

                        {/* Section Content */}
                        <div className="ml-18 space-y-6">
                          {/* Regular bullet points */}
                          {section.points && (
                            <div className="space-y-4">
                              {section.points.map((point, pointIndex) => (
                                <div key={pointIndex} className="flex items-start space-x-4 p-4 bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl hover:from-blue-50 hover:to-orange-50 transition-all duration-300 group">
                                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-200">
                                    <CheckCircle className="w-4 h-4 text-white" />
                                  </div>
                                  <p className="text-gray-700 font-medium leading-relaxed">
                                    {point}
                                  </p>
                                </div>
                              ))}
                            </div>
                          )}

                          {/* Apartment types (special layout) */}
                          {section.apartments && (
                            <div className="space-y-6">
                              {section.apartments.map((apt, aptIndex) => (
                                <Card key={aptIndex} className="p-6 bg-gradient-to-r from-blue-50 via-white to-orange-50 border-l-4 border-blue-500 hover:shadow-lg transition-all duration-300">
                                  <div className="space-y-4">
                                    <h3 className="text-xl font-bold text-blue-900">
                                      {apt.type}
                                    </h3>
                                    <p className="text-gray-700 leading-relaxed">
                                      {apt.description}
                                    </p>
                                    <div className="space-y-2">
                                      <h4 className="font-semibold text-gray-800 text-sm uppercase tracking-wide">
                                        Caractéristiques incluses :
                                      </h4>
                                      <div className="flex flex-wrap gap-2">
                                        {apt.features.map((feature, featureIndex) => (
                                          <Badge key={featureIndex} className="bg-blue-100 text-blue-700 hover:bg-blue-200 transition-colors duration-200">
                                            {feature}
                                          </Badge>
                                        ))}
                                      </div>
                                    </div>
                                  </div>
                                </Card>
                              ))}
                            </div>
                          )}
                        </div>
                      </article>
                    );
                  })}
                </div>

                {/* Article Footer */}
                <div className="mt-16 pt-8 border-t border-gray-200">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-6 sm:space-y-0">
                    <div className="flex items-center space-x-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                        {currentArticle.author.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 text-lg">{currentArticle.author}</div>
                        <div className="text-sm text-gray-500">Expert Senior Escapes</div>
                      </div>
                    </div>
                    
                    <Button size="lg" className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300">
                      Découvrir nos séjours
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Image Zoom Modal */}
        {selectedImage && (
          <ImageZoomModal
            imageUrl={selectedImage}
            title={currentArticle.gallery?.find(img => img.url === selectedImage)?.title || ''}
            description={currentArticle.gallery?.find(img => img.url === selectedImage)?.description || ''}
            onClose={() => setSelectedImage(null)}
          />
        )}
      </div>
    </section>
  );
}