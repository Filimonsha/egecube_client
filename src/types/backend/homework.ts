export interface IHomeworkRequest {
  title: string;
  subjectId: number;
  creatorId: string;
  description: string;
  deadline: string;
  solvers?: number[] | null;
}

export interface IHomework extends IHomeworkRequest {
  _id: string;
  tasks?: null[] | null;
  answers?: null[] | null;
}
export interface IAnswerVariant {
  order: number;
  answer: string;
}
export interface ITask {
  title: string;
  description: string;
  priority: number;
  answerVariants: Array<IAnswerVariant>;
  correctAnswer: CorrectAnswer;
}

export enum ETaskType {
  TEXT_INPUT = "TEXT_INPUT",
  SINGLE_CHOICE = "SINGLE_CHOICE",
  MULTIPLE_ANSWER = "MULTIPLE_ANSWER",
  ANSWER_WITH_ATTACHMENT = "ANSWER_WITH_ATTACHMENT",
}

export type TaskRightAnswer = string | number | Array<number>;

export interface CorrectAnswer {
  type: ETaskType;
  answer?: TaskRightAnswer;
}
