// import { useState } from "react";
//import { useState } from 'react';
import { useState } from 'react';
import './App.css';


const App=()=>
{
 const [todo,setTodo]=useState([])
 const [editingFlag,setediTing]=useState(-1)


function addTodo(evant)
{
  console.log("------addTodo-------");
  let tempTodo=document.getElementById("todoInput").value
  console.log("tempTodo: "+tempTodo)

if(todo.length>0)
{
addToarray(todo[todo.length-1].id+1,tempTodo, false)
}
else
{
addToarray(0,tempTodo, false)
}
}
function addToarray( id,text,completed)
{

  let tempTodoObject=
  {
    id:id,
    text:text,
    completed:completed

  }
  todo.push(tempTodoObject)
  console.log(todo)
  setTodo([...todo])
  document.getElementById("todoInput").value = ""
}

function deleteTodo(id)
{
  console.log("-----delete function is running-----")
  let deleteTodo=todo.filter((deleteTodo)=>deleteTodo.id !==id)
  setTodo([...deleteTodo])
  console.log(deleteTodo)

}

function mockbutton()
{
  if(todo.length>0)
  {
  console.log("mock is rum")
 addToarray(todo[todo.length-1].id+1,"todo:1",true)
 addToarray(todo[todo.length-1].id+1,"todo:2",false)
 addToarray(todo[todo.length-1].id+1,"todo:3",false)
 addToarray(todo[todo.length-1].id+1,"todo:4",false)
}
else
{
  addToarray(0,"todo:1",true)
  addToarray(todo[todo.length-1].id+1,"todo:2",false)
  addToarray(todo[todo.length-1].id+1,"todo:3",false)
  addToarray(todo[todo.length-1].id+1,"todo:4",false)

}
}
function checkLitener(id)
{
  console.log("-------check-------")
  todo.map(element=>{ 
    if(element.id==id)
    {
      element.completed=!element.completed
    }
    return element
  })
  console.log(todo)
  setTodo([...todo])
}
function editTodo(id)
{
  console.log("-----edit todo-------")
  setediTing(id)

}

function upDateTodo()
{
  console.log("-----eun upDateTodo------")
  console.log("editingFlag: "+editingFlag)

  let tempTodo=todo.map(element=>{

      if(element.id==editingFlag)
      {
        element.text=document.getElementById("editTodo").value
      }
      return element
  })
  setediTing(-1)
  setTodo([...tempTodo])
}

  return <div>
    <h1>To-do Application</h1>
    <button onClick={()=>mockbutton()}>mock</button>
    <input type="text" placeholder="Enter to-do here" id="todoInput" />
    <button onClick={()=>addTodo()}>Add to-do</button>

   {
      todo.map(element =>
     {
      return <div>
      {

        //compeleted todo
        element.completed ?
        <div>
        <input type="checkbox" onChange={()=>checkLitener(element.id)}checked />
        <s>{element.text+"    "}</s>


      </div>:
      //incompeleted todo
      (element.id == editingFlag ? 

        <div>
        <input type="checkbox" onClick={()=>checkLitener(element.id)}/>
        <input type="text" Value={element.text+"    "} placeholder="updating todo" id="editTodo" />

      <button onClick={()=>deleteTodo(element.id)}>Delete todo</button>
      <button onClick={()=>upDateTodo()}>seve to-do</button>


      </div>:

      <div>
        <input type="checkbox" onClick  ={()=>checkLitener(element.id)}/>
      {element.text+"    "}
      <button onClick={()=>deleteTodo(element.id)}>Delete todo</button>
      <button onClick={()=>editTodo(element.id)}>Edit</button>

      </div>
      )


      }
      </div>
    })
  }
  </div>
}


export default App;

// import React from 'react';

// const App = () => {
//   let [todo, setTodo] = useState([])
//   function AddTodo(event) {
//     console.log("---------Todo list added--------")
//     let newTodo = document.getElementById("inputTodo").value
//     console.log(newTodo)
//     Arraytodo(todo.length,newTodo)
//   }
  
//   function deleteTodo(id) 

//   {
//     console.log("-------delete todo------")
//     let delet = todo.filter((element) => element.id != id)
//     setTodo([...delet])
//     console.log(delet)
     
//   }

//   function Arraytodo(id,text)
//   {
//     let upDatetodo =
//     {
//       id:id,
//       text:text,

//     }
//     todo.push(upDatetodo)

//     setTodo([...todo])
//     console.log(todo)
//   }
//   function mockButton()
//    {
//    Arraytodo (todo.length,"todo-3")
//    Arraytodo(todo.length,"todo-2")
//    Arraytodo (todo.length,"todo-4")
//    Arraytodo(todo.length,"todo-1")
//    Arraytodo (todo.length,"todo-5")
//   }
  
//   function editTodo()
//   {

//   }

//   return <div>
//     <h1>Add todo list</h1>
//     <button onClick={() => mockButton()}>mock</button>
//     <input type="text" placeholder='Enter todo list' id='inputTodo' />
//     <button onClick={() => AddTodo()}>Add todo-list</button>


//     {todo.map((element) =>
//      {
//       return <div>
//         <div>{element.text}</div>
//         <button onClick={() => deleteTodo(element.id)}>Delete-todo</button>
//         <button onClick={()=>editTodo()}>Edit</button>

//       </div>

//     }
//     )}

//   </div>
// }

// export default App




