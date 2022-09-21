import pomodoroOutline from '../../assets/pomodoro-outline.png'

import { Container } from './styles'

export function Header() {
    return (
        <Container>
            <img src={pomodoroOutline} alt="logo" />
            <div>
                <h1>Pomodoro Vigilant</h1>
                <h2>Take control of your tasks in a healthy way!</h2>
            </div>
        </Container>
    )
}

