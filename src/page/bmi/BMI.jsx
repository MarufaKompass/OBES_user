import React, { useState } from 'react'

export default function BMI() {
  const [height, setHeight] = useState("")
  const [weight, setWeight] = useState("")
  const [bmi, setBmi] = useState(null)
  const [unit, setUnit] = useState("metric")

  const calculateBMI = () => {
    if (!height || !weight) return
    let bmiValue
    if (unit === "metric") {
      const heightInMeters = parseFloat(height) / 100
      bmiValue = parseFloat(weight) / (heightInMeters * heightInMeters)
    } else {
      bmiValue = (parseFloat(weight) * 703) / (parseFloat(height) ** 2)
    }
    setBmi(parseFloat(bmiValue.toFixed(1)))
  }

  const getBMICategory = (bmi) => {
    if (bmi < 18.5) return { category: "Underweight", color: "text-blue-500", percentage: "15%" }
    if (bmi < 25) return { category: "Normal weight", color: "text-green-500", percentage: "40%" }
    if (bmi < 30) return { category: "Overweight", color: "text-yellow-500", percentage: "65%" }
    return { category: "Obesity", color: "text-red-500", percentage: "90%" }
  }

  const resetCalculator = () => {
    setHeight("")
    setWeight("")
    setBmi(null)
  }

  return (
    <div>
       <div className="min-h-screen  bg-[rgba(123,30,25,0.1)] p-4 flex items-center justify-center">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="bg-[#7b1e19] p-6 text-white">
          <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
            <h1 className="text-xl font-bold">BMI Calculator</h1>
          </div>
          <p className="text-green-100 mt-1">Calculate your Body Mass Index</p>
        </div>

        <div className="p-6">
          <div className="flex mb-6 bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setUnit("metric")}
              className={`flex-1 py-2 text-sm font-medium rounded-md ${
                unit === "metric" ? "bg-white shadow" : "text-gray-500"
              }`}
            >
              Metric
            </button>
            <button
              onClick={() => setUnit("imperial")}
              className={`flex-1 py-2 text-sm font-medium rounded-md ${
                unit === "imperial" ? "bg-white shadow" : "text-gray-500"
              }`}
            >
              Imperial
            </button>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {unit === "metric" ? "Height (cm)" : "Height (inches)"}
              </label>
              <input
                type="number"
                placeholder={unit === "metric" ? "e.g. 175" : "e.g. 69"}
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#7b1e19] focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {unit === "metric" ? "Weight (kg)" : "Weight (lbs)"}
              </label>
              <input
                type="number"
                placeholder={unit === "metric" ? "e.g. 70" : "e.g. 154"}
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#7b1e19] focus:outline-none"
              />
            </div>
          </div>

          <div className="flex gap-3 mt-6">
            <button
              onClick={resetCalculator}
              className="flex-1 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50"
            >
              Reset
            </button>
            <button
              onClick={calculateBMI}
              className="flex-1 py-2 bg-[#7b1e19] text-white font-medium rounded-md hover:bg-[#7b1e19]"
            >
              Calculate
            </button>
          </div>
        </div>

        {bmi !== null && (
          <div className="bg-gray-50 p-6 border-t border-gray-100">
            <h2 className="text-lg font-semibold text-center mb-4">Your Result</h2>
            <div className="flex justify-center mb-4">
              <div className="w-32 h-32 rounded-full bg-gray-100 border-4 border-green-500 flex items-center justify-center">
                <div className="text-center">
                  <span className="block text-3xl font-bold">{bmi}</span>
                  <span className="text-sm text-gray-500">BMI</span>
                </div>
              </div>
            </div>
            <div className="text-center mb-4">
              <span className={`font-medium text-lg ${getBMICategory(bmi).color}`}>
                {getBMICategory(bmi).category}
              </span>
            </div>

            <div className="relative h-6 bg-gradient-to-r from-blue-500 via-green-500 via-yellow-500 to-red-500 rounded-full mt-4">
              <div
                className="absolute w-4 h-8 bg-white border-2 border-gray-800 rounded-full -mt-1 transform -translate-x-1/2"
                style={{ left: getBMICategory(bmi).percentage }}
              ></div>
              <div className="flex justify-between text-xs text-gray-600 mt-2 px-1">
                <span>16</span>
                <span>18.5</span>
                <span>25</span>
                <span>30</span>
                <span>40</span>
              </div>
            </div>

            <div className="mt-6 text-sm text-gray-600 bg-white p-3 rounded-lg border border-gray-200 flex gap-2 items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p>
                BMI is a screening tool, not a diagnostic of body fatness or health. Consult with healthcare providers for proper evaluation.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
    </div>
  )
}