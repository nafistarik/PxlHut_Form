"use client"

import type React from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { personalInfoSchema, type PersonalInfoData } from "@/lib/schema"
import InputField from "../ui/InputField"
import Button from "../ui/Button"
import SlideWrapper from "../animations/SlideWrapper"
import type { StepProps } from "@/lib/types"

const PersonalInfo: React.FC<StepProps> = ({ onNext, formData, updateFormData }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<PersonalInfoData>({
    resolver: zodResolver(personalInfoSchema),
    mode: "onChange",
    defaultValues: {
      fullName: formData.fullName,
      email: formData.email,
      phone: formData.phone,
    },
  })

  const onSubmit = (data: PersonalInfoData) => {
    updateFormData(data)
    onNext()
  }

  return (
    <SlideWrapper>
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-2">Personal Information</h2>
        <p className="text-muted-foreground">Please provide your personal details</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <InputField
          label="Full Name"
          name="fullName"
          placeholder="John Doe"
          register={register("fullName")}
          error={errors.fullName}
        />

        <InputField
          label="Email Address"
          name="email"
          type="email"
          placeholder="john.doe@example.com"
          register={register("email")}
          error={errors.email}
          autoComplete="email"
        />

        <InputField
          label="Phone Number"
          name="phone"
          placeholder="(123) 456-7890"
          register={register("phone")}
          error={errors.phone}
          autoComplete="tel"
        />

        <div className="flex justify-end mt-8">
          <Button type="submit" disabled={!isValid}>
            Continue
          </Button>
        </div>
      </form>
    </SlideWrapper>
  )
}

export default PersonalInfo
