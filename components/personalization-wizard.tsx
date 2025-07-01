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
import { Slider } from '@/components/ui/slider';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, ArrowLeft, Check, User, Heart, Shield, Calendar, Sparkles } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface PersonalizationWizardProps {
  open: boolean;
  onClose: () => void;
}

export function PersonalizationWizard({ open, onClose }: PersonalizationWizardProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    // Step 1: Personal Info
    firstName: '',
    lastName: '',
    age: '',
    nationality: '',
    
    // Step 2: Stay Preferences
    duration: '',
    period: '',
    budget: [3000],
    accommodation: '',
    
    // Step 3: Interests & Activities
    interests: [] as string[],
    mobility: '',
    dietaryRestrictions: '',
    
    // Step 4: Health & Support
    healthConditions: '',
    medications: '',
    emergencyContact: '',
    additionalNeeds: ''
  });
  const { toast } = useToast();

  const steps = [
    {
      id: 'personal',
      title: 'Informations personnelles',
      icon: User,
      description: 'Parlez-nous de vous'
    },
    {
      id: 'preferences',
      title: 'Préférences de séjour',
      icon: Calendar,
      description: 'Votre séjour idéal'
    },
    {
      id: 'interests',
      title: 'Centres d\'intérêt',
      icon: Heart,
      description: 'Vos passions et loisirs'
    },
    {
      id: 'health',
      title: 'Santé et accompagnement',
      icon: Shield,
      description: 'Pour votre sécurité'
    }
  ];

  const interests = [
    'Culture et histoire',
    'Gastronomie locale',
    'Bien-être et spa',
    'Activités sportives douces',
    'Artisanat et créativité',
    'Nature et jardinage',
    'Lecture et écriture',
    'Musique et danse',
    'Photographie',
    'Rencontres sociales',
    'Jeux de société',
    'Excursions découverte'
  ];

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleInterestToggle = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
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

  const handleSubmit = async () => {
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Questionnaire complété !",
      description: "Nous préparons votre séjour personnalisé. Un conseiller vous contactera sous 24h.",
    });
    
    onClose();
    setCurrentStep(0);
    setFormData({
      firstName: '',
      lastName: '',
      age: '',
      nationality: '',
      duration: '',
      period: '',
      budget: [3000],
      accommodation: '',
      interests: [],
      mobility: '',
      dietaryRestrictions: '',
      healthConditions: '',
      medications: '',
      emergencyContact: '',
      additionalNeeds: ''
    });
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="space-y-4 sm:space-y-6">
            <div className="grid grid-cols-1 gap-4">
              <div>
                <Label htmlFor="firstName" className="text-sm sm:text-base">Prénom *</Label>
                <Input
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) => handleInputChange('firstName', e.target.value)}
                  placeholder="Votre prénom"
                  className="mt-1 h-12 text-base"
                />
              </div>
              <div>
                <Label htmlFor="lastName" className="text-sm sm:text-base">Nom *</Label>
                <Input
                  id="lastName"
                  value={formData.lastName}
                  onChange={(e) => handleInputChange('lastName', e.target.value)}
                  placeholder="Votre nom"
                  className="mt-1 h-12 text-base"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="age" className="text-sm sm:text-base">Âge</Label>
                <Input
                  id="age"
                  type="number"
                  value={formData.age}
                  onChange={(e) => handleInputChange('age', e.target.value)}
                  placeholder="Votre âge"
                  className="mt-1 h-12 text-base"
                />
              </div>
              <div>
                <Label htmlFor="nationality" className="text-sm sm:text-base">Nationalité</Label>
                <Input
                  id="nationality"
                  value={formData.nationality}
                  onChange={(e) => handleInputChange('nationality', e.target.value)}
                  placeholder="Votre nationalité"
                  className="mt-1 h-12 text-base"
                />
              </div>
            </div>
          </div>
        );

      case 1:
        return (
          <div className="space-y-4 sm:space-y-6">
            <div>
              <Label className="text-base font-medium">Durée de séjour souhaitée</Label>
              <RadioGroup
                value={formData.duration}
                onValueChange={(value) => handleInputChange('duration', value)}
                className="mt-3 space-y-3"
              >
                <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50">
                  <RadioGroupItem value="1-month" id="1-month" />
                  <Label htmlFor="1-month" className="text-sm sm:text-base">1 mois</Label>
                </div>
                <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50">
                  <RadioGroupItem value="2-3-months" id="2-3-months" />
                  <Label htmlFor="2-3-months" className="text-sm sm:text-base">2-3 mois</Label>
                </div>
                <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50">
                  <RadioGroupItem value="4-6-months" id="4-6-months" />
                  <Label htmlFor="4-6-months" className="text-sm sm:text-base">4-6 mois</Label>
                </div>
                <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50">
                  <RadioGroupItem value="flexible" id="flexible" />
                  <Label htmlFor="flexible" className="text-sm sm:text-base">Flexible</Label>
                </div>
              </RadioGroup>
            </div>

            <div>
              <Label className="text-base font-medium">Période préférée</Label>
              <RadioGroup
                value={formData.period}
                onValueChange={(value) => handleInputChange('period', value)}
                className="mt-3 space-y-3"
              >
                <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50">
                  <RadioGroupItem value="autumn" id="autumn" />
                  <Label htmlFor="autumn" className="text-sm sm:text-base">Automne (Oct-Déc)</Label>
                </div>
                <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50">
                  <RadioGroupItem value="winter" id="winter" />
                  <Label htmlFor="winter" className="text-sm sm:text-base">Hiver (Jan-Mar)</Label>
                </div>
                <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50">
                  <RadioGroupItem value="spring" id="spring" />
                  <Label htmlFor="spring" className="text-sm sm:text-base">Printemps (Avr-Juin)</Label>
                </div>
              </RadioGroup>
            </div>

            <div>
              <Label className="text-base font-medium">Budget mensuel approximatif</Label>
              <div className="mt-3">
                <Slider
                  value={formData.budget}
                  onValueChange={(value) => handleInputChange('budget', value)}
                  max={8000}
                  min={1500}
                  step={250}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-gray-500 mt-2">
                  <span>1 500€</span>
                  <span className="font-medium text-blue-600 text-lg">{formData.budget[0]}€</span>
                  <span>8 000€</span>
                </div>
              </div>
            </div>

            <div>
              <Label className="text-base font-medium">Type de logement préféré</Label>
              <RadioGroup
                value={formData.accommodation}
                onValueChange={(value) => handleInputChange('accommodation', value)}
                className="mt-3 space-y-3"
              >
                <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50">
                  <RadioGroupItem value="studio" id="studio" />
                  <Label htmlFor="studio" className="text-sm sm:text-base">Studio indépendant</Label>
                </div>
                <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50">
                  <RadioGroupItem value="apartment" id="apartment" />
                  <Label htmlFor="apartment" className="text-sm sm:text-base">Appartement 2 pièces</Label>
                </div>
                <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50">
                  <RadioGroupItem value="shared" id="shared" />
                  <Label htmlFor="shared" className="text-sm sm:text-base">Colocation senior</Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-4 sm:space-y-6">
            <div>
              <Label className="text-base font-medium mb-4 block">Quelles activités vous intéressent le plus ?</Label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {interests.map((interest) => (
                  <div key={interest} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50">
                    <Checkbox
                      id={interest}
                      checked={formData.interests.includes(interest)}
                      onCheckedChange={() => handleInterestToggle(interest)}
                    />
                    <Label htmlFor={interest} className="text-sm sm:text-base flex-1">{interest}</Label>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <Label className="text-base font-medium">Niveau de mobilité</Label>
              <RadioGroup
                value={formData.mobility}
                onValueChange={(value) => handleInputChange('mobility', value)}
                className="mt-3 space-y-3"
              >
                <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50">
                  <RadioGroupItem value="excellent" id="excellent" className="mt-1" />
                  <Label htmlFor="excellent" className="text-sm sm:text-base">Excellente - Je marche sans problème</Label>
                </div>
                <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50">
                  <RadioGroupItem value="good" id="good" className="mt-1" />
                  <Label htmlFor="good" className="text-sm sm:text-base">Bonne - Quelques limitations occasionnelles</Label>
                </div>
                <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50">
                  <RadioGroupItem value="limited" id="limited" className="mt-1" />
                  <Label htmlFor="limited" className="text-sm sm:text-base">Limitée - J'ai besoin d'aide parfois</Label>
                </div>
              </RadioGroup>
            </div>

            <div>
              <Label htmlFor="dietaryRestrictions" className="text-sm sm:text-base">Restrictions alimentaires ou régimes particuliers</Label>
              <Textarea
                id="dietaryRestrictions"
                value={formData.dietaryRestrictions}
                onChange={(e) => handleInputChange('dietaryRestrictions', e.target.value)}
                placeholder="Allergies, intolérances, régimes spéciaux..."
                className="mt-1 text-base"
                rows={3}
              />
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-4 sm:space-y-6">
            <div>
              <Label htmlFor="healthConditions" className="text-sm sm:text-base">Conditions de santé à prendre en compte</Label>
              <Textarea
                id="healthConditions"
                value={formData.healthConditions}
                onChange={(e) => handleInputChange('healthConditions', e.target.value)}
                placeholder="Maladies chroniques, problèmes de santé particuliers..."
                className="mt-1 text-base"
                rows={3}
              />
            </div>

            <div>
              <Label htmlFor="medications" className="text-sm sm:text-base">Médicaments actuels</Label>
              <Textarea
                id="medications"
                value={formData.medications}
                onChange={(e) => handleInputChange('medications', e.target.value)}
                placeholder="Liste de vos médicaments réguliers..."
                className="mt-1 text-base"
                rows={3}
              />
            </div>

            <div>
              <Label htmlFor="emergencyContact" className="text-sm sm:text-base">Contact d'urgence</Label>
              <Input
                id="emergencyContact"
                value={formData.emergencyContact}
                onChange={(e) => handleInputChange('emergencyContact', e.target.value)}
                placeholder="Nom et téléphone de votre contact d'urgence"
                className="mt-1 h-12 text-base"
              />
            </div>

            <div>
              <Label htmlFor="additionalNeeds" className="text-sm sm:text-base">Besoins particuliers ou commentaires</Label>
              <Textarea
                id="additionalNeeds"
                value={formData.additionalNeeds}
                onChange={(e) => handleInputChange('additionalNeeds', e.target.value)}
                placeholder="Tout ce que vous souhaitez nous faire savoir..."
                className="mt-1 text-base"
                rows={4}
              />
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 0:
        return formData.firstName && formData.lastName;
      case 1:
        return formData.duration && formData.period;
      case 2:
        return formData.interests.length > 0 && formData.mobility;
      case 3:
        return true; // Optional fields
      default:
        return true;
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[95vh] overflow-y-auto mx-4">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-2 text-xl sm:text-2xl">
            <Sparkles className="w-6 h-6 text-orange-500" />
            <span>Construisons votre séjour sur mesure</span>
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6 sm:space-y-8">
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

          {/* Step indicators - Mobile Optimized */}
          <div className="grid grid-cols-2 sm:flex sm:justify-between gap-4">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = index === currentStep;
              const isCompleted = index < currentStep;
              
              return (
                <div key={step.id} className="flex flex-col items-center space-y-2 flex-1">
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                    isCompleted 
                      ? 'bg-green-500 border-green-500 text-white' 
                      : isActive 
                        ? 'bg-blue-500 border-blue-500 text-white' 
                        : 'border-gray-300 text-gray-400'
                  }`}>
                    {isCompleted ? <Check className="w-5 h-5 sm:w-6 sm:h-6" /> : <Icon className="w-5 h-5 sm:w-6 sm:h-6" />}
                  </div>
                  <div className="text-center">
                    <div className={`text-xs sm:text-sm font-medium ${isActive ? 'text-blue-600' : 'text-gray-600'}`}>
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
          <Card className="p-6 sm:p-8">
            <div className="mb-6">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                {steps[currentStep].title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                {steps[currentStep].description}
              </p>
            </div>
            
            {renderStepContent()}
          </Card>

          {/* Selected interests preview */}
          {currentStep === 2 && formData.interests.length > 0 && (
            <Card className="p-4 bg-blue-50">
              <h4 className="font-medium text-blue-900 mb-2 text-sm sm:text-base">Vos centres d'intérêt sélectionnés :</h4>
              <div className="flex flex-wrap gap-2">
                {formData.interests.map((interest) => (
                  <Badge key={interest} className="bg-blue-100 text-blue-800 text-xs">
                    {interest}
                  </Badge>
                ))}
              </div>
            </Card>
          )}

          {/* Navigation */}
          <div className="flex flex-col sm:flex-row justify-between gap-4">
            <Button
              variant="outline"
              onClick={prevStep}
              disabled={currentStep === 0}
              className="flex items-center justify-center space-x-2 h-12 text-base"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Précédent</span>
            </Button>

            {currentStep === steps.length - 1 ? (
              <Button
                onClick={handleSubmit}
                disabled={!isStepValid()}
                className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 h-12 text-base font-semibold"
              >
                <Check className="w-4 h-4 mr-2" />
                Terminer le questionnaire
              </Button>
            ) : (
              <Button
                onClick={nextStep}
                disabled={!isStepValid()}
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white h-12 text-base font-semibold"
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