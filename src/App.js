import React, { useState } from 'react';
import styled from 'styled-components';

function App() {
  const [circles, setCircles] = useState([]);
  const [redoCircles, setRedoCircles] = useState([]);

  function handleAddCircle(e) {
    const { clientX, clientY } = e;
    const newCircle = { x: clientX, y: clientY };
    setCircles([...circles, newCircle]);
    setRedoCircles([]);
  };

  function handleUndo() {
    const lastCircle = circles[circles.length - 1]
    const updateCircles = circles.slice(0, circles.length - 1)
    setCircles(updateCircles)
    setRedoCircles([...redoCircles, lastCircle])
  }

  return (
    <Container>
      <Buttons>
        <button onClick={handleUndo}>Desfazer</button>
      </Buttons>
      <Circles onClick={handleAddCircle}>
        {circles.map((circle, index) => (
          <Circle
            left={circle.x}
            top={circle.y}
            key={index}
          ></Circle>
        ))}
      </Circles>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 500px;
  position: relative;
`

const Circles = styled.div`
  width: 100%;
  height: 100vh;
  background-color: beige;
`

const Circle = styled.div`
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 10px;
  left: ${props => (props.left - 18) + 'px'};
  top: ${props => (props.top - 17) + 'px'};
  background-color: red;
`

const Buttons = styled.div`
  position: absolute;
  z-index: 3;
`

export default App;
