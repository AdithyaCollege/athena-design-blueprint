import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Progress } from "./ui/progress";
import { Home, Utensils, BedDouble, Building2, Sparkles, Target, DollarSign } from "lucide-react";
import { toast } from "sonner";

type Step = 1 | 2 | 3 | 4;

interface FormData {
  spaceType: string;
  budget: string;
  goal: string;
  firstName: string;
  email: string;
  phone: string;
}

const EnvisionForm = () => {
  const [currentStep, setCurrentStep] = useState<Step>(1);
  const [formData, setFormData] = useState<FormData>({
    spaceType: "",
    budget: "",
    goal: "",
    firstName: "",
    email: "",
    phone: "",
  });

  const totalSteps = 4;
  const progress = (currentStep / totalSteps) * 100;

  const handleSpaceSelect = (space: string) => {
    setFormData({ ...formData, spaceType: space });
    setTimeout(() => setCurrentStep(2), 300);
  };

  const handleBudgetSelect = (budget: string) => {
    setFormData({ ...formData, budget });
    setTimeout(() => setCurrentStep(3), 300);
  };

  const handleGoalSelect = (goal: string) => {
    setFormData({ ...formData, goal });
    setTimeout(() => setCurrentStep(4), 300);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.firstName || !formData.email) {
      toast.error("Please fill in all required fields");
      return;
    }
    console.log("Form submitted:", formData);
    toast.success("Thank you! We'll send your initial quote shortly.");
    // Reset form
    setFormData({
      spaceType: "",
      budget: "",
      goal: "",
      firstName: "",
      email: "",
      phone: "",
    });
    setCurrentStep(1);
  };

  const spaceOptions = [
    { icon: Home, label: "Living Room", value: "living-room" },
    { icon: Utensils, label: "Kitchen", value: "kitchen" },
    { icon: BedDouble, label: "Bedroom", value: "bedroom" },
    { icon: Home, label: "Whole Home", value: "whole-home" },
    { icon: Building2, label: "Commercial", value: "commercial" },
  ];

  const budgetOptions = [
    { label: "$5k - $10k", value: "5-10k" },
    { label: "$10k - $20k", value: "10-20k" },
    { label: "$20k+", value: "20k+" },
    { label: "Not Sure Yet", value: "unsure" },
  ];

  const goalOptions = [
    { icon: Sparkles, label: "Modernize It", value: "modernize" },
    { icon: Home, label: "Make it Cozy", value: "cozy" },
    { icon: Home, label: "Better for Family", value: "family" },
    { icon: Target, label: "Impress Guests", value: "impress" },
  ];

  return (
    <div id="envision" className="bg-muted py-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Let's Envision Your Space
          </h2>
          <p className="text-lg text-muted-foreground">
            Start your free quote in 60 seconds
          </p>
        </div>

        <div className="bg-card rounded-2xl shadow-lg p-8 md:p-12">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between text-sm text-muted-foreground mb-2">
              <span>Step {currentStep} of {totalSteps}</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          {/* Step 1: Space Type */}
          {currentStep === 1 && (
            <div className="animate-fade-in">
              <h3 className="text-2xl font-serif font-semibold mb-6 text-center">
                What kind of space are we designing?
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {spaceOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => handleSpaceSelect(option.value)}
                    className="flex flex-col items-center justify-center p-6 border-2 border-border rounded-lg hover:border-primary hover:bg-primary/5 transition-all group"
                  >
                    <option.icon className="w-8 h-8 mb-2 text-primary group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-medium">{option.label}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Budget */}
          {currentStep === 2 && (
            <div className="animate-fade-in">
              <h3 className="text-2xl font-serif font-semibold mb-6 text-center">
                What's your approximate budget?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {budgetOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => handleBudgetSelect(option.value)}
                    className="flex items-center justify-center p-6 border-2 border-border rounded-lg hover:border-primary hover:bg-primary/5 transition-all"
                  >
                    <DollarSign className="w-5 h-5 mr-2 text-primary" />
                    <span className="font-medium">{option.label}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 3: Goal */}
          {currentStep === 3 && (
            <div className="animate-fade-in">
              <h3 className="text-2xl font-serif font-semibold mb-6 text-center">
                What's the main goal for your new space?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {goalOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => handleGoalSelect(option.value)}
                    className="flex items-center justify-center p-6 border-2 border-border rounded-lg hover:border-primary hover:bg-primary/5 transition-all group"
                  >
                    <option.icon className="w-5 h-5 mr-2 text-primary group-hover:scale-110 transition-transform" />
                    <span className="font-medium">{option.label}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 4: Contact Info */}
          {currentStep === 4 && (
            <div className="animate-fade-in">
              <h3 className="text-2xl font-serif font-semibold mb-2 text-center">
                Great! We have some ideas.
              </h3>
              <p className="text-muted-foreground text-center mb-6">
                Where can we send your initial quote?
              </p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    type="text"
                    placeholder="First Name *"
                    value={formData.firstName}
                    onChange={(e) =>
                      setFormData({ ...formData, firstName: e.target.value })
                    }
                    required
                    className="h-12"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Email Address *"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                    className="h-12"
                  />
                </div>
                <div>
                  <Input
                    type="tel"
                    placeholder="Phone Number (Optional)"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="h-12"
                  />
                </div>
                <Button type="submit" className="w-full h-12 text-base">
                  Get My Free Quote
                </Button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EnvisionForm;
