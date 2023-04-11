import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from './Navbar';
import styled from 'styled-components';


const Headers = () => {
  return (
    <MainHeader>
     <NavLink to="/">
      <img src="./images/logo.jpg" alt="logo" className='logo' />
     </NavLink>
        
      <Navbar/>
    </MainHeader>
  )
}

const MainHeader = styled.header`
  padding: 7rem 4.8rem;
  height: 3rem;
  background-color: ${({theme})=>theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  .logo{
    height: auto;
    max-width: 80%;
    border-radius: 2rem;
  }
`;

export default Headers
