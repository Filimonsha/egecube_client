"use client"
import React, {useState} from 'react';
import Quiz from "@/components/quiz/Quiz";
import GameBorder from "@/components/quiz/GameBorder/GameBorder";
import {connectToSocket} from "@/components/quiz/api/websocketApi";

const QuizGame = () => {
    const [wsConnection] = useState(connectToSocket())

    return (
        <GameBorder>
            <Quiz wsConnection={wsConnection}/>
        </GameBorder>
    )
};

export default QuizGame;