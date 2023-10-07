import logo from './logo.svg';
import './App.css';
import React from 'react';

// function App(props) {
//   console.log(props.color);
  
//   return (
//     <div className="App">
    
//     <button onClick={props.clickEvent}> click</button>
//     </div>
//   );
// }


class App extends React.Component
{
  constructor(props)
  {
    super(props)
  }
  render()
  {
    console.log(this.props)
    return  <button onClick={this.props.clickEvent}> click</button>  
  }

}

export default App;
