import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
// Util
import useWindowDimensions from '../util/windowDimensions';
// Stylesheets
import './Resume.css'
// Resume PDF
import resume from '../assets/resume/Ermano_Winata_Resume.pdf';
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function Resume() {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const { width } = useWindowDimensions();
    const [windowWidth, setWindowWidth] = useState(width);
    useEffect(() => {
        if (Math.abs(width - windowWidth) >= 200) {
            setWindowWidth(width);
        }
    }, [width, windowWidth])

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
        setPageNumber(1);
    }

    const style={
        overflowX: 'hidden',
    }

    return(
        <Container fluid className="text-center">
            <Row>
                <h1 className="p-5">Resume</h1>
            </Row>
            <Row>
                <Col style={style}>
                    <Document
                        className="d-flex justify-content-center"
                        file={resume}
                        onLoadSuccess={onDocumentLoadSuccess}
                        onLoadError={console.error}
                    >
                        <Page width={windowWidth-300} pageNumber={pageNumber} />
                    </Document>
                    <p className="p-3">Page {pageNumber} of {numPages}</p>
                </Col>
            </Row>
            <Row>
                <Col className="p-3">
                    <a href={resume} download="resume.pdf">
                        <Button>
                            <h3>Download PDF</h3>
                        </Button>
                    </a>
                </Col>
            </Row>
        </Container>
    );
}

export default Resume;