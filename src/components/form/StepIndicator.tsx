import type React from "react"
import { Check, User, Home, Lock } from "lucide-react"
import ProgressBar from "../ui/ProgressBar"

interface StepIndicatorProps {
  currentStep: number
  steps: string[]
}

const StepIndicator: React.FC<StepIndicatorProps> = ({ currentStep, steps }) => {
  const getStepIcon = (index: number) => {
    switch (index) {
      case 0:
        return <User className="h-5 w-5" />
      case 1:
        return <Home className="h-5 w-5" />
      case 2:
        return <Lock className="h-5 w-5" />
      case 3:
        return <Check className="h-5 w-5" />
      default:
        return null
    }
  }

  return (
    <div className="mb-8">
      <ProgressBar currentStep={currentStep} totalSteps={steps.length} />

      <div className="flex justify-between mt-4">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center">
            <div
              className={`
                flex items-center justify-center w-10 h-10 rounded-full mb-2
                ${
                  index <= currentStep ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"
                }
                transition-colors duration-300
              `}
            >
              {index < currentStep ? <Check className="h-5 w-5" /> : getStepIcon(index)}
            </div>
            <span
              className={`
              text-xs font-medium
              ${index <= currentStep ? "text-foreground" : "text-muted-foreground"}
            `}
            >
              {step}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default StepIndicator
