import React from "react"

import arrowImg from '../assets/images/icon-arrow.svg'

import DayField from './DayField'
import MonthField from'./MonthField'
import YearField from './YearField'

import { DateObject } from "../types/DateType"

const convertToNumbers = (
    arr: FormDataEntryValue[] | string[]
) => arr.map(i => +i)

const getCurrentDate = () => {
    const currentDate = (new Date).toLocaleDateString()
    const [day, month, year] = convertToNumbers(currentDate.split('/'))

    return {
        day,
        month,
        year
    }
}

function FormComponent({
    updateDate
}: {
    updateDate: (arg0: DateObject) => void
}) {
    const [dateInput, setDateInput] = React.useState({
        day: 0,
        month: 0,
        year: 0
    })
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        const formElem = e.currentTarget as HTMLFormElement
        const formData = new FormData(formElem)

        const [day, month, year] = convertToNumbers(formData.getAll('date'))

        setDateInput({
            day,
            month,
            year
        })

        const currentDate = getCurrentDate()

        // The April month is only 30 days. 31 is invalid.
        const isApril = month === 4 && day === 31
        const isValidDate = !isApril && day <= 31 && month <= 12 && year <= currentDate.year

        // I'm not confident with this solution. I'll be going back to refactor this soon.
        const ageDate = new Date(year - 1, month - 1, day)

        if (isValidDate) {
            updateDate({
                day: Math.abs(currentDate.day - ageDate.getDay()),
                month: Math.abs((currentDate.month - ageDate.getMonth()) + 1),
                year: Math.abs((currentDate.year - year) - 1)
            })
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="md:max-w-sm flex md:gap-4 gap-2">
                <DayField date={dateInput} />
                <MonthField date={dateInput} />
                <YearField date={dateInput} />
            </div>

          <div className="border-t border-neutral-light-grey md:mt-8 mt-16"></div>

          <button className="hover:bg-neutral-off-black block bg-primary-purple rounded-full p-5 -mt-8 mx-auto md:ml-auto md:mr-0">
              <img
                src={arrowImg}
                className='w-6'
                alt="an arrow pointing down for submitting the form"
            />
          </button>
        </form>
    )
}

export default FormComponent