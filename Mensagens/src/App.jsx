import React, { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [advice, setAdvice] = useState('')
  const fetchAdvice = async () => {
    const response = await fetch('https://api.adviceslip.com/advice')
    const data = await response.json()
    setAdvice(data.slip.advice)
  }
  useEffect(() => {
    fetchAdvice()
  }, [])

  return (
    <div className='App'>
      <div className='card'>
        <h1 className='title'> Conselho do dia</h1>
        <p className='advice'> "{advice}" </p>
        <button onClick={fetchAdvice} className='button'>Novo Conselho</button>

      </div>
    </div>
  )
}

export default App;