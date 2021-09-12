import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
// Images
import profilePic from '../../images/profile-2.jpg';
// JSON asset
import profile from '../../assets/profile/profile.json';
// Stylesheets
import './Background.css'

function Background() {
    const scrollToTop = () => document.getElementById('top').scrollIntoView();
    const profileMap = profile.profile;
    let profileList = [];
    for (const [key, value] of Object.entries(profileMap)) {
        profileList.push(<Row><Col><h3 className="p-2 text-white">{`${transformKey(key)}: ${value}`}</h3></Col></Row>);
    }
    return(
        <Container fluid>
            <Row>
                <Col className="p-5">
                    <h1>Background / Profile</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Container fluid data-card-type="custom-card" className="w-75 p-3">
                        <Row>
                            <Col className="d-flex align-items-center">
                                <Container>
                                    {profileList}
                                </Container>
                            </Col>
                            <Col className="d-flex align-items-center">
                                <Container fluid>
                                    <Row>
                                        <Col>
                                            <img src={profilePic} className="img-responsive" data-bg-image alt={''}/>
                                        </Col>
                                    </Row>
                                </Container>
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>
            <Row>
                <Col className="p-5">
                    <Button onClick={scrollToTop}>
                        <h3>Go back to top</h3>
                    </Button>
                </Col>
            </Row>
        </Container>
    );
}

/*
*   Transfroms the string 'key' into
*   wanted format
*/
function transformKey(key) {
    let strArray = key.split('_');
    let resultString = '';
    strArray.forEach((string) => resultString += makeFirstCharUpper(string) + ' ');
    return resultString.slice(0, -1);
}

/*
*   Makes first character uppercase
*/
function makeFirstCharUpper(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export default Background;