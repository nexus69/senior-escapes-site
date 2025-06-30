'use client';

import { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin, Heart, Star, Quote } from 'lucide-react';

export function TeamSection() {
  const teamMembers = [
    {
      id: 1,
      name: 'Dr. Sophie Martineau',
      role: 'Directrice & Fondatrice',
      avatar: 'https://images.pexels.com/photos/3768114/pexels-photo-3768114.jpeg?auto=compress&cs=tinysrgb&w=300',
      specialties: ['Gériatrie', 'Accompagnement senior', 'Expatriation'],
      experience: '15 ans',
      languages: ['Français', 'Arabe', 'Anglais'],
      bio: "Médecin gériatre de formation, Sophie a créé Senior Escapes après avoir constaté le manque d'accompagnement personnalisé pour les retraités européens souhaitant passer du temps au soleil. Passionnée par le bien-être des seniors, elle supervise personnellement chaque parcours de nos résidents.",
      quote: "Chaque résident est unique, et mérite un accompagnement sur mesure pour vivre pleinement sa retraite.",
      contact: {
        phone: '+216 70 123 456',
        email: 'sophie.martineau@seniorescapes.tn'
      }
    },
    {
      id: 2,
      name: 'Ahmed Ben Salem',
      role: 'Responsable Culturel',
      avatar: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=300',
      specialties: ['Histoire tunisienne', 'Excursions', 'Art local'],
      experience: '8 ans',
      languages: ['Arabe', 'Français', 'Italien'],
      bio: "Guide touristique passionné et historien de formation, Ahmed partage avec enthousiasme les richesses culturelles de la Tunisie. Il organise des excursions sur mesure et des ateliers culturels qui permettent à nos résidents de découvrir l'authenticité tunisienne.",
      quote: "La Tunisie a tant à offrir ! J'ai plaisir à faire découvrir les trésors cachés de mon pays.",
      contact: {
        phone: '+216 70 123 457',
        email: 'ahmed.bensalem@seniorescapes.tn'
      }
    },
    {
      id: 3,
      name: 'Marie-Claire Dubois',
      role: 'Conseillère Bien-être',
      avatar: 'https://images.pexels.com/photos/3768126/pexels-photo-3768126.jpeg?auto=compress&cs=tinysrgb&w=300',
      specialties: ['Yoga', 'Méditation', 'Nutrition senior'],
      experience: '12 ans',
      languages: ['Français', 'Espagnol'],
      bio: "Professeure de yoga certifiée et nutritionniste spécialisée dans l'accompagnement des seniors, Marie-Claire veille au bien-être physique et mental de nos résidents. Elle propose des programmes personnalisés adaptés à chaque profil.",
      quote: "Le bien-être n'a pas d'âge. Il s'agit simplement d'adapter les pratiques à nos besoins.",
      contact: {
        phone: '+216 70 123 458',
        email: 'marie-claire.dubois@seniorescapes.tn'
      }
    },
    {
      id: 4,
      name: 'Jean-Pierre Lefort',
      role: 'Responsable Services',
      avatar: 'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=300',
      specialties: ['Logistique', 'Administration', 'Urgences'],
      experience: '10 ans',
      languages: ['Français', 'Arabe'],
      bio: "Ancien responsable d'hôtellerie de luxe, Jean-Pierre gère tous les aspects pratiques du séjour de nos résidents. De l'accueil à l'aéroport aux démarches administratives, il s'assure que tout se déroule sans accroc.",
      quote: "Mon rôle est de rendre invisible toute la logistique pour que vous profitiez pleinement.",
      contact: {
        phone: '+216 70 123 459',
        email: 'jean-pierre.lefort@seniorescapes.tn'
      }
    },
    {
      id: 5,
      name: 'Fatima Zahra',
      role: 'Coordinatrice Résidents',
      avatar: 'https://images.pexels.com/photos/3768097/pexels-photo-3768097.jpeg?auto=compress&cs=tinysrgb&w=300',
      specialties: ['Relations humaines', 'Animation', 'Médiation'],
      experience: '6 ans',
      languages: ['Arabe', 'Français', 'Anglais'],
      bio: "Psychologue de formation, Fatima est le lien privilégié entre les résidents et l'équipe. Elle organise les activités communautaires et veille à ce que chacun trouve sa place au sein de notre famille Senior Escapes.",
      quote: "Créer des liens authentiques entre nos résidents, c'est ce qui rend chaque séjour unique.",
      contact: {
        phone: '+216 70 123 460',
        email: 'fatima.zahra@seniorescapes.tn'
      }
    },
    {
      id: 6,
      name: 'Dr. Karim Mansouri',
      role: 'Médecin Référent',
      avatar: 'https://images.pexels.com/photos/3760069/pexels-photo-3760069.jpeg?auto=compress&cs=tinysrgb&w=300',
      specialties: ['Médecine générale', 'Urgences', 'Suivi chronique'],
      experience: '20 ans',
      languages: ['Arabe', 'Français', 'Anglais'],
      bio: "Médecin généraliste expérimenté, Dr. Mansouri assure le suivi médical de nos résidents en partenariat avec leurs médecins traitants. Il coordonne les soins et garantit une prise en charge médicale de qualité.",
      quote: "La santé de nos résidents est notre priorité absolue, dans le respect de leur autonomie.",
      contact: {
        phone: '+216 70 123 461',
        email: 'karim.mansouri@seniorescapes.tn'
      }
    }
  ];

  const [selectedMember, setSelectedMember] = useState<typeof teamMembers[0] | null>(null);

  return (
    <section id="equipe" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-green-100 rounded-full mb-6">
            <Heart className="w-4 h-4 mr-2 text-green-600" />
            <span className="text-green-700 font-medium text-sm sm:text-base">L'humain au cœur de tout</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
            Notre équipe
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600 block sm:inline"> dédiée</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Rencontrez les professionnels passionnés qui vous accompagnent au quotidien 
            et font de votre séjour une expérience inoubliable.
          </p>
        </div>

        {/* Team Grid - Mobile Optimized */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {teamMembers.map((member) => (
            <Dialog key={member.id}>
              <DialogTrigger asChild>
                <Card className="p-6 sm:p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group">
                  <div className="relative mb-6">
                    <Avatar className="w-24 h-24 sm:w-28 sm:h-28 mx-auto ring-4 ring-gray-100 group-hover:ring-blue-200 transition-all duration-300">
                      <AvatarImage src={member.avatar} alt={member.name} />
                      <AvatarFallback className="text-lg font-semibold bg-gradient-to-br from-blue-500 to-green-500 text-white">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                      {member.experience}
                    </div>
                  </div>
                  
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300 leading-tight">
                    {member.name}
                  </h3>
                  
                  <p className="text-blue-600 font-medium mb-4 text-sm sm:text-base">{member.role}</p>
                  
                  <div className="flex flex-wrap justify-center gap-2 mb-4">
                    {member.specialties.slice(0, 2).map((specialty, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex justify-center items-center space-x-2 text-xs sm:text-sm text-gray-600">
                    <MapPin className="w-4 h-4" />
                    <span>{member.languages.join(', ')}</span>
                  </div>
                </Card>
              </DialogTrigger>
              
              <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle id={`member-dialog-title-${member.id}`} className="text-xl sm:text-2xl font-bold text-gray-900">
                    {member.name}
                  </DialogTitle>
                </DialogHeader>
                <div className="space-y-6">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6">
                    <Avatar className="w-20 h-20 ring-4 ring-blue-100 flex-shrink-0">
                      <AvatarImage src={member.avatar} alt={member.name} />
                      <AvatarFallback className="text-lg font-semibold bg-gradient-to-br from-blue-500 to-green-500 text-white">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 text-center sm:text-left">
                      <p className="text-blue-600 font-medium text-lg mb-3">{member.role}</p>
                      <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 text-sm text-gray-600">
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 text-yellow-500" />
                          <span>{member.experience} d'expérience</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4" />
                          <span>{member.languages.join(', ')}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Quote */}
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                    <Quote className="w-6 h-6 text-blue-500 mb-2" />
                    <p className="text-gray-700 italic text-sm sm:text-base">"{member.quote}"</p>
                  </div>

                  {/* Bio */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Parcours & expertise</h4>
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{member.bio}</p>
                  </div>

                  {/* Specialties */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Spécialités</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.specialties.map((specialty, index) => (
                        <Badge key={index} className="bg-green-100 text-green-800 hover:bg-green-200">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Contact */}
                  <div className="border-t pt-4">
                    <h4 className="font-semibold text-gray-900 mb-3">Contact direct</h4>
                    <div className="flex flex-col gap-3">
                      <Button variant="outline" size="sm" className="w-full justify-center">
                        <Phone className="w-4 h-4 mr-2" />
                        {member.contact.phone}
                      </Button>
                      <Button variant="outline" size="sm" className="w-full justify-center">
                        <Mail className="w-4 h-4 mr-2" />
                        Envoyer un email
                      </Button>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>

        {/* Team Stats - Mobile Optimized */}
        <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-3xl p-8 sm:p-12 text-center text-white">
          <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Une équipe à votre service</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            <div>
              <div className="text-3xl sm:text-4xl font-bold mb-2">6</div>
              <div className="text-blue-100 text-sm sm:text-base">Professionnels dédiés</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold mb-2">24/7</div>
              <div className="text-blue-100 text-sm sm:text-base">Disponibilité</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold mb-2">5</div>
              <div className="text-blue-100 text-sm sm:text-base">Langues parlées</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}