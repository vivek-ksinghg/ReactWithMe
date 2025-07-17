
import './App.css'

function App() {
  
 const name="vivek";
 function sum(a,b){
  return a+b;
 }

 function operation(a,b,op){
  let result=0;

  if(op=='+'){
    return a+b;
  } else if(op=='-'){
         return a-b;
  }else{
    return "operation wrong";
  }
 }
function call(){
  alert("calling function")
}

let fruit=(name)=>{
  alert("fruit");
}


  return ( 
    <>
      <h1>jsx with curly braces</h1>
      <h1>{name}</h1>
      <h1>{sum(5,9)}</h1>
      <h1>{fruit()}</h1>
      <h1>{operation(9,7,"+")}</h1>
      <h1>{obj.age}</h1>
      <h1>{obj.name}</h1>
      <h3>{arr[1]}</h3>
      <button onClick={
       ()=>fruit("apple")
}> button</button>
    </>
  )
}

 let fruit=(name)=>{
 alert(name);
}

let obj={
  name:"alok",
  age:20,
  college:"bansal",
  city:"no"
}

let arr=[15,50,75];
export default App
