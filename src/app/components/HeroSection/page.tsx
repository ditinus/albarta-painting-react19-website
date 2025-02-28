
"use client";
import Image from "next/image";
import HroImage from '../../../../public/assets/expert-calgary-painter.png'; 
import ButtonArrow from '../../../../public/assets/HoeAboutArrow.png'; 
import './style.css';

const page = ({
  title = "EXPERT CALGARY PAINTERS",
  subtitle = "for Interior and Exterior House Painting Services",
  backgroundImage = HroImage, 
  primaryButtonText = "Get a Free Quote",
  primaryButtonUrl = "#",
  primaryButtonArrowImage = ButtonArrow, 
  secondaryButtonText = "Book Now",
  secondaryButtonUrl = "#",
}) => {
 
  const titleParts = title.split(" ");
  const firstWord = titleParts[0];
  const remainingWords = titleParts.slice(1).join(" ");

  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${backgroundImage.src})` }} 
    >
      <div className="hero-content">
       
        <h1>
          {firstWord} <span className="highlight">{remainingWords}</span>
        </h1>

        <p>{subtitle}</p>

        <div className="buttons1">
      
          <div className="btn-with-arrow">
            <a href={primaryButtonUrl} className="btn1 primary">
              {primaryButtonText}
              <Image
                src={primaryButtonArrowImage}
                alt="Arrow"
                width={20}
                height={20}
                style={{ marginLeft: "10px" }}
              />
            </a>
          </div>

          <a href={secondaryButtonUrl} className="btn1 secondary">
            {secondaryButtonText}
          </a>
        </div>
      </div>
    </section>
  );
};

export default page;

