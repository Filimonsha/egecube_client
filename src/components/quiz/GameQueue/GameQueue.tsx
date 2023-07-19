import React, {useEffect, useRef, useState} from 'react';
import {useLazyGetOutOfQueueQuery, useLazyStandInQueueQuery} from "@/components/quiz/api/roomApi";
import {stopFindGame, tryFindGame} from "@/components/quiz/GameQueue/script";
import {Client, Message, Subscription} from "stompjs";
import {channel_addr} from "@/components/quiz/api/addresses";
import {GameIds, GameState} from "@/components/quiz/types";
import {useLazyStartGameQuery} from "@/components/quiz/api/gameApi";

interface GameQueueProps {
    state: GameIds,
    setState: (state: GameIds) => void,
    wsConnection: Client,
    gameState: GameState | undefined
    setGameState: (state: GameState | undefined) => void
}

const GameQueue = (
    {state, setState, wsConnection, gameState, setGameState}: GameQueueProps
) => {
    const [tryStandInQueue, {
        data: roomFetched,
        currentData: lastFetch,
        isFetching: roomSearch
    }] = useLazyStandInQueueQuery()
    const [tryGetOutOfQueue, {
        isFetching: roomLeaving
    }] = useLazyGetOutOfQueueQuery()
    const [tryStartGame] = useLazyStartGameQuery()

    const [waiting, setWaiting] = useState(false)
    const roomSubscription = useRef<Subscription | undefined>(undefined)

    useEffect(() => {
        if (lastFetch !== undefined) {
            setState({...state, gameId: lastFetch.id})
            setGameState(lastFetch)
            roomSubscription.current?.unsubscribe()
            roomSubscription.current = wsConnection.subscribe(
                `${channel_addr}/rooms/${lastFetch.roomId}`,
                (message: Message) => {
                    const roomPlayers = JSON.parse(message.body) as GameState
                    console.log(roomPlayers)
                    setState({
                        ...state,
                        gameId: roomPlayers.id
                    })
                }
            )
        }
    }, [roomFetched])

    useEffect(() => {
        if (lastFetch !== undefined) {
            setState({...state, gameId: undefined})
            setGameState(undefined)
            roomSubscription.current?.unsubscribe()
        }
    }, [roomLeaving])

    const changeStatus = () => {
        if (waiting) {
            stopFindGame(tryGetOutOfQueue, lastFetch, state)
        } else {
            tryFindGame(tryStandInQueue, state)
        }
        setWaiting(!waiting)
    }

    const handleJoinClick = () => {
        console.log("Trying to start game")
        tryStartGame({
            userId: state.userId as number,
            gameId: gameState?.id as string
        })
    }

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
            {roomFetched && wsConnection.connected &&
                <>
                    <p>Room found {lastFetch?.roomId}</p>
                    <p>Players:</p>
                    {gameState?.participants.map(player =>
                        <p key={player}>{player}</p>
                    )}
                    <p>Approved by</p>
                    {gameState?.startApproved.map(player =>
                        <p key={player}>{player}</p>
                    )}
                    <p>Game found {gameState?.id}</p>
                    <button onClick={handleJoinClick}>Join</button>
                </>
                || roomSearch &&
                <p>Searching for room...</p>
            }

        </>

    );
}

export default GameQueue;