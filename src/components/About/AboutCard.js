import React from 'react';
import Card from 'react-bootstrap/Card';
import { ImPlay3 } from 'react-icons/im';

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: 'justify' }}>
            Hey there I'm <span className="purple">Julien Conforto </span>
            from <span className="purple"> France.</span>
            <br />I am a junior Front-end developer.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPlay3 /> 3d level design
            </li>
            <li className="about-activity">
              <ImPlay3 /> Skiing
            </li>
            <li className="about-activity">
              <ImPlay3 /> Travelling
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
