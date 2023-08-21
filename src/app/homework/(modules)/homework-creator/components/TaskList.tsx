import React from 'react';
import {Stack} from "@mui/material";
import {ITask} from "@/types/backend/homework";
import Task from "@/app/homework/(components)/Task";

interface ITaskListProps {
    tasks: Array<ITask>
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
