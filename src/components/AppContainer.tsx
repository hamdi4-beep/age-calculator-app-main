import * as React from 'react'
import FormComponent from "./FormComponent"

import { DateContext } from '../context/DateContext'

function AppContainer() {
    const [date, setDate] = React.useState({
        day: 0,
        month: 0,
        year: 0
    })

    return (
        <div className="md:max-w-xl md:mx-auto bg-neutral-white rounded-3xl rounded-br-[6rem] p-8 py-10">
            <DateContext.Provider value={[setDate]}>
                <FormComponent />
            </DateContext.Provider>

            <div className="md:mt-0 mt-8 italic">
                <div className="font-bold text-5xl">
                    <span className="text-primary-purple">{date.year || '--'}</span>
                    <p className=" inline"> years</p>
                </div>

                <div className="font-bold text-5xl my-2">
                    <span className="text-primary-purple">{date.month || '--'}</span>
                    <p className=" inline"> months</p>
                </div>

                <div className="font-bold text-5xl my-2">
                    <span className="text-primary-purple">{date.day || '--'}</span>
                    <p className=" inline"> days</p>
                </div>
            </div>
        </div>
        
    )
}

export default AppContainer