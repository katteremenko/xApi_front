import React from 'react';
import styled from "styled-components";
import {useNavigate} from "react-router-dom";
import {Button} from "../../../ui/button/button";

const Header = () => {

    const navigate = useNavigate()

    const handleLogin = () => {
        navigate('/sign-in')
    }

    return (
        <>
            <HeaderContainer>
                <Button onClick={handleLogin}>
                    LOGIN
                </Button>
            </HeaderContainer>
        </>
    );
};

export default Header;

const HeaderContainer = styled.div`
  width: 100%;
  min-height: 65px;
  background-color: #447bba;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 20px;
  box-sizing: border-box;
  border-bottom: 1px solid black;

`
