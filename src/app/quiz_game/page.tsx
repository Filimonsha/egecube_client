"use client"
import React, {useState} from 'react';
import GameBorder from "@/components/quiz/GameBorder/GameBorder";
import {connectToSocket} from "@/components/quiz/api/websocketApi";
import dynamic from "next/dynamic";

const Quiz = dynamic(
    () => import("../../components/quiz/Quiz"),
    {ssr: false}
)

const QuizGame = () => {
    const [wsConnection] = useState(connectToSocket())

    return (
        <GameBorder>
            <Quiz wsConnection={wsConnection}/>
        </GameBorder>
    )
};

export default QuizGame;