const ws_addr = "ws://localhost:8080/quiz-ws"
const rest_addr = "http://localhost:8080/api/games"

import {Client, Message} from "@stomp/stompjs"

export function connectToSocket(): Client {
    const stompClient = new Client({
        brokerURL: ws_addr,
        debug: (str) => {
            console.log(str)
        },
        reconnectDelay: 5000
    })
    stompClient.onConnect = () => {
        console.log("Connected to game websocket")
    }
    stompClient.activate()
    return stompClient
}

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