import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
// JSON asset
import education from "../../assets/education/education.json";
// Small-components
import EducationCard from './EducationCard';

function Education() {
    let cards = generateCards()
    const scrollToHobbies = ()=>document.getElementById('hobbies').scrollIntoView();
    return (
        <Container fluid>
            <Row>
                <h1 className="p-3">Education</h1>
                <h3 className="p-3">I started my education as a Computer Science major in North Seattle College,
                    where I managed to transfer to UCLA Computer Science. After a few quarters in UCLA, I transferred majors
                    to Mathematics of Computation to expand my career options. I enjoyed my time taking Upper Division Mathematics,
                    but after graduating I decided to refocus my career to Computer Science (i.e. Software).
                </h3>
            </Row>
            <Row>
                {cards.map(card=><Col xs={6}>{card}</Col>)}
            </Row>
            <Row className="p-3">
                <Col>
                    <Button onClick={scrollToHobbies}><h3>Next Section- Hobbies/Interests</h3></Button>
                </Col>
            </Row>
        </Container>
    );
}

/*
*   This generates the education cards
*/
function generateCards() {
    const educationList = education.education;
    return educationList.map(educationData => <EducationCard educationData={educationData} />);
}

export default Education;