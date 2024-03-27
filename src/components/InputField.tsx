function InputField({
    name
}: {
    name: string
}) {
    const firstLetter = name.charAt(0).toUpperCase()

    return (
      <div className="flex-grow">
        <label
          htmlFor={name}
          className='font-semibold tracking-widest text-neutral-smokey-grey'
        >{name.toUpperCase()}</label>
  
        <input
          type="number"
          name={name}
          id={name}
          min={0}
          max={2}
          placeholder={firstLetter !== 'Y' ? firstLetter.repeat(2) : firstLetter.repeat(4)}
          className="block border border-neutral-light-grey rounded-lg w-20 font-bold mt-1 p-3 px-4"
        />
      </div>
    )
  }

  export default InputField