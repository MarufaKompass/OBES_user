import React, { useState } from 'react'
import MealSection from "./MealSection";

export default function PlanBuilder() {
  const [tab, setTab] = useState("today");
  return (
  <div>
 <div className="grid gap-6 ">
      <div className="md:col-span-2 w-full">
        {/* Tabs */}
        <div>
          <div className="grid grid-cols-3 w-full rounded-md overflow-hidden border border-[#C0C0C0]">
            {["today", "week", "custom"].map((key) => (
              <button
                key={key}
                className={`text-sm font-medium py-2 text-center transition ${
                  tab === key
                    ? "bg-[#FE9A00] text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
                onClick={() => setTab(key)}
                style={{ fontFamily: "poppins" }}
              >
                {key === "today"
                  ? "Today"
                  : key === "week"
                  ? "This Week"
                  : "Custom"}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        {tab === "today" && (
          <div className="mt-6 space-y-6">
            <MealSection
              title="Breakfast"
              time="7:00 - 8:00 AM"
              calories={450}
              items={[
                {
                  name: "Greek Yogurt with Berries",
                  calories: 220,
                  protein: 18,
                  carbs: 24,
                  fat: 8,
                },
                {
                  name: "Whole Grain Toast",
                  calories: 120,
                  protein: 4,
                  carbs: 22,
                  fat: 2,
                },
                {
                  name: "Black Coffee",
                  calories: 5,
                  protein: 0,
                  carbs: 0,
                  fat: 0,
                },
                {
                  name: "Almonds (10)",
                  calories: 70,
                  protein: 3,
                  carbs: 2,
                  fat: 6,
                },
              ]}
            />

            <MealSection
              title="Lunch"
              time="12:00 - 1:00 PM"
              calories={650}
              items={[
                {
                  name: "Grilled Chicken Salad",
                  calories: 350,
                  protein: 35,
                  carbs: 15,
                  fat: 18,
                },
                {
                  name: "Quinoa (1/2 cup)",
                  calories: 120,
                  protein: 4,
                  carbs: 21,
                  fat: 2,
                },
                {
                  name: "Olive Oil Dressing (1 tbsp)",
                  calories: 120,
                  protein: 0,
                  carbs: 0,
                  fat: 14,
                },
                {
                  name: "Apple",
                  calories: 80,
                  protein: 0,
                  carbs: 21,
                  fat: 0,
                },
              ]}
            />

            <MealSection
              title="Snack"
              time="3:30 - 4:00 PM"
              calories={200}
              items={[
                {
                  name: "Protein Shake",
                  calories: 150,
                  protein: 25,
                  carbs: 5,
                  fat: 2,
                },
                {
                  name: "Banana",
                  calories: 105,
                  protein: 1,
                  carbs: 27,
                  fat: 0,
                },
              ]}
            />

            <MealSection
              title="Dinner"
              time="7:00 - 8:00 PM"
              calories={550}
              items={[
                {
                  name: "Baked Salmon (5 oz)",
                  calories: 300,
                  protein: 30,
                  carbs: 0,
                  fat: 15,
                },
                {
                  name: "Steamed Broccoli",
                  calories: 55,
                  protein: 4,
                  carbs: 11,
                  fat: 0,
                },
                {
                  name: "Brown Rice (1/2 cup)",
                  calories: 120,
                  protein: 3,
                  carbs: 25,
                  fat: 1,
                },
                {
                  name: "Mixed Berries (1/2 cup)",
                  calories: 40,
                  protein: 0,
                  carbs: 10,
                  fat: 0,
                },
              ]}
            />
          </div>
        )}

        {tab === "week" && (
          <div className="flex h-40 items-center justify-center mt-6 rounded-md border border-dashed">
            <p className="text-sm text-gray-500">Weekly plan view will appear here</p>
          </div>
        )}

        {tab === "custom" && (
          <div className="flex h-40 items-center justify-center mt-6 rounded-md border border-dashed">
            <p className="text-sm text-gray-500">Custom plan builder will appear here</p>
          </div>
        )}
      </div>
    </div>
  </div>
  )
}
