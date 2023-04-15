import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../ui/button/button";
import { logoutEvent } from "../../../entities/user/model/user.actions";
import { useIsAuth } from "../../../entities/user/model/user.store";

const Header = () => {
  const navigate = useNavigate();
  const isAuth = useIsAuth();
  const handleLogin = () => {
    navigate("/sign-in");
  };

  const handleLogout = () => {
    logoutEvent();
    window.location.href = "/";
  };

  return (
    <>
      <HeaderContainer>
        {!isAuth ? (
          <Button onClick={handleLogin}>LOGIN</Button>
        ) : (
          <Button onClick={handleLogout}>LOGOUT</Button>
        )}
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
`;
