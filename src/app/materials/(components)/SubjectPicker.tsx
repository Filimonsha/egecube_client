import React from 'react';
import {Autocomplete, TextField} from "@mui/material";
import {subjects} from "@/const/subjects";

interface SubjectPickerI {
  subjectId: number,
  setSubjectId: (value: number) => void
}

const SubjectPicker = ({ subjectId, setSubjectId }: SubjectPickerI) => {
  return (
    <Autocomplete
      value={subjects.find((el) => {return el.id === subjectId})?.label}
      onChange={(event: any, newValue: string | null) => {
        setSubjectId(subjects.find((el) => {return el.label === newValue})?.id!);
      }}
      options={subjects.map((el) => {return el.label})}
      sx={{ width: 300 }}
      renderOption={(props, option) => {
        return (
          <li {...props} key={option}>
            {option}
          </li>
        );
      }}
      renderInput={(params) => <TextField key={params.id} {...params} />}
      disableClearable
    />
  );
}

export default SubjectPicker;