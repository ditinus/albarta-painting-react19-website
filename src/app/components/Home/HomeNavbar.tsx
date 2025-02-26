import { Navbar, Nav, Container, Row, Col, NavDropdown } from 'react-bootstrap';
import './homeNavbar.css'
import logoIcon from '../../../../public/assets/alberta-colour-painting-logo 1 (1).png';
import phoneIcon from '../../../../public/assets/header-phone-icon.svg'
import Link from 'next/link';
import Image from 'next/image';


const HomeNavbar = () => {
  return (
    <Navbar className="navbar-container" expand="lg">
      <Container fluid>
        <Row className="w-100 align-items-center">
          <Col xs="auto" className="logo">
            <Image src={logoIcon} alt="Alberta Colour Painting" width={150} height={50} style={{ marginTop: "15px" }} />
          </Col>
          <Col className="navbar">
            {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
            <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggle-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto" style={{ backgroundColor: "#0D378D1F", borderRadius: "30px", height: "60px", paddingTop: "9px" }}>
                <Nav.Link as={Link} href="/home" className='mx-5'>Home</Nav.Link>
                <Nav.Link as={Link} href="/aboutus" className='mx-5'>About</Nav.Link>
                <Nav.Link as={Link} href="/#" className='mx-5'>Services</Nav.Link>
                <Nav.Link as={Link} href="/gallery" className='mx-5'>Gallery</Nav.Link>
                <Nav.Link as={Link} href="/#" className='mx-5'>Blog</Nav.Link>
                <Nav.Link as={Link} href="/#" className='mx-5'>Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Col>
          <Col xs="auto" className="contact-info">
            <span className="phone"><Image src={phoneIcon} alt="Phone Icon" width={30} height={30} /></span>
            <span>587-966-6547</span>
            <a href="#" className="book-now">Book Now</a>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
};

export default HomeNavbar;
