import { useState, useRef } from 'react'

import styled from 'styled-components'

import { Header } from '../../components/Header';
import { Timer } from '../../components/Timer';

export function Home() {
  return (
    <Container>
      <header>
        <Header></Header>
      </header>
      <main>
        <Timer />
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