'use client'
import {Box, Container, Slider, TextField} from "@mui/material";
import React, {useState} from "react";
import {DateTimePicker, LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";


const HomeworkCreator = () => {
    const [difficult, setDifficult] = useState(1)
    const [deadline, setDeadline] = useState()

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>

            <Container>

                <Box>
                    <Slider style={{
                        color: difficult === 1 ? "#6FD86B" : difficult === 2 ? "#FFB800" : "#FF5858"
                    }} min={1} max={3} step={1} value={difficult} onChange={value => setDifficult(value.target.value)}/>
                </Box>
                <Box>
                    <DateTimePicker
                        label="Controlled picker"
                        value={deadline}
                        onChange={(newValue) => console.log(newValue)}
                    />
                </Box>
            </Container>
        </LocalizationProvider>
    );
};

export default HomeworkCreator;
