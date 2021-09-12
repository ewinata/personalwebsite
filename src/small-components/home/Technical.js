import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
// JSON Assets
import stack from '../../assets/stack/stack.json';

function Technical() {
  let languagesList = stack['Languages'];
  let frameworksList = stack['Frameworks/Libraries'];
  return (
    <Container fluid>
        <Row>
            <h1 className="p-3"><b>Technology Stacks</b></h1>
        </Row>
        <Row>
            <Col>
              <Container data-card-type="custom-card">
                <h2 className="p-3">Programming Languages</h2>
                <ul>
                  {languagesList.map(language => <li><h3 className="p-1">{language}</h3></li>)}
                </ul>
              </Container>
            </Col>
            <Col>
              <Container data-card-type="custom-card">
                <h2 className="p-3">Frameworks/Libraries</h2>
                <ul>
                  {frameworksList.map(language => <li><h3 className="p-1">{language}</h3></li>)}
                </ul>
              </Container>
            </Col>
        </Row>
    </Container>  
  );
}


export default Technical;