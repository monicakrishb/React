
import React,{useState,useRef} from 'react';
import TodoList from './TodoList';

function Use() {
  const[todos,setTodos]=useState([])
  const todoNameRef=useRef() 

  function handleAddToDo(e) {
   const name= todoNameRef.current.value
   if(name ==='')return
   setTodos(prevTodos=>{
    return[...prevTodos,{id:1,name:name,complete:false}]
   })
   todoNameRef.current.value=null
  }
  return (
    <>
    <TodoList todos={todos}/>
    <input ref={todoNameRef}type="text"/>
    <button onClick={handleAddToDo}>Add Todo</button>
    <button>clear Complete</button>
    </>
  )
    
    
}

export default Use;

