// import { Link } from 'react-router'
import {Heart,ArrowRight} from "lucide-react"

import Slider from "./Slider";
export default function HeroSection() {
  return (
    <section className="w-full py-12 bg-[#fbfbfb]">
    <div className="container mx-auto px-4 md:px-6">
      <div className="grid gap-6 grid-cols-2">

        <div className="flex flex-col justify-center space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-primary-color" style={{ backgroundColor: 'rgba(123, 30, 25, 0.3)' }}>
              <Heart className="h-4 w-4" />
              Your Health Journey Starts Here
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              Transform Your Life with
              <span className="text-primary-color font-[poppins]"> Expert Obesity Care</span>
            </h1>
            <p className="text-lg text-gray-600 md:text-xl font-[poppins] mt-4" >
              Comprehensive, compassionate care for sustainable weight management. Our evidence-based approach helps you
              achieve lasting health improvements.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row mt-4">
              <button size="lg" className="bg-primary-color hover:bg-primary-color text-white text-[14px] flex items-center py-2 px-4 font-[poppins] rounded-[4px]">
                Get Started Today
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
        </div>

      <div className="flex justify-center">
          {/* <img
          src={heroSection}
          alt="Healthcare professionals"
          className=" "
        /> */}
         <Slider />
      </div>
      </div>
    </div>
  </section>
  )
}
