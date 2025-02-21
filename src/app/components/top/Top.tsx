import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './top.css';

const Top = () => {
    // The repeated text
    const repeatedText = "Special Discount 20% >>>>>>>>> ";

    return (
        <Container fluid className='top-container'>
            <Row className="d-flex justify-content-center align-items-center top-row">
                <Col
                    className="text-center"
                    style={{
                        color: "#ffffff",
                        fontWeight: 500,
                        fontSize: "16px",
                        fontFamily: "Poppins",
                    }}
                >
                     <div className="scrolling-text">
                        
                        {Array(10).fill(repeatedText).map((_, index) => (
                            <span key={index} className="text-item">
                                {repeatedText}
                            </span>
                        ))}
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Top;
