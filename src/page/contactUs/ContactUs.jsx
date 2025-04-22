import React from 'react'

export default function ContactUs() {
  return (
    <div className="bg-white text-gray-800">
    {/* Header Section */}
    <div className="relative bg-[#FE9A00] text-white py-20 px-6 text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
      <p className="text-lg max-w-2xl mx-auto">
        We'd love to hear from you! Whether you have a question or just want to say hello.
      </p>
    </div>

    {/* Contact Form and Info Section */}
    <section className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-10">
      {/* Contact Form */}
      <div>
        <h2 className="text-2xl font-semibold text-[#FE9A00] mb-6">Send a Message</h2>
        <form className="space-y-6">
          <div>
            <label className="block mb-1 font-medium">Full Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              placeholder="your@email.com"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Message</label>
            <textarea
              rows="5"
              placeholder="Your message..."
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="bg-[#FE9A00] hover:bg-[#FE9A00] text-white font-semibold px-6 py-2 rounded-md transition"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Contact Info */}
      <div className="bg-gray-50 rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold text-[#FE9A00] mb-6">Get in Touch</h2>
        <p className="mb-4">
          You can reach out to us using the form or through the contact information below.
        </p>
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold">📍 Address</h4>
            <p>123 Business St, Innovation City, USA</p>
          </div>
          <div>
            <h4 className="font-semibold">📞 Phone</h4>
            <p>+1 (555) 123-4567</p>
          </div>
          <div>
            <h4 className="font-semibold">✉️ Email</h4>
            <p>support@yourcompany.com</p>
          </div>
        </div>
      </div>
    </section>
  </div>
  );
};
