import { Row, Col, Image } from 'react-bootstrap';
import './homeBadges.css';
import google from '../../../../public/assets/Group 9.png';
import bbb from '../../../../public/assets/Group.png';
import CleverCanadian from '../../../../public/assets/CleverCanadian 1.png';
import HomeStars from '../../../../public/assets/homestar.png';
import best2023 from '../../../../public/assets/best-of-the-best-homestars-award-winner-2023-black-version 1 (1).png';
import best2024 from '../../../../public/assets/best-of-the-best-homestars-award-winner-2024-black-version 1.png';

const HomeBadges = () => {
  return (
    <div className="badge-container">
      <Row className="justify-content-center">
        <Col xs={6} sm={4} md={3} lg={2} className="mb-3 d-flex justify-content-center">
          <Image src={google} alt="Google 4.9 Rating" fluid />
        </Col>
        <Col xs={6} sm={4} md={3} lg={2} className="mb-3 d-flex justify-content-center">
          <Image src={bbb} alt="BBB Accredited" fluid />
        </Col>
        <Col xs={6} sm={4} md={3} lg={2} className="mb-3 d-flex justify-content-center">
          <Image src={CleverCanadian} alt="Clever Canadian" fluid />
        </Col>
        <Col xs={6} sm={4} md={3} lg={2} className="mb-3 d-flex justify-content-center">
          <Image src={HomeStars} alt="HomeStars Verified" fluid />
        </Col>
        <Col xs={6} sm={4} md={3} lg={2} className="mb-3 d-flex justify-content-center">
          <Image src={best2023} alt="Best of Best 2023" fluid />
        </Col>
        <Col xs={6} sm={4} md={3} lg={2} className="mb-3 d-flex justify-content-center">
          <Image src={best2024} alt="Best of Best 2024" fluid />
        </Col>
      </Row>
    </div>
  );
};

export default HomeBadges;
