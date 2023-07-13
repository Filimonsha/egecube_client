import React from 'react';
import Quiz from "@/components/quiz/Quiz";
import GameBorder from "@/components/quiz/GameBorder/GameBorder";

const QuizGame = () => {
    return (
        <GameBorder>
            <Quiz/>
        </GameBorder>
    )
};

export default QuizGame;