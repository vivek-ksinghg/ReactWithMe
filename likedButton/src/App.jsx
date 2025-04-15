import { useState } from 'react'

import './App.css'

function App() {
  const [isLiked, setisLiked] = useState(false);


  function liked(){
  setisLiked(!isLiked);
  }
  let styles={color:"red"};
  return (
    <>
     <p onClick={liked}>
 
      {isLiked? <i className="fa-solid fa-heart" style={styles}></i> : <i className="fa-regular fa-heart"></i> }
 
  </p>
    </>
  )
}

export default App
