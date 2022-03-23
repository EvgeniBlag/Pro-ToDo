import React,{useState} from "react";
import './index.css';
import ToDoItem from "./ToDoItem";

const toDoBase = [
    {
    _id: 1,
    name: "Comprar ordenador",
    isChecked: true
},
{
    _id: 2,
    name: "Comprar leche",
    isChecked: false,
  }
]

const ToDo = () => {
    const [name,setName]=useState('');
    return (
 <>
    {toDoBase.map(todo => (
        <ToDoItem todo={todo}/>
    ))}

      <input type="text" value={name} onChange={e => setName
        (e.target.value)}/>
 </>     
    )
}

export default ToDo