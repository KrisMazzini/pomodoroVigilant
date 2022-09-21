import { Container } from './styles'

interface Props {
    value: number;
    context: string;
}

export function Time(props:Props) {
    
    const textValue = String(props.value).padStart(2, "0")
    
    return (
        <Container>
            <p>{props.context}</p>
            <span>{textValue}</span>
        </Container>
    )
}

