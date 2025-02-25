import './HomeCalgaryPainting.css';
import CalgaryPaintingImage from '../../../../public/assets/Calgary-Painting.png';
import UserSkilled from '../../../../public/assets/userSkilled.png';
import Estimated from '../../../../public/assets/estimated.png';
import LicensedEcoFriendly from '../../../../public/assets/LicensedEcoFriendly.png';
import ReputaionQuality from '../../../../public/assets/ReputaionQuality.png';
import arrow from '../../../../public/assets/arrow.svg';
import { Row, Col, Container } from 'react-bootstrap';
import Image from 'next/image';

const HomeCalgaryPainting = () => {
    return (
        <div className="home-container">
            <Container fluid style={{ padding: 0 }}>
                <Row className="align-items-stretch no-gutters">
                    {/* Text Section */}
                    <Col xs={12} md={6} lg={6} xl={6} className="text-section">
                        <h1>WE ARE YOUR CALGARY PAINTING COMPANY</h1>
                        <p className="text-section-p">
                            Alberta Colour Painting is your trusted partner in Calgary, offering detailed estimates and unparalleled painting services. As a leading Calgary painting company, we pride ourselves on our professional and skilled Calgary painters.
                        </p>
                        <div className="touch-heading">
                            <p>Our Touch Of Paint Makes A Difference!</p>
                        </div>

                        {/* Features (Icons in a single row for md and larger screens, stacked on xs and sm) */}
                        <div className="Calgary-Painting">
                            <Row className="justify-content-center" style={{ width: "90%" }}>
                                <Col xs={12} sm={6} md={3} lg={3} xl={3} className="calgary-Icon">
                                    <div className="icon">
                                        <Image src={Estimated} alt="Estimated" />
                                    </div>
                                    <p className="calgary-icon-text">Free Detailed Estimate</p>
                                </Col>
                                <Col xs={12} sm={6} md={3} lg={3} xl={3} className="calgary-Icon">
                                    <div className="icon">
                                        <Image src={UserSkilled} alt="User Skilled" />
                                    </div>
                                    <p className="calgary-icon-text">Skilled Professional Painters</p>
                                </Col>
                                <Col xs={12} sm={6} md={3} lg={3} xl={3} className="calgary-Icon">
                                    <div className="icon">
                                        <Image src={LicensedEcoFriendly} alt="Licensed Eco Friendly" />
                                    </div>
                                    <p className="calgary-icon-text">Licensed, Insured, Eco-Friendly</p>
                                </Col>
                                <Col xs={12} sm={6} md={3} lg={3} xl={3} className="calgary-Icon">
                                    <div className="icon">
                                        <Image src={ReputaionQuality} alt="Reputation Quality" />
                                    </div>
                                    <p className="calgary-icon-text">Reputation For High Quality</p>
                                </Col>
                            </Row>
                        </div>

                        {/* Book Button */}
                        <div className="book-btn-container">
                            <a href="#" className="book-btn">
                                <span>Book Your Estimate Today</span>
                                <Image className="arrow" src={arrow} alt="arrow" />
                            </a>
                        </div>
                    </Col>

                    {/* Image Section */}
                    <Col xs={12} md={6} lg={6} xl={6} className="image-section">
                    <Image className="arrow" src={CalgaryPaintingImage} alt="arrow" />
                    {/* <img src={CalgaryPaintingImage} alt="Painting" className="responsive-image" /> */}
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default HomeCalgaryPainting;
