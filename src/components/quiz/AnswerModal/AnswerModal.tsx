import {Button, Modal} from "react-bootstrap";
import {SimpleTask} from "@/components/quiz/types/types";
import {useLazyPostActionQuery} from "@/components/quiz/api/gameApi";
import {GameState} from "@/components/quiz/types/gameStates";
import {SubmitAnswer, UnPickForAnswer} from "@/components/quiz/types/gameActions";

export interface AnswerModalProps {
    gameId: string
    userId: number,
    show: boolean,
    handleClose: () => void,
    taskChosen: SimpleTask | undefined,
    setGameState: (state: GameState) => void
}

const AnswerModal = (
    {modalState}: { modalState: AnswerModalProps }
) => {
    const [sendAction] = useLazyPostActionQuery()

    const handleSubmit = (submitted: string) => {
        if (!modalState.taskChosen) return
        console.log(`Submitting answer ${submitted}`)
        sendAction({
            gameId: modalState.gameId,
            action: {
                actionType: "SUBMIT_ANSWER",
                answer: {
                    userId: modalState.userId,
                    simpleTaskId: modalState.taskChosen.id,
                    answer: submitted
                }
            } as SubmitAnswer
        })
        unPickAnswer()
        modalState.handleClose()
    }

    const unPickAnswer = () => {
        console.log("unpicking")
        sendAction({
            gameId: modalState.gameId,
            action: {
                actionType: "UNPICK_FOR_ANSWER",
                questionId: modalState.taskChosen?.id
            } as UnPickForAnswer
        })
        modalState.handleClose()
    }

    return (
        <Modal
            show={modalState.show}
            onHide={unPickAnswer}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title>Ответ на вопрос</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {modalState.taskChosen?.desc}
                {modalState.taskChosen?.answers.map((answer, index) =>
                    <Button
                        variant="primary"
                        onClick={() => handleSubmit(answer)}
                        key={index}
                    >{answer}</Button>
                )}
            </Modal.Body>
        </Modal>
    );
}

export default AnswerModal;