"use client"
import React, {useState} from 'react';
import IdPicker from "@/components/quiz/IdPicker/IdPicker";
import GameQueue from "@/components/quiz/GameQueue/GameQueue";
import {GameIds, initialGameState} from "@/components/quiz/consts";

const Quiz = () => {
    const [gameIdsState, setGameIdsState] = useState<GameIds>(initialGameState)


    if (gameIdsState.userId === undefined) {
        return <IdPicker state={gameIdsState} setState={setGameIdsState}/>
    }
    if (gameIdsState.roomId === undefined) {
        return <GameQueue state={gameIdsState} setState={setGameIdsState}/>
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