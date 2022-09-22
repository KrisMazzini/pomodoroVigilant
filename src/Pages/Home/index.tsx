import { useState } from "react";

import { Container } from "./styles";

import { RunTimerContext } from "../../contexts/RunTimerContext";

import { Header } from '../../components/Header';
import { Main } from "../../components/Main";

export function Home() {
  const [runTimer, setRunTimer] = useState<boolean>(false)

  return (
    <RunTimerContext.Provider value={{runTimer, setRunTimer}}>
        <Container>
          <header>
            <Header />
          </header>
          <main>
            <Main />
          </main>
        </Container>
    </RunTimerContext.Provider>
  )
}