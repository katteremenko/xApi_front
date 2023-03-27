import React, {useEffect, useState} from 'react';
import styled from 'styled-components'
import {Input} from '../ui/input/input';
import {Button} from "../ui/button/button";
import axios, {AxiosError} from "axios";
import {getCoursesFX} from "../entities/course/model/course.actions";
import {loginFX} from "../entities/user/model/user.actions";
import {toast} from "react-toastify";

type LoginProps = {}

export const Login = (props: LoginProps) => {
    const {} = props;

    const [login, setLogin] = useState<string>('teacher')
    const [password, setPassword] = useState<string>('teacher')

    const [token, setToken] = useState('')

    const handleLogin = () => {
        console.log(`true from login = `, true)
        loginFX({login, password})
            .then(pld => {
                // console.log(`pld = `, pld)
                toast.success('Success')
                setToken(pld.token)
                localStorage.setItem('token', pld.token);
            })
    }

    const handleLogout = () => {
        console.log(`true from login = `, true)
        loginFX({login, password})
            .then(pld => {
                localStorage.clear();
                window.location.href = '/';
            })
    }
   
    useEffect(() => {
        const storedToken = localStorage.getItem('token')
        if(storedToken) {
            setToken(storedToken)
        }
    }, [])

    const test = async () => {
        const response = await axios({
            method: 'post',
            url: 'http://127.0.0.1:3000/api/login',
            data: {login, password},
            headers: {
                'Content-Type': 'application/json',
            }
        })
        console.log(`response = `, response)
        setToken(response.data.token)
    }


    const getCourses = async () => {
        console.log(`token = `, token)
        const response = await axios({
            method: 'get',
            url: 'http://127.0.0.1:3000/api/courses',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
        console.log(`courses = `, response)
    }

    const getCourse = async () => {
        console.log(`token = `, token)
        const response = await axios({
            method: 'get',
            url: 'http://127.0.0.1:3000/api/courses/single_au_basic_responsive_2.zip',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
        console.log(`course = `, response)
    }

    const getFile = async () => {
        console.log(`token = `, token)
        const response = await axios({
            method: 'get',
            url: 'http://127.0.0.1:3000/api/courses/single_au_basic_responsive_2.zip/cmi5.xml',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
        console.log(`file = `, response)
    }

    const [uploadFile, setUploadFile] = useState<FormData | undefined>(undefined)

    const handleFileReader = async (event: React.ChangeEvent<HTMLInputElement>) => {
        if (!event.target.files?.length || !event.target.files) {
            setUploadFile(undefined)
            return
        }

        const file = event.target.files[0];

        // console.log(`file.type = `, file, file.type)
        let formData = new FormData();
        formData.append('courseName', `${file.name}`);
        formData.append('archv', file);
        // formData.append('courseName', zip);
        // @ts-ignore
        for (const value of formData.values()) {
            console.log(value);
        }
        try {
            const response = await axios.post('http://127.0.0.1:3000/api/upload_course', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${token}`
                }
            })
                .then(pld => {
                    console.log(`pld = `, pld)
                })
                .catch(err => {
                    // console.log(`err = `, err)
                })
        } catch (e) {
            console.log(`e = `, e)
        }
        setUploadFile(formData)
    }

    const postCourse = async () => {
        // const response = await axios({
        //     method: 'post',
        //     url: 'http://127.0.0.1:3000/api/upload_course',
        //     data: uploadFile,
        //     headers: {
        //         'Content-Type': 'multipart/form-data',
        //         'Authorization': `Bearer ${token}`
        //     }
        // })

        console.log(`uploadFile = `, uploadFile)

        const response = await axios.post('http://127.0.0.1:3000/api/upload_course', uploadFile, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${token}`
            }
        })
        console.log(`postCourse response = `, response)
    }
    return (
        <Wrapper>
          {token ? (
            <Button onClick={handleLogout}>Logout</Button>
          ) : (
            <LoginForm>
              <Input value={login} onChange={(event) => setLogin(event.target.value)} label={'Login'} />
              <Input value={password} onChange={(event) => setPassword(event.target.value)} label={'Password'} />
              <Button onClick={handleLogin}>Login</Button>
              {/*<Button onClick={getCourses}>*/}
              {/*    Get courses*/}
              {/*</Button>*/}
              {/*<Button onClick={getCourse}>*/}
              {/*    Get course 'NEW'*/}
              {/*</Button>*/}
              {/*<Button onClick={getFile}>*/}
              {/*    Get course 'NEW' file 'TEST.TXT'*/}
              {/*</Button>*/}
              {/*<input onChange={handleFileReader} accept={'application/zip'} type={"file"}/>*/}
              {/*<Button onClick={postCourse}>*/}
              {/*    Post course*/}
              {/*</Button>*/}
            </LoginForm>
          )}
        </Wrapper>
      )
    }
    

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #98b9ff;
`

const LoginForm = styled.div`
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
