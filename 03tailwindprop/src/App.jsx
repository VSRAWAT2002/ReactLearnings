import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  var myobj1 = {
    product: "Super Smart Watch",
    price: "$199",
    description: "Experience the future on your wrist. This waterproof smartwatch features heart rate monitoring, GPS, and a 7-day battery life."
  }
  var myobj2 = {
    product: "Normal Smart Watch",
    price: "$99",
    description: "Experience the future on your wrist. This waterproof smartwatch features heart rate monitoring, GPS, and a 7-day battery life."
  }
  let newArry = [1, 2, 4]
  return (
    <>
      <h1 className='bg-green-500 text-green-400 p-4 rounded-2xl mb-5'> TailWind Prop</h1>
      <Card userName="Super Smart Watch" data={myobj1} />
      <Card userName="Normal Smart Watch" data={myobj2} btnText="click me" />

      {/* <Card /> */}





    </>
  )
}

export default App
