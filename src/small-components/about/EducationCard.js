import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
// Stylesheets
import './EducationCard.css'

function EducationCard(props) {
    const educationData = props.educationData;
    return(
        <a data-text-decoration-none href={educationData.website}>
            <Container fluid data-education-card data-card-type="custom-card" className="p-5">
                <Row>
                    <Col>
                        <Container className="pb-5">
                            <img data-education-img src={educationData.imageLink} alt={''} />
                        </Container>
                    </Col>
                </Row>
                <Row>
                    <h2 className="p-2">{educationData.school}</h2>
                    <h3>{educationData.degree}</h3>
                    <h3>{educationData.major}</h3>
                    <h3>GPA: {educationData.gpa}</h3>
                    <h3>Graduation Year: {educationData.graduation_year}</h3>
                </Row>
            </Container>
        </a>
    );
}

export default EducationCard;