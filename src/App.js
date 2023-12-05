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

  function handleUndoCircle() {
    const lastCircle = circles[circles.length - 1]
    const updateCircles = circles.slice(0, circles.length - 1)
    if (lastCircle) {
      setCircles(updateCircles)
      setRedoCircles([...redoCircles, lastCircle])
    }
  }

  function handleRedoCircle() {
    const lastCircle = redoCircles[redoCircles.length - 1]
    const updateCircles = redoCircles.slice(0, redoCircles.length - 1)
    if (lastCircle) {
      setCircles([...circles, lastCircle])
      setRedoCircles(updateCircles)
    }
  }

  return (
    <Container>
      <Buttons>
        <button onClick={handleUndoCircle}>Desfazer</button>
        <button onClick={handleRedoCircle}>Resfazer</button>
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
  background-color: #cccccc;
  position: relative;
`

const Circles = styled.div`
  width: 100%;
  height: 100vh;
`

const Circle = styled.div`
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 10px;
  left: ${props => (props.left - 18) + 'px'};
  top: ${props => (props.top - 17) + 'px'};
  background-color: #2c8544;
`

const Buttons = styled.div`
  position: absolute;
  bottom: 70px;
  left: 50%;
  transform: translateX(-50%);
  width: 300px;
  display: flex;
  justify-content: space-between;
  z-index: 3;
  button {
    width: 49%;
    height: 50px;
    border-radius: 10px;
    border: 1px solid #000000;
    background-color: #18c948;
    color: #ffffff;
    font-weight: 700;
    cursor: pointer;
  }
`

export default App;
