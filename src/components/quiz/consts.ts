export interface GameIds {
    userId: number | undefined, roomId: number | undefined, gameId: string | undefined
}

export const initialGameState: GameIds = {
    userId: undefined, roomId: undefined, gameId: undefined
}
