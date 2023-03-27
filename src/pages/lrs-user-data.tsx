import {useState} from 'react';
import styled from 'styled-components'
import {Input} from '../ui/input/input';
import {Button} from "../ui/button/button";
import { User } from '../xAPI/user';
import { toast } from 'react-toastify';


export const LrsUserData = () => {

    const [username, setUsername] = useState<string>('1f0033d95a271a13f670189b1f99acf7dfddd78f')
    const [password, setPassword] = useState<string>('44c911935680b9e9535e8af1d017767f65619ef4')
    const [mail, setMail] = useState<string>('admin@admin.ru')
    const [name, setName] = useState<string>('admin')


    const saveUserData = () => {
        User.username = username
        User.password = password
        User.name = name
        User.mail = mail
        User.mailto = `mailto:${mail}`
        toast.info("Информация сохранилась!")
    }

    console.log('User = ', User)


    return (
        <Wrapper>
            <Container>
                <Input value={username} onChange={(event) => setUsername(event.target.value)} label={'Username'}/>
                <Input value={password} onChange={(event) => setPassword(event.target.value)} label={'Password'}/>
                <Input value={mail} onChange={(event) => setMail(event.target.value)} label={'Mail'}/>
                <Input value={name} onChange={(event) => setName(event.target.value)} label={'Name'}/>
                <Button onClick={saveUserData}>
                    Сохранить данные об лрс
                </Button>
            </Container>
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

const Container = styled.div`
    width: 100%;
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
