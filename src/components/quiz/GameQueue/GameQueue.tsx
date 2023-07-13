import React, {useState} from 'react';
import {useLazyGetOutOfQueueQuery, useLazyStandInQueueQuery} from "@/components/quiz/api/roomApi";
import {GameIds} from "@/components/quiz/consts";

const GameQueue = (
    {state, setState}: { state: GameIds, setState: (state: GameIds) => void }
) => {
    const [tryStandInQueue, {
        data: roomFetched,
        currentData: lastFetch,
        isFetching: roomSearch
    }] = useLazyStandInQueueQuery()
    const [tryGetOutOfQueue, {
        isFetching: roomLeaving
    }] = useLazyGetOutOfQueueQuery()

    const changeStatus = () => {
        if (waiting) {
            stopFindGame()
        } else {
            tryFindGame()
        }
        setWaiting(!waiting)
    }

    const tryFindGame = () => {
        console.log("Trying to find game")
        tryStandInQueue({
            userId: state.userId as number,
            roomId: undefined
        })
    }
    const stopFindGame = () => {
        console.log("Exiting room")
        if (lastFetch != undefined) {
            tryGetOutOfQueue({
                userId: state.userId as number,
                roomId: lastFetch as number
            })
        }
    }

    const [waiting, setWaiting] = useState(false)


    if (roomSearch) return <>Searching room...</>
    if (roomLeaving) return <>Leaving room...</>
    return (
        <>
            <button
                onClick={changeStatus}
                style={{
                    background: waiting ? "red" : "green",
                    width: 100, height: 50
                }}
            />
            <p>{roomFetched}</p>
        </>

    );
}

export default GameQueue;