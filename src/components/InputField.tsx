import * as React from 'react'

function InputField({
    name
}: {
    name: string
}) {

    const handleChange = (e: React.ChangeEvent) => {
        const elem = e.currentTarget as HTMLInputElement
        const value = +elem.value

        if (elem.name === 'day' && value > 31) console.log('Invalid Day!')
        if (elem.name === 'month' && value > 12) console.log('Invalid Month!')
        if (elem.name === 'year' && value > (new Date).getFullYear()) console.log('Invalid Year')
        
    }

    return (
        <div>
            <label
                htmlFor={name}
                className="text-sm text-neutral-smokey-grey font-bold tracking-widest"
            >
                    {name.toUpperCase()}
            </label>

            <input
                type="number"
                className='focus:border-primary-purple block outline-none font-bold text-lg border border-neutral-light-grey rounded-sm p-2 px-4 mt-1 md:w-28 w-18'
                name={name}
                id={name}
                onChange={handleChange}
                required
            />
        </div>
    )
}

export default InputField