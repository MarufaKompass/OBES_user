import React from 'react'
// import { Link } from 'react-router'
// import {
//   ArrowRight,
// } from "lucide-react"

import heroSection from "../../../public/images/home/heroSection.png"
export default function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-[#fbfbfb]">
    <div className="container mx-auto px-4 md:px-6">
      <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
        <div className="flex flex-col justify-center space-y-4">
          <div className="space-y-2">
            <h1 className="text-[30px] font-bold tracking-wide md:text-[40px] xl:text-[44px] text-[#7b1e19] leading-[55px] uppercase" >
              Your Health Is Our <br></br> Top Priority
            </h1>
            <p className="max-w-[600px] text-secondary-color md:text-[16px] font-normal mt-6" >
              Providing exceptional healthcare services with compassion and expertise. Schedule your appointment today.
            </p>
          </div>
          {/* <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Link
              to="/appointment"
              className="inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-3 text-sm font-medium text-white shadow hover:bg-blue-700 transition-colors"
            >
              Book Appointment
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center justify-center rounded-md border border-gray-300 px-6 py-3 text-sm font-medium text-gray-800 hover:bg-gray-100 transition-colors"
            >
              Learn More
            </Link>
          </div> */}
        </div>
        <img
          src={heroSection}
          alt="Healthcare professionals"
          width={550}
          height={550}
          className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
        />
      </div>
    </div>
  </section>
  )
}
