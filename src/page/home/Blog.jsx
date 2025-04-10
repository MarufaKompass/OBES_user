import React from 'react'
import { Badge } from "lucide-react";
export default function Blog() {
    const data = [
        {
          title: "The Science of Sustainable Weight Loss",
          description: "Discover evidence-based approaches to achieving and maintaining a healthy weight.",
          date: "June 15, 2023",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          title: "Nutrition Myths Debunked",
          description: "Separating fact from fiction in the world of nutrition and dietary advice.",
          date: "May 28, 2023",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          title: "Mindfulness and Health",
          description: "How mindfulness practices can improve both physical and mental wellbeing.",
          date: "April 10, 2023",
          image: "/placeholder.svg?height=200&width=300",
        },
      ]
  return (
    <div>
 
 <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
  <div className="container mx-auto px-4 md:px-6">
    <div className="flex flex-col items-center justify-center space-y-4 text-center">
      <div className="space-y-2">
        <span className="inline-block rounded-full border border-[#ba7c1e] bg-[#ec9f2b] px-3 py-1 text-sm font-medium text-[#fff]">
          Latest Articles
        </span>
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Health & Wellness Insights</h2>
        <p className="max-w-[900px] text-gray-500 md:text-xl lg:text-base xl:text-xl">
          Expert advice and evidence-based information to support your health journey.
        </p>
      </div>
    </div>

    <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
      {data.map((article, index) => (
        <div key={index} className="overflow-hidden rounded-lg border border-green-100 shadow-sm">
          <div className="relative h-48 w-full">
            <img
              src={article.image || "/placeholder.svg"}
              alt={article.title}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="p-4 space-y-2">
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3M16 7V3M4 11h16M5 19h14a2 2 0 002-2V7H3v10a2 2 0 002 2z" />
              </svg>
              <span>{article.date}</span>
            </div>
            <h3 className="text-lg font-semibold line-clamp-1">{article.title}</h3>
            <p className="text-gray-500 text-sm line-clamp-2">{article.description}</p>
          </div>
          <div className="px-4 pb-4">
            <button className="text-[#ec9f2b] hover:text-[#ec9f2b] hover:bg-green-50 text-sm font-medium">
              Read more →
            </button>
          </div>
        </div>
      ))}
    </div>

    <div className="flex justify-center">
      <button className="border border-[#ec9f2b] text-[#ec9f2b] px-4 py-2 rounded-md hover:bg-[#fff9ef]">
        View All Articles
      </button>
    </div>
  </div>
</section>

    </div>
  )
}
