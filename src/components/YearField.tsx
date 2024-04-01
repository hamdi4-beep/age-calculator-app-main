function YearField({
    date
}: {
    date: {
        day: number
        month: number
        year: number
    }
}) {
    const isInvalidYear = date.year > (new Date).getFullYear()
    
    return (
        <div className="flex-grow">
            <label
                htmlFor='year'
                className='font-semibold tracking-widest text-sm text-neutral-smokey-grey'
            >YEAR</label>
    
            <input
                type="number"
                name='date'
                id='year'
                min='4'
                required
                placeholder='YYYY'
                className="focus:outline-none focus:border-primary-purple md:w-28 block border border-neutral-light-grey rounded-lg w-20 font-bold mt-1 p-3 px-4"
            />

            {isInvalidYear && <span className='block text-primary-light-red mt-1 italic text-sm'>Must be in the past</span>}
        </div>
    )
}

export default YearField