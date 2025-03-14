"use client"

import Image from "next/image"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

import ourServices from "@/public/our-services.png"
import ServiceSection from "./service-section"
export default function OurServices() {
  return (
    <>
     <ServiceSection
        title="Our Services"
        description="Bringing Colour to Every   Corner <br /> of Your Home and Business"
        buttonText="Explore Our Services"
      />

    <div className="w-full bg-black text-white ">
      <div className="container mx-auto py-8 px-4 lg:py-30 lg:px-8 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-32">
          {/* Services Accordion */}
          <div className="space-y-1">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="interior" className="border-b-[1px] border-white/10">
                <AccordionTrigger className="py-6 text-sm font-medium uppercase tracking-wider hover:no-underline">
                  <span>Interior Painting Calgary</span>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="pb-4 text-gray-400">
                    Our interior painting services include walls, ceilings, trim, doors, and more. We use premium paints
                    and materials to ensure a flawless finish.
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="exterior" className="border-b-[1px] border-white/10">
                <AccordionTrigger className="py-6 text-sm font-medium uppercase tracking-wider hover:no-underline">
                  <span>Exterior Painting Calgary</span>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="pb-4 text-gray-400">
                    Our exterior painting services protect and beautify your home outside surfaces, including siding,
                    trim, doors, and decks.
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="commercial" className="  border-b-[1px] border-white/10">
                <AccordionTrigger className="py-6 text-sm font-medium uppercase tracking-wider hover:no-underline">
                  <span>Commercial Painting Calgary</span>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="pb-4 text-gray-400">
                    We provide professional painting services for offices, retail spaces, restaurants, and other
                    commercial properties.
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="popcorn" className="border-b-[1px] border-white/10">
                <AccordionTrigger className="py-6 text-sm font-medium uppercase tracking-wider hover:no-underline">
                  <span>Popcorn Ceiling Removal Calgary</span>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="pb-4 text-gray-400">
                    We safely and efficiently remove outdated popcorn ceilings to give your home a modern, updated look.
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="drywall" className="border-b-[1px] border-white/10">
                <AccordionTrigger className="py-6 text-sm font-medium uppercase tracking-wider hover:no-underline">
                  <span>Drywall Mud & Tape Calgary</span>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="pb-4 text-gray-400">
                    Our drywall services include installation, taping, mudding, and finishing for a seamless wall
                    surface.
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="texturing" className="border-b-[1px] border-white/10">
                <AccordionTrigger className="py-6 text-sm font-medium uppercase tracking-wider hover:no-underline">
                  <span>Ceiling Texturing Calgary</span>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="pb-4 text-gray-400">
                    We offer various ceiling texturing options to add character and style to your home interior.
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Featured Content */}
          <div className="flex flex-col space-y-4 ">
            <div className="relative w-full h-64 md:h-80 overflow-hidden  lg:w-[70%]">
              <Image
                src={ourServices}
                alt="Modern kitchen interior with white cabinets"
                fill
                className="object-cover"
                sizes="(max-width: 200px) 100vw, 10vw"
              />
            </div>
            <div className="space-y-4 w-full lg:w-[70%]">
              <h2 className="text-xl font-semibold">Quality Calgary Interior Painting for Your Needs</h2>
              <p className="text-gray-400 text-sm">
                Interior painting in Calgary can be a daunting task for many homeowners. It requires a significant
                amount of time, effort, and attention to detail to achieve a professional finish.
              </p>
              <button className="flex items-center gap-2 border-2 border-white rounded-full pl-5 pr-1.5  py-2 text-sm md:text-base font-medium bg-[#0D378D]  cursor-pointer transition-colors">
              Learn More
                <svg width="32" height="30" viewBox="0 0 32 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" width="31" height="30" rx="15" fill="white"/>
<path d="M23 9C23 8.44771 22.5523 8 22 8L13 8C12.4477 8 12 8.44771 12 9C12 9.55228 12.4477 10 13 10L21 10L21 18C21 18.5523 21.4477 19 22 19C22.5523 19 23 18.5523 23 18L23 9ZM10.7071 21.7071L22.7071 9.70711L21.2929 8.29289L9.29289 20.2929L10.7071 21.7071Z" fill="#0D378D"/>
</svg>

              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

