"use client";
import { useState } from "react";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import ourServices from "@/public/our-services.png";
import ourServices2 from "@/public/ourServices2.png";
import ourServices3 from "@/public/ourServices3.png";
import ourServices4 from "@/public/ourServices4.png";
import ourServices5 from "@/public/ourServices5.png";
import ourServices6 from "@/public/ourServices6.png";
import ServiceSection from "./service-section";
import Link from "next/link";


const serviceData = [
  {
    id: "interior",
    href: '/service-detail', 
    title: "Interior Painting Calgary",
    description: "Interior painting in Calgary can be a daunting task for many homeowners. It requires a significant amount of time, effort, and attention to detail to achieve a professional finish.",
    image: ourServices,
  },
  {
    id: "exterior",
    href: '/service-detail', 
    title: "Exterior Painting Calgary",
    description: "Transform your property's exterior with our professional painting services, ensuring long-lasting protection and aesthetic appeal.",
    image: ourServices2,
  },
  {
    id: "commercial",
    href: '/service-detail', 
    title: "Commercial Painting Calgary",
    description: "We offer commercial painting services that will make your business stand out with high-quality finishes and minimal disruption to your operations.",
    image: ourServices3,
  },
  {
    id: "popcorn",
    href: '/service-detail', 
    title: "Popcorn Ceiling Removal Calgary",
    description: "Remove old and outdated popcorn ceilings with ease, offering a fresh and modern look for your home.",
    image: ourServices4,
  },
  {
    id: "drywall",
    href: '/service-detail', 
    title: "Drywall Mud & Tape Calgary",
    description: "Professional drywall mudding and taping services to ensure a smooth, polished surface ready for painting.",
    image: ourServices5,
  },
  {
    id: "texturing",
    href: '/service-detail', 
    title: "Ceiling Texturing Calgary",
    description: "Add a touch of elegance with textured ceilings that can enhance the beauty of your home or business.",
    image: ourServices6,
  },
];

export default function OurServices() {
  const [activeSection, setActiveSection] = useState<string>("interior");

  const handleAccordionChange = (value: string) => {
    setActiveSection(value);
  };

  const getColorForSection = (section: string) => {
    return activeSection === section ? "text-white" : "text-gray-400";
  };

  const activeService = serviceData.find((service) => service.id === activeSection);

  return (
    <>
      <div className="lg:mb-15 mb-5">
        <ServiceSection
          title="Our Services"
          description="Bringing Colour to Every Corner <br /> of Your Home and Business"
          buttonText="Explore Our Services"
        />
      </div>

      <div className="w-full bg-black text-white mb-10">
        <div className="container mx-auto max-w-7xl py-8 px-4 lg:py-30">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-32 place-items-center">
            {/* Services Accordion */}
            <div className="space-y-1">
              <Accordion
                type="single"
                collapsible
                value={activeSection}
                onValueChange={handleAccordionChange}
                className="w-full"
              >
                {serviceData.map((service) => (
                  <AccordionItem key={service.id} value={service.id} className="border-b-[1px] border-white/10">
                    <AccordionTrigger className={`py-6 lg:text-[22px] text-[16px] font-medium uppercase tracking-wider hover:no-underline ${getColorForSection(service.id)}`}>
                      <span>{service.title}</span>
                    </AccordionTrigger>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            {/* Featured Content */}
            {activeService && (
              <div className="flex flex-col space-y-4">
                <div className="relative w-full h-64 md:h-80 overflow-hidden">
                  <Image
                    src={activeService.image}
                    alt="Service-specific image"
                    fill
                    className="object-cover"
                    sizes="(max-width: 200px) 100vw, 10vw"
                  />
                </div>
                <div className="space-y-4 w-full">
                  <h2 className="lg:text-[20px] font-semibold">{activeService.title}</h2>
                  <p className="text-gray-400 lg:text-[16px] text-[14px]">{activeService.description}</p>
                  <Link href={activeService.href || '#'}> {/* Corrected to activeService.href */}
                    <button className="flex items-center gap-2 border-2 border-white rounded-full pl-5 pr-1.5 py-1 text-sm md:text-base font-medium bg-[#0D378D] cursor-pointer transition-colors">
                      Learn More
                      <svg
                        width="32"
                        height="30"
                        viewBox="0 0 32 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="0.5"
                          width="31"
                          height="30"
                          rx="15"
                          fill="white"
                        />
                        <path
                          d="M23 9C23 8.44771 22.5523 8 22 8L13 8C12.4477 8 12 8.44771 12 9C12 9.55228 12.4477 10 13 10L21 10L21 18C21 18.5523 21.4477 19 22 19C22.5523 19 23 18.5523 23 18L23 9ZM10.7071 21.7071L22.7071 9.70711L21.2929 8.29289L9.29289 20.2929L10.7071 21.7071Z"
                          fill="#0D378D"
                        />
                      </svg>
                    </button>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
