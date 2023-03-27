import React, {useEffect, useMemo} from 'react';
import styled from 'styled-components'
import {useNavigate, useParams} from "react-router-dom";
import {useCourseFilesStore} from "../entities/course/model/course.store";
import {deleteCourseFileFX, deleteCourseFX, getCourseFX, uploadFileFX} from "../entities/course/model/course.actions";
import {Button} from "../ui/button/button";
import {DeleteButton} from "../ui/button/delete-button";
import {toast} from "react-toastify";
import {MANIFEST_NAME} from "../Manifest/constants";


export const EditCourse = () => {

    const {courseName} = useParams()
    const navigate = useNavigate()
    const files = useCourseFilesStore()


    const handleFileReader = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (!event.target.files?.length || !event.target.files) {
            return
        }
        const file = event.target.files[0];
        let formData = new FormData();
        formData.append('courseName', `${courseName}`);
        formData.append('file', file);
        // @ts-ignore
        for (const value of formData.values()) {
            console.log(value);
        }
        uploadFileFX({file: formData}).then(() => {
            toast.success('Success')
            getCourseFX({courseName: courseName || ''}).then()
            event.target.value = ''
        })
    }

    const disabledPlayCourseButton = useMemo<boolean>(() =>
        !files.find(file => file.name === MANIFEST_NAME), [files])

    const handleDeleteCourse = () => {
        deleteCourseFX({courseName: `${courseName}`})
            .then(() => navigate('/courses'))
    }

    useEffect(() => {
        getCourseFX({courseName: courseName || ''}).catch(() => navigate('/sign-in'))
    }, [])

    return (
        <Wrapper>
            <Container>
                <TitleContainer>
                    <h1>
                        Курс — {courseName}
                    </h1>
                    <ButtonContainer>
                        <Button disabled={disabledPlayCourseButton}
                                title={disabledPlayCourseButton ? 'В курсе нет манифеста' : undefined}
                                onClick={() => navigate(`/launch-course/${courseName}`)}>
                            Пройти курс
                        </Button>
                        <DeleteButton
                            onClick={handleDeleteCourse}>
                            Удалить курс
                        </DeleteButton>
                    </ButtonContainer>
                </TitleContainer>

                <NewFileContainer>

                    <LabelFile>
                        Загрузить новый файл
                        <input accept='application/xml,text/html,text/xml  ' onChange={handleFileReader} hidden
                               type='file'/>
                    </LabelFile>
                </NewFileContainer>


                <FilesList>
                    <h2>
                        Все файлы в курсе:
                    </h2>
                    {files.map(file => (
                        <Item key={`course_file_${file.name}`}>
                            <FileItem onClick={() => navigate(`/course-file/${courseName || ''}/${file.name}`)}>
                                {file.name}
                            </FileItem>
                            <DeleteButton
                                onClick={() => deleteCourseFileFX({courseName: `${courseName}`, fileName: file.name})}>
                                Удалить
                            </DeleteButton>
                        </Item>
                    ))}
                    {files.length === 0 && <h3>В курсе нет доступных файлов</h3>}
                </FilesList>

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

const ButtonContainer = styled.div`
  display: grid;
  grid-template-columns: max-content max-content;
  column-gap: 25px;

`

const FilesList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 15px;
`

const FileItem = styled.div`
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

const Item = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`


const NewFileContainer = styled.div`
  display: grid;
  grid-template-columns: max-content max-content;
  column-gap: 15px;
`

const LabelFile = styled.label`
  width: max-content;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: 1px solid white;
  border-radius: 15px;
  margin-right: 30px;

  padding: 10px 20px;
  background-color: #063e86;
  color: white;

  :hover {
    background-color: #2681ec;
  }
`
