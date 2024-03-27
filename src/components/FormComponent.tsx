import InputField from "./InputField"

import arrowImg from '../assets/icon-arrow.svg'

function FormComponent() {
    return (
        <form>
          <div className="flex gap-4">
              <InputField name="day" />
              <InputField name="month" />
              <InputField name="year" />
          </div>

          <div className="border-t border-neutral-light-grey mt-16"></div>

          <button className="block bg-primary-purple rounded-full p-5 -mt-8 mx-auto">
              <img src={arrowImg} className='w-6' alt="" />
          </button>
        </form>
    )
}

export default FormComponent