import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Pulse from 'react-reveal/Pulse';
import {
  SiVisualstudiocode,
  SiPostman,
  SiHeroku,
  SiShopify,
  SiWordpress,
} from 'react-icons/si';
function Toolstack() {
  return (
    <Pulse bottom duration={3000}>
      <Row style={{ justifyContent: 'center', paddingBottom: '50px' }}>
        <Col xs={4} md={2} className="tech-icons">
          <SiVisualstudiocode />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiPostman />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiHeroku />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiShopify />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiWordpress />
        </Col>
      </Row>
    </Pulse>
  );
}

export default Toolstack;
