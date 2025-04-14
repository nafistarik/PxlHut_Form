import type { FormData } from "@/lib/schema"
import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react"

export const formApi = createApi({
  reducerPath: "formApi",
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    submitForm: builder.mutation<{ success: boolean; message: string }, FormData>({
      queryFn: async (formData) => {
        try {
          // Simulate API call with a delay
          await new Promise((resolve) => setTimeout(resolve, 1500))
          console.log("Form submitted:", formData)

          return {
            data: {
              success: true,
              message: "Form submitted successfully!",
            },
          }
        } catch (error) {
          console.error("Error submitting form:", error)
          return { error: "Failed to submit form" }
        }
      },
    }),
  }),
})

export const { useSubmitFormMutation } = formApi
