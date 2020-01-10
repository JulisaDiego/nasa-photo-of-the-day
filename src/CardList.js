import React, {useState, useEffect} from "react";
import axios from "axios";
import "./App.css";
import Cards from "./Cards";


function CardList(){
    const [nasaImage, setImage]= useState([]);

    useEffect(() => {

        axios 
        .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
        .then(response => {
            console.log(response.data)
            setImage(response.data)
        })
        .catch(error => {
            console.log(error);
        })
}, []); 

return (
    
   
        
    <div>
      <Cards 
      key={nasaImage.data}
      title={nasaImage.title}
      hdurl={nasaImage.hdurl}
      date={nasaImage.date}
      explanation={nasaImage.explanation}
      copyright={nasaImage.copyright}
      />
    </div>
      
  
   
)
};

export default CardList;
