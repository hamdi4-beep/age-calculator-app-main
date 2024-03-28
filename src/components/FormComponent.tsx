import arrowImg from '../assets/icon-arrow.svg'
import React from "react"

const inputFields = [
    ['day', 'DD'],
    ['month', 'MM'],
    ['year', 'YYYY']
]

function FormComponent({
    handleSubmit
}: {
    handleSubmit: (e: React.FormEvent) => void
}) {
    return (
        <form onSubmit={handleSubmit}>
          <div className="md:max-w-sm flex md:gap-4 gap-2">
            {inputFields.map(([name, placeholder], i) => (
                <div className="flex-grow" key={i}>
                    <label
                        htmlFor={name}
                        className='font-semibold tracking-widest text-sm text-neutral-smokey-grey'
                    >{name.toUpperCase()}</label>
            
                    <input
                        type="number"
                        name='date'
                        id={name}
                        required
                        placeholder={placeholder}
                        className="focus:outline-none focus:border-primary-purple block border border-neutral-light-grey rounded-lg w-20 font-bold mt-1 p-3 px-4"
                    />
                </div>
            ))}
          </div>

          <div className="border-t border-neutral-light-grey md:mt-8 mt-16"></div>

          <button className="hover:bg-neutral-off-black block bg-primary-purple rounded-full p-5 -mt-8 mx-auto md:ml-auto md:mr-0">
              <img src={arrowImg} className='w-6' alt="" />
          </button>
        </form>
    )
}

export default FormComponent