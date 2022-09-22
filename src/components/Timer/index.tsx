import { useEffect, useState } from "react"
import { Time } from "../Time"
import { Container } from './styles'

interface Props {
    time: number
}

export function Timer({ time }:Props) {
    
    const [minutes, setMinutes] = useState<number>(getMinutes(time))
    const [seconds, setSeconds] = useState<number>(getSeconds(time))

    function getMinutes(seconds:number):number {
        return Math.floor(seconds / 60)
    }

    function getSeconds(fullSeconds:number):number {
        return fullSeconds % 60
    }

    useEffect(() => {
        setMinutes(getMinutes(time))
        setSeconds(getSeconds(time))
    }, [time])

    return (
        <Container>
            <Time value={minutes} context={"minutes"}/>
            <span>:</span>
            <Time value={seconds} context={"seconds"}/>
        </Container>
    )
}

