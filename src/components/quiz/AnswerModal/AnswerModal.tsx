import {Button, Modal} from "react-bootstrap";
import {SimpleTask} from "@/components/quiz/types/types";
import {useLazyPostAnswerQuery} from "@/components/quiz/api/gameApi";
import {GameState} from "@/components/quiz/types/gameStates";

export interface AnswerModalProps {
    gameId: string
    userId: number,
    show: boolean,
    handleClose: () => void,
    handleOpen: () => void,
    taskChosen: SimpleTask | undefined,
    setGameState: (state: GameState) => void
}
const AnswerModal = (
    {modalState}: {modalState: AnswerModalProps}
) => {
    const [sendAnswer] = useLazyPostAnswerQuery()

    const handleClick = (submitted: string) => {
        if (!modalState.taskChosen) return
        console.log(`Submitting answer ${submitted}`)
        sendAnswer({
            gameId: modalState.gameId,
            action: {
                actionType: "SUBMIT_ANSWER",
                answer: {
                    userId: modalState.userId,
                    simpleTaskId: modalState.taskChosen.id,
                    answer: submitted
                }
            }
        })
    }

    return (
        <Modal
            show={modalState.show}
            onHide={modalState.handleClose}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title>Ответ на вопрос</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {modalState.taskChosen?.desc}
                {modalState.taskChosen?.answers.map( answer =>
                    <Button onClick={() => handleClick(answer)}>{answer}</Button>
                )}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={modalState.handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={modalState.handleClose}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default AnswerModal;