import { createContext, Dispatch, SetStateAction } from "react";

interface RunTimerContextProps {
    runTimer: boolean;
    setRunTimer: Dispatch<SetStateAction<boolean>>
}

export const RunTimerContext = createContext<RunTimerContextProps>({
    runTimer: false,
    setRunTimer: () => {}
})