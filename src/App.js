import React, { useState } from 'react';
import styled from 'styled-components';

function App() {
  const [circles, setCircles] = useState([]);
  const [redoCircles, setRedoCircles] = useState([]);

  function handleAddCircle(e) {
    console.log(e)
    const { clientX, clientY } = e;
    const newCircle = { x: clientX, y: clientY };
    setCircles([...circles, newCircle]);
    setRedoCircles([]);
  };

  console.log(circles)

  return (
    <Container onClick={handleAddCircle}>
      {circles.map((circle, index) => (
        <Circle
          left={circle.x}
          top={circle.y}
          key={index}
        ></Circle>
      ))}
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 500px;
  position: relative;
`

const Circle = styled.div`
  position: absolute;
  width: 30px;
  height: 30px;
  border-radius: 15px;
  left: ${props => (props.left - 21) + 'px'};
  top: ${props => (props.top - 19) + 'px'};
  background-color: red;
`

export default App;
