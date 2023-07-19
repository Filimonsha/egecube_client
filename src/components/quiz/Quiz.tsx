"use client"
import React, {useEffect, useRef, useState} from 'react';
import IdPicker from "@/components/quiz/IdPicker/IdPicker";
import GameQueue from "@/components/quiz/GameQueue/GameQueue";
import {initialGameIdsState} from "@/components/quiz/consts";
import {Client, Message, Subscription} from "stompjs";
import {channel_addr} from "@/components/quiz/api/addresses";
import GameField from "@/components/quiz/GameField/GameField";
import {GameIds, GameState} from "@/components/quiz/types/gameStates";


const Quiz = (
    {wsConnection}: { wsConnection: Client }
) => {
    const [gameIdsState, setGameIdsState] = useState<GameIds>(initialGameIdsState)
    const gameSubscription = useRef<Subscription | undefined>(undefined)
    const [gameState, setGameState] = useState<GameState>()

    useEffect(() => {
        if (gameIdsState.gameId !== undefined) {
            gameSubscription.current?.unsubscribe()
            gameSubscription.current = wsConnection.subscribe(
                `${channel_addr}/${gameIdsState.gameId}`,
                (message: Message) => {
                    const gameState = JSON.parse(message.body) as GameState
                    setGameState(gameState)
                    console.log(gameState)
                }
            )
        }
    }, [gameIdsState])

    if (gameIdsState.userId === undefined) {
        return <IdPicker state={gameIdsState} setState={setGameIdsState}/>
    }
    if (!gameState?.started) {
        return <GameQueue
            state={gameIdsState}
            setState={setGameIdsState}
            wsConnection={wsConnection}
            gameState={gameState}
            setGameState={setGameState}
        />
    }
    return (
        <div style={{
            display: "flex", flexDirection: "column",
            padding: 15
        }}>
            <p>Game</p>
            <p>{gameState?.id}</p>
            <GameField gameState={gameState} setGameState={setGameState} userState={gameIdsState}/>
        </div>
    );
};

export default Quiz;