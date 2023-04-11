import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';


const Navbar = () => {

  const Nav = styled.nav`
    .menuItem-list{
      display: flex;
      gap: 4rem; 
      margin-right: 2rem;

    .navLink{
      &:link,
      &:visited{
        display: inline-block;
        font-size: 1.8rem;
        text-transform: uppercase;
        color: ${({ theme }) => theme.colors.black};
        transition: all 0.5s linear;
      }
      &:active,
      &:hover{
        color: ${({ theme }) => theme.colors.helper};
      }
    }
    }
  `;
  return (
    <Nav>
      <ul className="menuItem-list">
        <li><NavLink className="navLink" to="/">Home</NavLink></li>
        <li><NavLink className="navLink" to="/about">About</NavLink></li>
        <li><NavLink className="navLink" to="/services">services</NavLink></li>
        <li><NavLink className="navLink" to="/contacts">contacts</NavLink></li>
      </ul>
    </Nav>
  )
}

export default Navbar
