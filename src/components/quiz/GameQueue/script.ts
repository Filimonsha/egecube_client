import {QueueRequest} from "@/components/quiz/api/roomApi";
import {GameIds, GameState} from "@/components/quiz/types";

export const tryFindGame = (
    tryStandInQueue: (val: number) => void, state: GameIds
) => {
    console.log("Trying to find game")
    tryStandInQueue(state.userId as number)

}
export const stopFindGame = (
    tryGetOutOfQueue: (val: QueueRequest) => void, lastFetch: GameState | undefined, state: GameIds
) => {
    console.log("Exiting room")
    if (lastFetch !== undefined) {
        tryGetOutOfQueue({
            userId: state.userId as number,
            roomId: lastFetch.roomId as number
        })
    }
}