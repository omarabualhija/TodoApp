import './App.css';
import React from 'react';
import Add from './add.js'
import List from './List.js';

class App extends React.Component  {


state={
  todo:[],

}

addtolist=(item)=>{

let x=this.state.todo;
x.push(item);
    
this.setState({
  todo:x
})
console.log(this.state)
}


deletitem=(indx) =>{
  

  let x=this.state.todo;
  x.splice(indx,1);

  this.setState({todo:x})
  
}





render(){
  return (
    <div id='root'>
    <div className="Box">
      <div className="Titel">todo list </div>
      <div className="BoxForm">

    <Add  addtolist={this.addtolist}/>
        <List todo={this.state.todo} delet={this.deletitem}></List>

</div>
    </div>
   </div>
  )
}}

export default App;
