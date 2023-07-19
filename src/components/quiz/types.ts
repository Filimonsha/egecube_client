export type ActionType = "CLICK_READY" | "PICK_FOR_ANSWER" | "SUBMIT_ANSWER" | "WRITE_MESSAGE" | "GIVE_UP"

export type GameAnswer = {
    userId: number,
    simpleTaskId: number,
    answer: string
}

export type GameAction = {
    actionType: ActionType,
    status: boolean,
    row: number,
    column: number,
    answer: GameAnswer,
    content: string
}

export type RoomPlayers = {
    roomNum: number
    playerNum: number,
    playerIds: Array<number>,
    readyIds: Array<number>
    gameId: string
}

export type StartRequest = {
    gameId: string,
    userId: number
}

export interface GameIds {
    userId: number | undefined,
    gameId: string | undefined
}

export interface Participants {
    all: Array<number>,
    active: Array<number>
}

export interface GameState  {
    id: string,
    roomId: number,
    appendedChatId: number,
    participants: Array<number>,
    gameField: Array<Array<Pair<string, boolean>>>,
    postedAnswers: Array<Pair<GameAnswer, boolean>>,
    startApproved: Array<number>,
    started: boolean
}

type Pair<A, B> = {
    first: A,
    second: B
}