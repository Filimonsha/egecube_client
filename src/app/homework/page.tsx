import React, {useState} from 'react';
import apiClient from "@/utils/api/sdk/sdk";
import {USER_ROLE} from "@/types/backend/user";
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Button,
    Container,
    List,
    ListItem, Slider, TextField,
    Typography
} from "@mui/material";
import HomeworkCreator from "@/app/homework/(modules)/homework-creator";

interface IListOfAllHomeworkProps {
    userRole: USER_ROLE
    userId: number,
}


const ListOfAllHomework = async ({
                                     userRole,
                                     userId
                                 }: IListOfAllHomeworkProps) => {
    const homeworks = await apiClient.callApiWithSession().homeworkService.getAllHomework((userRole === USER_ROLE.Teacher), userId)

    console.log(homeworks, "shaaa")

    if (userRole === USER_ROLE.Teacher) {


    }

    return (<div>
        <Button variant="contained">Hello world</Button>
        <HomeworkCreator/>
        <Accordion>
            <AccordionSummary>
                <Typography>all your homeworks</Typography>

            </AccordionSummary>
            <AccordionDetails>
                <List>
                    {
                        homeworks?.map(homework => <ListItem>{homework.title}</ListItem>)
                    }
                </List>
            </AccordionDetails>
        </Accordion>
    </div>)
}

const HomeworkPage = async () => {

    return (
        <div>
            <ListOfAllHomework userRole={USER_ROLE.Teacher} userId={1}/>

        </div>
    );
};

export default HomeworkPage;
