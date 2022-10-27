import React from 'react';
import { ITodos } from './Interfaces';

interface Props{
    tehtava: ITodos
    completeTodo(todoToDelete:string): void
}

const TodoTable =({tehtava, completeTodo}: Props) =>{
    return(
        <>
        <tbody>
            <tr >
            
            <td>{tehtava.description}</td>
            <td>{tehtava.date}</td>
            <td>{tehtava.priority}</td>
             <button onClick={()=>{
            completeTodo(tehtava.description);
        }}>Delete</button>
            </tr>
        </tbody>
       
        </>
    )
}
export default TodoTable;