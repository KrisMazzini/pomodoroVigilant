import { useEffect, useState } from "react"
import styled from 'styled-components'

import alarm from '../../assets/woosh.wav'
import { timerSettings } from '../../utils/timerSettings';

import { Header } from '../../components/Header';
import { Timer } from '../../components/Timer';

export function Home() {

  const [timer, setTimer] = useState<number>(timerSettings.activityTimer)
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false)

  function startTimer() {
    playAlarm()
    setIsTimerRunning(true)
  }

  function handleCountdown() {
    setTimer(timer - 1)
  }

  async function playAlarm() {
    const audio = new Audio(alarm)
    await audio.play()
  }

  useEffect(() => {
    const timeout = timer <= 0;

    if (timeout && isTimerRunning) {
      playAlarm()
      setTimer(0)
      setIsTimerRunning(false)
    }
  }, [timer])

  useEffect(() => {
    if (!isTimerRunning) return;

    const interval = setInterval(handleCountdown, 1000)
    return () => clearInterval(interval)
  })

  return (
    <Container>
      <header>
        <Header></Header>
      </header>
      <main>
        <Timer time={timer}/>
      </main>
      <button onClick={startTimer}>Start Timer</button>
    </Container>
  );
}

const Container = styled.div`
  flex: 1;
  
  display: flex;
  flex-direction: column;
  align-items: center;
`