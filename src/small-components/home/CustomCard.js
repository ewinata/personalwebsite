import React from 'react';
import {Button, Container, Row, Col } from 'react-bootstrap';
// Stylesheets
import './CustomCard.css';

function CustomCard({ cardData }) {
    let onclick = generateOnClick(cardData.onClickNewPage, cardData.onClickRoute);
    return (
        <Container fluid className="text-center justify-content-center p-5" data-card-type="custom-card">
            <Row className="align-content-center h-100">
                <Container>
                    <Row>
                        <Col className="p-3">
                            <h1 className="text-white">{cardData.icon}</h1>
                            <h2 className="text-white">{cardData.title}</h2>
                        </Col>
                    </Row>
                    <Row className="p-1">
                        <Col className="p-2">
                            <p className="text-white">{cardData.text}</p>
                        </Col>
                    </Row>
                    <Row className="m-3">
                        <Col>
                            <Button variant="primary" onClick={onclick}>
                                <h3>{cardData.buttonText}</h3>
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </Row>
            
        </Container>
    );
}

/*
*   Generates button onclick function
*/
function generateOnClick(onClickNewPage, onClickRoute) {
    if (onClickNewPage) {
        // Then we link to new page
        return () => window.location.href = onClickRoute;
    } else {
        // Link to div section
        return () => document.getElementById(onClickRoute).scrollIntoView();
    }
}

export default CustomCard;