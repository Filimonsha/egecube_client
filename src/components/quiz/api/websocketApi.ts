import SockJS from "sockjs-client";
import * as Stomp from "stompjs"

const ws_addr = "http://localhost:8080/quiz-ws"
const rest_addr = "http://localhost:8080/api/games"


function mySocketFactory() {
    return new SockJS(ws_addr, );
}

export function connectToSocket() {
    const socket = new SockJS(ws_addr)
    const stompClient = Stomp.over(socket)

    stompClient.connect({}, function (frame: any) {
        console.log(frame);
    });
    // const stompClient = new Client({
    //     // brokerURL: ws_addr,
    //     webSocketFactory: mySocketFactory,
    //     debug: (str) => {
    //         console.log(str)
    //     },
    //     reconnectDelay: 5000
    // })
    // stompClient.onConnect = () => {
    //     console.log("Connected to game websocket")
    // }
    // stompClient.activate()
    // return stompClient
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