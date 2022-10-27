import {ITodos} from "./Interfaces"
import React, { useState } from 'react';
import TodoTable from "./TodoTable";
import  "./App.css";


function Todolist() {
    const [description, setDescription] = useState<string>("");
    const [date, setDate] = useState<string>("");
    const [priority, setPriority] = useState<string>("");
    const [todos, setTodos]=useState<ITodos[]>([]);
  
    const inputChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
      if(event.target.name ==='description' ){
        setDescription(event.target.value);
      }else if(event.target.name === 'date' ){
        setDate(event.target.value);
        
      }else if( event.target.name === 'priority' ){
        setPriority(event.target.value);
      }
    }
  
   const addTodo =()=>{
    const newTodos ={
      description: description,
      date: date,
      priority: priority

    }
    setTodos([...todos, newTodos]);
    console.log(todos);
    setDescription("")
    setDate("")
    setPriority("")
    
   }
   const completeTodo =(todoToDelete: string)=>{
  setTodos(todos.filter((tehtava)=>{
    return  tehtava.description != todoToDelete
  })) 
  
  }

    return(
        <>
                 
        <input type="text" name= "description" placeholder='Description' id="description" value={description} onChange={inputChanged} />
                 
         <input type="text" name="date" placeholder='Date'id="date" value={date} onChange={inputChanged} />
             
         <input type="text" name="priority" placeholder='Priority' id="priority" value={priority} onChange={inputChanged} />
        
        <button onClick={addTodo}>Add</button> 
      
      <div className='Todotable'>
     {todos.map((tehtava: ITodos, key: number) =>{
      return <TodoTable key={key} tehtava={tehtava} completeTodo={completeTodo}/>
     })}
      </div>
        </>
    )
}

export default Todolist;