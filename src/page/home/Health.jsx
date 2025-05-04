import React from 'react'
import {
  CheckCircle,
} from "lucide-react";
export default function Health() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
    <div className="container px-4 md:px-6">
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
        {/* Image */}
        <img
          src="/placeholder.svg?height=400&width=600"
          width={600}
          height={400}
          alt="Modern medical facility"
          className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
        />
        <div className="flex flex-col justify-center space-y-4">
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary" style={{fontFamily:'poppins'}}>About Us</div>
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl" style={{fontFamily:'poppins'}}>Excellence in Healthcare Since 1995</h2>
          <p className="text-muted-foreground md:text-lg" style={{fontFamily:'poppins'}}>
            MediCare has been providing exceptional healthcare services for over 25 years. Our state-of-the-art
            facilities and dedicated team of healthcare professionals are committed to delivering the highest
            quality of care to our patients.
          </p>
          <ul className="grid gap-2">
            {[
              'State-of-the-art medical facilities',
              'Team of experienced healthcare professionals',
              'Patient-centered approach to care',
              'Commitment to medical excellence',
              'Affordable healthcare solutions',
            ].map((item, index) => (
              <li key={index} className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <button className="w-fit px-6 py-3 mt-4 text-white bg-[#7b1e19] rounded-lg shadow-md hover:bg-primary-dark transition-colors" style={{fontFamily:'poppins'}}>
            Learn More About Us
          </button>
        </div>
      </div>
    </div>
  </section>
  )
}
