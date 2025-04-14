"use client"

import type React from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { accountSetupSchema, type AccountSetupData } from "@/lib/schema"
import InputField from "../ui/InputField"
import Button from "../ui/Button"
import SlideWrapper from "../animations/SlideWrapper"
import type { StepProps } from "@/lib/types"

const AccountSetup: React.FC<StepProps> = ({ onNext, onPrevious, formData, updateFormData }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<AccountSetupData>({
    resolver: zodResolver(accountSetupSchema),
    mode: "onChange",
    defaultValues: {
      username: formData.username,
      password: formData.password,
      confirmPassword: formData.confirmPassword,
    },
  })

  const onSubmit = (data: AccountSetupData) => {
    updateFormData(data)
    onNext()
  }

  return (
    <SlideWrapper>
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-2">Account Setup</h2>
        <p className="text-muted-foreground">Create your account credentials</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <InputField
          label="Username"
          name="username"
          placeholder="johndoe"
          register={register("username")}
          error={errors.username}
          autoComplete="username"
        />

        <InputField
          label="Password"
          name="password"
          type="password"
          placeholder="••••••••"
          register={register("password")}
          error={errors.password}
          autoComplete="new-password"
        />

        <InputField
          label="Confirm Password"
          name="confirmPassword"
          type="password"
          placeholder="••••••••"
          register={register("confirmPassword")}
          error={errors.confirmPassword}
          autoComplete="new-password"
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

export default AccountSetup
