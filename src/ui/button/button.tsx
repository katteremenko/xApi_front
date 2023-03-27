import styled from "styled-components";

export const Button = styled.button`
  cursor: pointer;
  padding: 10px 20px;
  background-color: #063e86;
  color: white;
  border-radius: 10px;
  border: 1px solid white;

  :not(:disabled):hover {
    background-color: #2681ec;
  }

  :disabled {
    cursor: not-allowed;
    background-color: #052b5e;
    color: darkgray;
  }
`;