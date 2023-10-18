// import logo from './logo.svg';
import './App.css';
import React from 'react';


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












export default App;














