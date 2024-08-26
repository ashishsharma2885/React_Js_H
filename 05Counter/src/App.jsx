import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // how to use this hook
  let [counter, ashishCounter] = useState(15)

 // let counter = 15

  const addValue = () => {
    console.log("clicked", counter)
   // counter = counter + 1
   ashishCounter(counter + 1)
  }

  const removeValue = () => {
    ashishCounter(counter - 1)
  }

  return (
    <>
     <h1>Ashish Aur React</h1>
     <h2>Counter value: {counter}</h2>

     <button
     onClick={addValue}
     >Add value {counter}</button>
     <br />
     <button
     onClick={removeValue}
     >remove value {counter}</button>
     <p>footer: {counter}</p>
    </>
  )
}

export default App
