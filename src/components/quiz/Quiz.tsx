"use client"
import React, {useState} from 'react';
import IdPicker from "@/components/quiz/IdPicker/IdPicker";
import GameQueue from "@/components/quiz/GameQueue/GameQueue";
import {GameIds, initialGameState} from "@/components/quiz/consts";
import { useLazyGetOutOfQueueQuery, useLazyStandInQueueQuery } from "@/components/quiz/api/roomApi";


const Quiz = () => {
    const [tryStandInQueue, {
        data: roomFetched,
        error: roomFetchedError,
    }] = useLazyStandInQueueQuery()
    const [tryGetOutOfQueue, {
        data: roomQuit,
        error: roomQuitError
    }] = useLazyGetOutOfQueueQuery()

    const handleUserChange = (value: number) => {
        setGameIdsState({...gameIdsState, userId: value})
    }

    const tryFindGame = () => {
        console.log("Trying to find game")
        tryStandInQueue(gameIdsState.userId as number)
        setGameIdsState({...gameIdsState, roomId: roomFetched as number})
        console.log(roomFetched)
    }
    const stopFindGame = () => {
        console.log("Exiting room")
        if (roomFetched != undefined) {
            tryGetOutOfQueue(gameIdsState.roomId as number)
        }
        setGameIdsState({...gameIdsState, roomId: undefined})
        console.log(roomQuit)
    }

    const [gameIdsState, setGameIdsState] = useState<GameIds>(initialGameState)


    if (gameIdsState.userId === undefined) {
        return (
            <IdPicker onFinish={handleUserChange}/>
        )
    }
    return (
        <div style={{display: "flex", flexDirection: "column"}}>
            <GameQueue tryToFind={tryFindGame} stopFind={stopFindGame}/>
            <p>{roomFetched}</p>
        </div>
    );
};

export default Quiz;