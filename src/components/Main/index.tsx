import { useState, useContext } from "react";

import { Container } from "./styles";

import { playAlarm } from "../../utils/playAlarm";
import { timerSettings } from "../../utils/timerSettings";

import { RunTimerContext } from "../../contexts/RunTimerContext";

import { Timer } from '../Timer';
import { Button, ButtonProps } from "../Button"

export function Main() {
    
    const {runTimer, setRunTimer} = useContext(RunTimerContext)
    const [timer, setTimer] = useState<number>(timerSettings.activityTimer)

    const [button, setButton] = useState<ButtonProps>({
        onclick: startTimer,
        content: "Start Timer"
    })

    function startTimer() {
        playAlarm()
        setRunTimer(true)
    }
    
    return (
        <Container>
            <Timer timer={timer} setTimer={setTimer}/>
            <Button {...button}/>
        </Container>
    )
}