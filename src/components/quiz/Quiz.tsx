"use client"
import React, {FormEvent, useState} from 'react';
import IdPicker from "@/components/quiz/IdPicker/IdPicker";
import GameQueue from "@/components/quiz/GameQueue/GameQueue";
import {GameIds, initialGameState} from "@/components/quiz/consts";



const Quiz = () => {
    const handleUserChange = (value: number) => {
        setGameIdsState({...gameIdsState, userId: value})
    }

    const tryFindGame = () => {}
    const stopFindGame = () => {}

    const [gameIdsState, setGameIdsState] = useState<GameIds>(initialGameState)


    if (gameIdsState.userId === null) {
        return (
            <IdPicker onFinish={handleUserChange}/>
        )
    }
    return (
        <div style={{display: "flex", flexDirection: "column"}}>
            <GameQueue find={tryFindGame} stop={stopFindGame}/>
            <p>Hi</p>
        </div>
    );
};

export default Quiz;