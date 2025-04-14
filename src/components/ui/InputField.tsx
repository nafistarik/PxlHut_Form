/* eslint-disable */

import type React from "react"
import type { FieldError } from "react-hook-form"

interface InputFieldProps {
  label: string
  name: string
  type?: string
  placeholder?: string
  register: any
  error?: FieldError
  autoComplete?: string
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  name,
  type = "text",
  placeholder,
  register,
  error,
  autoComplete,
}) => {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <input
        id={name}
        type={type}
        placeholder={placeholder}
        className={`form-input ${error ? "border-destructive" : ""}`}
        {...register}
        autoComplete={autoComplete}
      />
      {error && <p className="form-error">{error.message}</p>}
    </div>
  )
}

export default InputField
