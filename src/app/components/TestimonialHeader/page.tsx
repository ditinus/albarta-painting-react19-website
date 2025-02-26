"use client";

import { Container, Row, Col, Button } from "react-bootstrap";

export default function TestimonialHeader({
  title = "What Our Clients Say",
  subtitle = "REAL REVIEWS FROM SATISFIED CUSTOMERS",
  buttonText = "Read More Reviews",
  buttonUrl = "#",
  bgColor = "#0D47A1",
  textColor = "",

  buttonStyle = {},
}) {
  return (
    <Container className="py-5">
      <Row className="align-items-center">
        <Col xs={12} md={8}>
          <div>
            <h4 className={`${textColor} mb-2`}>{title}</h4>
            <h2
              className={` mb-0   text-uppercase  `}
              style={{ fontSize: "2rem", color: "#0D378D" }}
            >
              {subtitle}
            </h2>
          </div>
        </Col>
        <Col xs={12} md={4} className="text-md-end mt-3 mt-md-0">
          <Button
            variant="primary"
            size="lg"
            className=" px-5 py-2"
            style={{
              backgroundColor: bgColor,
              borderColor: bgColor,
              ...buttonStyle,
              borderRadius: "50px",
            }}
            href={buttonUrl}
          >
            {buttonText}
          </Button>
        </Col>
      </Row>
    </Container>
  );
}
