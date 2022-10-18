import React from 'react'
import styled from 'styled-components'
import { AiOutlineMenu } from "react-icons/ai";

const MenuBarStyle = styled.div`
  background-color: #FF7D36;
  padding: 5px;
  width: 100%;
  text-align: right;

  .nav-hamburger {
    padding: 5px;
    margin-right: 10px;
    cursor: pointer;
  }

`;

const Nav = () => {
  return (
    <MenuBarStyle className="menuBar">
      <AiOutlineMenu className='nav-hamburger' size={30} color="white" />
    </MenuBarStyle>
  );
}

export default Nav