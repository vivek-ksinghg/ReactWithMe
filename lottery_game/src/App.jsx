import { useState } from 'react'
import "./lottery.css"
import './App.css'
import {genTickeet,sum} from './helper'

function App() {
  const [ticket, setticket] = useState(genTickeet(3));
  const isWinning=sum(ticket)===15;
 let buyTicket=()=>{
    setticket(genTickeet(3));
  }

  return (
    <>
   
   <h1>lottery game</h1>
   <div className='ticket'>
    <span>{ticket[0]}</span>
    <span>{ticket[1]}</span>
    <span>{ticket[2]}</span>

   </div>
   <br></br>
   <button onClick={buyTicket}>Buy Now Ticket</button>
   <h3>{isWinning && "congratulations, you won!"}</h3>
    </>
  )
}

export default App;
