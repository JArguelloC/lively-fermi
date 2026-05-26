import React from 'react';
import { Check } from 'lucide-react';

interface Step {
  id: string;
  label: string;
}

interface CheckoutStepperProps {
  steps: Step[];
  currentStepId: string;
}

export default function CheckoutStepper({ steps, currentStepId }: CheckoutStepperProps) {
  const currentStepIndex = steps.findIndex(step => step.id === currentStepId);

  return (
    <div className="w-full mb-12">
      <div className="relative flex items-center justify-between w-full">
        {/* Background track */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-0.5 bg-zinc-800 -z-10 rounded-full" />
        
        {/* Active track */}
        <div 
          className="absolute left-0 top-1/2 -translate-y-1/2 h-0.5 bg-indigo-500 -z-10 rounded-full transition-all duration-300 ease-in-out" 
          style={{ width: `${(currentStepIndex / (steps.length - 1)) * 100}%` }}
        />

        {steps.map((step, index) => {
          const isCompleted = index < currentStepIndex;
          const isCurrent = index === currentStepIndex;

          return (
            <div key={step.id} className="relative flex flex-col items-center">
              <div 
                className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-colors duration-300
                  ${isCompleted ? 'bg-indigo-500 text-white shadow-[0_0_15px_rgba(99,102,241,0.5)]' : 
                    isCurrent ? 'bg-zinc-900 border-2 border-indigo-500 text-indigo-400 shadow-[0_0_15px_rgba(99,102,241,0.2)]' : 
                    'bg-zinc-900 border-2 border-zinc-800 text-zinc-500'}`}
              >
                {isCompleted ? <Check className="w-5 h-5" /> : index + 1}
              </div>
              <span className={`absolute -bottom-8 w-24 text-center text-xs sm:text-sm font-medium transition-colors duration-300
                ${isCurrent ? 'text-indigo-400' : isCompleted ? 'text-zinc-300' : 'text-zinc-600'}`}
              >
                {step.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
