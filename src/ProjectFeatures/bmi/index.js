import {useState } from "react";

import TitleCard from "../../components/Cards/TitleCard";


// const TopSideButtons = () => {

//     const dispatch = useDispatch()

//     const openAddNewLeadModal = () => {
//         dispatch(openModal({title : "Add New Lead", bodyType : MODAL_BODY_TYPES.LEAD_ADD_NEW}))
//     }

//     return(
//         <div className="inline-block float-right">
//             <button className="btn px-6 btn-sm normal-case btn-primary" onClick={() => openAddNewLeadModal()}>Add New</button>
//         </div>
//     )
// }
// TopSideButtons={<TopSideButtons />}

function Bmi() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [unit, setUnit] = useState("metric");

  const calculateBMI = () => {
    if (!height || !weight) return;
    let bmiValue;
    if (unit === "metric") {
      const heightInMeters = parseFloat(height) / 100;
      bmiValue = parseFloat(weight) / (heightInMeters * heightInMeters);
    } else {
      bmiValue = (parseFloat(weight) * 703) / parseFloat(height) ** 2;
    }
    setBmi(parseFloat(bmiValue.toFixed(1)));
  };

  const getBMICategory = (bmi) => {
    if (bmi < 18.5)
      return {
        category: "Underweight",
        color: "text-blue-500",
        percentage: "15%",
      };
    if (bmi < 25)
      return {
        category: "Normal weight",
        color: "text-green-500",
        percentage: "40%",
      };
    if (bmi < 30)
      return {
        category: "Overweight",
        color: "text-yellow-500",
        percentage: "65%",
      };
    return { category: "Obesity", color: "text-red-500", percentage: "90%" };
  };

  const resetCalculator = () => {
    setHeight("");
    setWeight("");
    setBmi(null);
  };

  return (
    <>
      <TitleCard title="Bmi Calculator" topMargin="mt-2">
        {/* Leads List in table format loaded from slice after api call */}
        <div className="overflow-x-auto w-full">
          <div className="h-[100%] flex items-center justify-center p-4 my-20 ">
            <div className="card w-full max-w-md bg-white shadow-lg rounded-lg">
              <div className="bg-primary p-8 rounded-t-lg">
                <h2 className="card-title text-white font-bold">
                  BMI Calculator
                </h2>
                <p className="text-sm text-whiteGraph">
                  Calculate your Body Mass Index
                </p>
              </div>
              <div className="card-body">
                <div role="tablist" className="tabs tabs-boxed ">
                  <a
                    role="tab"
                    className={`tab ${
                      unit === "metric" ? "tab-active !bg-[#7b1e19] " : ""
                    }`}
                    onClick={() => setUnit("metric")}
                  >
                    Metric
                  </a>
                  <a
                    role="tab"
                    className={`tab ${
                      unit === "imperial" ? "tab-active !bg-[#7b1e19] " : ""
                    }`}
                    onClick={() => setUnit("imperial")}
                  >
                    Imperial
                  </a>
                </div>

                <div className="form-control mt-4">
                  <label className="label">
                    <span className="label-text">
                      {unit === "metric" ? "Height (cm)" : "Height (inches)"}
                    </span>
                                  </label>
                                  <input
                                      type="number"
                                      placeholder={unit === "metric" ? "e.g. 175" : "e.g. 69"}
                                      value={height}
                                      onChange={(e) => setHeight(e.target.value)}
                                      className="input input-bordered focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                                  />
                              </div>

                              <div className="form-control mt-2">
                                  <label className="label">
                                      <span className="label-text">
                                          {unit === "metric" ? "Weight (kg)" : "Weight (lbs)"}
                                      </span>
                                  </label>
                                  <input
                                      type="number"
                                      placeholder={unit === "metric" ? "e.g. 70" : "e.g. 154"}
                                      value={weight}
                                      onChange={(e) => setWeight(e.target.value)}
                                      className="input input-bordered focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                                  />
                              </div>

                <div className="flex gap-2 mt-4">
                  <button
                    className="btn bg-outline flex-1 border border-solid"
                    onClick={resetCalculator}
                  >
                    Reset
                  </button>
                  <button
                    type="submit"
                    className="btn bg-primary hover:bg-secondary flex-1 text-white"
                    onClick={calculateBMI}
                  >
                    Calculate
                  </button>
                </div>

                {/* {bmi !== null && (
            <div className="mt-6 bg-base-100 rounded-xl p-4 shadow border">
              <h3 className="text-center font-semibold">Your Result</h3>

              <div className="flex justify-center my-4">
                <div className="radial-progress text-primary" style={{ "--value": bmi }} role="progressbar">
                  {bmi}
                </div>
              </div>

              <p className={`text-center font-medium ${getBMICategory(bmi).color}`}>
                {getBMICategory(bmi).category}
              </p>

              <div className="relative h-3 mt-6 bg-gradient-to-r from-blue-500 via-green-500 via-yellow-500 to-red-500 rounded-full">
                <div
                  className="absolute w-4 h-6 bg-white border border-gray-800 rounded-full -mt-2 transform -translate-x-1/2"
                  style={{ left: getBMICategory(bmi).percentage }}
                ></div>
              </div>

              <div className="flex justify-between text-xs text-gray-600 mt-2 px-1">
                <span>16</span>
                <span>18.5</span>
                <span>25</span>
                <span>30</span>
                <span>40</span>
              </div>

              <div className="alert alert-info mt-4 text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="stroke-current shrink-0 h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>
                  BMI is a screening tool, not a diagnostic of body fatness or health. Consult your healthcare provider.
                </span>
              </div>
            </div>
          )} */}
              </div>
            </div>
          </div>
        </div>
      </TitleCard>
    </>
  );
}

export default Bmi;
