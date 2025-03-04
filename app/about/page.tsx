import Image from "next/image"
import { Check, Dot } from "lucide-react"
import service1 from "@/public/service1.png"
import service2 from "@/public/service2.png"
import service3 from "@/public/service3.png"

import OurServices from "@/components/our-services"
import PaintingCompany from "@/components/painting-company"
export default function page() {
  return (
    <>
    
    <Hero />

      <PaintingCompany />
      <OurServices />
    <div className="container mx-auto max-w-7xl px-4 py-12">
      {/* Quality Section */}
      <div className="grid md:grid-cols-2 gap-8 mb-16 items-center">
        <div className="relative w-full  lg:w-[80%] aspect-square md:aspect-auto md:h-[600px] overflow-hidden">
          <Image
            src={service1}
            alt="Modern living room with wooden floors and fireplace"
            fill
            className="object-cover "
          />
        </div>

        <div className="space-y-6">
          <div className="space-y-2">
            <p className="text-sm font-medium text-black" >Commitment to Quality</p>
            <h2 className="text-3xl font-bold text-blue-800">
              PREMIUM MATERIALS &<br />
              EXCEPTIONAL WORKMANSHIP
            </h2>
          </div>

          <ul className="space-y-4 text-black">
            <li className="flex items-start gap-2">
            <Dot  className="h-5 w-5 mt-0.5 text-black flex-shrink-0" />
              <span>We use the best paints and materials for long-lasting results.</span>
            </li>
            <li className="flex items-start gap-2">
            <Dot  className="h-5 w-5 mt-0.5 text-black flex-shrink-0" />
              <span>Our expert team ensures flawless finishes with attention to every detail.</span>
            </li>
            <li className="flex items-start gap-2">
            <Dot  className="h-5 w-5 mt-0.5 text-black flex-shrink-0" />
              <span>We receive numerous positive reviews from satisfied clients who trust our work.</span>
            </li>
          </ul>

          <div className="pt-4">
            <p className="text-sm text-black">
              Our reputation is built on trust, professionalism, and superior quality—ensuring every project exceeds
              expectations.
            </p>
          </div>
        </div>
      </div>

      {/* Eco-Friendly Section */}
      <div className="grid md:grid-cols-2 gap-8 items-center relative">
        <div className="space-y-6 order-2 md:order-1">
          <div className="space-y-2">
            <p className="text-sm font-medium text-black">Eco-Friendly Approach</p>
            <h2 className="text-3xl font-bold text-blue-800">
              SUSTAINABLE PAINTING FOR A<br />
              HEALTHIER FUTURE
            </h2>
          </div>

          <ul className="space-y-4 text-black list-disc">
            <li className="flex items-start gap-2 list-disc">
              <Dot  className="h-5 w-5 mt-0.5 text-black " />
              <span>We use low to no VOC paints to reduce environmental impact.</span>
            </li>
            <li className="flex items-start gap-2">
              <Dot  className="h-5 w-5 mt-0.5 text-black flex-shrink-0" />
              <span>We collect and recycle leftover paints responsibly.</span>
            </li>
            <li className="flex items-start gap-2">
              <Dot  className="h-5 w-5 mt-0.5 text-black flex-shrink-0" />
              <span >We sort and recycle all project-related waste at our facility.</span>
            </li>
          </ul>

          <div className="pt-4">
            <p className="text-sm text-black">
              By choosing Alberta Colour Painting, you're making an eco-friendly choice that benefits your home and the
              planet.
            </p>
          </div>
        </div>

        <div className="relative w-full lg:w-[80%] aspect-square md:aspect-auto md:h-[600px]  overflow-hidden order-1 md:order-2">
          <Image
            src={service2}
            alt="Team members discussing eco-friendly paint options"
            fill
            className=" "
          />
        </div>

      </div>
    </div>
    </>
  )
}

