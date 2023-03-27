import styled from "styled-components";
import {Button} from "./button";

export const DeleteButton = styled(Button)`
  background-color: darkred;

  :not(:disabled):hover {
    background-color: firebrick;
  }
  
  :disabled {
    cursor: not-allowed;
    background-color: #052b5e;
    color: darkgray;
  }
`