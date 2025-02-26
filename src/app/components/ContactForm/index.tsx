import type React from "react"
import { Form, Button, Container, Row, Col } from "react-bootstrap"
import "./style.css"
export default function ContactForm() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
  }

  return (
    <Container className=" py-sm-5 py-5">
      <Row className="align-items-center">
        <Col md={6}>
          <h1 className="Title mb-3" >
            HAVE A PROJECT IN<br />  MIND OR NEED A <br /> QUOTE?
          </h1>
          <p className="lead " style={{fontWeight: 500 }}>
            Get in touch with our expert painters in Calgary. We'd be <br /> happy to help bring your vision to life!
          </p>
        </Col>
        <Col md={6}>
          <div className="bg-white p-4 rounded " style={{ boxShadow: "rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;"}}>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3 textarea ">
                <Form.Control type="text" placeholder="Name" className="py-2 " />
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
             style={{backgroundColor:"#0D378D" , fontWeight:500}}
                type="submit"
                className="w-100 py-2 "
              
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

