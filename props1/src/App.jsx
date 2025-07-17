import { useState } from 'react'

import './App.css'
import Employe from './employe'

function App() {
  const [count, setCount] = useState(0)
   
  const info={
    nam:"ankush",
    age:26,
    location:"indore",
    number:"7257868224"
}

const arr=[12,55,48,76];
  return (
    <>
    <h1>learning props </h1>
 
     <Employe user={info}></Employe>
     <Employe arr={arr}></Employe>
    </>
  )
}

export default App
