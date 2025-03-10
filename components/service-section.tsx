import React from "react";
import { Button } from "./ui/button";
import { useRouter } from 'next/navigation';

interface ServiceSectionProps {
  title: string;
  description: string;
  buttonText: string;
}

const ServiceSection: React.FC<ServiceSectionProps> = ({
  title,
  description,
  buttonText,
}) => {
  // Split the description by line breaks
  const descriptionLines = description.split("<br />");

  const router = useRouter();

  // Handle button click based on buttonText
  const handleButtonClick = () => {
    if (buttonText === "View All") {
      router.push("/gallery"); // Navigate to /gallery page
    } else if (buttonText === "Explore Our Services") {
      router.push("/service"); // Navigate to /service page
    } 
  };

  return (
    <section className=" bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <p className="text-black font-medium text-[18px] lg:text-[22px]">{title}</p>
        <div className="flex flex-col md:flex-row justify-between  mb-8">
          <h2 className="text-[26px] lg:text-[36px] font-semibold text-[#0D378D] uppercase">
            {descriptionLines.map((line, index) => (
              <React.Fragment key={index}>
                {line}
                {index < descriptionLines.length - 1 && <br />}
              </React.Fragment>
            ))}
          </h2>
          <div className="flex  mt-4 md:mt-0 ">
            <Button
              variant="default"
              className=" bg-[#0D378D] px-10  cursor-pointer  py-5  rounded-3xl "
              onClick={handleButtonClick}
            >
              {buttonText}
            </Button>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
