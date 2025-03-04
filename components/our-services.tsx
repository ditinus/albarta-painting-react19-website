"use client"

import Image from "next/image"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { MoveRight } from "lucide-react"
import ourServices from "@/public/our-services.png"
export default function OurServices() {
  return (
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
                    Our exterior painting services protect and beautify your home's outside surfaces, including siding,
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
                    We offer various ceiling texturing options to add character and style to your home's interior.
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
              <Button
                variant="outline"
                className="rounded-full bg-blue-600 hover:bg-blue-700 text-white border-none flex items-center gap-2 px-6"
              >
                Learn More
                <MoveRight size={16} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

