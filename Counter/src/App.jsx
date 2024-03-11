import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {


  const [number, setToggle] = useState(0);


  const incre = () => {
    setToggle(number +1);

  }

  const decre = () => {
    setToggle(number -1);
  }
  return (
    <>
      <div >

        <p> Your Current Number is : {number}</p>

        <button onClick={incre} >
          Increase
        </button>

        <button onClick={decre}>
          Decrease
        </button>
      </div>

    </>
  )
}

export default App
