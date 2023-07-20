export type StartRequest = {
    gameId: string,
    userId: number
}

export type Pair<A, B> = {
    first: A,
    second: B
}

export type SimpleTask = {
    id: string,
    desc: string,
    answers: Array<string>
}