"use client"

import React, {useState} from 'react';
import "react-quill/dist/quill.snow.css"
import Button from "@mui/material/Button";
import RichTextTaskEditor from "@/app/materials/(modules)/task-creator/components/RichTextTaskEditor";
import Grid2 from "@mui/material/Unstable_Grid2";
import {Stack, TextField} from "@mui/material";
import SubjectPicker from "@/app/materials/(components)/SubjectPicker";
import {SimpleTask} from "@/types/backend/simpletask";

export interface AddTaskI {
  onSubmit: (data: SimpleTask) => void
}

let editorData = ""

const TaskCreator = ({onSubmit}: AddTaskI) => {
  const [subjectId, setSubjectId] = useState(1)

  const handleClick = () => {
    const newTaskData = {
      //TODO
      subjectId: subjectId
    } as SimpleTask

    // onSubmit()
  }


  return (
    <Stack height="100%" justifyContent="space-between" style={{margin: 50}}>
      <Grid2 rowSpacing={2} columnSpacing={{xs: 1, sm: 2, md: 3}} container>
        <TextField label={"Название"} fullWidth/>
        <SubjectPicker subjectId={subjectId} setSubjectId={setSubjectId}/>
      </Grid2>
      <Stack>
        <RichTextTaskEditor onChange={(data: string) => editorData = data}/>
      </Stack>
      <Stack justifyContent="space-between" direction="row">
        <Button color="success" variant="contained" onClick={handleClick}>Сохранить</Button>
      </Stack>
    </Stack>
  )
}

export default TaskCreator