import React, { useEffect } from "react";
import { ETaskType, IAnswerVariant } from "@/types/backend/homework-management/homework";
import { IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Radio } from "@mui/material";

interface ITaskVariantsProps {
    isForCreating: {
        isEditable: boolean,
    } | undefined,
    disable?: boolean,
    variants: Array<IAnswerVariant>,
    answerType: ETaskType.MULTIPLE_ANSWER | ETaskType.SINGLE_CHOICE,
    previewMode?: {
        previewAfterCreatingTask: boolean
    } | undefined,
    rightAnswer?: string | number | Array<number>,
    setRightAnswer?: Function,
    handleRemoveVariant?

}

const TaskVariants = ({

                          isForCreating,
                          disable,
                          variants,
                          answerType,
                          previewMode,
                          rightAnswer,
                          setRightAnswer,
                          handleRemoveVariant
                      }: ITaskVariantsProps) => {

    const [checkedAnswers, setCheckedAnswers] = React.useState<number[]>([]);

    const handleToggleVariant = (value: number) => () => {
        if (answerType === ETaskType.MULTIPLE_ANSWER) {
            const currentIndex = checkedAnswers.indexOf(value);
            const newChecked = [...checkedAnswers];

            if (currentIndex === -1) {
                newChecked.push(value);
            } else {
                newChecked.splice(currentIndex, 1);
            }

            setCheckedAnswers(newChecked);
            setRightAnswer && setRightAnswer(newChecked);
        } else {
            setCheckedAnswers([value]);
            setRightAnswer && setRightAnswer([value]);
        }

    };

    return <List>
        {variants.map((variant) =>
            <ListItem
                key={variant.order}
                secondaryAction={isForCreating && isForCreating.isEditable &&
                    <IconButton edge="end" aria-label="delete"
                                onClick={() => handleRemoveVariant(variant.order)}>
                        -
                    </IconButton>
                }
            >
                <ListItemButton disabled={disable || false} role={undefined}
                                onClick={handleToggleVariant(variant.order)} dense>
                    <ListItemIcon>
                        <Radio
                            edge="start"
                            checked={previewMode ?
                                (Array.isArray(rightAnswer) ? rightAnswer.includes(variant.order) : rightAnswer === variant.order)
                                : checkedAnswers.indexOf(variant.order) !== -1}
                            tabIndex={-1}
                            disableRipple
                            color={isForCreating ? (!isForCreating.isEditable ?
                                    ((Array.isArray(rightAnswer) ? rightAnswer.includes(variant.order) : rightAnswer === variant.order) ? "success" : "error")
                                    : "primary")
                                : "primary"
                            }
                            // inputProps={{'aria-labelledby': labelId}}
                        />
                    </ListItemIcon>
                    <ListItemText
                        primary="Single-line item"
                        secondary={variant.answer}
                    />
                </ListItemButton>

            </ListItem>
        )}
    </List>;

};

export default TaskVariants;
