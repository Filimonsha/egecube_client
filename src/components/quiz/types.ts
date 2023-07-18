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

export type GameState = {
    appendedChatId: number,
    participants: Array<number>,
    gameField: Array<Array<Pair<number, boolean>>>,
    postedAnswers: Array<Pair<GameAnswer, boolean>>,
    startApproved: Array<number>,
    started: boolean
}

export type RoomPlayers = {
    roomNum: number
    playerNum: number,
    playerIds: Array<number>,
    readyIds: Array<number>
    gameId: string
}

export type StartRequest = {
    gameId: number,
    userId: number,
    roomId: number
}

type Pair<A, B> = {
    first: A,
    second: B
}