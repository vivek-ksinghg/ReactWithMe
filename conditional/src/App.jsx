import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>multiple condition in react</h1>
      <h1>{count}</h1>
      <button onClick={()=>setCount(count+1)}>update counter</button>

      {
        count==1?<h1>condition1</h1>
        :count==2?<h2>condition2</h2>
        :count==3?<h1>condition3</h1>
        
        :<h1>other</h1>
      }
    </>
  )
}

export default App
