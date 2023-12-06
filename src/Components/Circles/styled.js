import styled from "styled-components"

const correctPosition = 11

export const Circles = styled.div`
  width: 100vw;
  height: 100vh;
`

export const Circle = styled.div`
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 10px;
  left: ${props => (props.left - correctPosition) + 'px'};
  top: ${props => (props.top - correctPosition) + 'px'};
  background-color: #2c8544;
`