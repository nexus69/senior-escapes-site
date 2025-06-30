'use client';

import { useState } from 'react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
  Camera, 
  Play, 
  Heart, 
  Users, 
  Utensils, 
  Palmtree, 
  CheckCircle,
  Shield,
  Clock,
  MapPin,
  Star,
  ZoomIn,
  X
} from 'lucide-react';

export function LifeGallerySection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const categories = [
    {
      id: 'logement',
      label: 'Nos Logements',
      icon: Palmtree,
      color: 'blue',
      description: 'Des espaces de vie pensés pour votre confort et votre sérénité',
      highlights: [
        'Vue panoramique sur la Méditerranée',
        'Appartements entièrement équipés et meublés',
        'Terrasses privées avec mobilier de qualité',
        'Climatisation et chauffage inclus',
        'Service de ménage hebdomadaire',
        'Accès WiFi haut débit gratuit'
      ],
      images: [
        {
          url: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
          title: 'Salon moderne avec vue mer panoramique',
          description: 'Espace de vie lumineux de 35m² avec baie vitrée donnant sur la terrasse et vue imprenable sur la baie d\'Hammamet'
        },
        {
          url: 'https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=800',
          title: 'Salon convivial et chaleureux',
          description: 'Décoration soignée dans des tons apaisants, mobilier confortable et éclairage adapté pour la lecture'
        },
        {
          url: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800',
          title: 'Chambre paisible avec vue jardin',
          description: 'Espace nuit de 15m² avec lit king-size, dressing intégré et vue sur les jardins méditerranéens'
        }
      ]
    },
    {
      id: 'activites',
      label: 'Nos Activités',
      icon: Heart,
      color: 'green',
      description: 'Un programme riche et varié adapté à vos envies et votre rythme',
      highlights: [
        'Plus de 35 activités différentes par semaine',
        'Encadrement par des professionnels qualifiés',
        'Groupes de 8 à 15 personnes maximum',
        'Activités adaptées à tous les niveaux',
        'Participation libre et sans obligation',
        'Matériel et équipements fournis'
      ],
      images: [
        {
          url: 'https://images.pexels.com/photos/3791466/pexels-photo-3791466.jpeg?auto=compress&cs=tinysrgb&w=800',
          title: 'Yoga et bien-être face à la mer',
          description: 'Séances quotidiennes de yoga, méditation et tai-chi sur notre terrasse panoramique avec vue mer'
        },
        {
          url: 'https://images.pexels.com/photos/3771120/pexels-photo-3771120.jpeg?auto=compress&cs=tinysrgb&w=800',
          title: 'Ateliers créatifs et artistiques',
          description: 'Cours de peinture, poterie, calligraphie arabe animés par des artistes locaux expérimentés'
        },
        {
          url: 'https://images.pexels.com/photos/3760854/pexels-photo-3760854.jpeg?auto=compress&cs=tinysrgb&w=800',
          title: 'Excursions culturelles guidées',
          description: 'Découverte du patrimoine tunisien avec guide francophone : Carthage, Sidi Bou Saïd, Kairouan'
        }
      ]
    },
    {
      id: 'communaute',
      label: 'Notre Communauté',
      icon: Users,
      color: 'orange',
      description: 'Une famille chaleureuse de retraités européens actifs',
      highlights: [
        'Communauté de 40 à 60 résidents selon la saison',
        'Moyenne d\'âge : 68 ans, de 55 à 85 ans',
        'Nationalités : France, Belgique, Suisse, Allemagne',
        'Accompagnement pour l\'intégration sociale',
        'Événements et célébrations réguliers',
        'Respect de l\'intimité et de l\'autonomie'
      ],
      images: [
        {
          url: 'https://images.pexels.com/photos/3768127/pexels-photo-3768127.jpeg?auto=compress&cs=tinysrgb&w=800',
          title: 'Soirées conviviales et chaleureuses',
          description: 'Moments de partage autour d\'un verre, jeux de société et discussions dans notre salon principal'
        },
        {
          url: 'https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=800',
          title: 'Clubs de lecture et échanges culturels',
          description: 'Rencontres hebdomadaires pour partager lectures, expériences et découvertes culturelles'
        },
        {
          url: 'https://images.pexels.com/photos/3768131/pexels-photo-3768131.jpeg?auto=compress&cs=tinysrgb&w=800',
          title: 'Célébrations et événements spéciaux',
          description: 'Fêtes traditionnelles, anniversaires et événements saisonniers dans une ambiance familiale'
        }
      ]
    },
    {
      id: 'gastronomie',
      label: 'Notre Gastronomie',
      icon: Utensils,
      color: 'purple',
      description: 'Une cuisine méditerranéenne savoureuse et équilibrée',
      highlights: [
        'Menu élaboré par notre chef diplômé',
        'Cuisine méditerranéenne et française',
        'Produits frais locaux et de saison',
        'Adaptation aux régimes spéciaux',
        'Restaurant avec vue panoramique sur mer',
        'Service en salle ou terrasse selon météo'
      ],
      images: [
        {
          url: 'https://images.pexels.com/photos/3764353/pexels-photo-3764353.jpeg?auto=compress&cs=tinysrgb&w=800',
          title: 'Cuisine méditerranéenne raffinée',
          description: 'Plats savoureux préparés avec des produits locaux frais : poissons, légumes, huile d\'olive premium'
        },
        {
          url: 'https://images.pexels.com/photos/3764354/pexels-photo-3764354.jpeg?auto=compress&cs=tinysrgb&w=800',
          title: 'Restaurant panoramique avec vue mer',
          description: 'Salle de restaurant climatisée de 120 places avec baies vitrées et terrasse extérieure'
        },
        {
          url: 'https://images.pexels.com/photos/3771118/pexels-photo-3771118.jpeg?auto=compress&cs=tinysrgb&w=800',
          title: 'Ateliers culinaires interactifs',
          description: 'Cours de cuisine tunisienne avec notre chef : couscous, tajines, pâtisseries orientales'
        }
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: {
        bg: 'bg-blue-50',
        border: 'border-blue-200',
        text: 'text-blue-700',
        accent: 'bg-blue-600'
      },
      green: {
        bg: 'bg-green-50',
        border: 'border-green-200',
        text: 'text-green-700',
        accent: 'bg-green-600'
      },
      orange: {
        bg: 'bg-orange-50',
        border: 'border-orange-200',
        text: 'text-orange-700',
        accent: 'bg-orange-600'
      },
      purple: {
        bg: 'bg-purple-50',
        border: 'border-purple-200',
        text: 'text-purple-700',
        accent: 'bg-purple-600'
      }
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

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
    <section id="vie-sur-place" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-orange-100 rounded-full mb-6">
            <Camera className="w-4 h-4 mr-2 text-orange-600" />
            <span className="text-orange-700 font-medium">Découvrez votre quotidien</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            La vie sur place
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Plongez dans l'atmosphère unique de nos résidences et découvrez 
            le cadre exceptionnel qui vous attend en Tunisie.
          </p>
        </div>

        {/* Gallery Tabs */}
        <Tabs defaultValue="logement" className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 h-auto p-1 bg-gray-100 rounded-xl mb-12">
            {categories.map((category) => {
              const Icon = category.icon;
              const colors = getColorClasses(category.color);
              return (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="flex flex-col items-center p-4 space-y-2 data-[state=active]:bg-white data-[state=active]:shadow-md rounded-lg transition-all duration-300"
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium text-sm">{category.label}</span>
                </TabsTrigger>
              );
            })}
          </TabsList>

          {categories.map((category) => {
            const colors = getColorClasses(category.color);
            const Icon = category.icon;
            
            return (
              <TabsContent key={category.id} value={category.id} className="mt-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Left Column - Editorial Content */}
                  <div className="lg:col-span-1 space-y-8">
                    {/* Category Header */}
                    <Card className={`p-8 ${colors.bg} ${colors.border} border-2`}>
                      <div className="text-center space-y-4">
                        <div className={`w-16 h-16 ${colors.accent} rounded-2xl flex items-center justify-center mx-auto`}>
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-3">
                            {category.label}
                          </h3>
                          <p className="text-gray-700 leading-relaxed">
                            {category.description}
                          </p>
                        </div>
                      </div>
                    </Card>

                    {/* Key Features */}
                    <Card className="p-8 shadow-lg">
                      <div className="space-y-6">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                            <CheckCircle className="w-6 h-6 text-green-600" />
                          </div>
                          <h4 className="text-xl font-bold text-gray-900">
                            Points forts
                          </h4>
                        </div>
                        
                        <div className="space-y-4">
                          {category.highlights.map((highlight, index) => (
                            <div key={index} className="flex items-start space-x-4 p-4 bg-gradient-to-r from-gray-50 to-green-50 rounded-xl hover:from-green-50 hover:to-blue-50 transition-all duration-300 group">
                              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-200">
                                <CheckCircle className="w-4 h-4 text-white" />
                              </div>
                              <p className="text-gray-700 font-medium leading-relaxed">
                                {highlight}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </Card>

                    {/* Trust Indicators */}
                    <Card className="p-6 bg-gradient-to-br from-blue-600 to-blue-700 text-white">
                      <div className="text-center space-y-4">
                        <Shield className="w-12 h-12 mx-auto text-blue-200" />
                        <div>
                          <h4 className="text-lg font-bold mb-2">Garantie sérénité</h4>
                          <p className="text-blue-100 text-sm leading-relaxed">
                            Tous nos services sont inclus dans votre séjour. 
                            Aucun frais caché, aucune surprise.
                          </p>
                        </div>
                        <div className="flex justify-center space-x-6 text-sm">
                          <div className="text-center">
                            <div className="font-bold text-lg">24/7</div>
                            <div className="text-blue-200">Assistance</div>
                          </div>
                          <div className="text-center">
                            <div className="font-bold text-lg">100%</div>
                            <div className="text-blue-200">Inclus</div>
                          </div>
                          <div className="text-center">
                            <div className="font-bold text-lg">0€</div>
                            <div className="text-blue-200">Supplément</div>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div>

                  {/* Right Column - Image Gallery */}
                  <div className="lg:col-span-2">
                    <div className="space-y-6">
                      <div className="flex items-center justify-between">
                        <h3 className="text-2xl font-bold text-gray-900">
                          Galerie photos
                        </h3>
                        <Badge className="bg-orange-100 text-orange-700 px-3 py-1">
                          {category.images.length} photos
                        </Badge>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {category.images.map((image, index) => (
                          <Card key={index} className="overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group cursor-pointer">
                            <div 
                              className="relative"
                              onClick={() => setSelectedImage(image.url)}
                            >
                              <img
                                src={image.url}
                                alt={image.title}
                                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                                  <ZoomIn className="w-8 h-8 text-white" />
                                </div>
                              </div>
                              <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <Camera className="w-4 h-4 text-white" />
                              </div>
                            </div>
                            
                            <div className="p-6 space-y-3">
                              <h4 className="text-lg font-bold text-gray-900 leading-tight">
                                {image.title}
                              </h4>
                              <p className="text-gray-600 text-sm leading-relaxed">
                                {image.description}
                              </p>
                              
                              <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                                <div className="flex items-center space-x-2 text-xs text-gray-500">
                                  <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                                  <span>Photo authentique</span>
                                </div>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 p-2"
                                  onClick={() => setSelectedImage(image.url)}
                                >
                                  <ZoomIn className="w-4 h-4" />
                                </Button>
                              </div>
                            </div>
                          </Card>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            );
          })}
        </Tabs>

        {/* Video Testimonials Section */}
        <div className="mt-20">
          <Separator className="mb-12" />
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-12 text-center text-white">
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="space-y-4">
                <h3 className="text-3xl lg:text-4xl font-bold">Témoignages authentiques</h3>
                <p className="text-xl text-blue-100 leading-relaxed">
                  Écoutez les témoignages sincères de nos résidents qui partagent leur expérience 
                  de vie quotidienne dans nos résidences tunisiennes.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-orange-300">98%</div>
                  <div className="text-blue-100">Recommandent l'expérience</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-green-300">4.8/5</div>
                  <div className="text-blue-100">Note de satisfaction</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-yellow-300">85%</div>
                  <div className="text-blue-100">Reviennent l'année suivante</div>
                </div>
              </div>
              
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-700 px-8 py-4 font-semibold"
              >
                <Play className="w-5 h-5 mr-2" />
                Voir les témoignages vidéo
              </Button>
            </div>
          </div>
        </div>

        {/* Image Zoom Modal */}
        {selectedImage && (
          <ImageZoomModal
            imageUrl={selectedImage}
            title={categories.flatMap(cat => cat.images).find(img => img.url === selectedImage)?.title || ''}
            description={categories.flatMap(cat => cat.images).find(img => img.url === selectedImage)?.description || ''}
            onClose={() => setSelectedImage(null)}
          />
        )}
      </div>
    </section>
  );
}