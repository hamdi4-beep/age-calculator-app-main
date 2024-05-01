function InputField({
    name,
    children
}: {
    name: string
    children: React.ReactNode
}) {

    const placeholder = name === 'day' ? 'DD' : name === 'month' ? 'MM' : name === 'year' ? 'YYYY' : ''

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
                placeholder={placeholder}
                required
            />

            {children}
        </div>
    )
}

export default InputField