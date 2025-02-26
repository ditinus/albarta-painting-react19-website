"use client"

import { Container, Row, Col, Image } from "react-bootstrap"

const SkilledPainters = () => {
  return (
    <Container className="py-5">
      <Row className="align-items-center">
        <Col md={7} className="position-relative">
          <div
            className="position-absolute top-0 start-0 translate-middle-y"
            style={{ width: "200px", height: "200px", borderRadius: "50%", border: "1px solid #e0e0e0", zIndex: -1 }}
          ></div>
          <h4 className="text-dark mb-2">Our Skilled Painters</h4>
          <h2 className="text-primary fw-bold mb-4" style={{ fontSize: "2rem" }}>
            TRAINED & SKILLED HOUSE PAINTERS
          </h2>
          <ul className="list-unstyled mb-4">
            <li className="mb-2">• We protect your furniture and surrounding areas before painting.</li>
            <li className="mb-2">• Our painters respect your home as if it were their own.</li>
            <li className="mb-2">• We believe in skill and attention to detail, ensuring your satisfaction.</li>
          </ul>
          <p>
            Our commitment to excellence means that every home we paint is treated with care and precision, leaving
            behind a space you'll love.
          </p>
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-C0vVEnNspg4oKsODSAo0IRahafgkxr.png"
            alt="Skilled painter working"
            fluid
            rounded
          />
        </Col>
        <Col md={5}>
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-C0vVEnNspg4oKsODSAo0IRahafgkxr.png"
            alt="Skilled painter working"
            fluid
            rounded
          />
        </Col>
      </Row>
    </Container>
  )
}

export default SkilledPainters

