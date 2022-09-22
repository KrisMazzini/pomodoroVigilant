import alarm from '../assets/woosh.wav'

export function playAlarm() {
    const audio = new Audio(alarm)
    audio.play()
}