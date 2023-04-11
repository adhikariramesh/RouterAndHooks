import React, { useState } from 'react';
import styled from 'styled-components';
import { Button } from "./components/buttons/Button";
import Menu from "./components/Api";

const Services = () => {
  const [menuList, setMenuList] = useState(Menu);
  return (
    <Wrapper>
      <h2>Our Services</h2>
      <div className="container grid grid-four-column">
{
  menuList.map((currentElmnt)=>{
    const {img, text} = currentElmnt;
      return(
          <>
          <div className="card">
          <div className="img-body">
            <img src={img} alt="image" />
          </div>
          <p>{text}</p>
          <Button className='btn '>Read more..</Button>
        </div>
          
          </>
      )
        
  })
}

        
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`

  h2{
      padding-bottom: 5rem;
    }
  .card{
      border: 2px solid black;
      border-radius: 1rem;
      transition: all 0.3s ease-in-out;
      box-shadow: 0px 5px 5px black;
    }
    .card:hover{
      transform: scale(0.8);
    }
  .img-body{
    width: 100%;
    position: relative;
  }
  .img-body::after{
    content: "";
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    position: absolute;
    top: 0;
    left: 0;
    transition: all 0.5s ease-in-out;
    opacity: 0;
    transform: rotateX(270deg);
    z-index: 0;
    transform-origin: top;
  }
  .img-body:hover::after{
    opacity: 1;
    transform: rotate(0deg);
  }
  .img-body img{
    width: 100%;
    border-radius: 1rem 1rem 0 0;
    z-index: 1;
  }
  p{
    padding:0 1rem;
  }
  .btn{
      background-color: white;
      color: black;
      border: 1px solid black;
      margin: 1rem 2rem;
  }
    .btn:hover{
      background-color: green;
      color: white;
    }
`;

export default Services
