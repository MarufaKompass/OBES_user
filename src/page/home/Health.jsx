import overWeight from "../../../public/images/home/overWeight.png";
import {CheckCircle} from "lucide-react";
export default function Health() {
  return (
    <section className="w-full py-24 bg-muted ">
      <div className="container px-4 md:px-6">
        <div className="grid gap-20 lg:grid-cols-2  h-full">
          {/* Image */}
          <img
            src={overWeight}
            alt="Modern medical facility"
            className=""
          />
          <div className="flex flex-col justify-center space-y-4">
            {/* <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary" style={{ fontFamily: 'poppins' }}>About Us</div> */}
            <h2 className="text-3xl font-semibold tracking-tighter md:text-4xl font-[poppins]" style={{ fontFamily: 'poppins' }}>A Medical Condition, Not a Choice</h2>
            <p className="text-muted-foreground md:text-[16px]" style={{ fontFamily: 'poppins' }}>
              Obesity affects over 650 million adults worldwide and is recognized by medical organizations as a
              chronic disease requiring professional treatment and ongoing management.
            </p>
            <ul className="grid gap-2">
              {[
                'Evidence-based treatment approaches',
                'Personalized care plans',
                'Long-term support and monitoring',

              ].map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <button className="w-fit px-6 py-3 mt-4 text-white bg-[#7b1e19] rounded-lg shadow-md hover:bg-primary-dark transition-colors" style={{ fontFamily: 'poppins' }}>
              Learn More About Us
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
