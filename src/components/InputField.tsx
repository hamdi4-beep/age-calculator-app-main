function InputField({
    name
}: {
    name: string
}) {
    const dateMax: {
        [x: string]: number
    } = {
        "day": ((new Date).getMonth() + 1) === 4 ? 30 : 31,
        "month": 12,
        "year": (new Date).getFullYear()
    }

    const min = name !== 'year' ? '01' : '1000'

    return (
        <div>
            <label
                htmlFor={name}
                className="text-sm text-neutral-smokey-grey font-bold tracking-widest">
                    {name.toUpperCase()}
            </label>

            <input
                type="number"
                className='focus:border-primary-purple block outline-none font-bold text-lg border border-neutral-light-grey rounded-sm p-2 px-4 mt-1 md:w-28 w-18'
                name={name}
                id={name}
                min={min}
                max={dateMax[name]}
                required
            />
        </div>
    )
}

export default InputField