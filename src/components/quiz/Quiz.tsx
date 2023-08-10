"use client"
import React, {useEffect, useRef, useState} from 'react';
import IdPicker from "@/components/quiz/IdPicker/IdPicker";
import GameQueue from "@/components/quiz/GameQueue/GameQueue";
import {initialGameIdsState} from "@/components/quiz/consts";
import {Client, Message, Subscription} from "stompjs";
import {channel_addr} from "@/components/quiz/api/addresses";
import GameField from "@/components/quiz/GameField/GameField";
import {GameIds, GameState} from "@/components/quiz/types/gameStates";
import Timeout from "@/components/quiz/Timeout/Timeout";
import {blockIfWrongAnswer} from "@/components/quiz/utils";
import {Button} from "react-bootstrap";
import {useLazyPostActionQuery} from "@/components/quiz/api/gameApi";
import {GiveUp} from "@/components/quiz/types/gameActions";


const Quiz = (
    {wsConnection}: { wsConnection: Client }
) => {
    const [gameIdsState, setGameIdsState] = useState<GameIds>(initialGameIdsState)
    const gameSubscription = useRef<Subscription | undefined>(undefined)
    const [gameState, setGameState] = useState<GameState>()
    const [gameBlockedDelay, setGameBlockedDelay] = useState(0)
    const [sendAction] = useLazyPostActionQuery()

    useEffect(() => {
        if (gameIdsState.gameId !== undefined) {
            gameSubscription.current?.unsubscribe()
            gameSubscription.current = wsConnection.subscribe(
                `${channel_addr}/${gameIdsState.gameId}`,
                (message: Message) => {
                    const newGameState = JSON.parse(message.body) as GameState
                    console.log(newGameState)
                    setGameState(newGameState)
                    blockIfWrongAnswer(newGameState, gameIdsState, setGameBlockedDelay)
                }
            )
        }
    }, [gameIdsState])

    const giveUpInGame = () => {
        if (gameState?.id === undefined) return
        sendAction({
            gameId: gameState.id,
            action: {
                actionType: "GIVE_UP",
                userId: gameIdsState.userId
            } as GiveUp
        })
    }

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
    if (gameState.winner !== -1) {
        return <p>Winner {gameState.winner}</p>
    }
    return (
        <div style={{
            display: "flex", flexDirection: "column",
            padding: 15
        }}>
            <p>Game</p>
            <p>{gameState?.id}</p>
            <Timeout delay={gameBlockedDelay} setDelay={setGameBlockedDelay}/>
            <GameField
                gameState={gameState}
                setGameState={setGameState}
                userState={gameIdsState}
                gameBlockedFor={gameBlockedDelay}
            />
            <Button variant="secondary" onClick={giveUpInGame}>Сдаться</Button>
        </div>
    );
};

export default Quiz;