"use client"

import type React from "react"
import { useDispatch, useSelector } from "react-redux"
import { AnimatePresence } from "framer-motion"
import { ThemeToggle } from "../ui/ThemeToggle"
import StepIndicator from "./StepIndicator"
import PersonalInfo from "./PersonalInfo"
import AddressDetails from "./AddressDetails"
import AccountSetup from "./AccountSetup"
import Summary from "./Summary"
import type { RootState } from "@/redux/store"
import { nextStep, prevStep, updateFormData } from "@/redux/slices/formSlice"
import type { FormData } from "@/lib/schema"
import FadeWrapper from "../animations/FadeWrapper"

const FormContainer: React.FC = () => {
  const dispatch = useDispatch()
  const { activeStep, formData } = useSelector((state: RootState) => state.form)

  const steps = ["Personal", "Address", "Account", "Review"]

  const handleNext = () => {
    dispatch(nextStep())
  }

  const handlePrevious = () => {
    dispatch(prevStep())
  }

  const handleUpdateFormData = (data: Partial<FormData>) => {
    dispatch(updateFormData(data))
  }

  const renderStep = () => {
    switch (activeStep) {
      case 0:
        return (
          <PersonalInfo
            onNext={handleNext}
            onPrevious={handlePrevious}
            formData={formData}
            updateFormData={handleUpdateFormData}
          />
        )
      case 1:
        return (
          <AddressDetails
            onNext={handleNext}
            onPrevious={handlePrevious}
            formData={formData}
            updateFormData={handleUpdateFormData}
          />
        )
      case 2:
        return (
          <AccountSetup
            onNext={handleNext}
            onPrevious={handlePrevious}
            formData={formData}
            updateFormData={handleUpdateFormData}
          />
        )
      case 3:
        return (
          <Summary
            onNext={handleNext}
            onPrevious={handlePrevious}
            formData={formData}
            updateFormData={handleUpdateFormData}
          />
        )
      default:
        return null
    }
  }

  return (
    <FadeWrapper>
      <div className="glassmorphism rounded-xl shadow-lg overflow-hidden">
        <div className="flex justify-between items-center p-6 pb-0">
          <h1 className="text-xl font-bold">PxlHut Form</h1>
          <ThemeToggle />
        </div>

        <div className="p-6">
          <StepIndicator currentStep={activeStep} steps={steps} />

          <div className="min-h-[400px]">
            <AnimatePresence mode="wait">{renderStep()}</AnimatePresence>
          </div>
        </div>
      </div>
    </FadeWrapper>
  )
}

export default FormContainer
