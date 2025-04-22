import React from "react";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import {motion,AnimatePresence } from "framer-motion";
export default function ObesQuestion() {
  const [currentStep, setCurrentStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      favoriteColor: "",
      preferredActivities: [],
      satisfactionLevel: 50,
    },
  });

  const favoriteColor = watch("favoriteColor");
  const preferredActivities = watch("preferredActivities");

  const isStepComplete = () => {
    switch (currentStep) {
      case 0:
        return !!favoriteColor;
      case 1:
        return preferredActivities.length > 0;
      default:
        return true;
    }
  };

  const nextStep = () => {
    if (isStepComplete() && currentStep < 2) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const onSubmit = (data) => {
    console.log("Form submitted:", data);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="max-w-md mx-auto  h-100 p-6 shadow-lg  my-12">
        <h2 className="text-2xl font-bold mb-2">Thank you!</h2>
        <p className="text-gray-600">Your responses have been recorded.</p>
        <div className="mt-4 text-center">
          <p>We appreciate your feedback!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto  p-6 shadow-lg my-12">
      <h2 className="text-2xl font-bold mb-2">Survey Form</h2>
      <p className="text-gray-600 mb-4">Question {currentStep + 1} of 3</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="min-h-[300px] mb-4">
          <AnimatePresence mode="wait">
            {currentStep === 0 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="space-y-3"
              >
                <h3 className="text-lg font-semibold">
                  What is your favorite color?
                </h3>
                <Controller
                  name="favoriteColor"
                  control={control}
                  rules={{ required: "Please select a color" }}
                  render={({ field }) => (
                    <div className="space-y-2">
                      {["red", "blue", "green", "yellow", "purple"].map(
                        (color) => (
                          <label
                            key={color}
                            className="flex items-center space-x-2"
                          >
                            <input
                              type="radio"
                              value={color}
                              checked={field.value === color}
                              onChange={(e) => {
                                field.onChange(e.target.value);
                                setTimeout(() => nextStep(), 500);
                              }}
                            />
                            <span className="capitalize">{color}</span>
                          </label>
                        )
                      )}
                    </div>
                  )}
                />
                {errors.favoriteColor && (
                  <p className="text-sm text-red-500">
                    {errors.favoriteColor.message}
                  </p>
                )}
              </motion.div>
            )}

            {currentStep === 1 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="space-y-3"
              >
                <h3 className="text-lg font-semibold">
                  What activities do you enjoy? (Select all that apply)
                </h3>
                <div className="space-y-2">
                  {["reading", "sports", "cooking", "gaming"].map(
                    (activity) => (
                      <Controller
                        key={activity}
                        name="preferredActivities"
                        control={control}
                        render={({ field }) => {
                          const isChecked = field.value?.includes(activity);
                          return (
                            <label className="flex items-center space-x-2">
                              <input
                                type="checkbox"
                                checked={isChecked}
                                onChange={(e) => {
                                  const currentValues = field.value || [];
                                  const newValues = e.target.checked
                                    ? [...currentValues, activity]
                                    : currentValues.filter(
                                        (val) => val !== activity
                                      );
                                  field.onChange(newValues);
                                }}
                              />
                              <span className="capitalize">{activity}</span>
                            </label>
                          );
                        }}
                      />
                    )
                  )}
                </div>
              </motion.div>
            )}

            {currentStep === 2 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="space-y-3"
              >
                <h3 className="text-lg font-semibold">
                  How satisfied are you with our service?
                </h3>
                <Controller
                  name="satisfactionLevel"
                  control={control}
                  render={({ field }) => (
                    <div className="space-y-2">
                      <input
                        type="range"
                        min={0}
                        max={100}
                        step={1}
                        value={field.value}
                        onChange={(e) => field.onChange(Number(e.target.value))}
                        className="w-full"
                      />
                      <div className="flex justify-between text-xs text-gray-500">
                        <span>Not satisfied</span>
                        <span>Neutral</span>
                        <span>Very satisfied</span>
                      </div>
                      <p className="text-center font-medium">
                        Your rating: {field.value}%
                      </p>
                    </div>
                  )}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="flex justify-between">
          {currentStep > 0 ? (
            <button
              type="button"
              onClick={prevStep}
              className="px-4 py-2 border rounded text-gray-700 hover:bg-gray-100"
            >
              Previous
            </button>
          ) : (
            <div />
          )}

          {currentStep < 2 ? (
            <button
              type="button"
              onClick={nextStep}
              disabled={!isStepComplete()}
              className={`px-4 py-1 w-20 rounded-none text-white ${
                isStepComplete()
                  ? "bg-[#FE9A00] hover:bg-[#FE9A00]"
                  : "bg-gray-400 cursor-not-allowed"
              }`}
            >
              Next
            </button>
          ) : (
            <button
              type="submit"
              className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
            >
              Submit
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
