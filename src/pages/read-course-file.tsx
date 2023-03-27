import React, {useEffect, useState} from 'react';
import styled from 'styled-components'
import {useParams} from "react-router-dom";
import {getCourseFileFX} from "../entities/course/model/course.actions";


export const ReadCourseFile = () => {

    const {courseName, fileName} = useParams()

    const [file, setFile] = useState<string>('')

    useEffect(() => {
        getCourseFileFX({
            courseName: courseName || '',
            fileName: fileName || ''
        }).then(pld => {
            console.log(`pld = `, pld,)
            setFile(pld)
        })
    }, [])

    return (
        <Wrapper>
            {file || 'File is empty or don\'t exist!'}
        </Wrapper>
    );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: #edeef0;
  padding: 25px;
  overflow: auto;

`