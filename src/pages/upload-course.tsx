import React, {useState} from 'react';
import styled from 'styled-components'
import {Input} from "../ui/input/input";
import {Button} from "../ui/button/button";
import {uploadCourseFX} from "../entities/course/model/course.actions";
import {toast} from "react-toastify";


export const UploadCourse = () => {

    const [courseName, setCourseName] = useState('')
    const [courseZipArchive, setCourseZipArchive] = useState<File | undefined>(undefined)

    const handleFileReader = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (!event.target.files?.length || !event.target.files) {
            setCourseZipArchive(undefined)
            return
        }
        const file = event.target.files[0];
        setCourseZipArchive(file)
    }


    const postCourse = async () => {

        if (courseZipArchive === undefined) {
            toast.error('Загрузите zip архив')
            return
        }

        let formData = new FormData();
        console.log(`courseName = `, courseName)
        formData.append('courseName', courseName || `${courseZipArchive.name}` || new Date().toLocaleString());
        formData.append('archv', courseZipArchive);

        // @ts-ignore
        for (const value of formData.values()) {
            console.log(value);
        }
        const response = uploadCourseFX({course: formData})
        // console.log(`postCourse response = `, response)
    }


    return (

        <Wrapper>
            <UploadForm>
                <Input value={courseName} onChange={(event) => setCourseName(event.target.value)}
                       label={'Название курса (необязательно)'}/>
                <Input
                    label={'Выберите zip архив'}
                    onChange={handleFileReader}
                    accept={'application/zip'}
                    type={"file"}/>
                <Button onClick={postCourse}>
                    Загрузить новый курс
                </Button>
            </UploadForm>
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
`

const UploadForm = styled.div`
  min-height: 250px;
  padding: 25px 0;
  width: 500px;
  background-color: #FFFFFF;
  border-radius: 25px;
  box-shadow: 5px 5px 25px black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;

`
