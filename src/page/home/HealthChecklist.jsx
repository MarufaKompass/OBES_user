// import image1 from "../../../public/images/heath/drinks.jpg";
// import image2 from "../../../public/images/heath/exercise.jpg";
// import image3 from "../../../public/images/heath/time.jpg";
// import image4 from "../../../public/images/heath/meals.jpg";
// import image5 from "../../../public/images/heath/treatment.png";
// import image6 from "../../../public/images/heath/vegetables.jpg";
// import image7 from "../../../public/images/heath/sleep.jpg";


"use client"

import { useState } from "react"
import {
  Coffee, Dumbbell, Smartphone, UtensilsCrossed,
  Heart, Apple, Moon, Sparkles, CheckCircle
} from "lucide-react"

const healthSteps = [
  { id: 1, title: "Limit Sugary Drinks", description: "Reduce intake of sodas and sweetened beverages", icon: Coffee, color: "from-orange-400 to-red-500", bgColor: "bg-orange-50", textColor: "text-orange-700" },
  { id: 2, title: "1+ Hour Physical Exercise", description: "Daily movement keeps your body strong", icon: Dumbbell, color: "from-blue-400 to-cyan-500", bgColor: "bg-blue-50", textColor: "text-blue-700" },
  { id: 3, title: "Limit Screen Time", description: "Take breaks from digital devices", icon: Smartphone, color: "from-purple-400 to-pink-500", bgColor: "bg-purple-50", textColor: "text-purple-700" },
  { id: 4, title: "Balanced Main Meals", description: "Nutritious meals fuel your day", icon: UtensilsCrossed, color: "from-green-400 to-emerald-500", bgColor: "bg-green-50", textColor: "text-green-700" },
  { id: 5, title: "Health Pillars", description: "Focus on mental and physical wellness", icon: Heart, color: "from-rose-400 to-pink-500", bgColor: "bg-rose-50", textColor: "text-rose-700" },
  { id: 6, title: "5+ Portions Fruits & Vegetables", description: "Colorful nutrition for optimal health", icon: Apple, color: "from-lime-400 to-green-500", bgColor: "bg-lime-50", textColor: "text-lime-700" },
  { id: 7, title: "7-9 Hours of Sleep", description: "Quality rest for recovery and growth", icon: Moon, color: "from-indigo-400 to-purple-500", bgColor: "bg-indigo-50", textColor: "text-indigo-700" },
]

export default function HealthChecklist() {
  const [completedSteps, setCompletedSteps] = useState([])
  const [hoveredStep, setHoveredStep] = useState(null)

  const toggleStep = (stepId) => {
    setCompletedSteps((prev) =>
      prev.includes(stepId) ? prev.filter((id) => id !== stepId) : [...prev, stepId]
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 py-24">
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-200/30 to-purple-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-pink-200/30 to-orange-200/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-green-200/20 to-blue-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-6">
            <Sparkles className="w-6 h-6 text-yellow-500" />
            <span className="px-4 py-1 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 text-sm font-medium">
              Health & Wellness
            </span>
            <Sparkles className="w-6 h-6 text-yellow-500" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-slate-800 via-slate-600 to-slate-800 bg-clip-text text-transparent mb-4">
            7 Best
          </h1>
          <p className="text-2xl text-slate-600 mb-6">Practices For a Healthy Life</p>
          <div className="flex justify-center items-center gap-4 text-sm text-slate-500">
            <span>Progress: {completedSteps.length}/7</span>
            <div className="w-32 h-2 bg-slate-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-green-400 to-emerald-500 transition-all duration-500"
                style={{ width: `${(completedSteps.length / 7) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>



        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16 ">
          {healthSteps.map((step) => {
            const Icon = step.icon
            const isCompleted = completedSteps.includes(step.id)
            const isHovered = hoveredStep === step.id

            return (
              <div
                key={step.id}
                className={`cursor-pointer overflow-hidden rounded-xl shadow-md transition-all duration-300 border border-[#DEDEDE] ${
                  isCompleted ? "ring-2 ring-green-400" : "hover:shadow-xl"
                }`}
                onMouseEnter={() => setHoveredStep(step.id)}
                onMouseLeave={() => setHoveredStep(null)}
                onClick={() => toggleStep(step.id)}
              >
                {/* Icon Area */}
                <div className={`relative h-32 flex items-center justify-center bg-gradient-to-br ${step.color}`}>
                  <div className="absolute top-3 left-3 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-white text-xl font-bold">
                    {step.id}
                  </div>

                  {isCompleted && (
                    <div className="absolute top-3 right-3 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center animate-bounce">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                  )}

                  <Icon className={`w-10 h-10 text-white transition-all ${isHovered ? "scale-110 rotate-6" : ""}`} />
                </div>

                {/* Text Content */}
                <div className={`p-4 ${step.bgColor}`}>
                  <h3 className={`font-bold text-lg mb-1 ${step.textColor}`}>{step.title}</h3>
                  <p className="text-slate-600 text-sm">{step.description}</p>
                  <div className="mt-3 flex items-center gap-2">
                    <div
                      className={`w-2 h-2 rounded-full ${isCompleted ? "bg-green-500" : "bg-slate-300"}`}
                    ></div>
                    <span className="text-xs text-slate-500">
                      {isCompleted ? "Completed" : "Click to mark complete"}
                    </span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Footer */}
        <div className="text-center">
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-white/80 backdrop-blur-sm rounded-full shadow-lg">
            <Heart className="w-6 h-6 text-red-500" />
            <span className="text-slate-700 font-medium">
              {completedSteps.length === 7
                ? "🎉 Amazing! You've completed all steps!"
                : `Keep going! ${7 - completedSteps.length} steps remaining`}
            </span>
            <Heart className="w-6 h-6 text-red-500" />
          </div>
        </div>
      </div>
    </div>
  )
}
