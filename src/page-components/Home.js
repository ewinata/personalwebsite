import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode, faChild, faDragon } from '@fortawesome/free-solid-svg-icons';
// Images
import profile from '../images/profile.jpg';
// Stylesheets
import './Home.css';
// Small Components
import CustomCard from '../small-components/home/CustomCard';
import Projects from '../small-components/home/Projects';
import Technical from '../small-components/home/Technical';

function Home() {
    return (
        <Container fluid>
            <Row className="px-3 pb-3 align-content-center" id="top-section" data-full-screen="yes">
                <Welcome />
                <ProfileImage />
            </Row>
            <Row data-full-screen="yes" data-bg-skyblue="yes" id="catalogue" className="align-items-center">
                <Catalogue />
            </Row>
            <Row data-full-screen="yes" id="project-section" className="align-items-center">
                <Projects />
            </Row>
            <Row data-full-screen="yes" data-bg-skyblue="yes" id="technical-section" className="align-items-center">
                <Col className="text-center">
                    <Technical />
                </Col> 
            </Row>
        </Container>
    );
}

/*
*   This is the Welcome section
*/
function Welcome() {
    const scrollToCatalogue = () => document.getElementById("catalogue").scrollIntoView();
    return (
        <Col xs={12} lg={6} className="p-2 d-flex align-items-center">
            <Container fluid>
                <Row>
                    <Col>
                        <h1 className="p-2"><b></b>Welcome to my Home Page.</h1>
                        <p className="p-4" >Hi, my name is Ermano Winata. I recently graduated from UCLA as a Mathematics of Computation major,
                            and I am currently focused on a career in Software. My curiosity in technology is what drives me into Software and hacking.
                            My main focus is on Front-End Development, but I enjoy increasing my pool of knowledge
                            hence why I also maintain focus on Back-End, and Mobile App Development. 
                        </p>
                        <h3 className="p-2">Feel free to navigate.</h3>
                    </Col>
                </Row>
                <Row className="align-content-center">
                    <Col>
                        <Button onClick={scrollToCatalogue}>
                            <h3>Click here to start</h3>
                        </Button>
                    </Col>
                </Row>
            </Container>
        </Col>
    );
}

/*
*   This is the Profile image section
*/
function ProfileImage() {
    return (
        <Col xs={12} lg={6} className="p-2 d-flex align-items-center">
            <Container fluid>
                <Row className="align-content-center">
                    <Col>
                        <img src={profile} className="img-responsive"  alt={""}/>
                    </Col>
                </Row>
            </Container>
        </Col>
    );
}

/*
*   This is the Catalogue section
*/
function Catalogue() {
    let cards = generateCards();
    return(
        <Col className="text-center">
            <Container fluid >
                <Row>
                    <Col className="pb-5">
                        <h1><b>Catalogue</b></h1>
                    </Col>
                </Row>
                <Row>
                    {cards.map(data => <Col xs={12} md={6} xxl={4} className="px-5 pt-5 d-flex justify-content-center"><CustomCard cardData={data}/></Col>)}
                </Row>
            </Container>
        </Col>
    );
}

/*
*   Generates the list of cards
*/
function generateCards() {
    const cardDataList = [
        {
            title: "Projects",
            text: "A list of project experiences and preview of project if available.",
            buttonText: "Navigate to Projects",
            icon: <FontAwesomeIcon icon={faDragon} />,
            onClickNewPage: false,
            onClickRoute: 'project-section',
        },
        {
            title: "Technology Stacks",
            text: "More about my experience with Frameworks, Libraries, and Languages.",
            buttonText: "Navigate to Tech Section",
            icon: <FontAwesomeIcon icon={faLaptopCode} />,
            onClickNewPage: false,
            onClickRoute: 'technical-section',
        },
        {
            title: "About",
            text: "Some extra stuff about me and my background that are not too technical.",
            buttonText: "Navigate to About",
            icon: <FontAwesomeIcon icon={faChild} />,
            onClickNewPage: true,
            onClickRoute: '/about',
        }
    ];

    return cardDataList.map(cardData => cardData);
}

export default Home;