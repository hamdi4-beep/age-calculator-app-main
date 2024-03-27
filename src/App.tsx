import FormComponent from './components/FormComponent'

function App() {
  return (
    <div className="font-sans-serif p-4 mt-6" role='main'>
      <div className="md:max-w-xl bg-neutral-white rounded-3xl rounded-br-[6rem] p-8 py-10">
        <FormComponent />

        <div className="md:mt-0 mt-8 italic">
          <div className="font-bold text-5xl">
            <span className="text-primary-purple">38</span>
            <p className=" inline"> years</p>
          </div>

          <div className="font-bold text-5xl my-2">
            <span className="text-primary-purple">3</span>
            <p className=" inline"> months</p>
          </div>

          <div className="font-bold text-5xl my-2">
            <span className="text-primary-purple">26</span>
            <p className=" inline"> days</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App