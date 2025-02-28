"use client";
import Image from "next/image";
import HroImage from '../../../../public/assets/expert-calgary-painter.png'; 
import ButtonArrow from '../../../../public/assets/HoeAboutArrow.png'; 
import './heroSection.css';

const HeroSection = ({
  title = "EXPERT CALGARY PAINTERS",
  subtitle = "for Interior and Exterior House Painting Services",
  backgroundImage = HroImage, 
  primaryButtonText = "Get a Free Quote",
  primaryButtonUrl = "#",
  primaryButtonArrowImage = ButtonArrow, 
  secondaryButtonText = "Book Now",
  secondaryButtonUrl = "#",
  height = "80vh", // Default height
}) => {
  const titleParts = title.split(" ");
  const firstWord = titleParts[0];
  const remainingWords = titleParts.slice(1).join(" ");

  return (
    <section
      className="hero"
      style={{ 
        backgroundImage: `url(${backgroundImage.src})`, 
        height: height // Correctly applying height as a CSS property
      }} 
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

          {/* Secondary Button */}
          <a href={secondaryButtonUrl} className="btn1 secondary">
            {secondaryButtonText}
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
