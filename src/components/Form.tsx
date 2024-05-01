import * as React from 'react'

import { UpdateDateT } from '../types/UpdateDate';
import { ValidationT } from '../types/ValidationType';

import InputFields from './InputFields';

import iconArrowImg from '../assets/images/icon-arrow.svg';

function Form({
  updateDate
}: {
  updateDate: UpdateDateT
}) {
    const [validations, setValidations] = React.useState<ValidationT>({
      isInvalidDay: false,
      isInvalidMonth: false,
      isInvalidYear: false
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        
        const formElem = e.currentTarget as HTMLFormElement
        const [[, day], [, month], [, year]] = new FormData(formElem)

        const isApril = +month === 4 && +day === 31

        setValidations(() => ({
          isInvalidDay: (+day > 31 || isApril) ? true : false,
          isInvalidMonth: +month > 12 ? true : false,
          isInvalidYear: +year > (new Date).getFullYear() ? true : false
        }))

        if (
          validations.isInvalidDay ||
          validations.isInvalidMonth ||
          validations.isInvalidYear
        ) return false

        updateDate({
          day,
          month,
          year
        })
    }

    return (
        <form onSubmit={handleSubmit}>
          <InputFields errors={validations} />

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