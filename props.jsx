import React from "react"


function Card(props){
    return(
      <div className="my-style">
        
        <h2>{props.name}</h2>
        <img
        src={props.img} />  
        
    <p>{props.tell}</p>
        <p>{props.email}</p>
  
        
          </div>
    )
  }
  
  
  
  
  export default Card;
  