import React from "react";

export default function Impact() {
    const data = [
        { value: "5,000+", label: "Clients Served" },
        { value: "92%", label: "Success Rate" },
        { value: "15+", label: "Certified Specialists" },
        { value: "10", label: "Years of Experience" },
      ]
  return (
    <div>
      <section className="w-full py-12 md:py-20 lg:py-24 bg-[#ec9f2b] text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Our Impact
              </h2>
              <p className="max-w-[900px] text-green-50 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We're proud of the difference we've made in our clients' lives.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
            {data.map((stat, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center space-y-2 text-center"
              >
                <div className="text-4xl font-bold">{stat.value}</div>
                <div className="text-green-50">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
