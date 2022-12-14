import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Pulse from 'react-reveal/Pulse';

import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiCss3,
  DiGit,
  DiHtml5,
} from 'react-icons/di';
function Techstack() {
  return (
    <Pulse bottom duration={3000}>
      <Row style={{ justifyContent: 'center', paddingBottom: '50px' }}>
        <Col xs={4} md={2} className="tech-icons">
          <DiJavascript1 />
        </Col>

        <Col xs={4} md={2} className="tech-icons">
          <DiNodejs />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiReact />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiMongodb />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiCss3 />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiGit />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiHtml5 />
        </Col>
      </Row>
    </Pulse>
  );
}

export default Techstack;
