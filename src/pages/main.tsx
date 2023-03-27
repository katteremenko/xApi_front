import React from 'react';
import styled from "styled-components";
import Course from "./course";

const Main = () => {
    return (
        <CourseContainer>
            <Course/>
        </CourseContainer>
    );
};

export default Main;

const CourseContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: #edeef0;
  
  display: flex;
  align-items: center;
  justify-content: center;

`