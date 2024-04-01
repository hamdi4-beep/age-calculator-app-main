import * as React from 'react'
import FormComponent from "./FormComponent"

import {DateObject} from '../types/DateType'

function AppContainer() {
    const [date, setDate] = React.useState({
        day: 0,
        month: 0,
        year: 0
    })

    return (
        <div className="md:max-w-xl md:mx-auto bg-neutral-white rounded-3xl rounded-br-[6rem] p-8 py-10">
            <FormComponent updateDate={(newDate: DateObject) => setDate(newDate)} />

            <div className="md:mt-0 mt-8 italic">
                <div className="font-bold text-5xl">
                    <p className="inline text-primary-purple">{date.year || '--'}</p>
                    <span> years</span>
                </div>

                <div className="font-bold text-5xl my-2">
                    <p className="inline text-primary-purple">{date.month || '--'}</p>
                    <span> months</span>
                </div>

                <div className="font-bold text-5xl my-2">
                    <p className="inline text-primary-purple">{date.day || '--'}</p>
                    <span> days</span>
                </div>
            </div>
        </div>
        
    )
}

export default AppContainer