// import { Image } from 'react-bootstrap';
// import about from '../../assets/decorGallery.png';
// import arrow from '../../assets/HoeAboutArrow.png';
// import './HomeAboutUs.css'

// const AboutSection = () => {
//     return (
//         <section className="about-us">
//         <div className="about-container">
//             <div className="about-image">
//                 <div className="experience-tag">10 Years of Experience</div>
//                 <Image src={about} alt="Luxury Living Room" />
//             </div>
//             <div className="about-content">
//                 <h2>About Us</h2>
//                 <h3>EXPERTS IN COLOURING YOUR WORLD</h3>
//                 <p>
//                     Welcome to Alberta Colour Painting, your trusted partner for professional interior and exterior painting services in Calgary.
//                     Our team, featuring the finest Calgary painters, ensures every stroke reflects our commitment to beautifying your space 
//                     with precision and quality. Whether you’re looking for expert Calgary interior painters or need comprehensive services 
//                     from a top Calgary painting company, we’ve got you covered. Our interior painting services are tailored to transform your 
//                     living spaces with elegance and style.
//                 </p>
//                 <div>
//                   <a href="#" className="about-btn">
//                     <span>Learn More</span>
//                     <Image className="arrow" src={arrow} alt="arrow" />
//                   </a>
                  
//                 </div>
//             </div>
//         </div>
//     </section>

//     )
// }

// export default AboutSection;




import { Row, Col,Card, Image } from 'react-bootstrap';
import about from '../../assets/decorGallery.png';
import arrow from '../../assets/HoeAboutArrow.png';
import './HomeAboutUs.css';

const AboutSection = () => {
  return (
    <section className="about-us">
      <div className="about-container">
        <Row className="g-0">
          {/* About Image Section */}
          <Col xs={12} md={6} className="about-image">
            <div className="experience-tag">10 Years of Experience</div>
            <Image src={about} alt="Luxury Living Room" fluid />
          </Col>

          {/* About Content Section */}
          {/* <Col xs={12} md={6} className="about-content">
            <h2>About Us</h2>
            <h3>EXPERTS IN COLOURING YOUR WORLD</h3>
            <p>
              Welcome to Alberta Colour Painting, your trusted partner for professional interior and exterior painting services in Calgary.
              Our team, featuring the finest Calgary painters, ensures every stroke reflects our commitment to beautifying your space 
              with precision and quality. Whether you’re looking for expert Calgary interior painters or need comprehensive services 
              from a top Calgary painting company, we’ve got you covered. Our interior painting services are tailored to transform your 
              living spaces with elegance and style.
            </p>
            <div>
              <a href="#" className="about-btn">
                <span>Learn More</span>
                <Image className="arrow" src={arrow} alt="arrow" />
              </a>
            </div>
          </Col> */}
          <Col xs={12} md={6} className="about-content">
            <Card className="about-card">
              <Card.Body>
                <Card.Title as="h2">About Us</Card.Title>
                <Card.Subtitle as="h3" className="mb-3 text-muted">
                  EXPERTS IN COLOURING YOUR WORLD
                </Card.Subtitle>
                <Card.Text>
                  Welcome to Alberta Colour Painting, your trusted partner for professional interior and exterior painting services in Calgary.
                  Our team, featuring the finest Calgary painters, ensures every stroke reflects our commitment to beautifying your space
                  with precision and quality. Whether you’re looking for expert Calgary interior painters or need comprehensive services
                  from a top Calgary painting company, we’ve got you covered. Our interior painting services are tailored to transform your
                  living spaces with elegance and style.
                </Card.Text>
                <div>
                  <a href="#" className="about-btn">
                    <span>Learn More</span>
                    <Image className="arrow" src={arrow} alt="arrow" />
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
