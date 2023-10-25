// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
// import React from 'react';


//  class App extends React.Component
//  {
 
//    constructor(props)
//    {
//      super(props)
//      this.handleClick = this.handleClick.bind(this)
//    }
//     state = {todo: []}
  
//   handleClick(event)
//   {
//     event.preventDefault()
//          console.log("handleClick is clicked")
//         let newTodo = document.getElementById("addTodo").value
//          // let newTodoObject = {
//                 //   text: newTodo,
//                 //   id: new Date().getTime(),
//     // }
//     console.log("Text readed: "+newTodo)
//     // console.log(newTodoObject)
//     // //console.log(this.state)
//     this.state.todo.push(newTodo)
//     console.log(this.state)
//     document.getElementById("addTodo").value = ""
//     //this.setState({todo:this.state.todo})
//     //alert("clicked")
//   }

//   print()
//   {
//     console.log("Print")
//     console.log(this.state)
//   }
//      render()
//   {
//     this.print()
//     return <div>
//       <h1>ToDo list</h1>
//       <form onSubmit={this.handleClick}>
//         <input type="text" id='addTodo'/>
//        <button type='submit'>Add To-do</button>
//       </form>
//       {/* <div>
//         <button type='submit'>Click me</button>
//         {this.state.todo.map((tempTodo) =>
//           <div className='todo' key={tempTodo.id}>
//             <div className='todo-text'>{tempTodo.text}</div>
//           </div>)         }       </div> */}
//     </div>
//   }

// }
//  export default App


// class Ayush
// {
//     id 
//     name
//     contect
//     constructor(id,name,contect)
//     {
//         this.id=id
//         this.name=name
//         this.contact=contect
//     }
//     print()
//     {
//         console.log(this.id)
//         console.log(this.name)
//         console.log(this.contect)
//     }
//     }

// class Pooja extends Ayush
// {
//     addrres
//     constructor(id,name,contect,addrres)
//     {
//         this.addrres=addrres
//         super(id,name,contect,addrres)

//     }
//    pritff()
//    {
//     super.print();
//     console.log(this.addrres)
   
//    }

// }

// let dogne=new Pooja(1,"ayush",76543,"khandwa")
// dogne.pritff()

// }
 

// function App(props) {
//   console.log(props.color);
  
//   return (
//     <div className="App">
    
//     <button onClick={props.event}> click</button>
    
//     </div>
//   );
// }


// class App extends React.Component
// {
  
//   constructor(props)
//   {
//     super(props)
//   }
//   render()
//   {
//     return <button onClick={this.props.event}>click</button>
//   }
// }



// class App extends React.Component
// { 
//   constructor(props)
//   {
//     super(props)
//   }
//   state = {counter: 0}
//    incrementCounter = () =>
//    {
//    this.setState({counter:parseInt(this.state.counter)+1})
//    }
//
//   render()
//   {
//     return(
//       <div> <button onClick={this.incrementCounter}>click</button>
//     counter:{this.state.counter}
//     </div>
//     )
//   }
//
// }


// class App extends React.Component
// {
//   constructor(props)
//   {
//     super(props)
//     
//   }
  
//   static getDerivedStateFromProps()
//   
//   state={counter:0}
//   intcount=()=>
//   {
//     this.setState({counter:(this.state.counter)+2})
//   }
//   render()
  
//   {
//  
//     return(
//       <div>
//      <button onClick={this.intcount}>click kar </button>
//        counter:{this.state.counter}
//       </div>
//     )
//   }

// }



// class InnerComponent extends React.Component
// {
//   render()
//   {
//     return <div>Inner component is here</div>
//   }

//   componentDidMount()
//   {
//     console.log("####Mounting InnerComponent####")
//   }

//   componentWillUnmount()
//   {
//     console.log("****Unmounting InnerComponent****")
//   }

// }

// class App extends React.Component
// {
//   state = {counter:0, innerComponent:<InnerComponent/>}
//   constructor(props)
//   {
//     super(props)
//     console.log("I am inside Constructor")
//   }

//   static getDerivedStateFromProps()
//   {
//     console.log("I am inside getDerivedStateFromProps")
//     return true
//   }

//   shouldComponentUpdate()
//   {
//     console.log("Inside shouldComponentUpdate")
//     return true
//   }

//   incrementCounter = () => 
//   {
//     //updating state on function call
//     this.setState({counter:this.state.counter+1})
//     if(this.state.counter % 2 === 0)
//     {
//       this.setState({innerComponent:<InnerComponent/>})
//     }
//     else
//     {
//       this.setState({innerComponent:<div>Unmounted</div>})
//     }
    
//   }

//   // Overridden render function
//   render()
//   {
//     console.log("Inside the render method")
//     console.log(this.props)
//     return (
//         <div>
//           <button onClick={this.incrementCounter}>Click me</button>
//           <br/>
//           Counter:{this.state.counter}
//           <br/>
//           <div>{this.state.innerComponent}</div>
//         </div>
//     )
//   }

//   getSnapshotBeforeUpdate(prevProps, prevState)
//   {
//     console.log("Inside getSnapshotBeforeUpdate")
//     console.log("Previous Prop:")
//     console.log(prevProps)
//     console.log("Previous State:")
//     console.log(prevState)
//     console.log("--------------------")
//     console.log("Updated Prop:")
//     console.log(this.props)
//     console.log("Update State:")
//     console.log(this.state)
//     return true
//   }

//   componentDidMount()
//   {
//     console.log("I am inside componentDidMount")
//   }
// }


// class App extends React.Component
// {
//     constructor(props)
//     {
//         super(props)
//     }
//     state={counter:0}
//     componentDidMount()
//     {
//      console.log("the render method call first time");
//     }
//     ints=()=>
//     {
//         this.setState({counter:(this.state.counter)+1})
//     }

// componentDidUpdate(prevProps,prevState)
// {
//     console.log(prevProps)
//     console.log(prevState.counter)

//     if(prevProps!==prevState)
//     {
//         console.log("component updeted")
//     }
// }

//     render()
//     {
//         return(
//             <>
//             <h1>{this.state.counter}</h1>
//                 <button onClick={this.ints}>haooomre lala</button>
//             </>
//         )
//     }
// }





// const App = () =>
// {
//   let [todo, setTodo] = useState([]);

//   function handleClick(event)
//   {
//     event.preventDefault()
//     console.log("-------------------handleClick is clicked-------------------")
//     let newTodo = document.getElementById("addTodo").value
//     let newTodoObject = {
//       id: todo.length,
//       text: newTodo,
//       completed: false,
//     }
//     //console.log("Text readed: "+newTodo)
//     // console.log(newTodoObject)
//     //console.log(todo)
//     todo.push(newTodoObject)
//     //setTodo([...todo].concat(newTodoObject))
//     setTodo([...todo])
//     console.log(todo)
//     document.getElementById("addTodo").value = ""
//   }

//   function deleteTodo(id)
//   {
//     //event.preventDefault()
//     console.log("-------------------Delete button called!-------------------")
//     console.log(todo)
//     let udatedTodo = todo.filter((tempTodo)=>  tempTodo.id !== id)
//     console.log("Update Array: "+udatedTodo)
//     setTodo(udatedTodo)
//     console.log(todo)
//   }
  
//   return <div>
//        <h1>ToDo list</h1>
//        <form onSubmit={handleClick}>
//          <input type="text" id='addTodo'/>
//          <button type='submit'>Add To-do</button>
//        </form>
//        <div>
//           {todo.map((tempTodo) =>
//             {
//               return <div id="todoListID">
//                 <div id="todoTextId">{tempTodo.text}</div>
//                 <button onClick={()=>deleteTodo(tempTodo.id)}>Delete</button>
//                 </div>
//             })
//           }          
//       </div>
//     </div>

//  }




let App=()=>
{
  let [todo, settodo]=useState([])
  
  function hendaltodo(event)
  {
    event.preventDefault()
    console.log("----------runn--------");
    let newtodo=document.getElementById("addtodo").value
    let newtodoobject=
    {
      id:todo.length,
      text:newtodo,
    }
    todo.push(newtodoobject)
    console.log(todo)
    settodo([...todo])
    document.getElementById("addtodo").value=""
  }
    function deletetodo(id)
    {
      console.log("------runn delete---------")
      let updatetodo=todo.filter((temptodo)=>temptodo.id!==id)
      settodo(updatetodo)
      console.log(updatetodo)

    } 
  
  return(
    <div className='mandiv'>
      <h1 className='ss'>ADD TODO LIST</h1>
      <form onSubmit={hendaltodo}>
        <input type="text" placeholder='Enter any list' id='addtodo'/>
        <input type="submit" id='style' />
      </form>
      
       <div>
        {todo.map((temptodo)=>
        {
          return(
          <>
            <div className='ss'>{temptodo.text}</div>
          <button onClick={()=>deletetodo(temptodo.id)} id='style'>delete</button>
          </>
          )
        })}
       </div>


    </div>
  )
}





export default App;














