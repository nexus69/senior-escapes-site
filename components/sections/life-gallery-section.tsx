'use client';

import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
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
  Star,
  ZoomIn,
  X
} from 'lucide-react';

export function LifeGallerySection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const categories = [
    {
      id: 'logement',
      label: 'Nos Résidences & Hôtels Partenaires',
      icon: Palmtree,
      description: 'Résidences hôtelières d\'exception et suites de luxe dans nos hôtels partenaires 4★ et 5★',
      images: [
        {
          url: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200',
          title: 'Suite Premium avec vue mer panoramique',
          description: 'Suite de 45m² dans hôtel partenaire 5★ avec salon privé, terrasse panoramique et vue imprenable sur la Méditerranée'
        },
        {
          url: 'https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=1200',
          title: 'Suite Excellence avec salon privé',
          description: 'Suite d\'exception de 65m² avec salon séparé, décoration raffinée et services hôteliers 5★ inclus'
        },
        {
          url: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1200',
          title: 'Chambre Master avec terrasse privée',
          description: 'Chambre master avec lit king-size, dressing sur mesure et accès direct à terrasse privée avec vue jardin'
        }
      ]
    },
    {
      id: 'activites',
      label: 'Nos Expériences Culturelles',
      icon: Heart,
      description: 'Expériences authentiques et raffinées pour découvrir l\'art de vivre méditerranéen',
      images: [
        {
          url: 'https://images.pexels.com/photos/8174441/pexels-photo-8174441.jpeg?auto=compress&cs=tinysrgb&w=1200',
          title: 'Bien-être premium face à la Méditerranée',
          description: 'Séances privées de yoga, méditation et tai-chi sur terrasses panoramiques de nos hôtels partenaires'
        },
        {
          url: 'https://images.pexels.com/photos/3771120/pexels-photo-3771120.jpeg?auto=compress&cs=tinysrgb&w=1200',
          title: 'Ateliers d\'art avec maîtres artisans',
          description: 'Cours privés de peinture, poterie et calligraphie arabe avec maîtres artisans tunisiens renommés'
        },
        {
          url: 'https://images.pexels.com/photos/27622077/pexels-photo-27622077.jpeg?auto=compress&cs=tinysrgb&w=1200',
          title: 'Excursions privées d\'exception',
          description: 'Découvertes exclusives du patrimoine avec guides experts : Carthage, Sidi Bou Saïd, sites UNESCO'
        }
      ]
    },
    {
      id: 'communaute',
      label: 'Notre Communauté Résidentielle',
      icon: Users,
      description: 'Une communauté raffinée de résidents européens partageant l\'art de vivre méditerranéen',
      images: [
        {
          url: 'https://images.pexels.com/photos/8170256/pexels-photo-8170256.jpeg?auto=compress&cs=tinysrgb&w=1200',
          title: 'Soirées raffinées en salon privé',
          description: 'Moments d\'exception dans les salons privés de nos hôtels partenaires avec service de conciergerie'
        },
        {
          url: 'https://images.pexels.com/photos/7938731/pexels-photo-7938731.jpeg?auto=compress&cs=tinysrgb&w=1200',
          title: 'Cercles culturels d\'exception',
          description: 'Rencontres privilégiées dans bibliothèques privées pour partager découvertes et expériences raffinées'
        },
        {
          url: 'https://images.pexels.com/photos/3768131/pexels-photo-3768131.jpeg?auto=compress&cs=tinysrgb&w=1200',
          title: 'Événements privés d\'exception',
          description: 'Célébrations exclusives et événements sur mesure dans les espaces privatisés de nos hôtels partenaires'
        }
      ]
    },
    {
      id: 'gastronomie',
      label: 'Notre Art Culinaire',
      icon: Utensils,
      description: 'Expériences gastronomiques raffinées et cuisine méditerranéenne d\'exception',
      images: [
        {
          url: 'https://images.pexels.com/photos/5863647/pexels-photo-5863647.jpeg?auto=compress&cs=tinysrgb&w=1200',
          title: 'Gastronomie méditerranéenne d\'exception',
          description: 'Créations culinaires des chefs de nos hôtels partenaires avec produits premium et huiles d\'olive grand cru'
        },
        {
          url: 'https://images.pexels.com/photos/5358330/pexels-photo-5358330.jpeg?auto=compress&cs=tinysrgb&w=1200',
          title: 'Restaurants gastronomiques avec vue mer',
          description: 'Restaurants étoilés de nos hôtels partenaires avec terrasses panoramiques et service personnalisé'
        },
        {
          url: 'https://images.pexels.com/photos/5480243/pexels-photo-5480243.jpeg?auto=compress&cs=tinysrgb&w=1200',
          title: 'Masterclass culinaires privées',
          description: 'Cours privés avec chefs étoilés de nos hôtels partenaires : secrets de la haute gastronomie tunisienne'
        }
      ]
    }
  ];

  // Image Zoom Modal Component - identique à celui de blog-section
  const ImageZoomModal = ({ imageUrl, title, description, onClose }: {
    imageUrl: string;
    title: string;
    description: string;
    onClose: () => void;
  }) => (
    <Dialog open={!!imageUrl} onOpenChange={(newOpenState) => !newOpenState && onClose()}>
      <DialogContent className="max-w-6xl w-full p-0 bg-black/95 border-0">
        <DialogHeader>
          <DialogTitle className="sr-only">{title}</DialogTitle>
        </DialogHeader>
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
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-orange-100 rounded-full mb-6">
            <Camera className="w-4 h-4 mr-2 text-orange-600" />
            <span className="text-orange-700 font-medium">Découvrez votre quotidien</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">La vie sur place</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Plongez dans l'atmosphère unique de nos résidences et découvrez le cadre exceptionnel qui vous attend en Tunisie.
          </p>
        </div>

        <Tabs defaultValue="logement" className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 h-auto p-1 bg-gray-100 rounded-xl mb-12">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="flex flex-col items-center p-4 space-y-2 rounded-lg transition-all duration-300
                    cursor-pointer text-gray-500
                    hover:text-[#2663ec]
                    data-[state=active]:text-[#2663ec]
                    data-[state=active]:bg-white data-[state=active]:shadow-md"
                >
                  <Icon className="w-5 h-5 text-current" />
                  <span className="font-medium text-sm">{category.label}</span>
                </TabsTrigger>
              );
            })}
          </TabsList>

          {categories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <Card className="p-8 bg-blue-50 border-blue-200 border-2">
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-[#2663ec] rounded-2xl flex items-center justify-center mx-auto">
                      <category.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{category.label}</h3>
                      <p className="text-gray-700 leading-relaxed">{category.description}</p>
                    </div>
                  </div>
                </Card>

                <div className="lg:col-span-2 space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold text-gray-900">Galerie photos</h3>
                    <Badge className="bg-orange-100 text-orange-700 px-3 py-1">{category.images.length} photos</Badge>
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
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                              <ZoomIn className="w-6 h-6 text-white" />
                            </div>
                          </div>
                          <div className="absolute bottom-3 left-3 right-3 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <h4 className="font-semibold text-sm mb-1">{image.title}</h4>
                            <p className="text-xs text-gray-200">{image.description}</p>
                          </div>
                        </div>
                        <div className="p-6 space-y-3">
                          <h4 className="text-lg font-bold text-gray-900">{image.title}</h4>
                          <p className="text-gray-600 text-sm">{image.description}</p>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="mt-20">
          <Separator className="mb-12" />
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-12 text-center text-white">
            <div className="max-w-4xl mx-auto space-y-8">
              <h3 className="text-3xl lg:text-4xl font-bold">Témoignages authentiques</h3>
              <p className="text-xl text-blue-100 leading-relaxed">
                Écoutez les témoignages sincères de nos résidents qui partagent leur expérience de vie quotidienne dans nos résidences tunisiennes.
              </p>
              <Button
                size="lg"
                className="bg-white text-blue-700 hover:bg-blue-50 hover:text-blue-800 border-0 px-8 py-4 font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
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