import React, {FormEvent, useState} from 'react';

const GameQueue = ({tryToFind, stopFind}: { tryToFind: () => void, stopFind: () => void }) => {
    const changeStatus = (evt: FormEvent) => {
        if (waiting) {
            stopFind()
        } else {
            tryToFind()
        }
        setWaiting(!waiting)
    }

    const [waiting, setWaiting] = useState(false)

    return (
        <button
            onClick={changeStatus}
            style={{
                background: waiting ? "red" : "green",
                width: 100, height: 50
            }}
        />
    );
}

export default GameQueue;