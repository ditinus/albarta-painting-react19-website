
"use client"

import { Row, Col, Card } from 'react-bootstrap';
import about from '../../../../public/assets/decorGallery.png';
import arrow from '../../../../public/assets/HoeAboutArrow.png';
import './HomeAboutUs.css';
import Image from 'next/image';

const AboutSection = () => {
  return (
    <section className="about-us">
      <div className="about-container">
        <Row className="align-items-center">
          {/* Image Section */}
          <Col xs={12} md={7} className="about-image">
            <div className="experience-tag">10 Years of Experience</div>
            <Image src={about} alt="Luxury Living Room" layout="responsive" />
          </Col>

          {/* Content Section */}
          <Col xs={12} md={5} className="about-content mt-3">
            <Card className="about-card">
              <Card.Body>
                <Card.Title as="h2">About Us</Card.Title>
                <Card.Subtitle as="h3" className="mb-3 card-title title-width">
                  EXPERTS IN COLOURING YOUR WORLD
                </Card.Subtitle>
                <Card.Text className='card-text'>
                  Welcome to Alberta Colour Painting, your trusted partner for professional interior and exterior painting services in Calgary.
                  Our team, featuring the finest Calgary painters, ensures every stroke reflects our commitment to beautifying your space
                  with precision and quality. Whether you’re looking for expert Calgary interior painters or need comprehensive services
                  from a top Calgary painting company, we’ve got you covered. Our interior painting services are tailored to transform your
                  living spaces with elegance and style.
                </Card.Text>
                <div>
                  <a href="#" className="about-btns">
                    <span>Learn More</span>
                    <Image className="card-btn-arrow" src={arrow} alt="arrow" />
                  </a>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default AboutSection;
