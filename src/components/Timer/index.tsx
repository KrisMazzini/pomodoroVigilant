import { Time } from "../Time"

import { Container } from './styles'

export function Timer() {
    return (
        <Container>
            <Time value={45} context={"minutes"}/>
            <span>:</span>
            <Time value={0} context={"seconds"}/>
        </Container>
    )
}

