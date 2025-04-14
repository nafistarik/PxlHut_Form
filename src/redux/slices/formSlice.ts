import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import type { FormState } from "@/lib/types"
import type { FormData } from "@/lib/schema"

const initialState: FormState = {
  activeStep: 0,
  formData: {
    fullName: "",
    email: "",
    phone: "",
    street: "",
    city: "",
    zip: "",
    username: "",
    password: "",
    confirmPassword: "",
  },
  isSubmitting: false,
  isSubmitted: false,
}

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    nextStep: (state) => {
      if (state.activeStep < 3) {
        state.activeStep += 1
      }
    },
    prevStep: (state) => {
      if (state.activeStep > 0) {
        state.activeStep -= 1
      }
    },
    setStep: (state, action: PayloadAction<number>) => {
      if (action.payload >= 0 && action.payload <= 3) {
        state.activeStep = action.payload
      }
    },
    updateFormData: (state, action: PayloadAction<Partial<FormData>>) => {
      state.formData = { ...state.formData, ...action.payload }
    },
    submitStart: (state) => {
      state.isSubmitting = true
    },
    submitSuccess: (state) => {
      state.isSubmitting = false
      state.isSubmitted = true
    },
    submitError: (state) => {
      state.isSubmitting = false
    },
    resetForm: () => initialState,
  },
})

export const { nextStep, prevStep, setStep, updateFormData, submitStart, submitSuccess, submitError, resetForm } =
  formSlice.actions

export default formSlice.reducer
