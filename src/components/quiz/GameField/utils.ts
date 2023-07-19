import {field} from "@/components/quiz/GameField/consts";

const yFields = 200
export function calculatePosition(rowsNum: number, rowLen: number, rowI: number, colI: number): {x: number, y: number} {
    const xInterval = field.width / (rowLen + 1)
    const yInterval = (field.height - 200) / (rowsNum + 1)
    const xPos = xInterval * (colI + 1)
    const yPos = yInterval * (rowI + 1) + yFields/2
    return {x: xPos, y: yPos}
}