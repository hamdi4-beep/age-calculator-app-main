function InputField({ ...props }: {
    name: string
}) {
    const {name} = props

    const dateMax: {
        [x: string]: number
    } = {
        "day": 31,
        "month": 12,
        "year": (new Date).getFullYear()
    }

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
                min={name !== 'year' ? '01' : '1800'}
                max={dateMax[name]}
                {...props}
            />
        </div>
    )
}

export default InputField