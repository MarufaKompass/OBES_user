import React from "react";
import {
  HeartPulseIcon,
  CheckCircle2Icon,
  UserIcon
} from "lucide-react";
export default function HealthCare() {

  const services = [
              {
                title: "Nutrition Counseling",
                description: "Personalized dietary plans tailored to your specific health needs and goals.",
                icon: <HeartPulseIcon className="h-10 w-10 text-[#FE9A00]" />,
              },
              {
                title: "Weight Management",
                description: "Evidence-based programs to help you achieve and maintain a healthy weight.",
                icon: <CheckCircle2Icon className="h-10 w-10 text-[#FE9A00]" />,
              },
              {
                title: "Lifestyle Coaching",
                description: "Guidance on incorporating healthy habits into your daily routine.",
                icon: <UserIcon className="h-10 w-10 text-[#FE9A00]" />,
              },
            ]

  return (
    <section id="services" className="w-full  py-20 container">
      <div className="container">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg px-3 py-1 text-[18px] font-medium" style={{fontFamily:'poppins'}}>
              Our Services
            </div>
            <h2 className="text-[28px] font-bold md:text-[38px] leading-10 tracking-normal" style={{fontFamily:'poppins'}}>
              Comprehensive Healthcare Solutions
            </h2>
            <p className="max-w-[900px] text-muted-foreground text-[14px] md:text-[18px]" style={{fontFamily:'poppins'}}>
              We offer a wide range of medical services to meet your healthcare
              needs
            </p>
          </div>
        </div>

        <div className=" mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
           <div key={index} className="rounded-lg border border-green-100 bg-white shadow-sm p-4 flex flex-col justify-between">
           <div>
             <div className="mb-2">{service.icon}</div>
             <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
             <p className="text-gray-500">{service.description}</p>
           </div>
           <div className="mt-4">
             <button className="text-[#FE9A00] hover:text-[#FE9A00] hover:bg-green-50 text-sm font-medium p-0">
               Learn more →
             </button>
           </div>
         </div>
         
          ))}
        </div>
      </div>
    </section>
  );
}
