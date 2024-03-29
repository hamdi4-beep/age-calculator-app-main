function MonthField({
    date
}: {
    date: {
        day: number
        month: number
        year: number
    }
}) {
    const isInvalidMonth = date.month > 12
    
    return (
        <div className="flex-grow">
            <label
                htmlFor='month'
                className='font-semibold tracking-widest text-sm text-neutral-smokey-grey'
            >MONTH</label>
    
            <input
                type="number"
                name='date'
                id='month'
                min='2'
                required
                placeholder='MM'
                className="focus:outline-none focus:border-primary-purple block border border-neutral-light-grey rounded-lg w-20 font-bold mt-1 p-3 px-4"
            />

            {isInvalidMonth && <span className='block text-primary-light-red mt-1 italic text-sm'>Must be a valid month</span>}
        </div>
    )
}

export default MonthField