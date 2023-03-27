import React, {useEffect, useState} from 'react';
import styled from 'styled-components'
import {deleteCourseFX, getCoursesFX} from "../entities/course/model/course.actions";
import {useCoursesStore} from "../entities/course/model/course.store";
import {useNavigate} from "react-router-dom";
import {Button} from "../ui/button/button";
import {DeleteButton} from "../ui/button/delete-button";


export const Courses = () => {

    const courses = useCoursesStore()
    const navigate = useNavigate()

    useEffect(() => {
        getCoursesFX().catch(() => navigate('/sign-in'))
    }, [])

    return (
        <Wrapper>
            <Container>
                <TitleContainer>
                    <Title>
                        Все курсы
                    </Title>
                    <Button onClick={() => navigate('/upload-course')}>
                        Загрузить новый курс
                    </Button>
                </TitleContainer>
                <CourseList>
                    {courses.map((course, index) => (
                        <Item key={`course_${index}_${course.name}`}>
                            <CourseItem
                                onClick={() => navigate(`/course-info/${course.name}`)}>
                                {course.name}
                            </CourseItem>

                            {course.name !== '.gitignore' &&
                                <DeleteButton
                                    onClick={() => deleteCourseFX({courseName: course.name})}>
                                    Удалить
                                </DeleteButton>}
                        </Item>
                    ))}
                </CourseList>
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
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 20px;


`

const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 25px;
`

const Title = styled.h1`

`

const CourseList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 15px;
`

const Item = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  //justify-content: space-between;

`

const CourseItem = styled.div`
  padding: 20px;
  width: 100%;
  max-width: 350px;
  cursor: pointer;
  background-color: #4b87f1;
  border: 1px solid white;
  border-radius: 15px;
  margin-right: 30px;

  :hover {
    background-color: #6da2fd;
  }

`
