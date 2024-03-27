import InputField from "./components/InputField"
import arrowImg from './assets/icon-arrow.svg'

function App() {
  return (
    <div className="font-sans-serif bg-neutral-off-white h-screen p-4" role='main'>
      <div className="bg-neutral-white rounded-3xl p-6 py-10">
        <form className="flex gap-4">
          <InputField name="day" />
          <InputField name="month" />
          <InputField name="year" />
        </form>

        <div className="border-t border-neutral-light-grey mt-20"></div>
        
        <div className="rounded-full bg-primary-purple w-max p-4 mx-auto -mt-7">
          <img src={arrowImg} className='w-7' alt="an arrow down" />
        </div>

        <div className="mt-8">
          <div className="font-bold text-5xl">
            <span className="text-primary-purple">--</span>
            <p className=" inline"> years</p>
          </div>

          <div className="font-bold text-5xl my-2">
            <span className="text-primary-purple">--</span>
            <p className=" inline"> months</p>
          </div>

          <div className="font-bold text-5xl my-2">
            <span className="text-primary-purple">--</span>
            <p className=" inline"> days</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App