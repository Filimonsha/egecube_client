"use client"
import React, {useState} from 'react';
import {field} from "@/components/quiz/GameField/consts";
import {Circle, Layer, Line, RegularPolygon, Stage} from "react-konva";
import {calculatePosition} from "@/components/quiz/GameField/utils";
import AnswerModal, {AnswerModalProps} from "@/components/quiz/AnswerModal/AnswerModal";
import {GameIds, GameState} from "@/components/quiz/types/gameStates";
import {Pair} from "@/components/quiz/types/types";
import {PickForAnswer} from "@/components/quiz/types/gameActions";
import {useLazyPostActionQuery} from "@/components/quiz/api/gameApi";
import {useModalState} from "@/components/quiz/GameField/hooks";

interface GameFieldProps {
    userState: GameIds
    gameState: GameState,
    setGameState: (state: GameState) => void
}

const GameField = (
    {gameState, setGameState, userState}: GameFieldProps
) => {
    const handleClose = () => {setModalState({...modalState, show: false});}
    const [sendAction] = useLazyPostActionQuery()
    const {modalState, setModalState} =
        useModalState(userState, gameState, handleClose, setGameState);

    const handleElementClick = (element: Pair<string, boolean>) => {
        if (element.second) return
        const foundQuestion = gameState.taskSet.find((obj) => obj.id === element.first)
        console.log(foundQuestion)
        sendAction({
            gameId: modalState.gameId,
            action: {
                actionType: "PICK_FOR_ANSWER",
                questionId: element.first
            } as PickForAnswer
        })
        setModalState({
            ...modalState,
            taskChosen: foundQuestion,
            show: true
        })
    }

    const isPickedForAnswer = (questionId: string): boolean =>
        gameState.pickedForAnswer.find(
            (obj) => obj === questionId
        ) != undefined


    return (
        <>
            <AnswerModal modalState={modalState}/>
            <Stage
                width={field.width}
                height={field.height}
            >
                <Layer>
                    <Line
                        points={[0, 0, field.width, 0, field.width, field.height, 0, field.height]}
                        closed
                        stroke="black"
                        fillLinearGradientStartPoint={{x: 0, y: 0}}
                        fillLinearGradientEndPoint={{x: field.width, y: field.height}}
                        fillLinearGradientColorStops={[0, 'cyan', 1, 'lightblue']}
                    />
                </Layer>
                <Layer>
                    <Circle x={field.width / 2} y={40} radius={35} fill="red"/>
                    <Circle x={field.width / 2} y={field.height - 40} radius={35} fill="green"/>
                </Layer>
                <Layer>
                    {gameState?.gameField.map((row: Array<Pair<string, boolean>>, rowI: number) => {
                        const rowsNum = gameState?.gameField.length
                        return row.map((elem: Pair<string, boolean>, colI) => {
                            const rowLen = row.length
                            const position = calculatePosition(rowsNum, rowLen, rowI, colI)
                            return (<RegularPolygon
                                sides={6}
                                radius={35}
                                fill={elem.second ? "red" : "blue"}
                                x={position.x}
                                y={position.y}
                                onClick={() => handleElementClick(elem)}
                                key={elem.first}
                                shadowBlur={isPickedForAnswer(elem.first) ? 10 : 0}
                            />)
                        })
                    })}
                </Layer>
            </Stage>
        </>
    );
}

export default GameField;