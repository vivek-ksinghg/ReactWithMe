import { useState } from "react"
export default function Counter(){
   let [count, setcount]=useState(0); 

    function inc(){
    setcount(count+1);
    }
    return (<>

     <h3>count={count}</h3>
     <buttom onClick={inc}>Increase</buttom>

    </>)
}