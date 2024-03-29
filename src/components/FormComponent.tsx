import arrowImg from '../assets/icon-arrow.svg'
import React from "react"

import { DateContext } from '../context/DateContext'

import DayField from './DayField'
import MonthField from'./MonthField'
import YearField from './YearField'

const convertToNumbers = (
    arr: FormDataEntryValue[] | string[]
) => arr.map(i => +i)

const getCurrentDate = () => {
    const currentDate = (new Date).toLocaleDateString()

    const [
        day,
        month,
        year
    ] = convertToNumbers(currentDate.split('/'))

    return {
        day,
        month,
        year
    }
}

function FormComponent() {
    const [isInvalidDay, setIsInvalidDay] = React.useState(false)
    const [isInvalidMonth, setIsInvalidMonth] = React.useState(false)
    const [isInvalidYear, setIsInvalidYear] = React.useState(false)

    const [setDate] = React.useContext(DateContext)
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        const formElem = e.currentTarget as HTMLFormElement
        const formData = new FormData(formElem)

        const [
            day,
            month,
            year
        ] = convertToNumbers(formData.getAll('date'))

        const currentDate = getCurrentDate()

        setIsInvalidDay(false)
        setIsInvalidMonth(false)
        setIsInvalidYear(false)

        if (day > 31) setIsInvalidDay(true)
        if (month > 12) setIsInvalidMonth(true)

        if (year > currentDate.year) {
            setIsInvalidYear(true)
            return
        }

        setDate({
            day: Math.abs(currentDate.day - day),
            month: Math.abs(currentDate.month - month),
            year: Math.abs(currentDate.year - month)
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="md:max-w-sm flex md:gap-4 gap-2">
                <DayField error={isInvalidDay} />
                <MonthField error={isInvalidMonth} />
                <YearField error={isInvalidYear} />
            </div>

          <div className="border-t border-neutral-light-grey md:mt-8 mt-16"></div>

          <button className="hover:bg-neutral-off-black block bg-primary-purple rounded-full p-5 -mt-8 mx-auto md:ml-auto md:mr-0">
              <img src={arrowImg} className='w-6' alt="" />
          </button>
        </form>
    )
}

export default FormComponent