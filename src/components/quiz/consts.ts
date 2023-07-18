export interface GameIds {
    userId: number | undefined,
    roomId: number | undefined,
    gameId: string | undefined
}

export interface Participants {
    all: Array<number>,
    active: Array<number>
}

export const initialGameState: GameIds = {
    userId: undefined,
    roomId: undefined,
    gameId: undefined
}

export const initialParticipants: Participants = {
    all: [],
    active: []
}
