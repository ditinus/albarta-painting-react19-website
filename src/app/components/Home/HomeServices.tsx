// import { useState } from "react";
// import openArr from "../../../../public/assets/OpenArrow.png";
// import closeArr from "../../../../public/assets/CloseArrow.png";
// import arrow from '../../../../public/assets/HoeAboutArrow.png';
// import interior from "../../../../public/assets/interior.png";
// import exterior from "../../../../public/assets/exterior.png";
// import commercial from "../../../../public/assets/commercial.png";
// import popcorn from "../../../../public/assets/popcorn.png";
// import drywall from "../../../../public/assets/drywall.png";
// import ceiling from "../../../../public/assets/ceiling.png";
// import { Container, Row, Col, Button, Image } from 'react-bootstrap';
// import './HomeServices.css';

// const services = [
//   {   
//     title: "INTERIOR PAINTING CALGARY", 
//     content: "Quality Calgary Interior Painting for Your Needs", 
//     text: "Interior painting in Calgary can be a daunting task for many homeowners. It requires a significant amount of time, effort, and attention to detail to achieve a professional finish.", 
//     image: interior,
//   },
//   { 
//     title: "EXTERIOR PAINTING CALGARY", 
//     content: "Expert Exterior Painting Services", 
//     text: "Exterior painting is a crucial step in maintaining and enhancing the appearance of your property. In Calgary, the harsh weather conditions can take a toll on your exteriors, making it essential to choose a durable and high-quality paint.",
//     image: exterior,
//   },
//   { 
//     title: "COMMERCIAL PAINTING CALGARY", 
//     content: "Top-notch Commercial Painting Solutions", 
//     text: "Interior Painting can be a very stressful and frustrating experience. Alberta Colour Painting in Calgary focuses on making the whole process of house painting as easy as possible for you.",
//     image: commercial, 
//   },
//   { 
//     title: "POPCORN CEILING REMOVAL CALGARY", 
//     content: "Safe and Efficient Ceiling Removal", 
//     text: "Popcorn ceilings were a popular trend in the 70's and can often give your home an outdated and old look. Not only do they lack aesthetic appeal, but they can also create a breeding ground for dust and allergens.",
//     image: popcorn,
//   },
//   { 
//     title: "DRYWALL MUD & TAPE CALGARY", 
//     content: "Flawless Drywall Finishing", 
//     text: "Drywall repair and installation are critical aspects of maintaining and enhancing your property.",
//     image: drywall, 
//   },
//   { 
//     title: "CEILING TEXTURING CALGARY", 
//     content: "Enhance Your Ceilings with Texture", 
//     text: "Calgary ceiling texturing is a popular way to add visual interest and texture to a room. In Calgary, there are several options available, including knockdown texturing Calgary",
//     image: ceiling,
//   },
// ];

// const HomeServices = () => {
//   const [activeIndex, setActiveIndex] = useState(0);

//   return (
//     <section className="service-menu-container">
//       <div className="services-header" style={{backgroundColor:"white"}}>
//         <div className="service-heading">
//           <h2>Our Services</h2>
//           <div className="service-btn">
//           <h1>BRINGING COLOUR TO EVERY CORNER OF YOUR HOME AND BUSINESS</h1>
//             <button className="explore-btn">Explore Our Services</button>
//           </div>
//         </div>
//       </div>

//       <Container className="service-content">
//         <Row className="services-wrap">
//           {/* Increase the width of the first column */}
//           <Col xs={12} md={8} className="service-list">
//             {services.map((service, index) => (
//               <div
//                 key={index}
//                 className={`service-item ${activeIndex === index ? "active" : ""}`}
//                 onClick={() => setActiveIndex(index)}
//               >
//                 <span>{service.title}</span>
//                 {activeIndex === index ? (
//                   <Image src={openArr} alt="openArr" />
//                 ) : (
//                   <Image src={closeArr} alt="closeArr" />
//                 )}
//               </div>
//             ))}
//           </Col>

//           {/* Keep the second column the same size */}
//           <Col xs={12} md={4} className="service-details">
//             <Image src={services[activeIndex].image} alt="Service" className="service-image" />
//             <h3 className="service-description">{services[activeIndex].content}</h3>
//             <p className="service-text">{services[activeIndex].text}</p>
//             <a href="#" className="about-btn">
//               <span>Learn More</span>
//               <Image className="arrow" src={arrow} alt="arrow" />
//             </a>
//           </Col>
//         </Row>
//       </Container>
//     </section>
//   );
// };

// export default HomeServices;







import { useState } from "react";
import openArr from "../../../../public/assets/OpenArrow.png";
import closeArr from "../../../../public/assets/CloseArrow.png";
import arrow from '../../../../public/assets/HoeAboutArrow.png';
import interior from "../../../../public/assets/interior.png";
import exterior from "../../../../public/assets/exterior.png";
import commercial from "../../../../public/assets/commercial.png";
import popcorn from "../../../../public/assets/popcorn.png";
import drywall from "../../../../public/assets/drywall.png";
import ceiling from "../../../../public/assets/ceiling.png";
import { Container, Row, Col } from 'react-bootstrap';
import './HomeServices.css';
import Image from "next/image";

const services = [
  {   
    title: "INTERIOR PAINTING CALGARY", 
    content: "Quality Calgary Interior Painting for Your Needs", 
    text: "Interior painting in Calgary can be a daunting task for many homeowners. It requires a significant amount of time, effort, and attention to detail to achieve a professional finish.", 
    image: interior,
  },
  { 
    title: "EXTERIOR PAINTING CALGARY", 
    content: "Expert Exterior Painting Services", 
    text: "Exterior painting is a crucial step in maintaining and enhancing the appearance of your property. In Calgary, the harsh weather conditions can take a toll on your exteriors, making it essential to choose a durable and high-quality paint.",
    image: exterior,
  },
  { 
    title: "COMMERCIAL PAINTING CALGARY", 
    content: "Top-notch Commercial Painting Solutions", 
    text: "Interior Painting can be a very stressful and frustrating experience. Alberta Colour Painting in Calgary focuses on making the whole process of house painting as easy as possible for you.",
    image: commercial, 
  },
  { 
    title: "POPCORN CEILING REMOVAL CALGARY", 
    content: "Safe and Efficient Ceiling Removal", 
    text: "Popcorn ceilings were a popular trend in the 70's and can often give your home an outdated and old look. Not only do they lack aesthetic appeal, but they can also create a breeding ground for dust and allergens.",
    image: popcorn,
  },
  { 
    title: "DRYWALL MUD & TAPE CALGARY", 
    content: "Flawless Drywall Finishing", 
    text: "Drywall repair and installation are critical aspects of maintaining and enhancing your property.",
    image: drywall, 
  },
  { 
    title: "CEILING TEXTURING CALGARY", 
    content: "Enhance Your Ceilings with Texture", 
    text: "Calgary ceiling texturing is a popular way to add visual interest and texture to a room. In Calgary, there are several options available, including knockdown texturing Calgary",
    image: ceiling,
  },
];

const HomeServices = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="service-menu-container">
      <div className="services-header" style={{backgroundColor:"white"}}>
        <div className="service-heading">
          <h2>Our Services</h2>
          <div className="service-btn">
            <h1>BRINGING COLOUR TO EVERY CORNER OF YOUR HOME AND BUSINESS</h1>
            <button className="explore-btn">Explore Our Services</button>
          </div>
        </div>
      </div>

      <Container className="service-content">
        <Row className="services-wrap">
          {/* Service List Column */}
          <Col xs={12} md={8} className="service-list">
            {services.map((service, index) => (
              <div
                key={index}
                className={`service-item ${activeIndex === index ? "active" : ""}`}
                onClick={() => setActiveIndex(index)}
              >
                <span>{service.title}</span>
                {activeIndex === index ? (
                  <Image src={openArr} alt="openArr" />
                ) : (
                  <Image src={closeArr} alt="closeArr" />
                )}
              </div>
            ))}
          </Col>

          {/* Service Details Column */}
          <Col xs={12} md={4} className="service-details">
            <Image 
              src={services[activeIndex].image} 
              alt="Service" 
              className="service-image" 
               
            />
            <h3 className="service-description">{services[activeIndex].content}</h3>
            <p className="service-text">{services[activeIndex].text}</p>
            <a href="#" className="service-btns">
              <span>Learn More</span>
              <Image className="arrow" src={arrow} alt="arrow" />
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HomeServices;


