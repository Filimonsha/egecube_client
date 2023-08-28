"use client"

import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export interface TaskNUmberPickerI {
  options: Array<number>,
  taskNum: number,
  setTaskNum: (val: number) => void,
}
const TaskNumberPicker = ({options, taskNum, setTaskNum}: TaskNUmberPickerI) => {
  return (
    <Autocomplete
      value={taskNum.toString()}
      onChange={(event: any, newValue: string | null) => {
        if (newValue !== null) {
          setTaskNum(parseInt(newValue))
        }
      }}
      options={options.map((el) => el.toString())}
      renderOption={(props, option) => {
        return (
          <li {...props} key={option}>
            {option}
          </li>
        );
      }}
      sx={{width: 200}}
      renderInput={(params) => <TextField {...params} label="Номер задания"/>}
    />
  )
}

export default TaskNumberPicker