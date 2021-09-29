

import React from "react"



class List extends React.Component {
   
   fulltext=(text)=>{
     
    const itm=document.querySelector(".fullText");
    if (itm.style.display === "none") {
      
      itm.innerHTML=text;
      itm.style.display = "block";
     
    } 
    else {
      itm.style.display = "none";
    }


   }

   render() {
       return (
           
          
          this.props.todo.map((item,index) => {

            
               return (
                 
                <div key={index} className="TodoList">
                 
              <span style={{width: '32px'}}>{item.todoid}) </span> 
           <span>{item.todotext}</span>
           <div className="fullText"></div>
           <div className="DeletIcon">
           <li onClick={()=>this.props.delet(index)}  className="fas fa-trash-alt"></li>
           </div>
           <div className="EyeIcon">
              <i onClick={()=>this.fulltext(item.todotext)} id="eye" className="fas fa-eye"></i>
              
           </div>
          
           </div>

           


            ) })



       )
   }
}

export default List;

