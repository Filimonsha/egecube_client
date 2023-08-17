"use client";
import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Checkbox,
  Container,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Modal,
  Slider,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { ICourse } from "@/types/backend/subject";
import {
  ETaskType,
  IAnswerVariant,
  ITask,
  TaskRightAnswer,
} from "@/types/backend/homework";
import apiClient from "@/utils/api/sdk/sdk";
import Grid2 from "@mui/material/Unstable_Grid2";

interface IHomeworkCreatorProps {
  courses: Array<ICourse>;
}

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  height: "90vh",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

interface ITaskCreatorProps {
  handleSaveTask: (task: ITask) => void;
}

interface IAnswerVariantsProps {
  variants;
  setVariants;
  answerType: ETaskType.MULTIPLE_ANSWER | ETaskType.SINGLE_CHOICE;
}

const AnswerVariants = ({
  variants,
  setVariants,
  answerType,
}: IAnswerVariantsProps) => {
  const [newVariantValue, setNewVariantValue] = useState("");

  function handleChangeValue(value) {
    setNewVariantValue(value.target.value);
  }

  function handleAddNewVariant() {
    const newVariants: Array<IAnswerVariant> = [
      ...variants,
      { order: variants.length + 1, answer: newVariantValue },
    ];
    setVariants(newVariants);
    handleRemoveNewVariant();
  }

  function handleRemoveNewVariant() {
    setNewVariantValue("");
  }

  function handleRemoveVariant(order: number) {
    const newVariants: Array<IAnswerVariant> = variants.filter(
      variant => variant.order !== order,
    );
    setVariants(newVariants);
  }

  return (
    <div>
      <TextField value={newVariantValue} onChange={handleChangeValue} />
      <ButtonGroup
        disableElevation
        variant="contained"
        aria-label="Disabled elevation buttons">
        <Button onClick={handleAddNewVariant}>+</Button>
        <Button onClick={handleRemoveNewVariant}>-</Button>
      </ButtonGroup>
      <List>
        {variants.map(variant => (
          <ListItem
            secondaryAction={
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={() => handleRemoveVariant(variant.order)}>
                -
              </IconButton>
            }>
            <ListItemAvatar>
              <Avatar></Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="Single-line item"
              secondary={variant.answer}
            />
          </ListItem>
        ))}
      </List>
    </div>
  );
};
const TaskCreator = ({ handleSaveTask }: ITaskCreatorProps) => {
  const [taskType, setTaskType] = useState<ETaskType>(ETaskType.TEXT_INPUT);
  const [rightAnswer, setRightAnswer] = useState<TaskRightAnswer>();
  const [taskVariants, setTaskVariants] = useState<Array<IAnswerVariant>>([]);

  function handleChange(value) {
    console.log(ETaskType[value.target.value]);
    setTaskType(ETaskType[value.target.value]);
  }

  //TODO
  function handleClickSaveBtn() {
    const newTask: ITask = {
      title: "front",
      description: "lala",
      priority: 2,
      answerVariants: taskVariants,
      correctAnswer: {
        type: taskType,
        answer: rightAnswer,
      },
    };
    handleSaveTask(newTask);
  }

  return (
    <div>
      <div>
        <ToggleButtonGroup
          color="primary"
          value={taskType}
          exclusive
          onChange={handleChange}
          aria-label="Platform">
          {["текст", "один", "несколько", "документ"].map((title, index) => {
            return (
              <ToggleButton key={index} value={Object.keys(ETaskType)[index]}>
                {title}
              </ToggleButton>
            );
          })}
        </ToggleButtonGroup>

        {taskType === ETaskType.TEXT_INPUT ? (
          <TextField />
        ) : (
          taskType === ETaskType.SINGLE_CHOICE ||
          (ETaskType.MULTIPLE_ANSWER && (
            <AnswerVariants
              variants={taskVariants}
              setVariants={setTaskVariants}
              answerType={taskType}
            />
          ))
        )}
      </div>
      <Button onClick={handleClickSaveBtn}>Сохранить</Button>
    </div>
  );
};

const HomeworkCreator = ({ courses }: IHomeworkCreatorProps) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [difficult, setDifficult] = useState(1);
  const [deadline, setDeadline] = useState();
  const [checked, setChecked] = React.useState([0]);
  const [taskModalOpen, setTaskModalOpen] = React.useState(false);
  const [createNewTasks, setCreateNewTasks] = useState(false);
  const [tasks, setTasks] = useState<Array<ITask>>([]);

  const handleOpen = () => setTaskModalOpen(true);

  const handleClose = () => setTaskModalOpen(false);

  const handleToggle = (value: number) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    console.log(newChecked);
    setChecked(newChecked);
  };

  const handleSaveTask = (task: ITask) => {
    const newTasks = [...tasks, task];
    setTasks(newTasks);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container={true}
          rowSpacing={2}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid2 xs={6}>
            <div>
              <TextField
                fullWidth
                value={title}
                onChange={value => setTitle(value.target.value)}
              />
            </div>
          </Grid2>
          <Grid2 xs={6}>
            <Box>
              <TextField
                fullWidth
                value={description}
                onChange={value => setDescription(value.target.value)}
              />
            </Box>
          </Grid2>
          <Grid2 xs={6}>
            <Box>
              <Slider
                style={{
                  color:
                    difficult === 1
                      ? "#6FD86B"
                      : difficult === 2
                      ? "#FFB800"
                      : "#FF5858",
                }}
                min={1}
                max={3}
                step={1}
                value={difficult}
                onChange={value => setDifficult(value.target.value)}
              />
            </Box>
          </Grid2>
          <Grid2 xs={6}>
            <Box>
              <DateTimePicker
                label="Controlled picker"
                value={deadline}
                onChange={newValue => console.log(JSON.stringify(newValue))}
              />
            </Box>
          </Grid2>
        </Grid>
      </Box>
      <List>
        {courses.map(course => {
          const labelId = `checkbox-list-label-${course.id}`;

          return (
            <ListItem key={course.id}>
              <ListItemButton
                role={undefined}
                onClick={handleToggle(course.id)}
                dense>
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    checked={checked.indexOf(course.id) !== -1}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ "aria-labelledby": labelId }}
                  />
                </ListItemIcon>
                <ListItemText id={course.id.toString()} primary={course.name} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
      <div>
        <Button onClick={handleOpen}>Open modal</Button>
        <Modal
          open={taskModalOpen}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description">
          <Box sx={style}>
            {createNewTasks && <TaskCreator handleSaveTask={handleSaveTask} />}
            <Button onClick={() => setCreateNewTasks(prevState => !prevState)}>
              Создать задание
            </Button>
          </Box>
        </Modal>
      </div>
    </LocalizationProvider>
  );
};

export default HomeworkCreator;
