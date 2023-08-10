import React from 'react';
import {ProgressBar} from "react-bootstrap";
import {blockTimeoutSeconds} from "@/components/quiz/consts";

interface TimeoutProps {
    delay: number,
    setDelay: (val: number) => void
}

const Timeout = (
    {delay, setDelay}: TimeoutProps
) => {
    if (delay <= 0) {
        return null
    }
    const percents = delay / blockTimeoutSeconds * 100
    setTimeout(() => {
        setDelay(delay - 1)
    }, 1000)
    return (
        <ProgressBar now={percents} label={`${delay} c`}/>
    );
}

export default Timeout;