"use client";
import React, { useState } from "react";
import apiClient from "@/utils/api/sdk/sdk";
import Task from "@/app/homework/(components)/Task";
import { IAnswer, IHomework } from "@/types/backend/homework-management/homework";
import { Stack, Typography } from "@mui/material";

interface IHomeworkInstanceProps {
    solverId: number;
    homeworkData: IHomework;
    solverAnswer?: IAnswer;
}

const HomeworkInstance = async ({
                                    solverId,
                                    homeworkData
                                }: IHomeworkInstanceProps) => {
    const { title } = homeworkData;
    const [tasksAnswers, setTasksAnswers] = useState<Array<IAnswer>>([]);

    console.log(homeworkData);
    return (
        <Stack>
            <Typography>{title}</Typography>

            {
                homeworkData.tasks?.map(task => <Task data={task} isForAnswering={{tasksAnswers,setTasksAnswers}} />)
            }
        </Stack>
    );
};

export default HomeworkInstance;
