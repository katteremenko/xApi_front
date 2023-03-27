import React from 'react';
import styled from "styled-components";
import {Link, useNavigate} from "react-router-dom";

const Drawer = () => {


    return (
        <>
            <Wrapper>

                {/*<ListElement to={'/'}> Главная </ListElement>*/}
                <ListElement to={'/courses'}> Все курсы </ListElement>
                <ListElement to={'/upload-course'}> Загрузить новый курс </ListElement>
                <ListElement to={'/lrs-user-data'}> Информация для подключения к лрс </ListElement>
                <ListElement to={'/statements'}> Statements </ListElement>
                {/*<ListElement to={'/upload-file'}> Загрузить файл в курс </ListElement>*/}
                {/*<ListElement href={'/'}> Библиотека </ListElement>*/}
                {/*<ListElement href={'/'}> Люди </ListElement>*/}
                {/*<ListElement href={'/'}> Отправить </ListElement>*/}
                {/*<ListElement href={'/'}> Приглашения </ListElement>*/}
                {/*<ListElement href={'/'}> История </ListElement>*/}
                {/*<ListElement href={'/'}> xAPI LRS </ListElement>*/}
                {/*<ListElement href={'/'}> Приложения </ListElement>*/}
                {/*<ListElement href={'/'}> Аккаунт </ListElement>*/}

            </Wrapper>
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


`


const ListElement = styled(Link)`
  width: 100%;
  padding: 25px 5px;
  cursor: pointer;
  text-decoration: none;
  font-family: 'Roboto', serif;
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

`