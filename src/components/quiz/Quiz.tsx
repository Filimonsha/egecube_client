"use client"
import React, {useEffect, useRef, useState} from 'react';
import IdPicker from "@/components/quiz/IdPicker/IdPicker";
import GameQueue from "@/components/quiz/GameQueue/GameQueue";
import {GameIds, initialGameState, initialParticipants, Participants} from "@/components/quiz/consts";
import {Client, Message, Subscription} from "stompjs";
import {channel_addr} from "@/components/quiz/api/addresses";
import {GameState} from "@/components/quiz/types";


const Quiz = (
    {wsConnection}: { wsConnection: Client }
) => {
    const [gameIdsState, setGameIdsState] = useState<GameIds>(initialGameState)
    const [participants, setParticipants] = useState<Participants>(initialParticipants)
    const [gameGoing, setGameGoing] = useState(false)
    const gameSubscription = useRef<Subscription | undefined>(undefined)

    useEffect(() => {
        if (gameIdsState.gameId !== undefined) {
            gameSubscription.current?.unsubscribe()
            gameSubscription.current = wsConnection.subscribe(
                `${channel_addr}/${gameIdsState.gameId}`,
                (message: Message) => {
                    const gameState = JSON.parse(message.body) as GameState
                    console.log(gameState)
                }
            )
        }
    }, [gameIdsState])

    if (gameIdsState.userId === undefined) {
        return <IdPicker state={gameIdsState} setState={setGameIdsState}/>
    }
    if (!gameGoing) {
        return <GameQueue
            state={gameIdsState}
            setState={setGameIdsState}
            wsConnection={wsConnection}
            participants={participants}
            setParticipants={setParticipants}
        />
    }
    return (
        <div style={{
            display: "flex", flexDirection: "column",
            padding: 15
        }}>
            <p>Game</p>
            <p>{gameIdsState.gameId}</p>
        </div>
    );
};

export default Quiz;