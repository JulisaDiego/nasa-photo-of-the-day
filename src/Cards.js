import React from "react"
import styled from "styled-components"

const Title = styled.h2`
font-size: 2rem;
color: #ff6464;

`

const Description = styled.h3`
font-size: 2rem;
color: #ff6464
margin-top: 2%;
margin-bottom: 2%
`

const Date = styled.h3`
font-size: 1.4rem;
color: #ff6464;
`
const CardBody = styled.div`
background-image: linear-gradient(#202060, #602080);
background-repeat: no-repeat;
width: 70%;
margin: auto;
border-radius: 3%;
`
const CardText = styled.p`
padding-top 0;
padding-left: 5%;
padding-right: 5%;
padding-bottom: 5%;
color: #ff6464;
width: 60%;
margin: auto;
`

const Cards= props =>{
    console.log(props);


 return (
     
        <div>
      <CardBody>
          <Title>{props.title}</Title>
            <Date>{props.date}</Date>
            <img src={props.hdurl} alt="NASA POTD" />
       <div>
            <Description>Description:</Description>
            <CardText>{props.explanation}</CardText>
           </div>
         </CardBody>
        </div>
        
 )
}


export default Cards; 