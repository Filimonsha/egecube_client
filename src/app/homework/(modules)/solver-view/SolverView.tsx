import React from "react";
import apiClient from "@/utils/api/sdk/sdk";
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Button,
    List,
    ListItem,
    Stack,
    Typography
} from "@mui/material";
import { ISolver } from "@/types/backend/homework-management/homework";
import HomeworkInstance from "@/app/homework/(modules)/homework-instance/HomeworkInstance";

interface ISolverViewProps {
    solver: ISolver;
    subjectId: number;
}

const SolverView = async ({
                              solver,
                              subjectId
                          }: ISolverViewProps) => {

    const solverAllHomework = await apiClient.callApiWithSession().homeworkService.getSolverAllHomework(solver._id, subjectId);
    const solverHomeworkAnswers = await apiClient.callApiWithSession().homeworkService.getSolverHomeworkAnswers(solver._id);

    if (solverAllHomework && solverHomeworkAnswers) {
        const allSolvedHomework = solverAllHomework.filter(homework => solver.homeworkAnswers?.includes(homework._id));

        const homeworkAnswersWithoutEvaluateIds = solverHomeworkAnswers.filter(homeworkAnswer => !!homeworkAnswer.evaluate).map(hwAnswer => hwAnswer._id);

        const allSolvedUnratedHomework = allSolvedHomework.filter(hw => homeworkAnswersWithoutEvaluateIds.includes(hw._id));
        const allSolverRatedHomework = allSolvedHomework.filter(hw => !homeworkAnswersWithoutEvaluateIds.includes(hw._id));

        const allUnsolvedHomework = solverAllHomework && solverAllHomework.filter(homework => !solver.homeworkAnswers?.includes(homework._id));

        return (
            <div>

                <Stack>
                    {[{
                        title: "Новые ДЗ",
                        list: allUnsolvedHomework
                    }, {
                        title: "ДЗ на проверке",
                        list: allSolvedUnratedHomework
                    }, {
                        title: "История ваших решений ДЗ",
                        list: allSolverRatedHomework
                    }].map(({title,list}) =>
                        <Accordion>
                            <AccordionSummary>
                                <Typography>{title}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <List>
                                    {list.map(homework => (
                                        <HomeworkInstance  homeworkData={homework}/>
                                        // <ListItem key={homework._id}><Typography>{homework.title}</Typography></ListItem>
                                    ))}
                                </List>
                            </AccordionDetails>
                        </Accordion>
                    )}
                </Stack>
            </div>
        );
    }

};

export default SolverView;
