


// import { useState } from "react";
//import { useState } from 'react';
// import { useState } from 'react';
// import './App.css';

//const { fireEvent } = require("@testing-library/react");



// // todo 1--- branch
// const App=()=>
// {
//  const [todo,setTodo]=useState([])
//  const [editingFlag,setediTing]=useState(-1)


// function addTodo(evant)
// {
//   console.log("------addTodo-------");
//   let tempTodo=document.getElementById("todoInput").value
//   console.log("tempTodo: "+tempTodo)

// if(todo.length>0)
// {
// addToarray(todo[todo.length-1].id+1,tempTodo, false)
// }
// else
// {
// addToarray(0,tempTodo, false)
// }
// }
// function addToarray( id,text,completed)
// {

//   let tempTodoObject=
//   {
//     id:id,
//     text:text,
//     completed:completed

//   }
//   todo.push(tempTodoObject)
//   console.log(todo)
//   setTodo([...todo])
//   document.getElementById("todoInput").value = ""
// }

// function deleteTodo(id)
// {
//   console.log("-----delete function is running-----")
//   let deleteTodo=todo.filter((deleteTodo)=>deleteTodo.id !==id)
//   setTodo([...deleteTodo])
//   console.log(deleteTodo)

// }

// function mockbutton()
// {
//   if(todo.length>0)
//   {
//   console.log("mock is rum")
//  addToarray(todo[todo.length-1].id+1,"todo:1",true)
//  addToarray(todo[todo.length-1].id+1,"todo:2",false)
//  addToarray(todo[todo.length-1].id+1,"todo:3",false)
//  addToarray(todo[todo.length-1].id+1,"todo:4",false)
// }
// else
// {
//   addToarray(0,"todo:1",true)
//   addToarray(todo[todo.length-1].id+1,"todo:2",false)
//   addToarray(todo[todo.length-1].id+1,"todo:3",false)
//   addToarray(todo[todo.length-1].id+1,"todo:4",false)

// }
// }
// function checkLitener(id)
// {
//   console.log("-------check-------")
//   todo.map(element=>{ 
//     if(element.id==id)
//     {
//       element.completed=!element.completed
//     }
//     return element
//   })
//   console.log(todo)
//   setTodo([...todo])
// }
// function editTodo(id)
// {
//   console.log("-----edit todo-------")
//   setediTing(id)

// }

// function upDateTodo()
// {
//   console.log("-----eun upDateTodo------")
//   console.log("editingFlag: "+editingFlag)

//   let tempTodo=todo.map(element=>{

//       if(element.id==editingFlag)
//       {
//         element.text=document.getElementById("editTodo").value
//       }
//       return element
//   })
//   setediTing(-1)
//   setTodo([...tempTodo])
// }

//   return <div>
//     <h1>To-do Application</h1>
//     <button onClick={()=>mockbutton()}>mock</button>
//     <input type="text" placeholder="Enter to-do here" id="todoInput" />
//     <button onClick={()=>addTodo()}>Add to-do</button>

//    {
//       todo.map(element =>
//      {
//       return <div>
//       {

//         //compeleted todo
//         element.completed ?
//         <div>
//         <input type="checkbox" onChange={()=>checkLitener(element.id)}checked />
//         <s>{element.text+"    "}</s>


//       </div>:
//       //incompeleted todo
//       (element.id == editingFlag ? 

//         <div>
//         <input type="checkbox" onClick={()=>checkLitener(element.id)}/>
//         <input type="text" Value={element.text+"    "} placeholder="updating todo" id="editTodo" />

//       <button onClick={()=>deleteTodo(element.id)}>Delete todo</button>
//       <button onClick={()=>upDateTodo()}>seve to-do</button>


//       </div>:

//       <div>
//         <input type="checkbox" onClick  ={()=>checkLitener(element.id)}/>
//       {element.text+"    "}
//       <button onClick={()=>deleteTodo(element.id)}>Delete todo</button>
//       <button onClick={()=>editTodo(element.id)}>Edit</button>

//       </div>
//       )


//       }
//       </div>
//     })
//   }
//   </div>
// }


// export default App;




// import React, { useState } from 'react';

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

//-------------------------------------------------------------------------------------------
 
   //------------------perent to child--------------------------------------------
  
  
  

// // chlid component okay

// import React from "react"

// class Innercomponent extends React.Component 
// {

//   constructor(props)
//    {
//     super(props)
//   }
//   render()
//    {
//     const style={color:this.props.color}
//     return (
//       <div>
//       chiled says:
//       <span style={style}>{this.props.name}</span>
//       </div>
//     )
//   }
// }


// // //perent component

// class App extends React.Component 
// {
//   state={color:"black",name:"Ayush"}

//    changecolor=()=>
//    {
//     const colorText=document.getElementById("colorText").value
//     this.setState({color:colorText})
//    }
// changename=()=>
// {
//   let namechange=document.getElementById("namechange").value
//   this.setState({name:namechange})
// }

//   render()
//    {
//     return (
//       <div>

//      Color <input type="text" placeholder="Enter color here" onChange={this.changecolor} id="colorText"/><br/>
//      Name <input type="text" placeholder="Eneter name here" onChange={this.changename} id="namechange" />
//      <Innercomponent color={this.state.color} name={this.state.name}/>
//       </div>
//     )

//   }
// }

// export default App


// ============================child to perent==========================//

// child component



// class Innercomponent extends React.Component {
//   constructor(props) {
//     super(props)
//   }
//   sendData = () => {
//     let text = document.getElementById("textmassage").value
//     console.log("send data child to perent is="+text)
//     this.props.perentcallback(text)
//   }
//   render() {
//     return (
//       <div>
//         <input type="text" placeholder="enter mass for perent" id="textmassage" />
//         <button onClick={()=>this.sendData()}>send to perent</button>
//       </div>
//     )
//   }
// }

// //perent component-----------------------------------------


// class App extends React.Component {
//   state = { massage: "this is from perent" }

//   perentcallback = (text) => {
//     this.setState({ massage: text })
//   }
//   render() {
//     return (
//       <div>
//         <Innercomponent perentcallback={this.perentcallback}/>
//         <div> Data from child={this.state.massage} </div>
//       </div>
//     )
//   }
// }
// export default App



//====================================================================================
// form create----------------------------

//export default function App() {

//  let vehical=["creta","r15","thar","vanue"]

//  let [,,a] = vehical
// console.log(a)

// function calculation( a,b )
// {
//    const add=a+b
//    const sub=a-b
//    const multi=a*b
//    const division=a/b
//    return [add,sub,multi,division]
// }

// const [add,sub,multi,division]=calculation(4,4)

// console.log(add)
// console.log(sub)
// console.log(multi)
// console.log(division)

// let myObject=
// {
//    creta:"123",
//    vanue:"456",
//    thar:"789",
//    color:"pink",

//    obj2:
//    {
//       data1: "data1",
//       data2: "data2",
//       data3: "data3"
//    },
   
// }
// function printObject({vanue,color, obj2:{data2}})
// {
//   // console.log("details :"+obj.creta+", "+obj.thar)
//   console.log("details :" +vanue+" "+color+" "+data2)
// }
// printObject(myObject)






// function hendalsubmit(event)
// {
//   event.preventDefault();
//   console.log("hello hendal")
// }

//   return (
//     <form onSubmit={hendalsubmit}>
//       <h1>My react from</h1>
//       <label>
//         Email :
//         <input type="email" placeholder="Enetr your email" required />
//       </label>
//       <br />
//       <label>
//         password :
//         <input type="password" placeholder="Enetr your email" required/>
//       </label>
//       <button >submit</button>

//     </form>
//   )
// }


//-----------------------------------------------------------------------------------------------

//=============================useState=====================================10-1-2024==============================


import React from 'react'
import { useState } from 'react'

function App()
 {
const [student , setStudent] = useState
({
   name : "ayush",
   roll : 101,
   address : "indore"
})

 const updateData = () =>
{
   setStudent (student =>{
    return{... student, name :"papa", roll : 100100}
   })
  
}

const updateDatamum = () =>
{
   setStudent (student =>{
    return{... student, name :"mummt", roll : 11111}
   })
  
}

  return (


    <div>
      <div>this is my name : {student.name}</div>
      <div>this is my address : {student.address}</div>
      <div>this is my roll : {student.roll}</div>


      <button onClick={()=>updateData()}>first</button>
      <button onClick={()=>updateDatamum()}>second</button>


    </div>
  )
}

export default App









//import {useState, useEffect, createContext, useContext } from 'react';

// import { useState,createContext, useContext} from 'react';

// const UserContext = createContext();

// function App()
// {
      
//     const [user,setUser]= useState("Ayush Dogne here");
//     let count=0;
//     var [student, setStudent] = useState(
//         {
//             name:"Aditya Gupta",
//             rollNumber: 111,
//             contact: 9988776699,
//             address: "101, jhwvckjsbdvckjsbdvkjsdbv"
//         });
    
//     var updateData = () =>
//     {
//         console.log("updateData")
//         console.log(student)
//         setStudent(student => 
//             {
//                 return { ...student, name: "Ayush",rollNumber:222}

//             });
//         console.log(student)
//         count=count+1;
//     }    

//     //   useEffect(()=>
//     //    {
//     //     setTimeout(()=>
//     //     {
//     //         console.log("----this is another site----")
//     //         // setStudent(student => 
//     //         //     {
//     //         //         return { ...student, name: "Ayush",rollNumber:222}
    
//     //         //     });
//     //     },5000)
//     //    },count)

//     // const styleObj = {
//     //     color: "black",
//     //     backgroundColor: "DodgerBlue",
//     //     padding: "10px",
//     //     fontFamily: "Sans-Serif"
//     // }
//     return (
//        <div>
            
//             <div>This is my Name: {student.name}</div>
//             <div>This is my Roll Number: {student.rollNumber}</div>
//             <div>This is my Contact: {student.contact}</div>
//             <div>This is my Address: {student.address}</div>
//             <button onClick={()=>updateData()}>Update Data</button>
//             <UserContext.Provider value={user}>
//             <h1>{`hello ${user}!`}</h1>
//             <Component2/>
//             </UserContext.Provider>
//         </div>
//         )
// }
// export default App;

// function Component2() {
//     return (
//     <>
//     <h1>Component 2</h1>
//     <Component3  />
//     </>
//     );
//     }

//     function Component3() {
//     return (
//     <>
//     <h1>Component 3</h1>
//     <Component4  />
//     </>
//     );
//     }

//     function Component4() {
//         return (
//         <>
//         <h1>Component 4</h1>
//         <Component5 />
//         </>
//         );
//         }
//         function Component5() {
       
//             const user=useContext(UserContext)
       
//         return (
//         <>
//         <h1>Component 5</h1>
//         <h2>{`Hello ${user} again!`}</h2>
//         </>
//         );
//         }


// export default App

// import React from 'react'
// import { useRef } from 'react'

// export const App = () =>
//  {
//     const inputelement=useRef();

//   function myfocuses()
// {
//     //let f=document.getElementById("myfocus")
//     inputelement.current.focus()
    
// }

//   return (
//     <div>
//         <input type="text" id='myfocus' ref={inputelement}/>

//         <button onClick={()=>myfocuses()}>click me</button>
//     </div>
//   )
// }
// export default App

//------------------------------------------nhi chala tha  useRef 3 problem--------------------------------------------

// import React from 'react'
// import { useEffect } from 'react';
// import { useRef } from 'react';
// import { useState } from 'react';

// const App = () =>
//  {

// const [inputValue , setInputValue ] = useState("");

// const previousInputValue = useRef("");
// useEffect(() => {
// previousInputValue.current = inputValue ;
// }, [inputValue ]);
// return (
// <>
// <input
// type="text"
// value={inputValue }
// onChange={(e) => setInputValue (e.target.value)}
// />
// <h2>Current Value: {inputValue }</h2>
// <h2>Previous Value: {previousInputValue .current}</h2>
// </>
// );
// }

// export default App

//---------------------------using memo----------------

// import React, { useCallback, useEffect } from 'react'
// import { useState } from 'react'
// import Todos from './peges/todos';

// const App = () => {

//    const [count , setCount] = useState(0);
//    const [todos , setTodos] = useState(["todo : 1","todo : 2"]);

//    const increment = () => {
//       setCount((countTemp) => countTemp + 1);
//       };

//     const addtodos =()=>
//     {
//       setTodos((temptodo)=>[...temptodo,"todo : 3"]);
//     }

//    return (
//       <>
//       <Todos todos={todos} />
//       <button onClick={addtodos}>add todos</button>
//       <hr />
//       <div>
//       Count: {count}
//       <button onClick={increment}>click</button>
//       </div>
//       </>
//       );
//       };

// export default App


//-----------------------------using callback ------------------------------


// const App = () => {

//    const [count , setCount] = useState(0);
//    const [todos , setTodos] = useState(["todo : 1","todo : 2"]);

//    const increment = () => {
//       setCount((countTemp) => countTemp + 1);
//       };

//     const addtodos = useCallback(
//       ()=>
//       {
//         setTodos((temptodo)=>[...temptodo,"todo : 3"]);
//       },[todos]
//     )
  

//    return (
//       <>
//       <Todos todos={todos}  addtodos={addtodos}/>
//       {/* <button onClick={addtodos}>add todos</button> */}
//       <hr />
//       <div>
//       Count: {count}
//       <button onClick={increment}>click</button>
//       </div>
//       </>
//       );
//       };

// export default App



//---------------- custom hook --------------------------------------------------------------



// import React, {useEffect } from 'react'
// import { useState } from 'react'
// import useFatch from './useFatch';
// // import Todos from './peges/todos';
// //import React from 'react'

// const App = () =>
//  {
//    const [data] = useFatch("https://jsonplaceholder.typicode.com/todos");
    
//    // const [data, setData] = useState(null);
//    // useEffect(() => {
//    // fetch("https://jsonplaceholder.typicode.com/todos")
//    // .then((res) => res.json())
//    // .then((data) => setData(data));
//    // }, []);
//    return (
//    <>
//    {/* {data &&
//    data.map((item) => {
//    return <p key={item.id}>{item.title}</p>;
//    })} */}
//    </>
//    );
// }

// export default App



