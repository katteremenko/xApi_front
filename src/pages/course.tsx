import React, {useEffect, useMemo, useState} from 'react';
import styled from 'styled-components'
import {Au} from "../components/Au/Au";
import {ReactComponent as CloseIcon} from '../assets/images/close_icon.svg'
import {parseManifest} from "../Manifest/parseManifest";
import {IAu} from "../interfaces";

const Course = () => {

    const [path, setPath] = useState<string>('')


    useEffect(() => {
        const view = document.getElementById('course_main_container_view')
        const buttons = view?.getElementsByTagName('button')

        if (buttons) {
            for (let i = 0; i < buttons.length; i++) {
                const button = buttons[i];
                // Была идея, но понял, что всё обостоит чуть сложнее
                button.addEventListener('click', () => {
                    alert(i)
                })
            }
        }

    }, [path])

    const parsingManifest: IAu[] = parseManifest('')

    // Полученаая HTML страничка, которая после обрабатывается
    const CoursePage = useMemo(() => {
        if (!path) {
            return () => {
                return (
                    <h3>
                        Выберете страницу
                    </h3>
                )
            }
        }

        let resultCoursePage;

        // Захардкожены страницы курса
        try {
            resultCoursePage = require(`../course/${path}`).default
        } catch (e) {
            console.log(`require course page error = `, e)
            resultCoursePage = () => {
                return (
                    <h3>
                        Что-то пошло не так, простите :(
                    </h3>
                )
            }
        }

        return resultCoursePage
    }, [path])


    return (
        <>
            <Container>
                <Close onClick={() => setPath('')}>
                    <CloseIcon/>
                </Close>
                <CourseView id={"course_main_container_view"}>
                    <CoursePage/>
                </CourseView>
                <AuContainer>
                    {parsingManifest.map((item, index) => (
                            <Au handleClick={setPath} options={item}/>
                        )
                    )}
                </AuContainer>
            </Container>
        </>
    );
};

export default Course;


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
  display: flex;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
  overflow: auto;
  padding: 30px 15px;
  width: 100%;
  height: 100%;
  max-height: 100%;
  background-color: white;



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
