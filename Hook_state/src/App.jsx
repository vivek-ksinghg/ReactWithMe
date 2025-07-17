import { useState } from 'react'
import Counter from './Counter'


function App() {
const [name,setname]=useState("mango")


function change(){
  
  setname("Bnana")
  
}
  return (
    <>
    <h1>{name}</h1>
    <button onClick={change}>change fruit name</button>
   <Counter></Counter>
 
   
    
    </>
  )
}

export default App
