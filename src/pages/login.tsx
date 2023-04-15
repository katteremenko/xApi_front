import React, { useState } from "react";
import styled from "styled-components";
import { Input } from "../ui/input/input";
import { Button } from "../ui/button/button";

import { toast } from "react-toastify";
import { loginFX, useIsAuth } from "../entities/user/model/user.store";
import { logoutEvent } from "../entities/user/model/user.actions";

type LoginProps = {};

export const Login = (props: LoginProps) => {
  const {} = props;

  const [login, setLogin] = useState<string>("teacher");
  const [password, setPassword] = useState<string>("teacher");
  const isAuth = useIsAuth();
  const handleLogin = () => {
    console.log(`true from login = `, true);
    loginFX({ login, password }).then((pld) => {
      toast.success("Success");
    });
  };

  const handleLogout = () => {
    logoutEvent();
    window.location.href = "/";
  };

  return (
    <Wrapper>
      {isAuth ? (
        <Button onClick={handleLogout}>Logout</Button>
      ) : (
        <LoginForm>
          <Input
            value={login}
            onChange={(event) => setLogin(event.target.value)}
            label={"Login"}
          />
          <Input
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            label={"Password"}
          />
          <Button onClick={handleLogin}>Login</Button>
        </LoginForm>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #98b9ff;
`;

const LoginForm = styled.div`
  min-height: 250px;
  padding: 25px 0;
  width: 500px;
  background-color: #ffffff;
  border-radius: 25px;
  box-shadow: 5px 5px 25px black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;
