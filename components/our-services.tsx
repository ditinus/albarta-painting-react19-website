// "use client"
// import { useState } from "react";
// import Image from "next/image";
// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion";

// import ourServices from "@/public/our-services.png";
// import ourServices2 from "@/public/ourServices2.png";
// import ourServices3 from "@/public/ourServices3.png";
// import ourServices4 from "@/public/ourServices4.png";
// import ourServices5 from "@/public/ourServices5.png";
// import ourServices6 from "@/public/ourServices6.png";
// import ServiceSection from "./service-section";
// import Link from "next/link";

// export default function OurServices() {

//   const [activeSection, setActiveSection] = useState<string>("interior"); // default to "interior"

//   const handleAccordionChange = (value: string) => {
//     setActiveSection(value);
//   };

//   const getImageForSection = () => {
//     switch (activeSection) {
//       case "interior":
//         return ourServices;
//       case "exterior":
//         return ourServices2;
//       case "commercial":
//         return ourServices3;
//       case "popcorn":
//         return ourServices4;
//       case "drywall":
//         return ourServices5;
//       case "texturing":
//         return ourServices6;
//       default:
//         return ourServices;
//     }
//   };

//   const getColorForSection = (section: string) => {
//     return activeSection === section ? "text-white" : "text-gray-400"; // White for active, Gray for inactive
//   };



//   return (
//     <>
//       <div className="lg:mb-15 mb-5 ">
//         <ServiceSection
//           title="Our Services"
//           description="Bringing Colour to Every Corner <br /> of Your Home and Business"
//           buttonText="Explore Our Services"
//         />
//       </div>

//       <div className="w-full bg-black text-white mb-10">
//         <div className="container mx-auto max-w-7xl py-8 px-4 lg:py-30">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-32 place-items-center">
//             {/* Services Accordion */}
//             <div className="space-y-1">
//               <Accordion
//                 type="single"
//                 collapsible
//                 value={activeSection} // Set value to the active section
//                 onValueChange={handleAccordionChange}
//                 className="w-full"
//               >
//                 <AccordionItem
//                   value="interior"
//                   className="border-b-[1px] border-white/10"
//                 >
//                   <AccordionTrigger
//                     className={`py-6 lg:text-[22px] text-[16px] font-medium uppercase tracking-wider hover:no-underline ${getColorForSection(
//                       "interior"
//                     )}`}
//                   >
//                     <span>Interior Painting Calgary</span>
//                   </AccordionTrigger>
//                 </AccordionItem>

//                 <AccordionItem
//                   value="exterior"
//                   className="border-b-[1px] border-white/10"
//                 >
//                   <AccordionTrigger
//                     className={`py-6 lg:text-[22px] text-[16px] font-medium uppercase tracking-wider hover:no-underline ${getColorForSection(
//                       "exterior"
//                     )}`}
//                   >
//                     <span>Exterior Painting Calgary</span>
//                   </AccordionTrigger>
//                 </AccordionItem>

//                 <AccordionItem
//                   value="commercial"
//                   className="border-b-[1px] border-white/10"
//                 >
//                   <AccordionTrigger
//                     className={`py-6 lg:text-[22px] text-[16px] font-medium uppercase tracking-wider hover:no-underline ${getColorForSection(
//                       "commercial"
//                     )}`}
//                   >
//                     <span>Commercial Painting Calgary</span>
//                   </AccordionTrigger>
//                 </AccordionItem>

//                 <AccordionItem
//                   value="popcorn"
//                   className="border-b-[1px] border-white/10"
//                 >
//                   <AccordionTrigger
//                     className={`py-6 lg:text-[22px] text-[16px] font-medium uppercase tracking-wider hover:no-underline ${getColorForSection(
//                       "popcorn"
//                     )}`}
//                   >
//                     <span>Popcorn Ceiling Removal Calgary</span>
//                   </AccordionTrigger>
//                 </AccordionItem>

//                 <AccordionItem
//                   value="drywall"
//                   className="border-b-[1px] border-white/10"
//                 >
//                   <AccordionTrigger
//                     className={`py-6 lg:text-[22px] text-[16px] font-medium uppercase tracking-wider hover:no-underline ${getColorForSection(
//                       "drywall"
//                     )}`}
//                   >
//                     <span>Drywall Mud & Tape Calgary</span>
//                   </AccordionTrigger>
//                 </AccordionItem>

//                 <AccordionItem
//                   value="texturing"
//                   className="border-b-[1px] border-white/10"
//                 >
//                   <AccordionTrigger
//                     className={`py-6 lg:text-[22px] text-[16px] font-medium uppercase tracking-wider hover:no-underline ${getColorForSection(
//                       "texturing"
//                     )}`}
//                   >
//                     <span>Ceiling Texturing Calgary</span>
//                   </AccordionTrigger>
//                 </AccordionItem>
//               </Accordion>
//             </div>

//             {/* Featured Content */}
//             <div className="flex flex-col space-y-4">
//               <div className="relative w-full h-64 md:h-80 overflow-hidden">
//                 <Image
//                   src={getImageForSection()}
//                   alt="Service-specific image"
//                   fill
//                   className="object-cover"
//                   sizes="(max-width: 200px) 100vw, 10vw"
//                 />
//               </div>
//               <div className="space-y-4 w-full">
//                 <h2 className="lg:text-[20px] font-semibold">
//                   Quality Calgary Interior Painting for Your Needs
//                 </h2>
//                 <p className="text-gray-400 lg:text-[16px] text-[14px]">
//                   Interior painting in Calgary can be a daunting task for many
//                   homeowners. It requires a significant amount of time, effort,
//                   and attention to detail to achieve a professional finish.
//                 </p>
//                 <Link href="/service-detail">
//                   <button className="flex items-center gap-2 border-2 border-white rounded-full pl-5 pr-1.5 py-1 text-sm md:text-base font-medium bg-[#0D378D] cursor-pointer transition-colors">
//                     {" "}
//                     Learn More{" "}
//                     <svg
//                       width="32"
//                       height="30"
//                       viewBox="0 0 32 30"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       {" "}
//                       <rect
//                         x="0.5"
//                         width="31"
//                         height="30"
//                         rx="15"
//                         fill="white"
//                       />{" "}
//                       <path
//                         d="M23 9C23 8.44771 22.5523 8 22 8L13 8C12.4477 8 12 8.44771 12 9C12 9.55228 12.4477 10 13 10L21 10L21 18C21 18.5523 21.4477 19 22 19C22.5523 19 23 18.5523 23 18L23 9ZM10.7071 21.7071L22.7071 9.70711L21.2929 8.29289L9.29289 20.2929L10.7071 21.7071Z"
//                         fill="#0D378D"
//                       />{" "}
//                     </svg>{" "}
//                   </button>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }





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

export default function OurServices() {
  const [activeSection, setActiveSection] = useState<string>("interior"); // default to "interior"

  const handleAccordionChange = (value: string) => {
    setActiveSection(value);
  };

  const getImageForSection = () => {
    switch (activeSection) {
      case "interior":
        return ourServices;
      case "exterior":
        return ourServices2;
      case "commercial":
        return ourServices3;
      case "popcorn":
        return ourServices4;
      case "drywall":
        return ourServices5;
      case "texturing":
        return ourServices6;
      default:
        return ourServices;
    }
  };

  const getColorForSection = (section: string) => {
    return activeSection === section ? "text-white" : "text-gray-400"; // White for active, Gray for inactive
  };

  return (
    <>
      <div className="lg:mb-15 mb-5 ">
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
                value={activeSection} // Set value to the active section
                onValueChange={handleAccordionChange}
                className="w-full"
              >
                <AccordionItem
                  value="interior"
                  className="border-b-[1px] border-white/10"
                >
                  <AccordionTrigger
                    className={`py-6 lg:text-[22px] text-[16px] font-medium uppercase tracking-wider hover:no-underline ${getColorForSection(
                      "interior"
                    )}`}
                  >
                    <span>Interior Painting Calgary</span>
                  </AccordionTrigger>
                </AccordionItem>

                <AccordionItem
                  value="exterior"
                  className="border-b-[1px] border-white/10"
                >
                  <AccordionTrigger
                    className={`py-6 lg:text-[22px] text-[16px] font-medium uppercase tracking-wider hover:no-underline ${getColorForSection(
                      "exterior"
                    )}`}
                  >
                    <span>Exterior Painting Calgary</span>
                  </AccordionTrigger>
                </AccordionItem>

                <AccordionItem
                  value="commercial"
                  className="border-b-[1px] border-white/10"
                >
                  <AccordionTrigger
                    className={`py-6 lg:text-[22px] text-[16px] font-medium uppercase tracking-wider hover:no-underline ${getColorForSection(
                      "commercial"
                    )}`}
                  >
                    <span>Commercial Painting Calgary</span>
                  </AccordionTrigger>
                </AccordionItem>

                <AccordionItem
                  value="popcorn"
                  className="border-b-[1px] border-white/10"
                >
                  <AccordionTrigger
                    className={`py-6 lg:text-[22px] text-[16px] font-medium uppercase tracking-wider hover:no-underline ${getColorForSection(
                      "popcorn"
                    )}`}
                  >
                    <span>Popcorn Ceiling Removal Calgary</span>
                  </AccordionTrigger>
                </AccordionItem>

                <AccordionItem
                  value="drywall"
                  className="border-b-[1px] border-white/10"
                >
                  <AccordionTrigger
                    className={`py-6 lg:text-[22px] text-[16px] font-medium uppercase tracking-wider hover:no-underline ${getColorForSection(
                      "drywall"
                    )}`}
                  >
                    <span>Drywall Mud & Tape Calgary</span>
                  </AccordionTrigger>
                </AccordionItem>

                <AccordionItem
                  value="texturing"
                  className="border-b-[1px] border-white/10"
                >
                  <AccordionTrigger
                    className={`py-6 lg:text-[22px] text-[16px] font-medium uppercase tracking-wider hover:no-underline ${getColorForSection(
                      "texturing"
                    )}`}
                  >
                    <span>Ceiling Texturing Calgary</span>
                  </AccordionTrigger>
                </AccordionItem>
              </Accordion>
            </div>

            {/* Featured Content */}
            <div className="flex flex-col space-y-4">
              <div className="relative w-full h-64 md:h-80 overflow-hidden">
                <Image
                  src={getImageForSection()}
                  alt="Service-specific image"
                  fill
                  className="object-cover"
                  sizes="(max-width: 200px) 100vw, 10vw"
                />
              </div>
              <div className="space-y-4 w-full">
                <h2 className="lg:text-[20px] font-semibold">
                  Quality Calgary Interior Painting for Your Needs
                </h2>
                <p className="text-gray-400 lg:text-[16px] text-[14px]">
                  Interior painting in Calgary can be a daunting task for many
                  homeowners. It requires a significant amount of time, effort,
                  and attention to detail to achieve a professional finish.
                </p>
                <Link href="/service-detail">
                  <button className="flex items-center gap-2 border-2 border-white rounded-full pl-5 pr-1.5 py-1 text-sm md:text-base font-medium bg-[#0D378D] cursor-pointer transition-colors">
                    {" "}
                    Learn More{" "}
                    <svg
                      width="32"
                      height="30"
                      viewBox="0 0 32 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {" "}
                      <rect
                        x="0.5"
                        width="31"
                        height="30"
                        rx="15"
                        fill="white"
                      />{" "}
                      <path
                        d="M23 9C23 8.44771 22.5523 8 22 8L13 8C12.4477 8 12 8.44771 12 9C12 9.55228 12.4477 10 13 10L21 10L21 18C21 18.5523 21.4477 19 22 19C22.5523 19 23 18.5523 23 18L23 9ZM10.7071 21.7071L22.7071 9.70711L21.2929 8.29289L9.29289 20.2929L10.7071 21.7071Z"
                        fill="#0D378D"
                      />{" "}
                    </svg>{" "}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


