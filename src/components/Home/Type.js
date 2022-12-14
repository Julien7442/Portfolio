import React from 'react';
import Typewriter from 'typewriter-effect';
import Fade from 'react-reveal/Fade';

function Type() {
  return (
    <Fade left distance="15%" duration={3000}>
      <Typewriter
        options={{
          strings: ['Web Developer', 'JS Developer', 'React Js Developer'],
          autoStart: true,
          loop: true,
          deleteSpeed: 100,
        }}
      />
    </Fade>
  );
}

export default Type;
