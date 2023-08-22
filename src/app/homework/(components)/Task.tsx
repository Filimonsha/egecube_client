"use client";
import React, { useEffect, useState } from "react";
import { ETaskType, IAnswer, ITaskRequest } from "@/types/backend/homework-management/homework";
import { Button, Stack, TextField, Typography } from "@mui/material";
import TaskVariants from "@/app/homework/(modules)/homework-creator/components/TaskVariants";

interface ITaskProps {
    data: ITaskRequest,
    isForAnswering?: {
        tasksAnswers: Array<IAnswer>,
        setTasksAnswers: Function
    },
    isForCreating?: {},
    previewMode?: {
        previewAfterCreatingTask: boolean
    }
    disabled?: boolean,
    solverAnswer?: IAnswer,
}

const Task = ({
                  data,
                  isForAnswering,
                  isForCreating,
                  disabled = false,
                  previewMode,
                  solverAnswer
              }: ITaskProps) => {

    const {
        correctAnswer,
        answerVariants

    } = data;

    const [currentTaskAnswer, setCurrentTaskAnswer] = useState(solverAnswer && solverAnswer.taskAnswer.answer.answer);
    const [taskIsDisabled, setTaskIsDisabled] = useState(disabled || false);
    useEffect(() => {
        // console.log(data, "aaa");
    });

    function handleChangeTextAnswer(value) {
        setCurrentTaskAnswer(value.target.value);
    }

    function handleSaveTaskAnswer() {
        const newAnswerOnTask = currentTaskAnswer;
        if (isForAnswering && isForAnswering.tasksAnswers.includes(data.)) {

        }
        //    TODO
        setTaskIsDisabled(true);
    }

    return (
        <Stack key={data.priority}>
            <Typography>Задание {data.priority}.{data.title}</Typography>
            {correctAnswer.type === ETaskType.ANSWER_WITH_ATTACHMENT &&
                <Stack>
                    <Typography variant="caption">Прикрепите ответ в виде файла</Typography>
                    <Button
                        variant="contained"
                        component="label"
                    >
                        Upload File
                        <input
                            type="file"
                            hidden
                        />
                    </Button>
                </Stack>
            }
            {(correctAnswer.type === ETaskType.MULTIPLE_ANSWER || correctAnswer.type === ETaskType.SINGLE_CHOICE) &&
                <TaskVariants disable={taskIsDisabled} previewMode={previewMode}
                              isEditableForCreating={false}
                              variants={answerVariants} answerType={correctAnswer.type}
                              isForCreating={isForCreating} />}
            {correctAnswer.type === ETaskType.TEXT_INPUT &&
                <TextField value={previewMode?.previewAfterCreatingTask ? correctAnswer.answer : currentTaskAnswer}
                           disabled={taskIsDisabled}
                           onChange={handleChangeTextAnswer} />}
            {
                !previewMode &&
                <Button disabled={taskIsDisabled} variant="contained" onClick={handleSaveTaskAnswer}>Ответить</Button>
            }
        </Stack>
    );
};

export default Task;
