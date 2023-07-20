export type ActionType = "PICK_FOR_ANSWER" | "UNPICK_FOR_ANSWER" | "SUBMIT_ANSWER" | "GIVE_UP"

export type GameAnswer = {
    userId: number,
    simpleTaskId: string,
    answer: string
}

export interface QuizAction {
    actionType: ActionType
}

export interface PickForAnswer extends QuizAction {
    questionId: string
}

export interface UnPickForAnswer extends QuizAction {
    questionId: string
}

export interface SubmitAnswer extends QuizAction {
    answer: GameAnswer
}

export interface GiveUp extends QuizAction {
    userId: number
}

export type GameActionRequest = {
    gameId: string,
    action: QuizAction
}