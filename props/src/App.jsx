import { useState } from 'react'
import Student from './student.jsx'

import './App.css'

// object
const stu={name:"ujjwal", age:"19"};

function App() {

  return (
    <>
     {/* <Student name="vivek" age='30'/>
     <Student name="Sushil" age='18'></Student> */}
     <Student user={stu}>kya hua</Student>
    </>
  )

}

export default App;
