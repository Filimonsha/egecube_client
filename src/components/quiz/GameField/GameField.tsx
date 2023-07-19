"use client"
import React from 'react';
import {GameState} from "@/components/quiz/types";
import {field} from "@/components/quiz/GameField/consts";
import {Circle, Layer, Line, RegularPolygon, Stage} from "react-konva";
import {calculatePosition} from "@/components/quiz/GameField/utils";

interface GameFieldProps {
    gameState: GameState,
    setGameState: (state: GameState) => void
}

const GameField = (
    {gameState, setGameState}: GameFieldProps
) => {
    return (
        <Stage
            width={field.width}
            height={field.height}
        >
            <Layer>
                <Line
                    points={[0, 0, field.width, 0, field.width, field.height, 0, field.height]}
                    closed
                    stroke="black"
                    fillLinearGradientStartPoint={{ x: 0, y: 0 }}
                    fillLinearGradientEndPoint={{ x: field.width, y: field.height}}
                    fillLinearGradientColorStops={[0, 'cyan', 1, 'lightblue']}
                />
            </Layer>
            <Layer>
                <Circle x={field.width/2} y={40} radius={35} fill="red"/>
                <Circle x={field.width/2} y={field.height - 40} radius={35} fill="green"/>
            </Layer>
            <Layer>
                {gameState?.gameField.map((row, rowI) => {
                    const rowsNum = gameState?.gameField.length
                    return row.map((elem, colI) => {
                        const rowLen = row.length
                        const position = calculatePosition(rowsNum, rowLen, rowI, colI)
                        return (<RegularPolygon
                            sides={6}
                            radius={35}
                            fill={elem ? "blue" : "red"}
                            x={position.x}
                            y={position.y}
                        />)
                    })
                })}
            </Layer>
        </Stage>
    );
}

export default GameField;