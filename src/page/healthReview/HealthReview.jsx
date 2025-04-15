import React from "react";
import { useState } from "react";
import HealthMetrics from "./HealthMetrics";
import ReviewForm from "./ReviewForm";
import HealthSummary from "./HealthSummary";
export default function HealthReview() {
  const [rating, setRating] = useState("3");
  const [submitted, setSubmitted] = useState(false);
  const [currentTab, setCurrentTab] = useState("metrics");

  return (
    <div>
      <div className="min-h-screen bg-gradient-to-b from-green-50 to-blue-50 p-4 md:p-8">
        <div className="mx-auto max-w-4xl">
          <header className="mb-8 text-center">
            <h1 className="text-3xl font-bold text-green-800 md:text-4xl" style={{fontFamily:'poppins'}}>
              Health Review Portal
            </h1>
            <p className="mt-2 text-gray-600" style={{fontFamily:'poppins'}}>
              Track, review, and improve your health journey
            </p>
          </header>

          {/* Tabs */}
          <div className="w-full">
            <div className="grid grid-cols-3 mb-4">
              {["metrics", "review", "summary"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setCurrentTab(tab)}
                  className={`py-2 px-4 font-medium border-b-2 ${
                    currentTab === tab
                      ? "text-green-800 border-green-600"
                      : "text-gray-500 border-transparent hover:border-green-300"
                  }`}
                >
                  {tab === "metrics"
                    ? "Health Metrics"
                    : tab === "review"
                    ? "Review Form"
                    : "Summary"}
                </button>
              ))}
            </div>

            {/* Health Metrics */}

            {currentTab === "metrics" && (
              <div className="bg-white rounded-lg shadow p-6 mb-6">
                <HealthMetrics
                  setRating={setRating}
                  setSubmitted={setSubmitted}
                  rating={rating}
                ></HealthMetrics>
              </div>
            )}

            {/* Review Form */}

            {currentTab === "review" && (
              <div className="bg-white rounded-lg shadow p-6 mb-6">
                <ReviewForm setRating={setRating} rating={rating}></ReviewForm>
              </div>
            )}

            {/* Summary */}
            {currentTab === "summary" && (
              <div className="bg-white rounded-lg shadow p-6">
                <HealthSummary
                  submitted={submitted}
                  setSubmitted={setSubmitted}
                  rating={rating}
                ></HealthSummary>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
