"use client";

import type React from "react";
import Button from "../ui/Button";
import SlideWrapper from "../animations/SlideWrapper";
import type { StepProps } from "@/lib/types";
import { useSubmitFormMutation } from "@/redux/apis/formApi";
import { toast } from "sonner";
import { useDispatch } from "react-redux";
import {
  resetForm,
  submitError,
  submitStart,
  submitSuccess,
} from "@/redux/slices/formSlice";
import FadeWrapper from "../animations/FadeWrapper";
import AnimatedSVG from "../ui/AnimatedSVG";

const Summary: React.FC<StepProps> = ({ onPrevious, formData }) => {
  const dispatch = useDispatch();
  const [submitForm, { isLoading, isSuccess }] = useSubmitFormMutation();

  const handleSubmit = async () => {
    try {
      dispatch(submitStart());
      await submitForm(formData).unwrap();
      dispatch(submitSuccess());
      toast.success("Form submitted successfully!");
    } catch (error) {
      dispatch(submitError());
      toast.error("Failed to submit form. Please try again.");
      console.error("Error submitting form:", error);
    }
  };

  const handleReset = () => {
    dispatch(resetForm());
    toast.info("Form has been reset");
  };

  if (isSuccess) {
    return (
      <FadeWrapper>
        <div className="text-center py-8">
          <div className="mx-auto w-16 h-16 p-2 bg-[#3b82f613] rounded-full flex items-center justify-center mb-6">
            <AnimatedSVG />
          </div>
          <h2 className="text-2xl font-bold mb-2">Submission Successful!</h2>
          <p className="text-muted-foreground mb-8">
            Thank you for completing the form. Your information has been
            submitted successfully.
          </p>
          <Button onClick={handleReset}>Start Over</Button>
        </div>
      </FadeWrapper>
    );
  }

  return (
    <SlideWrapper>
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-2">Review Your Information</h2>
        <p className="text-muted-foreground">
          Please review your information before submitting
        </p>
      </div>

      <div className="space-y-6">
        <div className="bg-secondary/50 p-4 rounded-lg">
          <h3 className="font-medium mb-2">Personal Information</h3>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div className="text-muted-foreground">Full Name:</div>
            <div>{formData.fullName}</div>
            <div className="text-muted-foreground">Email:</div>
            <div>{formData.email}</div>
            <div className="text-muted-foreground">Phone:</div>
            <div>{formData.phone}</div>
          </div>
        </div>

        <div className="bg-secondary/50 p-4 rounded-lg">
          <h3 className="font-medium mb-2">Address Details</h3>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div className="text-muted-foreground">Street:</div>
            <div>{formData.street}</div>
            <div className="text-muted-foreground">City:</div>
            <div>{formData.city}</div>
            <div className="text-muted-foreground">Zip Code:</div>
            <div>{formData.zip}</div>
          </div>
        </div>

        <div className="bg-secondary/50 p-4 rounded-lg">
          <h3 className="font-medium mb-2">Account Information</h3>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div className="text-muted-foreground">Username:</div>
            <div>{formData.username}</div>
            <div className="text-muted-foreground">Password:</div>
            <div>••••••••</div>
          </div>
        </div>
      </div>

      <div className="flex justify-between mt-8">
        <Button type="button" variant="outline" onClick={onPrevious}>
          Back
        </Button>
        <Button onClick={handleSubmit} isLoading={isLoading}>
          Submit
        </Button>
      </div>
    </SlideWrapper>
  );
};

export default Summary;
