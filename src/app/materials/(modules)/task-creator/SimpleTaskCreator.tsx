"use client"

import React, {FormEvent, useState} from 'react';
import "react-quill/dist/quill.snow.css"
import Button from "@mui/material/Button";
import RichTextTaskEditor from "@/app/materials/(modules)/task-creator/components/RichTextTaskEditor";
import Grid2 from "@mui/material/Unstable_Grid2";
import {Stack, TextField, ToggleButton, ToggleButtonGroup, Typography} from "@mui/material";
import SubjectPicker from "@/app/materials/(components)/SubjectPicker";
import {SimpleTask} from "@/types/backend/simpletask";
import TaskNumberPicker from "@/app/materials/(components)/TaskNumberPicker";
import AnswerVariantsCreator
  from "@/app/homework/(modules)/homework-creator/task-creator/answer-variants/AnswerVariantsCreator";
import {ETaskType, IAnswerVariant, TaskRightAnswer} from "@/types/backend/homework";
import {getParsedTaskType} from "@/app/homework/(modules)/homework-creator/utils";

export interface AddTaskI {
  onSubmit: (data: SimpleTask) => void
}

let editorData = ""
const taskNumberOptions = Array.from({length: 17}, (_, i) => i + 1)
const taskTypeOptions = [ETaskType.TEXT_INPUT, ETaskType.SINGLE_CHOICE, ETaskType.MULTIPLE_ANSWER]


const SimpleTaskCreator = ({onSubmit}: AddTaskI) => {
  const [subjectId, setSubjectId] = useState(1)
  const [taskNumber, setTaskNumber] = useState(1)
  const [rightAnswer, setRightAnswer] = useState<TaskRightAnswer>()
  const [taskVariants, setTaskVariants] = useState<Array<IAnswerVariant>>([])
  const [taskType, setTaskType] = useState<ETaskType>(ETaskType.TEXT_INPUT)


  const handleSave = () => {
    const newTaskData = {
      subjectId: subjectId,
      taskNum: taskNumber,
      desc: editorData,
      answers: taskVariants.map((el) => el.answer),
      rightAnswer: rightAnswer
    } as SimpleTask
    console.log(newTaskData)
    onSubmit(newTaskData)
  }

  function handleChange(value: FormEvent) {
    if (value.target !== null) {
      setTaskVariants([])
      // @ts-ignore
      setTaskType(ETaskType[value.target.value])
    }
  }

  function handleChangeTextRightAnswer(value: FormEvent) {
      setRightAnswer((value.target as HTMLTextAreaElement).value)
  }


  return (
    <Stack height="100%" justifyContent="space-between" spacing={5}>
      <Grid2 container rowSpacing={2} columnSpacing={{xs: 1, sm: 2, md: 3}}>
        <Stack>
          <Grid2>
            <h2>Создание задания</h2>
          </Grid2>
          <Grid2 sm={6}>
            <SubjectPicker subjectId={subjectId} setSubjectId={setSubjectId}/>
          </Grid2>
          <Grid2 sm={6}>
            <TaskNumberPicker options={taskNumberOptions} taskNum={taskNumber} setTaskNum={setTaskNumber}/>
          </Grid2>
        </Stack>
        <Stack>
          <Grid2 sm={12}>
            <RichTextTaskEditor onChange={(data: string) => editorData = data}/>
          </Grid2>
        </Stack>
        <Stack>
          <Typography>Выберите тип задания</Typography>
          <ToggleButtonGroup
            color="primary"
            value={taskType}
            exclusive
            onChange={handleChange}
            aria-label="Platform"
          >
            {taskTypeOptions.map((key, index) => {
              return <ToggleButton key={index} value={key}>{getParsedTaskType(key as ETaskType)}</ToggleButton>
            })}
          </ToggleButtonGroup>
        </Stack>
        <Stack>
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
        </Stack>
        <Stack justifyContent="space-between" direction="row">
          <Button color="success" variant="contained" onClick={handleSave}>Сохранить</Button>
        </Stack>
      </Grid2>
    </Stack>
  )
}

export default SimpleTaskCreator