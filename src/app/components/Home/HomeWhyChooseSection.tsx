import { Row, Col } from 'react-bootstrap';
import QualityWorkmanship from '../../../../public/assets/OualityWorkManship.png';
import QualityMaterials from '../../../../public/assets/QualityMaterial.png';
import ExperiencedTeam from '../../../../public/assets/Experienced Team.png';
import CustomerSatisfaction from '../../../../public/assets/Customer Satifaction.png';
import './HomeWhyChooseSection.css';


import Image from 'next/image'

const HomeWhyChooseSection = () => {
  return (
    <section className="why-choose-us">
      <h2>WHY CHOOSE US?</h2>
      <div className="features">
        <Row>
          {/* Quality Workmanship Feature */}
          <Col xs={12} sm={6} md={3} className="feature">
            <div className="icon">
              <Image src={QualityWorkmanship} alt="Quality Workmanship"  />
            </div>
            <h3>Quality Workmanship</h3>
            <p>We use only premium materials and top-notch techniques.</p>
          </Col>

          {/* Quality Materials Feature */}
          <Col xs={12} sm={6} md={3} className="feature">
            <div className="icon">
              <Image src={QualityMaterials} alt="Quality Materials"  />
            </div>
            <h3>Quality Materials</h3>
            <p>We work with trusted, high-quality materials that stand the test of time.</p>
          </Col>

          {/* Experienced Team Feature */}
          <Col xs={12} sm={6} md={3} className="feature">
            <div className="icon">
              <Image src={ExperiencedTeam} alt="Experienced Team"  />
            </div>
            <h3>Experienced Team</h3>
            <p>Our experts have over a decade of experience.</p>
          </Col>

          {/* Customer Satisfaction Feature */}
          <Col xs={12} sm={6} md={3} className="feature">
            <div className="icon">
              <Image src={CustomerSatisfaction} alt="Customer Satisfaction"  />
            </div>
            <h3>Customer Satisfaction</h3>
            <p>Your satisfaction is our priority, and we ensure the job is done right the first time.</p>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default HomeWhyChooseSection;
