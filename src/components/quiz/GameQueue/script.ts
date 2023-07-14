import {QueueRequest} from "@/components/quiz/api/roomApi";
import {GameIds} from "@/components/quiz/consts";

export const tryFindGame = (
    tryStandInQueue: (val: QueueRequest) => void, state: GameIds
) => {
    console.log("Trying to find game")
    tryStandInQueue({
        userId: state.userId as number,
        roomId: undefined
    })
}
export const stopFindGame = (
    tryGetOutOfQueue: (val: QueueRequest) => void, lastFetch: number | undefined, state: GameIds
) => {
    console.log("Exiting room")
    if (lastFetch != undefined) {
        tryGetOutOfQueue({
            userId: state.userId as number,
            roomId: lastFetch as number
        })
    }
}