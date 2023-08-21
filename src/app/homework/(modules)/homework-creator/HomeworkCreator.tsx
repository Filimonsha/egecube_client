'use client'
import {
    Badge,
    Box,
    Button,
    Checkbox,
    Container,
    InputLabel,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Modal,
    Slider,
    Stack,
    TextField,
    Typography
} from "@mui/material";
import React, {useState} from "react";
import {DateTimePicker, LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {ICourse} from "@/types/backend/subject";
import {ITask} from "@/types/backend/homework";
import Grid2 from "@mui/material/Unstable_Grid2";
import TaskCreator from "@/app/homework/(modules)/homework-creator/task-creator/TaskCreator";
import TaskList from "@/app/homework/(modules)/homework-creator/components/TaskList";
import apiClient from "@/utils/api/sdk/sdk";
import {getSession} from "next-auth/react";
import course from "@/types/backend/course";

interface IHomeworkCreatorProps {
    courses: Array<ICourse>
}

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '90%',
    minHeight: '50vh',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


const HomeworkCreator = ({courses}: IHomeworkCreatorProps) => {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [difficult, setDifficult] = useState(1)
    const [deadline, setDeadline] = useState<string>("")
    const [coursesChecked, setCoursesChecked] = useState([0]);
    const [taskModalOpen, setTaskModalOpen] = useState(false);
    const [coursesModalOpen, setCoursesModalOpen] = useState(false)
    const [createNewTask, setCreateNewTask] = useState(false)
    const [tasks, setTasks] = useState<Array<ITask>>([])

    const handleOpenCoursesModal = () => setCoursesModalOpen(true);

    const handleCloseCoursesModal = () => setCoursesModalOpen(false);

    const handleOpenTaskModal = () => setTaskModalOpen(true);

    const handleCloseTaskModal = () => setTaskModalOpen(false);

    const handleToggle = (value: number) => () => {
        const currentIndex = coursesChecked.indexOf(value);
        const newChecked = [...coursesChecked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        console.log(newChecked, courses)
        setCoursesChecked(newChecked);
    };

    const handleSaveTask = (task: ITask) => {
        const newTasks: Array<ITask> = [...tasks, {...task, priority: tasks.length + 1}]
        setTasks(newTasks)
        setTaskModalOpen(false)
    }

    const handleCanselCreatingTask = () => {
        setTaskModalOpen(false)
    }

    async function handleSaveHomework() {
        const session = await getSession()

        if (session) {
            apiClient.callApiWithSession(false).homeworkService.createHomework({
                title,
                description,
                deadline,
                creatorId: session.user.userId,
                subjectId: 1,
                //TODO
                solversIds: courses.find(course => coursesChecked.includes(course.id)).participants
                    // courses.map(course => coursesChecked.includes(course.id) && course.participants.toString()).join(",").split(",").map( id =>Number.parseInt(id))
            }).then(res => {
                res?._id &&
                apiClient.callApiWithSession(false).homeworkService.addTasksToHomework(res._id,tasks).then(res =>console.log(res))

            })
            console.log(tasks)
        }
        //TODO

    }

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Container>
                <Stack spacing={5}>
                    <Grid2 container={true} rowSpacing={2}
                           columnSpacing={{xs: 1, sm: 2, md: 3}}>
                        <Grid2 sm={6}>
                            <div>
                                <TextField label="Название" fullWidth value={title}
                                           onChange={value => setTitle(value.target.value)}/>

                            </div>
                        </Grid2>
                        <Grid2 sm={6}>
                            <Box>
                                <TextField label="Описание" fullWidth value={description}
                                           onChange={value => setDescription(value.target.value)}/>
                            </Box>
                        </Grid2>
                        <Grid2 sm={6}>
                            <Stack justifyContent="space-between" direction="row" spacing={10} sx={{
                                p: 2,
                                border: '1px solid rgba(0, 0, 0, 0.23)',
                                borderRadius: '4px',
                                display: 'flex',
                                alignItems: 'center'
                            }}>
                                <InputLabel>Сложность</InputLabel>

                                <Slider sx={{maxWidth: '50%'}} style={{
                                    color: difficult === 1 ? "#6FD86B" : difficult === 2 ? "#FFB800" : "#FF5858",
                                }} min={1} max={3} step={1} value={difficult}
                                        onChange={value => setDifficult(value.target.value)}/>

                            </Stack>
                        </Grid2>
                        <Grid2 sm={6}>
                            <Box>
                                <DateTimePicker
                                    label="Controlled picker"
                                    sx={{width: "100%"}}
                                    ampm={false}
                                    value={deadline}
                                    onChange={(newValue) => setDeadline(newValue)}
                                />
                            </Box>

                        </Grid2>
                        <Grid2 justifyContent='center' sm={8}>
                            <Stack justifyContent="space-between" direction="row" spacing={10} sx={{
                                p: 2,
                                border: '1px solid rgba(0, 0, 0, 0.23)',
                                borderRadius: '4px',
                                display: 'flex',
                                alignItems: 'center',

                            }}>
                                {/*                        TODO*/}
                                <Typography>Показать результаты до </Typography>
                            </Stack>

                        </Grid2>

                        <Grid2 display='flex' justifyContent='center' alignItems='center' sm={4}>
                            <Badge badgeContent={coursesChecked.length - 1} color="secondary">
                                <Button size="large" variant="contained" onClick={handleOpenCoursesModal}>Выбранные
                                    группы</Button>
                            </Badge>
                        </Grid2>
                    </Grid2>
                    <Stack sx={{borderTop: "1px solid #000", pt: 3}}>
                        <Badge sx={{alignSelf: "center"}} badgeContent={tasks.length} color="info">
                            <Button variant="contained" size="large" onClick={handleOpenTaskModal}>
                                Выбрать задания
                            </Button>
                        </Badge>
                        <TaskList tasks={tasks}/>
                    </Stack>

                    <Button sx={{alignSelf: 'center'}} variant="contained" color="success" onClick={handleSaveHomework}>Создать
                        домашнее
                        задание</Button>
                </Stack>

            </Container>

            <div>
                <Modal
                    open={taskModalOpen}
                    onClose={handleCloseCoursesModal}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        {
                            createNewTask ?
                                <TaskCreator handleCanselCreatingTask={handleCanselCreatingTask}
                                             handleSaveTask={handleSaveTask}/> :
                                <Button onClick={() => setCreateNewTask(prevState => !prevState)}>Создать
                                    задание</Button>
                        }
                    </Box>
                </Modal>
                <Modal
                    open={coursesModalOpen}
                    onClose={handleCloseCoursesModal}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Stack sx={style} alignItems="center">
                        <Typography>Выберите группы для прикрепления домашнего задания</Typography>
                        <List sx={{alignSelf: "start"}}>
                            {courses.map(course => {
                                const labelId = `checkbox-list-label-${course.id}`;

                                return <ListItem key={course.id}>
                                    <ListItemButton role={undefined} onClick={handleToggle(course.id)} dense>
                                        <ListItemIcon>
                                            <Checkbox
                                                edge="start"
                                                checked={coursesChecked.indexOf(course.id) !== -1}
                                                tabIndex={-1}
                                                disableRipple
                                                inputProps={{'aria-labelledby': labelId}}
                                            />
                                        </ListItemIcon>
                                        <ListItemText id={course.id.toString()} primary={course.name}/>
                                    </ListItemButton>
                                </ListItem>
                            })}
                        </List>

                        <Button variant="contained" color="success" size="large"
                                onClick={handleCloseCoursesModal}>Сохранить</Button>
                    </Stack>
                </Modal>
            </div>
        </LocalizationProvider>
    );
};

export default HomeworkCreator;
