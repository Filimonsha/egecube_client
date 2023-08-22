import React from 'react';
import {Stack} from "@mui/material";
import {ITaskRequest} from "@/types/backend/homework-management/homework";
import Task from "@/app/homework/(components)/Task";

interface ITaskListProps {
    tasks: Array<ITaskRequest>
}

const TaskList = ({tasks}: ITaskListProps) => {
    return (
        <Stack>
            {
                tasks.map((task,index) => <Task order={index + 1} data={task}  disabled={true}/>)
            }
        </Stack>
    );
};

export default TaskList;
