import { useEffect, useState, useContext, Dispatch, SetStateAction } from "react"

import { Container } from './styles'

import { playAlarm } from "../../utils/playAlarm"

import { RunTimerContext } from "../../contexts/RunTimerContext"

import { Time } from "../Time"

interface Props {
    timer: number,
    setTimer: Dispatch<SetStateAction<number>>
}

export function Timer({timer, setTimer}:Props) {

    const {runTimer, setRunTimer} = useContext(RunTimerContext)
    
    const [minutes, setMinutes] = useState<number>(getMinutes(timer))
    const [seconds, setSeconds] = useState<number>(getSeconds(timer))

    function getMinutes(seconds:number):number {
        return Math.floor(seconds / 60)
    }

    function getSeconds(fullSeconds:number):number {
        return fullSeconds % 60
    }

    function handleCountdown() {
        setTimer(timer - 1)
    }

    useEffect(() => {
        setMinutes(getMinutes(timer))
        setSeconds(getSeconds(timer))

        const timeout = timer <= 0;

        if (timeout && runTimer) {
            playAlarm()
            setTimer(0)
            setRunTimer(false)
        }
    }, [timer])

    useEffect(() => {
        if (!runTimer) return;

        const interval = setInterval(handleCountdown, 1000)
        return () => clearInterval(interval)
    })

    return (
        <Container>
            <Time value={minutes} context={"minutes"}/>
            <span>:</span>
            <Time value={seconds} context={"seconds"}/>
        </Container>
    )
}

