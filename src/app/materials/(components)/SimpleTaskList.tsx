import React from 'react';
import {SimpleTaskDto} from "@/types/backend/simpletask";
import {Accordion, AccordionDetails, AccordionSummary, List, ListItem, Typography} from "@mui/material";
import {subjects} from "@/const/subjects";

export interface SimpleTaskListI {
  subjectId: number,
  loadedTasks: Array<SimpleTaskDto> | undefined
}

const SimpleTaskList = ({ subjectId, loadedTasks }: SimpleTaskListI) => {
  return (
    <Accordion>
      <AccordionSummary>
        <Typography>
          Задания по предмету: {subjects.find((el) => {
          return el.id === subjectId
        })?.label}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <List>
          {loadedTasks?.map(task => (
            <ListItem key={task.id}>
              <p>Номер предмета {task.subjectId}</p> <br/>
              {task.desc}
            </ListItem>
          ))}
        </List>
      </AccordionDetails>
    </Accordion>
  );
}

export default SimpleTaskList;