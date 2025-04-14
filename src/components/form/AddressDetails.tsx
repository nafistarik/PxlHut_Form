"use client"

import type React from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { addressDetailsSchema, type AddressDetailsData } from "@/lib/schema"
import InputField from "../ui/InputField"
import Button from "../ui/Button"
import SlideWrapper from "../animations/SlideWrapper"
import type { StepProps } from "@/lib/types"

const AddressDetails: React.FC<StepProps> = ({ onNext, onPrevious, formData, updateFormData }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<AddressDetailsData>({
    resolver: zodResolver(addressDetailsSchema),
    mode: "onChange",
    defaultValues: {
      street: formData.street,
      city: formData.city,
      zip: formData.zip,
    },
  })

  const onSubmit = (data: AddressDetailsData) => {
    updateFormData(data)
    onNext()
  }

  return (
    <SlideWrapper>
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-2">Address Details</h2>
        <p className="text-muted-foreground">Please provide your address information</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <InputField
          label="Street Address"
          name="street"
          placeholder="123 Main St"
          register={register("street")}
          error={errors.street}
          autoComplete="street-address"
        />

        <InputField
          label="City"
          name="city"
          placeholder="New York"
          register={register("city")}
          error={errors.city}
          autoComplete="address-level2"
        />

        <InputField
          label="Zip Code"
          name="zip"
          placeholder="10001"
          register={register("zip")}
          error={errors.zip}
          autoComplete="postal-code"
        />

        <div className="flex justify-between mt-8">
          <Button type="button" variant="outline" onClick={onPrevious}>
            Back
          </Button>
          <Button type="submit" disabled={!isValid}>
            Continue
          </Button>
        </div>
      </form>
    </SlideWrapper>
  )
}

export default AddressDetails
