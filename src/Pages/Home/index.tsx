import { useEffect, useState } from "react"
import styled from 'styled-components'

import { timerSettings } from '../../utils/timerSettings';

import { Header } from '../../components/Header';
import { Timer } from '../../components/Timer';

export function Home() {

  const [timer, setTimer] = useState<number>(timerSettings.activityTimer)

  function handleCountdown() {
    setTimer(timer - 1)
  }

  const startTimer = setInterval(handleCountdown, 1000)

  useEffect(() => {
    const timeout = timer <= 0;

    if (timeout) {
      clearInterval(startTimer)
      setTimer(0)
    }
  })

  return (
    <Container>
      <header>
        <Header></Header>
      </header>
      <main>
        <Timer time={timer}/>
      </main>
    </Container>
  );
}

const Container = styled.div`
  flex: 1;
  
  display: flex;
  flex-direction: column;
  align-items: center;
`