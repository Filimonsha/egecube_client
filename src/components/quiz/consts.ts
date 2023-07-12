export interface GameIds {
    userId: number,
    roomId: number,
    gameId: string
}

export const initialGameState: GameIds = {
    userId: null, roomId: null, gameId: null
}
