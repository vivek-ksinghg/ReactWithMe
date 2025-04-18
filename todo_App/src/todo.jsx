
import { useState } from "react"
import {v4 as uuidv4} from 'uuid'

export default function Todo(){
 
    let [tasks, settask]=useState([{task:"sample task",id:uuidv4()}]);
    let [newTodo,setnewTodo]=useState(" ");


    let newtask=()=>{
       settask((prevTodo)=>{
        return [...prevTodo,{task:newTodo, id:uuidv4()}]
      
      
      });
         
       setnewTodo();
        
    }

    let updateTask=(event)=>{
     setnewTodo(event.target.value);
    
    }

   let deleteTodo=(id)=>{
      let copy=tasks.filter((todo)=>todo.id!=id);
      settask(copy)

      
 
      
   }

   return(
    <>
    <input placeholder="add task" value={newTodo} onChange={updateTask}></input>
    <button onClick={newtask}>Add task</button>
 
    <br></br><br></br> <br></br>
<br></br>
     <h4>todo list</h4>
     <ul>
     {
        tasks.map((task)=>(
           
           <li key={task.id}>
            <span>{task.task}</span>
            &nbsp;  &nbsp;  &nbsp;  &nbsp;
            <button onClick={()=>deleteTodo(task.id)}>Delete</button>
           
           </li>
        ))
     }
     
     </ul>
    </>
   )
}