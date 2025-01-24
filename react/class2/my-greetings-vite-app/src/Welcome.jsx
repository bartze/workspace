import React from 'react';

const Welcome = (props) => {
  return (
    <h2>
      Hola {props.name}, bienvenido al curso de {props.course}
    </h2>
  );
};

export default Welcome;

