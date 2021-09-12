import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFontAwesome, faGithub, faLinkedin, faReact, faBootstrap } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    const borderTopStyle = {
        borderTop: 'solid',
        borderTopColor: 'cornflowerblue',
        borderWidth: '1px'
    }
    return(
        <Container fluid style={borderTopStyle} className="text-center">
            <Row className="p-3 d-flex justify-content-center">
                <Col className="col-auto">
                    <a data-text-decoration-none href="https://github.com/ewinata"><h3><FontAwesomeIcon icon={faGithub} /> <p>ewinata</p></h3></a>
                </Col>
                <Col className="col-auto">
                    <a data-text-decoration-none href="https://www.linkedin.com/in/ermanowinata/"><h3><FontAwesomeIcon icon={faLinkedin} /> <p>ermanowinata</p></h3></a>
                </Col>
            </Row>
            <Row className="p-3">
                <Col>
                    <h3>Website made using: <FontAwesomeIcon icon={faReact}/> React, <FontAwesomeIcon icon={faBootstrap} /> Bootstrap</h3>
                    <h3>Free Icons: <FontAwesomeIcon icon={faFontAwesome} /> FontAwesome</h3>
                    <h3>Website icon made by <a href="https://www.flaticon.com/authors/chattapatk" title="Chattapat.k">Chattapat.k</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></h3>
                </Col>
            </Row>
        </Container>
    );
}

export default Footer;