import React from 'react';
import { useState, useEffect } from 'react';
import {BrowserRouter, Route, Routes,} from "react-router-dom";
import './App.css';
import {Login} from './pages/login';
import 'react-toastify/dist/ReactToastify.css';
import styled from "styled-components";
import {CustomToast} from "./ui/toast/toast";
import Header from "./components/wrapper/header/Header";
import Drawer from "./components/wrapper/drawer/Drawer";
import {UploadCourse} from "./pages/upload-course";
import {Courses} from "./pages/courses";
import {EditCourse} from "./pages/course-info";
import {ReadCourseFile} from "./pages/read-course-file";
import {LaunchCourse} from "./pages/launch-course";
import { LrsUserData } from './pages/lrs-user-data';
import { Statements } from './pages/statements';


function App() {
       
    return (
        <BrowserRouter>
            <CustomToast />
            <MainContainer>
                <Header/>
                <Content>
                    <Drawer/>
                    <Routes>
                        <Route path={'/'} element={<Login/>}/>
                        <Route path={'/courses'} element={<Courses/>}/>
                        <Route path={'/course-info/:courseName'} element={<EditCourse/>}/>
                        <Route path={'/launch-course/:courseName'} element={<LaunchCourse/>}/>
                        <Route path={'/course-file/:courseName/:fileName'} element={<ReadCourseFile/>}/>
                        <Route path={'/upload-course'} element={<UploadCourse/>}/>
                        <Route path={'/upload-file'} element={<UploadCourse/>}/>
                        <Route path={'/sign-in'} element={<Login/>}/>
                        <Route path={'/lrs-user-data'} element={<LrsUserData/>}/>
                        <Route path={'/statements'} element={<Statements/>}/>
                        <Route path={'/*'} element={<Courses/>}/>
                    </Routes>
                </Content>
            </MainContainer>
        </BrowserRouter>
    );
}

export default App;


const MainContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: stretch;


`

const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: calc(100% - 65px);
`