import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [color, setColor] = useState('grey')


  return (
    <>
      <div className='w-full h-screen duration-75'
        style={{ backgroundColor: color }}>
        <div className='fixed flex flex-wrap justify-center bottom-12 insert-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3.5 shadow-lg  bg-white px-1 py-2 rounded-full'>
            <button 
            onClick={()=> setColor('red')}
            className='outline-none px-2 rounded-4xl'  style={{backgroundColor:'red'}}>
              Red 
            </button>
            <button 
            onClick={()=> setColor('green')}
            className='outline-none px-2 rounded-4xl'  style={{backgroundColor:'green'}}>
              Green 
            </button>
            <button 
            onClick={()=> setColor('blue')}
            className='outline-none px-2 rounded-4xl'  style={{backgroundColor:'blue'}}>
              Blue 
            </button>
          </div>
        </div>
      </div>
      {/* <button onClick={setWhiteColor} >
        White
      </button> */}

    </>
  )
}

export default App
