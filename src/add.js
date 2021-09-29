import React from 'react';


class Add extends React.Component  {

handelchange=this.handelchange.bind(this);//or add to onChange
handelform=this.handelform.bind(this);
state={
todotext:"",
todoid:""

}

handelchange(e){

    this.setState({[e.target.id]:e.target.value})

  
 }



 
   
 
 handelform(e){
     e.preventDefault();
    if(this.state.todotext!=="" && this.state.todoid!=="")
    {
    this.props.addtolist(this.state)
    this.setState({todotext:"",todoid:""})
    }
    else {
      e.preventDefault();
    }
 }

   render(){
  
    return (
      <div>
        
        <form onSubmit={this.handelform} >
          <input maxLength = "2"  id='todoid' type="number" onChange={this.handelchange} value={this.state.todoid} placeholder=" #"></input>
    <input maxLength = "400" autoComplete="off"  id='todotext' type="text" className="" placeholder="Enter Todo Here" onChange={this.handelchange.bind(this)} value={this.state.todotext}></input>
    <input autoComplete="off" type="Submit" className="" placeholder="Enter"></input>
  </form>
  
      </div>
    )
  }

}
  export default Add;