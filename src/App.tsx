import * as React from 'react'

import Form from "./components/Form"
import { UpdateDateT } from './types/UpdateDate'

function App() {
  const [date, setDate] = React.useState<{
    day: FormDataEntryValue|number,
    month: FormDataEntryValue|number,
    year: FormDataEntryValue|number
  }>({
    day: 1,
    month: 1,
    year: 1000
  })

  const updateDate: UpdateDateT = (newDate) => setDate(newDate)
  console.log(date)

  return (
    <div role="main" className="font-sans-serif h-screen flex justify-center items-center bg-off-white">
      <div className="md:w-[45%] bg-white p-8 rounded-xl rounded-br-[10rem] flex-grow-1">
        <Form updateDate={updateDate} />

        <h2 className='md:text-6xl text-5xl font-black italic'>
          <span className='text-primary-purple'>38 </span>
          years
        </h2>

        <h2 className='md:text-6xl text-5xl font-black italic'>
          <span className='text-primary-purple'>3 </span>
          months
        </h2>

        <h2 className='md:text-6xl text-5xl font-black italic'>
          <span className='text-primary-purple'>26 </span>
          days
        </h2>
      </div>
    </div>
  )
}

export default App