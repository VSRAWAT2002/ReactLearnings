import { useState, useCallback, useEffect } from 'react'

import './App.css'


function App() {
  const [length, setLength] = useState(8)
  const [numAllowed, setNumAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const passwordGenerator = useCallback(passGenerator, [length, numAllowed, charAllowed, setPassword])

  function passGenerator() {
    let pass = '';
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numAllowed) str += "0123456789";
    if (charAllowed) str += "%&#@";
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }
useEffect(() => { passwordGenerator();},
    [length, numAllowed, charAllowed, setPassword])

  return (
    <>
      {/* <h1 className='text-center bg-amber-400 text-4xl font-bold underline text-white'>Password Generator</h1> */}
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg p-3  my-4 text-orange-600 bg-emerald-400 '>
        <h1 className='text-white text-center m-4 text-4xl' >Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input
            type='text'
            placeholder='Password'
            className='outline-none w-full py-1.5 px-3 bg-amber-50 text-fuchsia-600'
            value={password}

            readOnly
          />
          <button className='bg-blue-700 p-2 shrink-0 outline-amber-400 text-pink-500 px-2 py-1 hover:bg-slate-500'>
            Copy
          </button>

        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => { setLength(e.target.value) }}
            />
            <label>Length:{length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={numAllowed}
              onChange={() => { setNumAllowed((prev) => !prev) }}
            />
            <label>Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              onChange={() => { setCharAllowed((prev) => !prev) }}
            />
            <label>Special Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
