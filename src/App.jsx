import { useState } from 'react'
import Header from './Components/Header/Header'
import './App.css'
import Project from './Components/Project/Project'
import Head from './Components/Header/Head'
import Social from './Components/Social/Social'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Head />
      <Header /> 
      <Project /> 
      <Social />
      
    </>
  )
}

export default App
