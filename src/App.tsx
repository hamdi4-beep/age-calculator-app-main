import * as React from 'react'

import Form from "./components/Form"

import { UpdateDateT } from './types/UpdateDate'
import { DateT } from './types/DateType'

function App() {
  const [date, setDate] = React.useState<DateT>({
    day: '--',
    month: '--',
    year: '--'
  })

  const updateDate: UpdateDateT = (newDate) => setDate(newDate)
  console.log(date)

  return (
    <div role="main" className="font-sans-serif h-screen flex justify-center items-center bg-off-white">
      <div className="md:w-[45%] bg-white p-8 rounded-xl rounded-br-[10rem] flex-grow-1">
        <Form updateDate={updateDate} />

        <h2 className='md:text-6xl text-5xl font-black italic'>
          <span className='text-primary-purple'>{date.year + ' '}</span>
          years
        </h2>

        <h2 className='md:text-6xl text-5xl font-black italic'>
          <span className='text-primary-purple'>{date.month + ' '}</span>
          months
        </h2>

        <h2 className='md:text-6xl text-5xl font-black italic'>
          <span className='text-primary-purple'>{date.day + ' '}</span>
          days
        </h2>
      </div>
    </div>
  )
}

export default App