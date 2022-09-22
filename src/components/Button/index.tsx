import { Containter } from "./styles";

export interface ButtonProps {
    content: string;
    onclick: () => void;
}

export function Button ({content, onclick}:ButtonProps) {
    return (
        <Containter>
            <button onClick={onclick}>{content}</button>
        </Containter>
    )
}