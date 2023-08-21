import React, {useEffect} from 'react';
import {ETaskType, ITask} from "@/types/backend/homework";
import {Button, Stack, TextField, Typography} from "@mui/material";
import TaskVariants from "@/app/homework/(modules)/homework-creator/components/TaskVariants";
import taskVariants from "@/app/homework/(modules)/homework-creator/components/TaskVariants";

interface ITaskProps {
    order: number,
    data: ITask,
    disabled: boolean
}

const Task = ({
                  order,
                  data,
                  disabled = false
              }: ITaskProps) => {
    const {correctAnswer, answerVariants} = data
    useEffect(() => {
        console.log(data, "aaa", correctAnswer.type === ETaskType.MULTIPLE_ANSWER)
    })
    return (
        <Stack key={order}>
            <Typography>Задание {order}.{data.title}</Typography>
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
                <TaskVariants rightAnswer={correctAnswer.answer} previewMode={true} isEditable={false}
                              variants={answerVariants} answerType={correctAnswer.type}/>}
            {correctAnswer.type && <TextField value={correctAnswer.answer} disabled={disabled} /> }
        </Stack>
    );
};

export default Task;
