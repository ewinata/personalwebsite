import React from 'react';
import { Container, Row, Col, Carousel, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmile } from '@fortawesome/free-regular-svg-icons';
// Stylesheets
import './About.css';
// Small-components
import Education from '../small-components/about/Education';
import Hobbies from '../small-components/about/Hobbies';
import Background from '../small-components/about/Background';

function About() {
    const scrollToEducation = ()=>document.getElementById('education').scrollIntoView();
    const scrollToHobbies = ()=>document.getElementById('hobbies').scrollIntoView();
    const scrollToBackground = ()=>document.getElementById('background').scrollIntoView();

    return(
        <Container fluid>
            <Row data-fit-height className="text-center">
                <Col className="p-4 align-self-center">
                    <Container fluid>
                        <Row>
                            <h1 className="p-3">Welcome to my About Page.</h1>
                        </Row>
                        <Row>
                            <p className="p-3">
                            This section is about my education, interests, and some other extra stuff.
                            You may skip this section if you are not interested <FontAwesomeIcon icon={faSmile} />
                            </p>
                        </Row>
                        <Row>
                            <p className="p-3">Use the carousel to navigate or continue scrolling.</p>
                        </Row>
                    </Container>
                </Col>
            </Row>
            <Row>
                <Carousel className="p-0">
                    <Carousel.Item>
                        <img className="d-block w-100" 
                        src={"https://s3.amazonaws.com/cms.ipressroom.com/173/files/20216/60f8edf32cfac2723398098e_Royce_Hall/Royce_Hall_hero.jpg"} 
                        alt={""} />
                        <Carousel.Caption>
                            <h1>Education</h1>
                            <h3><b>My educational background.</b></h3>
                            <Button className="m-3" onClick={scrollToEducation}><h3>Click Here to navigate</h3></Button>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" 
                        src={"https://pbs.twimg.com/media/EZdU_SPXgAEsjre.jpg"} 
                        alt={""} />
                        <Carousel.Caption>
                            <h1>Hobbies/Interests</h1>
                            <h3><b>A list of current hobbies and interests I do
                                during my spare time.</b>
                            </h3>
                            <Button className="m-3" onClick={scrollToHobbies}><h3>Click Here to navigate</h3></Button>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" 
                        src={"https://wallpaperaccess.com/full/1672438.jpg"} 
                        alt={""} />
                        <Carousel.Caption>
                            <h1>Background</h1>
                            <h3><b>My profile and background.</b></h3>
                            <Button className="m-3" onClick={scrollToBackground}><h3>Click Here to navigate</h3></Button>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Row>
            <Row id="education" data-bg-skyblue="yes" className="align-content-center text-center" data-full-screen="yes">
                <Col>
                    <Education />
                </Col>
            </Row>
            <Row id="hobbies" data-full-screen="yes" className="p-5 text-center">
                <Col>
                    <Hobbies />
                </Col>
            </Row>
            <Row id="background" data-full-screen="yes" className="align-content-center text-center" data-bg-skyblue="yes">
                <Col>
                    <Background />
                </Col>
            </Row>
        </Container>
    );
}

export default About;