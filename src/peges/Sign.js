
// import React from 'react'
// import { createStore } from "redux";

// const reducer = (state = 0, action) => {
//   switch (action.type) {
//     case "+":
//       {
//         return state + action.payload;
//       }

//     case "-":
//       {
//         return state - action.payload;
//       }

//     default:
//       return state;

//   }
// }

// const store = createStore(reducer);

// const Sign = () => {

//   store.subscribe(() => {
//     console.log("current state", store.getState());
//   });


  
//   const increamentCount = () =>
//   {
//     store.dispatch({
//       type: "+",
//       payload: document.perseintgetElementById("value").value
//     });
//   }
//   const decreamentCount = () =>
//   {
//     store.dispatch({
//       type: "-",
//       payload: document.getElementById("value").value

//     });
//   }

//   return (
//     <div>
//       sign
//     <br/>
//     count : {store.getState()}
//     <input type="text" placeholder='enter any value' id='value'/>

//     <br/>

//     <button onClick={increamentCount}>increamentCount</button>
//     <button onClick={decreamentCount}>decreamentCount</button>

//     </div>
//   )
// }

// export default Sign