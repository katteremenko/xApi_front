import React, {InputHTMLAttributes} from 'react';
import styled from 'styled-components'

type InputProps = {
    label: string
} & InputHTMLAttributes<HTMLInputElement>

export const Input = (props: InputProps) => {
    const {label, id, ...other} = props;
    return (
        <Wrapper>
            <Label htmlFor={id}>
                {label}
            </Label>
            <CustomInput id={id} {...other}/>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: auto;
  width: 100%;
  max-width: 350px;
`

const Label = styled.label`
  font-weight: 500;
  font-size: 22px;
  margin-bottom: 5px;
`

const CustomInput = styled.input`
  width: 100%;
  font-size: 18px;
  font-weight: 500;
  color: black;
  border: 1px solid black;

`