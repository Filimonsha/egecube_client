import {GameIds, GameState} from "@/components/quiz/types/gameStates";
import {useState} from "react";
import {AnswerModalProps} from "@/components/quiz/AnswerModal/AnswerModal";

export function useModalState(userState: GameIds, gameState: GameState, handleClose: () => void, setGameState: (state: GameState) => void) {
    const [modalState, setModalState] = useState<AnswerModalProps>(
        {
            userId: userState.userId as number,
            gameId: gameState.id,
            show: false,
            handleClose: handleClose,
            taskChosen: undefined,
            setGameState: setGameState
        })
    return {modalState, setModalState};
}