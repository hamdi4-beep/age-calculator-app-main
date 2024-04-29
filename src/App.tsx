import Form from "./components/Form"


function App() {
  return (
    <div role="main" className="font-sans-serif h-screen flex justify-center items-center bg-off-white">
      <div className=" bg-white p-8 rounded-xl rounded-br-[10rem] flex-grow-1">
        <Form />

        <h2 className='text-6xl font-black italic'>
          <span className='text-primary-purple'>38 </span>
          years
        </h2>

        <h2 className='text-6xl font-black italic'>
          <span className='text-primary-purple'>3 </span>
          months
        </h2>

        <h2 className='text-6xl font-black italic'>
          <span className='text-primary-purple'>26 </span>
          days
        </h2>
      </div>
    </div>
  )
}

export default App