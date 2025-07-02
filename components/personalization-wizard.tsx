'use client';

import { useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';
import { ArrowRight, Check } from 'lucide-react';

const steps = [
  'Informations personnelles',
  'Préférences de séjour',
  'Centres d’intérêt',
  'Santé et accompagnement'
];

export function PersonalizationWizard({ onClose }: { onClose: () => void }) {
  const { toast } = useToast();

  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    age: '',
    nationality: '',
    duration: '',
    period: '',
    budget: '',
    accommodation: '',
    interests: [] as string[],
    mobility: '',
    dietaryRestrictions: '',
    healthConditions: '',
    medications: '',
    emergencyContact: '',
    additionalNeeds: ''
  });

  const handleCheckboxChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.includes(value)
        ? prev.interests.filter((v) => v !== value)
        : [...prev.interests, value]
    }));
  };

  const isStepValid = () => true;

  const nextStep = () => {
    if (currentStep < steps.length - 1) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  const handleSubmit = () => {
    toast({
      title: 'Questionnaire complété !',
      description:
        'Nous préparons votre séjour personnalisé. Un conseiller vous contactera sous 24h.'
    });
    onClose();
    setCurrentStep(0);
  };

  return (
    <form
      action="https://formsubmit.co/sstinus@gmail.com"
      method="POST"
      onSubmit={handleSubmit}
    >
      <Dialog open onOpenChange={onClose}>
        <DialogContent className="max-w-4xl max-h-[95vh] overflow-y-auto mx-4">
          <h2 className="text-xl font-semibold mb-4">{steps[currentStep]}</h2>

          {/* === ÉTAPE 1 === */}
          {currentStep === 0 && (
            <div className="grid gap-4">
              <div>
                <Label>Prénom *</Label>
                <Input
                  name="Prénom"
                  value={formData.firstName}
                  onChange={(e) =>
                    setFormData({ ...formData, firstName: e.target.value })
                  }
                  required
                />
              </div>
              <div>
                <Label>Nom *</Label>
                <Input
                  name="Nom"
                  value={formData.lastName}
                  onChange={(e) =>
                    setFormData({ ...formData, lastName: e.target.value })
                  }
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Âge</Label>
                  <Input
                    name="Âge"
                    value={formData.age}
                    onChange={(e) =>
                      setFormData({ ...formData, age: e.target.value })
                    }
                  />
                </div>
                <div>
                  <Label>Nationalité</Label>
                  <Input
                    name="Nationalité"
                    value={formData.nationality}
                    onChange={(e) =>
                      setFormData({ ...formData, nationality: e.target.value })
                    }
                  />
                </div>
              </div>
            </div>
          )}

          {/* === ÉTAPE 2 === */}
          {currentStep === 1 && (
            <div className="grid gap-4">
              <div>
                <Label>Durée de séjour</Label>
                <Input
                  name="Durée de séjour"
                  value={formData.duration}
                  onChange={(e) =>
                    setFormData({ ...formData, duration: e.target.value })
                  }
                />
              </div>
              <div>
                <Label>Période</Label>
                <Input
                  name="Période"
                  value={formData.period}
                  onChange={(e) =>
                    setFormData({ ...formData, period: e.target.value })
                  }
                />
              </div>
              <div>
                <Label>Budget</Label>
                <Input
                  name="Budget"
                  value={formData.budget}
                  onChange={(e) =>
                    setFormData({ ...formData, budget: e.target.value })
                  }
                />
              </div>
              <div>
                <Label>Type de logement</Label>
                <Input
                  name="Type de logement"
                  value={formData.accommodation}
                  onChange={(e) =>
                    setFormData({ ...formData, accommodation: e.target.value })
                  }
                />
              </div>
            </div>
          )}

          {/* === ÉTAPE 3 === */}
          {currentStep === 2 && (
            <div className="grid gap-4">
              <Label>Centres d’intérêt</Label>
              <div className="flex flex-wrap gap-4">
                {['Culture', 'Nature', 'Gastronomie', 'Sport', 'Relaxation'].map((label) => (
                  <label key={label} className="flex items-center gap-2">
                    <Checkbox
                      checked={formData.interests.includes(label)}
                      onCheckedChange={() => handleCheckboxChange(label)}
                    />
                    {label}
                  </label>
                ))}
              </div>
            </div>
          )}

          {/* === ÉTAPE 4 === */}
          {currentStep === 3 && (
            <div className="grid gap-4">
              <div>
                <Label>Mobilité</Label>
                <Input
                  name="Mobilité"
                  value={formData.mobility}
                  onChange={(e) =>
                    setFormData({ ...formData, mobility: e.target.value })
                  }
                />
              </div>
              <div>
                <Label>Restrictions alimentaires</Label>
                <Input
                  name="Restrictions alimentaires"
                  value={formData.dietaryRestrictions}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      dietaryRestrictions: e.target.value
                    })
                  }
                />
              </div>
              <div>
                <Label>Conditions de santé</Label>
                <Input
                  name="Conditions de santé"
                  value={formData.healthConditions}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      healthConditions: e.target.value
                    })
                  }
                />
              </div>
              <div>
                <Label>Médicaments</Label>
                <Input
                  name="Médicaments"
                  value={formData.medications}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      medications: e.target.value
                    })
                  }
                />
              </div>
              <div>
                <Label>Contact d'urgence</Label>
                <Input
                  name="Contact d'urgence"
                  value={formData.emergencyContact}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      emergencyContact: e.target.value
                    })
                  }
                />
              </div>
              <div>
                <Label>Besoins particuliers</Label>
                <Input
                  name="Besoins particuliers"
                  value={formData.additionalNeeds}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      additionalNeeds: e.target.value
                    })
                  }
                />
              </div>
            </div>
          )}

          {/* === FOOTER === */}
          <div className="flex justify-between items-center mt-6">
            {currentStep > 0 && (
              <Button type="button" variant="outline" onClick={prevStep}>
                Retour
              </Button>
            )}

            {currentStep === steps.length - 1 ? (
              <Button
                type="submit"
                disabled={!isStepValid()}
                className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 h-12 text-base font-semibold"
              >
                <Check className="w-4 h-4 mr-2" />
                Terminer le questionnaire
              </Button>
            ) : (
              <Button
                type="button"
                onClick={nextStep}
                disabled={!isStepValid()}
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white h-12 text-base font-semibold"
              >
                <span>Suivant</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </form>
  );
}