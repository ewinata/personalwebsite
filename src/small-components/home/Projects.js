import React, { useState } from 'react';
import { Container, Row, Col, Button, Nav, Tab } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleLeft, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';
// JSON asset
import projects from "../../assets/projects/projects.json";
// Stylesheets
import './Projects.css';

function Projects() {
    const [projectNumber, setProjectNumber] = useState(0);
    const [activeKey, setActiveKey] = useState("project");
    let cards = generateCards(projectNumber, setProjectNumber, activeKey, setActiveKey);
    const scrollToTop = ()=>document.getElementById('top').scrollIntoView();
    const scrollToCatalogue = ()=>document.getElementById('catalogue').scrollIntoView();
    const scrollToTechnical = ()=>document.getElementById('technical-section').scrollIntoView();

    return (
        <Col className="text-center p-5">
            <Container fluid>
                <Row>
                    <h1 className="p-3">Projects / Experiences</h1>
                </Row>
                <Row>
                    <Col className="p-3">
                        {cards[projectNumber]}
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button onClick={scrollToTop}><h3>Go back to Top</h3></Button>
                    </Col>
                    <Col>
                        <Button onClick={scrollToCatalogue}><h3>Go back to Catalogue</h3></Button>
                    </Col>
                    <Col>
                        <Button onClick={scrollToTechnical}>
                            <h3>Navigate to Tech Section</h3>
                        </Button>
                    </Col>
                </Row>
            </Container>
        </Col>
      
    );
}

/*
*   Projects card
*/
function ProjectCard({ projectData, idx, numProjects, state }) {
    // Generate Settings
    let stackText = "Stack: "
    for (var i = 0; i < projectData.stack.length; i++) {
        stackText = stackText.concat(projectData.stack[i]);
        if (i !== projectData.stack.length-1) {
            stackText = stackText.concat(', ');
        }
    }
    
    /*
    *   These functions and states manipulate parent state to navigate projects
    */
    const [projectNumber, setProjectNumber, activeKey, setActiveKey] = state;
    const handleSelect = (key) => {
        setActiveKey(key);
    }


    const arrowLeftOnClick = () => {
        if (projectNumber !== 0) {
            setProjectNumber(projectNumber-1);
            setActiveKey("project");
        }
    }
    const arrowRightOnClick = () => {
        if (projectNumber !== numProjects-1) {
            setProjectNumber(projectNumber+1);
            setActiveKey("project");
        }
    }

    const img = require(`../../${projectData.imageLocation}`).default;

    return (
        <Container fluid className={`project-${idx+1} my-5 py-0 px-2`}>
            <Tab.Container activeKey={activeKey} onSelect={handleSelect}>
                <Row className="card-border">
                    <Col xs={12} md={3} className="border-right p-5">
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                                <Nav.Link eventKey="project"><h3 className="text-white">Project</h3></Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="description"><h3 className="text-white">Desc</h3></Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="preview"><h3 className="text-white">Preview</h3></Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Container fluid className="my-4 project-nav">
                            <Row className="p-2">
                                <Col>
                                    <h3 data-project-number>Project {idx+1}/{numProjects}</h3>
                                </Col>
                            </Row>
                            <Row className="p-2">
                                <Col>
                                    <h3><FontAwesomeIcon icon={faChevronCircleLeft} onClick={arrowLeftOnClick}/></h3>
                                </Col>
                                <Col>
                                    <h3><FontAwesomeIcon icon={faChevronCircleRight} onClick={arrowRightOnClick}/></h3>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                    <Col xs={12} md={9} className="p-5">
                    <Tab.Content>
                        <Tab.Pane eventKey="project">
                            <Container fluid className="project-tab">
                                <Row className="image-container">
                                    <a href={projectData.company.website}>
                                        <img src={img} data-img-project alt={""}/>
                                    </a>
                                </Row>
                                <Row className="description">
                                    <h2>{projectData.title}</h2>
                                    <h3 className="mb-2 text-muted">{projectData.subtitle}</h3>
                                    <h3 className="p-2">{stackText}</h3>
                                </Row>
                            </Container>
                        </Tab.Pane>
                        <Tab.Pane eventKey="description">
                            <div className="description">
                                <h2 className="p-2">{projectData.description}</h2>
                            </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="preview">
                            <div className="preview">
                                <Container>
                                    {"previews" in projectData ? generatePreviews(projectData.previews) : <h1>No Preview Available</h1>}
                                </Container>
                            </div>
                        </Tab.Pane>
                    </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </Container>
    );
}

/*
*   Generates the list of cards
*/
function generateCards(projectNumber, setProjectNumber, activeKey, setActiveKey) {
    let projectList = projects.projects;
    return projectList.map((project, idx) => 
        <ProjectCard projectData={project} idx={idx} numProjects={projectList.length} 
        state={[projectNumber, setProjectNumber, activeKey, setActiveKey]}/>);
}

/*
*   Generate previews
*/
function generatePreviews(previews) {
    const imgStyle = {
        height: "30vh"
    }
    return (
        [
        <Row>
            <Col>
                <h1 className="p-3">Previews</h1>
            </Col>
        </Row>,
        <Row>
            <Col>
                <Container>
                    <Row>
                        {previews.map(preview => <Col>
                        <img style={imgStyle} src={require(`../../assets/projects/previews/${preview.link}`).default} alt={''}/>
                        <p>{preview.description}</p>
                        </Col>)}
                    </Row>
                </Container>
            </Col>
        </Row>
        ]
    );
}

export default Projects;