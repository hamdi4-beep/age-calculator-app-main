import React from 'react'
import FormComponent from "./FormComponent"

const convertToNumbers = (
    arr: string[] | FormDataEntryValue[]
) => arr.map(i => +i)

function AppContainer() {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        const formElem = e.currentTarget as HTMLFormElement
        const formData = new FormData(formElem)
        const dataValues = formData.getAll('date')

        const dateNumbers = convertToNumbers(dataValues)
        const errorStatus = checkValidation(dateNumbers)

        console.log(errorStatus)
    }

    return (
        <div className="md:max-w-xl md:mx-auto bg-neutral-white rounded-3xl rounded-br-[6rem] p-8 py-10">
            <FormComponent handleSubmit={handleSubmit} />

            <div className="md:mt-0 mt-8 italic">
                <div className="font-bold text-5xl">
                    <span className="text-primary-purple">{'--'}</span>
                    <p className=" inline"> years</p>
                </div>

                <div className="font-bold text-5xl my-2">
                    <span className="text-primary-purple">{'--'}</span>
                    <p className=" inline"> months</p>
                </div>

                <div className="font-bold text-5xl my-2">
                    <span className="text-primary-purple">{'--'}</span>
                    <p className=" inline"> days</p>
                </div>
            </div>
        </div>
        
    )
}

function checkValidation([
    day,
    month,
    year
]: number[]) {
    const currentYear = (new Date).getFullYear()
    const errors: string[] = []

    if (day > 31) errors.push('Must be a valid day.')
    if (month > 12) errors.push('Must be a valid month.')
    if (month === 4 && day === 31) errors.push('Must be a valid date.')
    if (year > currentYear) errors.push('Must be in the past.')

    return errors
}

export default AppContainer