function DayField({
    error
}: {
    error: boolean
}) {
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
                className="focus:outline-none focus:border-primary-purple block border border-neutral-light-grey rounded-lg w-20 font-bold mt-1 p-3 px-4"
            />

            {error && <span className='block text-primary-light-red mt-1 italic text-sm'>Must be a valid day</span>}
        </div>
    )
}

export default DayField