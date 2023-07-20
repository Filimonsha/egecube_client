import SockJS from "sockjs-client";
import * as Stomp from "stompjs"
import {ws_addr} from "@/components/quiz/api/addresses";

export function connectToSocket() {
    const socket = new SockJS(ws_addr)
    const stompClient = Stomp.over(socket)

    stompClient.connect({}, function (frame: any) {
        console.log(frame);
    });
    return stompClient
}
