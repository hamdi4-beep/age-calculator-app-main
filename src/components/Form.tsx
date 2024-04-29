import InputField from './InputField';

import iconArrowImg from '../assets/images/icon-arrow.svg';

function Form() {
    const handleSubmit = (e: React.FormEvent) => e.preventDefault()

    return (
        <form action="#" onSubmit={handleSubmit}>
          <div className="flex gap-6">
            <InputField name="day" />
            <InputField name="month" />
            <InputField name="year" />
          </div>

          <div className='md:mt-8 mt-16 border-t border-neutral-light-grey'></div>

          <button className='hover:bg-black block bg-primary-purple p-4 rounded-full md:ml-auto md:mr-0  mx-auto md:-mt-8 md:mb-0 -mt-8 mb-8'>
            <img
              className='w-9'
              src={iconArrowImg}
              alt=""
            />
          </button>
        </form>
    )
}

export default Form