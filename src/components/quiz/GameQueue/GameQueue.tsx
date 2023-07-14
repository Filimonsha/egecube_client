import React, {useState} from 'react';
import {useLazyGetOutOfQueueQuery, useLazyStandInQueueQuery} from "@/components/quiz/api/roomApi";
import {GameIds} from "@/components/quiz/consts";
import {stopFindGame, tryFindGame} from "@/components/quiz/GameQueue/script";
import {connectToSocket} from "@/components/quiz/api/websocketApi";
import {Client} from "stompjs";

const GameQueue = (
    {state, setState, setConnection}: {
        state: GameIds, setState: (state: GameIds) => void, setConnection: (conn: Client) => void
    }
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
            stopFindGame(tryGetOutOfQueue, lastFetch, state)
        } else {
            tryFindGame(tryStandInQueue, state)
        }
        setWaiting(!waiting)
    }

    const [waiting, setWaiting] = useState(false)
    const [wsConnection, setWsConnection] = useState<Client>(connectToSocket)



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
            {roomFetched && <p>Room found {roomFetched}</p>}
            {wsConnection && <p>Websocket connected </p>}
            {/*{(() => {*/}
            {/*    if (roomFetched != undefined && wsConnection) {*/}
            {/*        return <button>Join Game</button>*/}
            {/*    }*/}
            {/*})}*/}
        </>

    );
}

export default GameQueue;