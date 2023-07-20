import {GameIds, GameState} from "@/components/quiz/types/gameStates";
import {blockTimeoutSeconds} from "@/components/quiz/consts";

export const blockIfWrongAnswer = (gameState: GameState, gameIds: GameIds, setBlock: (val: number) => void) => {
    if (gameState.postedAnswers.length === 0) return
    const lastAnswer = gameState.postedAnswers.slice(-1)[0]
    if (lastAnswer.first.userId === gameIds.userId && !lastAnswer.second) {
        console.log("blocking game")
        setBlock(blockTimeoutSeconds)
    }
}
