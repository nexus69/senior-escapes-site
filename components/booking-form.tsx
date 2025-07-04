'use client';

import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Progress } from '@/components/ui/progress';
import { 
  Calendar, 
  CreditCard, 
  User, 
  MapPin, 
  Phone, 
  Mail, 
  Check, 
  ArrowRight, 
  ArrowLeft,
  Shield,
  Star,
  Clock,
  Users,
  Heart
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface BookingFormProps {
  open: boolean;
  onClose: () => void;
  formula: {
    id: string;
    name: string;
    price: number;
    duration: string;
    description: string;
    features: string[];
    color: string;
    badge: string;
  };
}

export function BookingForm({ open, onClose, formula }: BookingFormProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);
  const { toast } = useToast();

  const [bookingData, setBookingData] = useState({
    // Étape 1: Informations personnelles
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    nationality: '',
    
    // Étape 2: Détails du séjour
    startDate: '',
    duration: '1',
    accommodation: '',
    specialRequests: '',
    
    // Étape 3: Informations médicales
    medicalConditions: '',
    medications: '',
    emergencyContact: '',
    emergencyPhone: '',
    
    // Étape 4: Conditions et paiement
    acceptTerms: false,
    acceptPrivacy: false,
    newsletter: false,
    paymentMethod: 'card'
  });

  const steps = [
    {
      id: 'personal',
      title: 'Informations personnelles',
      icon: User,
      description: 'Vos coordonnées'
    },
    {
      id: 'stay',
      title: 'Détails du séjour',
      icon: Calendar,
      description: 'Dates et préférences'
    },
    {
      id: 'medical',
      title: 'Informations médicales',
      icon: Heart,
      description: 'Pour votre sécurité'
    },
    {
      id: 'summary',
      title: 'Récapitulatif',
      icon: Check,
      description: 'Vérification et paiement'
    }
  ];

  const handleInputChange = (field: string, value: any) => {
    setBookingData(prev => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const calculateTotal = () => {
    const basePrice = formula.price * parseInt(bookingData.duration);
    const fees = Math.round(basePrice * 0.03); // 3% de frais de service
    return { basePrice, fees, total: basePrice + fees };
  };

  const handlePayment = async () => {
    setIsProcessing(true);
    
    try {
      // Simulation du processus de paiement Stripe
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Réservation confirmée !",
        description: "Vous recevrez un email de confirmation sous peu. Sophie vous contactera dans les 24h.",
      });
      
      onClose();
      setCurrentStep(0);
      setBookingData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        dateOfBirth: '',
        nationality: '',
        startDate: '',
        duration: '1',
        accommodation: '',
        specialRequests: '',
        medicalConditions: '',
        medications: '',
        emergencyContact: '',
        emergencyPhone: '',
        acceptTerms: false,
        acceptPrivacy: false,
        newsletter: false,
        paymentMethod: 'card'
      });
    } catch (error) {
      toast({
        title: "Erreur de paiement",
        description: "Une erreur est survenue. Veuillez réessayer.",
        variant: "destructive"
      });
    } finally {
      setIsProcessing(false);
    }
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 0:
        return bookingData.firstName && bookingData.lastName && bookingData.email && bookingData.phone;
      case 1:
        return bookingData.startDate && bookingData.duration && bookingData.accommodation;
      case 2:
        return bookingData.emergencyContact && bookingData.emergencyPhone;
      case 3:
        return bookingData.acceptTerms && bookingData.acceptPrivacy;
      default:
        return true;
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="firstName">Prénom *</Label>
                <Input
                  id="firstName"
                  value={bookingData.firstName}
                  onChange={(e) => handleInputChange('firstName', e.target.value)}
                  placeholder="Votre prénom"
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="lastName">Nom *</Label>
                <Input
                  id="lastName"
                  value={bookingData.lastName}
                  onChange={(e) => handleInputChange('lastName', e.target.value)}
                  placeholder="Votre nom"
                  className="mt-1"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  value={bookingData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  placeholder="votre.email@exemple.com"
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="phone">Téléphone *</Label>
                <Input
                  id="phone"
                  value={bookingData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  placeholder="+33 X XX XX XX XX"
                  className="mt-1"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="dateOfBirth">Date de naissance</Label>
                <Input
                  id="dateOfBirth"
                  type="date"
                  value={bookingData.dateOfBirth}
                  onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="nationality">Nationalité</Label>
                <Input
                  id="nationality"
                  value={bookingData.nationality}
                  onChange={(e) => handleInputChange('nationality', e.target.value)}
                  placeholder="Française"
                  className="mt-1"
                />
              </div>
            </div>
          </div>
        );

      case 1:
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="startDate">Date de début *</Label>
                <Input
                  id="startDate"
                  type="date"
                  value={bookingData.startDate}
                  onChange={(e) => handleInputChange('startDate', e.target.value)}
                  className="mt-1"
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>
              <div>
                <Label>Durée du séjour *</Label>
                <RadioGroup
                  value={bookingData.duration}
                  onValueChange={(value) => handleInputChange('duration', value)}
                  className="mt-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="1" id="1month" />
                    <Label htmlFor="1month">1 mois</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="2" id="2months" />
                    <Label htmlFor="2months">2 mois</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="3" id="3months" />
                    <Label htmlFor="3months">3 mois</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="6" id="6months" />
                    <Label htmlFor="6months">6 mois</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>

            <div>
              <Label>Type de logement *</Label>
              <RadioGroup
                value={bookingData.accommodation}
                onValueChange={(value) => handleInputChange('accommodation', value)}
                className="mt-2 space-y-3"
              >
                <div className="flex items-center space-x-2 p-3 border rounded-lg">
                  <RadioGroupItem value="studio" id="studio" />
                  <Label htmlFor="studio" className="flex-1">
                    <div className="font-medium">Studio (35m²)</div>
                    <div className="text-sm text-gray-500">Coin cuisine, salle de bain, terrasse</div>
                  </Label>
                </div>
                <div className="flex items-center space-x-2 p-3 border rounded-lg">
                  <RadioGroupItem value="2pieces" id="2pieces" />
                  <Label htmlFor="2pieces" className="flex-1">
                    <div className="font-medium">2 pièces (55m²)</div>
                    <div className="text-sm text-gray-500">Chambre séparée, salon, cuisine, terrasse</div>
                  </Label>
                </div>
                {formula.id === 'excellence' && (
                  <div className="flex items-center space-x-2 p-3 border rounded-lg">
                    <RadioGroupItem value="suite" id="suite" />
                    <Label htmlFor="suite" className="flex-1">
                      <div className="font-medium">Suite Excellence (90m²)</div>
                      <div className="text-sm text-gray-500">2 chambres, grand salon, terrasse privée</div>
                    </Label>
                  </div>
                )}
              </RadioGroup>
            </div>

            <div>
              <Label htmlFor="specialRequests">Demandes particulières</Label>
              <Textarea
                id="specialRequests"
                value={bookingData.specialRequests}
                onChange={(e) => handleInputChange('specialRequests', e.target.value)}
                placeholder="Allergies alimentaires, préférences, besoins spéciaux..."
                className="mt-1"
                rows={3}
              />
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div>
              <Label htmlFor="medicalConditions">Conditions médicales</Label>
              <Textarea
                id="medicalConditions"
                value={bookingData.medicalConditions}
                onChange={(e) => handleInputChange('medicalConditions', e.target.value)}
                placeholder="Maladies chroniques, allergies, problèmes de santé..."
                className="mt-1"
                rows={3}
              />
            </div>

            <div>
              <Label htmlFor="medications">Médicaments actuels</Label>
              <Textarea
                id="medications"
                value={bookingData.medications}
                onChange={(e) => handleInputChange('medications', e.target.value)}
                placeholder="Liste de vos médicaments réguliers..."
                className="mt-1"
                rows={3}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="emergencyContact">Contact d'urgence *</Label>
                <Input
                  id="emergencyContact"
                  value={bookingData.emergencyContact}
                  onChange={(e) => handleInputChange('emergencyContact', e.target.value)}
                  placeholder="Nom du contact d'urgence"
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="emergencyPhone">Téléphone d'urgence *</Label>
                <Input
                  id="emergencyPhone"
                  value={bookingData.emergencyPhone}
                  onChange={(e) => handleInputChange('emergencyPhone', e.target.value)}
                  placeholder="+33 X XX XX XX XX"
                  className="mt-1"
                />
              </div>
            </div>
          </div>
        );

      case 3:
        const pricing = calculateTotal();
        return (
          <div className="space-y-6">
            {/* Récapitulatif de la réservation */}
            <Card className="p-6 bg-gray-50">
              <h3 className="text-lg font-bold mb-4">Récapitulatif de votre réservation</h3>
              
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Formule :</span>
                  <span className="font-medium">{formula.name}</span>
                </div>
                <div className="flex justify-between">
                  <span>Durée :</span>
                  <span className="font-medium">{bookingData.duration} mois</span>
                </div>
                <div className="flex justify-between">
                  <span>Date de début :</span>
                  <span className="font-medium">{new Date(bookingData.startDate).toLocaleDateString('fr-FR')}</span>
                </div>
                <div className="flex justify-between">
                  <span>Logement :</span>
                  <span className="font-medium">{bookingData.accommodation}</span>
                </div>
                
                <Separator />
                
                <div className="flex justify-between">
                  <span>Sous-total :</span>
                  <span>{pricing.basePrice}€</span>
                </div>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Frais de service :</span>
                  <span>{pricing.fees}€</span>
                </div>
                <div className="flex justify-between text-lg font-bold">
                  <span>Total :</span>
                  <span>{pricing.total}€</span>
                </div>
              </div>
            </Card>

            {/* Informations de paiement */}
            <Card className="p-6">
              <h3 className="text-lg font-bold mb-4 flex items-center">
                <CreditCard className="w-5 h-5 mr-2" />
                Paiement sécurisé
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-2 p-3 border rounded-lg bg-blue-50">
                  <Shield className="w-5 h-5 text-blue-600" />
                  <div className="text-sm">
                    <div className="font-medium">Paiement 100% sécurisé</div>
                    <div className="text-gray-600">Vos données sont protégées par Stripe</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="acceptTerms"
                      checked={bookingData.acceptTerms}
                      onCheckedChange={(checked) => handleInputChange('acceptTerms', checked)}
                    />
                    <Label htmlFor="acceptTerms" className="text-sm">
                      J'accepte les <a href="#" className="text-blue-600 underline">conditions générales</a> *
                    </Label>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="acceptPrivacy"
                      checked={bookingData.acceptPrivacy}
                      onCheckedChange={(checked) => handleInputChange('acceptPrivacy', checked)}
                    />
                    <Label htmlFor="acceptPrivacy" className="text-sm">
                      J'accepte la <a href="#" className="text-blue-600 underline">politique de confidentialité</a> *
                    </Label>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="newsletter"
                      checked={bookingData.newsletter}
                      onCheckedChange={(checked) => handleInputChange('newsletter', checked)}
                    />
                    <Label htmlFor="newsletter" className="text-sm">
                      Je souhaite recevoir les actualités Senior Escapes
                    </Label>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <Dialog open={open} onOpenChange={(newOpenState) => !newOpenState && onClose()}>
      <DialogContent className="max-w-4xl max-h-[95vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-3">
            <div className={`w-8 h-8 bg-${formula.color}-500 rounded-lg flex items-center justify-center`}>
              <Star className="w-4 h-4 text-white" />
            </div>
            <div>
              <span className="text-xl">Réservation {formula.name}</span>
              <Badge className={`ml-2 bg-${formula.color}-100 text-${formula.color}-700`}>
                {formula.badge}
              </Badge>
            </div>
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-8">
          {/* Progress */}
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">
                Étape {currentStep + 1} sur {steps.length}
              </span>
              <span className="text-sm font-medium text-blue-600">
                {Math.round(((currentStep + 1) / steps.length) * 100)}% complété
              </span>
            </div>
            <Progress value={((currentStep + 1) / steps.length) * 100} className="h-2" />
          </div>

          {/* Step indicators */}
          <div className="flex justify-between">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = index === currentStep;
              const isCompleted = index < currentStep;
              
              return (
                <div key={step.id} className="flex flex-col items-center space-y-2 flex-1">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                    isCompleted 
                      ? 'bg-green-500 border-green-500 text-white' 
                      : isActive 
                        ? `bg-${formula.color}-500 border-${formula.color}-500 text-white` 
                        : 'border-gray-300 text-gray-400'
                  }`}>
                    {isCompleted ? <Check className="w-5 h-5" /> : <Icon className="w-5 h-5" />}
                  </div>
                  <div className="text-center">
                    <div className={`text-sm font-medium ${isActive ? `text-${formula.color}-600` : 'text-gray-600'}`}>
                      {step.title}
                    </div>
                    <div className="text-xs text-gray-500 hidden sm:block">
                      {step.description}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Step Content */}
          <Card className="p-6">
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {steps[currentStep].title}
              </h3>
              <p className="text-gray-600">
                {steps[currentStep].description}
              </p>
            </div>
            
            {renderStepContent()}
          </Card>

          {/* Navigation */}
          <div className="flex justify-between">
            <Button
              variant="outline"
              onClick={prevStep}
              disabled={currentStep === 0}
              className="flex items-center space-x-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Précédent</span>
            </Button>

            {currentStep === steps.length - 1 ? (
              <Button
                onClick={handlePayment}
                disabled={!isStepValid() || isProcessing}
                className={`bg-${formula.color}-600 hover:bg-${formula.color}-700 text-white px-8`}
              >
                {isProcessing ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Traitement...
                  </>
                ) : (
                  <>
                    <CreditCard className="w-4 h-4 mr-2" />
                    Payer {calculateTotal().total}€
                  </>
                )}
              </Button>
            ) : (
              <Button
                onClick={nextStep}
                disabled={!isStepValid()}
                className={`bg-${formula.color}-600 hover:bg-${formula.color}-700 text-white`}
              >
                <span>Suivant</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}