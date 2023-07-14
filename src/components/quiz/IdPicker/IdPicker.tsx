import React, {FormEvent, useState} from 'react';
import {GameIds} from "@/components/quiz/consts";

const IdPicker = (
    {state, setState}: { state: GameIds, setState: (value: GameIds) => void }
) => {
    const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
        evt.preventDefault()
        setState({...state, userId: userField as number})
    }

    const [userField, setUserField] = useState<Number>()

    return (
        <form onSubmit={handleSubmit} style={{display: "flex", flexDirection: "column"}}>
            <input
                style={{maxWidth: 100}}
                type="number"
                onChange={(evt) => {
                    setUserField(Number.parseInt(evt.target.value))
                }}
            />
            <button type="submit" style={{height: 30, width: 100}}>Ok</button>
        </form>
    )
}

export default IdPicker;
