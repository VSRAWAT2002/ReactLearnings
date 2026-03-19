import { useState, useEffect, useCallback } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  //  const [count, setCount] = useState9('vijay');
  let  [counter, mycounterFunc] = useState(10);


  // let counter = 0;
  const addValue = () => {
    // console.log("addValue called " + counter);
    if (counter<20) {
      counter = counter + 1;
    mycounterFunc(counter  )
    }

  }

 const decValue =()=>{
if (counter >0) {
     mycounterFunc(counter-1);
}
  
 } 
  return (
    <>
      <h1>Learn react</h1>
      <h2>counter value: {counter}</h2>
      <button
        onClick={addValue}>Add value {counter}</button>
      <br />
      <button onClick={decValue}>Decrse value {counter}</button>
      <p>footer:{counter} </p>

    </>
  )
}

export default App
