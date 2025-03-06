"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,

  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import PaintingServices from "@/public/painting-services.png";
import Link from "next/link";
import Hero from "@/components/hero";
import PaintingCompany from "@/components/painting-company";

import  ContactFormSection  from "../../components/ContactFormSection";
import Footer from "@/components/ui/footer";
import HomeBanner from "@/components/HomeBanner/home-banner";
import { Navbar } from "@/components/navbar";
import blogsBanner from "@/public/blogs-banner.png";
import BlogHeros from "@/components/blogs-hero";

const services = [
  {
    title: "Commercial Painting Calgary",
    description:
      "Expert Painting Service for commercial and residential spaces. Affordable Painting Services in Calgary focused on meeting the unique painting needs of your business.",
    imageSrc: PaintingServices,
    altText: "Commercial Painting",
    buttonText: "Learn More",
  },
  {
    title: "Popcorn Ceiling Removal Calgary",
    description:
      "Popcorn ceilings were popular in the 70s, but not anymore. We can transform your old, dated ceiling into one that fits the way you live your modern life.",
    imageSrc: PaintingServices,
    altText: "Popcorn Ceiling Removal",
    buttonText: "Learn More",
  },
  {
    title: "Drywall Mud & Tape Calgary",
    description:
      "Expert taping and mudding is a critical aspect of a well-looking and enduring paint property in Calgary. We provide just the finish your project needs.",
    imageSrc: PaintingServices,
    altText: "Drywall Mud & Tape",
    buttonText: "Learn More",
  },
  {
    title: "Ceiling Texturing Calgary",
    description:
      "Calgary's ceiling texturing is a popular way to add character and interest to a room. In Calgary, there are several options available, including knockdown, orange peel, and more.",
    imageSrc: PaintingServices,
    altText: "Ceiling Texturing",
    buttonText: "Learn More",
  },
];

export default function Services() {
  return (
    <> 
      <Navbar />
    
      <BlogHeros
        title="Our"
        title2="Painting Services"
        subtitle="Transforming Homes & Businesses with Quality Painting"
        imageSrc={blogsBanner}
        quoteLink="/quote"
        bookLink="/book"
        quoteText="Get a Free Quote"
        bookText="Read More"
      />

    <PaintingCompany />
 
    <div className="container mx-auto max-w-7xl px-4 py-8">
      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
        {services.map((service, index) => (
          <Card
            key={index}
            className="overflow-hidden p-0 border-0 shadow-none space-y-3"
          >
            <CardTitle className="uppercase text-lg p-0 font-bold text-[#0D378D] mb-[-10]">
              {service.title}
            </CardTitle>
            <div className="relative h-[300px] w-full">
                
              <Image
                src={service.imageSrc}
                alt={service.altText}
                fill
                className="object-cover"
              />
            </div>
            <CardHeader className=" p-0">
              <CardTitle className="uppercase text-lg font-bold text-black mt-[-23]">
                {service.title}
              </CardTitle>
              <CardDescription className=" text-black">
                {service.description.split("\n")[0]}
              </CardDescription>
            </CardHeader>
       
            <CardFooter className="p-0 mt-[-20]">
            

              <Link
              href="/quote"
              className="bg-[#0D378D] text-white pl-5 pr-2 py-1.5   border-2 border-white rounded-full font-medium hover:bg-blue-700  flex items-center justify-center"
            >
              {service.buttonText} 
              <span className="ml-2 bg-white rounded-full p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="14"
                  viewBox="0 0 15 14"
                  fill="none"
                >
                  <path
                    d="M14.5 0.999999C14.5 0.447714 14.0523 -8.61581e-07 13.5 -1.11446e-06L4.5 -3.13672e-07C3.94772 -6.50847e-07 3.5 0.447715 3.5 0.999999C3.5 1.55228 3.94772 2 4.5 2L12.5 2L12.5 10C12.5 10.5523 12.9477 11 13.5 11C14.0523 11 14.5 10.5523 14.5 10L14.5 0.999999ZM2.20711 13.7071L14.2071 1.70711L12.7929 0.292893L0.792893 12.2929L2.20711 13.7071Z"
                    fill="#0D378D"
                  />
                </svg>
              </span>
            </Link>
            
    
           
            </CardFooter>
          </Card>
        ))}
      </div>
      <HomeBanner/>
      {/* CTA Banner */}
      {/* <div className="relative w-full  h-[300px] mb-10 rounded-lg overflow-hidden">
        <div className="absolute inset-0 bg-black/70">
          <Image
            src={PaintingServices}
            alt="Transform Your Space"
            fill
            className="object-cover mix-blend-overlay"
          />
        </div>
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-white p-6 text-center">
          <h2 className="text-2xl font-bold uppercase mb-2">
            Ready to transform your space?
          </h2>
          <p className="mb-4 max-w-xl">
           {` Whether you're looking to refresh your home or update your business
            space, our team is ready to help you create the perfect environment.`}
          </p>
          <Button className="bg-primary hover:bg-primary/90 text-white rounded-full">
            Schedule a Consultation
          </Button>
        </div>
      </div> */}

      {/* Contact Form Section */}
  

      <ContactFormSection />

     
    </div>
    <Footer />
    </>
  );
}
