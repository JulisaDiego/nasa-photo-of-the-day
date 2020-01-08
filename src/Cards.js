import React from "react"





const Cards= props =>{
    console.log(props);


 return (
     
        <div>
       <div>
          <h1>{props.title}</h1>
            <h2>{props.date}</h2>
            <img src={props.hdurl} alt="NASA POTD" />
        <div>
            <h3>Description:</h3>
            <p>{props.explanation}</p>
           </div>
         </div>
        </div>
        
 )
}
export default Cards; 