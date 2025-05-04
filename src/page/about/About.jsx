import React from 'react'

export default function About() {
  
const teamMembers = [
  {
    name: 'Alice Johnson',
    position: 'CEO',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    name: 'Michael Lee',
    position: 'CTO',
    image: 'https://randomuser.me/api/portraits/men/46.jpg',
  },
  {
    name: 'Sarah Kim',
    position: 'Product Manager',
    image: 'https://randomuser.me/api/portraits/women/48.jpg',
  },
  {
    name: 'David Chen',
    position: 'Lead Developer',
    image: 'https://randomuser.me/api/portraits/men/50.jpg',
  },
];

  return (
    <div>
     <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <div className="relative bg-[#7b1e19] text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About Our Company</h1>
        <p className="text-lg max-w-2xl mx-auto">
          We help businesses grow through innovative technology and strategic digital solutions.
        </p>
      </div>

      {/* Company Overview */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <img
            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80"
            alt="Company"
            className="rounded-lg shadow-lg"
          />
          <div>
            <h2 className="text-3xl font-bold mb-4 text-[#7b1e19]">Who We Are</h2>
            <p className="text-base leading-relaxed mb-4">
              We are a passionate team of creatives, engineers, and strategists committed to helping brands transform through technology.
            </p>
            <p className="text-base leading-relaxed">
              Our approach is collaborative, transparent, and tailored to each client's unique goals.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-gray-100 py-12 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-2xl font-semibold mb-2 text-[#7b1e19]">Our Vision</h3>
            <p>
              To be a trusted global partner delivering high-impact technology solutions that drive meaningful business growth.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-2xl font-semibold mb-2 text-[#7b1e19]">Our Mission</h3>
            <p>
              To empower organizations with intelligent software, outstanding service, and a commitment to excellence in every project.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-text-[#FE9A00] mb-8">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center">
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h4 className="text-xl font-semibold">{member.name}</h4>
              <p className="text-sm text-gray-500">{member.position}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
    </div>
  )
}
