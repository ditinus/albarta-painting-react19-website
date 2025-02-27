import "./HomeCalgaryPainting.css";
import CalgaryPaintingImage from "../../../../public/assets/Calgary-Painting.png";
import UserSkilled from "../../../../public/assets/userSkilled.png";
import Estimated from "../../../../public/assets/estimated.png";
import LicensedEcoFriendly from "../../../../public/assets/LicensedEcoFriendly.png";
import ReputaionQuality from "../../../../public/assets/ReputaionQuality.png";
import arrow from "../../../../public/assets/arrow.svg";
import { Row, Col, Container } from "react-bootstrap";
import Image from "next/image";

const HomeCalgaryPainting = () => {
  return (
    // <div className="home-container">
    //     <Container fluid style={{ padding: 0 }}>
    //         <Row className="align-items-stretch no-gutters">
    //             {/* Text Section */}
    //             <Col xs={12} md={6} lg={6} xl={6} className="text-section">
    //                 <h1>WE ARE YOUR CALGARY PAINTING COMPANY</h1>
    //                 <p className="text-section-p">
    //                     Alberta Colour Painting is your trusted partner in Calgary, offering detailed estimates and unparalleled painting services. As a leading Calgary painting company, we pride ourselves on our professional and skilled Calgary painters.
    //                 </p>
    //                 <div className="touch-heading">
    //                     <p>Our Touch Of Paint Makes A Difference!</p>
    //                 </div>

    //                 {/* Features (Icons in a single row for md and larger screens, stacked on xs and sm) */}
    //                 <div className="Calgary-Painting">
    //                     <Row className="justify-content-center" style={{ width: "90%" }}>
    //                         <Col xs={12} sm={6} md={3} lg={3} xl={3} className="calgary-Icon">
    //                             <div className="icon">
    //                                 <Image src={Estimated} alt="Estimated" />
    //                             </div>
    //                             <p className="calgary-icon-text">Free Detailed Estimate</p>
    //                         </Col>
    //                         <Col xs={12} sm={6} md={3} lg={3} xl={3} className="calgary-Icon">
    //                             <div className="icon">
    //                                 <Image src={UserSkilled} alt="User Skilled" />
    //                             </div>
    //                             <p className="calgary-icon-text">Skilled Professional Painters</p>
    //                         </Col>
    //                         <Col xs={12} sm={6} md={3} lg={3} xl={3} className="calgary-Icon">
    //                             <div className="icon">
    //                                 <Image src={LicensedEcoFriendly} alt="Licensed Eco Friendly" />
    //                             </div>
    //                             <p className="calgary-icon-text">Licensed, Insured, Eco-Friendly</p>
    //                         </Col>
    //                         <Col xs={12} sm={6} md={3} lg={3} xl={3} className="calgary-Icon">
    //                             <div className="icon">
    //                                 <Image src={ReputaionQuality} alt="Reputation Quality" />
    //                             </div>
    //                             <p className="calgary-icon-text">Reputation For High Quality</p>
    //                         </Col>
    //                     </Row>
    //                 </div>

    //                 {/* Book Button */}
    //                 <div className="book-btn-container">
    //                     <a href="#" className="book-btn">
    //                         <span>Book Your Estimate Today</span>
    //                         <Image className="arrow" src={arrow} alt="arrow" />
    //                     </a>
    //                 </div>
    //             </Col>

    //             {/* Image Section */}
    //             <Col xs={12} md={6} lg={6} xl={6} className="image-section">
    //             <Image className="arrow" src={CalgaryPaintingImage} alt="arrow" />
    //             {/* <img src={CalgaryPaintingImage} alt="Painting" className="responsive-image" /> */}
    //             </Col>
    //         </Row>
    //     </Container>
    // </div>

    <div className="hero-section">
      <div className="container-fluid p-0">
        <div className="row g-0">
          {/* Left Content Section */}
          <div className="col-lg-6 d-flex flex-column justify-content-center text-white p6">
            <h1 className="display-5 fw-bold mb-4 ">
              WE ARE YOUR CALGARY PAINTING COMPANY
            </h1>
            <p className="mb-5">
              Alberta Colour Painting is your trusted partner in Calgary,
              offering detailed estimates and unparalleled painting services. As
              a leading Calgary painting company, we pride ourselves on our
              professional and skilled Calgary painters.
            </p>
            <h2 className="h4 mb-5">OUR TOUCH OF PAINT MAKES A DIFFERENCE!</h2>
            {/* Features Grid */}
            <div className="row g-4 mb-5">
              <div className="col-6 col-md-3 text-center">
                <svg className="feature-icon mb-2" viewBox="0 0 24 24">
                  <path d="M19,4H5C3.89,4,3,4.89,3,6v14c0,1.11,0.89,2,2,2h14c1.11,0,2-0.89,2-2V6C21,4.89,20.11,4,19,4z M19,20H5V6h14V20z M7,8h10v2H7V8z M7,12h7v2H7V12z M7,16h4v2H7V16z" />
                </svg>
                <div className="small">Free Detailed Estimate</div>
              </div>
              <div className="col-6 col-md-3 text-center">
                <svg className="feature-icon mb-2" viewBox="0 0 24 24">
                  <path d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M12,20c-4.41,0-8-3.59-8-8s3.59-8,8-8s8,3.59,8,8S16.41,20,12,20z M9.5,16.5l7-4.5l-7-4.5V16.5z" />
                </svg>
                <div className="small">Skilled Professional Painters</div>
              </div>
              <div className="col-6 col-md-3 text-center">
                <svg className="feature-icon mb-2" viewBox="0 0 24 24">
                  <path d="M12,1L3,5v6c0,5.55,3.84,10.74,9,12c5.16-1.26,9-6.45,9-12V5L12,1z M19,11c0,4.52-2.98,8.69-7,9.93C7.98,19.69,5,15.52,5,11V6.3l7-3.11l7,3.11V11z M7.91,13.07l2.33,2.33L16.09,9.5L14.67,8.08l-4.43,4.43l-0.91-0.91L7.91,13.07z" />
                </svg>
                <div className="small">Licensed Insured Eco-Friendly</div>
              </div>
              <div className="col-6 col-md-3 text-center">
                <svg className="feature-icon mb-2" viewBox="0 0 24 24">
                  <path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z" />
                </svg>
                <div className="small">Reputation For High Quality</div>
              </div>
            </div>
            <div>
              <button className="cta-button btn text-white">
                Book Your Estimate Today
                <svg
                  className="ms-2"
                  width={20}
                  height={20}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
          {/* Right Image Section */}
          <div className="col-lg-6">
            <Image className="arrow" src={CalgaryPaintingImage} alt="arrow" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCalgaryPainting;
