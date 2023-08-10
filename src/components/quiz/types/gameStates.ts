import {Pair, SimpleTask} from "@/components/quiz/types/types";
import {GameAnswer} from "@/components/quiz/types/gameActions";

export interface GameIds {
    userId: number | undefined,
    gameId: string | undefined
}

export interface GameState  {
    id: string,
    roomId: number,
    appendedChatId: number,
    participants: Array<number>,
    taskSet: Array<SimpleTask>
    gameField: Array<Array<Pair<string, boolean>>>,
    postedAnswers: Array<Pair<GameAnswer, boolean>>,
    pickedForAnswer: Array<String>
    startApproved: Array<number>,
    started: boolean,
    winner: number
}