import styled from "styled-components";

export const BoxButtons = styled.div`
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