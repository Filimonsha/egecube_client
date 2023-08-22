export interface IHomeworkRequest {
    title: string;
    subjectId: number;
    creatorId: number;
    description: string;
    deadline: string;
    solversIds?: (number)[] | null;
}

export interface IHomework extends IHomeworkRequest {
    _id: string;
    tasks?: ITask[] | null;
    answers?: (null)[] | null;
}

export interface IAnswerVariant {
    order: number,
    answer: string
}

export interface ITaskRequest {
    title: string;
    description: string;
    priority: number;
    answerVariants: Array<IAnswerVariant>;
    correctAnswer: CorrectAnswer;
}

export interface ITask extends ITaskRequest {
    _id: string,
    homeworkId: string,
}

export enum ETaskType {
    TEXT_INPUT = "TEXT_INPUT",
    SINGLE_CHOICE = "SINGLE_CHOICE",
    MULTIPLE_ANSWER = "MULTIPLE_ANSWER",
    ANSWER_WITH_ATTACHMENT = "ANSWER_WITH_ATTACHMENT"
}

export type TaskRightAnswer = string | number | Array<number>;

export interface CorrectAnswer {
    type: ETaskType;
    answer: TaskRightAnswer;
}

export interface IAnswer {
    taskId: string;
    taskAnswer: TaskAnswer;
}

interface TaskAnswer {
    answerIsCorrect: boolean;
    answer: Answer;
}

interface Answer {
    type: string;
    answer: string;
}

interface IEvaluate {
    grade: number;
    feedback: string;
    dateValidated: string;
}

export interface IHomeworkAnswer {
    _id: string,
    homeworkId: string,
    solverId: number,
    answers: Array<IAnswerVariant>,
    evaluate?: IEvaluate
}

export interface ISolver {
    name: string;
    _id: number;
    secondName: string;
    email: string;
    solverRole: string;
    homeworks?: Array<string>;
    homeworkAnswers?: Array<String>;
}
