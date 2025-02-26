import type React from "react"
import { Form, Button, Container, Row, Col } from "react-bootstrap"

export default function ContactForm() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
  }

  return (
    <Container className="py-5">
      <Row className="align-items-center">
        <Col md={6}>
          <h1 className="text-primary mb-3" style={{ fontSize: "2.5rem", fontWeight: "bold" }}>
            HAVE A PROJECT IN MIND OR NEED A QUOTE?
          </h1>
          <p className="lead">
            Get in touch with our expert painters in Calgary. We'd be happy to help bring your vision to life!
          </p>
        </Col>
        <Col md={6}>
          <div className="bg-white p-4 rounded shadow-sm">
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="Name" className="py-2" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Control type="email" placeholder="Email Address" className="py-2" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Control type="tel" placeholder="Phone Number" className="py-2" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Control as="textarea" rows={4} placeholder="Message" className="py-2" />
              </Form.Group>

              <Button
                variant="primary"
                type="submit"
                className="w-100 py-2"
                style={{ backgroundColor: "#0D47A1", borderColor: "#0D47A1" }}
              >
                Get a Quote
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

