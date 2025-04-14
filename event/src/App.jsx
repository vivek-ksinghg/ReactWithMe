
import './App.css'


function sayhello(){
    <p>helllo my friends</p>
    console.log("buttom was click");
}

function mouse(){
  console.log("mouse over");
  
}

function App() {
 
  return (
    <>
      <button onClick={sayhello}>what happen</button>
      <p onMouseOver={mouse}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos incidunt, ea nihil rem pariatur
         adipisci aspernatur voluptas dolorum ut consectetur recusandae quod, temporibus quasi,
          mollitia doloribus! Consequuntur similique placeat in?</p>
    </>
  )
}

export default App
