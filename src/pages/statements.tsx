import { useEffect, useState } from 'react';
import { Statement } from '@xapi/xapi'
import { toast } from 'react-toastify';
import styled from 'styled-components'
import { CreateLRSConnection } from "../xAPI/createLRSConnection";


export const Statements = () => {

    const [statements, setStatements] = useState<Statement[]>([])

    useEffect(() => {
        const xapi = CreateLRSConnection()
        console.log('xapi = ', xapi)
        xapi.getStatements()
            .then(pld => {
                console.log(`getStatements pld = `, pld)
                setStatements(pld.data.statements)
            })
            .catch((err) => {
                console.log('err = ', err)
                toast.error(err?.response?.data?.message || 'Error')
            })
    }, [])


    return (
        <Wrapper>
            <StatementContainer>
                {statements.length
                    ? statements.map(statement => (<StatementItem>
                        <Item>
                            NAME: {statement.actor.name}
                        </Item>
                        <Item>
                            DATE: {statement.stored ? new Date(statement.stored).toLocaleString() : ''}
                        </Item>
                        <Item>
                            ID: {statement.id}
                        </Item>
                    </StatementItem>))
                    : 'Статистики нет'}
            </StatementContainer>
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
const StatementContainer = styled.div`
width: 100%;
display: grid;
grid-template-columns: 1fr;
row-gap: 20px;

`

const StatementItem = styled.div`

padding: 20px;
width: 100%;
max-width: 550px;
background-color: #4b87f1;
border: 1px solid white;
border-radius: 15px;
display: flex;
gap: 10px;
align-items: center;

`

const Item = styled.div`



`