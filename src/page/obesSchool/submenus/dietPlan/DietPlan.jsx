import React from "react";
import { CalendarDays } from "lucide-react";
import PlanBuilder from "./PlanBuilder";
import DailySummery from "./DailySummery";
export default function DietPlan() {
  return (
    <div className="container py-24">
      <div>
        <header className="mb-8">
          <h1 className="text-[32px] font-bold text-[#101010]" style={{ fontFamily: "poppins" }}>Your Diet Plan</h1>

          <div className="mt-2 flex items-center gap-2">
            <CalendarDays className="h-4 w-4 text-gray-500" />
            <span className="text-[14px] text-gray-500" style={{ fontFamily: "poppins" }}>
              Monday, April 13, 2025
            </span>
          </div>
        </header>
      </div>

      <div>
        <div class="grid grid-cols-3 gap-4">
          <div className="col-span-2">
            <PlanBuilder></PlanBuilder>
          </div>
          <div >
            <DailySummery></DailySummery>
          </div>
        </div>
      </div>
    </div>
  );
}
