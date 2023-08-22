import {ETaskType, IAnswerVariant, ITaskRequest, TaskRightAnswer} from "@/types/backend/homework-management/homework";
import React, {useEffect, useState} from "react";
import {Button, Stack, TextField, ToggleButton, ToggleButtonGroup, Typography} from "@mui/material";
import AnswerVariantsCreator from "@/app/homework/(modules)/homework-creator/task-creator/answer-variants/AnswerVariantsCreator";
import Grid2 from "@mui/material/Unstable_Grid2";
import {getParsedTaskType} from "@/app/homework/(modules)/homework-creator/utils";

interface ITaskCreatorProps {
    handleSaveTask: (task: ITaskRequest) => void,
    handleCanselCreatingTask: () => void,
}


const TaskCreator = ({handleSaveTask, handleCanselCreatingTask}: ITaskCreatorProps) => {
    const [taskName, setTaskName] = useState('')
    const [taskDescription, setTaskDescription] = useState('')
    const [taskType, setTaskType] = useState<ETaskType>(ETaskType.TEXT_INPUT)
    const [rightAnswer, setRightAnswer] = useState<TaskRightAnswer>()
    const [taskVariants, setTaskVariants] = useState<Array<IAnswerVariant>>([])

    function handleChange(value) {
        setTaskVariants([])
        setTaskType(ETaskType[value.target.value])
    }

    //TODO
    function handleClickSaveBtn() {
        const newTask: ITaskRequest = {
            title: taskName,
            description: taskDescription,
            priority: 0,
            answerVariants: taskVariants,
            correctAnswer: {
                type: taskType,
                answer: (taskType === ETaskType.SINGLE_CHOICE ? Array.isArray(rightAnswer) && rightAnswer[0] : rightAnswer)
            }
        }
        handleSaveTask(newTask)
        handleCancel()
    }

    function handleChangeTextRightAnswer(value) {
        setRightAnswer(value.target.value)
    }

    function handleCancel() {
        setTaskName('')
        setRightAnswer('')
        setTaskType(ETaskType.TEXT_INPUT)
        setTaskDescription('')
        handleCanselCreatingTask()
    }

    useEffect(() => console.log(rightAnswer))

    const handleIsSaveDisable = () => {
        const notValidateIfTaskNotWithAttachment =
            (taskType !== ETaskType.ANSWER_WITH_ATTACHMENT && taskType !== ETaskType.TEXT_INPUT) && (taskVariants.length < 2 || (Array.isArray(rightAnswer) && rightAnswer.length < 1))


        return !taskName || notValidateIfTaskNotWithAttachment || (taskType !== ETaskType.ANSWER_WITH_ATTACHMENT && !rightAnswer)
    }

    return (
        <Stack height="100%" justifyContent="space-between">
            <Grid2 rowSpacing={2}
                   columnSpacing={{xs: 1, sm: 2, md: 3}} container>
                {
                    [{name: 'Название', value: taskName, setValue: setTaskName}, {
                        name: 'Описание ( необязательно )',
                        value: taskDescription,
                        setValue: setTaskDescription
                    }].map(field => <Grid2 sm={6}>
                        <TextField label={field.name} fullWidth value={field.value}
                                   onChange={value => field.setValue(value.target.value)}/>
                    </Grid2>)
                }
                <Grid2 lg={6}>
                    <Stack spacing={3} direction="row" sx={{
                        p: 2,
                        border: '1px solid rgba(0, 0, 0, 0.23)',
                        borderRadius: '4px',
                        display: 'flex',
                        alignItems: 'center',
                        height: '100%'
                    }}>
                        <Typography>Выберите тип задания</Typography>
                        <ToggleButtonGroup
                            color="primary"
                            value={taskType}
                            exclusive
                            onChange={handleChange}
                            aria-label="Platform"
                        >
                            {Object.keys(ETaskType).map((key, index) => {
                                return <ToggleButton key={index}
                                                     value={key}>{getParsedTaskType(key as ETaskType)}</ToggleButton>
                            })}
                        </ToggleButtonGroup>
                    </Stack>

                </Grid2>
                {taskType === ETaskType.TEXT_INPUT ?
                    <Grid2 lg={6}>
                        <Stack>
                            <Typography textAlign="center" variant="subtitle1">Укажите верный ответ</Typography>
                            <TextField value={rightAnswer} onChange={handleChangeTextRightAnswer}/>
                            <Typography variant="caption">Различные формы ответа перечислите через
                                запятую</Typography>

                        </Stack>
                    </Grid2> :
                    (taskType === ETaskType.SINGLE_CHOICE || taskType === ETaskType.MULTIPLE_ANSWER) &&
                    <AnswerVariantsCreator rightAnswer={rightAnswer} setRightAnswer={setRightAnswer} variants={taskVariants}
                                           setVariants={setTaskVariants}
                                           answerType={taskType}/>}
            </Grid2>
            <Stack justifyContent="space-between" direction="row">
                <Button color="success" variant="contained"
                        disabled={handleIsSaveDisable()}
                        onClick={handleClickSaveBtn}>Сохранить</Button>
                <Button color="error" variant="contained" onClick={handleCancel}>Отмена</Button>
            </Stack>
        </Stack>

    )
}
export default TaskCreator
