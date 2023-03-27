import React from 'react'
import styled from 'styled-components'
import XAPI, {Statement, Agent} from "@xapi/xapi";
import {CreateLRSConnection} from "../../xAPI/createLRSConnection";
import {IAu} from "../../interfaces";
import {User} from "../../xAPI/user";

export const Au = ({handleClick, options}: { handleClick: (path: string) => void, options: IAu }) => {

    const statementExample = {
        "actor": {
            "mbox": "mailto:test@mail.ru",
            "name": "test",
            "objectType": "Agent"
        },
        "verb": {
            "id": "http://example.com/xapi/interacted",
            "display": {"en-US": "interacted"}
        },
        "object": {
            "id": "http://example.com/button_example",
            "definition": {
                "name": {"en-US": "Button example"},
                "description": {"en-US": "Example xAPI Button"}
            },
            "objectType": "Activity"
        }
    };


    const name: any = {}
    name[options.title.langstring.attr_lang] = options.title.langstring["#text"]
    const description: any = {}
    description[options.description.langstring.attr_lang] = options.description.langstring["#text"]

    const statement: Statement = {
        actor: {
            mbox: User.mailto,
            name: User.name,
            objectType: "Agent"
        },
        // verb: {
        //     id: "http://example.com/xapi/interacted",
        //     display: { "en-US": "interacted" }
        // },
        verb: XAPI.Verbs.INITIALIZED,
        object: {
            id: options.attr_id,
            definition: {
                name: name,
                description: description
            },
            objectType: "Activity"
        }
    }

    const xapi = CreateLRSConnection()

    const handleSendStatement = () => {
        xapi.sendStatement({
            statement
        });
        handleClick(options.url)
    }

    const getStatistics = () => {

        const agent: Agent = {
            objectType: "Agent",
            name: User.name,
            mbox: User.mailto
        }
        const activityId = 'http://localhost:3001/launch-course/My%20course'

        xapi.getStatements().then(pld => {
            console.log(`getStatements pld = `, pld)
        })
        xapi.getAgentProfiles({
            agent
        }).then(pld => {
            console.log(`getAgentProfiles pld = `, pld)
        })
        xapi.getAbout()
        xapi.getAgent({
            agent
        })

        // xapi.getAgentProfile()
        // xapi.getStates()

        xapi.getActivity(
            {
                activityId
            }
        )

        xapi.getStates(
            {
                agent,
                activityId
            })

        xapi.getActivityProfiles({
            activityId
        })

        XAPI.getXAPILaunchData().then(launchData => {
            console.log(`launchData = `, launchData)
        })

        const tinCanLaunchData = XAPI.getTinCanLaunchData()
        console.log(`tinCanLaunchData = `, tinCanLaunchData)
    }

    // @ts-ignore
    return (
        <>
            <Link onClick={handleSendStatement}>
                {options.title.langstring["#text"]}
            </Link>
        </>
    )
}

const Link = styled.button`
  width: 100%;
  max-width: 250px;
  max-height: 75px;
  padding: 25px 0;
  cursor: pointer;
  text-decoration: none;
  font-family: 'Roboto', serif;
  font-weight: 400;
  font-size: 22px;
  line-height: 26px;
  color: black;
  background-color: white;
  border: none;

  display: flex;
  align-items: center;
  justify-content: center;


  &:hover {
    background-color: rgb(234, 245, 255);
  }


  transition: all 0.15s;

`
