import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
// JSON Assets
import hobbies from '../../assets/hobbies/hobbies.json';

function Hobbies() {
    /*
    *   These state and functions handle the selection
    *   between hobbies or interests
    */
    const [pageOption, setPageOption] = useState(true);
    const changeToHobbies = () => {
        if (pageOption !== true) {
            setPageOption(true);
        }
    }
    const changeToInterests = () => {
        if (pageOption !== false) {
            setPageOption(false);
        }
    }
    const activeStyle = {
        background: "#73C2FB",
        color: "#f5f5f5",
        borderRadius: "0.5rem",
        padding: "0.5rem"
    }
    const nonActiveStyle = {
        padding: "0.5rem"
    }
    const getHobbiesStyle = () => {
        if (pageOption === true) {
            return activeStyle;
        }
        return nonActiveStyle
    }
    const getInterestsStyle = () => {
        if (pageOption === false) {
            return activeStyle;
        }
        return nonActiveStyle
    }
    /*
    *   Function to go to next section
    */
   const scrollToBackground = ()=>document.getElementById('background').scrollIntoView();

    return(
        <Container fluid>
            <Row className="p-5 m-5 justify-content-center">
                <Col className="col-auto">
                    <h2 onClick={changeToHobbies} style={getHobbiesStyle()}>Hobbies</h2>
                </Col>
                <Col className="col-auto">
                    <h2 onClick={changeToInterests} style={getInterestsStyle()}>Interests</h2>
                </Col>
            </Row>
            <Row>
                <Col>
                    {pageOption === true ? getHobbies() : getInterests()}
                </Col>
            </Row>
            <Row className="p-5">
                <Col>
                    <Button onClick={scrollToBackground}><h3>Next Section- Background/Profile</h3></Button>
                </Col>
            </Row>
        </Container>
    );
}

function getHobbies() {
    let hobbiesList = [];
    for (const [key, value] of Object.entries(hobbies.hobbies)) {
        hobbiesList.push(<Row>
            <Col>
                <h2 className="p-2">{key}</h2>
                <p className="p-2">{value}</p>
            </Col>
            </Row>);
    }
    return (
        <Container>
            {hobbiesList}
        </Container>
    );
}

function getInterests() {
    let interestsList = [];
    for (const [key, value] of Object.entries(hobbies.interests)) {
        interestsList.push(<Row>
            <Col>
                <h2 className="p-2">{key}</h2>
                <p className="p-2">{value}</p>
            </Col>
            </Row>);
    }
    return (
        <Container>
            {interestsList}
        </Container>
    );
}

export default Hobbies;