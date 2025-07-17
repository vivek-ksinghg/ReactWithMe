import { useState } from 'react'


function App() {
  const [skills, setskills] = useState([]);
  const handleSkills=(event)=>{
  console.log(event.target.value,event.target.checked);
  if(event.target.checked){
    setskills([...skills,event.target.value]);
  }else{
    setskills([...skills.filter((item)=>item!=event.target.value)]);
  }
  
   }
  return (
    <>
    <h1>select your skills</h1>
   
    <input onChange={handleSkills} type="checkbox" id="php"   value="php" ></input>
    <label htmlFor='php'>PHP</label>
    <br>
    </br>
    <br></br>
    
    <input onChange={handleSkills}  type="checkbox" id="java" value="java" ></input>
    <label htmlFor='java'>Java</label>
    <br></br>
    <br></br>

    <input onChange={handleSkills} type="checkbox" id="python" value="python"></input>
    <label htmlFor='python'>Python</label>
    
    </>
  )
}

export default App
