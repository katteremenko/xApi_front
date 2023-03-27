import React, {useEffect, useState} from 'react';
import styled from 'styled-components'
import {useNavigate, useParams} from "react-router-dom";
import {ReactComponent as CloseIcon} from '../assets/images/close_icon.svg'
import {useCourseFilesStore} from "../entities/course/model/course.store";
import {getCourseFileFX, getCourseFX} from "../entities/course/model/course.actions";
import {MANIFEST_NAME} from "../Manifest/constants";
import {parseManifest} from "../Manifest/parseManifest";
import {Au} from "../components/Au/Au";
import {IAu} from "../interfaces";

export const LaunchCourse = () => {

    const {courseName} = useParams()
    const navigate = useNavigate()
    const files = useCourseFilesStore()
    const [manifest, setManifest] = useState<any>(null)
    const [htmlFile, setHtmlFile] = useState('')
    useEffect(() => {
        getCourseFX({courseName: courseName || ''})
            .then(pld => {
                // console.log(`pld = `, pld)
                if (!pld.find(file => file.name === MANIFEST_NAME)) navigate(`/course-info/${courseName}`)
                getCourseFileFX({courseName: `${courseName}`, fileName: MANIFEST_NAME})
                    .then(pld => {
                        // console.log(`LaunchCourse getCourseFileFX pld = `, typeof pld, pld)
                        setManifest(parseManifest(pld))
                    })
            })
            .catch(() => navigate(`/course-info/${courseName}`))
    }, [])

    useEffect(() => {
        console.log(`manifest = `, manifest)
    }, [manifest])

    useEffect(() => {
        console.log(`htmlFile = `, htmlFile)
    }, [htmlFile])

    const getHtmlFile = async (fileName: string) => {
        const response = await getCourseFileFX({courseName: `${courseName}`, fileName})
        setHtmlFile(response)
    }

    return (
        <Wrapper>
            <Container>
                <Close onClick={() => navigate(`/course-info/${courseName}`)}>
                    <CloseIcon/>
                </Close>
                <CourseView dangerouslySetInnerHTML={{__html: htmlFile || 'Выберите из списка справа'}}>

                </CourseView>
                <AuContainer>
                    {manifest?.map((item: IAu) => (
                            <Au handleClick={() => getHtmlFile(item.url)} options={item}/>
                        )
                    )}
                </AuContainer>
            </Container>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: auto;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  background-color: #8096BB;
  padding: 30px;

`


const Container = styled.div`
  position: relative;
  height: 80vh;
  width: 70vw;
  background-color: #d9d9d9;
  border: 1px solid black;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 15px;
  padding-top: 40px;
  gap: 5px;


`

const CourseView = styled.div`
  //display: flex;
  //align-items: center;
  //flex-direction: column;
  box-sizing: border-box;
  overflow: auto;
  padding: 30px 15px;
  width: 100%;
  height: 100%;
  max-height: 100%;
  background-color: white;

  button {
    background-color: red;
  }


`

const AuContainer = styled.div`
  height: 100%;
  max-height: 100%;
  overflow: auto;
  flex-basis: 40%;
  max-width: 250px;
  display: flex;
  flex-direction: column;
  gap: 5px;


`


const Close = styled.button`
  position: absolute;
  right: 10px;
  top: 10px;
  cursor: pointer;
  border: none;
  background-color: transparent;


`
