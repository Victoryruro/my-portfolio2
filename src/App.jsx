import { useState } from 'react'
import Header from './Components/Header/Header'
import './App.css'
import Project from './Components/Project/Project'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header /> 
      <Project /> 
      
    </>
  )
}

export default App
