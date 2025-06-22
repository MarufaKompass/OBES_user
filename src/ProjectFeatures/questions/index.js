import React from "react";
import { useForm } from "react-hook-form";
import { CheckCircle, ChevronLeft, ChevronRight } from "lucide-react";
import TitleCard from "../../components/Cards/TitleCard";


function Questions(){

  const totalSteps = 6;
  const [currentStep, setCurrentStep] = React.useState(1);
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const { register, handleSubmit, watch, setValue, reset } = useForm({
    defaultValues: {
      satisfaction: "",
      features: [],
      rating: 7,
      feedback: "",
      email: "",
      recommend: "",
    },
  });

  const answers = watch();

  const onSubmit = (data) => {
    console.log("Survey submitted:", data);
    setIsSubmitted(true);
  };

  const handleNext = () => {
    if (currentStep < totalSteps) setCurrentStep(currentStep + 1);
  };

  const handlePrevious = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const isCurrentStepComplete = () => {
    switch (currentStep) {
      case 1:
        return answers.satisfaction !== "";
      case 2:
        return answers.features.length > 0;
      case 3:
        return true;
      case 4:
        return answers.feedback.trim() !== "";
      case 5:
        return answers.email.trim() !== "";
      case 6:
        return answers.recommend !== "";
      default:
        return false;
    }
  };

  const progressPercentage = (currentStep / totalSteps) * 100;




return (
  <TitleCard title="Health Review" topMargin="mt-2">
    {isSubmitted ? (
      <div className="max-w-2xl mx-auto p-6">
        <div className="card bg-base-100 shadow-lg text-center">
          <div className="card-body items-center">
            <CheckCircle className="w-16 h-16 text-green-500 mb-2" />
            <h2 className="text-2xl font-bold">Thank You!</h2>
            <p className="text-gray-500">
              Your survey has been submitted successfully. We appreciate your feedback!
            </p>
            <button
              className="btn btn-primary mt-4"
              onClick={() => {
                setIsSubmitted(false);
                reset();
                setCurrentStep(1);
              }}
            >
              Take Survey Again
            </button>
          </div>
        </div>
      </div>
    ) : (
      <div className="max-w-2xl mx-auto p-6 space-y-6">
        <div className="card bg-base-100 shadow">
          <div className="card-body">
            <div className="flex justify-between items-center mb-2">
              <div>
                <h2 className="card-title">Customer Satisfaction Survey</h2>
                <p className="text-sm text-gray-500">
                  Question {currentStep} of {totalSteps}
                </p>
              </div>
              <div className="text-right">
                <div className="text-xl font-bold text-primary">
                  {currentStep}/{totalSteps}
                </div>
                <progress
                  className="progress progress-primary w-full mt-1"
                  value={progressPercentage}
                  max="100"
                />
              </div>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* {renderCurrentQuestion()} */}

          <div className="flex justify-between items-center">
            <button
              type="button"
              className="btn btn-outline flex items-center gap-1"
              onClick={handlePrevious}
              disabled={currentStep === 1}
            >
              <ChevronLeft className="w-4 h-4" />
              Previous
            </button>

            {currentStep === totalSteps ? (
              <button
                type="submit"
                className="btn btn-primary flex items-center gap-1"
                disabled={!isCurrentStepComplete()}
              >
                Submit <CheckCircle className="w-4 h-4" />
              </button>
            ) : (
              <button
                type="button"
                className="btn btn-primary flex items-center gap-1"
                onClick={handleNext}
                disabled={!isCurrentStepComplete()}
              >
                Next <ChevronRight className="w-4 h-4" />
              </button>
            )}
          </div>

          {!isCurrentStepComplete() && (
            <p className="text-center text-sm text-gray-500">
              Please answer the question to continue
            </p>
          )}
        </form>
      </div>
    )}
  </TitleCard>
);
};

export default Questions;