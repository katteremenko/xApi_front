import React, { useEffect } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import {
  authMeEvent,
  useIsAuth,
} from "../../../entities/user/model/user.store";

const Drawer = () => {
  useEffect(() => {
    authMeEvent();
  }, []);

  const isAuth = useIsAuth();

  return (
    <>
      {isAuth && (
        <Wrapper>
          <ListElement to={"/courses"}> Все курсы </ListElement>
          <ListElement to={"/upload-course"}>
            {" "}
            Загрузить новый курс{" "}
          </ListElement>
          <ListElement to={"/statements"}> Statements </ListElement>
        </Wrapper>
      )}
    </>
  );
};

export default Drawer;

const Wrapper = styled.div`
  min-width: 275px;
  height: 100%;
  background-color: white;
  border-right: 1px solid #cfd4d9;

  box-sizing: border-box;
  transition: all 0.3s;
  display: flex;
  flex-direction: column;
`;

const ListElement = styled(Link)`
  width: 100%;
  padding: 25px 5px;
  cursor: pointer;
  text-decoration: none;
  font-family: "Roboto", serif;
  font-weight: 400;
  font-size: 22px;
  line-height: 26px;
  color: black;
  background-color: white;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;

  border-bottom: 1px solid #cfd4d9;

  &:hover {
    background-color: #cfd4d9;
  }

  transition: all 0.15s;
`;
