import {
    createContext,
    SetStateAction
} from "react";

type DateType = {
    day: number
    month: number
    year: number
}

type SetDateType = React.Dispatch<SetStateAction<DateType>>

const setDate: SetDateType = () => {}

export const DateContext = createContext<[SetDateType]>([setDate])