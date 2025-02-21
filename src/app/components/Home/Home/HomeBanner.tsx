import arrow from '../../../../public/assets/arrow.svg';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './Homebanner.css'

const HomeBanner = () => {
    return (
        <div className="banner-wrap">
            <div className="banner">
                <Container className="banner-container">
                    <Row className="align-items-center">
                        {/* Banner Text Section */}
                        <Col xs={12} md={8} className="banner-text">
                            <h1>Ready to Transform Your Space?</h1>
                            <p>Whether it’s a fresh coat of paint for your home or business, we’re here to make it happen. Let us bring your vision to life with precision and care.</p>
                        </Col>

                        {/* Button Section */}
                        <Col xs={12} md={4} className="banner-btn d-flex align-items-center justify-content-center">
                            <a href="#" className="about-btn">
                                <span>Schedule a Consultation</span>
                                <Image className="arrow" src={arrow} alt="arrow" />
                            </a>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default HomeBanner



