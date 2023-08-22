"use client"

import React, {useMemo, useState} from 'react';
import apiClient from "@/utils/api/sdk/sdk";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  List,
  Typography
} from "@mui/material";
import {subjects} from "@/const/subjects";
import SubjectPicker from "@/app/materials/(components)/SubjectPicker";
import AddTask from "@/app/materials/(modules)/AddTask";

const Materials = () => {
  const [subjectId, setSubjectId] = useState(1)
  const [showCount, setShowCount] = useState(10)

  const tasks = useMemo(() => { return apiClient
    .callApiWithSession().simpleTaskService.getNumberOfSubjectTasks(subjectId, showCount)
  }, [subjectId, showCount])


  return (
    <div>
      <AddTask/>

      <SubjectPicker subjectId={subjectId} setSubjectId={setSubjectId}/>

      <Accordion>
        <AccordionSummary>
          <Typography>
            Задания по предмету: {subjects.find((el) => {return el.id === subjectId})?.label}
          </Typography>
        </AccordionSummary>

        <AccordionDetails>
          <List>
            Empty List
          </List>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

export default Materials;