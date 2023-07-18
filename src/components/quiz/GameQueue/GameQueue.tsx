import React, {useEffect, useRef, useState} from 'react';
import {useLazyGetOutOfQueueQuery, useLazyStandInQueueQuery} from "@/components/quiz/api/roomApi";
import {GameIds, Participants} from "@/components/quiz/consts";
import {stopFindGame, tryFindGame} from "@/components/quiz/GameQueue/script";
import {Client, Message, Subscription} from "stompjs";
import {channel_addr} from "@/components/quiz/api/addresses";
import {RoomPlayers} from "@/components/quiz/types";

interface GameQueueProps {
    state: GameIds,
    setState: (state: GameIds) => void,
    wsConnection: Client,
    participants: Participants,
    setParticipants: (state: Participants) => void
}

const GameQueue = (
    {state, setState, wsConnection, participants, setParticipants}: GameQueueProps
) => {
    const [tryStandInQueue, {
        data: roomFetched,
        currentData: lastFetch,
        isFetching: roomSearch
    }] = useLazyStandInQueueQuery()
    const [tryGetOutOfQueue, {
        isFetching: roomLeaving
    }] = useLazyGetOutOfQueueQuery()

    const [waiting, setWaiting] = useState(false)
    const roomSubscription = useRef<Subscription | undefined>(undefined)

    useEffect(() => {
        if (lastFetch !== undefined) {
            setState({...state, gameId: lastFetch.gameId, roomId: lastFetch.roomNum})
            setParticipants({...participants, all: lastFetch.playerIds})
            roomSubscription.current?.unsubscribe()
            roomSubscription.current = wsConnection.subscribe(
                `${channel_addr}/rooms/${lastFetch.roomNum}`,
                (message: Message) => {
                    const roomPlayers = JSON.parse(message.body) as RoomPlayers
                    console.log(roomPlayers)
                    setState({
                        ...state,
                        gameId: roomPlayers.gameId,
                        roomId: roomPlayers.roomNum,
                    })
                    setParticipants({
                        ...participants,
                        all: roomPlayers.playerIds
                    })
                }
            )
        }
    }, [roomFetched])

    useEffect(() => {
        if (lastFetch !== undefined) {
            setState({...state, gameId: undefined, roomId: undefined})
            setParticipants({all: [], active: []})
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

    const handleJoin = () => {
        console.log("trying to start game")

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
                    <p>Room found {state.roomId}</p>
                    <p>Players:</p>
                    {participants.all?.map(player =>
                        <p key={player}>{player}</p>
                    )}
                    <p>Game found {state.gameId}</p>
                    <button onClick={handleJoin}>Join</button>
                </>
                || roomSearch &&
                <p>Searching for room...</p>
            }

        </>

    );
}

export default GameQueue;