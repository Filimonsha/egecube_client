import {ETaskType} from "@/types/backend/homework-management/homework";

export const getParsedTaskType = (taskType:ETaskType) => {
    switch (taskType) {
        case ETaskType.SINGLE_CHOICE:
            return "Один вариант ответа"
        case ETaskType.MULTIPLE_ANSWER:
            return "Несколько ответов"
        case ETaskType.ANSWER_WITH_ATTACHMENT:
            return "Ответ в виде документа "
        case ETaskType.TEXT_INPUT:
            return "Текстовый ответ"
    }
}
