import { z } from "zod"

export const personalInfoSchema = z.object({
  fullName: z.string().min(1, { message: "Full name is required" }),
  email: z.string().min(1, { message: "Email is required" }).email({ message: "Invalid email format" }),
  phone: z.string().min(10, { message: "Phone number must be at least 10 digits" }),
})

export const addressDetailsSchema = z.object({
  street: z.string().min(1, { message: "Street address is required" }),
  city: z.string().min(1, { message: "City is required" }),
  zip: z
    .string()
    .min(5, { message: "Zip must be at least five digits" })
    .regex(/^\d+$/, { message: "Zip code must contain only numbers" }),
})

export const accountSetupSchema = z
  .object({
    username: z.string().min(4, { message: "Username must be at least 4 characters" }),
    password: z.string().min(6, { message: "Password must be at least 6 characters" }),
    confirmPassword: z.string().min(1, { message: "Please confirm password" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  })

export const formSchema = z.object({
  ...personalInfoSchema.shape,
  ...addressDetailsSchema.shape,
  ...accountSetupSchema.innerType().shape,
})

export type FormData = z.infer<typeof formSchema>
export type PersonalInfoData = z.infer<typeof personalInfoSchema>
export type AddressDetailsData = z.infer<typeof addressDetailsSchema>
export type AccountSetupData = z.infer<typeof accountSetupSchema>
