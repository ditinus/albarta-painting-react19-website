import React from "react";
import { Button } from "./ui/button";

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

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <p className="text-black font-medium text-[18px] lg:text-[22px]">{title}</p>
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <h2 className="text-[26px] lg:text-[36px] font-semibold text-[#0D378D] uppercase">
            {descriptionLines.map((line, index) => (
              <React.Fragment key={index}>
                {line}
                {index < descriptionLines.length - 1 && <br />}
              </React.Fragment>
            ))}
          </h2>
          <div className="flex items-center mt-4 md:mt-0">
            <Button
              variant="default"
              className="ml-4 bg-[#0D378D] px-10 rounded-3xl "
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
