export type StartRequest = {
    gameId: string,
    userId: number
}

export interface Participants {
    all: Array<number>,
    active: Array<number>
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