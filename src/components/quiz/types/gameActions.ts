export type ActionType = "PICK_FOR_ANSWER" | "SUBMIT_ANSWER" | "GIVE_UP"

export type GameAnswer = {
    userId: number,
    simpleTaskId: string,
    answer: string
}

export interface QuizAction {
    actionType: ActionType
}

export interface PickForAnswer extends QuizAction {
    row: number,
    column: number
}

export interface SubmitAnswer extends QuizAction {
    answer: GameAnswer
}

export interface GiveUp extends QuizAction {}


export type GameAction = {
    actionType: ActionType,
    status: boolean,
    row: number,
    column: number,
    answer: GameAnswer,
    content: string
}

export type GameActionRequest = {
    gameId: string,
    action: GameAction
}