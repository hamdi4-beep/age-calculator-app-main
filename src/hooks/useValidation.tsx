import React from 'react'

export function useValidation(
    day: number,
    month: number,
    year: number
) {
    const [errorStatus, setErrorStatus] = React.useState('')
    const currentYear = (new Date).getFullYear()

    React.useEffect(() => {
        if (day > 31) {
            setErrorStatus('The day number should not be more than 31.')
            return
        }
    
        if (month > 12) {
            setErrorStatus('The month number should notb be more than 12.')
            return
        }
    
        if (year > currentYear) {
            setErrorStatus('No one lives in the future...')
            return
        }
    
        if (month == 4 && day == 31) {
            setErrorStatus('There are only 30 days in April!')
            return
        }
    }, [])

    return errorStatus
}