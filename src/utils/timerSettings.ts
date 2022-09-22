export interface TimerProps {
    activityTimer: number;
    restTimer: number;
}

export const timerSettings:TimerProps = {
    activityTimer: minutesToSeconds(0.1),
    restTimer: minutesToSeconds(0.1),
}

function minutesToSeconds(minutes:number):number {
    const milliseconds = minutes * 60
    return milliseconds
}