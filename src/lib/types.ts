import type { FormData } from "./schema"

export type FormState = {
  activeStep: number
  formData: FormData
  isSubmitting: boolean
  isSubmitted: boolean
}

export type FormAction =
  | { type: "NEXT_STEP" }
  | { type: "PREV_STEP" }
  | { type: "SET_STEP"; payload: number }
  | { type: "UPDATE_FORM"; payload: Partial<FormData> }
  | { type: "SUBMIT_START" }
  | { type: "SUBMIT_SUCCESS" }
  | { type: "SUBMIT_ERROR" }
  | { type: "RESET_FORM" }

export interface StepProps {
  onNext: () => void
  onPrevious: () => void
  formData: FormData
  updateFormData: (data: Partial<FormData>) => void
}
