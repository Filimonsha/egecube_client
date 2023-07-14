"use client"
import React, {useState} from 'react';
import IdPicker from "@/components/quiz/IdPicker/IdPicker";
import GameQueue from "@/components/quiz/GameQueue/GameQueue";
import {GameIds, initialGameState} from "@/components/quiz/consts";
import {Client} from "@stomp/stompjs";



const Quiz = () => {
    const [gameIdsState, setGameIdsState] = useState<GameIds>(initialGameState)
    const [wsConnection, setWsConnection] = useState<Client>()

    const handleGameConnection = (connection: Client, ) => {
        setWsConnection(connection)
        // subscribe to game
    }


    if (gameIdsState.userId === undefined) {
        return <IdPicker state={gameIdsState} setState={setGameIdsState}/>
    }
    if (wsConnection === undefined) {
        return <GameQueue state={gameIdsState} setState={setGameIdsState} setConnection={handleGameConnection}/>
    }
    return (
        <div style={{
            display: "flex", flexDirection: "column",
            padding: 15
        }}>
            <p>{gameIdsState.roomId}</p>
        </div>
    );
};

export default Quiz;