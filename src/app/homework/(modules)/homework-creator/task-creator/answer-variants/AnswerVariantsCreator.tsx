import { ETaskType, IAnswerVariant } from "@/types/backend/homework-management/homework";
import React, { useState } from "react";
import {
    Button,
    ButtonGroup,
    Checkbox,
    IconButton,
    InputLabel,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText, Radio,
    Stack,
    TextField,
    Typography
} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import TaskVariants from "@/app/homework/(modules)/homework-creator/components/TaskVariants";

interface IAnswerVariantsProps {
    rightAnswer: string | number | Array<number> | undefined,
    setRightAnswer,
    variants: Array<IAnswerVariant>,
    setVariants,
    answerType: ETaskType.MULTIPLE_ANSWER | ETaskType.SINGLE_CHOICE,

}

const AnswerVariantsCreator = ({
                                   rightAnswer,
                                   setRightAnswer,
                                   variants,
                                   setVariants,
                                   answerType
                               }: IAnswerVariantsProps) => {
    const [newVariantValue, setNewVariantValue] = useState("");

    function handleChangeValue(value) {
        setNewVariantValue(value.target.value);
    }

    function handleAddNewVariant() {
        const newVariants: Array<IAnswerVariant> = [...variants, {
            order: variants.length + 1,
            answer: newVariantValue
        }];
        setVariants(newVariants);
        handleRemoveNewVariant();
    }

    function handleRemoveNewVariant() {
        setNewVariantValue("");
    }

    function handleRemoveVariant(order: number) {
        const newVariants: Array<IAnswerVariant> = variants.filter(variant => variant.order !== order);
        setVariants(newVariants);
    }

    return (
        // <Grid2 spacing={3} container>
        <>
            {/*<Grid2>*/}
            {/*</Grid2>*/}
            <Grid2 lg={6}>
                <Typography textAlign="center" variant="subtitle1">Создайте варианты ответов и укажите
                    верный/верные</Typography>
                <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <InputLabel>Вариант ответа {variants.length + 1}</InputLabel>

                    <Stack direction="row" justifyContent="center" alignItems="center">
                        <TextField value={newVariantValue} onChange={handleChangeValue} />
                        <ButtonGroup
                            sx={{ height: "100%" }}
                            disableElevation
                            variant="contained"
                            aria-label="Disabled elevation buttons"
                        >
                            <Button onClick={handleAddNewVariant}>+</Button>
                            <Button onClick={handleRemoveNewVariant}>-</Button>
                        </ButtonGroup>
                    </Stack>

                </Stack>
            </Grid2>
            <Grid2>
                <TaskVariants variants={variants} answerType={answerType}
                              handleRemoveVariant={handleRemoveVariant} setRightAnswer={setRightAnswer}
                              isForCreating={{ isEditable: true }} />
            </Grid2>

        </>
        // </Grid2>
    );
};
export default AnswerVariantsCreator;
