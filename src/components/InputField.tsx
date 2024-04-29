function InputField({ ...props }: {
    name: string
}) {
    const {name} = props

    return (
        <div>
            <label
                htmlFor={name}
                className="text-sm text-neutral-smokey-grey font-bold tracking-widest">
                    {name.toUpperCase()}
            </label>

            <input
                type="number"
                className='focus:border-primary-purple block outline-none font-bold text-lg border border-neutral-light-grey rounded-sm p-2 px-4 mt-1 w-28'
                {...props}
            />
        </div>
    )
}

export default InputField