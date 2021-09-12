import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faMobile } from '@fortawesome/free-solid-svg-icons';

function Contact() {
    return(
        <Container fluid>
            <Row data-full-screen="yes" className="align-content-center">
                <Col>
                    <Container className="text-center">
                        <Row className="p-3"><Col><h1>Contact me</h1></Col></Row>
                        <Row className="p-3">
                            <Col>
                                <Container data-card-type="custom-card">
                                    <Row className="p-3">
                                        <Col><h2><FontAwesomeIcon icon={faEnvelope} /> ermanowinatawml@gmail.com</h2></Col>
                                    </Row>
                                    <Row className="p-3">
                                        <Col><h2><FontAwesomeIcon icon={faMobile} /> +1 (206) 849-9598</h2></Col>
                                    </Row>
                                    <Row className="p-3">
                                        <Col>
                                            <h2>Note: I prefer to be contacted through email, otherwise I don't mind being contacted through my phone number.</h2>
                                        </Col>
                                    </Row>
                                </Container>
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>
        </Container>
    );
}

export default Contact;