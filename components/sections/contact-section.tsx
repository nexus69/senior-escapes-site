'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Phone, Mail, MapPin, MessageCircle, Calendar, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface ContactSectionProps {
  onStartWizard: () => void;
}

export function ContactSection({ onStartWizard }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    preferredContact: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message envoyé !",
      description: "Nous vous recontacterons dans les 24h. Merci pour votre intérêt.",
    });
    
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      preferredContact: ''
    });
    setIsSubmitting(false);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactMethods = [
    {
      icon: Phone,
      title: 'Téléphone',
      value: '+33 1 23 45 67 89',
      description: 'Lun-Ven 9h-18h',
      color: 'blue'
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'contact@seniorescapes.tn',
      description: 'Réponse sous 24h',
      color: 'green'
    },
    {
      icon: MapPin,
      title: 'Adresse',
      value: 'Hammamet, Tunisie',
      description: 'Visite sur rendez-vous',
      color: 'orange'
    }
  ];

  return (
    <section id="contact" className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full mb-6">
            <MessageCircle className="w-4 h-4 mr-2 text-blue-600" />
            <span className="text-blue-700 font-medium text-sm sm:text-base">Parlons de votre projet</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
            Construisons ensemble
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 block sm:inline"> votre séjour idéal</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Notre équipe est là pour répondre à toutes vos questions et vous accompagner 
            dans la création de votre expérience Senior Escapes sur mesure.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Form */}
          <Card className="p-6 sm:p-8 shadow-xl order-2 lg:order-1">
            <div className="mb-6 sm:mb-8">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Contactez-nous</h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Remplissez ce formulaire et nous vous recontacterons rapidement pour discuter de vos besoins.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <Label htmlFor="name" className="text-sm sm:text-base">Nom complet *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    placeholder="Votre nom"
                    required
                    className="mt-1 h-12 text-base"
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-sm sm:text-base">Téléphone</Label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => handleChange('phone', e.target.value)}
                    placeholder="+33 X XX XX XX XX"
                    className="mt-1 h-12 text-base"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="email" className="text-sm sm:text-base">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  placeholder="votre.email@exemple.com"
                  required
                  className="mt-1 h-12 text-base"
                />
              </div>

              <div>
                <Label htmlFor="subject" className="text-sm sm:text-base">Sujet de votre demande</Label>
                <Select value={formData.subject} onValueChange={(value) => handleChange('subject', value)}>
                  <SelectTrigger className="mt-1 h-12 text-base">
                    <SelectValue placeholder="Choisissez un sujet" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="information">Demande d'information générale</SelectItem>
                    <SelectItem value="sejour">Organisation d'un séjour</SelectItem>
                    <SelectItem value="tarifs">Tarifs et formules</SelectItem>
                    <SelectItem value="visite">Visite des installations</SelectItem>
                    <SelectItem value="medical">Questions médicales</SelectItem>
                    <SelectItem value="autre">Autre demande</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="preferredContact" className="text-sm sm:text-base">Mode de contact préféré</Label>
                <Select value={formData.preferredContact} onValueChange={(value) => handleChange('preferredContact', value)}>
                  <SelectTrigger className="mt-1 h-12 text-base">
                    <SelectValue placeholder="Comment préférez-vous être contacté ?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="phone">Téléphone</SelectItem>
                    <SelectItem value="email">Email</SelectItem>
                    <SelectItem value="video">Visioconférence</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="message" className="text-sm sm:text-base">Votre message</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleChange('message', e.target.value)}
                  placeholder="Décrivez-nous votre projet, vos attentes, vos questions..."
                  rows={4}
                  className="mt-1 text-base"
                />
              </div>

              <div className="flex flex-col gap-4">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-4 text-base sm:text-lg font-semibold"
                >
                  {isSubmitting ? (
                    <>Envoi en cours...</>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Envoyer le message
                    </>
                  )}
                </Button>
                <Button
                  type="button"
                  onClick={onStartWizard}
                  size="lg"
                  className="w-full bg-white text-orange-600 hover:bg-orange-50 hover:text-orange-700 border-0 font-semibold transition-all duration-300 shadow-lg hover:shadow-xl py-4 text-base sm:text-lg"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Questionnaire personnalisé (5 min)
                </Button>
              </div>
            </form>
          </Card>

          {/* Contact Information & Methods */}
          <div className="space-y-6 sm:space-y-8 order-1 lg:order-2">
            {/* Contact Methods */}
            <div className="space-y-4 sm:space-y-6">
              {contactMethods.map((method, index) => {
                const Icon = method.icon;
                const colorClasses = {
                  blue: 'bg-blue-100 text-blue-600',
                  green: 'bg-green-100 text-green-600',
                  orange: 'bg-orange-100 text-orange-600'
                };
                
                return (
                  <Card key={index} className="p-4 sm:p-6 hover:shadow-lg transition-shadow duration-300">
                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center ${colorClasses[method.color as keyof typeof colorClasses]} flex-shrink-0`}>
                        <Icon className="w-6 h-6 sm:w-7 sm:h-7" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-1 text-base sm:text-lg">{method.title}</h4>
                        <p className="text-base sm:text-lg text-gray-700 mb-1 font-medium">{method.value}</p>
                        <p className="text-sm text-gray-500">{method.description}</p>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>

            {/* Office Hours */}
            <Card className="p-4 sm:p-6">
              <h4 className="font-semibold text-gray-900 mb-4 text-base sm:text-lg">Heures d'ouverture</h4>
              <div className="space-y-2 text-sm sm:text-base">
                <div className="flex justify-between">
                  <span className="text-gray-600">Lundi - Vendredi</span>
                  <span className="font-medium">9h00 - 18h00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Samedi</span>
                  <span className="font-medium">9h00 - 14h00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Dimanche</span>
                  <span className="font-medium">Fermé</span>
                </div>
              </div>
              <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-700">
                  <strong>Urgences :</strong> Assistance 24h/24 pour nos résidents actuels
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}