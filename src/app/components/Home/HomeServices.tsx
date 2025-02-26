
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
// import { Container, Row, Col, Button } from 'react-bootstrap';
// import './HomeServices.css';
// import Image from "next/image";

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
//         <div className="service-heading text-center">
//           <h2>Our Services</h2>
//           <div className="service-btn">
//             <h1>BRINGING COLOUR TO EVERY CORNER OF YOUR HOME AND BUSINESS</h1>
//             <Button className="explore-btn">Explore Our Services</Button>
//           </div>
//         </div>
//       </div>
//       <Container className="service-content">
//         <Row className="services-wrap">
//           {/* Service List Column */}
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

//           {/* Service Details Column */}
//           <Col xs={12} md={4} className="service-details">
//             <Image 
//               src={services[activeIndex].image} 
//               alt="Service" 
//               className="service-image" 
//               layout="responsive"
//               width={100} 
//               height={100} 
//             />
//             <h3 className="service-description">{services[activeIndex].content}</h3>
//             <p className="service-text">{services[activeIndex].text}</p>
//             <a href="#" className="service-btns">
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


// 'use-client'
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
import Image from 'next/image';
import { Container, Row, Col, Button } from 'react-bootstrap'; 
import './HomeServices.css'; 

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
    <>
      {/* Heading Section */}
      <section className="service-header bg-white">
  <Container>
    <div className="mb-4">
      <h2 className="text-black">Our Services</h2>
    </div>
    <div className="d-flex flex-column flex-md-row align-items-center">
      <h1 className="mb-4 col-12 col-md-7" style={{ color: "#0D378D" }}>
        BRINGING COLOUR TO EVERY CORNER OF YOUR HOME AND BUSINESS
      </h1>
      <Button 
        variant="primary" 
        className="service-title-btn rounded-pill mt-3 mt-md-0 ml-md-0" // mt-3 adds top margin on smaller screens
      >
        Explore Our Services
      </Button>
    </div>
  </Container>
</section>

<section className="service-menu-container" style={{ backgroundColor: "#111111" }}>
  <Container>
    <Row className="service-content">
      {/* Service List Column */}
      <Col xs={12} md={7} className="service-list mb-4 mb-md-0">
        {services.map((service, index) => (
          <div
            key={index}
            className={`service-item ${activeIndex === index ? "active" : ""}`}
            onClick={() => setActiveIndex(index)}
          >
            <span>{service.title}</span>
            <Image src={activeIndex === index ? openArr : closeArr} alt="toggle arrow" width={24} />
          </div>
        ))}
      </Col>

      {/* Service Details Column */}
      <Col xs={12} md={5} className="service-details mt-5 mt-md-5">
        <Image 
          src={services[activeIndex].image} 
          alt="Service" 
          className="img-fluid mb-3"
        />
        <h3 className="text-white">{services[activeIndex].content}</h3>
        <p className="text-white">{services[activeIndex].text}</p>
        <a href="#" className="d-inline-flex align-items-center service-btns">
          <span>Learn More</span>
          <Image className="ms-2 arrow" src={arrow} alt="arrow" width={20} />
        </a>
      </Col>
    </Row>
  </Container>
</section>

    </>
  );
};

export default HomeServices;
