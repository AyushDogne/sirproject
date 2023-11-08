

import React from "react"

// chlid component okay
class Innercomponent extends React.Component 
{

  constructor(props)
   {
    super(props)
  }
  render()
   {
    const style={color:this.props.color}
    return (
      <div>
      chiled says:
      <span style={style}>{this.props.name}</span>
      </div>
    )
  }
}



// perent component
class App extends React.Component 
{
  state={color:"black",name:"Ayush"}

   changecolor=()=>
   {
    const colorText=document.getElementById("colorText").value
    this.setState({color:colorText})
   }
changename=()=>
{
  let namechange=document.getElementById("namechange").value
  this.setState({name:namechange})
}


  render()
   {
    return (
      <div>
     
     Color <input type="text" placeholder="Enter color here" onChange={this.changecolor} id="colorText"/><br/>
     Name <input type="text" placeholder="Eneter name here" onChange={this.changename} id="namechange" />
     <Innercomponent color={this.state.color} name={this.state.name}/>
      </div>
    )

  }
}

export default App