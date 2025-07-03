"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Mail, Phone, MapPin } from "lucide-react"
import doctors1 from "../../../public/images/home/doctors1.jpg";
import doctors2 from "../../../public/images/home/doctors2.jpg";
import doctors3 from "../../../public/images/home/doctors3.jpg";
import doctors4 from "../../../public/images/home/doctors4.jpg";
import doctors5 from "../../../public/images/home/doctors5.jpg";
import doctors6 from "../../../public/images/home/doctors6.jpg";
import doctors7 from "../../../public/images/home/doctors7.jpg";
import doctors8 from "../../../public/images/home/doctors8.jpg";
const employees = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "Cardiologist",
    department: "Heart & Vascular",
    email: "sarah.j@company.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    image: doctors3,
  },
  {
    id: 2,
    name: "Michael Chen",
    position: "Electrophysiologist",
    department: "Heart Rhythm Disorders",
    email: "michael.c@company.com",
    phone: "+1 (555) 234-5678",
    location: "New York, NY",
    image:doctors1,
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    position: "Neurologist",
    department: "Brain & Nervous System",
    email: "emily.r@company.com",
    phone: "+1 (555) 345-6789",
    location: "Austin, TX",
    image: doctors6,
  },
  {
    id: 4,
    name: "David Kim",
    position: "Neurosurgeon ",
    department: "Brain & Spine Surgery",
    email: "david.k@company.com",
    phone: "+1 (555) 456-7890",
    location: "Seattle, WA",
    image: doctors2,
  },
  {
    id: 5,
    name: "Lisa Thompson",
    position: "Pulmonologist",
    department: "Respiratory System",
    email: "lisa.t@company.com",
    phone: "+1 (555) 567-8901",
    location: "Los Angeles, CA",
    image: doctors5,
  },
  {
    id: 6,
    name: "James Wilson",
    position: "Sleep Medicine Specialist",
    department: " Sleep Disorders",
    email: "james.w@company.com",
    phone: "+1 (555) 678-9012",
    location: "Chicago, IL",
    image: doctors4,
  },
  {
    id: 7,
    name: "Anna Martinez",
    position: "Oncologist ",
    department: "Cancer Treatment",
    email: "anna.m@company.com",
    phone: "+1 (555) 789-0123",
    location: "Miami, FL",
    image: doctors7,
  },
  {
    id: 8,
    name: "Robert Taylor",
    position: "Neonatologist",
    department: "Newborn Intensive Care (NICU)",
    email: "robert.t@company.com",
    phone: "+1 (555) 890-1234",
    location: "Boston, MA",
    image: doctors8,
  },
]

export default function Doctors() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const cardsPerView = 4
  const maxIndex = Math.max(0, employees.length - cardsPerView)

  const nextSlide = () => setCurrentIndex((prev) => Math.min(prev + 1, maxIndex))
  const prevSlide = () => setCurrentIndex((prev) => Math.max(prev - 1, 0))

  const visibleEmployees = employees.slice(currentIndex, currentIndex + cardsPerView)

  return (
    <div className="w-full max-w-7xl mx-auto p-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Our Doctors</h2>
        <p className="text-gray-600">Meet the amazing people who make it all happen</p>
      </div>

      <div className="relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {visibleEmployees.map((emp) => (
            <div
              key={emp.id}
              className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative">
                <img src={emp.image} alt={emp.name} className="w-full h-48 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{emp.name}</h3>
                <p className="text-blue-600 text-sm font-medium mb-1">{emp.position}</p>
                <p className="text-gray-500 text-xs mb-3">{emp.department}</p>
                <div className="space-y-2">
                  <div className="flex items-center text-gray-600 text-xs">
                    <Mail className="w-3 h-3 mr-2 text-gray-400" />
                    <span className="truncate">{emp.email}</span>
                  </div>
                  <div className="flex items-center text-gray-600 text-xs">
                    <Phone className="w-3 h-3 mr-2 text-gray-400" />
                    <span>{emp.phone}</span>
                  </div>
                  {/* <div className="flex items-center text-gray-600 text-xs">
                    <MapPin className="w-3 h-3 mr-2 text-gray-400" />
                    <span>{emp.location}</span>
                  </div> */}
                </div>
              </div>
            </div>
          ))}
        </div>

        {currentIndex > 0 && (
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white p-2 rounded-full shadow-md hover:shadow-lg z-10"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
        )}

        {currentIndex < maxIndex && (
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white p-2 rounded-full shadow-md hover:shadow-lg z-10"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        )}
      </div>

      <div className="flex justify-center space-x-2 mt-4">
        {Array.from({ length: maxIndex + 1 }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full ${
              index === currentIndex ? "bg-blue-600" : "bg-gray-300 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>

      <div className="text-center mt-2">
        <span className="text-sm text-gray-500">
          Showing {currentIndex + 1}-{Math.min(currentIndex + cardsPerView, employees.length)} of{" "}
          {employees.length} employees
        </span>
      </div>
    </div>
  )
}
