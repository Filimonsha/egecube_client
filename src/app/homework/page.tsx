import React, { useState } from "react";
import apiClient from "@/utils/api/sdk/sdk";
import { USER_ROLE } from "@/types/backend/user";
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Button,
    Container,
    List,
    ListItem,
    Slider,
    TextField,
    Typography
} from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import HomeworkCreator from "@/app/homework/(modules)/homework-creator/HomeworkCreator";
import SolverView from "@/app/homework/(modules)/solver-view/SolverView";
import { getSession } from "next-auth/react";
import getServerSessionWithOptions from "@/utils/api/getServerSessionWithOptions";

interface IListOfAllHomeworkProps {
    userRole: USER_ROLE;
    userId: number;
}

const ListOfAllHomework = async ({
                                     userRole,
                                     userId
                                 }: IListOfAllHomeworkProps) => {
    const homeworks = await apiClient
        .callApiWithSession()
        .homeworkService.getAllHomework(userId);

    const session = await getServerSessionWithOptions();
    const solver = await apiClient.callApiWithSession().homeworkService.getSolverById(session.user.userId);

    //TODO
    const courses = await apiClient
        .callApiWithSession()
        .subjectService.getCoursesBySubjectId(1);

    if (userRole === USER_ROLE.Teacher) {
    }

    return (
        <div>
            {courses && <HomeworkCreator courses={courses} />}
            {/* TODO провайдер предметов */}
            {solver && <SolverView solver={solver} subjectId={1} />}
            {/* <Accordion> */}
            {/*   <AccordionSummary> */}
            {/*     <Typography>all your homeworks</Typography> */}
            {/*   </AccordionSummary> */}
            {/*   <AccordionDetails> */}
            {/*     <List> */}
            {/*       {homeworks?.map(homework => ( */}
            {/*         <ListItem key={homework._id}>{homework.title}</ListItem> */}
            {/*       ))} */}
            {/*     </List> */}
            {/*   </AccordionDetails> */}
            {/* </Accordion> */}
        </div>
    );
};

const HomeworkPage = async () => {
    return (
        <div>
            <ListOfAllHomework userRole={USER_ROLE.Teacher} userId={1} />
        </div>
    );
};

export default HomeworkPage;
