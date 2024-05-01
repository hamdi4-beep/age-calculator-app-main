import * as React from 'react'
import { UpdateDateT } from '../types/UpdateDate';

import InputFields from './InputFields';

import iconArrowImg from '../assets/images/icon-arrow.svg';

function Form({
  updateDate
}: {
  updateDate: UpdateDateT
}) {
    const [errorStatus, setErrorStatus] = React.useState({
      error: ''
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        
        const formElem = e.currentTarget as HTMLFormElement

        const [
          [, day],
          [, month],
          [, year]
        ] = new FormData(formElem)

        const isApril = +month === 4 && +day === 31

        if (
          +day > 31 &&
          +month > 12 &&
          +year > (new Date).getFullYear() ||
          isApril
        ) {
          setErrorStatus({
            error: 'Invalid Date'
          })

          return false
        }

        updateDate({
          day,
          month,
          year
        })
    }

    return (
        <form onSubmit={handleSubmit}>
          <InputFields error={errorStatus.error} />

          <div className='md:mt-8 mt-16 border-t border-neutral-light-grey'></div>

          <button className='hover:bg-black block bg-primary-purple p-4 rounded-full md:ml-auto md:mr-0  mx-auto md:-mt-8 md:mb-0 -mt-8 mb-8'>
            <img
              className='w-9'
              src={iconArrowImg}
              alt=""
            />
          </button>
        </form>
    )
}

export default Form