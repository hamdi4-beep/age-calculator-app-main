function DayField({
    date
}: {
    date: {
        day: number
        month: number
        year: number
    }
}) {
    const isInvalidDay = date.day > 31
    const isApril = date.month === 4 && date.day === 31

    return (
        <div className="flex-grow">
            <label
                htmlFor='day'
                className='font-semibold tracking-widest text-sm text-neutral-smokey-grey'
            >DAY</label>
    
            <input
                type="number"
                name='date'
                id='day'
                min='2'
                required
                placeholder='DD'
                className="focus:outline-none focus:border-primary-purple md:w-28 block border border-neutral-light-grey rounded-lg w-20 font-bold mt-1 p-3 px-4"
            />

            {isInvalidDay && (
                <span className='block text-primary-light-red mt-1 italic text-sm'>
                    Must be a valid day
                </span>
            )}

            {isApril && (
                <span className='block text-primary-light-red mt-1 italic text-sm'>
                    Must be a valid date
                </span>
            )}
        </div>
    )
}

export default DayField