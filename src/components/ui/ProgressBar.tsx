import type React from "react"

interface ProgressBarProps {
  currentStep: number
  totalSteps: number
}

const ProgressBar: React.FC<ProgressBarProps> = ({ currentStep, totalSteps }) => {
  const progress = (currentStep / (totalSteps - 1)) * 100

  return (
    <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
      <div className="h-full bg-primary transition-all duration-300 ease-in-out" style={{ width: `${progress}%` }} />
    </div>
  )
}

export default ProgressBar
