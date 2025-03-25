import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 let [counter,setcounter]= useState(12); 
 /* useset is react function ,it return arr , in arr two value
 jo ki ham counter and setcounter me store kra rahe hai , ham name kuchh bhi rakh skte hai
 */

// let counter=15;

const addValue=()=>{
  console.log("value added",Math.random()*10+1);
  counter++;
  if(counter<=20){
    setcounter(counter);
  }

  
}

const removeValue=()=>{

  if(counter>0){
  setcounter(counter-1);
}

}



  return (
    <>
    <h1>code with me</h1>
    <h3>counter value: {counter}</h3>
    <button onClick={addValue}>add value</button>
    <br>
    </br>

    <button onClick={removeValue}>remove value</button>
   </>
  )
}

export default App
