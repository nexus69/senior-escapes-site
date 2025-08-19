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
      label: 'Résidences d\'Exception',
      icon: Shield,
      description: 'Suites d\'exception dans nos résidences partenaires sélectionnées pour leur raffinement architectural et leur service de conciergerie premium',
      images: [
        {
          url: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200',
          title: 'Suite Prestige Vue Mer - Hôtel Partenaire 5★',
          description: 'Suite de 55m² avec salon privé, terrasse panoramique et vue imprenable sur la baie d\'Hammamet. Services de conciergerie inclus.'
        },
        {
          url: 'https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=1200',
          title: 'Suite Excellence - Resort Partenaire Premium',
          description: 'Suite d\'exception de 75m² avec salon séparé, décoration sur mesure et accès privilégié aux services spa & wellness du resort.'
        },
        {
          url: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1200',
          title: 'Suite Master - Hôtel Boutique Partenaire',
          description: 'Suite master 45m² avec lit king-size, dressing personnalisé et terrasse privée donnant sur jardins méditerranéens du resort.'
        }
      ]
    },
    {
      id: 'activites',
      label: 'Art de Vivre Méditerranéen',
      icon: Star,
      description: 'Expériences culturelles privées orchestrées par notre conciergerie pour une immersion authentique dans l\'art de vivre tunisien',
      images: [
        {
          url: 'https://images.pexels.com/photos/8174441/pexels-photo-8174441.jpeg?auto=compress&cs=tinysrgb&w=1200',
          title: 'Wellness Premium dans nos Resorts Partenaires',
          description: 'Séances privées de yoga, méditation et soins spa dans les espaces wellness exclusifs de nos hôtels partenaires 5★'
        },
        {
          url: 'https://images.pexels.com/photos/3771120/pexels-photo-3771120.jpeg?auto=compress&cs=tinysrgb&w=1200',
          title: 'Ateliers Privés avec Maîtres Artisans',
          description: 'Expériences exclusives de peinture, poterie et calligraphie dans les ateliers privés de nos hôtels partenaires'
        },
        {
          url: 'https://images.pexels.com/photos/27622077/pexels-photo-27622077.jpeg?auto=compress&cs=tinysrgb&w=1200',
          title: 'Excursions VIP avec Guide Expert',
          description: 'Découvertes privées du patrimoine tunisien avec guides historiens : Carthage, Sidi Bou Saïd, sites UNESCO classés'
        }
      ]
    },
    {
      id: 'communaute',
      label: 'Communauté Privilégiée',
      icon: Heart,
      description: 'Communauté sélectionnée de résidents européens partageant les mêmes valeurs d\'excellence et de raffinement',
      images: [
        {
          url: 'https://images.pexels.com/photos/8170256/pexels-photo-8170256.jpeg?auto=compress&cs=tinysrgb&w=1200',
          title: 'Soirées Privées dans nos Hôtels Partenaires',
          description: 'Événements exclusifs dans les salons privés et terrasses panoramiques de nos resorts partenaires 5★'
        },
        {
          url: 'https://images.pexels.com/photos/7938731/pexels-photo-7938731.jpeg?auto=compress&cs=tinysrgb&w=1200',
          title: 'Cercles Culturels dans nos Resorts',
          description: 'Rencontres raffinées dans les bibliothèques et salons privés de nos hôtels partenaires d\'exception'
        },
        {
          url: 'https://images.pexels.com/photos/3768131/pexels-photo-3768131.jpeg?auto=compress&cs=tinysrgb&w=1200',
          title: 'Événements Exclusifs sur Mesure',
          description: 'Célébrations privées orchestrées par notre conciergerie dans les espaces d\'exception de nos resorts partenaires'
        }
      ]
    },
    {
      id: 'gastronomie',
      label: 'Excellence Culinaire',
      icon: Utensils,
      description: 'Art culinaire méditerranéen avec chefs privés et accès privilégié aux meilleures tables de la région',
      images: [
        {
          url: 'https://images.pexels.com/photos/5863647/pexels-photo-5863647.jpeg?auto=compress&cs=tinysrgb&w=1200',
          title: 'Chefs Étoilés de nos Hôtels Partenaires',
          description: 'Créations gastronomiques exclusives avec produits premium et huiles d\'olive grand cru dans nos resorts 5★'
        },
        {
          url: 'https://images.pexels.com/photos/5358330/pexels-photo-5358330.jpeg?auto=compress&cs=tinysrgb&w=1200',
          title: 'Restaurants Panoramiques de nos Resorts',
          description: 'Tables d\'exception avec vue mer dans les restaurants gastronomiques de nos hôtels partenaires sélectionnés'
        },
        {
          url: 'https://images.pexels.com/photos/5480243/pexels-photo-5480243.jpeg?auto=compress&cs=tinysrgb&w=1200',
          title: 'Masterclass avec Chefs de nos Partenaires',
          description: 'Cours privés exclusifs avec les chefs étoilés de nos hôtels partenaires : secrets de la gastronomie méditerranéenne'
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
          <div className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm border border-slate-200/50 rounded-full mb-8 shadow-sm">
            <Camera className="w-4 h-4 mr-2 text-slate-600" />
            <span className="text-slate-700 font-medium tracking-wide">Découvrez votre quotidien</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-slate-800 mb-6 leading-tight">
            L'Art de Vivre
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-slate-600 via-blue-600 to-slate-700 font-normal mt-2">Méditerranéen</span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light">
            Découvrez l'atmosphère raffinée de nos résidences partenaires et l'excellence de nos services de conciergerie.
          </p>
        </div>

        <Tabs defaultValue="logement" className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 h-auto p-2 bg-slate-50 border border-slate-200 rounded-xl mb-16">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="flex flex-col items-center p-6 space-y-3 rounded-lg transition-all duration-500
                    cursor-pointer text-slate-500 font-light
                    hover:text-slate-700
                    data-[state=active]:text-slate-800
                    data-[state=active]:bg-white data-[state=active]:shadow-lg data-[state=active]:border data-[state=active]:border-slate-200"
                >
                  <Icon className="w-6 h-6 text-current" />
                  <span className="font-light text-sm tracking-wide text-center leading-tight">{category.label}</span>
                </TabsTrigger>
              );
            })}
          </TabsList>

          {categories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <Card className="p-12 bg-white border-2 border-slate-200 shadow-lg">
                  <div className="text-center space-y-4">
                    <div className="w-20 h-20 bg-gradient-to-br from-slate-100 to-slate-200 rounded-full flex items-center justify-center mx-auto border border-slate-300">
                      <category.icon className="w-8 h-8 text-slate-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-light text-slate-800 mb-4 tracking-wide">{category.label}</h3>
                      <p className="text-slate-600 leading-relaxed font-light">{category.description}</p>
                    </div>
                  </div>
                </Card>

                <div className="lg:col-span-2 space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-light text-slate-800 tracking-wide">Galerie</h3>
                    <Badge className="bg-slate-100 text-slate-700 px-4 py-2 font-light border border-slate-200">{category.images.length} images</Badge>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {category.images.map((image, index) => (
                      <Card key={index} className="overflow-hidden border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-3 group cursor-pointer">
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
                          <h4 className="text-lg font-medium text-slate-800 leading-tight">{image.title}</h4>
                          <p className="text-slate-600 text-sm leading-relaxed font-light">{image.description}</p>
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
          <div className="bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 rounded-3xl p-16 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-slate-600/10"></div>
            <div className="max-w-4xl mx-auto space-y-8">
              <h3 className="text-3xl lg:text-4xl font-light tracking-wide">Témoignages Authentiques</h3>
              <p className="text-xl text-slate-200 leading-relaxed font-light">
                Découvrez les témoignages sincères de nos résidents qui partagent leur expérience de l'art de vivre méditerranéen.
              </p>
              <Button
                size="lg"
                className="bg-white text-slate-800 hover:bg-slate-50 hover:text-slate-900 border-0 px-10 py-4 font-light text-lg tracking-wide transition-all duration-500 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <Play className="w-5 h-5 mr-2" />
                Découvrir les Témoignages
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