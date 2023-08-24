import React from "react";
import apiClient from "@/utils/api/sdk/sdk";
import { USER_ROLE } from "@/types/backend/user";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import HomeworkCreator from "@/app/homework/(modules)/homework-creator/HomeworkCreator";

interface IListOfAllHomeworkProps {
  userRole: USER_ROLE;
  userId: number;
}

const ListOfAllHomework = async ({
  userRole,
  userId,
}: IListOfAllHomeworkProps) => {
  const homeworks = await apiClient
    .callApiWithSession()
    .homeworkService.getAllHomework(userRole === USER_ROLE.Teacher, userId);
  //TODO
  const courses = await apiClient
    .callApiWithSession()
    .subjectService.getCoursesBySubjectId(1);
  console.log(homeworks, courses, "shaaa");

  if (userRole === USER_ROLE.Teacher) {
  }

  return (
    <div>
      {courses && <HomeworkCreator courses={courses} />}

      <Accordion>
        <AccordionSummary>
          <Typography>all your homeworks</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List>
            {homeworks?.map(homework => (
              <ListItem key={homework._id}>{homework.title}</ListItem>
            ))}
          </List>
        </AccordionDetails>
      </Accordion>
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
