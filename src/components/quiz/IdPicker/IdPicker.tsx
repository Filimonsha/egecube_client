import React, {FormEvent, useState} from 'react';

const IdPicker = ({onFinish}: {onFinish: (value: number) => void}) => {
    const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
        evt.preventDefault()
        onFinish(userField as number)
    }

    const [userField, setUserField] = useState<Number>()

    return (
        <div style={{padding: 15}}>
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
        </div>
    )
}

export default IdPicker;
