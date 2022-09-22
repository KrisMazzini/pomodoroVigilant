import { useEffect, useState } from "react"

import alarm from '../../assets/woosh.wav'
import { timerSettings } from '../../utils/timerSettings';

import { Container } from "./styles";

import { Header } from '../../components/Header';
import { Timer } from '../../components/Timer';
import { Button, ButtonProps } from "../../components/Button";

export function Home() {

  const [timer, setTimer] = useState<number>(timerSettings.activityTimer)
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false)
  const [button, setButton] = useState<ButtonProps>({
    onclick: startTimer,
    content: "Start Timer"
  })

  function startTimer() {
    playAlarm()
    setIsTimerRunning(true)
  }

  function handleCountdown() {
    setTimer(timer - 1)
  }

  function playAlarm() {
    const audio = new Audio(alarm)
    audio.play()
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
      <Button {...button}/>
    </Container>
  );
}